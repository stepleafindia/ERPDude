(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

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

/***/ "./resources/js/src/components/Tax/GstTaxModal.js":
/*!********************************************************!*\
  !*** ./resources/js/src/components/Tax/GstTaxModal.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UnitModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utils */ "./resources/js/src/Utils.js");



var hideLoader = true;

function handleClose() {
  var modalGstName = document.getElementById('modalGstName');
  var modalGstType = document.getElementById('modalGstType');
  var modalCgst = document.getElementById('modalCgst');
  var modalIgst = document.getElementById('modalIgst');
  var modalSgst = document.getElementById('modalSgst');
  var modalFormError = document.querySelector('#gstTaxForm .form-error');
  modalGstName.classList.remove("is-invalid");
  modalGstName.nextSibling.innerText = '';
  modalGstType.classList.remove("is-invalid");
  modalGstType.nextSibling.innerText = '';
  modalCgst.classList.remove("is-invalid");
  modalCgst.nextSibling.innerText = '';
  modalIgst.classList.remove("is-invalid");
  modalIgst.nextSibling.innerText = '';
  modalSgst.classList.remove("is-invalid");
  modalSgst.nextSibling.innerText = '';
  modalFormError.innerText = '';
}

function handleSubmit(e, props) {
  e.preventDefault();
  var closeModal = props.handleClose;
  var pageAlert = props.pageAlert;
  var gstTaxId = document.getElementById('modalGstTaxId').value;
  var modalGstName = document.getElementById('modalGstName');
  var modalGstType = document.getElementById('modalGstType');
  var modalCgst = document.getElementById('modalCgst');
  var modalIgst = document.getElementById('modalIgst');
  var modalSgst = document.getElementById('modalSgst');
  var modalFormError = document.querySelector('#gstTaxForm .form-error');
  modalFormError.innerText = "";
  var validation = true;

  if (modalGstName.value.trim() == "") {
    validation = false;
    modalGstName.classList.add("is-invalid");
    modalGstName.nextSibling.innerText = 'GST Name is required!';
  } else {
    modalGstName.classList.remove("is-invalid");
    modalGstName.nextSibling.innerText = '';
  }

  if (modalGstType.value.trim() == "") {
    validation = false;
    modalGstType.classList.add("is-invalid");
    modalGstType.nextSibling.innerText = 'GST Type is required!';
  } else {
    modalGstType.classList.remove("is-invalid");
    modalGstType.nextSibling.innerText = '';
  }

  if (modalCgst.value.trim() == "") {
    validation = false;
    modalCgst.classList.add("is-invalid");
    modalCgst.nextSibling.innerText = 'CGST is required!';
  } else {
    modalCgst.classList.remove("is-invalid");
    modalCgst.nextSibling.innerText = '';
  }

  if (modalIgst.value.trim() == "") {
    validation = false;
    modalIgst.classList.add("is-invalid");
    modalIgst.nextSibling.innerText = 'IGST is required!';
  } else {
    modalIgst.classList.remove("is-invalid");
    modalIgst.nextSibling.innerText = '';
  }

  if (modalSgst.value.trim() == "") {
    validation = false;
    modalSgst.classList.add("is-invalid");
    modalSgst.nextSibling.innerText = 'SGST is required!';
  } else {
    modalSgst.classList.remove("is-invalid");
    modalSgst.nextSibling.innerText = '';
  }

  if (validation) {
    var formData = new FormData(e.target);
    var formUrl = gstTaxId ? _Utils__WEBPACK_IMPORTED_MODULE_2__["apiRoutes"].gstTax + '/' + gstTaxId : _Utils__WEBPACK_IMPORTED_MODULE_2__["apiRoutes"].gstTax;
    var request = {
      method: 'post',
      url: formUrl,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };
    hideLoader = false;
    axios(request).then(function (response) {
      return response;
    }).then(function (json) {
      hideLoader = true;

      if (json.data.validation_error) {
        for (var val in json.data.validation_error) {
          if (val == "type") {
            document.querySelector('#gstTaxForm select[name="' + val + '"]').classList.add("is-invalid");
            document.querySelector('#gstTaxForm select[name="' + val + '"]').nextSibling.innerText = json.data.validation_error[val];
          } else {
            document.querySelector('#gstTaxForm input[name="' + val + '"]').classList.add("is-invalid");
            document.querySelector('#gstTaxForm input[name="' + val + '"]').nextSibling.innerText = json.data.validation_error[val];
          }
        }
      } else if (json.data.success) {
        closeModal(true);
        pageAlert({
          className: 'success',
          message: json.data.message
        });
      } else {
        modalFormError.innerText = json.data.message;
      }
    })["catch"](function (error) {
      hideLoader = true;
      console.log(error);
    });
  }
}

