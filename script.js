/**
 * SoulForge Tech - Website Script
 * Handles i18n, navigation, scroll animations, and forms
 */

// ==========================================
// i18n Translations
// ==========================================

const translations = {
    'zh-CN': {
        // Nav
        'nav.products': '产品',
        'nav.technology': '核心技术',
        'nav.roadmap': '路线图',
        'nav.team': '团队',
        'nav.contact': '联系我们',
        'nav.cta': '体验 SoulLink',

        // Hero
        'hero.badge': '$200K 种子轮融资中 | AI 情感陪伴先驱',
        'hero.title1': '懂你的 AI',
        'hero.title2': '持久的陪伴',
        'hero.subtitle': 'SoulLink 根据你独特的性格生成专属 AI 伙伴 — 记住一切、与你成长、随时陪伴。',
        'hero.stat1': 'TAM: 全球 AI 伴侣市场',
        'hero.stat2': 'SAM: 美国 18-30 岁',
        'hero.stat3': 'SOM: 5 年目标',
        'hero.cta1': '体验 SoulLink Beta',
        'hero.cta2': '了解更多',
        'hero.source': '来源: Grand View Research 2024, Market.us, Statista',

        // Products
        'products.title': '我们的产品',
        'products.subtitle': '从游戏 Mod 到 AI 陪伴，我们创造有灵魂的数字生命。',
        'products.ai.badge': '公测中',
        'products.ai.title': 'SoulLink AI 陪伴',
        'products.ai.desc': '根据你的性格测试生成专属 AI 伙伴 — 记住一切、与你成长、随时可聊。',
        'products.ai.f1': '基于性格的 AI 生成',
        'products.ai.f2': '跨对话长期记忆',
        'products.ai.f3': '$9.99/月 Premium 完整历史记录',
        'products.ai.cta': '立即体验',
        'products.mod.badge': '即将发布',
        'products.mod.title': '星露谷物语 AI Mod',
        'products.mod.desc': '免费 AI 驱动的 NPC 对话系统。在游戏中体验 AI 陪伴，再延伸到移动端。',
        'products.mod.f1': '免费用户获取入口',
        'products.mod.f2': 'AI 驱动的情感记忆 NPC',
        'products.mod.f3': 'Steam Workshop & Reddit 社区',
        'products.mod.cta': '加入等待列表',

        // Technology
        'tech.title': '核心技术',
        'tech.subtitle': '超越简单检索 — 我们的 AI 理解因果关系，而不仅仅是相似性。',
        'tech.causal.title': '因果推理引擎',
        'tech.causal.desc': '不同于传统向量数据库按相似度匹配，我们的因果图谱能理解事件发生的原因，并预测情感轨迹。',
        'tech.personality.title': '性格画像系统',
        'tech.personality.desc': '塔罗牌性格测试将用户映射为独特的性格画像。AI 会根据你的真实性格调整行为、语气和建议。',
        'tech.privacy.title': '隐私优先架构',
        'tech.privacy.desc': '端到端加密，每个用户独立知识库，并持续推进完全本地化的设备端 AI 处理。',
        'tech.cross.title': '跨平台记忆',
        'tech.cross.desc': 'AI 伙伴的记忆跨平台延续 — 从星露谷 Mod 到移动应用，始终保持对你的统一理解。',
        'tech.compare.old': '传统 AI',
        'tech.compare.old.desc': '向量检索：「你之前也提到过压力大」',
        'tech.compare.new': 'SoulLink AI',
        'tech.compare.new.desc': '因果推理：「工作延期导致压力上升，根据过往模式建议你联系朋友」',

        // Roadmap
        'roadmap.title': '12 个月路线图',
        'roadmap.subtitle': '$200K 种子轮 · 35% 产品 · 25% 营销 · 20% 增长 · 20% B2B & 运营',
        'roadmap.p1.title': '全栈开发',
        'roadmap.p1.m1': '核心 AI 引擎 + 记忆系统',
        'roadmap.p1.m2': '星露谷 Mod 开发',
        'roadmap.p1.m3': '移动端 MVP (iOS & Android)',
        'roadmap.p2.title': '发布 & 早期增长',
        'roadmap.p2.m1': 'Mod 上线 Steam Workshop',
        'roadmap.p2.m2': 'App 公开发布',
        'roadmap.p2.m3': '5K Mod 下载，2K App 下载',
        'roadmap.p3.title': '增长 & 优化',
        'roadmap.p3.m1': '健康报告功能',
        'roadmap.p3.m2': 'Premium 订阅上线',
        'roadmap.p3.m3': '10K App 用户，1K 付费订阅',
        'roadmap.p4.title': 'B2B & 规模化',
        'roadmap.p4.m1': 'B2B API & 管理面板',
        'roadmap.p4.m2': '首批企业合同',
        'roadmap.p4.m3': '25K 总用户，$120K ARR',

        // Team
        'team.title': '创始团队',
        'team.subtitle': '用技术与热爱构建未来',
        'team.ceo.role': 'CEO & 联合创始人',
        'team.ceo.degree': '计算机工程硕士',
        'team.ceo.exp': '深信服科技（云计算）；微服务与后端架构。',
        'team.ceo.skill1': '云计算',
        'team.ceo.skill2': '微服务',
        'team.ceo.skill3': '后端架构',
        'team.cto.role': 'CTO & 联合创始人',
        'team.cto.degree': '计算机科学硕士 (AI)',
        'team.cto.exp': 'AI 专业方向，vivo 产品规划；FutureFab.AI (RAG 系统)。',
        'team.cto.skill1': 'AI / ML',
        'team.cto.skill2': 'RAG 系统',
        'team.cto.skill3': '产品规划',

        // Waitlist & Contact
        'waitlist.title': '抢先体验',
        'waitlist.desc': '加入等待列表，成为首批体验 SoulLink AI 的用户。',
        'waitlist.placeholder': '输入你的邮箱',
        'waitlist.btn': '立即加入',
        'waitlist.note': '我们尊重你的隐私，绝不发送垃圾邮件。',
        'waitlist.success': '加入成功！我们会尽快联系你。',
        'contact.email': '邮箱',
        'contact.social': '社交媒体',
        'contact.location': '位置',
        'contact.location.value': 'Houston, TX · Riverside, CA',
        'contact.form.title': '给我们留言',
        'contact.form.name': '你的名字',
        'contact.form.email': '你的邮箱',
        'contact.form.message': '想说的话...',
        'contact.form.submit': '发送消息',

        // Footer
        'footer.copy': '© 2026 SoulForge Tech. All rights reserved.',
        'footer.tagline': '用技术锻造灵魂的温度。',
    },

    'en': {
        // Nav
        'nav.products': 'Products',
        'nav.technology': 'Technology',
        'nav.roadmap': 'Roadmap',
        'nav.team': 'Team',
        'nav.contact': 'Contact',
        'nav.cta': 'Try SoulLink',

        // Hero
        'hero.badge': '$200K Seed Round | AI Companion Pioneer',
        'hero.title1': 'AI That Understands',
        'hero.title2': 'Companionship That Lasts',
        'hero.subtitle': 'SoulLink creates a personalized AI companion based on your unique personality — someone who remembers everything, grows with you, and is always there.',
        'hero.stat1': 'TAM: Global AI Companion',
        'hero.stat2': 'SAM: US Market (18-30)',
        'hero.stat3': 'SOM: 5-Year Target',
        'hero.cta1': 'Try SoulLink Beta',
        'hero.cta2': 'Learn More',
        'hero.source': 'Sources: Grand View Research 2024, Market.us, Statista',

        // Products
        'products.title': 'Our Products',
        'products.subtitle': 'From game mods to AI companions, we create digital souls with warmth.',
        'products.ai.badge': 'Live Beta',
        'products.ai.title': 'SoulLink AI Companion',
        'products.ai.desc': 'A personalized AI companion generated based on YOUR personality test — someone who remembers everything, grows with you, and is always there when you need to talk.',
        'products.ai.f1': 'Personality-based AI generation',
        'products.ai.f2': 'Long-term memory across all conversations',
        'products.ai.f3': '$9.99/mo Premium with full history',
        'products.ai.cta': 'Try Now',
        'products.mod.badge': 'Coming Soon',
        'products.mod.title': 'Stardew Valley AI Mod',
        'products.mod.desc': 'Free AI-powered NPC dialogue system for Stardew Valley. Experience AI companionship in-game, then take it to the real world with our mobile app.',
        'products.mod.f1': 'Free user acquisition funnel',
        'products.mod.f2': 'AI-driven NPC with emotional memory',
        'products.mod.f3': 'Steam Workshop & Reddit community',
        'products.mod.cta': 'Join Waitlist',

        // Technology
        'tech.title': 'Core Technology',
        'tech.subtitle': 'Beyond simple retrieval — our AI understands causality, not just similarity.',
        'tech.causal.title': 'Causal Reasoning Engine',
        'tech.causal.desc': 'Unlike traditional vector databases that match by similarity, our causal graph understands why events happen and predicts emotional trajectories.',
        'tech.personality.title': 'Personality Profiling',
        'tech.personality.desc': 'Our tarot-based personality test maps users into unique profiles. The AI adapts its behavior, tone, and suggestions based on who you truly are.',
        'tech.privacy.title': 'Privacy-First Architecture',
        'tech.privacy.desc': 'End-to-end encryption, individual knowledge bases per user, and a roadmap toward fully local on-device AI processing.',
        'tech.cross.title': 'Cross-Platform Memory',
        'tech.cross.desc': "Your AI companion's memory follows you across platforms — from Stardew Valley mods to mobile apps, maintaining a unified understanding of you.",
        'tech.compare.old': 'Traditional AI',
        'tech.compare.old.desc': 'Vector search: "You mentioned stress before"',
        'tech.compare.new': 'SoulLink AI',
        'tech.compare.new.desc': 'Causal reasoning: "Work deadline caused stress, suggesting you call a friend based on past patterns"',

        // Roadmap
        'roadmap.title': '12-Month Roadmap',
        'roadmap.subtitle': '$200K Seed \u00B7 35% Product \u00B7 25% Marketing \u00B7 20% Growth \u00B7 20% B2B & Ops',
        'roadmap.p1.title': 'Full-Stack Build',
        'roadmap.p1.m1': 'Core AI engine + memory system',
        'roadmap.p1.m2': 'Stardew Valley mod development',
        'roadmap.p1.m3': 'Mobile app MVP (iOS & Android)',
        'roadmap.p2.title': 'Launch & Early Traction',
        'roadmap.p2.m1': 'Mod live on Steam Workshop',
        'roadmap.p2.m2': 'App public launch',
        'roadmap.p2.m3': '5K mod downloads, 2K app downloads',
        'roadmap.p3.title': 'Growth & Optimize',
        'roadmap.p3.m1': 'Wellness report feature',
        'roadmap.p3.m2': 'Premium subscription live',
        'roadmap.p3.m3': '10K app users, 1K paying subscribers',
        'roadmap.p4.title': 'B2B & Scale',
        'roadmap.p4.m1': 'B2B API & dashboard',
        'roadmap.p4.m2': 'First enterprise contracts',
        'roadmap.p4.m3': '25K total users, $120K ARR',

        // Team
        'team.title': 'Founding Team',
        'team.subtitle': 'Building the future with technology and passion',
        'team.ceo.role': 'CEO & Co-Founder',
        'team.ceo.degree': 'MS Computer Engineering',
        'team.ceo.exp': 'Sangfor Technologies (Cloud Computing). Microservices & Backend Architecture.',
        'team.ceo.skill1': 'Cloud Computing',
        'team.ceo.skill2': 'Microservices',
        'team.ceo.skill3': 'Backend Architecture',
        'team.cto.role': 'CTO & Co-Founder',
        'team.cto.degree': 'MS Computer Science (AI)',
        'team.cto.exp': 'AI Specialization, vivo Product Planning. FutureFab.AI (RAG Systems).',
        'team.cto.skill1': 'AI / ML',
        'team.cto.skill2': 'RAG Systems',
        'team.cto.skill3': 'Product Planning',

        // Waitlist & Contact
        'waitlist.title': 'Get Early Access',
        'waitlist.desc': 'Join our waitlist to be among the first to experience SoulLink AI.',
        'waitlist.placeholder': 'your@email.com',
        'waitlist.btn': 'Join Waitlist',
        'waitlist.note': 'We respect your privacy. No spam, ever.',
        'waitlist.success': 'You\'re in! We\'ll be in touch soon.',
        'contact.email': 'Email',
        'contact.social': 'Social',
        'contact.location': 'Location',
        'contact.location.value': 'Houston, TX · Riverside, CA',
        'contact.form.title': 'Send us a message',
        'contact.form.name': 'Your name',
        'contact.form.email': 'Your email',
        'contact.form.message': 'Your message...',
        'contact.form.submit': 'Send Message',

        // Footer
        'footer.copy': '\u00A9 2026 SoulForge Tech. All rights reserved.',
        'footer.tagline': 'Forging warmth into technology.',
    }
};

