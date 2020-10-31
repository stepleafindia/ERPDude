(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/src/views/products/Product/Product.css":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/src/views/products/Product/Product.css ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-card{\r\n    margin:10px 5px;\r\n}\r\n.form-card.card .card-body{\r\n    padding:1rem;\r\n    font-size:14px;\r\n}\r\n.form-card.card .card-title{\r\n    font-size:16px;\r\n    font-weight:600;\r\n}\r\n.preview-image{\r\n    width:100%;\r\n    border: solid 1px #000;\r\n    margin: 5px 0px;\r\n}", ""]);

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

/***/ "./resources/js/src/components/Brand/BrandModal.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/components/Brand/BrandModal.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BrandModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utils */ "./resources/js/src/Utils.js");



var hideLoader = true;

function handleClose() {
  document.getElementById('modalBrandName').classList.remove("is-invalid");
  document.getElementById('modalBrandName').nextSibling.innerText = '';
}

function handleSubmit(e, props) {
  e.preventDefault();
  var closeModal = props.handleClose;
  var pageAlert = props.pageAlert;
  var brandName = document.getElementById('modalBrandName').value;
  var brandId = document.getElementById('modalBrandId').value;
  var formData = new FormData(e.target);
  var formUrl = brandId ? _Utils__WEBPACK_IMPORTED_MODULE_2__["apiRoutes"].brand + '/' + brandId : _Utils__WEBPACK_IMPORTED_MODULE_2__["apiRoutes"].brand;
  var request = {
    method: 'post',
    url: formUrl,
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  };
  hideLoader = false;
  document.getElementById('modalBrandName').classList.remove("is-invalid");
  document.getElementById('modalBrandName').nextSibling.innerText = '';
  axios(request).then(function (response) {
    return response;
  }).then(function (json) {
    hideLoader = true;

    if (json.data.validation_error) {
      document.getElementById('modalBrandName').classList.add("is-invalid");
      document.getElementById('modalBrandName').nextSibling.innerText = json.data.validation_error;
    } else if (json.data.success) {
      closeModal(true);
      pageAlert({
        className: 'success',
        message: json.data.message
      });
    } else {
      document.getElementById('modalBrandName').classList.add("is-invalid");
      document.getElementById('modalBrandName').nextSibling.innerText = json.data.message;
    }
  })["catch"](function (error) {
    hideLoader = true;
    console.log(error);
  });
}

function BrandModal(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    show: props.data.show,
    onHide: function onHide() {
      handleClose();
      props.handleClose(null);
    },
    onShow: function onShow() {
      document.getElementById('modalBrandName').focus();
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
    onSubmit: function onSubmit(e) {
      handleSubmit(e, props);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "hidden",
    name: "id",
    value: props.data.brandId,
    id: "modalBrandId"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "modalBrandName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "Brand Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    placeholder: "Brand Name",
    defaultValue: props.data.brandName,
    name: "name"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
    type: "invalid"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
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

/***/ "./resources/js/src/components/Category/CategoryModal.js":
/*!***************************************************************!*\
  !*** ./resources/js/src/components/Category/CategoryModal.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CategoryModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utils */ "./resources/js/src/Utils.js");



var hideLoader = true;

function handleClose() {
  document.getElementById('modalCategoryName').classList.remove("is-invalid");
  document.getElementById('modalCategoryName').nextSibling.innerText = '';
}

function handleSubmit(e, props) {
  e.preventDefault();
  var pageAlert = props.pageAlert;
  var categoryName = document.getElementById('modalCategoryName');
  var categoryId = document.getElementById('modalCategoryId').value;
  var validation = true;

  if (categoryName.value.trim() == "") {
    categoryName.classList.add("is-invalid");
    categoryName.nextSibling.innerText = 'Category is required!';
    validation = false;
  }

  if (validation) {
    var formData = new FormData(e.target);
    var formUrl = categoryId ? _Utils__WEBPACK_IMPORTED_MODULE_2__["apiRoutes"].productCategory + '/' + categoryId : _Utils__WEBPACK_IMPORTED_MODULE_2__["apiRoutes"].productCategory;
    var request = {
      method: 'post',
      url: formUrl,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }; //let closeBtn=e.target.querySelector('.close-modal-btn');

    hideLoader = false;
    axios(request).then(function (response) {
      return response;
    }).then(function (json) {
      hideLoader = true;

      if (json.data.validation_error) {
        document.getElementById('modalCategoryName').classList.add("is-invalid");
        document.getElementById('modalCategoryName').nextSibling.innerText = json.data.validation_error;
      } else if (json.data.success) {
        pageAlert({
          className: 'alert alert-success',
          message: json.data.message
        });
        props.handleClose(); // closeBtn.click();
      } else {
        document.getElementById('modalCategoryName').classList.add("is-invalid");
        document.getElementById('modalCategoryName').nextSibling.innerText = json.data.message;
      }
    })["catch"](function (error) {
      hideLoader = true;
      console.log(error);
    });
  }
}

function CategoryModal(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    show: props.data.show,
    onHide: function onHide() {
      handleClose();
      props.handleClose();
    },
    backdrop: "static",
    onShow: function onShow() {
      document.getElementById('modalCategoryName').focus();
    },
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Title, null, props.data.headerName ? props.data.headerName : "Product Category")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: function onSubmit(e) {
      handleSubmit(e, props);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "hidden",
    name: "id",
    value: props.data.categoryId,
    id: "modalCategoryId"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "modalCategoryName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "Category Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    placeholder: "Category Name",
    defaultValue: props.data.categoryName,
    name: "name"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
    type: "invalid"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    type: "submit"
  }, "Submit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "secondary",
    onClick: props.handleClose,
    className: "close-modal-btn"
  }, "Close")))));
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

/***/ "./resources/js/src/components/SubCategory/SubCategoryModal.js":
/*!*********************************************************************!*\
  !*** ./resources/js/src/components/SubCategory/SubCategoryModal.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SubCategoryModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utils */ "./resources/js/src/Utils.js");



var hideLoader = true;

function handleClose() {
  document.getElementById('modalSubCategoryName').classList.remove("is-invalid");
  document.getElementById('modalSubCategoryName').nextSibling.innerText = '';
}

function handleSubmit(e, props) {
  e.preventDefault();
  var closeModal = props.handleClose;
  var pageAlert = props.pageAlert;
  var categoryName = document.getElementById('modalSubCategoryName');
  var categoryId = document.getElementById('modalSubCategoryId').value;
  var validation = true;

  if (categoryName.value.trim() == "") {
    categoryName.classList.add("is-invalid");
    categoryName.nextSibling.innerText = 'Sub Category is required!';
    validation = false;
  }

  if (validation) {
    var formData = new FormData(e.target);
    var formUrl = categoryId ? _Utils__WEBPACK_IMPORTED_MODULE_2__["apiRoutes"].productSubCategory + '/' + categoryId : _Utils__WEBPACK_IMPORTED_MODULE_2__["apiRoutes"].productSubCategory;
    var request = {
      method: 'post',
      url: formUrl,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };
    hideLoader = false;
    document.getElementById('modalSubCategoryName').classList.remove("is-invalid");
    document.getElementById('modalSubCategoryName').nextSibling.innerText = '';
    axios(request).then(function (response) {
      return response;
    }).then(function (json) {
      hideLoader = true;

      if (json.data.validation_error) {
        document.getElementById('modalSubCategoryName').classList.add("is-invalid");
        document.getElementById('modalSubCategoryName').nextSibling.innerText = json.data.validation_error;
      } else if (json.data.success) {
        closeModal(true);
        pageAlert({
          className: 'success',
          message: json.data.message
        });
      } else {
        document.getElementById('modalSubCategoryName').classList.add("is-invalid");
        document.getElementById('modalSubCategoryName').nextSibling.innerText = json.data.message;
      }
    })["catch"](function (error) {
      hideLoader = true;
      console.log(error);
    });
  }
}