function UnitModal(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    show: props.data.show,
    onHide: function onHide() {
      handleClose();
      props.handleClose(null);
    },
    onShow: function onShow() {
      document.getElementById('modalGstName').focus();
    },
    backdrop: "static",
    keyboard: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "loader-overlay",
    style: hideLoader ? {
      display: 'none'
    } : {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _Utils__WEBPACK_IMPORTED_MODULE_2__["appBaseUrl"] + "/images/loader.gif",
    alt: "Loading...",
    className: "loader-image",
    title: "Loading..."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, {
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Title, null, props.data.headerName ? props.data.headerName : "Product Brand")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    id: "gstTaxForm",
    onSubmit: function onSubmit(e) {
      handleSubmit(e, props);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "hidden",
    name: "id",
    value: props.data.taxId,
    id: "modalGstTaxId"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "modalGstName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "GST Name", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    placeholder: "GST Name",
    defaultValue: props.data.taxName,
    name: "name"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
    type: "invalid"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "modalGstType"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "Tax Type", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "select",
    name: "type",
    defaultValue: props.data.taxType
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "Select Tax Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "Inclusive"
  }, "Inclusive"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "Exclusive"
  }, "Exclusive")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
    type: "invalid"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "modalCgst"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "CGST", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    placeholder: "CGST",
    defaultValue: props.data.cgst,
    name: "cgst"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
    type: "invalid"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "modalIgst"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "IGST", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    placeholder: "IGST",
    defaultValue: props.data.igst,
    name: "igst"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
    type: "invalid"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "modalSgst"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "SGST", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    placeholder: "SGST",
    defaultValue: props.data.sgst,
    name: "sgst"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
    type: "invalid"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-error"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    type: "submit"
  }, "Submit "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "secondary",
    onClick: function onClick() {
      props.handleClose(null);
    },
    className: "close-modal-btn"
  }, "Close")))));
}

/***/ }),

/***/ "./resources/js/src/views/GstTax/GstTaxes.js":
/*!***************************************************!*\
  !*** ./resources/js/src/views/GstTax/GstTaxes.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Header/Header */ "./resources/js/src/components/Header/Header.js");
/* harmony import */ var _components_Tax_GstTaxModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Tax/GstTaxModal */ "./resources/js/src/components/Tax/GstTaxModal.js");
/* harmony import */ var _components_ConfirmDialog_ConfirmDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ConfirmDialog/ConfirmDialog */ "./resources/js/src/components/ConfirmDialog/ConfirmDialog.js");
/* harmony import */ var _components_Alert_FlashAlert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Alert/FlashAlert */ "./resources/js/src/components/Alert/FlashAlert.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Utils */ "./resources/js/src/Utils.js");
/* harmony import */ var datatables_net_bs4_js_dataTables_bootstrap4_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! datatables.net-bs4/js/dataTables.bootstrap4.js */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4_js_dataTables_bootstrap4_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4_js_dataTables_bootstrap4_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var datatables_net_bs4_css_dataTables_bootstrap4_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! datatables.net-bs4/css/dataTables.bootstrap4.css */ "./node_modules/datatables.net-bs4/css/dataTables.bootstrap4.css");
/* harmony import */ var datatables_net_bs4_css_dataTables_bootstrap4_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4_css_dataTables_bootstrap4_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var datatables_net_responsive_bs4_js_responsive_bootstrap4_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! datatables.net-responsive-bs4/js/responsive.bootstrap4.js */ "./node_modules/datatables.net-responsive-bs4/js/responsive.bootstrap4.js");
/* harmony import */ var datatables_net_responsive_bs4_js_responsive_bootstrap4_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(datatables_net_responsive_bs4_js_responsive_bootstrap4_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var datatables_net_responsive_bs4_css_responsive_bootstrap4_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! datatables.net-responsive-bs4/css/responsive.bootstrap4.css */ "./node_modules/datatables.net-responsive-bs4/css/responsive.bootstrap4.css");
/* harmony import */ var datatables_net_responsive_bs4_css_responsive_bootstrap4_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(datatables_net_responsive_bs4_css_responsive_bootstrap4_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_12__);
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















