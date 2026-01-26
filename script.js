/**
 * SoulForge Tech - 主交互脚本
 * 处理页面导航、转场动画和交互效果
 */

document.addEventListener('DOMContentLoaded', () => {
    // 初始化
    initNavigation();
    initScrollAnimations();
    initFormHandler();
    initParallaxEffects();
});

/**
 * 导航系统初始化
 */
function initNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const pages = document.querySelectorAll('.page');
    const pageTransition = document.querySelector('.page-transition');

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetPage = btn.dataset.page;

            // 如果点击当前页面，不做任何事
            if (btn.classList.contains('active')) return;

            // 触发转场动画
            triggerPageTransition(pageTransition, () => {
                // 更新导航按钮状态
                navButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // 切换页面
                pages.forEach(page => {
                    page.classList.remove('active');
                    if (page.id === targetPage) {
                        page.classList.add('active');
                        // 滚动到页面顶部
                        window.scrollTo({ top: 0, behavior: 'instant' });
                        // 触发页面进入动画
                        triggerPageEnterAnimations(page);
                    }
                });
            });
        });
    });

    // 添加导航按钮悬停效果
    navButtons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            createRipple(btn);
        });
    });
}

/**
 * 触发页面转场动画
 */
function triggerPageTransition(transitionEl, callback) {
    transitionEl.classList.add('active');

    // 在动画中间点执行回调
    setTimeout(() => {
        callback();
    }, 300);

    // 动画结束后移除类
    setTimeout(() => {
        transitionEl.classList.remove('active');
    }, 800);
}

/**
 * 触发页面进入动画
 */
function triggerPageEnterAnimations(page) {
    // 重置所有动画元素
    const animatedElements = page.querySelectorAll('.intro-card, .mod-card, .feature-card, .contact-card');

    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';

        setTimeout(() => {
            el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100 + (index * 100));
    });

    // 针对AI页面重新触发聊天气泡动画
    if (page.id === 'aicompanion') {
        const chatBubbles = page.querySelectorAll('.chat-bubble');
        chatBubbles.forEach(bubble => {
            bubble.style.animation = 'none';
            bubble.offsetHeight; // 触发重绘
            bubble.style.animation = null;
        });

        // 重新触发指示条动画
        const indicators = page.querySelectorAll('.indicator-bar');
        indicators.forEach(bar => {
            bar.style.animation = 'none';
            bar.offsetHeight;
            bar.style.animation = null;
        });
    }
}

/**
 * 创建水波纹效果
 */
function createRipple(element) {
    const glow = element.querySelector('.btn-glow');
    if (glow) {
        glow.style.transition = 'none';
        glow.style.opacity = '0.3';

        setTimeout(() => {
            glow.style.transition = 'opacity 0.3s ease';
            glow.style.opacity = '';
        }, 50);
    }
}

/**
 * 滚动动画初始化
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // 可选：只触发一次
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 观察需要动画的元素
    document.querySelectorAll('.intro-card, .mod-card, .feature-card, .contact-card, .mission-section').forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });
}

/**
 * 表单处理初始化
 */
function initFormHandler() {
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const submitBtn = form.querySelector('.submit-btn');
            const originalContent = submitBtn.innerHTML;

            // 显示发送中状态
            submitBtn.innerHTML = '<span>发送中...</span>';
            submitBtn.disabled = true;

            // 模拟发送（实际应该发送到后端）
            setTimeout(() => {
                submitBtn.innerHTML = '<span>✓ 已发送</span>';
                submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';

                // 重置表单
                form.reset();

                // 恢复按钮状态
                setTimeout(() => {
                    submitBtn.innerHTML = originalContent;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 2000);
            }, 1500);
        });

        // 输入框焦点效果
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });

            input.addEventListener('blur', () => {
                input.parentElement.classList.remove('focused');
            });
        });
    }
}

/**
 * 视差效果初始化
 */
function initParallaxEffects() {
    const shapes = document.querySelectorAll('.shape');

    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 20;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;

            shape.style.transform = `translate(${x}px, ${y}px)`;
        });
    });

    // AI页面全息效果交互
    const hologramContainer = document.querySelector('.hologram-container');
    if (hologramContainer) {
        hologramContainer.addEventListener('mousemove', (e) => {
            const rect = hologramContainer.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            const rings = hologramContainer.querySelectorAll('.hologram-ring');
            rings.forEach((ring, index) => {
                const factor = (index + 1) * 10;
                ring.style.transform = `rotateX(${60 + y * factor}deg) rotateY(${x * factor}deg) rotateZ(${ring.style.transform?.match(/rotateZ\((\d+)deg\)/)?.[1] || 0}deg)`;
            });
        });

        hologramContainer.addEventListener('mouseleave', () => {
            const rings = hologramContainer.querySelectorAll('.hologram-ring');
            rings.forEach(ring => {
                ring.style.transform = '';
            });
        });
    }
}

/**
 * 添加滚动动画样式
 */
const scrollAnimateStyles = document.createElement('style');
scrollAnimateStyles.textContent = `
    .scroll-animate {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .scroll-animate.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .form-group.focused input,
    .form-group.focused textarea {
        border-color: var(--primary);
        box-shadow: 0 0 30px rgba(99, 102, 241, 0.3);
    }
`;
document.head.appendChild(scrollAnimateStyles);

/**
 * 导航栏滚动效果
 */
let lastScrollY = window.scrollY;
const nav = document.querySelector('.glass-nav');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 100) {
        nav.style.background = 'linear-gradient(135deg, rgba(15, 15, 26, 0.9) 0%, rgba(15, 15, 26, 0.8) 100%)';
        nav.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    } else {
        nav.style.background = '';
        nav.style.borderColor = '';
    }

    // 滚动方向检测（可用于隐藏/显示导航栏）
    if (currentScrollY > lastScrollY && currentScrollY > 200) {
        // 向下滚动
        // nav.style.transform = 'translateX(-50%) translateY(-100%)';
    } else {
        // 向上滚动
        // nav.style.transform = 'translateX(-50%) translateY(0)';
    }

    lastScrollY = currentScrollY;
});

/**
 * 打字机效果（可选，用于标题）
 */
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

/**
 * 数字计数动画（可选，用于统计数据）
 */
function animateNumber(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    function update() {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(update);
        } else {
            element.textContent = target;
        }
    }

    update();
}

/**
 * 页面加载完成后的入场动画
 */
window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // 初始页面元素入场动画
    const homePage = document.getElementById('home');
    if (homePage && homePage.classList.contains('active')) {
        triggerPageEnterAnimations(homePage);
    }
});

// 添加加载状态样式
const loadStyles = document.createElement('style');
loadStyles.textContent = `
    body:not(.loaded) .hero-content,
    body:not(.loaded) .glass-nav {
        opacity: 0;
        transform: translateY(20px);
    }

    body.loaded .hero-content,
    body.loaded .glass-nav {
        opacity: 1;
        transform: translateY(0);
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }

    body.loaded .glass-nav {
        transform: translateX(-50%) translateY(0);
    }
`;
document.head.appendChild(loadStyles);
