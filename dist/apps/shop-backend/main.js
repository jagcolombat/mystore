(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/shop-backend/src/app/app.controller.ts":
/*!*****************************************************!*\
  !*** ./apps/shop-backend/src/app/app.controller.ts ***!
  \*****************************************************/
/*! exports provided: AppController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppController", function() { return AppController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_passport__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth */ "./apps/shop-backend/src/app/auth/index.ts");
var _a;




let AppController = class AppController {
    constructor(authService) {
        this.authService = authService;
    }
    login(req) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.authService.login(req.user);
        });
    }
    getProfile(req) {
        return req.user;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UseGuards"])(Object(_nestjs_passport__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"])('local')),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('login'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Request"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], AppController.prototype, "login", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UseGuards"])(Object(_nestjs_passport__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"])()),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('me'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Request"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], AppController.prototype, "getProfile", null);
AppController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _auth__WEBPACK_IMPORTED_MODULE_3__["AuthService"] !== "undefined" && _auth__WEBPACK_IMPORTED_MODULE_3__["AuthService"]) === "function" ? _a : Object])
], AppController);



/***/ }),

/***/ "./apps/shop-backend/src/app/app.module.ts":
/*!*************************************************!*\
  !*** ./apps/shop-backend/src/app/app.module.ts ***!
  \*************************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shop_shop_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shop/shop.module */ "./apps/shop-backend/src/app/shop/shop.module.ts");
/* harmony import */ var _shop_entity_product_entity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shop/entity/product.entity */ "./apps/shop-backend/src/app/shop/entity/product.entity.ts");
/* harmony import */ var _users_entity_user_entity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users/entity/user.entity */ "./apps/shop-backend/src/app/users/entity/user.entity.ts");
/* harmony import */ var _users_users_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users/users.module */ "./apps/shop-backend/src/app/users/users.module.ts");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth */ "./apps/shop-backend/src/app/auth/index.ts");
/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.controller */ "./apps/shop-backend/src/app/app.controller.ts");
/* harmony import */ var _nestjs_serve_static__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nestjs/serve-static */ "@nestjs/serve-static");
/* harmony import */ var _nestjs_serve_static__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_nestjs_serve_static__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _env_shop_backend_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @env/shop-backend/environment */ "./apps/shop-backend/src/environments/environment.ts");












let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        controllers: [_app_controller__WEBPACK_IMPORTED_MODULE_8__["AppController"]],
        imports: [
            _shop_shop_module__WEBPACK_IMPORTED_MODULE_3__["ShopModule"],
            _users_users_module__WEBPACK_IMPORTED_MODULE_6__["UsersModule"],
            _auth__WEBPACK_IMPORTED_MODULE_7__["AuthModule"],
            _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__["TypeOrmModule"].forRoot({
                "type": "mysql",
                "port": _env_shop_backend_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].dbPort,
                "host": _env_shop_backend_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].dbHost,
                "username": _env_shop_backend_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].dbUser,
                "password": _env_shop_backend_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].dbPass,
                "database": _env_shop_backend_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].dbDB,
                "synchronize": true,
                "logging": true,
                "entities": [
                    _shop_entity_product_entity__WEBPACK_IMPORTED_MODULE_4__["ProductEntity"],
                    _users_entity_user_entity__WEBPACK_IMPORTED_MODULE_5__["UserEntity"]
                ]
            }),
            _nestjs_serve_static__WEBPACK_IMPORTED_MODULE_9__["ServeStaticModule"].forRoot({
                rootPath: Object(path__WEBPACK_IMPORTED_MODULE_10__["join"])(__dirname, '..', 'shop'),
                exclude: ['/shop-backend*']
            })
        ]
    })
], AppModule);



/***/ }),

/***/ "./apps/shop-backend/src/app/auth/auth.module.ts":
/*!*******************************************************!*\
  !*** ./apps/shop-backend/src/app/auth/auth.module.ts ***!
  \*******************************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../users */ "./apps/shop-backend/src/app/users/index.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./apps/shop-backend/src/app/auth/auth.service.ts");
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_passport__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _local_strategy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./local.strategy */ "./apps/shop-backend/src/app/auth/local.strategy.ts");
/* harmony import */ var _jwt_strategy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jwt.strategy */ "./apps/shop-backend/src/app/auth/jwt.strategy.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ "./apps/shop-backend/src/app/auth/constants.ts");
/* harmony import */ var _nestjs_jwt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
/* harmony import */ var _nestjs_jwt__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_nestjs_jwt__WEBPACK_IMPORTED_MODULE_8__);









