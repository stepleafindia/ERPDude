(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/src/views/customer/Customer/customer.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/src/views/customer/Customer/customer.css ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-card{\r\n    margin:10px 5px;\r\n}\r\n.form-card.card .card-body{\r\n    padding:1rem;\r\n    font-size:14px;\r\n}\r\n.form-card.card .card-title{\r\n    font-size:16px;\r\n    font-weight:600;\r\n}", ""]);

// exports


/***/ }),

/***/ "./resources/js/src/components/Alert/FlashAlert.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/components/Alert/FlashAlert.js ***!
  \*********************************************************/
/*! exports provided: timer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return timer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FlashAlert; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var timer = null;
function FlashAlert(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  props.show ? Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true) : Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  if (timer) {
    clearTimeout(timer);
  }

  if (props.duration) {
    timer = setTimeout(function () {
      setShow(false);
      props.onClose();
    }, props.duration);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
    show: show,
    onClose: function onClose() {
      setShow(false);
      props.onClose();

      if (timer) {
        clearTimeout(timer);
      }
    },
    variant: props.data.className,
    dismissible: true
  }, props.data.heading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Alert"].Heading, null, props.data.heading) : "", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.data.message));
}

/***/ }),

/***/ "./resources/js/src/components/ConfirmDialog/ConfirmDialog.js":
/*!********************************************************************!*\
  !*** ./resources/js/src/components/ConfirmDialog/ConfirmDialog.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConfirmDialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");


function ConfirmDialog(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    show: props.data.show,
    onHide: props.handleClose,
    backdrop: "static",
    keyboard: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, {
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Title, null, props.data.headerName ? props.data.headerName : "Confirm Window")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.data.confirmMessage ? props.data.confirmMessage : "Are you sure! Confirm to Continue.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    onClick: props.handleConfirm
  }, "Submit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "secondary",
    onClick: props.handleClose
  }, "Close")));
}

/***/ }),

/***/ "./resources/js/src/views/customer/Customer/Customer.js":
/*!**************************************************************!*\
  !*** ./resources/js/src/views/customer/Customer/Customer.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Header/Header */ "./resources/js/src/components/Header/Header.js");
/* harmony import */ var _components_ConfirmDialog_ConfirmDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ConfirmDialog/ConfirmDialog */ "./resources/js/src/components/ConfirmDialog/ConfirmDialog.js");
/* harmony import */ var _components_Alert_FlashAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Alert/FlashAlert */ "./resources/js/src/components/Alert/FlashAlert.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_Loader_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Loader/Loader */ "./resources/js/src/components/Loader/Loader.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Utils */ "./resources/js/src/Utils.js");
/* harmony import */ var _customer_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customer.css */ "./resources/js/src/views/customer/Customer/customer.css");
/* harmony import */ var _customer_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_customer_css__WEBPACK_IMPORTED_MODULE_8__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







 // Page Loader Component.