var GstTaxes = /*#__PURE__*/function (_Component) {
  _inherits(GstTaxes, _Component);

  var _super = _createSuper(GstTaxes);

  function GstTaxes(props) {
    var _this;

    _classCallCheck(this, GstTaxes);

    _this = _super.call(this, props);
    _this.state = {
      isLoggedIn: true,
      gstTaxModal: {
        show: false,
        headerName: 'GST Tax',
        taxId: null,
        taxName: null,
        taxType: null,
        cgst: null,
        sgst: null,
        igst: null
      },
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
    _this.openGstModal = _this.openGstModal.bind(_assertThisInitialized(_this));
    _this.handleGstModalClose = _this.handleGstModalClose.bind(_assertThisInitialized(_this));
    _this.pageAlert = _this.pageAlert.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(GstTaxes, [{
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "GST Taxes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        variant: "primary",
        onClick: function onClick() {
          _this2.openGstModal(null);
        }
      }, "Add GST Tax")))), this.state.pageAlert && this.state.pageAlert.message ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Alert_FlashAlert__WEBPACK_IMPORTED_MODULE_5__["default"], {
        data: this.state.pageAlert,
        duration: 6000,
        show: true,
        onClose: function onClose() {
          return _this2.pageAlert({});
        }
      }) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        style: {
          width: '100%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Header, {
        className: "bg-theme"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "card-heading"
      }, "GST Tax List")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "table-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Table"], {
        responsive: true,
        bordered: true,
        striped: true,
        id: "gstDataTable",
        style: {
          width: '100%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "0"
      }, "No"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "1"
      }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "2"
      }, "Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "3"
      }, "CGST"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "4"
      }, "IGST"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "5"
      }, "SGST"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "6"
      }, "Menu"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Tax_GstTaxModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
        data: this.state.gstTaxModal,
        handleClose: this.handleGstModalClose,
        pageAlert: this.pageAlert
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ConfirmDialog_ConfirmDialog__WEBPACK_IMPORTED_MODULE_4__["default"], {
        data: this.state.confirmDialog,
        handleClose: this.state.confirmDialog.handleClose,
        handleConfirm: this.state.confirmDialog.handleConfirm
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleEditGstTax = this.handleEditGstTax.bind(this);
      this.handleDeleteGstTax = this.handleDeleteGstTax.bind(this);
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
      var editFun = this.handleEditGstTax;
      var deleteFun = this.handleDeleteGstTax; //initialize datatable

      jquery__WEBPACK_IMPORTED_MODULE_12___default()(document).ready(function () {
        jquery__WEBPACK_IMPORTED_MODULE_12___default.a.ajaxSetup({
          headers: {
            'X-CSRF-TOKEN': csrf_token,
            'Authorization': 'Bearer ' + access_token
          }
        });
        jquery__WEBPACK_IMPORTED_MODULE_12___default()('#gstDataTable').DataTable({
          "responsive": true,
          "aLengthMenu": [[10, 20, 30, 50, 75, -1], [10, 20, 30, 50, 75, "All"]],
          "pageLength": 10,
          'columnDefs': [{
            'targets': [0, 6],
            'orderable': false
          }, {
            "searchable": false,
            "targets": [0, 6]
          }],
          "processing": true,
          "serverSide": true,
          "ajax": {
            "url": _Utils__WEBPACK_IMPORTED_MODULE_7__["apiRoutes"].gstTaxesList,
            "method": "post"
          },
          "columns": [{
            "data": "sno"
          }, {
            "data": "name"
          }, {
            "data": "type"
          }, {
            "data": "cgst"
          }, {
            "data": "igst"
          }, {
            "data": "sgst"
          }, {
            "data": "menu",
            "class": "text-center"
          }],
          "createdRow": function createdRow(row, data, dataIndex) {
            jquery__WEBPACK_IMPORTED_MODULE_12___default()(row).attr('data-id', data.id);
            jquery__WEBPACK_IMPORTED_MODULE_12___default()(row).find('.btn-edit').on('click', function (e) {
              e.preventDefault();
              editFun(data);
            });
            jquery__WEBPACK_IMPORTED_MODULE_12___default()(row).find('.btn-delete').on('click', function (e) {
              e.preventDefault();
              var url = jquery__WEBPACK_IMPORTED_MODULE_12___default()(this).attr('href');
              deleteFun(data.id, url);
            });
          }
        });
      });
    }
  }, {
    key: "openGstModal",
    value: function openGstModal(data) {
      this.setState({
        gstTaxModal: {
          show: true,
          headerName: 'GST Tax',
          taxId: data && data.id ? data.id : "",
          taxName: data && data.name ? data.name : "",
          taxType: data && data.type ? data.type : "",
          cgst: data && data.cgst ? data.cgst : "",
          sgst: data && data.sgst ? data.sgst : "",
          igst: data && data.igst ? data.igst : ""
        }
      });
    }
  }, {
    key: "handleGstModalClose",
    value: function handleGstModalClose(status) {
      this.setState({
        gstTaxModal: {
          show: false,
          headerName: 'GST Tax',
          taxId: "",
          taxName: "",
          taxType: "",
          cgst: "",
          sgst: "",
          igst: ""
        }
      });

      if (status) {
        var dataTablePageInfo = jquery__WEBPACK_IMPORTED_MODULE_12___default()('#gstDataTable').DataTable().page.info();
        jquery__WEBPACK_IMPORTED_MODULE_12___default()('#gstDataTable').DataTable().page(dataTablePageInfo.page).draw(false);
      }
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
    key: "handleEditGstTax",
    value: function handleEditGstTax(data) {
      this.openGstModal(data);
    }
  }, {
    key: "handleDeleteGstTax",
    value: function handleDeleteGstTax(id, url) {
      var handleClose = this.state.confirmDialog.handleClose;
      var alertBox = this.pageAlert;
      this.setState(function (prev) {
        return {
          confirmDialog: _objectSpread(_objectSpread({}, prev.confirmDialog), {}, {
            show: true,
            headerName: 'Confirm to Continue!',
            confirmMessage: 'Are you sure want to remove this GST Tax?',
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
                var dataTablePageInfo = jquery__WEBPACK_IMPORTED_MODULE_12___default()('#gstDataTable').DataTable().page.info();
                jquery__WEBPACK_IMPORTED_MODULE_12___default()('#gstDataTable').DataTable().page(dataTablePageInfo.page).draw(false);

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

  return GstTaxes;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(GstTaxes));

/***/ })

}]);