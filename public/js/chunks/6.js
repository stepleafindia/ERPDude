(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/src/components/AutoSuggestion/autosuggestion.css":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/src/components/AutoSuggestion/autosuggestion.css ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".suggestion-container{\r\n    position: absolute;\r\n    background-color: #f0f0f0;\r\n    width: 100%;\r\n    top: 100%;\r\n    z-index: 100;\r\n    border:solid 1px #ddd;\r\n    max-height: 40vh;\r\n    overflow: auto;\r\n}\r\n.suggestion-container .suggestions{    \r\n    list-style: none;\r\n    overflow: auto;\r\n    padding: 5px;    \r\n}\r\n.suggestion-container .suggestions li{\r\n    padding:5px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n.suggestion-container .suggestions li.active{\r\n    background-color: #6495ed;\r\n    white-space: break-spaces;\r\n    color:#fff;    \r\n}\r\n.suggestion-container .suggestions li.empty{\r\n    text-align:center;\r\n    color:#848484;\r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/src/components/Footer/footer.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/src/components/Footer/footer.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-footer{\r\n    padding:20px;\r\n    background-color: #3b4045;\r\n    color: #fff;\r\n}\r\n.page-footer .muted-text{\r\n    color:#fff;\r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/src/components/SideNav/side-nav.css":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/src/components/SideNav/side-nav.css ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".side-navigation-header .nav-label{\r\n    font-size:14px;\r\n    padding:5px;\r\n}\r\n.side-navigation-header .nav-label label{\r\n    margin:0px 5px;\r\n}\r\n.nav-label .lable-icon{\r\n    padding:0px 5px;\r\n}\r\n\r\n.nav-cus-add, .nav-cus-edit{\r\n    border:solid 1px #dcdcdc;\r\n}\r\n.side-navigation-overlay{\r\n    background-color: #20211c6e;\r\n    display: none;\r\n    position: fixed;\r\n    z-index: 8;\r\n    top:0px;\r\n    left:0px;\r\n    width:100%;\r\n    height:100%;\r\n    transition: all 0.5s ease-in-out;\r\n}\r\n.side-navigation{\r\n    height: 100%;\r\n    width: 0;\r\n    position: fixed;\r\n    z-index: 10;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #fff;\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n    padding-top: 20px;\r\n    color:#000;\r\n}\r\n.side-navigation ul li a {\r\n    padding: 10px;\r\n    font-size: 1.1em;\r\n    display: block;\r\n    text-decoration: none;\r\n    color: #327604;\r\n    position: relative;\r\n    width: 200px;\r\n    overflow: hidden;\r\n}\r\n.side-navigation ul li a:hover{\r\n    background-color: #f5f5f5;\r\n}\r\n.side-navigation ul li a.active{\r\n    color:#c57500;\r\n}\r\n.side-navigation a.dropdown-toggle::after{\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 20px;\r\n    transform: translateY(-50%);\r\n}\r\n.side-navigation ul ul a {\r\n    font-size: 1em;\r\n    padding-left: 30px;    \r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/src/components/ThermalBill/thermal-bill.css":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/src/components/ThermalBill/thermal-bill.css ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#thermalBill{\r\n    visibility:hidden;\r\n    display:none;\r\n}  \r\n@media print { \r\n    @page{ \r\n        size: auto;  \r\n        margin: 0mm;\r\n        padding:0mm; \r\n    }   \r\n    body * {\r\n      visibility: hidden; \r\n    }\r\n    #thermalBill, #thermalBill * {\r\n      visibility: visible;\r\n      color:#000;     \r\n    }\r\n    #thermalBill {\r\n      display:block;\r\n      position: absolute;\r\n      left: 0;\r\n      top: 0;\r\n      width:100%;\r\n    } \r\n    .lg-font{\r\n        font-size:1.5rem;\r\n    }\r\n    .bill-page{\r\n        width:100%;\r\n        display:block;\r\n        font-size:1rem;\r\n    }\r\n    .page-header{\r\n        text-align:center;\r\n        font-size: 1.5rem;\r\n    }\r\n    .bill-address{\r\n        text-align:center;\r\n        max-width:50%;\r\n        margin: auto;\r\n    }\r\n    .bill-header{\r\n        border-bottom:dotted 1px #000;\r\n    }\r\n    .bill-body{\r\n        padding:10px;\r\n    }\r\n    .bill-summary-table{\r\n        width:100%;\r\n    }\r\n    .bill-summary-table tr,\r\n    .bill-summary-table td,\r\n    .bill-summary-table th{\r\n        border:none;    \r\n    }\r\n    .bill-summary-table thead th{\r\n        text-align:center;\r\n    }  \r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/src/components/Toast/app-toast.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/src/components/Toast/app-toast.css ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-toast.toast{\r\n    position: fixed;\r\n    top: 150px;\r\n    z-index: 1500;\r\n    left: 40%;    \r\n    max-width: 300px;\r\n    width: 100%;\r\n    font-weight: 600;\r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/src/views/sale/NewSale/new-sale.css":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/src/views/sale/NewSale/new-sale.css ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sale-bill-container{\r\n    font-size:14px;\r\n}\r\n.input-group .lbl-input-group{\r\n    background-color:#59b210;\r\n    padding:0px 5px;\r\n    color:#fff;\r\n    margin: 0px;\r\n    line-height: 2rem;\r\n}\r\n.bill-form input.qty-input{\r\n    max-width: 80px;\r\n}\r\n.bill-form input.disc-input{\r\n    max-width: 80px;\r\n}\r\n.bill-form input.sprice-input{\r\n    max-width: 90px;\r\n}\r\n.bill-entry-form-card .card-body{\r\n    padding:5px;\r\n}\r\n\r\n\r\n.bill-table-container{\r\n    min-height: 300px;\r\n    max-height: 300px;\r\n    overflow: auto scroll;    \r\n}\r\n.bill-table-container::-webkit-scrollbar {\r\n    width: 10px;\r\n    height:10px;\r\n}\r\n.bill-table-container::-webkit-scrollbar-track {\r\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n}\r\n.bill-table-container::-webkit-scrollbar-thumb {\r\n    background-color: #c1c1c1;   \r\n}  \r\n\r\n.bill-items-table{\r\n    width:100%;\r\n    max-width: 1060px;\r\n}\r\n.bill-items-table thead th{\r\n    padding: 5px 3px;\r\n    background-color: #4a9417;\r\n    color: #fff;\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    top:0px;   \r\n}\r\n.bill-items-table tbody td{\r\n    border:solid 1px #ececec;\r\n    max-width: 120px;\r\n    padding:2px;\r\n}\r\n.bill-items-table tbody tr:nth-child(even){\r\n    background-color: #fafcfb;\r\n}\r\n.bill-items-table tr td:first-child,\r\n.bill-items-table tr td:last-child{\r\n    text-align: center;\r\n    width: 40px;\r\n}\r\n.bill-items-table tr td:nth-child(4),\r\n.bill-items-table tr td:nth-child(5){\r\n    width: 60px;\r\n}\r\n.bill-items-table tr td:nth-child(6){\r\n    width: 100px;\r\n}\r\n.bill-items-table tr td:nth-child(7),\r\n.bill-items-table tr td:nth-child(8){\r\n    width: 120px;\r\n}\r\n.bill-items-table .item-gst-tax{\r\n    max-width:120px;\r\n}\r\n.bill-items-table .btn-item-remove{\r\n    color:#ff0000;\r\n    cursor:pointer;   \r\n}\r\n\r\n.bill-summary-card .card-header .card-title{\r\n    margin:0px;\r\n    font-weight:600;\r\n    font-size:14px;\r\n}\r\n.bill-summary-card .card-header{\r\n    background-image: linear-gradient(to bottom right,#486e2e,#5fcb06);\r\n    color: #fff;\r\n}\r\n.bill-summary-card .card-body{\r\n    padding:5px;\r\n}\r\n.summary-table{\r\n    width:100%;\r\n    height:325px;\r\n}\r\n.summary-table .select-igst-tax{\r\n    margin:5px 5px;\r\n}\r\n.summary-table th, .summary-table td{\r\n    border:solid 1px #ececec;\r\n    padding:5px 3px;\r\n}\r\n.summary-table .net-amount{\r\n    /*background-image: linear-gradient(to bottom right,#486e2e,#5fcb06);*/\r\n    background: -webkit-linear-gradient(-45deg, #4CAF50 0%, #8BC34A 100%);\r\n    color: #fff;\r\n    font-size:18px;\r\n    font-weight:500;\r\n}\r\n.total-payment-amt .label, .total-payment-amt .price{\r\n    display:block; \r\n    text-transform: uppercase;   \r\n    text-align:center;\r\n}\r\n\r\n.key-map-container{\r\n    padding:5px;\r\n    display:flex;\r\n    flex-wrap: wrap;\r\n}\r\n.key-map-container .key-map{\r\n    padding:5px;\r\n    background:#4a9417;\r\n    color:#fff;\r\n    display:inline-block;\r\n    text-align:center;\r\n    margin:5px;\r\n    min-height:100px;\r\n    min-width:100px;\r\n    font-size:18px;\r\n    cursor: pointer;\r\n}\r\n.key-map-container .key-map .key{\r\n    display:inline-block;\r\n    padding:5px;\r\n}\r\n.key-map-container .key-map .text{\r\n    display:inline-block;\r\n    width:100%;\r\n}\r\n\r\n/* CheckOut Modal */\r\n.modal-check-out .modal-header .modal-title{\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n}\r\n.modal-check-out .label-lg{\r\n    font-size: 20px;\r\n    font-weight: 600;  \r\n    color: #39863c;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n.modal-check-out .label-price{\r\n    font-size: 25px;\r\n    color: #000;\r\n    font-weight: 600;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./resources/js/src/components/AutoSuggestion/AutoSuggestion.js":
/*!**********************************************************************!*\
  !*** ./resources/js/src/components/AutoSuggestion/AutoSuggestion.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AutoSuggestion; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _autosuggestion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./autosuggestion.css */ "./resources/js/src/components/AutoSuggestion/autosuggestion.css");
/* harmony import */ var _autosuggestion_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_autosuggestion_css__WEBPACK_IMPORTED_MODULE_1__);