let AuthModule = class AuthModule {
};
AuthModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _users__WEBPACK_IMPORTED_MODULE_2__["UsersModule"],
            _nestjs_passport__WEBPACK_IMPORTED_MODULE_4__["PassportModule"].register({
                defaultStrategy: 'jwt',
                property: 'user',
                session: false
            }),
            _nestjs_jwt__WEBPACK_IMPORTED_MODULE_8__["JwtModule"].register({
                secret: _constants__WEBPACK_IMPORTED_MODULE_7__["jwtConstants"].secret,
                signOptions: { expiresIn: '7d' }
            })
        ],
        providers: [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _local_strategy__WEBPACK_IMPORTED_MODULE_5__["LocalStrategy"], _jwt_strategy__WEBPACK_IMPORTED_MODULE_6__["JwtStrategy"]],
        exports: [_nestjs_passport__WEBPACK_IMPORTED_MODULE_4__["PassportModule"], _local_strategy__WEBPACK_IMPORTED_MODULE_5__["LocalStrategy"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]]
    })
], AuthModule);



/***/ }),

/***/ "./apps/shop-backend/src/app/auth/auth.service.ts":
/*!********************************************************!*\
  !*** ./apps/shop-backend/src/app/auth/auth.service.ts ***!
  \********************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ "bcryptjs");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users */ "./apps/shop-backend/src/app/users/index.ts");
/* harmony import */ var _nestjs_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
/* harmony import */ var _nestjs_jwt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_jwt__WEBPACK_IMPORTED_MODULE_4__);
var _a, _b;





let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    validateUser(username, pass) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = yield this.usersService.findOne(username);
            //console.log(user);
            if (user && (yield this.passwordsAreEqual(user.password, pass))) {
                const { password } = user, result = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(user, ["password"]);
                return result;
            }
            return null;
        });
    }
    login(user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const payload = { username: user.username, sub: user.id };
            return {
                access_token: this.jwtService.sign(payload)
            };
        });
    }
    passwordsAreEqual(hashedPassword, plainPassword) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield bcryptjs__WEBPACK_IMPORTED_MODULE_2__["compare"](plainPassword, hashedPassword);
        });
    }
};
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _users__WEBPACK_IMPORTED_MODULE_3__["UsersService"] !== "undefined" && _users__WEBPACK_IMPORTED_MODULE_3__["UsersService"]) === "function" ? _a : Object, typeof (_b = typeof _nestjs_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtService"] !== "undefined" && _nestjs_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtService"]) === "function" ? _b : Object])
], AuthService);



/***/ }),

/***/ "./apps/shop-backend/src/app/auth/constants.ts":
/*!*****************************************************!*\
  !*** ./apps/shop-backend/src/app/auth/constants.ts ***!
  \*****************************************************/
/*! exports provided: jwtConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jwtConstants", function() { return jwtConstants; });
const jwtConstants = {
    secret: 'v%re$1%3432F'
};


/***/ }),

/***/ "./apps/shop-backend/src/app/auth/index.ts":
/*!*************************************************!*\
  !*** ./apps/shop-backend/src/app/auth/index.ts ***!
  \*************************************************/
/*! exports provided: AuthModule, AuthService, LocalStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.module */ "./apps/shop-backend/src/app/auth/auth.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return _auth_module__WEBPACK_IMPORTED_MODULE_0__["AuthModule"]; });

/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./apps/shop-backend/src/app/auth/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]; });

/* harmony import */ var _local_strategy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local.strategy */ "./apps/shop-backend/src/app/auth/local.strategy.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalStrategy", function() { return _local_strategy__WEBPACK_IMPORTED_MODULE_2__["LocalStrategy"]; });






/***/ }),

/***/ "./apps/shop-backend/src/app/auth/jwt.strategy.ts":
/*!********************************************************!*\
  !*** ./apps/shop-backend/src/app/auth/jwt.strategy.ts ***!
  \********************************************************/
