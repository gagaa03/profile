/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.scss"
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todo-list/./src/scss/style.scss?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translate */ \"./src/translate.js\");\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    const skillDivs = document.querySelectorAll('.skills > div');\r\n\r\n    skillDivs.forEach((div) => {\r\n        const h4 = div.querySelector('h4');\r\n        \r\n        if (h4) {\r\n            h4.addEventListener('click', () => {\r\n                // 切換 active 類別\r\n                div.classList.toggle('active');\r\n            });\r\n        }\r\n    });\r\n});\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    // 獲取所有的專案卡片\r\n    const projectCards = document.querySelectorAll('.project-card');\r\n\r\n    projectCards.forEach(card => {\r\n        card.addEventListener('click', function(e) {\r\n            // 如果點擊的連結，不觸發展開/收合\r\n            if (e.target.closest('.overlay a')) {\r\n                return; // 停止執行後續的 toggle 代碼\r\n            }\r\n\r\n            // 切換 active class\r\n            this.classList.toggle('active');\r\n\r\n        });\r\n    });\r\n});\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    const contactBtn = document.querySelector('#contact a');\r\n    const modal = document.getElementById('contactModal');\r\n    const closeBtn = document.querySelector('.close-btn');\r\n    const copyBtn = document.getElementById('copyEmail');\r\n    const emailAddr = \"rubym508ro@mail.com\";\r\n\r\n    // 開啟彈窗\r\n    contactBtn.addEventListener('click', (e) => {\r\n        e.preventDefault(); // 阻止直接跳轉 mailto\r\n        modal.classList.add('open');\r\n    });\r\n\r\n    // 關閉彈窗\r\n    const closeModal = () => modal.classList.remove('open');\r\n    closeBtn.addEventListener('click', closeModal);\r\n    modal.addEventListener('click', (e) => {\r\n        if (e.target === modal) closeModal();\r\n    });\r\n\r\n    // 複製功能\r\n    copyBtn.addEventListener('click', () => {\r\n        navigator.clipboard.writeText(emailAddr).then(() => {\r\n            const copyText = copyBtn.querySelector('.copy-text');\r\n            copyText.innerText = \"Copied!\";\r\n            copyBtn.style.background = \"#A8D8B9\";\r\n            \r\n            setTimeout(() => {\r\n                copyText.innerText = \"Copy Email Address\";\r\n                copyBtn.style.background = \"#FCFAF2\";\r\n            }, 800);\r\n        });\r\n    });\r\n});\r\n\r\n\r\n\r\nlet currentLang = localStorage.getItem('preferredLang') || 'en';\r\nconst langBtn = document.getElementById('lang-switch');\r\n\r\nfunction updateContent() {\r\n    const elements = document.querySelectorAll('[data-i18n]');\r\n    elements.forEach(el => {\r\n        const key = el.getAttribute('data-i18n');\r\n        if (_translate__WEBPACK_IMPORTED_MODULE_1__.translations[currentLang][key]) {\r\n            // 使用 innerHTML 以保留 <strong> 等標籤內容\r\n            el.innerHTML = _translate__WEBPACK_IMPORTED_MODULE_1__.translations[currentLang][key];\r\n        }\r\n    });\r\n    \r\n    // 更新按鈕顯示文字\r\n    langBtn.innerText = currentLang === 'en' ? '中文' : 'EN';\r\n    \r\n    // 更新 HTML 的 lang 屬性\r\n    document.documentElement.lang = currentLang;\r\n}\r\n\r\nlangBtn.addEventListener('click', () => {\r\n    currentLang = currentLang === 'en' ? 'zh' : 'en';\r\n    localStorage.setItem('preferredLang', currentLang);\r\n    updateContent();\r\n});\r\n\r\n// 初始化\r\ndocument.addEventListener('DOMContentLoaded', updateContent);\r\n\r\n\r\n\r\n\r\nwindow.addEventListener('load', () => {\r\n    const preloader = document.getElementById('preloader');\r\n    const mainContent = document.getElementById('main-content');\r\n\r\n   if (preloader && mainContent) {\r\n        preloader.style.opacity = '0';\r\n        \r\n        setTimeout(() => {\r\n            preloader.style.display = 'none';\r\n            document.body.classList.add('animation-start');\r\n        }, 300);\r\n    }\r\n});\n\n//# sourceURL=webpack://todo-list/./src/index.js?\n}");