var Customer = /*#__PURE__*/function (_Component) {
  _inherits(Customer, _Component);

  var _super = _createSuper(Customer);

  function Customer(props) {
    var _this;

    _classCallCheck(this, Customer);

    _this = _super.call(this, props);
    _this.getInitialState = _this.getInitialState.bind(_assertThisInitialized(_this));
    _this.state = _this.getInitialState();
    _this.pageAlert = _this.pageAlert.bind(_assertThisInitialized(_this));
    _this.getCountriesList = _Utils__WEBPACK_IMPORTED_MODULE_7__["getCountriesList"].bind(_assertThisInitialized(_this));
    _this.getStatesList = _Utils__WEBPACK_IMPORTED_MODULE_7__["getStatesList"].bind(_assertThisInitialized(_this));
    _this.getCustomerDetails = _Utils__WEBPACK_IMPORTED_MODULE_7__["getCustomerDetails"].bind(_assertThisInitialized(_this));
    _this.selectInputChange = _this.selectInputChange.bind(_assertThisInitialized(_this));
    _this.inputStateChange = _this.inputStateChange.bind(_assertThisInitialized(_this));
    _this.validateNumeric = _this.validateNumeric.bind(_assertThisInitialized(_this));
    _this.customerFormSubmit = _this.customerFormSubmit.bind(_assertThisInitialized(_this));
    _this.handleCheck = _this.handleCheck.bind(_assertThisInitialized(_this));
    _this.clearAuthToken = _Utils__WEBPACK_IMPORTED_MODULE_7__["clearAuthToken"].bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Customer, [{
    key: "getInitialState",
    value: function getInitialState() {
      var _this2 = this;

      return {
        customerId: this.props.match.params.id ? this.props.match.params.id : null,
        isLoggedIn: true,
        loader: false,
        confirmDialog: {
          show: false,
          headerName: null,
          confirmMessage: null,
          handleClose: function handleClose() {
            _this2.setState(function (prev) {
              return {
                confirmDialog: _objectSpread(_objectSpread({}, prev.confirmDialog), {}, {
                  show: false,
                  headerName: null,
                  confirmMessage: null,
                  handleConfirm: null
                })
              };
            });
          },
          handleConfirm: null
        },
        statesList: [],
        countriesList: [],
        user: [],
        error: '',
        pageAlert: {},
        errors: {},
        inputs: {
          is_active: true,
          sms_alert: true
        }
      };
    }
  }, {
    key: "validateFormInput",
    value: function validateFormInput(inputName, value) {
      var errors = [];
      var requiredFields = ["name", "opening_balance", "customer_group"];

      if (requiredFields.indexOf(inputName) != -1) {
        if (!value) {
          errors.push("This field is required!");
        }
      }

      return errors.length ? errors : null;
    }
  }, {
    key: "customerFormSubmit",
    value: function customerFormSubmit(e) {
      var _this3 = this;

      e.preventDefault();
      var stateInputs = this.state.inputs;
      var inputErrors = this.state.errors;
      var validation = true;

      if (!stateInputs.name) {
        inputErrors.name = "Customer Name is required!";
        validation = false;
      }

      if (!stateInputs.opening_balance) {
        inputErrors.opening_balance = "Opening Balance is required!";
        validation = false;
      }

      if (!stateInputs.customer_group) {
        inputErrors.customer_group = "Customer Group is required!";
        validation = false;
      }

      this.setState(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          errors: inputErrors
        });
      });

      if (validation) {
        var formData = new FormData(e.target);
        var formUrl = this.state.customerId ? _Utils__WEBPACK_IMPORTED_MODULE_7__["apiRoutes"].customer + '/' + this.state.customerId : _Utils__WEBPACK_IMPORTED_MODULE_7__["apiRoutes"].customer;
        var request = {
          method: 'post',
          url: formUrl,
          data: formData,
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        };
        this.setState({
          loader: true
        });
        axios(request).then(function (response) {
          return response;
        }).then(function (json) {
          console.log(json.data);

          if (json.data.validation_error) {
            var _inputErrors = {};

            for (var val in json.data.validation_error) {
              _inputErrors[val] = json.data.validation_error[val];
            }

            _this3.setState(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, {
                loader: false,
                errors: _inputErrors
              });
            });
          } else if (json.data.success) {
            _this3.setState(_this3.getInitialState());

            _this3.props.history.push({
              pathname: _Utils__WEBPACK_IMPORTED_MODULE_7__["appRoutes"].customers,
              //search: '?query=abc',
              state: {
                pageAlert: {
                  className: 'alert alert-success',
                  message: json.data.message
                }
              }
            });
          } else {
            _this3.pageAlert();
          }
        })["catch"](function (error) {
          console.log(error);

          _this3.setState({
            loader: false
          });
        });
      }
    }
  }, {
    key: "selectInputChange",
    value: function selectInputChange(e) {
      var stateInputs = this.state.inputs;
      stateInputs[e.target.name] = e.target.value;
      var inputErrors = this.state.errors;
      var error = this.validateFormInput(e.target.name, e.target.value);
      inputErrors[e.target.name] = error ? error : null;
      this.setState(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          inputs: stateInputs,
          errors: inputErrors
        });
      });
    }
  }, {
    key: "inputStateChange",
    value: function inputStateChange(e) {
      var stateInputs = this.state.inputs;
      stateInputs[e.target.name] = e.target.value;
      var inputErrors = this.state.errors;
      var error = this.validateFormInput(e.target.name, e.target.value);
      inputErrors[e.target.name] = error ? error : null;
      this.setState(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          inputs: stateInputs,
          errors: inputErrors
        });
      });
    }
  }, {
    key: "handleCheck",
    value: function handleCheck(e) {
      var name = e.target.name;
      var value = e.target.value === 'true' ? true : false;
      this.setState(function (prev) {
        var inputs = prev.inputs;
        inputs[name] = value;
        return _objectSpread(_objectSpread({}, prev), {}, {
          inputs: inputs
        });
      });
      console.log(this.state);
    }
  }, {
    key: "validateNumeric",
    value: function validateNumeric(e) {
      var numericInputs = ["opening_balance", "due_days", "credit_limit"];

      if (numericInputs.indexOf(e.target.name) != -1) {
        e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.state.loader ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], null) : "", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
        userData: this.state.user,
        userIsLoggedIn: this.state.isLoggedIn
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container-fluid"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "page-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row justify-content-between"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Customer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
        to: _Utils__WEBPACK_IMPORTED_MODULE_7__["appRoutes"].customers,
        variant: "primary"
      }, "Back"))))), this.state.pageAlert && this.state.pageAlert.message ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Alert_FlashAlert__WEBPACK_IMPORTED_MODULE_4__["default"], {
        data: this.state.pageAlert,
        duration: 6000,
        show: true,
        onClose: function onClose() {
          return _this4.pageAlert({});
        }
      }) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"], {
        method: "post",
        onSubmit: this.customerFormSubmit,
        id: "customerForm"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
        fluid: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
        className: "no-gutters"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        md: 7
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], {
        className: "form-card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "card-title"
      }, "General Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
        controlId: "formCustomerName"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, null, "Name ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-danger"
      }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
        type: "text",
        placeholder: "Customer Name",
        name: "name",
        value: this.state.inputs.name ? this.state.inputs.name : "",
        isInvalid: !!this.state.errors.name,
        onChange: this.inputStateChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
        type: "invalid"
      }, this.state.errors.name ? this.state.errors.name : ""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
        controlId: "formCustomerStatus",
        className: "pt-md-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Check, {
        inline: true,
        label: "Visible",
        type: "radio",
        name: "is_active",
        value: true,
        checked: this.state.inputs.is_active ? true : false,
        onChange: this.handleCheck
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Check, {
        inline: true,
        label: "Invisible",
        type: "radio",
        name: "is_active",
        value: false,
        checked: this.state.inputs.is_active ? false : true,
        onChange: this.handleCheck
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
        controlId: "formCustomerOB"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, null, "Opening Balance ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-danger"
      }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
        type: "text",
        placeholder: "Opening Balance",
        name: "opening_balance",
        value: this.state.inputs.opening_balance ? this.state.inputs.opening_balance : "",
        isInvalid: !!this.state.errors.opening_balance,
        onChange: this.inputStateChange,
        onInput: this.validateNumeric
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
        type: "invalid"
      }, this.state.errors.opening_balance ? this.state.errors.opening_balance : ""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
        controlId: "formCustomerType"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, null, "Under ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-danger"
      }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
        as: "select",
        className: "my-1 mr-sm-2",
        value: this.state.inputs.customer_group ? this.state.inputs.customer_group : "",
        isInvalid: !!this.state.errors.customer_group,
        name: "customer_group",
        onChange: this.inputStateChange,
        custom: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: ""
      }, "Choose..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Sunday Debtors"
      }, "Sunday Debtors")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
        type: "invalid"
      }, this.state.errors.customer_group ? this.state.errors.customer_group : ""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        md: 6,
        style: this.state.inputs.customer_group && this.state.inputs.customer_group == "Sunday Debtors" ? {} : {
          display: "none"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
        controlId: "formCustomerSalesType"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, null, "Sales Rate Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
        as: "select",
        className: "my-1 mr-sm-2",
        value: this.state.inputs.sales_type ? this.state.inputs.sales_type : "",
        isInvalid: !!this.state.errors.sales_type,
        name: "sales_type",
        onChange: this.inputStateChange,
        custom: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: ""
      }, "Choose..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Retail"
      }, "Retail"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Wholesale"
      }, "Wholesale")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
        type: "invalid"
      }, this.state.errors.sales_type ? this.state.errors.sales_type : ""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
        controlId: "formCustomerDues"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, null, "Due Days "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
        type: "text",
        placeholder: "Due Days",
        name: "due_days",
        value: this.state.inputs.due_days ? this.state.inputs.due_days : "",
        isInvalid: !!this.state.errors.due_days,
        onChange: this.inputStateChange,
        onInput: this.validateNumeric
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
        type: "invalid"
      }, this.state.errors.due_days ? this.state.errors.due_days : ""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
        controlId: "formCustomerCreditLimit"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, null, "Credit Limit "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
        type: "text",
        placeholder: "Credit Limit",
        name: "credit_limit",
        value: this.state.inputs.credit_limit ? this.state.inputs.credit_limit : "",
        isInvalid: !!this.state.errors.credit_limit,
        onChange: this.inputStateChange,
        onInput: this.validateNumeric
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
        type: "invalid"
      }, this.state.errors.credit_limit ? this.state.errors.credit_limit : "")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "card-title"
      }, "Contact Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
        controlId: "formCustomerContactPerson"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, null, "Contact Person"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
        type: "text",
        placeholder: "Contact Person",
        name: "contact_person",
        value: this.state.inputs.contact_person ? this.state.inputs.contact_person : "",
        isInvalid: !!this.state.errors.contact_person,
        onChange: this.inputStateChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
        type: "invalid"
      }, this.state.errors.contact_person ? this.state.errors.contact_person : ""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
        controlId: "formCustomerAddress"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, null, "Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
        type: "text",
        placeholder: "Address",
        value: this.state.inputs.address ? this.state.inputs.address : "",
        name: "address",
        onChange: this.inputStateChange,
        isInvalid: !!this.state.errors.address
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
        type: "invalid"
      }, this.state.errors.address ? this.state.errors.address : ""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
        controlId: "formCustomerCity"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, null, "City"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
        type: "text",
        placeholder: "City",
        value: this.state.inputs.city ? this.state.inputs.city : "",
        name: "city",
        onChange: this.inputStateChange,
        isInvalid: !!this.state.errors.city
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
        type: "invalid"
      }, this.state.errors.city ? this.state.errors.city : ""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
        controlId: "formCustomerCity"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, null, "Postal Code"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
        type: "text",
        placeholder: "Postal Code",
        value: this.state.inputs.pin_code ? this.state.inputs.pin_code : "",
        name: "pin_code",
        onChange: this.inputStateChange,
        isInvalid: !!this.state.errors.pin_code
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
        type: "invalid"
      }, this.state.errors.pin_code ? this.state.errors.pin_code : ""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
        controlId: "formCustomerState"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, null, "State"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
        as: "select",
        className: "my-1 mr-sm-2",
        value: this.state.inputs.state_id ? this.state.inputs.state_id : "",
        name: "state_id",
        isInvalid: !!this.state.errors.state_id,
        onChange: this.inputStateChange,
        custom: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: ""
      }, "Choose..."), this.state.statesList.map(function (_ref, index) {
        var id = _ref.id,
            name = _ref.name;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          key: id,
          value: id
        }, name);
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
        type: "invalid"
      }, this.state.errors.state_id ? this.state.errors.state_id : ""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
        controlId: "formCustomerCountry"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, null, "Country"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
        as: "select",
        className: "my-1 mr-sm-2",
        value: this.state.inputs.country_id ? this.state.inputs.country_id : "",
        name: "country_id",
        isInvalid: !!this.state.errors.country_id,
        onChange: this.inputStateChange,
        custom: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: ""
      }, "Choose..."), this.state.countriesList.map(function (_ref2, index) {
        var id = _ref2.id,
            name = _ref2.name;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          key: id,
          value: id
        }, name);
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
        type: "invalid"
      }, this.state.errors.country_id ? this.state.errors.country_id : ""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
        controlId: "formCustomerPhone"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, null, "Contact No "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
        type: "text",
        placeholder: "Contact No",
        value: this.state.inputs.contact_number ? this.state.inputs.contact_number : "",
        name: "contact_number",
        isInvalid: !!this.state.errors.contact_number,
        onChange: this.inputStateChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
        type: "invalid"
      }, this.state.errors.contact_number ? this.state.errors.contact_number : ""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
        controlId: "formCustomerMobile"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, null, "Mobile No "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
        type: "text",
        placeholder: "Mobile No",
        value: this.state.inputs.mobile_number ? this.state.inputs.mobile_number : "",
        name: "mobile_number",
        isInvalid: !!this.state.errors.mobile_number,
        onChange: this.inputStateChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
        type: "invalid"
      }, this.state.errors.mobile_number ? this.state.errors.mobile_number : ""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
        controlId: "formCustomerFax"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, null, "Fax "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
        type: "text",
        placeholder: "Fax No",
        value: this.state.inputs.fax ? this.state.inputs.fax : "",
        name: "fax",
        isInvalid: !!this.state.errors.fax,
        onChange: this.inputStateChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
        type: "invalid"
      }, this.state.errors.fax ? this.state.errors.fax : ""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
        controlId: "formCustomerEmail"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, null, "Email "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
        type: "text",
        placeholder: "Email",
        value: this.state.inputs.email ? this.state.inputs.email : "",
        name: "email",
        isInvalid: !!this.state.errors.email,
        onChange: this.inputStateChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
        type: "invalid"
      }, this.state.errors.email ? this.state.errors.email : ""))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        md: 5
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], {
        className: "form-card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "card-title"
      }, "Company Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        md: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
        controlId: "formCustomerCompanyName"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, null, "Print Name "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
        type: "text",
        placeholder: "Print Name",
        name: "print_name",
        value: this.state.inputs.print_name ? this.state.inputs.print_name : "",
        isInvalid: !!this.state.errors.print_name,
        onChange: this.inputStateChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
        type: "invalid"
      }, this.state.errors.print_name ? this.state.errors.print_name : ""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        md: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
        controlId: "formCustomerGSTIN"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, null, "GSTIN "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
        type: "text",
        placeholder: "GSTIN",
        name: "gstin",
        value: this.state.inputs.gstin ? this.state.inputs.gstin : "",
        isInvalid: !!this.state.errors.gstin,
        onChange: this.inputStateChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
        type: "invalid"
      }, this.state.errors.gstin ? this.state.errors.gstin : ""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        md: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
        controlId: "formCustomerPan"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, null, "Pan No "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
        type: "text",
        placeholder: "PAN No",
        name: "pan_no",
        value: this.state.inputs.pan_no ? this.state.inputs.pan_no : "",
        isInvalid: !!this.state.errors.pan_no,
        onChange: this.inputStateChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
        type: "invalid"
      }, this.state.errors.pan_no ? this.state.errors.pan_no : ""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        md: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
        controlId: "formCustomerSMSAlert"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, null, "SMS Alert"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
        as: "select",
        className: "my-1 mr-sm-2",
        value: this.state.inputs.sms_alert ? this.state.inputs.sms_alert : false,
        isInvalid: !!this.state.errors.sms_alert,
        name: "sms_alert",
        onChange: this.inputStateChange,
        custom: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: true
      }, "Yes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: false
      }, "No")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
        type: "invalid"
      }, this.state.errors.sms_alert ? this.state.errors.sms_alert : ""))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        md: 12,
        className: "text-right p-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
        to: _Utils__WEBPACK_IMPORTED_MODULE_7__["appRoutes"].customers,
        variant: "secondary"
      }, "Back"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        variant: "primary",
        type: "Submit",
        className: "mx-2"
      }, "Submit")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ConfirmDialog_ConfirmDialog__WEBPACK_IMPORTED_MODULE_3__["default"], {
        data: this.state.confirmDialog,
        handleClose: this.state.confirmDialog.handleClose,
        handleConfirm: this.state.confirmDialog.handleConfirm
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this5 = this;

      Object(_Utils__WEBPACK_IMPORTED_MODULE_7__["getCountriesList"])(function (json) {
        if (json.data.success) {
          _this5.setState({
            countriesList: json.data.countries
          });
        }
      }, function (error) {
        if (error.response.status == 401) {
          _this5.clearAuthToken();
        }

        console.log(error);
      });
      Object(_Utils__WEBPACK_IMPORTED_MODULE_7__["getStatesList"])(function (json) {
        if (json.data.success) {
          _this5.setState({
            statesList: json.data.states
          });
        }
      }, function (error) {
        if (error.response.status == 401) {
          _this5.clearAuthToken();
        }

        console.log(error);
      });

      if (this.props.match.params.id !== undefined) {
        var customerId = this.props.match.params.id;
        this.setState({
          loader: true
        });
        Object(_Utils__WEBPACK_IMPORTED_MODULE_7__["getCustomerDetails"])(customerId, function (json) {
          if (json.data.success) {
            var data = json.data.data;
            var inputs = {
              name: data.name,
              is_active: data.status,
              sms_alert: data.sms_alert,
              opening_balance: data.opening_balance,
              customer_group: data.customer_group,
              due_days: data.due_days,
              credit_limit: data.credit_limit,
              contact_person: data.contact_person,
              address: data.address,
              city: data.city,
              pin_code: data.pin_code,
              state_id: data.state_id,
              country_id: data.country_id,
              contact_number: data.contact_number,
              mobile_number: data.mobile_number,
              fax: data.fax,
              email: data.email,
              print_name: data.print_name,
              gstin: data.gstin,
              pan_no: data.pan_no,
              sales_type: data.sales_type
            };
            console.log(data);

            _this5.setState(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, {
                loader: false,
                inputs: inputs,
                imageCrop: _objectSpread(_objectSpread({}, prev.imageCrop), {}, {
                  previewImage: data.image
                })
              });
            });

            console.log(_this5.state);
          } else {
            _this5.props.history.push({
              pathname: _Utils__WEBPACK_IMPORTED_MODULE_7__["appRoutes"].products,
              state: {
                pageAlert: {
                  className: 'alert alert-success',
                  message: json.data.message
                }
              }
            });
          }
        }, function (error) {
          _this5.setState({
            loader: false
          });

          console.log(error);
        });
      }
      /*if(!this.state.imageCrop.previewImage){
          this.setState( prev => {
              return { ...prev,imageCrop : { ...prev.imageCrop, previewImage :'/images/placeholder.jpg' } }
          });    
      } */

    }
  }, {
    key: "pageAlert",
    value: function pageAlert(alert) {
      alert.duration = 6000;
      this.setState({
        pageAlert: alert
      });
    }
  }]);

  return Customer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Customer);

