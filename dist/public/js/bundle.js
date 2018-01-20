/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controller_task__ = __webpack_require__(1);



window.addEventListener('load', function () {
    Object(__WEBPACK_IMPORTED_MODULE_0__controller_task__["a" /* default */])(document.getElementById('todo-list'));
});




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = taskController;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view_task__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_taskAddForm__ = __webpack_require__(3);

// import TaskModel from '../model/taskModel'


function taskController(rootElement) {

    Object(__WEBPACK_IMPORTED_MODULE_0__view_task__["a" /* default */])(rootElement, tasks, {
        onDone,
        onDelete
    });

    Object(__WEBPACK_IMPORTED_MODULE_1__view_taskAddForm__["a" /* default */])(rootElement, {
        onSubmit
    });





    function onDone(task, status) {
        tasks.done(task, status);

        console.log('tasks', tasks);
    }

    function onDelete(task) {
        tasks.delete(task);
    }

    function onSubmit(text) {
        tasks.add(text);
    }


}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = taskView;

function taskView(rootElement, tasks, actions) {
    let ul = document.createElement('ul');

    let template = document.createElement('li');
    template.innerHTML = `
        <input type="checkbox" class="done">
        <span class="text"></span>
        <button class="delete">Delete</button>
        <button class="move-up">Up</button>
        <button class="move-down">Down</button>
    `;

    tasks.forEach(function(task) {
        add(task);
    });

    tasks.on('done', function (task) {
        [].forEach.call(ul.childNodes, function (li) {
            if (li.task === task) {
                li.querySelector('.text').style.textDecoration = task.done ? 'line-through' : '';
            }
        });
    });

    tasks.on('add', function (task) {
        add(task);
    });

    tasks.on('delete', function (task) {
        [].forEach.call(ul.childNodes, function (li) {
            if (li.task === task) {
                li.remove();
            }
        });
    });

    rootElement.appendChild(ul);

    function add(task) {
        let li = template.cloneNode(true);
        li.task = task;


        let text = li.querySelector('.text');
        text.innerHTML = task.text;
        text.style.textDecoration = task.done ? 'line-through' : '';

        let checkbox = li.querySelector('.done');
        checkbox.checked = task.done ? 'checked' : '';
        checkbox.addEventListener('change', function (event) {
            actions.onDone(task, event.target.checked);
        });

        li.querySelector('.delete').addEventListener('click', function (event) {
            actions.onDelete(task);
        });

        ul.appendChild(li);
    }
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = taskAddFromView;
function taskAddFromView(rootElement, actions) {
    let form = document.createElement('form');
    form.innerHTML = `
        <input type="text" name="text">
        <input type="submit" value="Add">
    `;


    form.addEventListener('submit', function (event) {
        let input = form.querySelector('[name=text]');
        let text = input.value.trim();

        if (text) {
            actions.onSubmit(text);
            input.value = '';
        }
        event.preventDefault();
    });


    rootElement.appendChild(form);
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGUzYTlkZWRjNTQ2MmJkNTM5ODEiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3NyYy9qcy90b2RvL2luZGV4LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9zcmMvanMvdG9kby9jb250cm9sbGVyL3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3NyYy9qcy90b2RvL3ZpZXcvdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL2pzL3RvZG8vdmlldy90YXNrQWRkRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM3REE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDTEQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7Ozs7OztBQU1MO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQSxDOzs7Ozs7Ozs7QUNqQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxDOzs7Ozs7OztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQSxDIiwiZmlsZSI6Ii4vcHVibGljL2pzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDRlM2E5ZGVkYzU0NjJiZDUzOTgxIiwiaW1wb3J0IHRhc2tDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlci90YXNrJztcblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICB0YXNrQ29udHJvbGxlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1saXN0JykpO1xufSk7XG5cblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvc3JjL2pzL3RvZG8vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHRhc2tWaWV3IGZyb20gJy4uL3ZpZXcvdGFzaydcbi8vIGltcG9ydCBUYXNrTW9kZWwgZnJvbSAnLi4vbW9kZWwvdGFza01vZGVsJ1xuaW1wb3J0IHRhc2tBZGRGcm9tVmlldyBmcm9tICcuLi92aWV3L3Rhc2tBZGRGb3JtJ1xuXG5leHBvcnQgZGVmYXVsdCAgZnVuY3Rpb24gdGFza0NvbnRyb2xsZXIocm9vdEVsZW1lbnQpIHtcblxuICAgIHRhc2tWaWV3KHJvb3RFbGVtZW50LCB0YXNrcywge1xuICAgICAgICBvbkRvbmUsXG4gICAgICAgIG9uRGVsZXRlXG4gICAgfSk7XG5cbiAgICB0YXNrQWRkRnJvbVZpZXcocm9vdEVsZW1lbnQsIHtcbiAgICAgICAgb25TdWJtaXRcbiAgICB9KTtcblxuXG5cblxuXG4gICAgZnVuY3Rpb24gb25Eb25lKHRhc2ssIHN0YXR1cykge1xuICAgICAgICB0YXNrcy5kb25lKHRhc2ssIHN0YXR1cyk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ3Rhc2tzJywgdGFza3MpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRGVsZXRlKHRhc2spIHtcbiAgICAgICAgdGFza3MuZGVsZXRlKHRhc2spO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uU3VibWl0KHRleHQpIHtcbiAgICAgICAgdGFza3MuYWRkKHRleHQpO1xuICAgIH1cblxuXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvc3JjL2pzL3RvZG8vY29udHJvbGxlci90YXNrLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFza1ZpZXcocm9vdEVsZW1lbnQsIHRhc2tzLCBhY3Rpb25zKSB7XG4gICAgbGV0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgIGxldCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJkb25lXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPjwvc3Bhbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZVwiPkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwibW92ZS11cFwiPlVwPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJtb3ZlLWRvd25cIj5Eb3duPC9idXR0b24+XG4gICAgYDtcblxuICAgIHRhc2tzLmZvckVhY2goZnVuY3Rpb24odGFzaykge1xuICAgICAgICBhZGQodGFzayk7XG4gICAgfSk7XG5cbiAgICB0YXNrcy5vbignZG9uZScsIGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICAgIFtdLmZvckVhY2guY2FsbCh1bC5jaGlsZE5vZGVzLCBmdW5jdGlvbiAobGkpIHtcbiAgICAgICAgICAgIGlmIChsaS50YXNrID09PSB0YXNrKSB7XG4gICAgICAgICAgICAgICAgbGkucXVlcnlTZWxlY3RvcignLnRleHQnKS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IHRhc2suZG9uZSA/ICdsaW5lLXRocm91Z2gnIDogJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGFza3Mub24oJ2FkZCcsIGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICAgIGFkZCh0YXNrKTtcbiAgICB9KTtcblxuICAgIHRhc2tzLm9uKCdkZWxldGUnLCBmdW5jdGlvbiAodGFzaykge1xuICAgICAgICBbXS5mb3JFYWNoLmNhbGwodWwuY2hpbGROb2RlcywgZnVuY3Rpb24gKGxpKSB7XG4gICAgICAgICAgICBpZiAobGkudGFzayA9PT0gdGFzaykge1xuICAgICAgICAgICAgICAgIGxpLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJvb3RFbGVtZW50LmFwcGVuZENoaWxkKHVsKTtcblxuICAgIGZ1bmN0aW9uIGFkZCh0YXNrKSB7XG4gICAgICAgIGxldCBsaSA9IHRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgbGkudGFzayA9IHRhc2s7XG5cblxuICAgICAgICBsZXQgdGV4dCA9IGxpLnF1ZXJ5U2VsZWN0b3IoJy50ZXh0Jyk7XG4gICAgICAgIHRleHQuaW5uZXJIVE1MID0gdGFzay50ZXh0O1xuICAgICAgICB0ZXh0LnN0eWxlLnRleHREZWNvcmF0aW9uID0gdGFzay5kb25lID8gJ2xpbmUtdGhyb3VnaCcgOiAnJztcblxuICAgICAgICBsZXQgY2hlY2tib3ggPSBsaS5xdWVyeVNlbGVjdG9yKCcuZG9uZScpO1xuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdGFzay5kb25lID8gJ2NoZWNrZWQnIDogJyc7XG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgYWN0aW9ucy5vbkRvbmUodGFzaywgZXZlbnQudGFyZ2V0LmNoZWNrZWQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBsaS5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGFjdGlvbnMub25EZWxldGUodGFzayk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvc3JjL2pzL3RvZG8vdmlldy90YXNrLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRhc2tBZGRGcm9tVmlldyhyb290RWxlbWVudCwgYWN0aW9ucykge1xuICAgIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uaW5uZXJIVE1MID0gYFxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGV4dFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQWRkXCI+XG4gICAgYDtcblxuXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgbGV0IGlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT10ZXh0XScpO1xuICAgICAgICBsZXQgdGV4dCA9IGlucHV0LnZhbHVlLnRyaW0oKTtcblxuICAgICAgICBpZiAodGV4dCkge1xuICAgICAgICAgICAgYWN0aW9ucy5vblN1Ym1pdCh0ZXh0KTtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxuXG4gICAgcm9vdEVsZW1lbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvc3JjL2pzL3RvZG8vdmlldy90YXNrQWRkRm9ybS5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9