var suggestionLists = function suggestionLists(suggestions, activeIndex, handleSuggestion) {
  if (suggestions.length == 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "empty"
    }, "No Result Found");
  } else {
    return suggestions.map(function (value, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        onClick: function onClick() {
          return handleSuggestion(index);
        },
        key: index,
        className: activeIndex == index ? "active" : "",
        title: value.suggestion_label
      }, value.suggestion_label);
    });
  }
};

function AutoSuggestion(props) {
  var activeIndex = props.activeIndex ? props.activeIndex : 0;
  var suggestions = props.suggestions ? props.suggestions : [];
  var handleSuggestion = props.handleSetSuggestion ? props.handleSetSuggestion : function () {
    return console.log('not set!');
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "suggestion-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "suggestions"
  }, suggestionLists(suggestions, activeIndex, handleSuggestion)));
}

/***/ }),

/***/ "./resources/js/src/components/AutoSuggestion/autosuggestion.css":
/*!***********************************************************************!*\
  !*** ./resources/js/src/components/AutoSuggestion/autosuggestion.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/postcss-loader/src??ref--6-2!./autosuggestion.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/src/components/AutoSuggestion/autosuggestion.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/src/components/Customer/CustomerModal.js":
/*!***************************************************************!*\
  !*** ./resources/js/src/components/Customer/CustomerModal.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomerModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utils */ "./resources/js/src/Utils.js");



var hideLoader = true;

function handleSubmit(e, props) {
  e.preventDefault();
  var closeModal = props.onHide;
  var pageAlert = props.pageAlert;
  var name = document.getElementById('modalCustomerName').value;
  var customerId = document.getElementById('modalCustomerId').value;

  if (name != "") {
    var formData = new FormData(e.target);
    var formUrl = customerId ? _Utils__WEBPACK_IMPORTED_MODULE_2__["apiRoutes"].customer + '/' + customerId : _Utils__WEBPACK_IMPORTED_MODULE_2__["apiRoutes"].customer;
    var request = {
      method: 'post',
      url: formUrl,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };
    hideLoader = false;
    document.getElementById('modalCustomerName').classList.remove("is-invalid");
    document.getElementById('modalCustomerName').nextSibling.innerText = '';
    axios(request).then(function (response) {
      return response;
    }).then(function (json) {
      hideLoader = true;

      if (json.data.validation_error) {
        var error = json.data.validation_error;

        for (var item in error) {
          var element = document.querySelector('#customerModalForm *[name="' + item + '"]');
          element.classList.add("is-invalid");
          element.nextSibling.innerText = error[item];
        }
      } else if (json.data.success) {
        closeModal();
        pageAlert({
          type: 1,
          header: "Success!",
          message: json.data.message
        });
      } else {
        document.getElementById('modalCustomerName').classList.add("is-invalid");
        document.getElementById('modalCustomerName').nextSibling.innerText = json.data.message;
      }
    })["catch"](function (error) {
      hideLoader = true;
      console.log(error);
    });
  } else {
    document.getElementById('modalCustomerName').classList.add("is-invalid");
    document.getElementById('modalCustomerName').nextSibling.innerText = 'Name is required!';
  }
}

function handleNumerics(e) {
  if (/[^0-9 ]/g.test(event.key)) {
    e.preventDefault();
  }
}

function handleClose() {
  var errors = document.querySelectorAll('#customerModalForm .is-invalid');

  for (i = 0; i < errors.length; i++) {
    errors[i].classList.remove("is-invalid");
    errors[i].nextSibling.innerText = "";
  }
}

function CustomerModal(props) {
  var inputs = props.data.inputs;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    show: props.data.show,
    onHide: function onHide() {
      handleClose();
      props.onHide();
    },
    onShow: function onShow() {
      document.getElementById('modalCustomerName').focus();
    },
    backdrop: "static",
    size: "lg",
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Title, null, props.data.headerName ? props.data.headerName : "Customer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    id: "customerModalForm",
    onSubmit: function onSubmit(e) {
      handleSubmit(e, props);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "hidden",
    name: "id",
    value: inputs.customer_id ? inputs.customer_id : "",
    id: "modalCustomerId"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "modalCustomerName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "Customer / Company Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    placeholder: "Customer / Company Name",
    value: inputs.name ? inputs.name : "",
    onChange: function onChange(e) {
      return props.updateInputs(e);
    },
    name: "name"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
    type: "invalid"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "modalMobileNo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "Mobile No"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    placeholder: "Mobile No",
    value: inputs.mobile_number ? inputs.mobile_number : "",
    name: "mobile_number",
    onChange: function onChange(e) {
      return props.updateInputs(e);
    },
    onKeyPress: handleNumerics
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
    type: "invalid"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "modalContactNo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "Contact No"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    placeholder: "Contact No",
    value: inputs.contact_number ? inputs.contact_number : "",
    name: "contact_number",
    onChange: function onChange(e) {
      return props.updateInputs(e);
    },
    onKeyPress: handleNumerics
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
    type: "invalid"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "modalAddress"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    placeholder: "Address",
    value: inputs.address ? inputs.address : "",
    name: "address",
    onChange: function onChange(e) {
      return props.updateInputs(e);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
    type: "invalid"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "modalCity"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "City"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    placeholder: "City",
    value: inputs.city ? inputs.city : "",
    name: "city",
    onChange: function onChange(e) {
      return props.updateInputs(e);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
    type: "invalid"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "modalState"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "State"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "select",
    value: inputs.state_id ? inputs.state_id : "",
    onChange: function onChange(e) {
      return props.updateInputs(e);
    },
    name: "state_id"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "Choose..."), props.stateLists.map(function (value, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: value.id,
      key: index
    }, value.name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
    type: "invalid"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "modalCountry"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "Country"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "select",
    value: inputs.country_id ? inputs.country_id : "",
    onChange: function onChange(e) {
      return props.updateInputs(e);
    },
    name: "country_id"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "Choose..."), props.countryLists.map(function (value, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: value.id,
      key: index
    }, value.name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
    type: "invalid"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "modalEmail"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    placeholder: "Email",
    value: inputs.email ? inputs.email : "",
    name: "email",
    onChange: function onChange(e) {
      return props.updateInputs(e);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
    type: "invalid"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "modalGSTIN"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "GSTIN"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    placeholder: "GSTIN",
    value: inputs.gstin ? inputs.gstin : "",
    name: "gstin",
    onChange: function onChange(e) {
      return props.updateInputs(e);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
    type: "invalid"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    type: "submit"
  }, "Submit "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "secondary",
    onClick: function onClick() {
      props.onHide();
    },
    className: "close-modal-btn"
  }, "Close")))));
}

/***/ }),

/***/ "./resources/js/src/components/Footer/Footer.js":
/*!******************************************************!*\
  !*** ./resources/js/src/components/Footer/Footer.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utils */ "./resources/js/src/Utils.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.css */ "./resources/js/src/components/Footer/footer.css");
/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_footer_css__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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







var Footer = /*#__PURE__*/function (_Component) {
  _inherits(Footer, _Component);

  var _super = _createSuper(Footer);

  function Footer(props) {
    var _this;

    _classCallCheck(this, Footer);

    _this = _super.call(this, props);
    _this.state = {
      user: props.userData,
      isLoggedIn: props.userIsLoggedIn
    };
    return _this;
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
        className: "page-footer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "muted-text"
      }, " 2020 \xA9 CodeSense Soft Solutions Private Limited. Retail POS - Customer Care : +91 95244 76114 | +91 99443 13212 ")));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Footer));

/***/ }),

/***/ "./resources/js/src/components/Footer/footer.css":
/*!*******************************************************!*\
  !*** ./resources/js/src/components/Footer/footer.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/postcss-loader/src??ref--6-2!./footer.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/src/components/Footer/footer.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/src/components/SideNav/SideNav.js":
/*!********************************************************!*\
  !*** ./resources/js/src/components/SideNav/SideNav.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utils */ "./resources/js/src/Utils.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _side_nav_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./side-nav.css */ "./resources/js/src/components/SideNav/side-nav.css");
/* harmony import */ var _side_nav_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_side_nav_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_autosuggest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-autosuggest */ "./node_modules/react-autosuggest/dist/index.js");
/* harmony import */ var react_autosuggest__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_autosuggest__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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






 // Imagine you have a list of languages that you'd like to autosuggest.

var languages = [{
  name: 'C',
  year: 1972
}, {
  name: 'Elm',
  year: 2012
}]; // Teach Autosuggest how to calculate suggestions for any given input value.

var getSuggestions = function getSuggestions(value) {
  var inputValue = value.trim().toLowerCase();
  var inputLength = inputValue.length;
  return inputLength === 0 ? [] : languages.filter(function (lang) {
    return lang.name.toLowerCase().slice(0, inputLength) === inputValue;
  });
}; // When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.


var getSuggestionValue = function getSuggestionValue(suggestion) {
  return suggestion.name;
}; // Use your imagination to render suggestions.


var renderSuggestion = function renderSuggestion(suggestion) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, suggestion.name);
};