/***/ },

/***/ "./src/translate.js"
/*!**************************!*\
  !*** ./src/translate.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   translations: () => (/* binding */ translations)\n/* harmony export */ });\nconst translations = {\r\n    en: {\r\n        nav_about: \"About\",\r\n        nav_project: \"Projects\",\r\n        nav_contact: \"Contact\",\r\n        about_title: \"About Me\",\r\n        about_p1: \"I am a Front-end Developer transitioning from a 2-year career in Human Resources. This unique background has sharpened my ability to facilitate cross-functional collaboration and understand complex organizational needs from a human perspective.\",\r\n        about_p2: \"Currently, I am focusing on building scalable web applications and transitioning to Full-Stack engineering. I combine a disciplined approach to clean code with the cross-functional communication skills honed as an HR professional.\",\r\n        about_mobile: \"A <strong>Front-end Developer</strong> with <strong>2</strong> years of HR experience, specialized in bridging technical execution with human-centric communication.\",\r\n        skill_core: \"Core\",\r\n        skill_secondary: \"Secondary\",\r\n        skill_soft: \"Soft Skill\",\r\n        project_todo: \"A streamlined task management app built with <strong>Vanilla JavaScript</strong>.<br /><br />This project focuses on efficient <strong>DOM manipulation</strong> and data persistence using <strong>LocalStorage</strong>.It features a clean, responsive interface for tracking daily goals with seamless CRUD operations.\",\r\n        project_cv: \"A high-performance resume creation tool built with <strong>React</strong> and <strong>Vite</strong>.<br /><br />Featured a <strong>real-time preview mode</strong> through efficient state management, streamlining the process of transforming complex user inputs into professional, print-ready layouts.\",\r\n    },\r\n    zh: {\r\n        nav_about: \"關於\",\r\n        nav_project: \"作品\",\r\n        nav_contact: \"聯絡\",\r\n        about_title: \"關於我\",\r\n        about_p1: \"我是一位從兩年人資生涯轉型的前端工程師。這段獨特的背景磨練了我跨部門協作的能力，讓我能從人的視角出發，理解複雜的組織需求。\",\r\n        about_p2: \"對我而言，代碼不只是指令，更是解決問題、創造使用者價值的工具。目前正致力於 React 框架與後端技術的深度學習，期待能在技術團隊中發揮「理解人、解決事」的雙重優勢。\",\r\n        about_mobile: \"擁有 <strong>2</strong> 年人資背景的<strong>前端工程師</strong>，目前正致力於 React 框架與後端技術的深度學習，期待能在技術團隊中發揮「理解人、解決事」的雙重優勢。\",\r\n        skill_core: \"核心技術\",\r\n        skill_secondary: \"其他技能\",\r\n        skill_soft: \"軟實力\",\r\n        project_todo: \"以原生 JavaScript 打造的待辦事項應用。深入實作 DOM 操作與事件監聽，並整合 LocalStorage 技術確保資料在頁面重整後仍能完整保存。透過簡約的 UI 設計，提供流暢的任務新增、標記完成與分類篩選功能。\",\r\n        project_cv: \"使用 React 與 Vite 打造的高效簡歷編輯工具。透過狀態管理實作「即時預覽」功能，使用者能直覺地填寫資訊並同步查看排版成果，將複雜的表單邏輯轉化為流暢的互動體驗。\",\r\n    }\r\n};\n\n//# sourceURL=webpack://todo-list/./src/translate.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;