/*! exports provided: JwtStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtStrategy", function() { return JwtStrategy; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport-jwt */ "passport-jwt");
/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport_jwt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_passport__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./apps/shop-backend/src/app/auth/constants.ts");





let JwtStrategy = class JwtStrategy extends Object(_nestjs_passport__WEBPACK_IMPORTED_MODULE_2__["PassportStrategy"])(passport_jwt__WEBPACK_IMPORTED_MODULE_1__["Strategy"]) {
    constructor() {
        super({
            jwtFromRequest: passport_jwt__WEBPACK_IMPORTED_MODULE_1__["ExtractJwt"].fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: _constants__WEBPACK_IMPORTED_MODULE_4__["jwtConstants"].secret
        });
    }
    validate(payload) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return { id: payload.sub, username: payload.username };
        });
    }
};
JwtStrategy = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], JwtStrategy);



/***/ }),

/***/ "./apps/shop-backend/src/app/auth/local.strategy.ts":
/*!**********************************************************!*\
  !*** ./apps/shop-backend/src/app/auth/local.strategy.ts ***!
  \**********************************************************/
/*! exports provided: LocalStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStrategy", function() { return LocalStrategy; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! passport-local */ "passport-local");
/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(passport_local__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_passport__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./apps/shop-backend/src/app/auth/auth.service.ts");
var _a;





let LocalStrategy = class LocalStrategy extends Object(_nestjs_passport__WEBPACK_IMPORTED_MODULE_3__["PassportStrategy"])(passport_local__WEBPACK_IMPORTED_MODULE_2__["Strategy"]) {
    constructor(authService) {
        super();
        this.authService = authService;
    }
    validate(username, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = yield this.authService.validateUser(username, password);
            if (!user) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UnauthorizedException"]({ message: 'Username or password are wrong!' });
            }
            return user;
        });
    }
};
LocalStrategy = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] !== "undefined" && _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]) === "function" ? _a : Object])
], LocalStrategy);



/***/ }),

/***/ "./apps/shop-backend/src/app/shop/entity/product.entity.ts":
/*!*****************************************************************!*\
  !*** ./apps/shop-backend/src/app/shop/entity/product.entity.ts ***!
  \*****************************************************************/
/*! exports provided: ProductEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEntity", function() { return ProductEntity; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);


let ProductEntity = class ProductEntity {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["PrimaryGeneratedColumn"])('uuid'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], ProductEntity.prototype, "id", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])({ type: 'varchar', nullable: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], ProductEntity.prototype, "name", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])({ type: 'float', nullable: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], ProductEntity.prototype, "price", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])({ type: 'varchar', nullable: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], ProductEntity.prototype, "description", void 0);
ProductEntity = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Entity"])('product')
], ProductEntity);



/***/ }),

/***/ "./apps/shop-backend/src/app/shop/mapper.ts":
/*!**************************************************!*\
  !*** ./apps/shop-backend/src/app/shop/mapper.ts ***!
  \**************************************************/
/*! exports provided: toProductDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toProductDto", function() { return toProductDto; });
const toProductDto = (data) => {
    const { id, name, price, description } = data;
    const productDto = { id, name, price, description };
    return productDto;
};


/***/ }),

/***/ "./apps/shop-backend/src/app/shop/shop.controller.ts":
/*!***********************************************************!*\
  !*** ./apps/shop-backend/src/app/shop/shop.controller.ts ***!
  \***********************************************************/
/*! exports provided: ShopController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopController", function() { return ShopController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shop.service */ "./apps/shop-backend/src/app/shop/shop.service.ts");
/* harmony import */ var _ecommerce_shop_share_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ecommerce/shop/share/dto */ "./libs/shop/share/dto/src/index.ts");
var _a, _b, _c, _d, _e, _f, _g, _h, _j;