var SideNav = /*#__PURE__*/function (_Component) {
  _inherits(SideNav, _Component);

  var _super = _createSuper(SideNav);

  function SideNav(props) {
    var _this;

    _classCallCheck(this, SideNav);

    _this = _super.call(this, props);
    _this.state = {
      user: props.userData,
      isLoggedIn: props.userIsLoggedIn,
      stock: null,
      quantity: 120,
      value: '',
      suggestions: []
    };
    _this.logOut = _Utils__WEBPACK_IMPORTED_MODULE_2__["logOut"].bind(_assertThisInitialized(_this));
    _this.onChangeCustomer = _this.onChangeCustomer.bind(_assertThisInitialized(_this));
    _this.onSuggestionsFetchRequested = _this.onSuggestionsFetchRequested.bind(_assertThisInitialized(_this));
    _this.onSuggestionsClearRequested = _this.onSuggestionsClearRequested.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SideNav, [{
    key: "onChangeCustomer",
    value: function onChangeCustomer(event, _ref) {
      var newValue = _ref.newValue;
      this.setState({
        value: newValue
      });
    }
  }, {
    key: "onSuggestionsFetchRequested",
    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    value: function onSuggestionsFetchRequested(_ref2) {
      var value = _ref2.value;
      this.setState({
        suggestions: getSuggestions(value)
      });
    }
  }, {
    key: "onSuggestionsClearRequested",
    // Autosuggest will call this function every time you need to clear suggestions.
    value: function onSuggestionsClearRequested() {
      this.setState({
        suggestions: []
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          value = _this$state.value,
          suggestions = _this$state.suggestions; // Autosuggest will pass through all these props to the input.

      var inputProps = {
        placeholder: 'Type a programming language',
        value: value,
        onChange: this.onChangeCustomer
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"], {
        id: "sideNavHeader",
        className: "side-navigation-header bg-theme"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        fluid: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
        className: "w-100"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        md: 2
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          fontSize: "24px",
          cursor: "pointer"
        },
        onClick: this.showNavigation
      }, "\u2630")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        md: 3
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "nav-label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "lable-icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-layer-group"
      })), "Stock :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, this.state.stock)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        md: 3
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "nav-label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "lable-icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-shopping-cart"
      })), "Qty :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, this.state.quantity)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        md: 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_autosuggest__WEBPACK_IMPORTED_MODULE_5___default.a, {
        suggestions: suggestions,
        onSuggestionsFetchRequested: this.onSuggestionsFetchRequested,
        onSuggestionsClearRequested: this.onSuggestionsClearRequested,
        getSuggestionValue: getSuggestionValue,
        renderSuggestion: renderSuggestion,
        inputProps: inputProps
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"].Append, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        className: "nav-cus-add",
        onClick: this.props.handleCustomerCommand
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-user-plus"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        className: "nav-cus-edit"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-user-edit"
      })))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "side-navigation-overlay",
        onClick: this.closeNavigation
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"], {
        className: "side-navigation",
        id: "sideNavMenu",
        activeKey: this.props.location.pathname
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-unstyled components"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "active"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
        as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
        to: _Utils__WEBPACK_IMPORTED_MODULE_2__["appRoutes"].dashboard,
        eventKey: _Utils__WEBPACK_IMPORTED_MODULE_2__["appRoutes"].dashboard
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "nav-link-icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-home"
      })), "Dashboard")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#productsSubmenu",
        "data-toggle": "collapse",
        "aria-expanded": "false",
        className: "dropdown-toggle"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "nav-link-icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fab fa-product-hunt"
      })), "Masters"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "collapse list-unstyled",
        id: "productsSubmenu"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
        as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
        to: _Utils__WEBPACK_IMPORTED_MODULE_2__["appRoutes"].products,
        eventKey: _Utils__WEBPACK_IMPORTED_MODULE_2__["appRoutes"].products
      }, "Products")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
        as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
        to: _Utils__WEBPACK_IMPORTED_MODULE_2__["appRoutes"].productCategories,
        eventKey: _Utils__WEBPACK_IMPORTED_MODULE_2__["appRoutes"].productCategories
      }, "Category")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
        as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
        to: _Utils__WEBPACK_IMPORTED_MODULE_2__["appRoutes"].productSubCategories,
        eventKey: _Utils__WEBPACK_IMPORTED_MODULE_2__["appRoutes"].productSubCategories
      }, "SubCategory")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
        as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
        to: _Utils__WEBPACK_IMPORTED_MODULE_2__["appRoutes"].productBrands,
        eventKey: _Utils__WEBPACK_IMPORTED_MODULE_2__["appRoutes"].productBrands
      }, "Brands")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
        as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
        to: _Utils__WEBPACK_IMPORTED_MODULE_2__["appRoutes"].productUnits,
        eventKey: _Utils__WEBPACK_IMPORTED_MODULE_2__["appRoutes"].productUnits
      }, "Units")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
        as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
        to: _Utils__WEBPACK_IMPORTED_MODULE_2__["appRoutes"].gstTaxes,
        eventKey: _Utils__WEBPACK_IMPORTED_MODULE_2__["appRoutes"].gstTaxes
      }, "Tax")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#contactsSubmenu",
        "data-toggle": "collapse",
        "aria-expanded": "false",
        className: "dropdown-toggle"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "nav-link-icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-address-book"
      })), "Contacts"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "collapse list-unstyled",
        id: "contactsSubmenu"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
        as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
        to: "#"
      }, "Suppliers")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
        as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
        to: _Utils__WEBPACK_IMPORTED_MODULE_2__["appRoutes"].customers,
        eventKey: _Utils__WEBPACK_IMPORTED_MODULE_2__["appRoutes"].customers
      }, "Customers")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#salesSubmenu",
        "data-toggle": "collapse",
        "aria-expanded": "false",
        className: "dropdown-toggle"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "nav-link-icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-balance-scale-right"
      })), "Sales"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "collapse list-unstyled",
        id: "salesSubmenu"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
        as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
        to: "#"
      }, "Sales")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
        to: _Utils__WEBPACK_IMPORTED_MODULE_2__["appRoutes"].newSale,
        as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
        eventKey: _Utils__WEBPACK_IMPORTED_MODULE_2__["appRoutes"].newSale
      }, "New Sale")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
        as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
        to: "#"
      }, "Sales Return")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
        as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
        to: "#"
      }, "Sales Day End")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#userSubmenu",
        "data-toggle": "collapse",
        "aria-expanded": "false",
        className: "dropdown-toggle"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "nav-link-icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-user-circle"
      })), "User"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "collapse list-unstyled",
        id: "userSubmenu"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
        to: "#"
      }, "Profile")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
        onClick: this.logOut,
        to: "#"
      }, "Logout")))))));
    }
  }, {
    key: "showNavigation",
    value: function showNavigation() {
      document.getElementById('sideNavMenu').style.width = "200px";
      document.getElementById('sideNavMenu').previousSibling.style.display = "block";
    }
  }, {
    key: "closeNavigation",
    value: function closeNavigation() {
      document.getElementById('sideNavMenu').style.width = "0";
      document.getElementById('sideNavMenu').previousSibling.style.display = "none";
    }
  }]);

  return SideNav;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(SideNav));

/***/ }),

/***/ "./resources/js/src/components/SideNav/side-nav.css":
/*!**********************************************************!*\
  !*** ./resources/js/src/components/SideNav/side-nav.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/postcss-loader/src??ref--6-2!./side-nav.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/src/components/SideNav/side-nav.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/src/components/ThermalBill/ThermalBill.js":
/*!****************************************************************!*\
  !*** ./resources/js/src/components/ThermalBill/ThermalBill.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ThermalBill; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _thermal_bill_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thermal-bill.css */ "./resources/js/src/components/ThermalBill/thermal-bill.css");
/* harmony import */ var _thermal_bill_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_thermal_bill_css__WEBPACK_IMPORTED_MODULE_1__);


function ThermalBill(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bill-page",
    id: "thermalBill"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bill-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "page-header"
  }, props.data.headerName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "bill-address"
  }, props.data.address)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bill-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "bill-summary-table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    colSpan: "2"
  }, "Summary"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Gross Amount :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.data.totalGrossValue)), props.data.totalDiscount ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Discount :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.data.totalDiscount)) : null, props.data.gstType == 'igst' && props.data.totalIGST ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "IGST :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.data.totalIGST)) : null, props.data.gstType == 'sgst' && props.data.totalCGST ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "CGST :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.data.totalCGST)) : null, props.data.gstType == 'sgst' && props.data.totalSGST ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "SGST :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.data.totalSGST)) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    className: "lg-font"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Net Amount :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, props.data.totalNetAmount))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    className: "lg-font"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Round off :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, props.data.roundOff))), props.data.gstType == 'sgst' && props.data.paidAmount ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Paid Amount :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, props.data.paidAmount))) : null, props.data.gstType == 'sgst' && props.data.remainingBalance ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Remaining Balance :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, props.data.remainingBalance))) : null))));
}

/***/ }),

/***/ "./resources/js/src/components/ThermalBill/thermal-bill.css":
/*!******************************************************************!*\
  !*** ./resources/js/src/components/ThermalBill/thermal-bill.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/postcss-loader/src??ref--6-2!./thermal-bill.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/src/components/ThermalBill/thermal-bill.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/src/components/Toast/AppToast.js":
/*!*******************************************************!*\
  !*** ./resources/js/src/components/Toast/AppToast.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppToast; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _app_toast_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-toast.css */ "./resources/js/src/components/Toast/app-toast.css");
/* harmony import */ var _app_toast_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_toast_css__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function AppToast(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  props.show ? Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true) : Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  var header = "";
  var style = props.style ? props.style : {};

  if (props.data.type == 0) {
    style.backgroundColor = '#ff5b4f';
    style.color = '#fff';
    header = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "text-danger mx-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-exclamation-circle"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      className: "mr-auto text-danger"
    }, props.data.header));
  } else if (props.data.type == 1) {
    style.backgroundColor = '#4CAF50';
    style.color = '#fff';
    header = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "text-success mx-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-check-circle"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      className: "mr-auto text-success"
    }, props.data.header));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Toast"], {
    className: "app-toast",
    style: style,
    onClose: function onClose() {
      props.onClose();
    },
    show: props.show,
    delay: props.duration ? props.duration : 3000,
    autohide: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Toast"].Header, null, header), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Toast"].Body, null, props.data.message));
}

/***/ }),

/***/ "./resources/js/src/components/Toast/app-toast.css":
/*!*********************************************************!*\
  !*** ./resources/js/src/components/Toast/app-toast.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/postcss-loader/src??ref--6-2!./app-toast.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/src/components/Toast/app-toast.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/src/views/sale/NewSale/NewSale.js":
/*!********************************************************!*\
  !*** ./resources/js/src/views/sale/NewSale/NewSale.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_SideNav_SideNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/SideNav/SideNav */ "./resources/js/src/components/SideNav/SideNav.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Footer/Footer */ "./resources/js/src/components/Footer/Footer.js");