// ==========================================
// State
// ==========================================
let currentLang = 'zh-CN';

// ==========================================
// i18n Functions
// ==========================================

function setLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    if (!t) return;

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.textContent = t[key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) {
            el.placeholder = t[key];
        }
    });

    // Update html lang
    document.documentElement.lang = lang === 'zh-CN' ? 'zh-CN' : 'en';

    // Update active lang button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Save preference
    try {
        localStorage.setItem('soulforge-lang', lang);
    } catch (e) {}
}

// ==========================================
// Navigation
// ==========================================

function initNav() {
    const nav = document.getElementById('nav');
    const hamburger = document.getElementById('navHamburger');
    const navLinks = document.getElementById('navLinks');

    // Scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        nav.classList.toggle('scrolled', scrollY > 50);
        lastScroll = scrollY;
    }, { passive: true });

    // Hamburger toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        navLinks.classList.toggle('open');
    });

    // Close mobile menu on link click
    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            navLinks.classList.remove('open');
        });
    });

    // Active nav link on scroll
    const sections = document.querySelectorAll('.section[id]');
    const navLinkEls = document.querySelectorAll('.nav-link');

    const updateActiveLink = () => {
        const scrollY = window.scrollY + 120;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollY >= top && scrollY < top + height) {
                navLinkEls.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    };

    window.addEventListener('scroll', updateActiveLink, { passive: true });
    updateActiveLink();
}