function SubCategoryModal(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    show: props.data.show,
    onHide: function onHide() {
      handleClose();
      props.handleClose(null);
    },
    backdrop: "static",
    keyboard: false,
    onShow: function onShow() {
      document.getElementById('modalSubCategoryName').focus();
    }
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Title, null, props.data.headerName ? props.data.headerName : "Product Sub Category")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: function onSubmit(e) {
      handleSubmit(e, props);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "hidden",
    name: "id",
    value: props.data.categoryId,
    id: "modalSubCategoryId"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "modalSubCategoryName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "Sub Category Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    placeholder: "Sub Category Name",
    defaultValue: props.data.categoryName,
    name: "name"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
    type: "invalid"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
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

/***/ "./resources/js/src/components/Unit/UnitModal.js":
/*!*******************************************************!*\
  !*** ./resources/js/src/components/Unit/UnitModal.js ***!
  \*******************************************************/
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
  document.getElementById('modalUnitName').classList.remove("is-invalid");
  document.getElementById('modalUnitName').nextSibling.innerText = '';
  document.getElementById('modalUnitCode').classList.remove("is-invalid");
  document.getElementById('modalUnitCode').nextSibling.innerText = '';
}

function handleSubmit(e, props) {
  e.preventDefault();
  var closeModal = props.handleClose;
  var pageAlert = props.pageAlert;
  var unitName = document.getElementById('modalUnitName').value;
  var unitCode = document.getElementById('modalUnitCode').value;
  var unitId = document.getElementById('modalUnitId').value;
  var validation = true;

  if (unitCode.trim() == "") {
    validation = false;
    document.getElementById('modalUnitCode').classList.add("is-invalid");
    document.getElementById('modalUnitCode').nextSibling.innerText = 'Unit Code is required!';
  } else {
    document.getElementById('modalUnitCode').classList.remove("is-invalid");
    document.getElementById('modalUnitCode').nextSibling.innerText = '';
  }

  if (unitName.trim() == "") {
    validation = false;
    document.getElementById('modalUnitName').classList.add("is-invalid");
    document.getElementById('modalUnitName').nextSibling.innerText = 'Unit Name is required!';
  } else {
    document.getElementById('modalUnitName').classList.remove("is-invalid");
    document.getElementById('modalUnitName').nextSibling.innerText = '';
  }

  if (validation) {
    var formData = new FormData(e.target);
    var formUrl = unitId ? _Utils__WEBPACK_IMPORTED_MODULE_2__["apiRoutes"].unit + '/' + unitId : _Utils__WEBPACK_IMPORTED_MODULE_2__["apiRoutes"].unit;
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
          document.querySelector('#unitModalForm input[name="' + val + '"]').classList.add("is-invalid");
          document.querySelector('#unitModalForm input[name="' + val + '"]').nextSibling.innerText = json.data.validation_error[val];
        }
      } else if (json.data.success) {
        closeModal(true);
        pageAlert({
          className: 'success',
          message: json.data.message
        });
      } else {
        document.getElementById('modalUnitName').classList.add("is-invalid");
        document.getElementById('modalUnitName').nextSibling.innerText = json.data.message;
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
      document.getElementById('modalUnitCode').focus();
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
    src: "/images/loader.gif",
    alt: "Loading...",
    className: "loader-image",
    title: "Loading..."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, {
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Title, null, props.data.headerName ? props.data.headerName : "Product Brand")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    id: "unitModalForm",
    onSubmit: function onSubmit(e) {
      handleSubmit(e, props);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "hidden",
    name: "id",
    value: props.data.unitId,
    id: "modalUnitId"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "modalUnitCode"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "Unit Code"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    placeholder: "Unit Code",
    defaultValue: props.data.unitCode,
    name: "code"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
    type: "invalid"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "modalUnitName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "Unit Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    placeholder: "Unit Name",
    defaultValue: props.data.unitName,
    name: "name"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
    type: "invalid"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
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

/***/ "./resources/js/src/views/products/Brand/Brands.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/products/Brand/Brands.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Header/Header */ "./resources/js/src/components/Header/Header.js");
/* harmony import */ var _components_Brand_BrandModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Brand/BrandModal */ "./resources/js/src/components/Brand/BrandModal.js");
/* harmony import */ var _components_ConfirmDialog_ConfirmDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ConfirmDialog/ConfirmDialog */ "./resources/js/src/components/ConfirmDialog/ConfirmDialog.js");
/* harmony import */ var _components_Alert_FlashAlert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Alert/FlashAlert */ "./resources/js/src/components/Alert/FlashAlert.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Utils */ "./resources/js/src/Utils.js");
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















