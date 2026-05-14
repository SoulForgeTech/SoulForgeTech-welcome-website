"""
One-shot script: generate voice sample MP3s for the Voice section of the
landing page using Fish Audio TTS.

5 swatches × 2 languages = 10 mp3s. Each swatch has a paired EN and ZH voice
so that the tape strips play in the page's current language.

Requires the FISH_AUDIO_KEY environment variable. Does NOT read or write any
secret to disk. Output goes to ../public/voices/*.mp3.

Run once after configuring the env var:
    $env:FISH_AUDIO_KEY = "<your-key>"
    py scripts/generate-voice-samples.py
"""

import os
import sys
import pathlib
import urllib.request
import urllib.error
import json

FISH_AUDIO_KEY = os.getenv("FISH_AUDIO_KEY", "").strip()
FISH_AUDIO_TTS_URL = "https://api.fish.audio/v1/tts"

# Matches the 5 swatches in src/v3/Voice.jsx. Order must match.
# ref_id values mirror prototype/backend/voice_service.py VOICE_MAP_{EN,ZH}.
SWATCHES = [
    {
        "slug": "warm",
        "en": {"ref_id": "728f6ff2240d49308e8137ffe66008e2",  # Adam
               "text":   "Hey. You up? I was just thinking about you."},
        "zh": {"ref_id": "4d0e64e39e4b4f31a816f133795c0db5",  # 暖男 / 冯老师
               "text":   "嗯，你睡了吗？我刚刚在想你。"},
    },
    {
        "slug": "bright",
        "en": {"ref_id": "9fad12dc142b429d9396190b0197adb8",  # Soft E-Girl
               "text":   "Wait, really? Tell me more, I want to know."},
        "zh": {"ref_id": "e488ebeadd83496b97a3cd472dcd04ab",  # 可爱学妹
               "text":   "诶，真的吗？快告诉我，我想知道。"},
    },
    {
        "slug": "quiet",
        "en": {"ref_id": "8ef4a238714b45718ce04243307c57a7",  # Gentle Girl
               "text":   "It's okay. I'm here. Take your time."},
        "zh": {"ref_id": "fbe02f8306fc4d3d915e9871722a39d5",  # 温柔姐姐
               "text":   "没事的，我在，慢慢说。"},
    },
    {
        "slug": "dry",
        "en": {"ref_id": "8bed0e9b444046e2bf72da4b251d9a1d",  # Marcus
               "text":   "Oh, brilliant. That's exactly what we needed today."},
        "zh": {"ref_id": "f7561ff309bd4040a59f1e600f4f4338",  # 酷男孩 / 黑手
               "text":   "哦，真厉害，今天就缺这个。"},
    },
    {
        "slug": "cheerful",
        "en": {"ref_id": "59e9dc1cb20c452584788a2690c80970",  # ALLE
               "text":   "Guess what — I have so much to tell you today!"},
        "zh": {"ref_id": "5c353fdb312f4888836a9a5680099ef0",  # 元气少女
               "text":   "你猜怎么着 —— 今天有好多事要跟你说！"},
    },
]

OUT_DIR = pathlib.Path(__file__).resolve().parent.parent / "public" / "voices"


def synth_one(ref_id: str, text: str) -> bytes:
    payload = json.dumps({
        "text": text,
        "reference_id": ref_id,
        "format": "mp3",
    }).encode("utf-8")
    req = urllib.request.Request(
        FISH_AUDIO_TTS_URL,
        data=payload,
        headers={
            "Authorization": f"Bearer {FISH_AUDIO_KEY}",
            "Content-Type":  "application/json",
        },
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=60) as resp:
        return resp.read()


def main() -> int:
    if not FISH_AUDIO_KEY:
        print("ERROR: set FISH_AUDIO_KEY env var first.", file=sys.stderr)
        print('  $env:FISH_AUDIO_KEY = "<your-key>"', file=sys.stderr)
        return 2

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    failures = 0
    total = 0
    for sw in SWATCHES:
        for lang in ("en", "zh"):
            entry = sw[lang]
            filename = f"{sw['slug']}-{lang}.mp3"
            out = OUT_DIR / filename
            total += 1
            print(f"→ {filename:18s} ({entry['ref_id'][:8]}…) ", end="", flush=True)
            try:
                audio = synth_one(entry["ref_id"], entry["text"])
                out.write_bytes(audio)
                print(f"OK ({len(audio):,} bytes)")
            except urllib.error.HTTPError as e:
                body = e.read().decode("utf-8", errors="replace")[:200]
                print(f"FAIL HTTP {e.code}: {body}")
                failures += 1
            except Exception as e:
                print(f"FAIL {type(e).__name__}: {e}")
                failures += 1

    if failures:
        print(f"\n{failures}/{total} failed.", file=sys.stderr)
        return 1
    print(f"\nWrote {total} files to {OUT_DIR}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
