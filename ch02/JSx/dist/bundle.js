/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var React = __webpack_require__(0);
var CreateComment_1 = __webpack_require__(4);
var Post = (function (_super) {
    __extends(Post, _super);
    function Post(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            user: _this.props.userDef,
            content: _this.props.content,
            id: _this.props.id
        };
        return _this;
    }
    Post.prototype.render = function () {
        return (React.createElement("div", { className: "post" },
            React.createElement("h2", { className: "postAuthor", id: this.props.id.toString() }, this.state.user),
            React.createElement("div", { className: "postBody" }, this.state.content),
            this.props.children,
            React.createElement(CreateComment_1.CreateComment, { defaultUser: "", defaultContent: "" })));
    };
    return Post;
}(React.Component));
exports.Post = Post;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = {
	"id": 123,
	"content": "What we hope ever to do with ease, we must first learn to do with diligence. — Samuel Johnson",
	"user": "Mark Thomas",
	"comments": [
		{
			"id": 0,
			"user": "David",
			"content": "such. win."
		},
		{
			"id": 1,
			"user": "Peter",
			"content": "Who was Samuel Johnson?"
		},
		{
			"id": 2,
			"user": "Mitchell",
			"content": "@Peter get off Letters and do your homework!"
		},
		{
			"id": 3,
			"user": "Peter",
			"content": "@mitchell: OK"
		}
	]
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var React = __webpack_require__(0);
var CreateComment = (function (_super) {
    __extends(CreateComment, _super);
    function CreateComment(props) {
        var _this = _super.call(this, props) || this;
        _this.handleTextChange = _this.handleTextChange.bind(_this);
        _this.handleUserChange = _this.handleUserChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.state = {
            user: _this.props.defaultUser,
            content: _this.props.defaultContent
        };
        return _this;
    }
    CreateComment.prototype.handleUserChange = function (evt) {
        this.setState({ user: evt.target.value });
    };
    CreateComment.prototype.handleTextChange = function (evt) {
        this.setState({
            content: evt.target.value
        });
    };
    CreateComment.prototype.handleSubmit = function (evt) {
        evt.preventDefault();
        console.log('submit');
    };
    CreateComment.prototype.render = function () {
        return (React.createElement("form", { className: "CreateComment", onSubmit: this.handleSubmit },
            React.createElement("input", { type: "text", onChange: this.handleUserChange, value: this.state.user, placeholder: "Your name" }),
            React.createElement("input", { type: "text", onChange: this.handleTextChange, value: this.state.content, placeholder: "Thoughts?" }),
            React.createElement("input", { type: "submit", value: "Post" })));
    };
    return CreateComment;
}(React.Component));
exports.CreateComment = CreateComment;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(3);
var PostData = __webpack_require__(2);
// import {CreateComment} from "./components/CreateComment";
var Post_1 = __webpack_require__(1);
//    <CreateComment defaultUser='Pigeon' defaultContent="" />
ReactDOM.render(React.createElement(Post_1.Post, { id: 0, userDef: "Derek Hinds", content: "Everybody should follow their web posts - Sammy j", comments: PostData.comments }), document.getElementById('commentCentrals'));


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map