/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/mapComment.js":
/*!**************************************!*\
  !*** ./src/js/modules/mapComment.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const mapComment = () => {
    // подсказка для карты
    const mapTitle = document.createElement('div'); 
    mapTitle.className = 'mapTitle';
    mapTitle.textContent = 'Для активации карты нажмите по ней';
    
    wrapMap.appendChild(mapTitle);

    wrapMap.addEventListener('click', () => {
        mapTitle.removeAttribute('style');
        mapTitle.remove();
    });

    wrapMap.addEventListener('mousemove', (event) => {
        mapTitle.style.display = 'block';
        if (event.offsetY > 10) {
            mapTitle.style.top = `${event.offsetY + 20}px`;
        }
        if (event.offsetX > 10) {
            mapTitle.style.left = `${event.offsetX + 20}px`;
        }
    });

    wrapMap.addEventListener('mouseleave', () => {
        mapTitle.style.display = 'none';
    });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapComment);

/***/ }),

/***/ "./src/js/modules/tabsCountries.js":
/*!*****************************************!*\
  !*** ./src/js/modules/tabsCountries.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabsCountries () {

//табы в странах производителях

const countryParent = document.querySelector('.country'),
countries = document.querySelectorAll('.country_item'),
countryTabs = document.querySelectorAll('.show'),
rollCountry = document.querySelector('.roll_country');


countryParent.addEventListener('click', event => {
    const target = event.target.closest('.country_item');

    if (target && target.classList.contains('country_item')) {
        countries.forEach((item,i)=> {
            if (target==item) {
                item.classList.toggle('active');
                countryTabs[i].classList.toggle('active_country');
                if (item.classList.contains('active')) {
                    rollCountry.classList.add('activeRoll')  
                } else {
                    rollCountry.classList.remove('activeRoll')
                }
            } else {
                item.classList.remove('active');
                countryTabs[i].classList.remove('active_country');
            }
        })
    }
})


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabsCountries);

/***/ }),

/***/ "./src/js/modules/tabsServices.js":
/*!****************************************!*\
  !*** ./src/js/modules/tabsServices.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabsServices () {
//табы в услугах

let tabsParent = document.querySelector('.offer'), //родитель списка
tabsContent = document.querySelectorAll('.offer_details'), //сами табы
tabs = document.querySelectorAll('.offer_item'); //пункты списка

function hideTabContent() {
tabsContent.forEach((item) => {
    item.style.display = 'none';
});
tabs.forEach((item) => {
    item.classList.remove('active');
});
}

function showTabContent(i = 0) {
tabsContent[i].style.display = 'block';
tabs[i].classList.add('active');
}

function toggleTabContent (i) {
tabs[i].classList.toggle('active');

if (tabsContent[i].style.maxHeight) {
    tabsContent[i].style.maxHeight = null; // Устанавливаем maxHeight обратно в null для сворачивания
} else {
    tabsContent[i].style.maxHeight = tabsContent[i].scrollHeight + "px"; // Устанавливаем максимальную высоту в размер содержимого 
}

}

hideTabContent();

const funcComp= (event) => {
  const target = event.target.closest('.offer_item');
  
  if (target && target.classList.contains('offer_item')) { //
  tabs.forEach((item, i) => {
      if (target == item) { 
          hideTabContent();
          showTabContent(i);
      }
  });
  }
  }

  const funcMobile = (event) =>{
    const target = event.target.closest('.offer_item');
    
    if (target && target.classList.contains('offer_item')) { //
    tabs.forEach((item, i) => {
        if (target == item) { 
toggleTabContent(i)
        }
    });
    }
    }




function forMibileOffer () {
  
  hideTabContent();

  if (document.documentElement.clientWidth >=991) { //для экранов
    showTabContent();
    tabsParent.removeEventListener('click', funcMobile);
    tabsParent.addEventListener('click', funcComp);
    } else { //для смартфонов
        tabsContent.forEach(item=> {
            item.style.display='block';
        })
        tabsParent.removeEventListener('click', funcComp)
        tabsParent.addEventListener('click', funcMobile);   
    }}

    forMibileOffer()


    window.addEventListener('resize', ()=> {
        forMibileOffer(); //в табсСервисиз
      })

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabsServices);

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
/* harmony import */ var _modules_mapComment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/mapComment */ "./src/js/modules/mapComment.js");
/* harmony import */ var _modules_tabsCountries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tabsCountries */ "./src/js/modules/tabsCountries.js");
/* harmony import */ var _modules_tabsServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tabsServices */ "./src/js/modules/tabsServices.js");






window.addEventListener('DOMContentLoaded', () => {


(0,_modules_mapComment__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_modules_tabsCountries__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modules_tabsServices__WEBPACK_IMPORTED_MODULE_2__["default"])();



})
/******/ })()
;
//# sourceMappingURL=bundle1.js.map