/* harmony import */ var _components_Loader_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Loader/Loader */ "./resources/js/src/components/Loader/Loader.js");
/* harmony import */ var _components_Customer_CustomerModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Customer/CustomerModal */ "./resources/js/src/components/Customer/CustomerModal.js");
/* harmony import */ var _components_Toast_AppToast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Toast/AppToast */ "./resources/js/src/components/Toast/AppToast.js");
/* harmony import */ var _components_AutoSuggestion_AutoSuggestion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/AutoSuggestion/AutoSuggestion */ "./resources/js/src/components/AutoSuggestion/AutoSuggestion.js");
/* harmony import */ var _components_ThermalBill_ThermalBill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ThermalBill/ThermalBill */ "./resources/js/src/components/ThermalBill/ThermalBill.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _new_sale_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./new-sale.css */ "./resources/js/src/views/sale/NewSale/new-sale.css");
/* harmony import */ var _new_sale_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_new_sale_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../Utils */ "./resources/js/src/Utils.js");
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














var NewSale = /*#__PURE__*/function (_Component) {
  _inherits(NewSale, _Component);

  var _super = _createSuper(NewSale);

  function NewSale(props) {
    var _this;

    _classCallCheck(this, NewSale);

    //this.getInitialState=this.getInitialState.bing(this);
    _this = _super.call(this, props);
    _this.state = _this.getInitialState();
    _this.newSale = _Utils__WEBPACK_IMPORTED_MODULE_11__["newSale"].bind(_assertThisInitialized(_this));
    _this.updateSummary = _this.updateSummary.bind(_assertThisInitialized(_this));
    _this.searchProducts = _Utils__WEBPACK_IMPORTED_MODULE_11__["searchProducts"].bind(_assertThisInitialized(_this));
    _this.pageAlert = _this.pageAlert.bind(_assertThisInitialized(_this));
    _this.getBarcodeSuggestions = _this.getBarcodeSuggestions.bind(_assertThisInitialized(_this));
    _this.getProductSuggestions = _this.getProductSuggestions.bind(_assertThisInitialized(_this));
    _this.billFormInputChange = _this.billFormInputChange.bind(_assertThisInitialized(_this));
    _this.completeBillFormSugesstion = _this.completeBillFormSugesstion.bind(_assertThisInitialized(_this));
    _this.handleKeyPressFormInput = _this.handleKeyPressFormInput.bind(_assertThisInitialized(_this));
    _this.handleBlurFormInput = _this.handleBlurFormInput.bind(_assertThisInitialized(_this));
    _this.removeBillItem = _this.removeBillItem.bind(_assertThisInitialized(_this));
    _this.changeTaxMode = _this.changeTaxMode.bind(_assertThisInitialized(_this));
    _this.changeBillTable = _this.changeBillTable.bind(_assertThisInitialized(_this));
    _this.handleTableColumnChange = _this.handleTableColumnChange.bind(_assertThisInitialized(_this));
    _this.updateBillItemGst = _this.updateBillItemGst.bind(_assertThisInitialized(_this));
    _this.handleKeyBoardShortCuts = _this.handleKeyBoardShortCuts.bind(_assertThisInitialized(_this));
    _this.handleKeyUpEvent = _this.handleKeyUpEvent.bind(_assertThisInitialized(_this));
    _this.handleCheckOutModelClose = _this.handleCheckOutModelClose.bind(_assertThisInitialized(_this));
    _this.setCheckOutPaymentOption = _this.setCheckOutPaymentOption.bind(_assertThisInitialized(_this));
    _this.changeCheckOutModal = _this.changeCheckOutModal.bind(_assertThisInitialized(_this));
    _this.closeAppToast = _this.closeAppToast.bind(_assertThisInitialized(_this));
    _this.proceedPrint = _this.proceedPrint.bind(_assertThisInitialized(_this));
    _this.handlePrintCommand = _this.handlePrintCommand.bind(_assertThisInitialized(_this));
    _this.handleCustomerCommand = _this.handleCustomerCommand.bind(_assertThisInitialized(_this));
    _this.updateCustomerModalInputs = _this.updateCustomerModalInputs.bind(_assertThisInitialized(_this));
    _this.keysPressed = [];
    _this.totalGrossValue = 0;
    _this.totalDiscount = 0;
    _this.totalSGST = 0;
    _this.totalCGST = 0;
    _this.totalIGST = 0;
    _this.totalNetAmount = 0;
    _this.roundOff = 0;

    Number.prototype.round = function () {
      return Math.round(this);
    };

    return _this;
  }

  _createClass(NewSale, [{
    key: "getInitialState",
    value: function getInitialState() {
      return {
        isLoggedIn: true,
        user: [],
        error: '',
        loader: true,
        gstTaxList: [],
        states: [],
        countries: [],
        billForm: {},
        billItems: [],
        summary: {
          totalGrossValue: 0,
          totalDiscount: 0,
          totalSGST: 0,
          totalCGST: 0,
          totalIGST: 0,
          totalNetAmount: 0,
          roundOff: 0
        },
        currentTaxMode: 'sgst',
        visibleBarcodeSuggestion: false,
        visibleProductSuggestion: false,
        productSuggestIndex: 0,
        productSuggestions: [],
        currentBillProduct: null,
        customer: null,
        checkoutModal: {
          show: false,
          inputs: {
            payment_option: "Cash"
          },
          onHide: this.handleCheckOutModelClose
        },
        customerModal: {
          show: false,
          inputs: {}
        },
        appToast: {
          show: false,
          data: {}
        }
      };
    }
  }, {
    key: "updateSummary",
    value: function updateSummary(previous) {
      var billItems = this.state.billItems;
      var summary = {
        totalGrossValue: 0,
        totalDiscount: 0,
        totalSGST: 0,
        totalCGST: 0,
        totalIGST: 0,
        totalNetAmount: 0,
        roundOff: 0
      };

      for (var i = 0; i < billItems.length; i++) {
        var quantity = parseFloat(billItems[i].quantity);
        var selling_price = parseFloat(billItems[i].selling_price);
        var grossAmount = quantity * selling_price;
        grossAmount = Math.ceil(grossAmount * 100) / 100;
        summary.totalGrossValue = summary.totalGrossValue + grossAmount;
        var discount_percentage = billItems[i].discount_percentage ? parseFloat(billItems[i].discount_percentage) : 0;
        var discount = grossAmount * (discount_percentage / 100);
        discount = Math.ceil(discount * 100) / 100;
        summary.totalDiscount = summary.totalDiscount + discount;
        var unitAmount = grossAmount - discount;
        var igst = billItems[i].igst ? parseFloat(billItems[i].igst) : 0;
        var igstValue = unitAmount * (igst / 100);
        igstValue = Math.ceil(igstValue * 100) / 100;
        summary.totalIGST = summary.totalIGST + igstValue;
        var sgst = billItems[i].sgst ? parseFloat(billItems[i].sgst) : 0;
        var sgstValue = unitAmount * (sgst / 100);
        sgstValue = Math.ceil(sgstValue * 100) / 100;
        summary.totalSGST = summary.totalSGST + sgstValue;
        var cgst = billItems[i].cgst ? parseFloat(billItems[i].cgst) : 0;
        var cgstValue = unitAmount * (cgst / 100);
        cgstValue = Math.ceil(cgstValue * 100) / 100;
        summary.totalCGST = summary.totalCGST + cgstValue;
        var gstAmount = 0;

        if (this.state.currentTaxMode == "sgst") {
          gstAmount = sgstValue + cgstValue;
        } else {
          gstAmount = igstValue;
        }

        var netAmount = unitAmount + gstAmount;
        summary.totalNetAmount = summary.totalNetAmount + netAmount;

        if (i == billItems.length - 1) {
          summary.roundOff = summary.totalNetAmount.round();
        }
      }

      this.setState(_objectSpread(_objectSpread({}, previous), {}, {
        summary: summary
      }));
    }
  }, {
    key: "changeTaxMode",
    value: function changeTaxMode(e) {
      var mode = e.target.checked ? 'igst' : 'sgst';
      this.setState(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          currentTaxMode: mode
        });
      });
    }
  }, {
    key: "changeCheckOutModal",
    value: function changeCheckOutModal(e) {
      var checkoutModal = this.state.checkoutModal;

      if (e.target.name == "paid_by_cash") {
        checkoutModal.inputs['remain_balance'] = parseFloat(this.roundOff) - parseFloat(e.target.value);
      }

      checkoutModal.inputs[e.target.name] = e.target.value;
      this.setState(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          checkoutModal: checkoutModal
        });
      });
    }
  }, {
    key: "handleTableColumnChange",
    value: function handleTableColumnChange(e, index, column) {
      var billItems = this.state.billItems;
      var value = parseFloat(e.target.innerText);
      billItems[index][column] = value;
      /*this.setState(prev=>{
        return {
          ...prev,
          billItems:billItems
        }
      });*/

      this.updateSummary(_objectSpread(_objectSpread({}, this.state), {}, {
        billItems: billItems
      }));
    }
  }, {
    key: "updateBillItemGst",
    value: function updateBillItemGst(e, index) {
      var billItems = this.state.billItems;
      var selectedIndex = e.target.options.selectedIndex;

      if (billItems[index]) {
        billItems[index]['sales_gst_tax_id'] = e.target.value != "" ? e.target.value : "";
        billItems[index]['sgst'] = e.target.value != "" ? e.target.options[selectedIndex].getAttribute('data-sgst') : "";
        billItems[index]['cgst'] = e.target.value != "" ? e.target.options[selectedIndex].getAttribute('data-cgst') : "";
        billItems[index]['igst'] = e.target.value != "" ? e.target.options[selectedIndex].getAttribute('data-igst') : "";
      }
      /*this.setState(prev=>{
        return {...prev,billItems:billItems}
      });  */


      this.updateSummary(_objectSpread(_objectSpread({}, this.state), {}, {
        billItems: billItems
      }));
    }
  }, {
    key: "changeBillTable",
    value: function changeBillTable(e, index, column) {
      var event = window.event ? window.event : e;

      if (event.keyCode === 13) {
        e.target.blur();
      }

      if (/[^0-9.]/g.test(event.key)) {
        e.preventDefault();
        return false;
      } else if (e.target.innerText.replace(/[^.]/g, "").length > 0 && event.key == ".") {
        e.preventDefault();
        return false;
      }
    }
  }, {
    key: "closeAppToast",
    value: function closeAppToast() {
      this.setState(function (prev) {
        var appToast = {
          show: false,
          data: {}
        };
        return _objectSpread(_objectSpread({}, prev), {}, {
          appToast: appToast
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var totalGrossValue = 0;
      var totalDiscount = 0;
      var totalIGST = 0;
      var totalCGST = 0;
      var totalSGST = 0;
      var totalNetAmount = 0;
      var roundOff = 0;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.state.loader ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_4__["default"], null) : "", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SideNav_SideNav__WEBPACK_IMPORTED_MODULE_2__["default"], {
        userData: this.state.user,
        userIsLoggedIn: this.state.isLoggedIn,
        handleCustomerCommand: this.handleCustomerCommand
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sale-bill-container my-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Container"], {
        fluid: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        className: "no-gutters"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        md: 9,
        lg: 10
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Toast_AppToast__WEBPACK_IMPORTED_MODULE_6__["default"], {
        onClose: this.closeAppToast,
        show: this.state.appToast.show,
        data: this.state.appToast.data,
        duration: 3000
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Card"], {
        className: "bill-entry-form-card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        className: "bill-form flex-wrap justify-content-center",
        id: "billEntryForm",
        inline: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroup"], {
        className: "my-2 mr-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroup"].Prepend, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "lbl-input-group rounded-left"
      }, "Barcode")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["FormControl"], {
        id: "billFormBarcode",
        placeholder: "Barcode",
        name: "barcode",
        value: this.state.billForm.barcode ? this.state.billForm.barcode : "",
        autoComplete: "off",
        onKeyDown: this.getBarcodeSuggestions,
        onChange: this.billFormInputChange
      }), this.state.visibleBarcodeSuggestion ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AutoSuggestion_AutoSuggestion__WEBPACK_IMPORTED_MODULE_7__["default"], {
        activeIndex: this.state.productSuggestIndex,
        suggestions: this.state.productSuggestions,
        handleSetSuggestion: this.completeBillFormSugesstion
      }) : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroup"], {
        className: "my-2 mr-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroup"].Prepend, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "lbl-input-group rounded-left"
      }, "Product")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["FormControl"], {
        id: "billFormProduct",
        placeholder: "Product Name",
        name: "product_name",
        value: this.state.billForm.product_name ? this.state.billForm.product_name : "",
        autoComplete: "off",
        onKeyDown: this.getProductSuggestions,
        onChange: this.billFormInputChange
      }), this.state.visibleProductSuggestion ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AutoSuggestion_AutoSuggestion__WEBPACK_IMPORTED_MODULE_7__["default"], {
        activeIndex: this.state.productSuggestIndex,
        suggestions: this.state.productSuggestions,
        handleSetSuggestion: this.completeBillFormSugesstion
      }) : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroup"], {
        className: "my-2 mr-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroup"].Prepend, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "lbl-input-group rounded-left"
      }, "Qty")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["FormControl"], {
        id: "billFormQuantity",
        className: "qty-input",
        placeholder: "Quantity",
        name: "quantity",
        value: this.state.billForm.quantity ? this.state.billForm.quantity : "",
        onKeyPress: this.handleKeyPressFormInput,
        onChange: this.billFormInputChange,
        onBlur: this.handleBlurFormInput
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroup"], {
        className: "my-2 mr-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroup"].Prepend, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "lbl-input-group rounded-left"
      }, "Dis(%).")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["FormControl"], {
        id: "billFormDiscount",
        className: "disc-input",
        placeholder: "Discount",
        name: "discount",
        value: this.state.billForm.discount ? this.state.billForm.discount : "",
        onKeyPress: this.handleKeyPressFormInput,
        onChange: this.billFormInputChange,
        onBlur: this.handleBlurFormInput
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroup"], {
        className: "my-2 mr-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroup"].Prepend, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "lbl-input-group rounded-left"
      }, "S.Price")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["FormControl"], {
        id: "billFormSellingPrice",
        className: "sprice-input",
        placeholder: "S.Price",
        name: "selling_price",
        value: this.state.billForm.selling_price ? this.state.billForm.selling_price : "",
        onKeyPress: this.handleKeyPressFormInput,
        onChange: this.billFormInputChange,
        onBlur: this.handleBlurFormInput
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroup"], {
        className: "my-2 mr-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroup"].Prepend, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "lbl-input-group rounded-left"
      }, "Tax")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
        as: "select",
        id: "billFormGst",
        custom: true,
        name: "gst_tax_id",
        value: this.state.billForm.gst_tax_id ? this.state.billForm.gst_tax_id : "",
        onChange: this.billFormInputChange,
        onBlur: this.handleBlurFormInput
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: ""
      }, "NA"), this.state.gstTaxList.map(function (_ref, index) {
        var id = _ref.id,
            name = _ref.name,
            igst = _ref.igst,
            cgst = _ref.cgst,
            sgst = _ref.sgst;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          key: index,
          value: id,
          "data-igst": igst,
          "data-sgst": sgst,
          "data-cgst": cgst
        }, name);
      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Card"], {
        className: "bill-entry-form-card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bill-table-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        className: "bill-items-table"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "S.No"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Barcode"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Qty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Dis.(%)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Unit Amt"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Tax"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Net Amt"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, this.state.billItems.map(function (value, index) {
        var indexVal = index;
        value.quantity = parseFloat(value.quantity);
        value.selling_price = parseFloat(value.selling_price);
        var grossAmount = value.quantity * value.selling_price;
        grossAmount = Math.ceil(grossAmount * 100) / 100;
        totalGrossValue = totalGrossValue + grossAmount;
        value.discount_percentage = value.discount_percentage ? parseFloat(value.discount_percentage) : 0;
        var discount = grossAmount * (value.discount_percentage / 100);
        discount = Math.ceil(discount * 100) / 100; //discount=((discount*100).round())/100;
        //discount=Number(discount.toFixed(2)).round();            

        totalDiscount = totalDiscount + discount;
        var unitAmount = grossAmount - discount;
        value.igst = value.igst ? parseFloat(value.igst) : 0;
        value.sgst = value.sgst ? parseFloat(value.sgst) : 0;
        value.cgst = value.cgst ? parseFloat(value.cgst) : 0;
        var gstAmount = 0;

        if (_this2.state.currentTaxMode == "sgst") {
          var sgstValue = unitAmount * (value.sgst / 100);
          sgstValue = Math.ceil(sgstValue * 100) / 100;
          totalSGST = totalSGST + sgstValue;
          var cgstValue = unitAmount * (value.cgst / 100);
          cgstValue = Math.ceil(cgstValue * 100) / 100;
          totalCGST = totalCGST + cgstValue;
          gstAmount = sgstValue + cgstValue;
        } else {
          var igstValue = unitAmount * (value.igst / 100);
          igstValue = Math.ceil(igstValue * 100) / 100;
          totalIGST = totalIGST + igstValue;
          gstAmount = igstValue;
        }

        var netValue = gstAmount + unitAmount;
        netValue = netValue.toFixed(2);

        if (_this2.state.billItems.length == index + 1) {
          totalNetAmount = totalGrossValue - totalDiscount;

          if (_this2.state.currentTaxMode == "sgst") {
            totalNetAmount = totalNetAmount + (totalSGST + totalCGST);
          } else if (_this2.state.currentTaxMode == "igst") {
            totalNetAmount = totalNetAmount + totalIGST;
          }

          roundOff = totalNetAmount.round();
          _this2.totalGrossValue = totalGrossValue;
          _this2.totalDiscount = totalDiscount;
          _this2.totalSGST = totalSGST;
          _this2.totalCGST = totalCGST;
          _this2.totalIGST = totalIGST;
          _this2.totalNetAmount = totalNetAmount;
          _this2.roundOff = roundOff;
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          key: indexVal,
          "data-key": indexVal
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, indexVal + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, value.barcode), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, value.product_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          contentEditable: true,
          suppressContentEditableWarning: true,
          onKeyPress: function onKeyPress(event) {
            _this2.changeBillTable(event, indexVal, 'quantity');
          },
          onBlur: function onBlur(event) {
            _this2.handleTableColumnChange(event, indexVal, 'quantity');
          }
        }, value.quantity), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          contentEditable: true,
          suppressContentEditableWarning: true,
          onKeyPress: function onKeyPress(event) {
            _this2.changeBillTable(event, indexVal, 'discount_percentage');
          },
          onBlur: function onBlur(event) {
            _this2.handleTableColumnChange(event, indexVal, 'discount_percentage');
          }
        }, value.discount_percentage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, unitAmount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
          as: "select",
          className: "item-gst-tax",
          custom: true,
          value: value.sales_gst_tax_id,
          onChange: function onChange(e) {
            _this2.updateBillItemGst(e, indexVal);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: ""
        }, "NA"), _this2.state.gstTaxList.map(function (_ref2, index) {
          var id = _ref2.id,
              name = _ref2.name,
              igst = _ref2.igst,
              cgst = _ref2.cgst,
              sgst = _ref2.sgst;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
            key: id,
            value: id,
            "data-igst": igst,
            "data-sgst": sgst,
            "data-cgst": cgst,
            "data-index": index
          }, name);
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, netValue), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "btn-item-remove",
          onClick: function onClick() {
            _this2.removeBillItem(indexVal);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fas fa-trash-alt"
        }))));
      }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        md: 3,
        lg: 2
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Card"], {
        className: "bill-summary-card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "card-title"
      }, "Bill Details")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        className: "summary-table"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Gross Amt"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, totalGrossValue)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Discount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, totalDiscount)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        value: "0",
        className: "select-igst-tax",
        onChange: this.changeTaxMode
      }), "IGST"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.state.currentTaxMode == "igst" ? totalIGST : "NA")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "CGST"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.state.currentTaxMode == "sgst" ? totalCGST : "NA")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "SGST"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.state.currentTaxMode == "sgst" ? totalSGST : "NA")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Net Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, totalNetAmount)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Round off"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, roundOff)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        colSpan: "2",
        className: "net-amount"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "total-payment-amt"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label"
      }, "Net Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        className: "price"
      }, roundOff))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        sm: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "key-map-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "key-map",
        onClick: function onClick() {
          return _this2.handlePrintCommand("Thermal");
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "key"
      }, "F2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text"
      }, "Thermal Bill")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "key-map",
        onClick: function onClick() {
          return _this2.handlePrintCommand("A4");
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "key"
      }, "F4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text"
      }, "A4 Bill")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "key-map",
        onClick: function onClick() {
          return _this2.handleCustomerCommand();
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "key"
      }, "Alt+C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text"
      }, "Add Customer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "key-map"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "key"
      }, "Alt+A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text"
      }, "Add Product")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "key-map",
        onClick: function onClick(e) {
          window.open(_Utils__WEBPACK_IMPORTED_MODULE_11__["appRoutes"].newSale);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "key"
      }, "Alt+H"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text"
      }, "Hold"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ThermalBill_ThermalBill__WEBPACK_IMPORTED_MODULE_8__["default"], {
        data: _objectSpread(_objectSpread({}, this.state.summary), {}, {
          headerName: "Codesense Soft Solutions Pvt Ltd.",
          address: " RG Complex, 2nd Floor, Telungupalayam Pirivu, Coimbatore – 641 039.",
          gstType: this.state.currentTaxMode,
          paidAmount: this.state.checkoutModal.inputs.paid_by_cash,
          remainingBalance: this.state.checkoutModal.inputs.remain_balance
        })
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Customer_CustomerModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
        data: this.state.customerModal,
        stateLists: this.state.states,
        countryLists: this.state.countries,
        onHide: function onHide() {
          _this2.setState(function (prev) {
            var customerModal = prev.customerModal;
            customerModal.show = false;
            customerModal.inputs = {};
            return {
              customerModal: customerModal
            };
          });
        },
        updateInputs: function updateInputs(e) {
          return _this2.updateCustomerModalInputs(e);
        },
        pageAlert: this.pageAlert
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
        className: "modal-check-out",
        show: this.state.checkoutModal.show,
        onHide: this.handleCheckOutModelClose,
        onEntered: function onEntered() {
          document.getElementById('checkoutPaidCash').focus();
        },
        backdrop: "static",
        keyboard: false
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Modal"].Header, {
        closeButton: false
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Modal"].Title, null, "Check Out Product")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Modal"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bill-price-label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label-lg"
      }, "Net Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label-price"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "currency-icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-rupee-sign"
      })), " ", roundOff)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "remarks"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bill-payment-options-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Tab"].Container, {
        id: "payment-options",
        activeKey: this.state.checkoutModal.inputs.payment_option
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        sm: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Nav"], {
        variant: "pills",
        className: "nav-fill bordered-tab"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Nav"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Nav"].Link, {
        className: "theme-active-btn",
        onClick: function onClick() {
          _this2.setCheckOutPaymentOption("Cash");
        },
        eventKey: "Cash"
      }, "Cash")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Nav"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Nav"].Link, {
        className: "theme-active-btn",
        onClick: function onClick() {
          _this2.setCheckOutPaymentOption("Card");
        },
        eventKey: "Card"
      }, "Card")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        sm: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Tab"].Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Tab"].Pane, {
        eventKey: "Cash",
        onEntered: function onEntered() {
          return document.getElementById('checkoutPaidCash').focus();
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "py-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
        controlId: "checkoutPaidCash"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, null, "Paid By Cash"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
        type: "text",
        placeholder: "Cash",
        name: "paid_by_cash",
        value: this.state.checkoutModal.inputs.paid_by_cash ? this.state.checkoutModal.inputs.paid_by_cash : "",
        onChange: this.changeCheckOutModal,
        onKeyDown: this.handleKeyPressCheckModal.bind(this),
        onKeyPress: this.preventFloatValue
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
        controlId: "checkoutRemainCash"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, null, "Remaining Balance"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
        type: "text",
        placeholder: "Balance",
        name: "remain_balance",
        value: this.state.checkoutModal.inputs.remain_balance ? this.state.checkoutModal.inputs.remain_balance : "",
        onChange: this.changeCheckOutModal,
        disabled: true
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Tab"].Pane, {
        eventKey: "Card",
        onEntered: function onEntered() {
          return document.getElementById('checkoutCardType').focus();
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "py-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
        controlId: "checkoutCardType"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, null, "Card Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
        as: "select",
        name: "card_type",
        custom: true,
        value: this.state.checkoutModal.inputs.card_type ? this.state.checkoutModal.inputs.card_type : "",
        onChange: this.changeCheckOutModal
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: ""
      }, "Select Option"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Visa Card"
      }, "Visa Card"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Mastercard"
      }, "Mastercard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Maestro"
      }, "Maestro"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Rupay"
      }, "Rupay"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Others"
      }, "Others"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
        controlId: "checkoutCardNo"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, null, "Card No"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
        type: "text",
        placeholder: "Card No",
        name: "card_no",
        value: this.state.checkoutModal.inputs.card_no ? this.state.checkoutModal.inputs.card_no : "",
        onChange: this.changeCheckOutModal,
        onKeyDown: this.handleKeyPressCheckModal.bind(this)
      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        sm: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
        controlId: "checkOutRemarks"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, null, "Remarks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
        as: "textarea",
        rows: 3,
        style: {
          resize: "none"
        },
        name: "remarks",
        value: this.state.checkoutModal.inputs.remarks ? this.state.checkoutModal.inputs.remarks : "",
        onChange: this.changeCheckOutModal
      }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Modal"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        variant: "primary",
        onClick: this.proceedPrint
      }, "Print Bill"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        variant: "secondary",
        onClick: this.handleCheckOutModelClose
      }, "Close")))));
    }
  }, {
    key: "updateCustomerModalInputs",
    value: function updateCustomerModalInputs(e) {
      console.log(e.target.name);
      var customerModal = this.state.customerModal;
      customerModal.inputs[e.target.name] = e.target.value;
      this.setState(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          customerModal: customerModal
        });
      });
    }
  }, {
    key: "printThermalBill",
    value: function printThermalBill() {
      //let printableElements = document.getElementById('thermalBill').innerHTML;
      //let orderHtml = '<html><head><title></title></head><body>' + printableElements + '</body></html>';
      //let oldPage = document.body.innerHTML;
      //document.body.innerHTML = orderHtml;
      window.print(); //document.body.innerHTML = oldPage 
    }
  }, {
    key: "pageAlert",
    value: function pageAlert(data) {
      this.setState({
        appToast: {
          show: true,
          data: data
        }
      });
    }
  }, {
    key: "proceedPrint",
    value: function proceedPrint() {
      var _this3 = this;

      var billItems = this.state.billItems;
      console.log(billItems);
      var checkoutInput = this.state.checkoutModal.inputs;
      var data = {
        gross_amount: this.totalGrossValue,
        total_discount: this.totalDiscount,
        igst: this.totalIGST,
        cgst: this.totalCGST,
        sgst: this.totalSGST,
        net_amount: this.totalNetAmount,
        round_off: this.roundOff,
        payment_option: checkoutInput.payment_option,
        paid_amount: checkoutInput.paid_by_cash,
        remaining_balance: checkoutInput.remain_balance,
        remarks: checkoutInput.remarks,
        customer_id: this.state.customer,
        bill_items: this.state.billItems,
        gst_type: this.state.currentTaxMode
      };
      var request = {
        method: 'post',
        url: _Utils__WEBPACK_IMPORTED_MODULE_11__["apiRoutes"].createBill,
        data: data
      };
      this.setState({
        loader: true
      });
      axios(request).then(function (response) {
        return response;
      }).then(function (json) {
        if (json.data.success) {
          _this3.printThermalBill();

          var gstTaxList = _this3.state.gstTaxList;

          _this3.setState(_this3.getInitialState());

          var appToast = {
            show: true,
            data: {
              type: 1,
              header: "Success!",
              message: json.data.message
            }
          };

          _this3.setState(function (prev) {
            return _objectSpread(_objectSpread({}, prev), {}, {
              loader: false,
              appToast: appToast,
              gstTaxList: gstTaxList
            });
          });
        } else {
          var _appToast = {
            show: true,
            data: {
              type: 0,
              header: "Bill Error!",
              message: json.data.message
            }
          };

          _this3.setState(function (prev) {
            return _objectSpread(_objectSpread({}, prev), {}, {
              loader: false,
              appToast: _appToast
            });
          });
        }
      })["catch"](function (error) {
        console.log(error);
        var appToast = {
          show: true,
          data: {
            type: 0,
            header: "Bill Error!",
            message: "Error!"
          }
        };

        _this3.setState({
          loader: false,
          appToast: appToast
        });
      });
    }
  }, {
    key: "handleKeyPressCheckModal",
    value: function handleKeyPressCheckModal(e) {
      var event = window.event ? window.event : e;

      if (event.key === "Enter" || event.keyCode === 13) {
        this.proceedPrint();
      }
    }
  }, {
    key: "preventFloatValue",
    value: function preventFloatValue(e) {
      var event = window.event ? window.event : e;

      if (/[^0-9.]/g.test(event.key)) {
        e.preventDefault();
      } else if (e.target.value.replace(/[^.]/g, "").length > 0 && e.key == ".") {
        e.preventDefault();
      }
    }
  }, {
    key: "completeBillFormSugesstion",
    value: function completeBillFormSugesstion(prodIndex) {
      var formInput = this.state.billForm;
      var productSuggestions = this.state.productSuggestions;
      var billItems = this.state.billItems;
      var input = null;

      if (productSuggestions[prodIndex]) {
        var check = billItems.some(function (item, index, array) {
          if (item.product_id === productSuggestions[prodIndex].product_id) {
            formInput.quantity = item.quantity;
            productSuggestions[prodIndex]['selling_price'] = item.selling_price;
            productSuggestions[prodIndex]['discount_percentage'] = item.discount_percentage;
            productSuggestions[prodIndex]['sales_gst_tax_id'] = item.sales_gst_tax_id;
            productSuggestions[prodIndex]['sgst'] = item.sgst;
            productSuggestions[prodIndex]['cgst'] = item.cgst;
            productSuggestions[prodIndex]['igst'] = item.igst;
            return true;
          }

          return false;
        });
        formInput.barcode = productSuggestions[prodIndex]['barcode'];
        formInput.product_name = productSuggestions[prodIndex]['product_name'];
        formInput.discount = productSuggestions[prodIndex]['discount_percentage'] ? productSuggestions[prodIndex]['discount_percentage'] : 0;
        formInput.selling_price = productSuggestions[prodIndex]['selling_price'];
        formInput.gst_tax_id = productSuggestions[prodIndex]['sales_gst_tax_id'] ? productSuggestions[prodIndex]['sales_gst_tax_id'] : "";
        formInput.sgst = productSuggestions[prodIndex]['sgst'] ? productSuggestions[prodIndex]['sgst'] : "";
        formInput.cgst = productSuggestions[prodIndex]['cgst'] ? productSuggestions[prodIndex]['cgst'] : "";
        formInput.igst = productSuggestions[prodIndex]['igst'] ? productSuggestions[prodIndex]['igst'] : "";
        input = productSuggestions[prodIndex];

        if (!check) {
          formInput.quantity = 1;
        }
      }

      this.setState(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          productSuggestIndex: 0,
          productSuggestions: [],
          billForm: formInput,
          currentBillProduct: input,
          visibleProductSuggestion: false,
          visibleBarcodeSuggestion: false
        });
      });
      document.getElementById('billFormQuantity').focus();
    }
  }, {
    key: "getBarcodeSuggestions",
    value: function getBarcodeSuggestions(e) {
      var _this4 = this;

      var event = window.event ? window.event : e;
      var prodIndex = this.state.productSuggestIndex;
      var productSuggestions = this.state.productSuggestions;

      if (event.keyCode == 38 || event.key == "ArrowUp" || event.code == "ArrowUp") {
        // Up Arrow
        e.preventDefault();
        var prevIndex = prodIndex - 1;

        if (prevIndex >= 0) {
          this.setState(function (prev) {
            return _objectSpread(_objectSpread({}, prev), {}, {
              productSuggestIndex: prevIndex
            });
          });
        }
      } else if (event.keyCode == 40 || event.key == "ArrowDown" || event.code == "ArrowDown") {
        // Down Arrow
        e.preventDefault();
        var nextIndex = prodIndex + 1;
        var count = this.state.productSuggestions.length;

        if (count > nextIndex) {
          this.setState(function (prev) {
            return _objectSpread(_objectSpread({}, prev), {}, {
              productSuggestIndex: nextIndex
            });
          });
        }
      } else if (event.key === "Enter" || event.keyCode === 13 || event.code == "Enter" || event.key === "Tab" || event.keyCode === 9 || event.code == "Tab") {
        if (productSuggestions.length > 0) {
          e.preventDefault();
          this.completeBillFormSugesstion(prodIndex);
        }
      } else {
        var value = e.target.value.trim();

        if (event.keyCode === 8 || event.key == "Backspace" || event.code == "Backspace") {
          value = value.slice(0, -1);
        } else {
          value = event.key && event.key.length == 1 ? value + event.key : value;
        }

        console.log(value);

        if (value == "") {
          if (this.state.visibleBarcodeSuggestion || this.state.productSuggestIndex > 0) {
            this.setState(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, {
                productSuggestIndex: 0,
                productSuggestions: [],
                visibleProductSuggestion: false,
                visibleBarcodeSuggestion: false
              });
            });
          }
        } else if (value != this.state.billForm.barcode) {
          var request = {
            search: value
          };
          this.searchProducts(request, function (json) {
            var suggests = [];

            if (json.data.success) {
              suggests = json.data.data;
            }

            _this4.setState(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, {
                productSuggestIndex: 0,
                productSuggestions: suggests,
                visibleBarcodeSuggestion: true,
                visibleProductSuggestion: false
              });
            });
          }, function (error) {
            console.log(error);

            _this4.setState(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, {
                productSuggestIndex: 0,
                productSuggestions: [],
                visibleBarcodeSuggestion: false,
                visibleProductSuggestion: false
              });
            });
          });
        }
      }
    }
  }, {
    key: "getProductSuggestions",
    value: function getProductSuggestions(e) {
      var _this5 = this;

      var event = window.event ? window.event : e;
      var prodIndex = this.state.productSuggestIndex;
      var productSuggestions = this.state.productSuggestions;

      if (event.keyCode == 38 || event.key == "ArrowUp" || event.code == "ArrowUp") {
        // Up Arrow
        e.preventDefault();
        var prevIndex = prodIndex - 1;

        if (prevIndex >= 0) {
          this.setState(function (prev) {
            return _objectSpread(_objectSpread({}, prev), {}, {
              productSuggestIndex: prevIndex
            });
          });
        }
      } else if (event.keyCode == 40 || event.key == "ArrowDown" || event.code == "ArrowDown") {
        // Down Arrow
        e.preventDefault();
        var nextIndex = prodIndex + 1;
        var count = this.state.productSuggestions.length;

        if (count > nextIndex) {
          this.setState(function (prev) {
            return _objectSpread(_objectSpread({}, prev), {}, {
              productSuggestIndex: nextIndex
            });
          });
        }
      } else if (event.key === "Enter" || event.keyCode === 13 || event.code == "Enter" || event.key === "Tab" || event.keyCode === 9 || event.code == "Tab") {
        if (productSuggestions.length > 0) {
          e.preventDefault();
          this.completeBillFormSugesstion(prodIndex);
        }
      } else {
        var value = e.target.value.trim();

        if (event.keyCode === 8 || event.key == "Backspace" || event.code == "Backspace") {
          value = value.slice(0, -1);
        } else {
          value = event.key && event.key.length == 1 ? value + event.key : value;
        }

        console.log(value);

        if (value == "") {
          if (this.state.visibleProductSuggestion || this.state.productSuggestIndex > 0) {
            this.setState(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, {
                productSuggestIndex: 0,
                productSuggestions: [],
                visibleProductSuggestion: false,
                visibleBarcodeSuggestion: false
              });
            });
          }
        } else if (value != this.state.billForm.product_name) {
          this.setState(function (prev) {
            return _objectSpread(_objectSpread({}, prev), {}, {
              productSuggestIndex: 0,
              visibleBarcodeSuggestion: false,
              visibleProductSuggestion: true
            });
          });
          var request = {
            search: value
          };
          this.searchProducts(request, function (json) {
            var suggests = [];

            if (json.data.success) {
              suggests = json.data.data;
            }

            _this5.setState(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, {
                productSuggestIndex: 0,
                productSuggestions: suggests
              });
            });
          }, function (error) {
            console.log(error);
          });
        }
      }
    }
  }, {
    key: "billFormInputChange",
    value: function billFormInputChange(e) {
      var billInputs = this.state.billForm;

      if (e.target.name == "gst_tax_id") {
        var selectedIndex = e.target.options.selectedIndex;
        billInputs['gst_tax_id'] = e.target.value != "" ? e.target.value : "";
        billInputs['sgst'] = e.target.value != "" ? e.target.options[selectedIndex].getAttribute('data-sgst') : "";
        billInputs['cgst'] = e.target.value != "" ? e.target.options[selectedIndex].getAttribute('data-cgst') : "";
        billInputs['igst'] = e.target.value != "" ? e.target.options[selectedIndex].getAttribute('data-igst') : "";
      } else {
        billInputs[e.target.name] = e.target.value;
      }

      this.setState(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          billForm: billInputs
        });
      });
    }
  }, {
    key: "handleKeyPressFormInput",
    value: function handleKeyPressFormInput(e) {
      var event = window.event ? window.event : e;

      if (/[^0-9.]/g.test(event.key)) {
        e.preventDefault();
      } else if (e.target.innerText.replace(/[^.]/g, "").length > 0 && event.key == ".") {
        e.preventDefault();
      }

      if (event.keyCode === 13) {
        // Enter Event on Form Input
        var formInput = this.state.billForm;
        formInput[e.target.name] = e.target.value;

        if (formInput.selling_price != "" && formInput.quantity > 0) {
          e.preventDefault();
          var currentBillProduct = this.state.currentBillProduct;
          currentBillProduct.quantity = formInput.quantity;
          currentBillProduct.selling_price = formInput.selling_price;
          currentBillProduct.sales_gst_tax_id = formInput.gst_tax_id;
          currentBillProduct.igst = formInput.igst;
          currentBillProduct.sgst = formInput.sgst;
          currentBillProduct.cgst = formInput.cgst;
          currentBillProduct.discount_percentage = formInput.discount;
          var billItems = this.state.billItems;
          var check = billItems.some(function (item, index, array) {
            if (item.product_id === currentBillProduct.product_id) {
              billItems[index].quantity = currentBillProduct.quantity;
              billItems[index].discount_percentage = currentBillProduct.discount_percentage;
              billItems[index].sales_gst_tax_id = currentBillProduct.sales_gst_tax_id;
              billItems[index].sgst = currentBillProduct.sgst;
              billItems[index].igst = currentBillProduct.igst;
              billItems[index].cgst = currentBillProduct.cgst;
              return true;
            }

            return false;
          });

          if (!check) {
            billItems.push(currentBillProduct);
          }
          /*this.setState(prev => {
                return {
                  ...prev,
                  billForm:{},               
                  currentBillProduct:{},
                  billItems:billItems
                }
          }); */


          this.updateSummary(_objectSpread(_objectSpread({}, this.state), {}, {
            billForm: {},
            currentBillProduct: {},
            billItems: billItems
          }));
          document.getElementById('billFormBarcode').focus();
        }
      } else {
        // Close Suggestion Box.
        if (this.state.visibleBarcodeSuggestion || this.state.visibleProductSuggestion) {
          this.setState(function (prev) {
            return _objectSpread(_objectSpread({}, prev), {}, {
              visibleBarcodeSuggestion: false,
              visibleProductSuggestion: false
            });
          });
        }
      }
    }
  }, {
    key: "handleBlurFormInput",
    value: function handleBlurFormInput(e) {
      var currentBillProduct = this.state.currentBillProduct;
      var billItems = this.state.billItems;

      if (currentBillProduct) {
        if (e.target.name == "quantity") {
          var quantity = this.state.billForm.quantity;
          currentBillProduct.quantity = quantity;
        } else if (e.target.name == "discount") {
          var discount = this.state.billForm.discount;
          currentBillProduct.discount_percentage = discount;
        } else if (e.target.name == "selling_price") {
          var selling_price = this.state.billForm.selling_price;
          currentBillProduct.selling_price = selling_price;
        } else if (e.target.name == "gst_tax_id") {
          currentBillProduct.sales_gst_tax_id = this.state.billForm.gst_tax_id;
          currentBillProduct.igst = this.state.billForm.igst;
          currentBillProduct.sgst = this.state.billForm.sgst;
          currentBillProduct.cgst = this.state.billForm.cgst;
          var check = billItems.some(function (item, index, array) {
            if (item.product_id === currentBillProduct.product_id) {
              billItems[index].quantity = currentBillProduct.quantity;
              billItems[index].discount_percentage = currentBillProduct.discount_percentage;
              billItems[index].sales_gst_tax_id = currentBillProduct.sales_gst_tax_id;
              billItems[index].sgst = currentBillProduct.sgst;
              billItems[index].igst = currentBillProduct.igst;
              billItems[index].cgst = currentBillProduct.cgst;
              return true;
            }

            return false;
          });

          if (!check) {
            billItems.push(currentBillProduct);
          }
          /*this.setState(prev => {
            return {
              ...prev,
              billForm:{},
              currentBillProduct:{},
              billItems:billItems
            }
          }); */


          this.updateSummary(_objectSpread(_objectSpread({}, this.state), {}, {
            billForm: {},
            currentBillProduct: {},
            billItems: billItems
          }));
          document.getElementById('billFormBarcode').focus();
          return;
        }

        this.setState(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            currentBillProduct: currentBillProduct
          });
        });
      }
    }
  }, {
    key: "setCheckOutPaymentOption",
    value: function setCheckOutPaymentOption(method) {
      this.setState(function (prev) {
        var checkoutModal = prev.checkoutModal;
        checkoutModal.inputs.payment_option = method;
        return _objectSpread(_objectSpread({}, prev), {}, {
          checkoutModal: checkoutModal
        });
      });
    }
  }, {
    key: "handleCheckOutModelClose",
    value: function handleCheckOutModelClose(e) {
      this.setState(function (prev) {
        var checkoutModal = prev.checkoutModal;
        checkoutModal.show = false;
        return _objectSpread(_objectSpread({}, prev), {}, {
          checkoutModal: checkoutModal
        });
      });
    }
  }, {
    key: "removeBillItem",
    value: function removeBillItem(index) {
      var billItems = this.state.billItems;
      billItems.splice(index, 1);
      /*this.setState(prev=>{
         return {
           ...prev,
           billItems : billItems
         }
      });*/

      this.updateSummary(_objectSpread(_objectSpread({}, this.state), {}, {
        billItems: billItems
      }));
    }
  }, {
    key: "handlePrintCommand",
    value: function handlePrintCommand() {
      if (this.state.billItems.length > 0) {
        this.setState(function (prev) {
          var checkoutModal = prev.checkoutModal;
          checkoutModal.show = true;
          return _objectSpread(_objectSpread({}, prev), {}, {
            checkoutModal: checkoutModal
          });
        });
      } else {
        var appToast = {
          show: true,
          data: {
            type: 0,
            header: "Empty Bill !",
            message: "Please select items before take bill!"
          }
        };
        this.setState(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            appToast: appToast
          });
        });
      }
    }
  }, {
    key: "handleCustomerCommand",
    value: function handleCustomerCommand() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var customerModal = this.state.customerModal;
      customerModal.show = true;
      this.setState(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          customerModal: customerModal
        });
      });
    }
  }, {
    key: "handleKeyBoardShortCuts",
    value: function handleKeyBoardShortCuts(e) {
      var event = window.event ? window.event : e;
      var key = event.key;
      var keyCode = event.code;
      console.log(key, keyCode);
      this.keysPressed[key] = 1;

      if (this.state.checkoutModal.show) {
        var checkoutModal = this.state.checkoutModal;

        if (event.key == "Escape") {
          checkoutModal.show = false;
          this.setState(function (prev) {
            return _objectSpread(_objectSpread({}, prev), {}, {
              checkoutModal: checkoutModal
            });
          });
        } else if (["ArrowRight", "ArrowLeft"].indexOf(event.key) > -1 && this.keysPressed['Control']) {
          checkoutModal.inputs.payment_option = checkoutModal.inputs.payment_option == "Card" ? "Cash" : "Card";
          this.setState(function (prev) {
            return _objectSpread(_objectSpread({}, prev), {}, {
              checkoutModal: checkoutModal
            });
          });
        }
      }

      if (event.key == 'F2' && this.state.checkoutModal.show === false) {
        e.preventDefault();
        this.handlePrintCommand("Thermal");
      } else if (event.key == 'F4' && this.state.checkoutModal.show === false) {
        e.preventDefault();
        this.handlePrintCommand("A4");
      } else if (this.keysPressed['Alt'] && event.key.toLowerCase() == 'r' || this.keysPressed['Meta'] && event.key.toLowerCase() == 'r') {
        e.preventDefault();
        this.handlePrintCommand("Thermal");
      } else if (this.keysPressed['Alt'] && event.key.toLowerCase() == 'h' || this.keysPressed['Meta'] && event.key.toLowerCase() == 'h') {
        window.open(_Utils__WEBPACK_IMPORTED_MODULE_11__["appRoutes"].newSale);
        e.preventDefault();
      }
      /*else if ( (this.keysPressed['Alt'] && event.key.toLowerCase() == 'a') ||
      (this.keysPressed['Meta'] && event.key.toLowerCase() == 'a')) {
       this.handlePrintCommand("A4");
       e.preventDefault();
      }*/
      else if (this.keysPressed['Alt'] && event.key.toLowerCase() == 'c' || this.keysPressed['Meta'] && event.key.toLowerCase() == 'c') {
          e.preventDefault();
          this.handleCustomerCommand();
          console.log("Add Customer");
        } else if (this.keysPressed['Alt'] && event.key.toLowerCase() == 'a' || this.keysPressed['Meta'] && event.key.toLowerCase() == 'a') {
          e.preventDefault();
          console.log("Add Product");
        } else if (this.keysPressed['Control'] && event.key.toLowerCase() == 'p' || this.keysPressed['Meta'] && event.key.toLowerCase() == 'p') {
          e.preventDefault();
          this.handlePrintCommand("Thermal");
        }
    }
  }, {
    key: "handleKeyUpEvent",
    value: function handleKeyUpEvent(e) {
      var event = window.event ? window.event : e;
      delete this.keysPressed[event.key];
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this6 = this;

      window.addEventListener('keydown', this.handleKeyBoardShortCuts);
      window.addEventListener('keyup', this.handleKeyUpEvent);
      document.getElementById('billFormBarcode').focus();
      Object(_Utils__WEBPACK_IMPORTED_MODULE_11__["newSale"])(function (json) {
        if (json.data.success) {
          _this6.setState({
            loader: false,
            gstTaxList: json.data.gst_tax_lists,
            states: json.data.states,
            countries: json.data.countries
          });
        } else {
          _this6.setState({
            loader: false,
            gstTaxList: [],
            states: [],
            countries: []
          });
        }
      }, function (error) {
        console.log(error);

        _this6.setState({
          loader: false,
          gstTaxList: []
        });
      });
    }
  }, {
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      window.removeEventListener('keydown', this.handleKeyBoardShortCuts);
      window.removeEventListener('keyup', this.handleKeyUpEvent);
    }
  }]);

  return NewSale;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(NewSale));

