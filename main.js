/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ "./node_modules/three/examples/jsm/controls/OrbitControls.js");
/* harmony import */ var _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tweenjs/tween.js */ "./node_modules/@tweenjs/tween.js/dist/tween.esm.js");
//22fi052
//小木曽　琉



class ThreeJSContainer {
    scene;
    light;
    constructor() { }
    // 画面部分の作成(表示する枠ごとに)
    createRendererDOM = (width, height, cameraPos) => {
        const renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer();
        renderer.setSize(width, height);
        renderer.setClearColor(new three__WEBPACK_IMPORTED_MODULE_2__.Color(0x495ed));
        renderer.shadowMap.enabled = true; // シャドウマップを有効にする
        // カメラの設定
        const camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.copy(cameraPos);
        camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 0, 0));
        const orbitControls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_0__.OrbitControls(camera, renderer.domElement);
        this.createScene();
        // 毎フレームのupdateを呼んで，render
        // reqestAnimationFrame により次フレームを呼ぶ
        const render = (time) => {
            orbitControls.update();
            _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.update(time);
            renderer.render(this.scene, camera);
            requestAnimationFrame(render);
        };
        requestAnimationFrame(render);
        renderer.domElement.style.cssFloat = "left";
        renderer.domElement.style.margin = "10px";
        return renderer.domElement;
    };
    // シーンの作成(全体で1回)
    createScene = () => {
        this.scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();
        const geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry();
        const silverColor = 0xC0C0C0;
        const textureLoader = new three__WEBPACK_IMPORTED_MODULE_2__.TextureLoader();
        //const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load('./texture.jpg');
        const material1 = new three__WEBPACK_IMPORTED_MODULE_2__.MeshPhongMaterial({ map: texture });
        const cube1 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(geometry, material1);
        this.scene.add(cube1);
        const material2 = new three__WEBPACK_IMPORTED_MODULE_2__.MeshPhongMaterial({ map: texture });
        const cube2 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(geometry, material2);
        this.scene.add(cube2);
        const material3 = new three__WEBPACK_IMPORTED_MODULE_2__.MeshPhongMaterial({ map: texture });
        const cube3 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(geometry, material3);
        this.scene.add(cube3);
        const material4 = new three__WEBPACK_IMPORTED_MODULE_2__.MeshPhongMaterial({ map: texture });
        const cube4 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(geometry, material4);
        this.scene.add(cube4);
        // Tweenでコントロールする変数の定義
        let tweenInfo1 = { positionX: 5.0, positionY: 0 };
        let tweenInfo2 = { positionX: -5.0, positionY: 0 };
        let tweenInfo3 = { positionX: 0, positionY: 5.0 };
        let tweenInfo4 = { positionX: 0, positionY: -5.0 };
        // Tweenでパラメータの更新の際に呼び出される関数
        let updatePosition1 = () => {
            cube1.position.x = tweenInfo1.positionX;
            cube1.position.y = tweenInfo1.positionY;
        };
        let updatePosition2 = () => {
            cube2.position.x = tweenInfo2.positionX;
            cube2.position.y = tweenInfo2.positionY;
        };
        let updatePosition3 = () => {
            cube3.position.x = tweenInfo3.positionX;
            cube3.position.y = tweenInfo3.positionY;
        };
        let updatePosition4 = () => {
            cube4.position.x = tweenInfo4.positionX;
            cube4.position.y = tweenInfo4.positionY;
        };
        // Tweenの作成
        const tween1 = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.Tween(tweenInfo1).to({ positionX: 0, positionY: -5 }, 2000).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.Easing.Elastic.Out).onUpdate(updatePosition1);
        const tween2 = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.Tween(tweenInfo1).to({ positionX: -5, positionY: 0 }, 2000).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.Easing.Elastic.Out).onUpdate(updatePosition1);
        const tween3 = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.Tween(tweenInfo1).to({ positionX: 0, positionY: 5 }, 2000).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.Easing.Elastic.Out).onUpdate(updatePosition1);
        const tweenBack = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.Tween(tweenInfo1).to({ positionX: 5, positionY: 0 }, 2000).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.Easing.Elastic.Out).onUpdate(updatePosition1);
        const tween4 = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.Tween(tweenInfo2).to({ positionX: 0, positionY: 5 }, 2000).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.Easing.Elastic.Out).onUpdate(updatePosition2);
        const tween5 = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.Tween(tweenInfo2).to({ positionX: 5, positionY: 0 }, 2000).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.Easing.Elastic.Out).onUpdate(updatePosition2);
        const tween6 = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.Tween(tweenInfo2).to({ positionX: 0, positionY: -5 }, 2000).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.Easing.Elastic.Out).onUpdate(updatePosition2);
        const tweenBack2 = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.Tween(tweenInfo2).to({ positionX: -5, positionY: 0 }, 2000).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.Easing.Elastic.Out).onUpdate(updatePosition2);
        const tween7 = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.Tween(tweenInfo3).to({ positionX: 5, positionY: 0 }, 2000).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.Easing.Elastic.Out).onUpdate(updatePosition3);
        const tween8 = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.Tween(tweenInfo3).to({ positionX: 0, positionY: -5 }, 2000).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.Easing.Elastic.Out).onUpdate(updatePosition3);
        const tween9 = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.Tween(tweenInfo3).to({ positionX: -5, positionY: 0 }, 2000).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.Easing.Elastic.Out).onUpdate(updatePosition3);
        const tweenBack3 = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.Tween(tweenInfo3).to({ positionX: 0, positionY: 5 }, 2000).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.Easing.Elastic.Out).onUpdate(updatePosition3);
        const tween10 = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.Tween(tweenInfo4).to({ positionX: -5, positionY: 0 }, 2000).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.Easing.Elastic.Out).onUpdate(updatePosition4);
        const tween11 = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.Tween(tweenInfo4).to({ positionX: 0, positionY: 5 }, 2000).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.Easing.Elastic.Out).onUpdate(updatePosition4);
        const tween12 = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.Tween(tweenInfo4).to({ positionX: 5, positionY: 0 }, 2000).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.Easing.Elastic.Out).onUpdate(updatePosition4);
        const tweenBack4 = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.Tween(tweenInfo4).to({ positionX: 0, positionY: -5 }, 2000).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.Easing.Elastic.Out).onUpdate(updatePosition4);
        // アニメーションを連結してループさせる
        tween1.chain(tween2);
        tween2.chain(tween3);
        tween3.chain(tweenBack);
        tweenBack.chain(tween1);
        tween4.chain(tween5);
        tween5.chain(tween6);
        tween6.chain(tweenBack2);
        tweenBack2.chain(tween4);
        tween7.chain(tween8);
        tween8.chain(tween9);
        tween9.chain(tweenBack3);
        tweenBack3.chain(tween7);
        tween10.chain(tween11);
        tween11.chain(tween12);
        tween12.chain(tweenBack4);
        tweenBack4.chain(tween10);
        // アニメーションの開始
        tween1.start();
        tween4.start();
        tween7.start();
        tween10.start();
        // 球体の追加
        const sphereGeometry = new three__WEBPACK_IMPORTED_MODULE_2__.SphereGeometry(0.5, 32, 32);
        const sphereMaterial1 = new three__WEBPACK_IMPORTED_MODULE_2__.MeshPhongMaterial({ color: silverColor });
        const sphere1 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(sphereGeometry, sphereMaterial1);
        this.scene.add(sphere1);
        const sphereMaterial2 = new three__WEBPACK_IMPORTED_MODULE_2__.MeshPhongMaterial({ color: silverColor });
        const sphere2 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(sphereGeometry, sphereMaterial2);
        this.scene.add(sphere2);
        const sphereMaterial3 = new three__WEBPACK_IMPORTED_MODULE_2__.MeshPhongMaterial({ color: silverColor });
        const sphere3 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(sphereGeometry, sphereMaterial3);
        this.scene.add(sphere3);
        const sphereMaterial4 = new three__WEBPACK_IMPORTED_MODULE_2__.MeshPhongMaterial({ color: silverColor });
        const sphere4 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(sphereGeometry, sphereMaterial4);
        this.scene.add(sphere4);
        // 球体のTween情報と更新関数
        let sphereInfo1 = { angle: 0 };
        let sphereInfo2 = { angle: Math.PI / 2 };
        let sphereInfo3 = { angle: Math.PI };
        let sphereInfo4 = { angle: 3 * Math.PI / 2 };
        let updateSpherePosition1 = () => {
            sphere1.position.x = 7 * Math.cos(sphereInfo1.angle);
            sphere1.position.y = 7 * Math.sin(sphereInfo1.angle);
        };
        let updateSpherePosition2 = () => {
            sphere2.position.x = 7 * Math.cos(sphereInfo2.angle);
            sphere2.position.y = 7 * Math.sin(sphereInfo2.angle);
        };
        let updateSpherePosition3 = () => {
            sphere3.position.x = 7 * Math.cos(sphereInfo3.angle);
            sphere3.position.y = 7 * Math.sin(sphereInfo3.angle);
        };
        let updateSpherePosition4 = () => {
            sphere4.position.x = 7 * Math.cos(sphereInfo4.angle);
            sphere4.position.y = 7 * Math.sin(sphereInfo4.angle);
        };
        // 球体のTween
        const sphereTween1 = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.Tween(sphereInfo1).to({ angle: sphereInfo1.angle + 2 * Math.PI }, 8000).onUpdate(updateSpherePosition1).repeat(Infinity);
        const sphereTween2 = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.Tween(sphereInfo2).to({ angle: sphereInfo2.angle + 2 * Math.PI }, 8000).onUpdate(updateSpherePosition2).repeat(Infinity);
        const sphereTween3 = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.Tween(sphereInfo3).to({ angle: sphereInfo3.angle + 2 * Math.PI }, 8000).onUpdate(updateSpherePosition3).repeat(Infinity);
        const sphereTween4 = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.Tween(sphereInfo4).to({ angle: sphereInfo4.angle + 2 * Math.PI }, 8000).onUpdate(updateSpherePosition4).repeat(Infinity);
        // 球体アニメーションの開始
        sphereTween1.start();
        sphereTween2.start();
        sphereTween3.start();
        sphereTween4.start();
        // ライトの設定
        this.light = new three__WEBPACK_IMPORTED_MODULE_2__.DirectionalLight(0xffffff);
        const lvec = new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(1, 1, 1).clone().normalize();
        this.light.position.set(lvec.x, lvec.y, lvec.z);
        this.scene.add(this.light);
        // アンビエントライトの追加
        const ambientLight = new three__WEBPACK_IMPORTED_MODULE_2__.AmbientLight(0x404040, 1); // 色と強度
        this.scene.add(ambientLight);
        // ポイントライトの追加
        const pointLight = new three__WEBPACK_IMPORTED_MODULE_2__.PointLight(0xffffff, 1);
        pointLight.position.set(10, 10, 10);
        this.scene.add(pointLight);
    };
}
window.addEventListener("DOMContentLoaded", init);
function init() {
    let container = new ThreeJSContainer();
    let viewport = container.createRendererDOM(640, 480, new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 0, 10));
    document.body.appendChild(viewport);
}


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcgprendering"] = self["webpackChunkcgprendering"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_tweenjs_tween_js_dist_tween_esm_js-node_modules_three_examples_jsm_contr-78d392"], () => (__webpack_require__("./src/app.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsUUFBUSxDQUFDLENBQUM7QUFDeEMsQ0FBQzs7Ozs7OztVQ2hPRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NncHJlbmRlcmluZy8uL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vY2dwcmVuZGVyaW5nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2dwcmVuZGVyaW5nL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2dwcmVuZGVyaW5nL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2dwcmVuZGVyaW5nL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vY2dwcmVuZGVyaW5nL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLzIyZmkwNTJcbi8v5bCP5pyo5pu944CA55CJXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHNcIjtcbmltcG9ydCAqIGFzIFRXRUVOIGZyb20gXCJAdHdlZW5qcy90d2Vlbi5qc1wiO1xuXG5jbGFzcyBUaHJlZUpTQ29udGFpbmVyIHtcbiAgICBwcml2YXRlIHNjZW5lOiBUSFJFRS5TY2VuZTtcbiAgICBwcml2YXRlIGxpZ2h0OiBUSFJFRS5MaWdodDtcblxuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIC8vIOeUu+mdoumDqOWIhuOBruS9nOaIkCjooajnpLrjgZnjgovmnqDjgZTjgajjgaspXG4gICAgcHVibGljIGNyZWF0ZVJlbmRlcmVyRE9NID0gKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBjYW1lcmFQb3M6IFRIUkVFLlZlY3RvcjMpID0+IHtcbiAgICAgICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigpO1xuICAgICAgICByZW5kZXJlci5zZXRTaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICByZW5kZXJlci5zZXRDbGVhckNvbG9yKG5ldyBUSFJFRS5Db2xvcigweDQ5NWVkKSk7XG4gICAgICAgIHJlbmRlcmVyLnNoYWRvd01hcC5lbmFibGVkID0gdHJ1ZTsgLy8g44K344Oj44OJ44Km44Oe44OD44OX44KS5pyJ5Yq544Gr44GZ44KLXG5cbiAgICAgICAgLy8g44Kr44Oh44Op44Gu6Kit5a6aXG4gICAgICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg3NSwgd2lkdGggLyBoZWlnaHQsIDAuMSwgMTAwMCk7XG4gICAgICAgIGNhbWVyYS5wb3NpdGlvbi5jb3B5KGNhbWVyYVBvcyk7XG4gICAgICAgIGNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCkpO1xuXG4gICAgICAgIGNvbnN0IG9yYml0Q29udHJvbHMgPSBuZXcgT3JiaXRDb250cm9scyhjYW1lcmEsIHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlU2NlbmUoKTtcbiAgICAgICAgLy8g5q+O44OV44Os44O844Og44GudXBkYXRl44KS5ZG844KT44Gn77yMcmVuZGVyXG4gICAgICAgIC8vIHJlcWVzdEFuaW1hdGlvbkZyYW1lIOOBq+OCiOOCiuasoeODleODrOODvOODoOOCkuWRvOOBtlxuICAgICAgICBjb25zdCByZW5kZXI6IEZyYW1lUmVxdWVzdENhbGxiYWNrID0gKHRpbWUpID0+IHtcbiAgICAgICAgICAgIG9yYml0Q29udHJvbHMudXBkYXRlKCk7XG4gICAgICAgICAgICBUV0VFTi51cGRhdGUodGltZSk7XG4gICAgICAgICAgICByZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgY2FtZXJhKTtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICAgICAgICB9O1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcblxuICAgICAgICByZW5kZXJlci5kb21FbGVtZW50LnN0eWxlLmNzc0Zsb2F0ID0gXCJsZWZ0XCI7XG4gICAgICAgIHJlbmRlcmVyLmRvbUVsZW1lbnQuc3R5bGUubWFyZ2luID0gXCIxMHB4XCI7XG4gICAgICAgIHJldHVybiByZW5kZXJlci5kb21FbGVtZW50O1xuICAgIH07XG5cbiAgICAvLyDjgrfjg7zjg7Pjga7kvZzmiJAo5YWo5L2T44GnMeWbnilcbiAgICBwcml2YXRlIGNyZWF0ZVNjZW5lID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG5cbiAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoKTtcbiAgICAgICAgY29uc3Qgc2lsdmVyQ29sb3IgPSAweEMwQzBDMDtcblxuICAgICAgICBjb25zdCB0ZXh0dXJlTG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKTtcbiAgICAgICAgY29uc3QgdGV4dHVyZSA9IHRleHR1cmVMb2FkZXIubG9hZCgndGV4dHVyZS5qcGcnKTsgLy8g44OG44Kv44K544OB44Oj55S75YOP44Gu44OR44K544KS5oyH5a6aXG5cbiAgICAgICAgY29uc3QgbWF0ZXJpYWwxID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHsgbWFwOiB0ZXh0dXJlIH0pO1xuICAgICAgICBjb25zdCBjdWJlMSA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbDEpO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZChjdWJlMSk7XG5cbiAgICAgICAgY29uc3QgbWF0ZXJpYWwyID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHsgbWFwOiB0ZXh0dXJlIH0pO1xuICAgICAgICBjb25zdCBjdWJlMiA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbDIpO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZChjdWJlMik7XG5cbiAgICAgICAgY29uc3QgbWF0ZXJpYWwzID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHsgbWFwOiB0ZXh0dXJlIH0pO1xuICAgICAgICBjb25zdCBjdWJlMyA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbDMpO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZChjdWJlMyk7XG5cbiAgICAgICAgY29uc3QgbWF0ZXJpYWw0ID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHsgbWFwOiB0ZXh0dXJlIH0pO1xuICAgICAgICBjb25zdCBjdWJlNCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbDQpO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZChjdWJlNCk7XG5cbiAgICAgICAgLy8gVHdlZW7jgafjgrPjg7Pjg4jjg63jg7zjg6vjgZnjgovlpInmlbDjga7lrprnvqlcbiAgICAgICAgbGV0IHR3ZWVuSW5mbzEgPSB7IHBvc2l0aW9uWDogNS4wLCBwb3NpdGlvblk6IDAgfTtcbiAgICAgICAgbGV0IHR3ZWVuSW5mbzIgPSB7IHBvc2l0aW9uWDogLTUuMCwgcG9zaXRpb25ZOiAwIH07XG4gICAgICAgIGxldCB0d2VlbkluZm8zID0geyBwb3NpdGlvblg6IDAsIHBvc2l0aW9uWTogNS4wIH07XG4gICAgICAgIGxldCB0d2VlbkluZm80ID0geyBwb3NpdGlvblg6IDAsIHBvc2l0aW9uWTogLTUuMCB9O1xuXG4gICAgICAgIC8vIFR3ZWVu44Gn44OR44Op44Oh44O844K/44Gu5pu05paw44Gu6Zqb44Gr5ZG844Gz5Ye644GV44KM44KL6Zai5pWwXG4gICAgICAgIGxldCB1cGRhdGVQb3NpdGlvbjEgPSAoKSA9PiB7XG4gICAgICAgICAgICBjdWJlMS5wb3NpdGlvbi54ID0gdHdlZW5JbmZvMS5wb3NpdGlvblg7XG4gICAgICAgICAgICBjdWJlMS5wb3NpdGlvbi55ID0gdHdlZW5JbmZvMS5wb3NpdGlvblk7XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHVwZGF0ZVBvc2l0aW9uMiA9ICgpID0+IHtcbiAgICAgICAgICAgIGN1YmUyLnBvc2l0aW9uLnggPSB0d2VlbkluZm8yLnBvc2l0aW9uWDtcbiAgICAgICAgICAgIGN1YmUyLnBvc2l0aW9uLnkgPSB0d2VlbkluZm8yLnBvc2l0aW9uWTtcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgdXBkYXRlUG9zaXRpb24zID0gKCkgPT4ge1xuICAgICAgICAgICAgY3ViZTMucG9zaXRpb24ueCA9IHR3ZWVuSW5mbzMucG9zaXRpb25YO1xuICAgICAgICAgICAgY3ViZTMucG9zaXRpb24ueSA9IHR3ZWVuSW5mbzMucG9zaXRpb25ZO1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCB1cGRhdGVQb3NpdGlvbjQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjdWJlNC5wb3NpdGlvbi54ID0gdHdlZW5JbmZvNC5wb3NpdGlvblg7XG4gICAgICAgICAgICBjdWJlNC5wb3NpdGlvbi55ID0gdHdlZW5JbmZvNC5wb3NpdGlvblk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gVHdlZW7jga7kvZzmiJBcbiAgICAgICAgY29uc3QgdHdlZW4xID0gbmV3IFRXRUVOLlR3ZWVuKHR3ZWVuSW5mbzEpLnRvKHsgcG9zaXRpb25YOiAwLCBwb3NpdGlvblk6IC01IH0sIDIwMDApLmVhc2luZyhUV0VFTi5FYXNpbmcuRWxhc3RpYy5PdXQpLm9uVXBkYXRlKHVwZGF0ZVBvc2l0aW9uMSk7XG4gICAgICAgIGNvbnN0IHR3ZWVuMiA9IG5ldyBUV0VFTi5Ud2Vlbih0d2VlbkluZm8xKS50byh7IHBvc2l0aW9uWDogLTUsIHBvc2l0aW9uWTogMCB9LCAyMDAwKS5lYXNpbmcoVFdFRU4uRWFzaW5nLkVsYXN0aWMuT3V0KS5vblVwZGF0ZSh1cGRhdGVQb3NpdGlvbjEpO1xuICAgICAgICBjb25zdCB0d2VlbjMgPSBuZXcgVFdFRU4uVHdlZW4odHdlZW5JbmZvMSkudG8oeyBwb3NpdGlvblg6IDAsIHBvc2l0aW9uWTogNSB9LCAyMDAwKS5lYXNpbmcoVFdFRU4uRWFzaW5nLkVsYXN0aWMuT3V0KS5vblVwZGF0ZSh1cGRhdGVQb3NpdGlvbjEpO1xuICAgICAgICBjb25zdCB0d2VlbkJhY2sgPSBuZXcgVFdFRU4uVHdlZW4odHdlZW5JbmZvMSkudG8oeyBwb3NpdGlvblg6IDUsIHBvc2l0aW9uWTogMCB9LCAyMDAwKS5lYXNpbmcoVFdFRU4uRWFzaW5nLkVsYXN0aWMuT3V0KS5vblVwZGF0ZSh1cGRhdGVQb3NpdGlvbjEpO1xuXG4gICAgICAgIGNvbnN0IHR3ZWVuNCA9IG5ldyBUV0VFTi5Ud2Vlbih0d2VlbkluZm8yKS50byh7IHBvc2l0aW9uWDogMCwgcG9zaXRpb25ZOiA1IH0sIDIwMDApLmVhc2luZyhUV0VFTi5FYXNpbmcuRWxhc3RpYy5PdXQpLm9uVXBkYXRlKHVwZGF0ZVBvc2l0aW9uMik7XG4gICAgICAgIGNvbnN0IHR3ZWVuNSA9IG5ldyBUV0VFTi5Ud2Vlbih0d2VlbkluZm8yKS50byh7IHBvc2l0aW9uWDogNSwgcG9zaXRpb25ZOiAwIH0sIDIwMDApLmVhc2luZyhUV0VFTi5FYXNpbmcuRWxhc3RpYy5PdXQpLm9uVXBkYXRlKHVwZGF0ZVBvc2l0aW9uMik7XG4gICAgICAgIGNvbnN0IHR3ZWVuNiA9IG5ldyBUV0VFTi5Ud2Vlbih0d2VlbkluZm8yKS50byh7IHBvc2l0aW9uWDogMCwgcG9zaXRpb25ZOiAtNSB9LCAyMDAwKS5lYXNpbmcoVFdFRU4uRWFzaW5nLkVsYXN0aWMuT3V0KS5vblVwZGF0ZSh1cGRhdGVQb3NpdGlvbjIpO1xuICAgICAgICBjb25zdCB0d2VlbkJhY2syID0gbmV3IFRXRUVOLlR3ZWVuKHR3ZWVuSW5mbzIpLnRvKHsgcG9zaXRpb25YOiAtNSwgcG9zaXRpb25ZOiAwIH0sIDIwMDApLmVhc2luZyhUV0VFTi5FYXNpbmcuRWxhc3RpYy5PdXQpLm9uVXBkYXRlKHVwZGF0ZVBvc2l0aW9uMik7XG5cbiAgICAgICAgY29uc3QgdHdlZW43ID0gbmV3IFRXRUVOLlR3ZWVuKHR3ZWVuSW5mbzMpLnRvKHsgcG9zaXRpb25YOiA1LCBwb3NpdGlvblk6IDAgfSwgMjAwMCkuZWFzaW5nKFRXRUVOLkVhc2luZy5FbGFzdGljLk91dCkub25VcGRhdGUodXBkYXRlUG9zaXRpb24zKTtcbiAgICAgICAgY29uc3QgdHdlZW44ID0gbmV3IFRXRUVOLlR3ZWVuKHR3ZWVuSW5mbzMpLnRvKHsgcG9zaXRpb25YOiAwLCBwb3NpdGlvblk6IC01IH0sIDIwMDApLmVhc2luZyhUV0VFTi5FYXNpbmcuRWxhc3RpYy5PdXQpLm9uVXBkYXRlKHVwZGF0ZVBvc2l0aW9uMyk7XG4gICAgICAgIGNvbnN0IHR3ZWVuOSA9IG5ldyBUV0VFTi5Ud2Vlbih0d2VlbkluZm8zKS50byh7IHBvc2l0aW9uWDogLTUsIHBvc2l0aW9uWTogMCB9LCAyMDAwKS5lYXNpbmcoVFdFRU4uRWFzaW5nLkVsYXN0aWMuT3V0KS5vblVwZGF0ZSh1cGRhdGVQb3NpdGlvbjMpO1xuICAgICAgICBjb25zdCB0d2VlbkJhY2szID0gbmV3IFRXRUVOLlR3ZWVuKHR3ZWVuSW5mbzMpLnRvKHsgcG9zaXRpb25YOiAwLCBwb3NpdGlvblk6IDUgfSwgMjAwMCkuZWFzaW5nKFRXRUVOLkVhc2luZy5FbGFzdGljLk91dCkub25VcGRhdGUodXBkYXRlUG9zaXRpb24zKTtcblxuICAgICAgICBjb25zdCB0d2VlbjEwID0gbmV3IFRXRUVOLlR3ZWVuKHR3ZWVuSW5mbzQpLnRvKHsgcG9zaXRpb25YOiAtNSwgcG9zaXRpb25ZOiAwIH0sIDIwMDApLmVhc2luZyhUV0VFTi5FYXNpbmcuRWxhc3RpYy5PdXQpLm9uVXBkYXRlKHVwZGF0ZVBvc2l0aW9uNCk7XG4gICAgICAgIGNvbnN0IHR3ZWVuMTEgPSBuZXcgVFdFRU4uVHdlZW4odHdlZW5JbmZvNCkudG8oeyBwb3NpdGlvblg6IDAsIHBvc2l0aW9uWTogNSB9LCAyMDAwKS5lYXNpbmcoVFdFRU4uRWFzaW5nLkVsYXN0aWMuT3V0KS5vblVwZGF0ZSh1cGRhdGVQb3NpdGlvbjQpO1xuICAgICAgICBjb25zdCB0d2VlbjEyID0gbmV3IFRXRUVOLlR3ZWVuKHR3ZWVuSW5mbzQpLnRvKHsgcG9zaXRpb25YOiA1LCBwb3NpdGlvblk6IDAgfSwgMjAwMCkuZWFzaW5nKFRXRUVOLkVhc2luZy5FbGFzdGljLk91dCkub25VcGRhdGUodXBkYXRlUG9zaXRpb240KTtcbiAgICAgICAgY29uc3QgdHdlZW5CYWNrNCA9IG5ldyBUV0VFTi5Ud2Vlbih0d2VlbkluZm80KS50byh7IHBvc2l0aW9uWDogMCwgcG9zaXRpb25ZOiAtNSB9LCAyMDAwKS5lYXNpbmcoVFdFRU4uRWFzaW5nLkVsYXN0aWMuT3V0KS5vblVwZGF0ZSh1cGRhdGVQb3NpdGlvbjQpO1xuXG4gICAgICAgIC8vIOOCouODi+ODoeODvOOCt+ODp+ODs+OCkumAo+e1kOOBl+OBpuODq+ODvOODl+OBleOBm+OCi1xuICAgICAgICB0d2VlbjEuY2hhaW4odHdlZW4yKTtcbiAgICAgICAgdHdlZW4yLmNoYWluKHR3ZWVuMyk7XG4gICAgICAgIHR3ZWVuMy5jaGFpbih0d2VlbkJhY2spO1xuICAgICAgICB0d2VlbkJhY2suY2hhaW4odHdlZW4xKTtcblxuICAgICAgICB0d2VlbjQuY2hhaW4odHdlZW41KTtcbiAgICAgICAgdHdlZW41LmNoYWluKHR3ZWVuNik7XG4gICAgICAgIHR3ZWVuNi5jaGFpbih0d2VlbkJhY2syKTtcbiAgICAgICAgdHdlZW5CYWNrMi5jaGFpbih0d2VlbjQpO1xuXG4gICAgICAgIHR3ZWVuNy5jaGFpbih0d2VlbjgpO1xuICAgICAgICB0d2VlbjguY2hhaW4odHdlZW45KTtcbiAgICAgICAgdHdlZW45LmNoYWluKHR3ZWVuQmFjazMpO1xuICAgICAgICB0d2VlbkJhY2szLmNoYWluKHR3ZWVuNyk7XG5cbiAgICAgICAgdHdlZW4xMC5jaGFpbih0d2VlbjExKTtcbiAgICAgICAgdHdlZW4xMS5jaGFpbih0d2VlbjEyKTtcbiAgICAgICAgdHdlZW4xMi5jaGFpbih0d2VlbkJhY2s0KTtcbiAgICAgICAgdHdlZW5CYWNrNC5jaGFpbih0d2VlbjEwKTtcblxuICAgICAgICAvLyDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Pjga7plovlp4tcbiAgICAgICAgdHdlZW4xLnN0YXJ0KCk7XG4gICAgICAgIHR3ZWVuNC5zdGFydCgpO1xuICAgICAgICB0d2Vlbjcuc3RhcnQoKTtcbiAgICAgICAgdHdlZW4xMC5zdGFydCgpO1xuXG4gICAgICAgIC8vIOeQg+S9k+OBrui/veWKoFxuICAgICAgICBjb25zdCBzcGhlcmVHZW9tZXRyeSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgwLjUsIDMyLCAzMik7XG5cbiAgICAgICAgY29uc3Qgc3BoZXJlTWF0ZXJpYWwxID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHsgY29sb3I6IHNpbHZlckNvbG9yIH0pO1xuICAgICAgICBjb25zdCBzcGhlcmUxID0gbmV3IFRIUkVFLk1lc2goc3BoZXJlR2VvbWV0cnksIHNwaGVyZU1hdGVyaWFsMSk7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHNwaGVyZTEpO1xuXG4gICAgICAgIGNvbnN0IHNwaGVyZU1hdGVyaWFsMiA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7IGNvbG9yOiBzaWx2ZXJDb2xvciB9KTtcbiAgICAgICAgY29uc3Qgc3BoZXJlMiA9IG5ldyBUSFJFRS5NZXNoKHNwaGVyZUdlb21ldHJ5LCBzcGhlcmVNYXRlcmlhbDIpO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZChzcGhlcmUyKTtcblxuICAgICAgICBjb25zdCBzcGhlcmVNYXRlcmlhbDMgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoeyBjb2xvcjogc2lsdmVyQ29sb3IgfSk7XG4gICAgICAgIGNvbnN0IHNwaGVyZTMgPSBuZXcgVEhSRUUuTWVzaChzcGhlcmVHZW9tZXRyeSwgc3BoZXJlTWF0ZXJpYWwzKTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQoc3BoZXJlMyk7XG5cbiAgICAgICAgY29uc3Qgc3BoZXJlTWF0ZXJpYWw0ID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHsgY29sb3I6IHNpbHZlckNvbG9yIH0pO1xuICAgICAgICBjb25zdCBzcGhlcmU0ID0gbmV3IFRIUkVFLk1lc2goc3BoZXJlR2VvbWV0cnksIHNwaGVyZU1hdGVyaWFsNCk7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHNwaGVyZTQpO1xuXG4gICAgICAgIC8vIOeQg+S9k+OBrlR3ZWVu5oOF5aCx44Go5pu05paw6Zai5pWwXG4gICAgICAgIGxldCBzcGhlcmVJbmZvMSA9IHsgYW5nbGU6IDAgfTtcbiAgICAgICAgbGV0IHNwaGVyZUluZm8yID0geyBhbmdsZTogTWF0aC5QSSAvIDIgfTtcbiAgICAgICAgbGV0IHNwaGVyZUluZm8zID0geyBhbmdsZTogTWF0aC5QSSB9O1xuICAgICAgICBsZXQgc3BoZXJlSW5mbzQgPSB7IGFuZ2xlOiAzICogTWF0aC5QSSAvIDIgfTtcblxuICAgICAgICBsZXQgdXBkYXRlU3BoZXJlUG9zaXRpb24xID0gKCkgPT4ge1xuICAgICAgICAgICAgc3BoZXJlMS5wb3NpdGlvbi54ID0gNyAqIE1hdGguY29zKHNwaGVyZUluZm8xLmFuZ2xlKTtcbiAgICAgICAgICAgIHNwaGVyZTEucG9zaXRpb24ueSA9IDcgKiBNYXRoLnNpbihzcGhlcmVJbmZvMS5hbmdsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHVwZGF0ZVNwaGVyZVBvc2l0aW9uMiA9ICgpID0+IHtcbiAgICAgICAgICAgIHNwaGVyZTIucG9zaXRpb24ueCA9IDcgKiBNYXRoLmNvcyhzcGhlcmVJbmZvMi5hbmdsZSk7XG4gICAgICAgICAgICBzcGhlcmUyLnBvc2l0aW9uLnkgPSA3ICogTWF0aC5zaW4oc3BoZXJlSW5mbzIuYW5nbGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCB1cGRhdGVTcGhlcmVQb3NpdGlvbjMgPSAoKSA9PiB7XG4gICAgICAgICAgICBzcGhlcmUzLnBvc2l0aW9uLnggPSA3ICogTWF0aC5jb3Moc3BoZXJlSW5mbzMuYW5nbGUpO1xuICAgICAgICAgICAgc3BoZXJlMy5wb3NpdGlvbi55ID0gNyAqIE1hdGguc2luKHNwaGVyZUluZm8zLmFuZ2xlKTtcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgdXBkYXRlU3BoZXJlUG9zaXRpb240ID0gKCkgPT4ge1xuICAgICAgICAgICAgc3BoZXJlNC5wb3NpdGlvbi54ID0gNyAqIE1hdGguY29zKHNwaGVyZUluZm80LmFuZ2xlKTtcbiAgICAgICAgICAgIHNwaGVyZTQucG9zaXRpb24ueSA9IDcgKiBNYXRoLnNpbihzcGhlcmVJbmZvNC5hbmdsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8g55CD5L2T44GuVHdlZW5cbiAgICAgICAgY29uc3Qgc3BoZXJlVHdlZW4xID0gbmV3IFRXRUVOLlR3ZWVuKHNwaGVyZUluZm8xKS50byh7IGFuZ2xlOiBzcGhlcmVJbmZvMS5hbmdsZSArIDIgKiBNYXRoLlBJIH0sIDgwMDApLm9uVXBkYXRlKHVwZGF0ZVNwaGVyZVBvc2l0aW9uMSkucmVwZWF0KEluZmluaXR5KTtcbiAgICAgICAgY29uc3Qgc3BoZXJlVHdlZW4yID0gbmV3IFRXRUVOLlR3ZWVuKHNwaGVyZUluZm8yKS50byh7IGFuZ2xlOiBzcGhlcmVJbmZvMi5hbmdsZSArIDIgKiBNYXRoLlBJIH0sIDgwMDApLm9uVXBkYXRlKHVwZGF0ZVNwaGVyZVBvc2l0aW9uMikucmVwZWF0KEluZmluaXR5KTtcbiAgICAgICAgY29uc3Qgc3BoZXJlVHdlZW4zID0gbmV3IFRXRUVOLlR3ZWVuKHNwaGVyZUluZm8zKS50byh7IGFuZ2xlOiBzcGhlcmVJbmZvMy5hbmdsZSArIDIgKiBNYXRoLlBJIH0sIDgwMDApLm9uVXBkYXRlKHVwZGF0ZVNwaGVyZVBvc2l0aW9uMykucmVwZWF0KEluZmluaXR5KTtcbiAgICAgICAgY29uc3Qgc3BoZXJlVHdlZW40ID0gbmV3IFRXRUVOLlR3ZWVuKHNwaGVyZUluZm80KS50byh7IGFuZ2xlOiBzcGhlcmVJbmZvNC5hbmdsZSArIDIgKiBNYXRoLlBJIH0sIDgwMDApLm9uVXBkYXRlKHVwZGF0ZVNwaGVyZVBvc2l0aW9uNCkucmVwZWF0KEluZmluaXR5KTtcblxuICAgICAgICAvLyDnkIPkvZPjgqLjg4vjg6Hjg7zjgrfjg6fjg7Pjga7plovlp4tcbiAgICAgICAgc3BoZXJlVHdlZW4xLnN0YXJ0KCk7XG4gICAgICAgIHNwaGVyZVR3ZWVuMi5zdGFydCgpO1xuICAgICAgICBzcGhlcmVUd2VlbjMuc3RhcnQoKTtcbiAgICAgICAgc3BoZXJlVHdlZW40LnN0YXJ0KCk7XG5cbiAgICAgICAgLy8g44Op44Kk44OI44Gu6Kit5a6aXG4gICAgICAgIHRoaXMubGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCgweGZmZmZmZik7XG4gICAgICAgIGNvbnN0IGx2ZWMgPSBuZXcgVEhSRUUuVmVjdG9yMygxLCAxLCAxKS5ub3JtYWxpemUoKTtcbiAgICAgICAgdGhpcy5saWdodC5wb3NpdGlvbi5zZXQobHZlYy54LCBsdmVjLnksIGx2ZWMueik7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMubGlnaHQpO1xuXG4gICAgICAgIC8vIOOCouODs+ODk+OCqOODs+ODiOODqeOCpOODiOOBrui/veWKoFxuICAgICAgICBjb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4NDA0MDQwLCAxKTsgLy8g6Imy44Go5by35bqmXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKGFtYmllbnRMaWdodCk7XG5cbiAgICAgICAgLy8g44Od44Kk44Oz44OI44Op44Kk44OI44Gu6L+95YqgXG4gICAgICAgIGNvbnN0IHBvaW50TGlnaHQgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCgweGZmZmZmZiwgMSk7XG4gICAgICAgIHBvaW50TGlnaHQucG9zaXRpb24uc2V0KDEwLCAxMCwgMTApO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZChwb2ludExpZ2h0KTtcbiAgICB9O1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdCk7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IG5ldyBUaHJlZUpTQ29udGFpbmVyKCk7XG5cbiAgICBsZXQgdmlld3BvcnQgPSBjb250YWluZXIuY3JlYXRlUmVuZGVyZXJET00oNjQwLCA0ODAsIG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDEwKSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh2aWV3cG9ydCk7XG59XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rY2dwcmVuZGVyaW5nXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2NncHJlbmRlcmluZ1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfdHdlZW5qc190d2Vlbl9qc19kaXN0X3R3ZWVuX2VzbV9qcy1ub2RlX21vZHVsZXNfdGhyZWVfZXhhbXBsZXNfanNtX2NvbnRyLTc4ZDM5MlwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hcHAudHNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==