let ShopController = class ShopController {
    constructor(shopService) {
        this.shopService = shopService;
    }
    find(query) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const products = query.term ?
                yield this.shopService.searchProducts(query.term || '') :
                yield this.shopService.getAllProducts();
            return { products };
        });
    }
    create(addProductDto, req) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('create', addProductDto);
            return yield this.shopService.addProduct(addProductDto);
        });
    }
    update(id, productDto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('update', productDto, id);
            return yield this.shopService.updateProduct(id, productDto);
        });
    }
    destroy(id, productDto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('update', productDto, id);
            return yield this.shopService.deleteProduct(id);
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Query"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _ecommerce_shop_share_dto__WEBPACK_IMPORTED_MODULE_3__["ProductSearchDto"] !== "undefined" && _ecommerce_shop_share_dto__WEBPACK_IMPORTED_MODULE_3__["ProductSearchDto"]) === "function" ? _a : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], ShopController.prototype, "find", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Req"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof _ecommerce_shop_share_dto__WEBPACK_IMPORTED_MODULE_3__["AddProductDto"] !== "undefined" && _ecommerce_shop_share_dto__WEBPACK_IMPORTED_MODULE_3__["AddProductDto"]) === "function" ? _c : Object, Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], ShopController.prototype, "create", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Put"])(':id'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String, typeof (_e = typeof _ecommerce_shop_share_dto__WEBPACK_IMPORTED_MODULE_3__["ProductDto"] !== "undefined" && _ecommerce_shop_share_dto__WEBPACK_IMPORTED_MODULE_3__["ProductDto"]) === "function" ? _e : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], ShopController.prototype, "update", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Delete"])(':id'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpCode"])(204),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String, typeof (_g = typeof _ecommerce_shop_share_dto__WEBPACK_IMPORTED_MODULE_3__["ProductDto"] !== "undefined" && _ecommerce_shop_share_dto__WEBPACK_IMPORTED_MODULE_3__["ProductDto"]) === "function" ? _g : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], ShopController.prototype, "destroy", null);
ShopController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('product'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_j = typeof _shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"] !== "undefined" && _shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"]) === "function" ? _j : Object])
], ShopController);



/***/ }),

/***/ "./apps/shop-backend/src/app/shop/shop.module.ts":
/*!*******************************************************!*\
  !*** ./apps/shop-backend/src/app/shop/shop.module.ts ***!
  \*******************************************************/
/*! exports provided: ShopModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopModule", function() { return ShopModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _entity_product_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entity/product.entity */ "./apps/shop-backend/src/app/shop/entity/product.entity.ts");
/* harmony import */ var _shop_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shop.controller */ "./apps/shop-backend/src/app/shop/shop.controller.ts");
/* harmony import */ var _shop_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shop.service */ "./apps/shop-backend/src/app/shop/shop.service.ts");






let ShopModule = class ShopModule {
};
ShopModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__["TypeOrmModule"].forFeature([_entity_product_entity__WEBPACK_IMPORTED_MODULE_3__["ProductEntity"]])],
        controllers: [_shop_controller__WEBPACK_IMPORTED_MODULE_4__["ShopController"]],
        providers: [_shop_service__WEBPACK_IMPORTED_MODULE_5__["ShopService"]],
        exports: [_shop_service__WEBPACK_IMPORTED_MODULE_5__["ShopService"]]
    })
], ShopModule);



/***/ }),

/***/ "./apps/shop-backend/src/app/shop/shop.service.ts":
/*!********************************************************!*\
  !*** ./apps/shop-backend/src/app/shop/shop.service.ts ***!
  \********************************************************/
/*! exports provided: ShopService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopService", function() { return ShopService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _entity_product_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entity/product.entity */ "./apps/shop-backend/src/app/shop/entity/product.entity.ts");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapper */ "./apps/shop-backend/src/app/shop/mapper.ts");
var _a;