/***/ }),

/***/ "./resources/js/src/views/customer/Customer/customer.css":
/*!***************************************************************!*\
  !*** ./resources/js/src/views/customer/Customer/customer.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/postcss-loader/src??ref--6-2!./customer.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/src/views/customer/Customer/customer.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/src/views/customer/Customers/Customers.js":
/*!****************************************************************!*\
  !*** ./resources/js/src/views/customer/Customers/Customers.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Header/Header */ "./resources/js/src/components/Header/Header.js");
/* harmony import */ var _components_ConfirmDialog_ConfirmDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ConfirmDialog/ConfirmDialog */ "./resources/js/src/components/ConfirmDialog/ConfirmDialog.js");
/* harmony import */ var _components_Alert_FlashAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Alert/FlashAlert */ "./resources/js/src/components/Alert/FlashAlert.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Utils */ "./resources/js/src/Utils.js");
/* harmony import */ var datatables_net_bs4_js_dataTables_bootstrap4_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! datatables.net-bs4/js/dataTables.bootstrap4.js */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4_js_dataTables_bootstrap4_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4_js_dataTables_bootstrap4_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var datatables_net_bs4_css_dataTables_bootstrap4_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! datatables.net-bs4/css/dataTables.bootstrap4.css */ "./node_modules/datatables.net-bs4/css/dataTables.bootstrap4.css");
/* harmony import */ var datatables_net_bs4_css_dataTables_bootstrap4_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4_css_dataTables_bootstrap4_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var datatables_net_responsive_bs4_js_responsive_bootstrap4_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! datatables.net-responsive-bs4/js/responsive.bootstrap4.js */ "./node_modules/datatables.net-responsive-bs4/js/responsive.bootstrap4.js");
/* harmony import */ var datatables_net_responsive_bs4_js_responsive_bootstrap4_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(datatables_net_responsive_bs4_js_responsive_bootstrap4_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var datatables_net_responsive_bs4_css_responsive_bootstrap4_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! datatables.net-responsive-bs4/css/responsive.bootstrap4.css */ "./node_modules/datatables.net-responsive-bs4/css/responsive.bootstrap4.css");
/* harmony import */ var datatables_net_responsive_bs4_css_responsive_bootstrap4_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(datatables_net_responsive_bs4_css_responsive_bootstrap4_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_11__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var createHistory = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js").createBrowserHistory;







var Customers = /*#__PURE__*/function (_Component) {
  _inherits(Customers, _Component);

  var _super = _createSuper(Customers);

  function Customers(props) {
    var _this;

    _classCallCheck(this, Customers);

    _this = _super.call(this, props);
    _this.state = {
      isLoggedIn: true,
      confirmDialog: {
        show: false,
        headerName: null,
        confirmMessage: null,
        handleClose: function handleClose() {
          _this.setState(function (prev) {
            return {
              confirmDialog: _objectSpread(_objectSpread({}, prev.confirmDialog), {}, {
                show: false,
                headerName: null,
                confirmMessage: null,
                handleConfirm: null
              })
            };
          });
        },
        handleConfirm: null
      },
      user: [],
      error: '',
      pageAlert: {}
    };
    _this.pageAlert = _this.pageAlert.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Customers, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
        userData: this.state.user,
        userIsLoggedIn: this.state.isLoggedIn
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container-fluid"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "page-header container-fluid"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row justify-content-between"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Customers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
        to: _Utils__WEBPACK_IMPORTED_MODULE_6__["appRoutes"].customerAdd,
        variant: "primary"
      }, "Add Customer")))), this.state.pageAlert && this.state.pageAlert.message ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Alert_FlashAlert__WEBPACK_IMPORTED_MODULE_4__["default"], {
        data: this.state.pageAlert,
        duration: 6000,
        show: true,
        onClose: function onClose() {
          return _this2.pageAlert({});
        }
      }) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], {
        style: {
          width: '100%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Card"].Header, {
        className: "bg-theme"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "card-heading"
      }, "Customers List")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "table-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Table"], {
        responsive: true,
        bordered: true,
        striped: true,
        id: "customerDataTable",
        style: {
          width: '100%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "0"
      }, "No"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "1"
      }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "2"
      }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "3"
      }, "Contact"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "4"
      }, "Mobile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "5"
      }, "Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "6"
      }, "City"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "7"
      }, "Pincode"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "8"
      }, "State"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "9"
      }, "Country"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "10"
      }, "Fax"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "11"
      }, "Group"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "12"
      }, "OB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "13"
      }, "Credit Limit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "14"
      }, "Due Days"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "15"
      }, "Sales Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "16"
      }, "GSTIN"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "17"
      }, "PAN"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "18"
      }, "Print"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "19"
      }, "SMS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "20"
      }, "Menu"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ConfirmDialog_ConfirmDialog__WEBPACK_IMPORTED_MODULE_3__["default"], {
        data: this.state.confirmDialog,
        handleClose: this.state.confirmDialog.handleClose,
        handleConfirm: this.state.confirmDialog.handleConfirm
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var history = createHistory();

      if (this.props.location.state && this.props.location.state.pageAlert) {
        var _state = _objectSpread({}, history.location.state);

        this.setState({
          pageAlert: this.props.location.state.pageAlert
        });
        delete _state.pageAlert;
        history.replace(_objectSpread(_objectSpread({}, history.location), {}, {
          state: _state
        }));
      }

      this.handleDeleteCustomer = this.handleDeleteCustomer.bind(this);
      this.handleEditCustomer = this.handleEditCustomer.bind(this);
      var state = localStorage["appState"];
      var access_token = null;

      if (state) {
        var AppState = JSON.parse(state);
        this.setState({
          isLoggedIn: AppState.isLoggedIn,
          user: AppState.user
        });
        access_token = AppState.user.access_token;
      }

      var csrf_token = document.head.querySelector('meta[name="csrf-token"]').content;
      var deleteFun = this.handleDeleteCustomer;
      var editFun = this.handleEditCustomer; //initialize datatable

      jquery__WEBPACK_IMPORTED_MODULE_11___default()(document).ready(function () {
        jquery__WEBPACK_IMPORTED_MODULE_11___default.a.ajaxSetup({
          headers: {
            'X-CSRF-TOKEN': csrf_token,
            'Authorization': 'Bearer ' + access_token
          }
        });
        jquery__WEBPACK_IMPORTED_MODULE_11___default()('#customerDataTable').DataTable({
          "responsive": true,
          "aLengthMenu": [[10, 20, 30, 50, 75, -1], [10, 20, 30, 50, 75, "All"]],
          "pageLength": 10,
          'columnDefs': [{
            'targets': [0, 12],
            'orderable': false
          }, {
            "searchable": false,
            "targets": [0, 12]
          }],
          "processing": true,
          "serverSide": true,
          "ajax": {
            "url": _Utils__WEBPACK_IMPORTED_MODULE_6__["apiRoutes"].customersList,
            "method": "post"
          },
          "columns": [{
            "data": "sno"
          }, {
            "data": "name"
          }, {
            "data": "email"
          }, {
            "data": "contact_number"
          }, {
            "data": "mobile_number"
          }, {
            "data": "address"
          }, {
            "data": "city"
          }, {
            "data": "pin_code"
          }, {
            "data": "state"
          }, {
            "data": "country"
          }, {
            "data": "fax"
          }, {
            "data": "customer_group"
          }, {
            "data": "opening_balance"
          }, {
            "data": "credit_limit"
          }, {
            "data": "due_days"
          }, {
            "data": "sales_type"
          }, {
            "data": "gstin"
          }, {
            "data": "pan_no"
          }, {
            "data": "print_name"
          }, {
            "data": "sms_alert"
          }, {
            "data": "menu",
            "class": "text-center"
          }],
          "createdRow": function createdRow(row, data, dataIndex) {
            jquery__WEBPACK_IMPORTED_MODULE_11___default()(row).attr('data-id', data.id);
          }
        });
        jquery__WEBPACK_IMPORTED_MODULE_11___default()('#customerDataTable').on('click', '.btn-edit', function (e) {
          e.preventDefault();
          console.log(jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).attr('data-id'));
          editFun(jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).attr('data-id'));
        });
        jquery__WEBPACK_IMPORTED_MODULE_11___default()('#customerDataTable').on('click', '.btn-delete', function (e) {
          e.preventDefault();
          var url = jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).attr('href');
          var id = jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).attr('data-id');
          deleteFun(id, url);
        });
      });
    }
  }, {
    key: "pageAlert",
    value: function pageAlert(alert) {
      alert.duration = 6000;
      this.setState({
        pageAlert: alert
      });
    }
  }, {
    key: "handleEditCustomer",
    value: function handleEditCustomer(id) {
      this.props.history.push('/customer/' + id);
    }
  }, {
    key: "handleDeleteCustomer",
    value: function handleDeleteCustomer(id, url) {
      var handleClose = this.state.confirmDialog.handleClose;
      var alertBox = this.pageAlert;
      this.setState(function (prev) {
        return {
          confirmDialog: _objectSpread(_objectSpread({}, prev.confirmDialog), {}, {
            show: true,
            headerName: 'Confirm to Continue!',
            confirmMessage: 'Are you sure want to remove this customer?',
            handleConfirm: function handleConfirm() {
              handleClose();
              var request = {
                method: 'delete',
                data: {
                  'id': id
                },
                url: url
              };
              axios(request).then(function (response) {
                return response;
              }).then(function (json) {
                var dataTablePageInfo = jquery__WEBPACK_IMPORTED_MODULE_11___default()('#customerDataTable').DataTable().page.info();
                jquery__WEBPACK_IMPORTED_MODULE_11___default()('#customerDataTable').DataTable().page(dataTablePageInfo.page).draw(false);

                if (json.data.success) {
                  alertBox({
                    className: 'success',
                    message: json.data.message
                  });
                } else {
                  alertBox({
                    className: 'danger',
                    message: json.data.message
                  });
                }
              })["catch"](function (error) {
                console.log(error);
              });
            }
          })
        };
      });
    }
  }]);

  return Customers;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Customers);

