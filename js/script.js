// js/script.js
document.addEventListener('DOMContentLoaded', function() {
    const langSwitcher = document.getElementById('lang-switcher');
    const nav = document.getElementById('main-nav');
    const zhContainer = document.querySelector('[data-lang="zh"]');
    const enContainer = document.querySelector('[data-lang="en"]');

    // 错误处理：如果找不到必要元素，至少确保英文内容显示
    if (!langSwitcher || !nav || !enContainer) {
        console.warn('Some elements not found, using fallback');
        if (enContainer) {
            enContainer.style.display = 'block';
        }
        return;
    }

    const navLinks = {
        zh: [
            { text: '关于我', href: '#about-zh' },
            { text: '教育经历', href: '#education-zh' },
            { text: '所获荣誉', href: '#honors-zh' },
            { text: '学生工作', href: '#experience-zh' },
            { text: '个人技能', href: '#skills-zh' }
        ],
        en: [
            { text: 'About', href: '#about-en' },
            { text: 'Education', href: '#education-en' },
            { text: 'Honors', href: '#honors-en' },
            { text: 'Publications', href: '#publications-en' },
            { text: 'Contact', href: '#contact-en' }
        ]
    };

    function updateNav(lang) {
        nav.innerHTML = '';
        const ul = document.createElement('ul');
        navLinks[lang].forEach(link => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.textContent = link.text;
            a.href = link.href;
            li.appendChild(a);
            ul.appendChild(li);
        });
        nav.appendChild(ul);
    }

    function switchLanguage(lang) {
        if (lang === 'zh') {
            zhContainer.style.display = 'block';
            enContainer.style.display = 'none';
            langSwitcher.textContent = 'EN';
            document.documentElement.lang = 'zh-CN';
        } else {
            zhContainer.style.display = 'none';
            enContainer.style.display = 'block';
            langSwitcher.textContent = '中文';
            document.documentElement.lang = 'en';
        }
        updateNav(lang);
    }

    // langSwitcher.addEventListener('click', () => {
    //     const currentLang = langSwitcher.textContent === 'EN'? 'en' : 'zh';
    //     switchLanguage(currentLang);
    // });

    // Initial setup
    switchLanguage('en');
});