/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/formJob.js":
/*!***********************************!*\
  !*** ./src/js/modules/formJob.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function formJob() {
     //форма

const formMobile = document.querySelector('.form__body__mobile');
const parentFormMobile = document.querySelector('.modal-form');
formMobile.addEventListener('submit', ()=>formSend(event, formMobile, parentFormMobile));


async function formSend(event, form, parent) {
  event = event || window.event;
  event.preventDefault();

  
  let error = formValidate(form);

  let formData = new FormData(form);
  if (error === 0) {
    form.classList.add('_sending');
    let response = await fetch('./sendmailjob.php', {
      method: 'POST',
      body: formData
    });
    if (response.ok) {
      let result = await response.json();
      alert(result.message);
      form.reset();
      form.classList.remove('_sending');
      parent.querySelector('.ready').style.display = 'block';
      setTimeout(() => {
        parent.querySelector('.ready').style.display = 'none';
      }, "5000");
    } else {
      form.classList.remove('_sending');
      parent.querySelector('.error').style.display = 'block';
    }
  } 
}



function formValidate(form) {
  let error = 0;
  let formReq = form.querySelectorAll('._req');
  for (let i = 0; i< formReq.length; i++) {
    const input = formReq[i];
    formRemoveError(input);

    if (input.classList.contains('_phone')) {
      
      if (phoneTest(input)) {
        formAddError(input);
        error++;
      }
    } else {
      if (input.value === '') {
        formAddError(input);
        error++;
      }
    }
  }
  return error;
}

function formAddError(input) {
  input.parentElement.classList.add('_error');
  input.classList.add('_error');
}

function formRemoveError(input) {
  input.parentElement.classList.remove('_error');
  input.classList.remove('_error');
}
function phoneTest(input) {
  const data = input.value.replace(/\D/g, '');
  if (data.length === 11) {
    return false
  } else {
    return true
  }
  
}


const inputs = document.querySelectorAll('input.form__input');
inputs.forEach((input, index) => {
  input.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
          event.preventDefault(); 
          if (index < inputs.length - 1) {
              inputs[index + 1].focus();
          }
      }
  });
});

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formJob);

/***/ }),

/***/ "./src/js/modules/popUp.js":
/*!*********************************!*\
  !*** ./src/js/modules/popUp.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function popUp() {
    const modal = document.querySelector('.modal-form');
const btns = document.querySelectorAll('.btn-offer');

btns.forEach((item)=> {
  item.addEventListener('click', ()=> {
    modal.style.display = "flex";
    document.body.style.overflow = 'hidden'; 
  })
})


document.querySelector('.close-form').onclick = function() {
    modal.style.display = "none";
    document.body.style.overflow = 'auto';
};

// Закрытие модального окна при клике вне его
window.addEventListener('click', function(event) {
  if (event.target == modal) {
      modal.style.display = "none"; // Скрываем модал
      document.body.style.overflow = 'auto';

  }
});
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popUp);

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
/* harmony import */ var _modules_popUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/popUp */ "./src/js/modules/popUp.js");
/* harmony import */ var _modules_formJob__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/formJob */ "./src/js/modules/formJob.js");





window.addEventListener('DOMContentLoaded', () => {


(0,_modules_popUp__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_modules_formJob__WEBPACK_IMPORTED_MODULE_1__["default"])();



})
/******/ })()
;
//# sourceMappingURL=bundle4.js.map