// ==========================================
// Scroll Reveal Animation
// ==========================================

function initReveal() {
    // Hero elements should be visible immediately (no scroll needed)
    document.querySelectorAll('.hero .reveal').forEach(el => {
        el.classList.add('visible');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
        observer.observe(el);
    });
}

// ==========================================
// Forms (connected to backend API)
// ==========================================

const API_BASE = 'https://api.soulforgetech.com';

function initForms() {
    // Waitlist form
    const waitlistForm = document.getElementById('waitlistForm');
    if (waitlistForm) {
        waitlistForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const input = waitlistForm.querySelector('input[type="email"]');
            const btn = waitlistForm.querySelector('button');
            const email = input.value.trim();
            if (!email) return;

            const originalText = btn.textContent;
            btn.disabled = true;
            btn.textContent = currentLang === 'zh-CN' ? '提交中...' : 'Submitting...';

            try {
                const res = await fetch(`${API_BASE}/api/waitlist`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, source: 'website' })
                });
                const data = await res.json();

                if (res.ok && data.success) {
                    const t = translations[currentLang];
                    btn.textContent = t['waitlist.success'] || "You're in!";
                    btn.style.background = '#10b981';
                    input.value = '';
                } else {
                    btn.textContent = currentLang === 'zh-CN' ? '提交失败，请重试' : 'Failed, try again';
                    btn.style.background = '#ef4444';
                }
            } catch (err) {
                btn.textContent = currentLang === 'zh-CN' ? '网络错误，请重试' : 'Network error, try again';
                btn.style.background = '#ef4444';
            }

            btn.disabled = false;
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '';
            }, 3000);
        });
    }

    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.textContent;
            const nameInput = contactForm.querySelector('input[type="text"]');
            const emailInput = contactForm.querySelector('input[type="email"]');
            const messageInput = contactForm.querySelector('textarea');

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();
            if (!email || !message) return;

            btn.disabled = true;
            btn.textContent = currentLang === 'zh-CN' ? '发送中...' : 'Sending...';

            try {
                const res = await fetch(`${API_BASE}/api/contact`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, email, message, source: 'website' })
                });
                const data = await res.json();

                if (res.ok && data.success) {
                    btn.textContent = currentLang === 'zh-CN' ? '已发送!' : 'Sent!';
                    btn.style.background = '#10b981';
                    contactForm.reset();
                } else {
                    btn.textContent = currentLang === 'zh-CN' ? '发送失败，请重试' : 'Failed, try again';
                    btn.style.background = '#ef4444';
                }
            } catch (err) {
                btn.textContent = currentLang === 'zh-CN' ? '网络错误，请重试' : 'Network error, try again';
                btn.style.background = '#ef4444';
            }

            btn.disabled = false;
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '';
            }, 3000);
        });
    }
}

// ==========================================
// Language Switcher
// ==========================================

function initLangSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });

    // Load saved preference or detect browser language
    try {
        const saved = localStorage.getItem('soulforge-lang');
        if (saved && translations[saved]) {
            setLanguage(saved);
        } else {
            // Detect browser/system language, default to English
            const browserLang = navigator.language || navigator.userLanguage || 'en';
            const detectedLang = browserLang.startsWith('zh') ? 'zh-CN' : 'en';
            setLanguage(detectedLang);
        }
    } catch (e) {
        setLanguage('en');
    }
}

// ==========================================
// Smooth Scroll for anchor links
// ==========================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ==========================================
// Initialize
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initReveal();
    initForms();
    initLangSwitcher();
    initSmoothScroll();
});