var Brands = /*#__PURE__*/function (_Component) {
  _inherits(Brands, _Component);

  var _super = _createSuper(Brands);

  function Brands(props) {
    var _this;

    _classCallCheck(this, Brands);

    _this = _super.call(this, props);
    _this.state = {
      isLoggedIn: true,
      brandModal: {
        show: false,
        headerName: 'Product Brand',
        brandName: null,
        brandId: null
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
    _this.openBrandModal = _this.openBrandModal.bind(_assertThisInitialized(_this));
    _this.handleBrandModalClose = _this.handleBrandModalClose.bind(_assertThisInitialized(_this));
    _this.pageAlert = _this.pageAlert.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Brands, [{
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Product Brands"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        variant: "primary",
        onClick: function onClick() {
          _this2.openBrandModal(null, null);
        }
      }, "Add Brand")))), this.state.pageAlert && this.state.pageAlert.message ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Alert_FlashAlert__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
      }, "Brands List")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container-fluid"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Table"], {
        responsive: true,
        bordered: true,
        striped: true,
        id: "responsiveDataTable2",
        style: {
          width: '100%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "0"
      }, "No"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "1"
      }, "Brand"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "2"
      }, "Menu"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Brand_BrandModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
        data: this.state.brandModal,
        handleClose: this.handleBrandModalClose,
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
      this.handleEditBrand = this.handleEditBrand.bind(this);
      this.handleDeleteBrand = this.handleDeleteBrand.bind(this);
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
      var editFun = this.handleEditBrand;
      var deleteFun = this.handleDeleteBrand; //initialize datatable

      jquery__WEBPACK_IMPORTED_MODULE_12___default()(document).ready(function () {
        jquery__WEBPACK_IMPORTED_MODULE_12___default.a.ajaxSetup({
          headers: {
            'X-CSRF-TOKEN': csrf_token,
            'Authorization': 'Bearer ' + access_token
          }
        });
        jquery__WEBPACK_IMPORTED_MODULE_12___default()('#responsiveDataTable2').DataTable({
          "responsive": true,
          "aLengthMenu": [[10, 20, 30, 50, 75, -1], [10, 20, 30, 50, 75, "All"]],
          "pageLength": 10,
          'columnDefs': [{
            'targets': [0, 2],
            'orderable': false
          }, {
            "searchable": false,
            "targets": [0, 2]
          }],
          "processing": true,
          "serverSide": true,
          "ajax": {
            "url": _Utils__WEBPACK_IMPORTED_MODULE_7__["apiRoutes"].brandsList,
            "method": "post"
          },
          "columns": [{
            "data": "sno"
          }, {
            "data": "name"
          }, {
            "data": "menu",
            "class": "text-center"
          }],
          "createdRow": function createdRow(row, data, dataIndex) {
            jquery__WEBPACK_IMPORTED_MODULE_12___default()(row).attr('data-id', data.id);
            jquery__WEBPACK_IMPORTED_MODULE_12___default()(row).find('.btn-edit').on('click', function (e) {
              e.preventDefault();
              editFun(data.id, data.name);
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
    key: "openBrandModal",
    value: function openBrandModal(id, value) {
      this.setState({
        brandModal: {
          show: true,
          headerName: 'Product Brand',
          brandName: value ? value : "",
          brandId: id ? id : ""
        }
      });
    }
  }, {
    key: "handleBrandModalClose",
    value: function handleBrandModalClose(status) {
      this.setState({
        brandModal: {
          show: false,
          headerName: 'Product Brand',
          brandName: "",
          brandId: ""
        }
      });

      if (status) {
        var dataTablePageInfo = jquery__WEBPACK_IMPORTED_MODULE_12___default()('#responsiveDataTable2').DataTable().page.info();
        jquery__WEBPACK_IMPORTED_MODULE_12___default()('#responsiveDataTable2').DataTable().page(dataTablePageInfo.page).draw(false);
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
    key: "handleEditBrand",
    value: function handleEditBrand(id, value) {
      this.openBrandModal(id, value);
    }
  }, {
    key: "handleDeleteBrand",
    value: function handleDeleteBrand(id, url) {
      var handleClose = this.state.confirmDialog.handleClose;
      var alertBox = this.pageAlert;
      this.setState(function (prev) {
        return {
          confirmDialog: _objectSpread(_objectSpread({}, prev.confirmDialog), {}, {
            show: true,
            headerName: 'Confirm to Continue!',
            confirmMessage: 'Are you sure want to remove this product brand?',
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
                var dataTablePageInfo = jquery__WEBPACK_IMPORTED_MODULE_12___default()('#responsiveDataTable2').DataTable().page.info();
                jquery__WEBPACK_IMPORTED_MODULE_12___default()('#responsiveDataTable2').DataTable().page(dataTablePageInfo.page).draw(false);

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

  return Brands;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Brands));

/***/ }),

/***/ "./resources/js/src/views/products/Category/Categories.js":
/*!****************************************************************!*\
  !*** ./resources/js/src/views/products/Category/Categories.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Header/Header */ "./resources/js/src/components/Header/Header.js");
/* harmony import */ var _components_Category_CategoryModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Category/CategoryModal */ "./resources/js/src/components/Category/CategoryModal.js");
/* harmony import */ var _components_ConfirmDialog_ConfirmDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ConfirmDialog/ConfirmDialog */ "./resources/js/src/components/ConfirmDialog/ConfirmDialog.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_Alert_FlashAlert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Alert/FlashAlert */ "./resources/js/src/components/Alert/FlashAlert.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Utils */ "./resources/js/src/Utils.js");
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















var Categories = /*#__PURE__*/function (_Component) {
  _inherits(Categories, _Component);

  var _super = _createSuper(Categories);

  function Categories(props) {
    var _this;

    _classCallCheck(this, Categories);

    _this = _super.call(this, props);
    _this.state = {
      isLoggedIn: true,
      categoryModal: {
        show: false,
        headerName: 'Product Category',
        categoryName: null,
        categoryId: null
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

          console.log(_this.state.confirmDialog);
        },
        handleConfirm: null
      },
      user: [],
      error: '',
      pageAlert: {}
    };
    _this.handleCategoryClose = _this.handleCategoryClose.bind(_assertThisInitialized(_this));
    _this.openCategoryModal = _this.openCategoryModal.bind(_assertThisInitialized(_this));
    _this.pageAlert = _this.pageAlert.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Categories, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleEditCategory = this.handleEditCategory.bind(this);
      this.handleDeleteCategory = this.handleDeleteCategory.bind(this);
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
      var editFun = this.handleEditCategory;
      var deleteFun = this.handleDeleteCategory; //initialize datatable

      jquery__WEBPACK_IMPORTED_MODULE_12___default()(document).ready(function () {
        jquery__WEBPACK_IMPORTED_MODULE_12___default.a.ajaxSetup({
          headers: {
            'X-CSRF-TOKEN': csrf_token,
            'Authorization': 'Bearer ' + access_token
          }
        });
        jquery__WEBPACK_IMPORTED_MODULE_12___default()('#responsiveDataTable').DataTable({
          "responsive": true,
          "aLengthMenu": [[10, 20, 30, 50, 75, -1], [10, 20, 30, 50, 75, "All"]],
          "pageLength": 10,
          'columnDefs': [{
            'targets': [0, 2],
            'orderable': false
          }, {
            "searchable": false,
            "targets": [0, 2]
          }],
          "processing": true,
          "serverSide": true,
          "ajax": {
            "url": _Utils__WEBPACK_IMPORTED_MODULE_7__["apiRoutes"].productCategoriesList,
            "method": "post"
          },
          "columns": [{
            "data": "sno"
          }, {
            "data": "name"
          }, {
            "data": "menu",
            "class": "text-center"
          }],
          "createdRow": function createdRow(row, data, dataIndex) {
            jquery__WEBPACK_IMPORTED_MODULE_12___default()(row).attr('data-id', data.id);
            jquery__WEBPACK_IMPORTED_MODULE_12___default()(row).find('.btn-edit').on('click', function (e) {
              e.preventDefault();
              editFun(data.id, data.name);
            });
            jquery__WEBPACK_IMPORTED_MODULE_12___default()(row).find('.btn-delete').on('click', function (e) {
              e.preventDefault();
              var url = jquery__WEBPACK_IMPORTED_MODULE_12___default()(this).attr('href');
              console.log(url);
              deleteFun(data.id, url);
            });
          }
        });
      });
    }
  }, {
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Product Categories"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        variant: "primary",
        onClick: function onClick() {
          _this2.openCategoryModal(null, null);
        }
      }, "Add Category")))), this.state.pageAlert && this.state.pageAlert.message ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Alert_FlashAlert__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
      }, "Categories List")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container-fluid"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Table"], {
        responsive: true,
        bordered: true,
        striped: true,
        id: "responsiveDataTable",
        style: {
          width: '100%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "0"
      }, "No"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "1"
      }, "Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "2"
      }, "Menu"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Category_CategoryModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
        data: this.state.categoryModal,
        handleClose: this.handleCategoryClose,
        pageAlert: this.pageAlert
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ConfirmDialog_ConfirmDialog__WEBPACK_IMPORTED_MODULE_4__["default"], {
        data: this.state.confirmDialog,
        handleClose: this.state.confirmDialog.handleClose,
        handleConfirm: this.state.confirmDialog.handleConfirm
      }));
    }
  }, {
    key: "handleCategoryClose",
    value: function handleCategoryClose() {
      this.setState({
        categoryModal: {
          show: false,
          headerName: 'Product Category',
          categoryName: "",
          categoryId: ""
        }
      });
      var dataTablePageInfo = jquery__WEBPACK_IMPORTED_MODULE_12___default()('#responsiveDataTable').DataTable().page.info();
      jquery__WEBPACK_IMPORTED_MODULE_12___default()('#responsiveDataTable').DataTable().page(dataTablePageInfo.page).draw(false);
    }
  }, {
    key: "openCategoryModal",
    value: function openCategoryModal(id, value) {
      this.setState({
        categoryModal: {
          show: true,
          headerName: 'Product Category',
          categoryName: value ? value : "",
          categoryId: id ? id : ""
        }
      });
    }
  }, {
    key: "handleEditCategory",
    value: function handleEditCategory(id, value) {
      this.openCategoryModal(id, value);
    }
  }, {
    key: "pageAlert",
    value: function pageAlert(alert) {
      alert.duration = 6000;
      this.setState({
        pageAlert: alert
      });
      console.log(this.state.pageAlert);
    }
  }, {
    key: "handleDeleteCategory",
    value: function handleDeleteCategory(id, url) {
      var handleClose = this.state.confirmDialog.handleClose;
      var alertBox = this.pageAlert;
      this.setState(function (prev) {
        return {
          confirmDialog: _objectSpread(_objectSpread({}, prev.confirmDialog), {}, {
            show: true,
            headerName: 'Confirm to Continue!',
            confirmMessage: 'Are you sure want to remove this product category?',
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
                var dataTablePageInfo = jquery__WEBPACK_IMPORTED_MODULE_12___default()('#responsiveDataTable').DataTable().page.info();
                jquery__WEBPACK_IMPORTED_MODULE_12___default()('#responsiveDataTable').DataTable().page(dataTablePageInfo.page).draw(false);

                if (json.data.success) {
                  alertBox({
                    className: 'alert alert-success',
                    message: json.data.message
                  });
                } else {
                  alertBox({
                    className: 'alert alert-danger',
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

  return Categories;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Categories));

/***/ }),

/***/ "./resources/js/src/views/products/Product/Product.css":
/*!*************************************************************!*\
  !*** ./resources/js/src/views/products/Product/Product.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/postcss-loader/src??ref--6-2!./Product.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/src/views/products/Product/Product.css");

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

/***/ "./resources/js/src/views/products/Product/Product.js":
/*!************************************************************!*\
  !*** ./resources/js/src/views/products/Product/Product.js ***!
  \************************************************************/
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
/* harmony import */ var react_easy_crop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-easy-crop */ "./node_modules/react-easy-crop/index.module.js");
/* harmony import */ var _components_Loader_Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Loader/Loader */ "./resources/js/src/components/Loader/Loader.js");
/* harmony import */ var _Product_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Product.css */ "./resources/js/src/views/products/Product/Product.css");
/* harmony import */ var _Product_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Product_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Utils */ "./resources/js/src/Utils.js");
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




var Product = /*#__PURE__*/function (_Component) {
  _inherits(Product, _Component);

  var _super = _createSuper(Product);

  function Product(props) {
    var _this;

    _classCallCheck(this, Product);

    _this = _super.call(this, props);
    _this.getInitialState = _this.getInitialState.bind(_assertThisInitialized(_this));
    _this.state = _this.getInitialState();
    _this.pageAlert = _this.pageAlert.bind(_assertThisInitialized(_this));
    _this.getCategoriesList = _Utils__WEBPACK_IMPORTED_MODULE_9__["getCategoriesList"].bind(_assertThisInitialized(_this));
    _this.getSubCategoriesList = _Utils__WEBPACK_IMPORTED_MODULE_9__["getSubCategoriesList"].bind(_assertThisInitialized(_this));
    _this.getBrandsList = _Utils__WEBPACK_IMPORTED_MODULE_9__["getBrandsList"].bind(_assertThisInitialized(_this));
    _this.getUnitsList = _Utils__WEBPACK_IMPORTED_MODULE_9__["getUnitsList"].bind(_assertThisInitialized(_this));
    _this.getGstTaxesList = _Utils__WEBPACK_IMPORTED_MODULE_9__["getGstTaxesList"].bind(_assertThisInitialized(_this));
    _this.getProductDetails = _Utils__WEBPACK_IMPORTED_MODULE_9__["getProductDetails"].bind(_assertThisInitialized(_this));
    _this.onImageChange = _this.onImageChange.bind(_assertThisInitialized(_this));
    _this.onCropChange = _this.onCropChange.bind(_assertThisInitialized(_this));
    _this.onCropComplete = _this.onCropComplete.bind(_assertThisInitialized(_this));
    _this.onZoomChange = _this.onZoomChange.bind(_assertThisInitialized(_this));
    _this.showCroppedImage = _this.showCroppedImage.bind(_assertThisInitialized(_this));
    _this.selectInputChange = _this.selectInputChange.bind(_assertThisInitialized(_this));
    _this.inputStateChange = _this.inputStateChange.bind(_assertThisInitialized(_this));
    _this.validateNumeric = _this.validateNumeric.bind(_assertThisInitialized(_this));
    _this.productFormSubmit = _this.productFormSubmit.bind(_assertThisInitialized(_this));
    _this._isMounted = false;
    return _this;
  }

  _createClass(Product, [{
    key: "getInitialState",
    value: function getInitialState() {
      var _this2 = this;

      return {
        productId: this.props.match.params.id ? this.props.match.params.id : null,
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
        categoriesList: [],
        subCategoriesList: [],
        brandsList: [],
        unitsList: [],
        gstTaxList: [],
        user: [],
        error: '',
        imageCrop: {
          image: null,
          crop: {
            x: 20,
            y: 20
          },
          zoom: 1,
          aspect: 4 / 3,
          croppedAreaPixels: null,
          croppedImage: null,
          previewImage: null
        },
        pageAlert: {},
        errors: {},
        inputs: {}
      };
    }
  }, {
    key: "validateFormInput",
    value: function validateFormInput(inputName, value) {
      var errors = [];
      var requiredFields = ["name", "category_id", "brand_id", "unit_id", "mrp", "cost_price", "selling_price", "sales_gst_id"];

      if (requiredFields.indexOf(inputName) != -1) {
        if (!value) {
          errors.push("This field is required!");
        }
      }

      return errors.length ? errors : null;
    }
  }, {
    key: "productFormSubmit",
    value: function productFormSubmit(e) {
      var _this3 = this;

      e.preventDefault();
      var stateInputs = this.state.inputs;
      var inputErrors = this.state.errors;
      var validation = true;

      if (!stateInputs.name) {
        inputErrors.name = "Product Name is required!";
        validation = false;
      }

      if (!stateInputs.category_id) {
        inputErrors.category_id = "Product Category is required!";
        validation = false;
      }

      if (!stateInputs.brand_id) {
        inputErrors.brand_id = "Product Brand is required!";
        validation = false;
      }

      if (!stateInputs.unit_id) {
        inputErrors.unit_id = "Product Unit is required!";
        validation = false;
      }

      if (!stateInputs.mrp) {
        inputErrors.mrp = "Product MRP is required!";
        validation = false;
      }

      if (!stateInputs.cost_price) {
        inputErrors.cost_price = "Product Cost Price is required!";
        validation = false;
      }

      if (!stateInputs.selling_price) {
        inputErrors.selling_price = "Product Selling Price is required!";
        validation = false;
      }

      if (!stateInputs.sales_gst_id) {
        inputErrors.sales_gst_id = "Product Sales Tax is required!";
        validation = false;
      }

      this.setState(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          errors: inputErrors
        });
      });

      if (validation) {
        var formData = new FormData(e.target);
        var formUrl = this.state.productId ? _Utils__WEBPACK_IMPORTED_MODULE_9__["apiRoutes"].product + '/' + this.state.productId : _Utils__WEBPACK_IMPORTED_MODULE_9__["apiRoutes"].product;
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
              pathname: _Utils__WEBPACK_IMPORTED_MODULE_9__["appRoutes"].products,
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
      var numericInputs = ["selling_price", "cost_price"];

      if (numericInputs.indexOf(e.target.name) != -1 && stateInputs.selling_price && stateInputs.cost_price) {
        var margin = stateInputs.selling_price - stateInputs.cost_price;
        stateInputs.margin = margin / stateInputs.cost_price * 100;
      }
    }
  }, {
    key: "validateNumeric",
    value: function validateNumeric(e) {
      var numericInputs = ["mrp", "selling_price", "cost_price", "margin", "discount"];

      if (numericInputs.indexOf(e.target.name) != -1) {
        e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.state.loader ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_7__["default"], null) : "", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Product"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
        to: _Utils__WEBPACK_IMPORTED_MODULE_9__["appRoutes"].products,
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
        onSubmit: this.productFormSubmit,
        id: "productForm"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
        fluid: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
        className: "no-gutters"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], {
        className: "form-card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "card-title"
      }, "Product Details"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
        controlId: "formProductName"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, null, "Name ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-danger"
      }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
        type: "text",
        placeholder: "Product Name",
        name: "name",
        value: this.state.inputs.name ? this.state.inputs.name : "",
        isInvalid: !!this.state.errors.name,
        onChange: this.inputStateChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
        type: "invalid"
      }, this.state.errors.name ? this.state.errors.name : ""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
        controlId: "formProductHSN"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, null, "HSN Code "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
        type: "text",
        placeholder: "HSN Code",
        name: "hsn",
        value: this.state.inputs.hsn ? this.state.inputs.hsn : "",
        isInvalid: !!this.state.errors.hsn,
        onChange: this.inputStateChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
        type: "invalid"
      }, this.state.errors.hsn ? this.state.errors.hsn : ""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
        controlId: "formProductBarcode"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, null, "Barcode "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
        type: "text",
        placeholder: "Barcode",
        name: "barcode",
        value: this.state.inputs.barcode ? this.state.inputs.barcode : "",
        isInvalid: !!this.state.errors.barcode,
        onChange: this.inputStateChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
        type: "invalid"
      }, this.state.errors.barcode ? this.state.errors.barcode : ""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
        controlId: "formProductBarcodeType"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, null, "Barcode Type "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
        as: "select",
        className: "my-1 mr-sm-2",
        value: this.state.inputs.barcode_type ? this.state.inputs.barcode_type : "",
        isInvalid: !!this.state.errors.barcode_type,
        name: "barcode_type",
        onChange: this.inputStateChange,
        custom: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Own Barcode"
      }, "Own Barcode"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Company Barcode"
      }, "Company Barcode")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
        type: "invalid"
      }, this.state.errors.barcode_type ? this.state.errors.barcode_type : ""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
        controlId: "formProductCategory"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, null, "Category ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-danger"
      }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
        as: "select",
        className: "my-1 mr-sm-2",
        value: this.state.inputs.category_id ? this.state.inputs.category_id : "",
        isInvalid: !!this.state.errors.category_id,
        name: "category_id",
        onChange: this.inputStateChange,
        custom: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: ""
      }, "Choose..."), this.state.categoriesList.map(function (_ref, index) {
        var id = _ref.id,
            name = _ref.name;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          key: id,
          value: id
        }, name);
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
        type: "invalid"
      }, this.state.errors.category_id ? this.state.errors.category_id : ""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
        controlId: "formProductSubCategory"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, null, "Sub Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
        as: "select",
        className: "my-1 mr-sm-2",
        value: this.state.inputs.sub_category_id ? this.state.inputs.sub_category_id : "",
        isInvalid: !!this.state.errors.sub_category_id,
        name: "sub_category_id",
        onChange: this.inputStateChange,
        custom: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: ""
      }, "Choose..."), this.state.subCategoriesList.map(function (_ref2, index) {
        var id = _ref2.id,
            name = _ref2.name;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          key: id,
          value: id
        }, name);
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
        type: "invalid"
      }, this.state.errors.sub_category_id ? this.state.errors.sub_category_id : ""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
        controlId: "formProductBrand"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, null, "Brand ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-danger"
      }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
        as: "select",
        className: "my-1 mr-sm-2",
        value: this.state.inputs.brand_id ? this.state.inputs.brand_id : "",
        name: "brand_id",
        isInvalid: !!this.state.errors.brand_id,
        onChange: this.inputStateChange,
        custom: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: ""
      }, "Choose..."), this.state.brandsList.map(function (_ref3, index) {
        var id = _ref3.id,
            name = _ref3.name;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          key: id,
          value: id
        }, name);
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
        type: "invalid"
      }, this.state.errors.brand_id ? this.state.errors.brand_id : ""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
        controlId: "formProductUnit"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, null, "Unit ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-danger"
      }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
        as: "select",
        className: "my-1 mr-sm-2",
        value: this.state.inputs.unit_id ? this.state.inputs.unit_id : "",
        name: "unit_id",
        isInvalid: !!this.state.errors.unit_id,
        onChange: this.inputStateChange,
        custom: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: ""
      }, "Choose..."), this.state.unitsList.map(function (_ref4, index) {
        var id = _ref4.id,
            name = _ref4.name;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          key: id,
          value: id
        }, name);
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
        type: "invalid"
      }, this.state.errors.unit_id ? this.state.errors.unit_id : ""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
        controlId: "formProductStyle"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, null, "Style "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
        type: "text",
        placeholder: "Style",
        value: this.state.inputs.style ? this.state.inputs.style : "",
        name: "style",
        isInvalid: !!this.state.errors.style,
        onChange: this.inputStateChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
        type: "invalid"
      }, this.state.errors.style ? this.state.errors.style : "")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "card-title"
      }, "Product Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
        controlId: "formProductMRP"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, null, "MRP ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-danger"
      }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
        type: "text",
        placeholder: "MRP",
        value: this.state.inputs.mrp ? this.state.inputs.mrp : "",
        name: "mrp",
        isInvalid: !!this.state.errors.mrp,
        onChange: this.inputStateChange,
        onInput: this.validateNumeric
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
        type: "invalid"
      }, this.state.errors.mrp ? this.state.errors.mrp : ""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
        controlId: "formProductCostPrice"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, null, "Cost Price ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-danger"
      }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
        type: "text",
        placeholder: "Cost Price",
        value: this.state.inputs.cost_price ? this.state.inputs.cost_price : "",
        name: "cost_price",
        onChange: this.inputStateChange,
        onInput: this.validateNumeric,
        isInvalid: !!this.state.errors.cost_price
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
        type: "invalid"
      }, this.state.errors.cost_price ? this.state.errors.cost_price : ""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
        controlId: "formProductSellingPrice"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, null, "Selling Price ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-danger"
      }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
        type: "text",
        placeholder: "Selling Price",
        value: this.state.inputs.selling_price ? this.state.inputs.selling_price : "",
        name: "selling_price",
        onChange: this.inputStateChange,
        onInput: this.validateNumeric,
        isInvalid: !!this.state.errors.selling_price
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
        type: "invalid"
      }, this.state.errors.selling_price ? this.state.errors.selling_price : ""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
        controlId: "formProductMargin"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, null, "Margin (%)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
        type: "text",
        placeholder: "Margin (%)",
        value: this.state.inputs.margin ? this.state.inputs.margin : "",
        name: "margin",
        isInvalid: !!this.state.errors.margin,
        onChange: this.inputStateChange,
        disabled: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
        type: "invalid"
      }, this.state.errors.margin ? this.state.errors.margin : ""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
        controlId: "formProductDiscount"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, null, "Discount (%) "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
        type: "text",
        placeholder: "Discount (%)",
        value: this.state.inputs.discount ? this.state.inputs.discount : "",
        name: "discount",
        isInvalid: !!this.state.errors.discount,
        onChange: this.inputStateChange,
        onInput: this.validateNumeric
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
        type: "invalid"
      }, this.state.errors.discount ? this.state.errors.discount : ""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
        controlId: "formProductSalesTax"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, null, "Sales Tax ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-danger"
      }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
        as: "select",
        className: "my-1 mr-sm-2",
        value: this.state.inputs.sales_gst_id ? this.state.inputs.sales_gst_id : "",
        name: "sales_gst_id",
        isInvalid: !!this.state.errors.sales_gst_id,
        onChange: this.inputStateChange,
        custom: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: ""
      }, "Choose..."), this.state.gstTaxList.map(function (_ref5, index) {
        var id = _ref5.id,
            name = _ref5.name;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          key: id,
          value: id
        }, name);
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
        type: "invalid"
      }, this.state.errors.sales_gst_id ? this.state.errors.sales_gst_id : ""))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        md: 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], {
        className: "form-card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "card-title"
      }, "Product Image"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "hidden",
        name: "image_src",
        defaultValue: this.state.imageCrop.croppedImage
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: this.state.imageCrop.previewImage ? this.state.imageCrop.previewImage : _Utils__WEBPACK_IMPORTED_MODULE_9__["appBaseUrl"] + '/images/placeholder.jpg',
        className: "preview-image",
        alt: "Preview",
        title: "Preview"
      }), this.state.imageCrop.image != null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "position-relative"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "crop-container",
        style: {
          width: "300px",
          height: "250px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_easy_crop__WEBPACK_IMPORTED_MODULE_6__["default"], {
        image: this.state.imageCrop.image,
        crop: this.state.imageCrop.crop,
        zoom: this.state.imageCrop.zoom,
        aspect: this.state.aspect,
        onCropChange: this.onCropChange,
        onCropComplete: this.onCropComplete,
        onZoomChange: this.onZoomChange
      }))) : "", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].File, {
        name: "image",
        label: "Product Image",
        isInvalid: !!this.state.errors.image,
        feedback: this.state.errors.image,
        id: "formProductImage",
        onChange: this.onImageChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
        type: "invalid"
      }, this.state.errors.image))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        md: 12,
        className: "text-right p-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
        to: _Utils__WEBPACK_IMPORTED_MODULE_9__["appRoutes"].products,
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

      Object(_Utils__WEBPACK_IMPORTED_MODULE_9__["getCategoriesList"])(function (json) {
        if (json.data.success) {
          _this5.setState({
            categoriesList: json.data.data
          });
        }
      }, function (error) {
        console.log(error);
      });
      Object(_Utils__WEBPACK_IMPORTED_MODULE_9__["getSubCategoriesList"])(function (json) {
        if (json.data.success) {
          _this5.setState({
            subCategoriesList: json.data.data
          });
        }
      }, function (error) {
        console.log(error);
      });
      Object(_Utils__WEBPACK_IMPORTED_MODULE_9__["getBrandsList"])(function (json) {
        if (json.data.success) {
          _this5.setState({
            brandsList: json.data.data
          });
        }
      }, function (error) {
        console.log(error);
      });
      Object(_Utils__WEBPACK_IMPORTED_MODULE_9__["getUnitsList"])(function (json) {
        if (json.data.success) {
          _this5.setState({
            unitsList: json.data.data
          });
        }
      }, function (error) {
        console.log(error);
      });
      Object(_Utils__WEBPACK_IMPORTED_MODULE_9__["getGstTaxesList"])(function (json) {
        if (json.data.success) {
          _this5.setState({
            gstTaxList: json.data.data
          });
        }
      }, function (error) {
        console.log(error);
      });

      if (this.props.match.params.id !== undefined) {
        var productId = this.props.match.params.id;
        this.setState({
          loader: true
        });
        Object(_Utils__WEBPACK_IMPORTED_MODULE_9__["getProductDetails"])(productId, function (json) {
          if (json.data.success) {
            var data = json.data.data;
            var inputs = {
              name: data.name,
              hsn: data.hsn,
              barcode: data.barcode,
              barcode_type: data.barcode_type,
              category_id: data.category_id,
              sub_category_id: data.sub_category_id,
              brand_id: data.brand_id,
              unit_id: data.unit_id,
              style: data.style,
              mrp: data.mrp,
              cost_price: data.cost_price,
              selling_price: data.selling_price,
              margin: data.margin,
              discount: data.discount_percentage,
              sales_gst_id: data.sales_gst_tax_id
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
              pathname: _Utils__WEBPACK_IMPORTED_MODULE_9__["appRoutes"].products,
              state: {
                pageAlert: {
                  className: 'alert alert-danger',
                  message: json.data.message
                }
              }
            });
          }
        }, function (error) {
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
  }, {
    key: "onImageChange",
    value: function onImageChange(e) {
      var fileSize = (e.target.files[0].size / 1024 / 1024).toFixed(2);
      var fileFormat = $(e.target).val().split('.').pop().toLowerCase();
      var allowedFormats = ['jpg', 'jpeg', 'png'];

      if (!fileFormat || !allowedFormats.includes(fileFormat)) {
        e.target.value = "";
        this.setState(function (prev) {
          return {
            errors: _objectSpread(_objectSpread({}, prev.errors), {}, {
              image: "Invalid image format!"
            })
          };
        });
      } else if (fileSize > 4) {
        e.target.value = "";
        this.setState(function (prev) {
          return {
            errors: _objectSpread(_objectSpread({}, prev.errors), {}, {
              image: "Image size should be less than 4 MB"
            })
          };
        });
      } else {
        var reader = new FileReader();

        reader.onloadend = function () {
          this.setState(function (prev) {
            return _objectSpread(_objectSpread({}, prev), {}, {
              imageCrop: _objectSpread(_objectSpread({}, prev.imageCrop), {}, {
                image: reader.result
              })
            });
          });
        }.bind(this);

        reader.readAsDataURL(e.target.files[0]);
      }
    }
  }, {
    key: "onCropChange",
    value: function onCropChange(crop) {
      this.setState(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          imageCrop: _objectSpread(_objectSpread({}, prev.imageCrop), {}, {
            crop: crop
          })
        });
      });
    }
  }, {
    key: "onCropComplete",
    value: function onCropComplete(croppedArea, croppedAreaPixels) {
      this.setState(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          imageCrop: _objectSpread(_objectSpread({}, prev.imageCrop), {}, {
            croppedAreaPixels: croppedAreaPixels
          })
        });
      });
      this.showCroppedImage(croppedAreaPixels, 0);
    }
  }, {
    key: "onZoomChange",
    value: function onZoomChange(zoom) {
      this.setState(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          imageCrop: _objectSpread(_objectSpread({}, prev.imageCrop), {}, {
            zoom: zoom
          })
        });
      });
    }
    /*createImage(url){
        new Promise((resolve, reject) => {
            const image = new Image()
            image.addEventListener('load', () => resolve(image))
            image.addEventListener('error', error => reject(error))
            image.setAttribute('crossOrigin', 'anonymous') // needed to avoid cross-origin issues on CodeSandbox
            image.src = url
            return image;
        });
    } */

  }, {
    key: "getRadianAngle",
    value: function getRadianAngle(degreeValue) {
      return degreeValue * Math.PI / 180;
    }
  }, {
    key: "getCroppedImg",
    value: function getCroppedImg(imageSrc, pixelCrop) {
      var rotation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var image = new Image(); //image.addEventListener('load', () => resolve(image))
      //image.addEventListener('error', error => reject(error))

      image.setAttribute('crossOrigin', 'anonymous'); // needed to avoid cross-origin issues on CodeSandbox

      image.src = imageSrc;
      image.style.backgroundColor = "#fff"; //const image = this.createImage(imageSrc)     

      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      var maxSize = Math.max(image.width, image.height);
      var safeArea = 2 * (maxSize / 2 * Math.sqrt(2)); // set each dimensions to double largest dimension to allow for a safe area for the
      // image to rotate in without being clipped by canvas context

      canvas.width = safeArea;
      canvas.height = safeArea; // translate canvas context to a central location on image to allow rotating around the center.

      ctx.translate(safeArea / 2, safeArea / 2);
      ctx.rotate(this.getRadianAngle(rotation));
      ctx.translate(-safeArea / 2, -safeArea / 2); // draw rotated image and store data.

      ctx.drawImage(image, safeArea / 2 - image.width * 0.5, safeArea / 2 - image.height * 0.5);
      var data = ctx.getImageData(0, 0, safeArea, safeArea); // set canvas width to final desired crop size - this will clear existing context

      canvas.width = pixelCrop.width;
      canvas.height = pixelCrop.height; // paste generated rotate image with correct offsets for x,y crop values.

      ctx.putImageData(data, Math.round(0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x), Math.round(0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y)); // As Base64 string

      return canvas.toDataURL('image/jpeg'); // As a blob

      /* return new Promise(resolve => {
         canvas.toBlob(file => {
           resolve(URL.createObjectURL(file))
         }, 'image/jpeg')
       })*/
    }
  }, {
    key: "showCroppedImage",
    value: function showCroppedImage(croppedAreaPixels, rotation) {
      try {
        var croppedImage = this.getCroppedImg(this.state.imageCrop.image, croppedAreaPixels, rotation);
        this.setState(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            imageCrop: _objectSpread(_objectSpread({}, prev.imageCrop), {}, {
              croppedImage: croppedImage,
              previewImage: croppedImage
            })
          });
        });
        console.log(this.state);
      } catch (e) {
        console.error(e);
      }
    }
  }]);

  return Product;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ }),