/***/ }),

/***/ "./resources/js/src/views/customer/index.js":
/*!**************************************************!*\
  !*** ./resources/js/src/views/customer/index.js ***!
  \**************************************************/
/*! exports provided: modules, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modules", function() { return modules; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _PrivateRoute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../PrivateRoute */ "./resources/js/src/PrivateRoute.js");
/* harmony import */ var _Customers_Customers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Customers/Customers */ "./resources/js/src/views/customer/Customers/Customers.js");
/* harmony import */ var _Customer_Customer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Customer/Customer */ "./resources/js/src/views/customer/Customer/Customer.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



 // For Validate Logged In.



var modules = {
  Customers: _Customers_Customers__WEBPACK_IMPORTED_MODULE_3__["default"],
  Customer: _Customer_Customer__WEBPACK_IMPORTED_MODULE_4__["default"]
};

var CustomerModule = function CustomerModule(_ref) {
  var component = _ref.component,
      path = _ref.path,
      isPrivate = _ref.isPrivate,
      rest = _objectWithoutProperties(_ref, ["component", "path", "isPrivate"]);

  var RouteComponent = modules[component];

  if (isPrivate) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PrivateRoute__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
      path: path,
      component: RouteComponent
    }, rest));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      component: component
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(CustomerModule));

/***/ })

}]);