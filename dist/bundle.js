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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_task__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_taskAddForm__ = __webpack_require__(5);




function taskController(rootElement) {

    Object(__WEBPACK_IMPORTED_MODULE_0__view_task__["a" /* default */])(rootElement, __WEBPACK_IMPORTED_MODULE_1__model_task__["a" /* default */], {
        onDone,
        onDelete
    });

    Object(__WEBPACK_IMPORTED_MODULE_2__view_taskAddForm__["a" /* default */])(rootElement, {
        onSubmit
    });





    function onDone(task, status) {
        __WEBPACK_IMPORTED_MODULE_1__model_task__["a" /* default */].done(task, status);

        console.log('tasks', __WEBPACK_IMPORTED_MODULE_1__model_task__["a" /* default */]);
    }

    function onDelete(task) {
        __WEBPACK_IMPORTED_MODULE_1__model_task__["a" /* default */].delete(task);
    }

    function onSubmit(text) {
        __WEBPACK_IMPORTED_MODULE_1__model_task__["a" /* default */].add(text);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__taskModel__ = __webpack_require__(4);

let tasks = new __WEBPACK_IMPORTED_MODULE_0__taskModel__["a" /* default */]([
        {
            text: 'Brew coffee',
            done: true
        },
        {
            text: 'Write some code',
            done: false
        },
        {
            text: 'Sleep',
            done: false
        }
    ]);

/* harmony default export */ __webpack_exports__["a"] = (tasks);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = TaskModel;
function TaskModel(tasks) {
    this.listeners = [];

    tasks = tasks || [];

    tasks.forEach(task => {
        this.push(task);
    });
}

TaskModel.prototype = Object.create(Array.prototype);

TaskModel.prototype.done = function (task, status) {
    task.done = status;
    this.trigger('done', [task]);
};

TaskModel.prototype.add = function (text) {
    let task = {
        text,
        done: false
    };

    this.push(task);
    this.trigger('add', [task]);
};


TaskModel.prototype.delete = function (task) {
    let index = this.indexOf(task);
    if (index >= 0) {
        this.splice(index, 1);
    }

    this.trigger('delete', [task]);
};





TaskModel.prototype.on = function (event, callback) {
    this.listeners.push({
        event,
        callback
    });
};

TaskModel.prototype.trigger = function (event, args) {
    let tasks = this;

    this.listeners.forEach(listener => {
        if (listener.event === event) {
            listener.callback.apply(tasks, args);
        }
    });
};




/***/ }),
/* 5 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTU1YmM1M2I0NTZhNGIyY2EyY2EiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3NyYy9qcy90b2RvL2luZGV4LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9zcmMvanMvdG9kby9jb250cm9sbGVyL3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3NyYy9qcy90b2RvL3ZpZXcvdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL2pzL3RvZG8vbW9kZWwvdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL2pzL3RvZG8vbW9kZWwvdGFza01vZGVsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9zcmMvanMvdG9kby92aWV3L3Rhc2tBZGRGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzdEQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDTEQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7Ozs7OztBQU1MO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQSxDOzs7Ozs7OztBQ2xDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLEM7Ozs7Ozs7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0U7Ozs7Ozs7O0FDaEJBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7OztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQSxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGE1NWJjNTNiNDU2YTRiMmNhMmNhIiwiaW1wb3J0IHRhc2tDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlci90YXNrJztcblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICB0YXNrQ29udHJvbGxlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1saXN0JykpO1xufSk7XG5cblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvc3JjL2pzL3RvZG8vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHRhc2tWaWV3IGZyb20gJy4uL3ZpZXcvdGFzaydcbmltcG9ydCB0YXNrcyBmcm9tICcuLi9tb2RlbC90YXNrJ1xuaW1wb3J0IHRhc2tBZGRGcm9tVmlldyBmcm9tICcuLi92aWV3L3Rhc2tBZGRGb3JtJ1xuXG5leHBvcnQgZGVmYXVsdCAgZnVuY3Rpb24gdGFza0NvbnRyb2xsZXIocm9vdEVsZW1lbnQpIHtcblxuICAgIHRhc2tWaWV3KHJvb3RFbGVtZW50LCB0YXNrcywge1xuICAgICAgICBvbkRvbmUsXG4gICAgICAgIG9uRGVsZXRlXG4gICAgfSk7XG5cbiAgICB0YXNrQWRkRnJvbVZpZXcocm9vdEVsZW1lbnQsIHtcbiAgICAgICAgb25TdWJtaXRcbiAgICB9KTtcblxuXG5cblxuXG4gICAgZnVuY3Rpb24gb25Eb25lKHRhc2ssIHN0YXR1cykge1xuICAgICAgICB0YXNrcy5kb25lKHRhc2ssIHN0YXR1cyk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ3Rhc2tzJywgdGFza3MpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRGVsZXRlKHRhc2spIHtcbiAgICAgICAgdGFza3MuZGVsZXRlKHRhc2spO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uU3VibWl0KHRleHQpIHtcbiAgICAgICAgdGFza3MuYWRkKHRleHQpO1xuICAgIH1cblxuXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvc3JjL2pzL3RvZG8vY29udHJvbGxlci90YXNrLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRhc2tWaWV3KHJvb3RFbGVtZW50LCB0YXNrcywgYWN0aW9ucykge1xuICAgIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICBsZXQgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiZG9uZVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj48L3NwYW4+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGVcIj5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1vdmUtdXBcIj5VcDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwibW92ZS1kb3duXCI+RG93bjwvYnV0dG9uPlxuICAgIGA7XG5cbiAgICB0YXNrcy5mb3JFYWNoKGZ1bmN0aW9uKHRhc2spIHtcbiAgICAgICAgYWRkKHRhc2spO1xuICAgIH0pO1xuXG4gICAgdGFza3Mub24oJ2RvbmUnLCBmdW5jdGlvbiAodGFzaykge1xuICAgICAgICBbXS5mb3JFYWNoLmNhbGwodWwuY2hpbGROb2RlcywgZnVuY3Rpb24gKGxpKSB7XG4gICAgICAgICAgICBpZiAobGkudGFzayA9PT0gdGFzaykge1xuICAgICAgICAgICAgICAgIGxpLnF1ZXJ5U2VsZWN0b3IoJy50ZXh0Jykuc3R5bGUudGV4dERlY29yYXRpb24gPSB0YXNrLmRvbmUgPyAnbGluZS10aHJvdWdoJyA6ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRhc2tzLm9uKCdhZGQnLCBmdW5jdGlvbiAodGFzaykge1xuICAgICAgICBhZGQodGFzayk7XG4gICAgfSk7XG5cbiAgICB0YXNrcy5vbignZGVsZXRlJywgZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKHVsLmNoaWxkTm9kZXMsIGZ1bmN0aW9uIChsaSkge1xuICAgICAgICAgICAgaWYgKGxpLnRhc2sgPT09IHRhc2spIHtcbiAgICAgICAgICAgICAgICBsaS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByb290RWxlbWVudC5hcHBlbmRDaGlsZCh1bCk7XG5cbiAgICBmdW5jdGlvbiBhZGQodGFzaykge1xuICAgICAgICBsZXQgbGkgPSB0ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGxpLnRhc2sgPSB0YXNrO1xuXG5cbiAgICAgICAgbGV0IHRleHQgPSBsaS5xdWVyeVNlbGVjdG9yKCcudGV4dCcpO1xuICAgICAgICB0ZXh0LmlubmVySFRNTCA9IHRhc2sudGV4dDtcbiAgICAgICAgdGV4dC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IHRhc2suZG9uZSA/ICdsaW5lLXRocm91Z2gnIDogJyc7XG5cbiAgICAgICAgbGV0IGNoZWNrYm94ID0gbGkucXVlcnlTZWxlY3RvcignLmRvbmUnKTtcbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRhc2suZG9uZSA/ICdjaGVja2VkJyA6ICcnO1xuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGFjdGlvbnMub25Eb25lKHRhc2ssIGV2ZW50LnRhcmdldC5jaGVja2VkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGkucXVlcnlTZWxlY3RvcignLmRlbGV0ZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBhY3Rpb25zLm9uRGVsZXRlKHRhc2spO1xuICAgICAgICB9KTtcblxuICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL3NyYy9qcy90b2RvL3ZpZXcvdGFzay5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgVGFza01vZGVsIGZyb20gJy4vdGFza01vZGVsJztcbmxldCB0YXNrcyA9IG5ldyBUYXNrTW9kZWwoW1xuICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnQnJldyBjb2ZmZWUnLFxuICAgICAgICAgICAgZG9uZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnV3JpdGUgc29tZSBjb2RlJyxcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdTbGVlcCcsXG4gICAgICAgICAgICBkb25lOiBmYWxzZVxuICAgICAgICB9XG4gICAgXSk7XG5cbmV4cG9ydCBkZWZhdWx0IHRhc2tzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL3NyYy9qcy90b2RvL21vZGVsL3Rhc2suanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFza01vZGVsKHRhc2tzKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcblxuICAgIHRhc2tzID0gdGFza3MgfHwgW107XG5cbiAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICB0aGlzLnB1c2godGFzayk7XG4gICAgfSk7XG59XG5cblRhc2tNb2RlbC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEFycmF5LnByb3RvdHlwZSk7XG5cblRhc2tNb2RlbC5wcm90b3R5cGUuZG9uZSA9IGZ1bmN0aW9uICh0YXNrLCBzdGF0dXMpIHtcbiAgICB0YXNrLmRvbmUgPSBzdGF0dXM7XG4gICAgdGhpcy50cmlnZ2VyKCdkb25lJywgW3Rhc2tdKTtcbn07XG5cblRhc2tNb2RlbC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgICBsZXQgdGFzayA9IHtcbiAgICAgICAgdGV4dCxcbiAgICAgICAgZG9uZTogZmFsc2VcbiAgICB9O1xuXG4gICAgdGhpcy5wdXNoKHRhc2spO1xuICAgIHRoaXMudHJpZ2dlcignYWRkJywgW3Rhc2tdKTtcbn07XG5cblxuVGFza01vZGVsLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAodGFzaykge1xuICAgIGxldCBpbmRleCA9IHRoaXMuaW5kZXhPZih0YXNrKTtcbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICB0aGlzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgdGhpcy50cmlnZ2VyKCdkZWxldGUnLCBbdGFza10pO1xufTtcblxuXG5cblxuXG5UYXNrTW9kZWwucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKGV2ZW50LCBjYWxsYmFjaykge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goe1xuICAgICAgICBldmVudCxcbiAgICAgICAgY2FsbGJhY2tcbiAgICB9KTtcbn07XG5cblRhc2tNb2RlbC5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uIChldmVudCwgYXJncykge1xuICAgIGxldCB0YXNrcyA9IHRoaXM7XG5cbiAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyID0+IHtcbiAgICAgICAgaWYgKGxpc3RlbmVyLmV2ZW50ID09PSBldmVudCkge1xuICAgICAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2suYXBwbHkodGFza3MsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL3NyYy9qcy90b2RvL21vZGVsL3Rhc2tNb2RlbC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YXNrQWRkRnJvbVZpZXcocm9vdEVsZW1lbnQsIGFjdGlvbnMpIHtcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRleHRcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkFkZFwiPlxuICAgIGA7XG5cblxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGxldCBpbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9dGV4dF0nKTtcbiAgICAgICAgbGV0IHRleHQgPSBpbnB1dC52YWx1ZS50cmltKCk7XG5cbiAgICAgICAgaWYgKHRleHQpIHtcbiAgICAgICAgICAgIGFjdGlvbnMub25TdWJtaXQodGV4dCk7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cblxuICAgIHJvb3RFbGVtZW50LmFwcGVuZENoaWxkKGZvcm0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL3NyYy9qcy90b2RvL3ZpZXcvdGFza0FkZEZvcm0uanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==