let ShopService = class ShopService {
    constructor(productRepo) {
        this.productRepo = productRepo;
    }
    // Search products
    searchProducts(term) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const products = yield this.productRepo.find({
                where: `name LIKE '%${term}%'`
            });
            return products.map(product => Object(_mapper__WEBPACK_IMPORTED_MODULE_5__["toProductDto"])(product));
        });
    }
    // Get all products
    getAllProducts() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const products = yield this.productRepo.find();
            return products.map(product => Object(_mapper__WEBPACK_IMPORTED_MODULE_5__["toProductDto"])(product));
        });
    }
    // Add product
    addProduct(addProductDto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { name, price, description } = addProductDto;
            const product = yield this.productRepo.create({
                name, price, description
            });
            yield this.productRepo.save(product);
            return Object(_mapper__WEBPACK_IMPORTED_MODULE_5__["toProductDto"])(product);
        });
    }
    // Update product
    updateProduct(id, productDto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { name, price, description } = productDto;
            let product = yield this.productRepo.findOne({
                where: { id }
            });
            if (!product) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"](`Product doesn't exist`, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].BAD_REQUEST);
            }
            product = { id, name, price, description };
            yield this.productRepo.update({ id }, product);
            return Object(_mapper__WEBPACK_IMPORTED_MODULE_5__["toProductDto"])(product);
        });
    }
    // Delete product
    deleteProduct(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const product = yield this.productRepo.findOne({
                where: { id }
            });
            if (!product) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"](`Product doesn't exist`, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].BAD_REQUEST);
            }
            yield this.productRepo.delete({ id });
            return Object(_mapper__WEBPACK_IMPORTED_MODULE_5__["toProductDto"])(product);
        });
    }
};
ShopService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_1__["InjectRepository"])(_entity_product_entity__WEBPACK_IMPORTED_MODULE_2__["ProductEntity"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof typeorm__WEBPACK_IMPORTED_MODULE_3__["Repository"] !== "undefined" && typeorm__WEBPACK_IMPORTED_MODULE_3__["Repository"]) === "function" ? _a : Object])
], ShopService);



/***/ }),

/***/ "./apps/shop-backend/src/app/users/dto/index.ts":
/*!******************************************************!*\
  !*** ./apps/shop-backend/src/app/users/dto/index.ts ***!
  \******************************************************/
/*! exports provided: UserDto, UserListDto, AddUserDto, UserSearchDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.dto */ "./apps/shop-backend/src/app/users/dto/user.dto.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserDto", function() { return _user_dto__WEBPACK_IMPORTED_MODULE_0__["UserDto"]; });

/* harmony import */ var _user_list_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.list.dto */ "./apps/shop-backend/src/app/users/dto/user.list.dto.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserListDto", function() { return _user_list_dto__WEBPACK_IMPORTED_MODULE_1__["UserListDto"]; });

/* harmony import */ var _user_create_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.create.dto */ "./apps/shop-backend/src/app/users/dto/user.create.dto.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddUserDto", function() { return _user_create_dto__WEBPACK_IMPORTED_MODULE_2__["AddUserDto"]; });

/* harmony import */ var _user_search_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.search.dto */ "./apps/shop-backend/src/app/users/dto/user.search.dto.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserSearchDto", function() { return _user_search_dto__WEBPACK_IMPORTED_MODULE_3__["UserSearchDto"]; });







/***/ }),

/***/ "./apps/shop-backend/src/app/users/dto/user.create.dto.ts":
/*!****************************************************************!*\
  !*** ./apps/shop-backend/src/app/users/dto/user.create.dto.ts ***!
  \****************************************************************/
/*! exports provided: AddUserDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserDto", function() { return AddUserDto; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! class-validator */ "class-validator");
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(class_validator__WEBPACK_IMPORTED_MODULE_1__);


class AddUserDto {
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsNotEmpty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AddUserDto.prototype, "username", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsNotEmpty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AddUserDto.prototype, "password", void 0);


/***/ }),

/***/ "./apps/shop-backend/src/app/users/dto/user.dto.ts":
/*!*********************************************************!*\
  !*** ./apps/shop-backend/src/app/users/dto/user.dto.ts ***!
  \*********************************************************/
/*! exports provided: UserDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDto", function() { return UserDto; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! class-validator */ "class-validator");
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(class_validator__WEBPACK_IMPORTED_MODULE_1__);


class UserDto {
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsNotEmpty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UserDto.prototype, "id", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsNotEmpty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UserDto.prototype, "username", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsNotEmpty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UserDto.prototype, "password", void 0);


/***/ }),

/***/ "./apps/shop-backend/src/app/users/dto/user.list.dto.ts":
/*!**************************************************************!*\
  !*** ./apps/shop-backend/src/app/users/dto/user.list.dto.ts ***!
  \**************************************************************/
/*! exports provided: UserListDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListDto", function() { return UserListDto; });
class UserListDto {
}


/***/ }),

