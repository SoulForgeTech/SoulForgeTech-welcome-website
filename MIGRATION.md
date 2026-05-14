# Assets to carry over from the old project

The new design (`SoulLink Landing Page/`) is the canonical project going forward. Do NOT merge or migrate code from the old project — it's only a reference for brand assets and existing contact info.

Treat `SoulForgeTech-welcome-website/` as a read-only asset library. Open files inside it only to find things to copy over to the new project. NEVER modify anything inside it.

## What to find in `SoulForgeTech-welcome-website/` and where to put it in `SoulLink Landing Page/`

Search the old project for each item below. If found, copy it to the indicated location in the new project. If not found, note as `NOT FOUND` in your report — we'll decide what to do later.

### 1. Logo files

- Look in: `public/`, `assets/`, `static/`, `src/assets/`, `images/` — any directory holding `.svg`, `.png`, `.ico`, `.webp` files with names containing `logo`, `mark`, `brand`, `icon`, `favicon`
- Copy to: `SoulLink Landing Page/public/`
- Update references in: `SoulLink Landing Page/src/components/Nav.tsx` (or wherever the placeholder "s" red square logo currently lives — there are two nav files, one for `/` and one for `/platform`)
- Also update: `<link rel="icon">` in `app/layout.tsx` or `pages/_document.tsx`

### 2. Contact email address

- Look in: source code (search for `@` strings, `mailto:` links), Footer/Colophon components, README, `.env*` files
- Copy to: replace `hello@soullink.diary` and `hello@soulforge.platform` placeholders in the new project's Colophon sections (both `/` and `/platform`)

### 3. Production domain / URL

- Look in: `package.json` (homepage field), `README.md`, `vercel.json`, `next.config.js`, `.env*`, any `<link rel="canonical">` tag
- Use it to: set the canonical URL in the new project's metadata, OG tags, and any "see our site" references

### 4. Social handles

Search for these strings in old project:
- `twitter.com/`, `x.com/`
- `bilibili.com/`, `b23.tv/`
- `discord.gg/`, `discord.com/invite/`
- `linkedin.com/company/`
- `github.com/`
- `xiaohongshu.com/`

Copy any found handles to: Colophon sections of both `/` and `/platform` in the new project. Replace the `@soullink_zine`, `@soulforge`, etc. placeholders.

### 5. Calendly / scheduling link

- Look for: `calendly.com/`, `cal.com/`, or any meeting-link strings
- Wire to: `Talk to us →` CTA on `/platform` Hero (currently a placeholder `#` or similar)

### 6. Real team member names (if listed in old project)

- Look in: about page, footer, README contributors section
- Copy to: replace `Editor-in-chief — [ ]` and `Engineering — [ ]` placeholders in both Colophon sections

### 7. Any existing taglines / brand copy worth preserving

- Look at: hero text, about text, README description
- DO NOT automatically replace anything in the new project — just report what you found. The new design's copy is locked (see BRIEF.md brand voice). But if there's a memorable line that could be a small touchpoint addition (e.g., a single sentence for an About section), report it for me to consider.

### 8. Production env vars / API keys (DO NOT copy values into source files)

If the old project has `.env*` files with real keys (analytics, form endpoints, etc.):
- Create `SoulLink Landing Page/.env.example` listing the variable NAMES (no values)
- Report which keys exist in the old project's env files
- I will manually set the real values in `.env.local` of the new project — don't ever paste real keys into git-tracked files

## Output format

Produce a single Markdown report like this:

```
# Asset Carry-Over Report

## Logo files
- Found: `path/to/logo.svg` in old project → copied to `SoulLink Landing Page/public/logo.svg`
- Updated references in: `src/components/Nav.tsx`, etc.
- Favicon: [found / not found]

## Contact email
- Found: `hello@soulforge.tech` in `src/components/Footer.tsx`
- Replaced placeholders in: [list files updated]

## Domain
- Found: `https://soulforge.tech` in `package.json` homepage field
- Updated metadata in: `src/app/layout.tsx`

## Social handles
- Twitter: `@soulforge_ai` → replaced in Colophon
- Bilibili: NOT FOUND
- Discord: NOT FOUND

## Calendly
- [Found / Not found]

## Team names
- [list, or NOT FOUND]

## Existing copy worth considering
- [list any interesting lines, NO automatic replacement]

## Env vars discovered in old project
- VITE_GA_ID
- FORMSPARK_FORM_ID
- (etc. — names only, no values)
```

After the report, STOP. I'll review and tell you what to actually wire up vs hold off on.

## Hard rules

- NEVER modify files in `SoulForgeTech-welcome-website/` — it's read-only reference
- NEVER paste real API key values or env secrets into any tracked file
- If something is unclear (e.g., found multiple potential logos in old project), STOP and ask which one — don't auto-pick
- The new design's content / copy / structure is locked per BRIEF.md — don't replace it with old project copy, only fill in placeholders