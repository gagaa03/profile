import "./scss/style.scss";
import { translations } from "./translate";

document.addEventListener('DOMContentLoaded', () => {
    const skillDivs = document.querySelectorAll('.skills > div');

    skillDivs.forEach((div) => {
        const h4 = div.querySelector('h4');
        
        if (h4) {
            h4.addEventListener('click', () => {
                // 切換 active 類別
                div.classList.toggle('active');
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // 獲取所有的專案卡片
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // 如果點擊的連結，不觸發展開/收合
            if (e.target.closest('.overlay a')) {
                return; // 停止執行後續的 toggle 代碼
            }

            // 切換 active class
            this.classList.toggle('active');

        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const contactBtn = document.querySelector('#contact a');
    const modal = document.getElementById('contactModal');
    const closeBtn = document.querySelector('.close-btn');
    const copyBtn = document.getElementById('copyEmail');
    const emailAddr = "rubym508ro@mail.com";

    // 開啟彈窗
    contactBtn.addEventListener('click', (e) => {
        e.preventDefault(); // 阻止直接跳轉 mailto
        modal.classList.add('open');
    });

    // 關閉彈窗
    const closeModal = () => modal.classList.remove('open');
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // 複製功能
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(emailAddr).then(() => {
            const copyText = copyBtn.querySelector('.copy-text');
            copyText.innerText = "Copied!";
            copyBtn.style.background = "#A8D8B9";
            
            setTimeout(() => {
                copyText.innerText = "Copy Email Address";
                copyBtn.style.background = "#FCFAF2";
            }, 800);
        });
    });
});


let currentLang = localStorage.getItem('preferredLang') || 'en';
const langBtn = document.getElementById('lang-switch');

function updateContent() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            // 使用 innerHTML 以保留 <strong> 等標籤內容
            el.innerHTML = translations[currentLang][key];
        }
    });
    
    // 更新按鈕顯示文字
    langBtn.innerText = currentLang === 'en' ? '中文' : 'EN';
    
    // 更新 HTML 的 lang 屬性
    document.documentElement.lang = currentLang;
}

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    localStorage.setItem('preferredLang', currentLang);
    updateContent();
});

// 初始化
document.addEventListener('DOMContentLoaded', updateContent);