/***/ "./apps/shop-backend/src/app/users/dto/user.search.dto.ts":
/*!****************************************************************!*\
  !*** ./apps/shop-backend/src/app/users/dto/user.search.dto.ts ***!
  \****************************************************************/
/*! exports provided: UserSearchDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSearchDto", function() { return UserSearchDto; });
class UserSearchDto {
}


/***/ }),

/***/ "./apps/shop-backend/src/app/users/entity/user.entity.ts":
/*!***************************************************************!*\
  !*** ./apps/shop-backend/src/app/users/entity/user.entity.ts ***!
  \***************************************************************/
/*! exports provided: UserEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEntity", function() { return UserEntity; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ "bcryptjs");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);



let UserEntity = class UserEntity {
    hashPassword() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.password = yield bcryptjs__WEBPACK_IMPORTED_MODULE_2__["hash"](this.password, 10);
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["PrimaryGeneratedColumn"])('uuid'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UserEntity.prototype, "id", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])({ type: 'varchar', nullable: false, unique: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UserEntity.prototype, "username", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])({ type: 'varchar', nullable: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UserEntity.prototype, "password", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["BeforeInsert"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], UserEntity.prototype, "hashPassword", null);
UserEntity = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Entity"])('users')
], UserEntity);



/***/ }),

/***/ "./apps/shop-backend/src/app/users/index.ts":
/*!**************************************************!*\
  !*** ./apps/shop-backend/src/app/users/index.ts ***!
  \**************************************************/
/*! exports provided: UsersModule, UsersService, UserEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _users_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.module */ "./apps/shop-backend/src/app/users/users.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return _users_module__WEBPACK_IMPORTED_MODULE_0__["UsersModule"]; });

/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.service */ "./apps/shop-backend/src/app/users/users.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return _users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]; });

/* harmony import */ var _entity_user_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entity/user.entity */ "./apps/shop-backend/src/app/users/entity/user.entity.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserEntity", function() { return _entity_user_entity__WEBPACK_IMPORTED_MODULE_2__["UserEntity"]; });






/***/ }),

/***/ "./apps/shop-backend/src/app/users/mapper.ts":
/*!***************************************************!*\
  !*** ./apps/shop-backend/src/app/users/mapper.ts ***!
  \***************************************************/
/*! exports provided: toUserDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUserDto", function() { return toUserDto; });
const toUserDto = (data) => {
    const { id, username, password } = data;
    const userDto = { id, username, password };
    return userDto;
};


/***/ }),

/***/ "./apps/shop-backend/src/app/users/user.controller.ts":
/*!************************************************************!*\
  !*** ./apps/shop-backend/src/app/users/user.controller.ts ***!
  \************************************************************/
/*! exports provided: UserController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserController", function() { return UserController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.service */ "./apps/shop-backend/src/app/users/users.service.ts");
/* harmony import */ var _dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dto */ "./apps/shop-backend/src/app/users/dto/index.ts");
var _a, _b, _c, _d, _e;




let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    find(query) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('query', query, typeof query);
            const users = query.username ?
                yield this.userService.findOne(query.username || '') :
                yield this.userService.getAllUsers();
            return users;
        });
    }
    create(addUserDto, req) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('create', addUserDto);
            return yield this.userService.addUser(addUserDto);
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Query"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _dto__WEBPACK_IMPORTED_MODULE_3__["UserSearchDto"] !== "undefined" && _dto__WEBPACK_IMPORTED_MODULE_3__["UserSearchDto"]) === "function" ? _a : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], UserController.prototype, "find", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Req"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof _dto__WEBPACK_IMPORTED_MODULE_3__["AddUserDto"] !== "undefined" && _dto__WEBPACK_IMPORTED_MODULE_3__["AddUserDto"]) === "function" ? _c : Object, Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], UserController.prototype, "create", null);
UserController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('user'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_e = typeof _users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] !== "undefined" && _users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]) === "function" ? _e : Object])
], UserController);



/***/ }),

/***/ "./apps/shop-backend/src/app/users/users.module.ts":
/*!*********************************************************!*\
  !*** ./apps/shop-backend/src/app/users/users.module.ts ***!
  \*********************************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _entity_user_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entity/user.entity */ "./apps/shop-backend/src/app/users/entity/user.entity.ts");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users.service */ "./apps/shop-backend/src/app/users/users.service.ts");