/***/ "./resources/js/src/views/products/Product/Products.js":
/*!*************************************************************!*\
  !*** ./resources/js/src/views/products/Product/Products.js ***!
  \*************************************************************/
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







var Products = /*#__PURE__*/function (_Component) {
  _inherits(Products, _Component);

  var _super = _createSuper(Products);

  function Products(props) {
    var _this;

    _classCallCheck(this, Products);

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

  _createClass(Products, [{
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Products"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
        to: _Utils__WEBPACK_IMPORTED_MODULE_6__["appRoutes"].productAdd,
        variant: "primary"
      }, "Add Product")))), this.state.pageAlert && this.state.pageAlert.message ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Alert_FlashAlert__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
      }, "Products List")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container-fluid"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Table"], {
        responsive: true,
        bordered: true,
        striped: true,
        id: "productDataTable",
        style: {
          width: '100%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "0"
      }, "No"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "1"
      }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "2"
      }, "HSN"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "3"
      }, "Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "4"
      }, "SubCategory"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "5"
      }, "Brand"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "6"
      }, "Unit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "7"
      }, "MRP"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "8"
      }, "Cost"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "9"
      }, "Selling Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "10"
      }, "Discount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "11"
      }, "GST"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "12"
      }, "Menu"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ConfirmDialog_ConfirmDialog__WEBPACK_IMPORTED_MODULE_3__["default"], {
        data: this.state.confirmDialog,
        handleClose: this.state.confirmDialog.handleClose,
        handleConfirm: this.state.confirmDialog.handleConfirm
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.location.state && this.props.location.state.pageAlert) {
        var history = createHistory();

        var _state = _objectSpread({}, history.location.state);

        this.setState({
          pageAlert: this.props.location.state.pageAlert
        });
        delete _state.pageAlert;
        history.replace(_objectSpread(_objectSpread({}, history.location), {}, {
          state: _state
        }));
      }

      this.handleDeleteProduct = this.handleDeleteProduct.bind(this);
      this.handleEditProduct = this.handleEditProduct.bind(this);
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
      var deleteFun = this.handleDeleteProduct;
      var editFun = this.handleEditProduct; //initialize datatable

      jquery__WEBPACK_IMPORTED_MODULE_11___default()(document).ready(function () {
        jquery__WEBPACK_IMPORTED_MODULE_11___default.a.ajaxSetup({
          headers: {
            'X-CSRF-TOKEN': csrf_token,
            'Authorization': 'Bearer ' + access_token
          }
        });
        jquery__WEBPACK_IMPORTED_MODULE_11___default()('#productDataTable').DataTable({
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
            "url": _Utils__WEBPACK_IMPORTED_MODULE_6__["apiRoutes"].productsList,
            "method": "post"
          },
          "columns": [{
            "data": "sno"
          }, {
            "data": "name"
          }, {
            "data": "hsn"
          }, {
            "data": "category"
          }, {
            "data": "sub_category"
          }, {
            "data": "brand"
          }, {
            "data": "unit"
          }, {
            "data": "mrp"
          }, {
            "data": "cost_price"
          }, {
            "data": "selling_price"
          }, {
            "data": "discount_percentage"
          }, {
            "data": "sales_gst"
          }, {
            "data": "menu",
            "class": "text-center"
          }],
          "createdRow": function createdRow(row, data, dataIndex) {
            jquery__WEBPACK_IMPORTED_MODULE_11___default()(row).attr('data-id', data.id);
          }
        });
        jquery__WEBPACK_IMPORTED_MODULE_11___default()('#productDataTable').on('click', '.btn-edit', function (e) {
          e.preventDefault();
          console.log(jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).attr('data-id'));
          editFun(jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).attr('data-id'));
        });
        jquery__WEBPACK_IMPORTED_MODULE_11___default()('#productDataTable').on('click', '.btn-delete', function (e) {
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
    key: "handleEditProduct",
    value: function handleEditProduct(id) {
      console.log(id, this.props);
      this.props.history.push('/product/' + id);
    }
  }, {
    key: "handleDeleteProduct",
    value: function handleDeleteProduct(id, url) {
      var handleClose = this.state.confirmDialog.handleClose;
      var alertBox = this.pageAlert;
      this.setState(function (prev) {
        return {
          confirmDialog: _objectSpread(_objectSpread({}, prev.confirmDialog), {}, {
            show: true,
            headerName: 'Confirm to Continue!',
            confirmMessage: 'Are you sure want to remove this product?',
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
                var dataTablePageInfo = jquery__WEBPACK_IMPORTED_MODULE_11___default()('#productDataTable').DataTable().page.info();
                jquery__WEBPACK_IMPORTED_MODULE_11___default()('#productDataTable').DataTable().page(dataTablePageInfo.page).draw(false);

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

  return Products;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Products);

/***/ }),

/***/ "./resources/js/src/views/products/SubCategory/SubCategories.js":
/*!**********************************************************************!*\
  !*** ./resources/js/src/views/products/SubCategory/SubCategories.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Header/Header */ "./resources/js/src/components/Header/Header.js");
/* harmony import */ var _components_SubCategory_SubCategoryModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/SubCategory/SubCategoryModal */ "./resources/js/src/components/SubCategory/SubCategoryModal.js");
/* harmony import */ var _components_ConfirmDialog_ConfirmDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ConfirmDialog/ConfirmDialog */ "./resources/js/src/components/ConfirmDialog/ConfirmDialog.js");
/* harmony import */ var _components_Alert_FlashAlert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Alert/FlashAlert */ "./resources/js/src/components/Alert/FlashAlert.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Utils */ "./resources/js/src/Utils.js");
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















var SubCategories = /*#__PURE__*/function (_Component) {
  _inherits(SubCategories, _Component);

  var _super = _createSuper(SubCategories);

  function SubCategories(props) {
    var _this;

    _classCallCheck(this, SubCategories);

    _this = _super.call(this, props);
    _this.state = {
      isLoggedIn: true,
      categoryModal: {
        show: false,
        headerName: 'Product Sub Category',
        categoryName: null,
        categoryId: null
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
    _this.openCategoryModal = _this.openCategoryModal.bind(_assertThisInitialized(_this));
    _this.handleCategoryClose = _this.handleCategoryClose.bind(_assertThisInitialized(_this));
    _this.pageAlert = _this.pageAlert.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SubCategories, [{
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Product Sub Categories"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        variant: "primary",
        onClick: function onClick() {
          _this2.openCategoryModal(null, null);
        }
      }, "Add Sub Category")))), this.state.pageAlert && this.state.pageAlert.message ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Alert_FlashAlert__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
      }, "Sub Categories List")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container-fluid"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Table"], {
        responsive: true,
        bordered: true,
        striped: true,
        id: "responsiveDataTable1",
        style: {
          width: '100%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "0"
      }, "No"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "1"
      }, "Sub Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "2"
      }, "Menu"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SubCategory_SubCategoryModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
        data: this.state.categoryModal,
        handleClose: this.handleCategoryClose,
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
      this.handleEditCategory = this.handleEditCategory.bind(this);
      this.handleDeleteCategory = this.handleDeleteCategory.bind(this);
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
      var editFun = this.handleEditCategory;
      var deleteFun = this.handleDeleteCategory; //initialize datatable

      jquery__WEBPACK_IMPORTED_MODULE_12___default()(document).ready(function () {
        jquery__WEBPACK_IMPORTED_MODULE_12___default.a.ajaxSetup({
          headers: {
            'X-CSRF-TOKEN': csrf_token,
            'Authorization': 'Bearer ' + access_token
          }
        });
        jquery__WEBPACK_IMPORTED_MODULE_12___default()('#responsiveDataTable1').DataTable({
          "responsive": true,
          "aLengthMenu": [[10, 20, 30, 50, 75, -1], [10, 20, 30, 50, 75, "All"]],
          "pageLength": 10,
          'columnDefs': [{
            'targets': [0, 2],
            'orderable': false
          }, {
            "searchable": false,
            "targets": [0, 2]
          }],
          "processing": true,
          "serverSide": true,
          "ajax": {
            "url": _Utils__WEBPACK_IMPORTED_MODULE_7__["apiRoutes"].productSubCategoriesList,
            "method": "post"
          },
          "columns": [{
            "data": "sno"
          }, {
            "data": "name"
          }, {
            "data": "menu",
            "class": "text-center"
          }],
          "createdRow": function createdRow(row, data, dataIndex) {
            jquery__WEBPACK_IMPORTED_MODULE_12___default()(row).attr('data-id', data.id);
            jquery__WEBPACK_IMPORTED_MODULE_12___default()(row).find('.btn-edit').on('click', function (e) {
              e.preventDefault();
              editFun(data.id, data.name);
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
    key: "openCategoryModal",
    value: function openCategoryModal(id, value) {
      this.setState({
        categoryModal: {
          show: true,
          headerName: 'Product Sub Category',
          categoryName: value ? value : "",
          categoryId: id ? id : ""
        }
      });
    }
  }, {
    key: "handleCategoryClose",
    value: function handleCategoryClose(status) {
      this.setState({
        categoryModal: {
          show: false,
          headerName: 'Product Sub Category',
          categoryName: "",
          categoryId: ""
        }
      });

      if (status) {
        var dataTablePageInfo = jquery__WEBPACK_IMPORTED_MODULE_12___default()('#responsiveDataTable1').DataTable().page.info();
        jquery__WEBPACK_IMPORTED_MODULE_12___default()('#responsiveDataTable1').DataTable().page(dataTablePageInfo.page).draw(false);
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
    key: "handleEditCategory",
    value: function handleEditCategory(id, value) {
      this.openCategoryModal(id, value);
    }
  }, {
    key: "handleDeleteCategory",
    value: function handleDeleteCategory(id, url) {
      var handleClose = this.state.confirmDialog.handleClose;
      var alertBox = this.pageAlert;
      this.setState(function (prev) {
        return {
          confirmDialog: _objectSpread(_objectSpread({}, prev.confirmDialog), {}, {
            show: true,
            headerName: 'Confirm to Continue!',
            confirmMessage: 'Are you sure want to remove this product sub category?',
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
                var dataTablePageInfo = jquery__WEBPACK_IMPORTED_MODULE_12___default()('#responsiveDataTable1').DataTable().page.info();
                jquery__WEBPACK_IMPORTED_MODULE_12___default()('#responsiveDataTable1').DataTable().page(dataTablePageInfo.page).draw(false);

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

  return SubCategories;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(SubCategories));

/***/ }),

/***/ "./resources/js/src/views/products/Unit/Units.js":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/products/Unit/Units.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Header/Header */ "./resources/js/src/components/Header/Header.js");
/* harmony import */ var _components_Unit_UnitModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Unit/UnitModal */ "./resources/js/src/components/Unit/UnitModal.js");
/* harmony import */ var _components_ConfirmDialog_ConfirmDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ConfirmDialog/ConfirmDialog */ "./resources/js/src/components/ConfirmDialog/ConfirmDialog.js");
/* harmony import */ var _components_Alert_FlashAlert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Alert/FlashAlert */ "./resources/js/src/components/Alert/FlashAlert.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Utils */ "./resources/js/src/Utils.js");
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















var Units = /*#__PURE__*/function (_Component) {
  _inherits(Units, _Component);

  var _super = _createSuper(Units);

  function Units(props) {
    var _this;

    _classCallCheck(this, Units);

    _this = _super.call(this, props);
    _this.state = {
      isLoggedIn: true,
      unitModal: {
        show: false,
        headerName: 'Product Unit',
        unitName: null,
        unitCode: null,
        unitId: null
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
    _this.openUnitModal = _this.openUnitModal.bind(_assertThisInitialized(_this));
    _this.handleUnitModalClose = _this.handleUnitModalClose.bind(_assertThisInitialized(_this));
    _this.pageAlert = _this.pageAlert.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Units, [{
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Product Units"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        variant: "primary",
        onClick: function onClick() {
          _this2.openUnitModal(null, null, null);
        }
      }, "Add Unit")))), this.state.pageAlert && this.state.pageAlert.message ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Alert_FlashAlert__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
      }, "Units List")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container-fluid"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Table"], {
        responsive: true,
        bordered: true,
        striped: true,
        id: "responsiveDataTable3",
        style: {
          width: '100%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "0"
      }, "No"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "1"
      }, "Unit Code"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "2"
      }, "Unit Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: "3"
      }, "Menu"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Unit_UnitModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
        data: this.state.unitModal,
        handleClose: this.handleUnitModalClose,
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
      this.handleEditUnit = this.handleEditUnit.bind(this);
      this.handleDeleteUnit = this.handleDeleteUnit.bind(this);
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
      var editFun = this.handleEditUnit;
      var deleteFun = this.handleDeleteUnit; //initialize datatable

      jquery__WEBPACK_IMPORTED_MODULE_12___default()(document).ready(function () {
        jquery__WEBPACK_IMPORTED_MODULE_12___default.a.ajaxSetup({
          headers: {
            'X-CSRF-TOKEN': csrf_token,
            'Authorization': 'Bearer ' + access_token
          }
        });
        jquery__WEBPACK_IMPORTED_MODULE_12___default()('#responsiveDataTable3').DataTable({
          "responsive": true,
          "aLengthMenu": [[10, 20, 30, 50, 75, -1], [10, 20, 30, 50, 75, "All"]],
          "pageLength": 10,
          'columnDefs': [{
            'targets': [0, 2],
            'orderable': false
          }, {
            "searchable": false,
            "targets": [0, 2]
          }],
          "processing": true,
          "serverSide": true,
          "ajax": {
            "url": _Utils__WEBPACK_IMPORTED_MODULE_7__["apiRoutes"].unitsList,
            "method": "post"
          },
          "columns": [{
            "data": "sno"
          }, {
            "data": "code"
          }, {
            "data": "name"
          }, {
            "data": "menu",
            "class": "text-center"
          }],
          "createdRow": function createdRow(row, data, dataIndex) {
            jquery__WEBPACK_IMPORTED_MODULE_12___default()(row).attr('data-id', data.id);
            jquery__WEBPACK_IMPORTED_MODULE_12___default()(row).find('.btn-edit').on('click', function (e) {
              e.preventDefault();
              editFun(data.id, data.name, data.code);
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
    key: "openUnitModal",
    value: function openUnitModal(id, name, code) {
      this.setState({
        unitModal: {
          show: true,
          headerName: 'Product Unit',
          unitName: name ? name : "",
          unitCode: code ? code : "",
          unitId: id ? id : ""
        }
      });
    }
  }, {
    key: "handleUnitModalClose",
    value: function handleUnitModalClose(status) {
      this.setState({
        unitModal: {
          show: false,
          headerName: 'Product Unit',
          unitName: "",
          unitCode: "",
          unitId: ""
        }
      });

      if (status) {
        var dataTablePageInfo = jquery__WEBPACK_IMPORTED_MODULE_12___default()('#responsiveDataTable3').DataTable().page.info();
        jquery__WEBPACK_IMPORTED_MODULE_12___default()('#responsiveDataTable3').DataTable().page(dataTablePageInfo.page).draw(false);
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
    key: "handleEditUnit",
    value: function handleEditUnit(id, name, code) {
      this.openUnitModal(id, name, code);
    }
  }, {
    key: "handleDeleteUnit",
    value: function handleDeleteUnit(id, url) {
      var handleClose = this.state.confirmDialog.handleClose;
      var alertBox = this.pageAlert;
      this.setState(function (prev) {
        return {
          confirmDialog: _objectSpread(_objectSpread({}, prev.confirmDialog), {}, {
            show: true,
            headerName: 'Confirm to Continue!',
            confirmMessage: 'Are you sure want to remove this product unit?',
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
                var dataTablePageInfo = jquery__WEBPACK_IMPORTED_MODULE_12___default()('#responsiveDataTable3').DataTable().page.info();
                jquery__WEBPACK_IMPORTED_MODULE_12___default()('#responsiveDataTable3').DataTable().page(dataTablePageInfo.page).draw(false);

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

  return Units;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Units));

/***/ }),

/***/ "./resources/js/src/views/products/index.js":
/*!**************************************************!*\
  !*** ./resources/js/src/views/products/index.js ***!
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
/* harmony import */ var _Category_Categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Category/Categories */ "./resources/js/src/views/products/Category/Categories.js");
/* harmony import */ var _SubCategory_SubCategories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SubCategory/SubCategories */ "./resources/js/src/views/products/SubCategory/SubCategories.js");
/* harmony import */ var _Brand_Brands__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Brand/Brands */ "./resources/js/src/views/products/Brand/Brands.js");
/* harmony import */ var _Unit_Units__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Unit/Units */ "./resources/js/src/views/products/Unit/Units.js");
/* harmony import */ var _Product_Products__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Product/Products */ "./resources/js/src/views/products/Product/Products.js");
/* harmony import */ var _Product_Product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Product/Product */ "./resources/js/src/views/products/Product/Product.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



 // For Validate Logged In.







var modules = {
  Categories: _Category_Categories__WEBPACK_IMPORTED_MODULE_3__["default"],
  SubCategories: _SubCategory_SubCategories__WEBPACK_IMPORTED_MODULE_4__["default"],
  Brands: _Brand_Brands__WEBPACK_IMPORTED_MODULE_5__["default"],
  Units: _Unit_Units__WEBPACK_IMPORTED_MODULE_6__["default"],
  Products: _Product_Products__WEBPACK_IMPORTED_MODULE_7__["default"],
  Product: _Product_Product__WEBPACK_IMPORTED_MODULE_8__["default"]
};

var ProductModule = function ProductModule(_ref) {
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

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(ProductModule));

/***/ })

}]);