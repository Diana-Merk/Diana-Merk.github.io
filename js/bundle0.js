/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/mobileHeader.js":
/*!****************************************!*\
  !*** ./src/js/modules/mobileHeader.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function mobileHeader() {

    //всплывающий смол хедер

const header = document.querySelector('.sm-header');
const sectionInternational  = document.querySelector('.international')
//const headerOffset = sectionInternational.offsetTop; // Позиция шапки относительно верхней части окна
const call = document.querySelector('.call-us');

 function handleScroll(x=window.innerWidth) {
  const headerHeight = ()=> {
    if (x <= 481) {
      return '50px'
    } else {
      return '80px'
    }
  }
    if (window.scrollY > 1100) {
        header.style.position = 'fixed';
        header.style.maxHeight = `${headerHeight()}`;
       header.style.transition = 'all 0.3s';
       call.classList.add('active');
    } else if (window.scrollY <= 100) {
header.style.position = 'absolute';
header.style.maxHeight = `${headerHeight()}`;
header.style.transition = 'all 0s';
    } else {
        header.style.maxHeight = '0';
       header.style.transition = 'all 0.3s';
       call.classList.remove('active');
    }
} 

    function mobileHeader () {
        if (window.innerWidth <= 990) {
        window.addEventListener('scroll', handleScroll, { passive: true });    
        }
        }
        
        mobileHeader()


        window.addEventListener('resize', ()=> {
            if (window.innerWidth <= 990) {
            mobileHeader(); //в мобайлХедер
            } else {
              header.style.position='';
              window.removeEventListener('scroll', handleScroll) //в мобйалХедер
            }
          })


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mobileHeader);

/***/ }),

/***/ "./src/js/modules/pageUp.js":
/*!**********************************!*\
  !*** ./src/js/modules/pageUp.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function pageUp() {
//кнопка подъема


const btnUp = document.querySelector('.btn-up');
window.addEventListener('scroll', () =>{
  if (window.scrollY > 400) {
    btnUp.style.bottom = '0';
  } else {
    btnUp.style.bottom = '-55px';
  }
}, { passive: true })

btnUp.addEventListener('click', ()=> {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // это позволяет прокрутке быть плавной
});
})

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageUp);

/***/ }),

/***/ "./src/js/modules/sidebarMobile.js":
/*!*****************************************!*\
  !*** ./src/js/modules/sidebarMobile.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function sidebarMobile() {
//модальное меню мобильное 

const sidebar = document.querySelector('.sidebar');
const burger = document.querySelector('.burger');
const close = document.querySelector('.close-menu');
const links = sidebar.querySelectorAll('a');
console.log(links)

links.forEach(item=> {
  item.addEventListener('click', ()=> {
    sidebar.classList.remove('active');
  })
})

burger.addEventListener('click', function() {
    sidebar.classList.add('active'); // Добавляем класс, чтобы показать меню
});

close.addEventListener('click', function() {
    sidebar.classList.remove('active'); // Убираем класс, чтобы скрыть меню
});


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sidebarMobile);

/***/ })

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
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_mobileHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/mobileHeader */ "./src/js/modules/mobileHeader.js");
/* harmony import */ var _modules_pageUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/pageUp */ "./src/js/modules/pageUp.js");
/* harmony import */ var _modules_sidebarMobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/sidebarMobile */ "./src/js/modules/sidebarMobile.js");





window.addEventListener('DOMContentLoaded', () => {


(0,_modules_mobileHeader__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_modules_pageUp__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modules_sidebarMobile__WEBPACK_IMPORTED_MODULE_2__["default"])();


})
/******/ })()
;
//# sourceMappingURL=bundle0.js.map