/* harmony import */ var _user_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.controller */ "./apps/shop-backend/src/app/users/user.controller.ts");






let UsersModule = class UsersModule {
};
UsersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Module"])({
        imports: [_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__["TypeOrmModule"].forFeature([_entity_user_entity__WEBPACK_IMPORTED_MODULE_1__["UserEntity"]])],
        controllers: [_user_controller__WEBPACK_IMPORTED_MODULE_5__["UserController"]],
        providers: [_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]],
        exports: [_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]]
    })
], UsersModule);



/***/ }),

/***/ "./apps/shop-backend/src/app/users/users.service.ts":
/*!**********************************************************!*\
  !*** ./apps/shop-backend/src/app/users/users.service.ts ***!
  \**********************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _entity_user_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entity/user.entity */ "./apps/shop-backend/src/app/users/entity/user.entity.ts");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapper */ "./apps/shop-backend/src/app/users/mapper.ts");
var _a;






let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    findOne(username) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.userRepository.findOne({ where: { username } });
        });
    }
    // Get all users
    getAllUsers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const users = yield this.userRepository.find();
            return { users: users.map(u => Object(_mapper__WEBPACK_IMPORTED_MODULE_5__["toUserDto"])(u)) };
        });
    }
    // Add user
    addUser(addUser) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { username, password } = addUser;
            const user = yield this.userRepository.create({
                username, password
            });
            yield this.userRepository.save(user);
            return Object(_mapper__WEBPACK_IMPORTED_MODULE_5__["toUserDto"])(user);
        });
    }
};
UsersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__["InjectRepository"])(_entity_user_entity__WEBPACK_IMPORTED_MODULE_3__["UserEntity"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof typeorm__WEBPACK_IMPORTED_MODULE_4__["Repository"] !== "undefined" && typeorm__WEBPACK_IMPORTED_MODULE_4__["Repository"]) === "function" ? _a : Object])
], UsersService);



/***/ }),

/***/ "./apps/shop-backend/src/environments/environment.ts":
/*!***********************************************************!*\
  !*** ./apps/shop-backend/src/environments/environment.ts ***!
  \***********************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    dbHost: 'localhost',
    dbPort: 3306,
    dbDB: 'shop',
    dbUser: 'shop',
    dbPass: 'sh0p'
};


/***/ }),

/***/ "./apps/shop-backend/src/main.ts":
/*!***************************************!*\
  !*** ./apps/shop-backend/src/main.ts ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./apps/shop-backend/src/app/app.module.ts");
/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */




const port = process.env.PORT || 3333;
function bootstrap() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const app = yield _nestjs_core__WEBPACK_IMPORTED_MODULE_2__["NestFactory"].create(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"], { cors: true });
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        yield app.listen(port, () => {
            _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"].log('Listening at http://localhost:' + port + '/' + globalPrefix, 'Bootstrap');
        });
        /**
         * Apply validation for all inputs globally
         */
        app.useGlobalPipes(new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["ValidationPipe"]({
            whitelist: true,
            transform: true
        }));
    });
}
bootstrap();


/***/ }),

/***/ "./libs/shop/share/dto/src/index.ts":
/*!******************************************!*\
  !*** ./libs/shop/share/dto/src/index.ts ***!
  \******************************************/
/*! exports provided: ShopShareDtoModule, ProductDto, ProductListDto, AddProductDto, ProductSearchDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_shop_share_dto_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/shop-share-dto.module */ "./libs/shop/share/dto/src/lib/shop-share-dto.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShopShareDtoModule", function() { return _lib_shop_share_dto_module__WEBPACK_IMPORTED_MODULE_0__["ShopShareDtoModule"]; });