/***/ }),

/***/ "./resources/js/src/views/sale/NewSale/new-sale.css":
/*!**********************************************************!*\
  !*** ./resources/js/src/views/sale/NewSale/new-sale.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/postcss-loader/src??ref--6-2!./new-sale.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/src/views/sale/NewSale/new-sale.css");

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

/***/ "./resources/js/src/views/sale/Sales/Sales.js":
/*!****************************************************!*\
  !*** ./resources/js/src/views/sale/Sales/Sales.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Header/Header */ "./resources/js/src/components/Header/Header.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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





var Sales = /*#__PURE__*/function (_Component) {
  _inherits(Sales, _Component);

  var _super = _createSuper(Sales);

  function Sales(props) {
    var _this;

    _classCallCheck(this, Sales);

    _this = _super.call(this, props);
    _this.state = {
      isLoggedIn: true,
      user: [],
      error: ''
    };
    return _this;
  }

  _createClass(Sales, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var state = localStorage["appState"];

      if (state) {
        var AppState = JSON.parse(state);
        this.setState({
          isLoggedIn: AppState.isLoggedIn,
          user: AppState.user
        });
      }
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Sales"))), this.state.pageAlert && this.state.pageAlert.message ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FlashAlert, {
        data: this.state.pageAlert,
        duration: 6000,
        show: true,
        onClose: function onClose() {
          return _this2.pageAlert({});
        }
      }) : '')));
    }
  }]);

  return Sales;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Sales));

/***/ }),

/***/ "./resources/js/src/views/sale/index.js":
/*!**********************************************!*\
  !*** ./resources/js/src/views/sale/index.js ***!
  \**********************************************/
/*! exports provided: modules, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modules", function() { return modules; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _PrivateRoute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../PrivateRoute */ "./resources/js/src/PrivateRoute.js");
/* harmony import */ var _Sales_Sales__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sales/Sales */ "./resources/js/src/views/sale/Sales/Sales.js");
/* harmony import */ var _NewSale_NewSale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NewSale/NewSale */ "./resources/js/src/views/sale/NewSale/NewSale.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



 // For Validate Logged In.



var modules = {
  Sales: _Sales_Sales__WEBPACK_IMPORTED_MODULE_3__["default"],
  NewSale: _NewSale_NewSale__WEBPACK_IMPORTED_MODULE_4__["default"]
};

var SaleModule = function SaleModule(_ref) {
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

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(SaleModule));

/***/ })

}]);