/* harmony import */ var _lib_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/product */ "./libs/shop/share/dto/src/lib/product/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductDto", function() { return _lib_product__WEBPACK_IMPORTED_MODULE_1__["ProductDto"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductListDto", function() { return _lib_product__WEBPACK_IMPORTED_MODULE_1__["ProductListDto"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddProductDto", function() { return _lib_product__WEBPACK_IMPORTED_MODULE_1__["AddProductDto"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductSearchDto", function() { return _lib_product__WEBPACK_IMPORTED_MODULE_1__["ProductSearchDto"]; });





/***/ }),

/***/ "./libs/shop/share/dto/src/lib/product/index.ts":
/*!******************************************************!*\
  !*** ./libs/shop/share/dto/src/lib/product/index.ts ***!
  \******************************************************/
/*! exports provided: ProductDto, ProductListDto, AddProductDto, ProductSearchDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.dto */ "./libs/shop/share/dto/src/lib/product/product.dto.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductDto", function() { return _product_dto__WEBPACK_IMPORTED_MODULE_0__["ProductDto"]; });

/* harmony import */ var _product_list_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.list.dto */ "./libs/shop/share/dto/src/lib/product/product.list.dto.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductListDto", function() { return _product_list_dto__WEBPACK_IMPORTED_MODULE_1__["ProductListDto"]; });

/* harmony import */ var _product_create_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.create.dto */ "./libs/shop/share/dto/src/lib/product/product.create.dto.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddProductDto", function() { return _product_create_dto__WEBPACK_IMPORTED_MODULE_2__["AddProductDto"]; });

/* harmony import */ var _product_search_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product.search.dto */ "./libs/shop/share/dto/src/lib/product/product.search.dto.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductSearchDto", function() { return _product_search_dto__WEBPACK_IMPORTED_MODULE_3__["ProductSearchDto"]; });







/***/ }),

/***/ "./libs/shop/share/dto/src/lib/product/product.create.dto.ts":
/*!*******************************************************************!*\
  !*** ./libs/shop/share/dto/src/lib/product/product.create.dto.ts ***!
  \*******************************************************************/
/*! exports provided: AddProductDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductDto", function() { return AddProductDto; });
class AddProductDto {
}


/***/ }),

/***/ "./libs/shop/share/dto/src/lib/product/product.dto.ts":
/*!************************************************************!*\
  !*** ./libs/shop/share/dto/src/lib/product/product.dto.ts ***!
  \************************************************************/
/*! exports provided: ProductDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDto", function() { return ProductDto; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! class-validator */ "class-validator");
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(class_validator__WEBPACK_IMPORTED_MODULE_1__);


class ProductDto {
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsNotEmpty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], ProductDto.prototype, "id", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsOptional"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], ProductDto.prototype, "name", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsOptional"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], ProductDto.prototype, "price", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsOptional"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], ProductDto.prototype, "description", void 0);


/***/ }),

/***/ "./libs/shop/share/dto/src/lib/product/product.list.dto.ts":
/*!*****************************************************************!*\
  !*** ./libs/shop/share/dto/src/lib/product/product.list.dto.ts ***!
  \*****************************************************************/
/*! exports provided: ProductListDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListDto", function() { return ProductListDto; });
class ProductListDto {
}


/***/ }),

/***/ "./libs/shop/share/dto/src/lib/product/product.search.dto.ts":
/*!*******************************************************************!*\
  !*** ./libs/shop/share/dto/src/lib/product/product.search.dto.ts ***!
  \*******************************************************************/
/*! exports provided: ProductSearchDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSearchDto", function() { return ProductSearchDto; });
class ProductSearchDto {
}


/***/ }),

/***/ "./libs/shop/share/dto/src/lib/shop-share-dto.module.ts":
/*!**************************************************************!*\
  !*** ./libs/shop/share/dto/src/lib/shop-share-dto.module.ts ***!
  \**************************************************************/
/*! exports provided: ShopShareDtoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopShareDtoModule", function() { return ShopShareDtoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);



let ShopShareDtoModule = class ShopShareDtoModule {
};
ShopShareDtoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
    })
], ShopShareDtoModule);



/***/ }),

/***/ 0:
/*!*********************************************!*\
  !*** multi ./apps/shop-backend/src/main.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Trabajo\Projects\Musala\ecommerce\apps\shop-backend\src\main.ts */"./apps/shop-backend/src/main.ts");


/***/ }),

/***/ "@angular/common":
/*!**********************************!*\
  !*** external "@angular/common" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "@angular/core":
/*!********************************!*\
  !*** external "@angular/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/serve-static":
/*!***************************************!*\
  !*** external "@nestjs/serve-static" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/serve-static");

/***/ }),

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("class-validator");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport-jwt");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("typeorm");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map