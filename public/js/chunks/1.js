(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/src/components/AutoSuggestion/autosuggestion.css":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/src/components/AutoSuggestion/autosuggestion.css ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".suggestion-container{\r\n    position: absolute;\r\n    background-color: #f0f0f0;\r\n    width: 100%;\r\n    top: 100%;\r\n    z-index: 100;\r\n    border:solid 1px #ddd;\r\n    max-height: 40vh;\r\n    overflow: auto;\r\n}\r\n.suggestion-container .suggestions{    \r\n    list-style: none;\r\n    overflow: auto;\r\n    padding: 5px;    \r\n}\r\n.suggestion-container .suggestions li{\r\n    padding:5px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n.suggestion-container .suggestions li:not(.empty){\r\n    cursor:pointer;\r\n}\r\n.suggestion-container .suggestions li.active{\r\n    background-color: #6495ed;\r\n    white-space: break-spaces;\r\n    color:#fff;    \r\n}\r\n.suggestion-container .suggestions li.empty{\r\n    text-align:center;\r\n    color:#848484;\r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/src/components/Bill/a4-bill.css":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/src/components/Bill/a4-bill.css ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#a4Bill{\r\n    visibility:visible;\r\n    display:block;\r\n}  \r\n\r\n/*\r\n@media print {\r\n    @page{ \r\n        size: auto;  \r\n        margin: 0mm;\r\n        padding:0mm; \r\n    }   \r\n    body * {\r\n        visibility: hidden; \r\n    }\r\n    #a4Bill, #a4Bill *{\r\n        visibility: visible;\r\n        color:#000;     \r\n    }\r\n    #a4Bill {\r\n        display:block;\r\n        position: absolute;\r\n        left: 0;\r\n        top: 0;\r\n        width:100%;\r\n    } \r\n*/\r\n    .bill-page-a4{\r\n        width:100%;\r\n        display:block;\r\n        font-size:.8rem;\r\n    }\r\n    .bill-page-a4 .bill-header-row td{\r\n        border:solid 1px #000;\r\n        width:50%;\r\n    }\r\n    .bill-page-a4 .no-pad{\r\n        padding:0px;\r\n    }\r\n    .bill-page-a4 .no-pad .table-data tr{\r\n        border-bottom:solid 1px #000;\r\n    }\r\n    .bill-page-a4 .no-pad .table-data td{\r\n        border:none;\r\n    }\r\n    .bill-page-a4 .bill-table .company-address-col{\r\n        display:flex;\r\n        width:100%;\r\n    }\r\n    .bill-page-a4 .bill-table .buyer-address-col{\r\n        border-top:solid 1px #000;\r\n        min-height: 100px;\r\n    }\r\n    .bill-page-a4 .bill-table .company-address-col .company-icon{\r\n        display:inline-block;\r\n    }\r\n    .bill-page-a4 .bill-table .company-address-col .company-icon img{\r\n        max-width:120px;\r\n    }\r\n    .bill-page-a4 .bill-table .company-address-col .company-address{\r\n        display:inline-block;\r\n        padding:10px;\r\n    }\r\n    .bill-page-a4 .bill-table .company-address-col h2{\r\n        font-size:1rem; \r\n        font-weight:600;\r\n    }\r\n    .bill-page-a4 .bill-address, \r\n    .bill-page-a4 .bill-contact-no, \r\n    .bill-page-a4 .bill-email,\r\n    .bill-page-a4 .bill-gst-no{\r\n        text-align:left;  \r\n        font-size:.8rem; \r\n        margin:0px; \r\n    }\r\n\r\n    .bill-page-a4 .page-header{\r\n        text-align:center;\r\n        font-size: 1.5rem;\r\n    }\r\n   \r\n    .bill-page-a4 .header-row{\r\n        border-top:dashed 2px #000;   \r\n        height:3px;\r\n        border-bottom:dashed 2px #000;\r\n    }\r\n    .bill-page-a4 .bill-summary-table tfoot{\r\n        margin:10px 5px;\r\n    }\r\n    .bill-page-a4 .bill-body{\r\n        padding:10px;\r\n    }\r\n    \r\n    .bill-page-a4 .bill-header-table th:nth-child(1){\r\n        text-align: left;\r\n        padding:10px;\r\n    }\r\n    .bill-page-a4 .bill-header-table th:nth-child(2){\r\n        text-align: right;\r\n        padding:.8rem;\r\n    }\r\n    \r\n    .bill-page-a4 .bill-summary-table{\r\n        width:100%;\r\n    }\r\n    .bill-page-a4 .bill-summary-table tr,\r\n    .bill-page-a4 .bill-summary-table td,\r\n    .bill-page-a4 .bill-summary-table th{\r\n        border:none;  \r\n        width:25%;  \r\n    }\r\n    .bill-page-a4 .bill-header-table th,\r\n    .bill-page-a4 .bill-header-table td{\r\n        border:none;  \r\n        width:25%;  \r\n    }\r\n    .bill-page-a4 .bill-footer-table th,\r\n    .bill-page-a4 .bill-footer-table td{\r\n        border:none;  \r\n        width:25%;  \r\n    }\r\n    \r\n    .bill-page-a4 .bill-summary-table thead  tr{\r\n        border-bottom:dashed 1px #000;  \r\n    }\r\n    .bill-page-a4 .bill-summary-table thead th{\r\n        text-align:left;\r\n        padding:10px 0px;\r\n    } \r\n    .bill-page-a4 table  tr.bordered-row{\r\n        border-top:solid 1px #000;  \r\n    }\r\n    .bill-page-a4 table tr.bordered-bottom{\r\n        border-bottom:dashed 1px #000;  \r\n    }\r\n    .bill-page-a4 .buyer-address-col h2{\r\n        font-size:1rem;\r\n        font-weight:600;\r\n    }\r\n    .bill-page-a4 .buyer-address-col p{\r\n        margin:0px;\r\n    }\r\n\r\n    .bill-page-a4 table  tr.bordered-row th,\r\n    .bill-page-a4 table tr.bordered-row td{\r\n        padding:5px;\r\n    }\r\n    .bill-page-a4 table  .quoted-text th{\r\n        text-align:center;\r\n        padding:5px;\r\n    }\r\n    .bill-page-a4 .lg-font{\r\n        font-size:1.2rem;\r\n    } \r\n    .bill-page-a4 .bill-a4-items td{\r\n        padding:0px;\r\n    }\r\n    .bill-page-a4 .bill-a4-items .items-list-tbl td,\r\n    .bill-page-a4 .bill-a4-items .items-list-tbl th{     \r\n        padding:5px;\r\n    }\r\n    .bill-page-a4 .bill-a4-items .items-list-tbl td,\r\n    .bill-page-a4 .bill-a4-items .items-list-tbl th{\r\n        border:solid 1px #000;\r\n    }\r\n    .bill-page-a4 .bill-a4-items .items-list-tbl thead th{\r\n        text-align:center;\r\n        border-top:none;\r\n    }    \r\n    .bill-page-a4 .bill-a4-items .items-list-tbl tbody td{\r\n        border-top:none;\r\n        border-bottom:none;\r\n    }\r\n    .bill-page-a4 .bill-a4-items .items-list-tbl tfoot th{\r\n        border-top:none;\r\n        border-bottom:none;\r\n        text-align:right;\r\n    }\r\n\r\n    .bill-page-a4 .amount-in-words-row .label-text{      \r\n        display:block;\r\n    }\r\n    .bill-page-a4 .amount-in-words-row .label-bold{\r\n        font-weight:600;\r\n        font-size:1rem;\r\n    }\r\n\r\n    .bill-page-a4 .items-tax-table table thead th{\r\n        border:solid 1px #000;\r\n        border-bottom:solid 1px #000;\r\n        padding:0px;\r\n    }   \r\n    .bill-page-a4 .items-tax-table .tax-head-tbl td{       \r\n        text-align:center\r\n    }\r\n/* \r\n} \r\n*/", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/src/components/Bill/thermal-bill.css":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/src/components/Bill/thermal-bill.css ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#thermalBill{\r\n    visibility:hidden;\r\n    display:none;\r\n}  \r\n\r\n@media print { \r\n    @page{ \r\n        size: auto;  \r\n        margin: 0mm;\r\n        padding:0mm; \r\n    }   \r\n    body * {\r\n        visibility: hidden; \r\n    }\r\n    #thermalBill, #thermalBill *{\r\n        visibility: visible;\r\n        color:#000;     \r\n    }\r\n    #thermalBill {\r\n        display:block;\r\n        position: absolute;\r\n        left: 0;\r\n        top: 0;\r\n        width:100%;\r\n    } \r\n\r\n    .bill-page{\r\n        width:100%;\r\n        display:block;\r\n        font-size:1rem;\r\n    }\r\n    .page-header{\r\n        text-align:center;\r\n        font-size: 1.5rem;\r\n    }\r\n    .bill-page .bill-address, \r\n    .bill-page .bill-contact-no, \r\n    .bill-page .bill-gst-no{\r\n        text-align:center;\r\n        max-width:50%;\r\n        margin: auto;\r\n    }\r\n    .bill-page .header-row{\r\n        border-top:dashed 2px #000;   \r\n        height:3px;\r\n        border-bottom:dashed 2px #000;\r\n    }\r\n    .bill-page .bill-summary-table tfoot{\r\n        margin:10px 5px;\r\n    }\r\n    .bill-page .bill-body{\r\n        padding:10px;\r\n    }\r\n    \r\n    .bill-page .bill-header-table th:nth-child(1){\r\n        text-align: left;\r\n        padding:10px;\r\n    }\r\n    .bill-page .bill-header-table th:nth-child(2){\r\n        text-align: right;\r\n        padding:.8rem;\r\n    }\r\n    \r\n    .bill-page .bill-summary-table{\r\n        width:100%;\r\n    }\r\n    .bill-page .bill-summary-table tr,\r\n    .bill-page .bill-summary-table td,\r\n    .bill-page .bill-summary-table th{\r\n        border:none;  \r\n        width:25%;  \r\n    }\r\n    .bill-page .bill-header-table th,\r\n    .bill-page .bill-header-table td{\r\n        border:none;  \r\n        width:25%;  \r\n    }\r\n    .bill-page .bill-footer-table th,\r\n    .bill-page .bill-footer-table td{\r\n        border:none;  \r\n        width:25%;  \r\n    }\r\n    \r\n    .bill-page .bill-summary-table thead  tr{\r\n        border-bottom:dashed 1px #000;  \r\n    }\r\n    .bill-page .bill-summary-table thead th{\r\n        text-align:left;\r\n        padding:10px 0px;\r\n    } \r\n    .bill-page table  tr.bordered-row{\r\n        border-top:dashed 1px #000;  \r\n    }\r\n    .bill-page table tr.bordered-bottom{\r\n        border-bottom:dashed 1px #000;  \r\n    }\r\n    .bill-page table  tr.bordered-row th,\r\n    .bill-page table tr.bordered-row td{\r\n        padding:10px 0px;\r\n    }\r\n    .bill-page table  .quoted-text th{\r\n        text-align:center;\r\n        padding:5px;\r\n    }\r\n    .bill-page .lg-font{\r\n        font-size:1.2rem;\r\n    }  \r\n}", ""]);

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

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/src/components/InputSuggestion/input-suggestion.css":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/src/components/InputSuggestion/input-suggestion.css ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom-input-suggestion-container{\r\n    position: absolute;\r\n    background-color: #f0f0f0;\r\n    width: 100%;\r\n    top: 100%;\r\n    z-index: 100;\r\n    border:solid 1px #ddd;\r\n    max-height: 40vh;\r\n    overflow: auto;   \r\n}\r\n\r\n.custom-input-suggestion-container .input-suggestions{\r\n    list-style: none;\r\n    overflow: auto;\r\n    padding: 5px;    \r\n}\r\n\r\n.custom-input-suggestion-container .input-suggestions li{\r\n    padding:5px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    color:#000; \r\n}\r\n.custom-input-suggestion-container .input-suggestions li.active{\r\n    background-color: #6495ed;\r\n    white-space: break-spaces;\r\n    color:#fff;    \r\n}\r\n.custom-input-suggestion-container .input-suggestions li:not(.empty){\r\n    cursor:pointer;\r\n}\r\n.custom-input-suggestion-container .input-suggestions li.empty{\r\n    text-align:center;\r\n    color:#848484;\r\n}", ""]);

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
        onMouseDown: function onMouseDown() {
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

/***/ "./resources/js/src/components/Bill/A4Bill.js":
/*!****************************************************!*\
  !*** ./resources/js/src/components/Bill/A4Bill.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return A4Bill; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _a4_bill_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./a4-bill.css */ "./resources/js/src/components/Bill/a4-bill.css");
/* harmony import */ var _a4_bill_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_a4_bill_css__WEBPACK_IMPORTED_MODULE_1__);


function A4Bill(props) {
  var totalQuantity = 0;
  var totalIGST = 0;
  var totalSGST = 0;
  var totalCGST = 0;
  var totalDiscount = 0;
  var totalGrossValue = 0;
  var netAmount = 0;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bill-page-a4",
    id: "a4Bill",
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bill-a4-page-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "bill-table",
    width: "100%",
    style: {
      border: "solid 1px #000",
      margin: "20px 10px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    className: "bill-header-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "company-address-col"
  }, props.data.bill_setting.vendor_logo ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "company-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.data.bill_setting.vendor_logo,
    className: "com-logo"
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "company-address"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, props.data.bill_setting.vendor_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "bill-address"
  }, props.data.bill_setting.address_1), props.data.bill_setting.address_2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "bill-address"
  }, props.data.bill_setting.address_2) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "bill-contact-no"
  }, "PH : ", props.data.bill_setting.phone_1 && props.data.bill_setting.phone_2 ? props.data.bill_setting.phone_1 + ", " + props.data.bill_setting.phone_2 : props.data.bill_setting.phone_1), props.data.bill_setting.email ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "bill-email"
  }, "EMAIL : ", props.data.bill_setting.email) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null), props.data.bill_setting.gstin ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "bill-gst-no"
  }, "GSTIN : ", props.data.bill_setting.gstin) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "buyer-address-col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Buyer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "buyer-name"
  }, "Mac Support"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "buyer-address"
  }, "RG Complex, 2nd Floor, TelunguPalayam Pirivu"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "buyer-city"
  }, "Coimbatore"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "buyer-state"
  }, "Tamilnadu"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "buyer-country"
  }, "India"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "buyer-contact"
  }, "PH : +91 9876543210"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "buyer-email"
  }, "EMAIL : test@gmail.com"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "buyer-email"
  }, "GSTIN : TESTGSTYI666546"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "no-pad",
    valign: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table-data",
    width: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Invoice No : ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "TEST123 "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Date : ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "27 Oct 2020"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    className: "bill-a4-items"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    colSpan: 2,
    style: {
      padding: "0px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "items-list-tbl",
    width: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    style: {
      width: "20px",
      borderLeft: "none"
    }
  }, "Sl.No"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Desc. Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "HSN / SAC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "GST Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    style: {
      borderRight: "none"
    }
  }, "Amount"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
    style: {
      borderBottom: "dashed 1px #000"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "K7 Total Secutiry 1 User"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "312123"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "18 %"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "1 No.s"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "296.51"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    style: {
      textAlign: "right"
    }
  }, "296.51")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Laptop 1 LED Screen"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "85468"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "18 %"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "1 No.s"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "3500.50"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    style: {
      textAlign: "right"
    }
  }, "3500.50"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tfoot", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Discount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "3000")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "CGST"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "300")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "SGST"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "300")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    className: "bordered-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "\u20B9 6000")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    className: "amount-in-words-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    colSpan: 2,
    style: {
      borderTop: "solid 1px #000",
      padding: "0px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label-text"
  }, "Amount Chargeable (in words)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label-bold"
  }, "Six Thousand Rupees Only"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    className: "items-tax-table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    colSpan: 2,
    style: {
      padding: "0px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    width: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    style: {
      textAlign: "center"
    }
  }, "HSN / SAC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    style: {
      textAlign: "center"
    }
  }, "Taxable Value"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "tax-head-tbl",
    width: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    colSpan: 2,
    style: {
      textAlign: "center",
      borderBottom: "solid 1px #000"
    }
  }, "CGST")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    style: {
      borderRight: "solid 1px #000"
    }
  }, "Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Amount"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "tax-head-tbl",
    width: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    colSpan: 2,
    style: {
      textAlign: "center",
      borderBottom: "solid 1px #000"
    }
  }, "SGST")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    style: {
      borderRight: "solid 1px #000"
    }
  }, "Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Amount"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "tax-head-tbl",
    width: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    colSpan: 2,
    style: {
      textAlign: "center",
      borderBottom: "solid 1px #000"
    }
  }, "IGST")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    style: {
      borderRight: "solid 1px #000"
    }
  }, "Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Amount"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    style: {
      textAlign: "center"
    }
  }, "Total Tax Amount"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "8568"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "296.55"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    width: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "9 %"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "26.70"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    width: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "9 %"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "26.70"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    width: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "9 %"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "26.70"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "54.5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "8568"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "296.55"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    width: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "9 %"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "26.70"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    width: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "9 %"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "26.70"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    width: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "9 %"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "26.70"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "54.5"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tfoot", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "3,808.5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    width: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "18 %"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "250.50"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    width: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "18 %"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "250.50"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    width: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "18 %"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "250.50"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "701.70")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    className: "amount-in-words-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    colSpan: 2,
    style: {
      borderTop: "solid 1px #000"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label-text"
  }, "Amount Chargeable (in words)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label-bold"
  }, "Six Thousand Rupees Only"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    className: "bill-declare-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("u", null, "Declaration"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We declare that this invoice shows the actual price of the goods described and that all particulars are true and correct.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    className: "signature-row",
    style: {
      borderTop: "solid 1px #000"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    valign: "top",
    style: {
      height: "100px",
      textAlign: "left",
      borderRight: "solid 1px #000"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Customer's Seal and Signature")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    valign: "bottom",
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Authorised Signature")))))));
}

/***/ }),

/***/ "./resources/js/src/components/Bill/ThermalBill.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/components/Bill/ThermalBill.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ThermalBill; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _thermal_bill_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thermal-bill.css */ "./resources/js/src/components/Bill/thermal-bill.css");
/* harmony import */ var _thermal_bill_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_thermal_bill_css__WEBPACK_IMPORTED_MODULE_1__);


function ThermalBill(props) {
  var totalQuantity = 0;
  var totalIGST = 0;
  var totalSGST = 0;
  var totalCGST = 0;
  var totalDiscount = 0;
  var totalGrossValue = 0;
  var netAmount = 0;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bill-page",
    id: "thermalBill"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bill-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "page-header"
  }, props.data.bill_setting.vendor_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "bill-address"
  }, props.data.bill_setting.address_1), props.data.bill_setting.address_2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "bill-address"
  }, props.data.bill_setting.address_2) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "bill-contact-no"
  }, "PHONE : ", props.data.bill_setting.phone_1 && props.data.bill_setting.phone_2 ? props.data.bill_setting.phone_1 + ", " + props.data.bill_setting.phone_2 : props.data.bill_setting.phone_1), props.data.bill_setting.gstin ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "bill-gst-no"
  }, "GSTIN : ", props.data.bill_setting.gstin) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bill-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "header-row"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "bill-header-table",
    width: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "BILL NO : ", props.data.bill_no), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "DATE : ", props.data.bill_date)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "header-row"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "bill-summary-table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Qty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Amt"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, props.data.billItems.map(function (value, index) {
    value.quantity = parseFloat(value.quantity);
    totalQuantity += value.quantity;
    value.selling_price = parseFloat(value.selling_price);
    var grossAmount = value.quantity * value.selling_price;
    grossAmount = Math.ceil(grossAmount * 100) / 100;
    totalGrossValue += grossAmount;
    value.discount_percentage = value.discount_percentage ? parseFloat(value.discount_percentage) : 0;
    var discount = grossAmount * (value.discount_percentage / 100);
    discount = Math.ceil(discount * 100) / 100;
    totalDiscount += discount;
    var unitAmount = grossAmount - discount;
    value.igst = value.igst ? parseFloat(value.igst) : 0;
    value.sgst = value.sgst ? parseFloat(value.sgst) : 0;
    value.cgst = value.cgst ? parseFloat(value.cgst) : 0;

    if (props.data.gstType == "sgst") {
      var sgstValue = unitAmount * (value.sgst / 100);
      sgstValue = Math.ceil(sgstValue * 100) / 100;
      totalSGST += sgstValue;
      var cgstValue = unitAmount * (value.cgst / 100);
      cgstValue = Math.ceil(cgstValue * 100) / 100;
      totalCGST += cgstValue;
    } else {
      var igstValue = unitAmount * (value.igst / 100);
      igstValue = Math.ceil(igstValue * 100) / 100;
      totalIGST += igstValue;
    }

    if (props.data.billItems.length == index + 1) {
      netAmount = totalGrossValue - totalDiscount + (totalSGST + totalCGST + totalSGST);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, value.product_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, value.quantity + " " + value.unit_code), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, value.selling_price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, grossAmount.toFixed(2)));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "header-row"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "bill-footer-table",
    width: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tfoot", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "SUB TOTAL :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, totalQuantity), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, totalGrossValue.toFixed(2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    className: "bordered-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "DISCOUNT :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, totalDiscount.toFixed(2))), totalSGST ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    className: "bordered-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "SGST:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, totalSGST.toFixed(2))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null), totalCGST ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    className: "bordered-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "CGST:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, totalCGST.toFixed(2))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null), totalIGST ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    className: "bordered-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "IGST:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, totalIGST.toFixed(2))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    className: "bordered-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "NET AMNT:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.data.totalNetAmount)), props.data.roundOff != props.data.totalNetAmount ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    className: "bordered-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "RND OF:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.data.roundOff)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null), props.data.checkOut.payment_option ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    className: "bordered-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "PAY TYPE :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, props.data.checkOut.payment_option))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null), props.data.checkOut.paid_by_cash ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    className: "bordered-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "PAID :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, props.data.checkOut.paid_by_cash))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null), props.data.checkOut.remain_balance ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    className: "bordered-row bordered-bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "BALANCE :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, props.data.checkOut.remain_balance))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    className: "quoted-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    colSpan: "4"
  }, "Thankyou! hava a nice day."))))));
}

/***/ }),

/***/ "./resources/js/src/components/Bill/a4-bill.css":
/*!******************************************************!*\
  !*** ./resources/js/src/components/Bill/a4-bill.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/postcss-loader/src??ref--6-2!./a4-bill.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/src/components/Bill/a4-bill.css");

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

/***/ "./resources/js/src/components/Bill/thermal-bill.css":
/*!***********************************************************!*\
  !*** ./resources/js/src/components/Bill/thermal-bill.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/postcss-loader/src??ref--6-2!./thermal-bill.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/src/components/Bill/thermal-bill.css");

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
/* harmony import */ var _InputSuggestion_InputSuggestion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../InputSuggestion/InputSuggestion */ "./resources/js/src/components/InputSuggestion/InputSuggestion.js");
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
        props.selectCustomer(props.inputs);
      } else {
        document.getElementById('modalCustomerName').classList.add("is-invalid");
        document.getElementById('modalCustomerName').nextSibling.innerText = json.data.message;
      }
    })["catch"](function (error) {
      hideLoader = true;

      if (error) {
        console.log(error);
      }
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

  for (var i = 0; i < errors.length; i++) {
    errors[i].classList.remove("is-invalid");
    errors[i].nextSibling.innerText = "";
  }
}

var CustomerModal = /*#__PURE__*/function (_Component) {
  _inherits(CustomerModal, _Component);

  var _super = _createSuper(CustomerModal);

  function CustomerModal(props) {
    var _this;

    _classCallCheck(this, CustomerModal);

    _this = _super.call(this, props);
    _this.state = {
      user: props.userData,
      isLoggedIn: props.userIsLoggedIn,
      customerSearch: {
        show: false,
        value: "",
        suggestions: [],
        activeIndex: 0
      }
    };
    _this.keyDownCustomerSearch = _this.keyDownCustomerSearch.bind(_assertThisInitialized(_this));
    _this.onChangeCustomerSearch = _this.onChangeCustomerSearch.bind(_assertThisInitialized(_this));
    _this.onClickCustomerSuggestion = _this.onClickCustomerSuggestion.bind(_assertThisInitialized(_this));
    _this.onBlurCustomerSearch = _this.onBlurCustomerSearch.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CustomerModal, [{
    key: "keyDownCustomerSearch",
    value: function keyDownCustomerSearch(e) {
      var customerSearchState = this.state.customerSearch;
      var index = customerSearchState.activeIndex;

      if (e.keyCode == 38 || e.key == "ArrowUp" || e.code == "ArrowUp") {
        // Up Arrow
        if (index > 0) {
          customerSearchState.activeIndex = index - 1;
        }

        this.setState({
          customerSearch: customerSearchState
        });
        e.target.nextSibling.nextSibling.querySelector('li.active').scrollIntoView(false);
      } else if (e.keyCode == 40 || e.key == "ArrowDown" || e.code == "ArrowDown") {
        // Down Arrow
        if (index < customerSearchState.suggestions.length - 1) {
          customerSearchState.activeIndex = index + 1;
        }

        this.setState({
          customerSearch: customerSearchState
        });
        e.target.nextSibling.nextSibling.querySelector('li.active').scrollIntoView(false);
      } else if (e.key === "Enter" || e.keyCode === 13 || e.code == "Enter" || e.key === "Tab" || e.keyCode === 9 || e.code == "Tab") {
        var _customerSearchState = this.state.customerSearch;
        var suggestion = _customerSearchState.suggestions[index];

        if (suggestion) {
          _customerSearchState.value = suggestion['suggestion_label'];
          _customerSearchState.show = false;
          this.props.updateInput("id", suggestion['id']);
          this.props.updateInput("name", suggestion['name']);
          this.props.updateInput("mobile_number", suggestion['mobile_number']);
          this.props.updateInput("contact_number", suggestion['contact_number']);
          this.props.updateInput("address", suggestion['address']);
          this.props.updateInput("city", suggestion['city']);
          this.props.updateInput("state_id", suggestion['state_id']);
          this.props.updateInput("country_id", suggestion['country_id']);
          this.props.updateInput("email", suggestion['email']);
          this.props.updateInput("gstin", suggestion['gstin']);
          this.setState({
            customerSearch: _customerSearchState
          });
          this.props.selectCustomer(suggestion);
        }
      }
    }
  }, {
    key: "onChangeCustomerSearch",
    value: function onChangeCustomerSearch(e) {
      var _this2 = this;

      var value = e.target.value;
      this.props.updateInput(e.target.name, value);
      this.props.selectCustomer(null);
      var customerSearchState = this.state.customerSearch;
      customerSearchState.value = value;
      customerSearchState.show = value != "" ? true : false;
      this.setState({
        customerSearch: customerSearchState
      });

      if (value != "") {
        var request = {
          method: 'post',
          url: _Utils__WEBPACK_IMPORTED_MODULE_2__["apiRoutes"].customerSearch,
          data: {
            search: value
          }
        };
        axios(request).then(function (response) {
          return response;
        }).then(function (json) {
          var customerSearchState = _this2.state.customerSearch;
          customerSearchState.activeIndex = 0;
          customerSearchState.suggestions = json.data.data;

          _this2.setState({
            customerSearch: customerSearchState
          });
        })["catch"](function (error) {
          console.log(error);
        });
      }
    }
  }, {
    key: "onClickCustomerSuggestion",
    value: function onClickCustomerSuggestion(index, item, arr) {
      var customerSearchState = this.state.customerSearch;
      customerSearchState.value = item.suggestion_label;
      customerSearchState.show = false;
      this.props.updateInput("name", item.name);
      this.props.updateInput("id", item.id);
      this.props.updateInput("mobile_number", item.mobile_number);
      this.props.updateInput("contact_number", item.contact_number);
      this.props.updateInput("address", item['address']);
      this.props.updateInput("city", item['city']);
      this.props.updateInput("state_id", item['state_id']);
      this.props.updateInput("country_id", item['country_id']);
      this.props.updateInput("email", item['email']);
      this.props.updateInput("gstin", item['gstin']);
      this.setState({
        customerSearch: customerSearchState
      });
      this.props.selectCustomer(item);
    }
  }, {
    key: "onBlurCustomerSearch",
    value: function onBlurCustomerSearch(e) {
      var customerSearchState = this.state.customerSearch;
      customerSearchState.show = false;
      this.setState({
        customerSearch: customerSearchState
      });
    }
  }, {
    key: "customerRenderSuggestions",
    value: function customerRenderSuggestions(index, item, arr) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, item.suggestion_label);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var props = this.props;
      var inputs = this.props.data.inputs;
      var customerSearch = this.state.customerSearch;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
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
        keyboard: false,
        className: "modal-sm-form"
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        controlId: "modalCustomerName"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "Customer / Company Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
        type: "text",
        placeholder: "Customer / Company Name",
        name: "name",
        autoComplete: "Off",
        onKeyDown: this.keyDownCustomerSearch,
        value: inputs.name ? inputs.name : "",
        onChange: function onChange(e) {
          _this3.onChangeCustomerSearch(e, props);
        },
        onBlur: this.onBlurCustomerSearch,
        size: "sm"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
        type: "invalid"
      }), customerSearch.show ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InputSuggestion_InputSuggestion__WEBPACK_IMPORTED_MODULE_3__["default"], {
        suggestions: customerSearch.suggestions,
        activeIndex: customerSearch.activeIndex,
        onClickSuggestion: this.onClickCustomerSuggestion,
        renderSuggestion: this.customerRenderSuggestions
      }) : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "hidden",
        value: "1",
        name: "is_active"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "hidden",
        value: inputs.id ? inputs.id : "",
        name: "id",
        id: "modalCustomerId"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        controlId: "modalMobileNo"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "Mobile No"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
        type: "text",
        size: "sm",
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
        size: "sm",
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
        size: "sm",
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
        size: "sm",
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
        size: "sm",
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
        size: "sm",
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
        size: "sm",
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
        size: "sm",
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
        size: "sm",
        type: "submit"
      }, "Submit "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "secondary",
        size: "sm",
        onClick: function onClick() {
          handleClose();
          props.onHide();
        },
        className: "close-modal-btn"
      }, "Close"))));
    }
  }]);

  return CustomerModal;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



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

/***/ "./resources/js/src/components/InputSuggestion/InputSuggestion.js":
/*!************************************************************************!*\
  !*** ./resources/js/src/components/InputSuggestion/InputSuggestion.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _input_suggestion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input-suggestion.css */ "./resources/js/src/components/InputSuggestion/input-suggestion.css");
/* harmony import */ var _input_suggestion_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_input_suggestion_css__WEBPACK_IMPORTED_MODULE_1__);
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




var InputSuggestion = /*#__PURE__*/function (_Component) {
  _inherits(InputSuggestion, _Component);

  var _super = _createSuper(InputSuggestion);

  function InputSuggestion(props) {
    var _this;

    _classCallCheck(this, InputSuggestion);

    _this = _super.call(this, props);
    _this.state = {
      suggestions: []
    };
    return _this;
  }

  _createClass(InputSuggestion, [{
    key: "suggestionLists",
    value: function suggestionLists(suggestions, activeIndex, onClickSuggestion, renderSuggestion) {
      if (suggestions.length == 0) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "empty"
        }, "No Result Found");
      } else {
        return suggestions.map(function (value, index, array) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            onMouseDown: function onMouseDown() {
              return onClickSuggestion(index, value, array);
            },
            key: index,
            className: activeIndex == index ? "active" : "",
            title: value.suggestion_label
          }, renderSuggestion(index, value, array));
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          suggestions = _this$props.suggestions,
          activeIndex = _this$props.activeIndex,
          onClickSuggestion = _this$props.onClickSuggestion,
          renderSuggestion = _this$props.renderSuggestion;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "custom-input-suggestion-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "input-suggestions"
      }, this.suggestionLists(suggestions, activeIndex, onClickSuggestion, renderSuggestion)));
    }
  }]);

  return InputSuggestion;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (InputSuggestion);

/***/ }),

/***/ "./resources/js/src/components/InputSuggestion/input-suggestion.css":
/*!**************************************************************************!*\
  !*** ./resources/js/src/components/InputSuggestion/input-suggestion.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/postcss-loader/src??ref--6-2!./input-suggestion.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/src/components/InputSuggestion/input-suggestion.css");

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

/***/ "./resources/js/src/components/Product/ProductModal.js":
/*!*************************************************************!*\
  !*** ./resources/js/src/components/Product/ProductModal.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utils */ "./resources/js/src/Utils.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var hideLoader = true;

function handleSubmit(e, props) {
  e.preventDefault();
  var name = document.getElementById('modalProductName').value;
  var brand = document.getElementById('modalProductBrand').value;
  var category = document.getElementById('modalProductCategory').value;
  var subCategory = document.getElementById('modalProductSubCategory').value;
  var unit = document.getElementById('modalProductUnit').value;
  var costPrice = document.getElementById('modalProductCostPrice').value;
  var sellingPrice = document.getElementById('modalProductSellingPrice').value;
  var gstTax = document.getElementById('modalProductGST').value;
  var validation = true;

  if (name == "") {
    validation = false;
    document.getElementById('modalProductName').classList.add("is-invalid");
    document.getElementById('modalProductName').nextSibling.innerText = 'Name is required!';
  }

  if (brand == "") {
    validation = false;
    document.getElementById('modalProductBrand').classList.add("is-invalid");
    document.getElementById('modalProductBrand').nextSibling.innerText = 'Brand is required!';
  }

  if (category == "") {
    validation = false;
    document.getElementById('modalProductCategory').classList.add("is-invalid");
    document.getElementById('modalProductCategory').nextSibling.innerText = 'Category is required!';
  }
  /*if(subCategory==""){
    validation=false;
    document.getElementById('modalProductSubCategory').classList.add("is-invalid");
    document.getElementById('modalProductSubCategory').nextSibling.innerText='Sub Category is required!';    
  }*/


  if (unit == "") {
    validation = false;
    document.getElementById('modalProductUnit').classList.add("is-invalid");
    document.getElementById('modalProductUnit').nextSibling.innerText = 'Unit is required!';
  }

  if (costPrice == "") {
    validation = false;
    document.getElementById('modalProductCostPrice').classList.add("is-invalid");
    document.getElementById('modalProductCostPrice').nextSibling.innerText = 'Cost Price is required!';
  }

  if (sellingPrice == "") {
    validation = false;
    document.getElementById('modalProductSellingPrice').classList.add("is-invalid");
    document.getElementById('modalProductSellingPrice').nextSibling.innerText = 'Cost Price is required!';
  }

  if (validation) {
    var errors = document.querySelectorAll('#productModalForm .is-invalid');

    for (var i = 0; i < errors.length; i++) {
      errors[i].classList.remove("is-invalid");
      errors[i].nextSibling.innerText = "";
    }

    var formData = new FormData(e.target);
    var request = {
      method: 'post',
      url: _Utils__WEBPACK_IMPORTED_MODULE_2__["apiRoutes"].product,
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
        var error = json.data.validation_error;

        for (var item in error) {
          var element = document.querySelector('#productModalForm *[name="' + item + '"]');
          element.classList.add("is-invalid");
          element.nextSibling.innerText = error[item];
        }
      } else if (json.data.success) {
        props.onHide();
        props.pageAlert({
          type: 1,
          header: "Success!",
          message: json.data.message
        });
      } else {
        props.pageAlert({
          type: 0,
          header: "Error!",
          message: json.data.message
        });
      }
    })["catch"](function (error) {
      hideLoader = true;

      if (error) {
        console.log(error);
      }
    });
  }
}

function handleClose() {
  var errors = document.querySelectorAll('#productModalForm .is-invalid');

  for (var i = 0; i < errors.length; i++) {
    errors[i].classList.remove("is-invalid");
    errors[i].nextSibling.innerText = "";
  }
}

function handleNumerics(e) {
  if (/[^0-9 ]/g.test(event.key)) {
    e.preventDefault();
  }
}

function ProductModal(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      brands = _useState2[0],
      setBrands = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      categories = _useState4[0],
      setCategories = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState6 = _slicedToArray(_useState5, 2),
      subCategories = _useState6[0],
      setSubCategories = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState8 = _slicedToArray(_useState7, 2),
      units = _useState8[0],
      setUnits = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState10 = _slicedToArray(_useState9, 2),
      gstLists = _useState10[0],
      setGstLists = _useState10[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var request = {
      method: 'get',
      url: _Utils__WEBPACK_IMPORTED_MODULE_2__["apiRoutes"].brands
    };
    axios(request).then(function (response) {
      return response;
    }).then(function (json) {
      setBrands(json.data.data);
    })["catch"](function (error) {
      console.log(error);
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var request = {
      method: 'get',
      url: _Utils__WEBPACK_IMPORTED_MODULE_2__["apiRoutes"].productCategories
    };
    axios(request).then(function (response) {
      return response;
    }).then(function (json) {
      setCategories(json.data.data);
    })["catch"](function (error) {
      console.log(error);
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var request = {
      method: 'get',
      url: _Utils__WEBPACK_IMPORTED_MODULE_2__["apiRoutes"].productSubCategories
    };
    axios(request).then(function (response) {
      return response;
    }).then(function (json) {
      setSubCategories(json.data.data);
    })["catch"](function (error) {
      console.log(error);
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var request = {
      method: 'get',
      url: _Utils__WEBPACK_IMPORTED_MODULE_2__["apiRoutes"].units
    };
    axios(request).then(function (response) {
      return response;
    }).then(function (json) {
      setUnits(json.data.data);
    })["catch"](function (error) {
      console.log(error);
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var request = {
      method: 'get',
      url: _Utils__WEBPACK_IMPORTED_MODULE_2__["apiRoutes"].gstTaxes
    };
    axios(request).then(function (response) {
      return response;
    }).then(function (json) {
      setGstLists(json.data.data);
    })["catch"](function (error) {
      console.log(error);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    show: props.data.show,
    onHide: function onHide() {
      handleClose();
      props.onHide();
    },
    onShow: function onShow() {
      document.getElementById('modalProductName').focus();
    },
    backdrop: "static",
    size: "lg",
    keyboard: false,
    className: "modal-sm-form"
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Title, null, props.data.headerName ? props.data.headerName : "Product")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    id: "productModalForm",
    onSubmit: function onSubmit(e) {
      handleSubmit(e, props);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "modalProductName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "Product Name ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    size: "sm",
    placeholder: "Product Name",
    name: "name",
    value: props.inputs.name ? props.inputs.name : "",
    onChange: props.onChangeInput
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
    type: "invalid"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "hidden",
    value: "1",
    name: "is_active"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "hidden",
    value: props.inputs.id ? props.inputs.id : "",
    name: "id",
    id: "modalProductId"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "modalProductHsn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "Product HSN"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    size: "sm",
    placeholder: "Product HSN",
    name: "hsn",
    value: props.inputs.hsn ? props.inputs.hsn : "",
    onChange: props.onChangeInput
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
    type: "invalid"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "modalProductBarcode"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "Barcode"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    size: "sm",
    placeholder: "Barcode",
    name: "barcode",
    value: props.inputs.barcode ? props.inputs.barcode : "",
    onChange: props.onChangeInput
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
    type: "invalid"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "modalProductBarcodeType"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "Barcode Type "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "select",
    size: "sm",
    name: "barcode_type",
    onChange: props.onChangeInput,
    value: props.inputs.barcode_type ? props.inputs.barcode_type : "",
    custom: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "Own Barcode"
  }, "Own Barcode"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "Company Barcode"
  }, "Company Barcode")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
    type: "invalid"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "modalProductBrand"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "Brand ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "select",
    size: "sm",
    value: props.inputs.brand_id ? props.inputs.brand_id : "",
    name: "brand_id",
    onChange: props.onChangeInput,
    custom: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "Choose..."), brands.map(function (_ref, index) {
    var id = _ref.id,
        name = _ref.name;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: id,
      value: id
    }, name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
    type: "invalid"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "modalProductCategory"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "Category ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "select",
    size: "sm",
    value: props.inputs.category_id ? props.inputs.category_id : "",
    name: "category_id",
    onChange: props.onChangeInput,
    custom: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "Choose..."), categories.map(function (_ref2, index) {
    var id = _ref2.id,
        name = _ref2.name;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: id,
      value: id
    }, name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
    type: "invalid"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "modalProductSubCategory"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "Sub Category "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "select",
    size: "sm",
    value: props.inputs.sub_category_id ? props.inputs.sub_category_id : "",
    name: "sub_category_id",
    onChange: props.onChangeInput,
    custom: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "Choose..."), subCategories.map(function (_ref3, index) {
    var id = _ref3.id,
        name = _ref3.name;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: id,
      value: id
    }, name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
    type: "invalid"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "modalProductUnit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "Units ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "select",
    size: "sm",
    value: props.inputs.unit_id ? props.inputs.unit_id : "",
    name: "unit_id",
    onChange: props.onChangeInput,
    custom: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "Choose..."), units.map(function (_ref4, index) {
    var id = _ref4.id,
        name = _ref4.name;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: id,
      value: id
    }, name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
    type: "invalid"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "modalProductCostPrice"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "Cost Price ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    size: "sm",
    placeholder: "Product Cost Price",
    name: "cost_price",
    value: props.inputs.cost_price ? props.inputs.cost_price : "",
    onChange: props.onChangeInput,
    onKeyPress: handleNumerics
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
    type: "invalid"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "modalProductSellingPrice"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "Selling Price ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    size: "sm",
    placeholder: "Product Selling Price",
    name: "selling_price",
    value: props.inputs.selling_price ? props.inputs.selling_price : "",
    onChange: props.onChangeInput,
    onKeyPress: handleNumerics
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
    type: "invalid"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "modalProductGST"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "GST Tax"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "select",
    size: "sm",
    value: props.inputs.sales_gst_id ? props.inputs.sales_gst_id : "",
    name: "sales_gst_id",
    onChange: props.onChangeInput,
    custom: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "Choose..."), gstLists.map(function (_ref5, index) {
    var id = _ref5.id,
        name = _ref5.name;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: id,
      value: id
    }, name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
    type: "invalid"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    size: "sm",
    type: "submit"
  }, "Submit "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "secondary",
    size: "sm",
    onClick: function onClick() {
      handleClose();
      props.onHide();
    },
    className: "close-modal-btn"
  }, "Close"))));
}

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
/* harmony import */ var _InputSuggestion_InputSuggestion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../InputSuggestion/InputSuggestion */ "./resources/js/src/components/InputSuggestion/InputSuggestion.js");
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








var SideNav = /*#__PURE__*/function (_Component) {
  _inherits(SideNav, _Component);

  var _super = _createSuper(SideNav);

  function SideNav(props) {
    var _this;

    _classCallCheck(this, SideNav);

    _this = _super.call(this, props);
    _this.state = {
      user: props.userData,
      isLoggedIn: props.userIsLoggedIn
      /*customerSearch:{
           show:false,
           value:"",
           suggestions:[],
           activeIndex:0
       }*/

    }; //this.keyDownCustomerSearch=this.keyDownCustomerSearch.bind(this);
    //this.onChangeCustomerSearch=this.onChangeCustomerSearch.bind(this);      
    //this.onClickCustomerSuggestion=this.onClickCustomerSuggestion.bind(this); 
    //this.onBlurCustomerSearch=this.onBlurCustomerSearch.bind(this);

    _this.logOut = _Utils__WEBPACK_IMPORTED_MODULE_2__["logOut"].bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SideNav, [{
    key: "customerRenderSuggestions",
    value: function customerRenderSuggestions(index, item, arr) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, item.suggestion_label);
    }
    /*
    onClickCustomerSuggestion(index, item, arr){
       let customerSearchState=this.state.customerSearch;
       customerSearchState.value=item.suggestion_label;
       customerSearchState.show=false;       
       this.setState({customerSearch:customerSearchState});
       this.props.selectCustomer(item);
    }
      keyDownCustomerSearch(e){
        let value=e.target.value;         
        if(e.keyCode==38 || e.key=="ArrowUp" || e.code=="ArrowUp"){  // Up Arrow
            let customerSearchState=this.state.customerSearch;           
            if(customerSearchState.activeIndex<customerSearchState.suggestions.length){
                customerSearchState.activeIndex=customerSearchState.activeIndex++;
            }
            this.setState({customerSearch:customerSearchState});
        }else if(e.keyCode==40 || e.key=="ArrowDown" || e.code=="ArrowDown"){  // Down Arrow
            let customerSearchState=this.state.customerSearch;           
            if(customerSearchState.activeIndex<customerSearchState.suggestions.length){
                customerSearchState.activeIndex=customerSearchState.activeIndex--;
            }
            this.setState({customerSearch:customerSearchState});
        }else if(( (e.key==="Enter" || e.keyCode===13 || e.code=="Enter") || 
        (e.key==="Tab" || e.keyCode===9 || e.code=="Tab"))){
            let customerSearchState=this.state.customerSearch;
            let activeIndex=customerSearchState.activeIndex;
            let suggestion=customerSearchState.suggestions[activeIndex];
            if(suggestion){
                customerSearchState.value=suggestion['suggestion_label'];
                customerSearchState.show=false;       
                this.setState({customerSearch:customerSearchState});
            }           
            this.props.selectCustomer(customerSearchState.suggestions[activeIndex]);
        }         
    }
      onChangeCustomerSearch(e){
        let value=e.target.value;  
        let customerSearchState=this.state.customerSearch;
        customerSearchState.value=value;
        customerSearchState.show=(value!="")?true:false;       
        this.setState({customerSearch:customerSearchState});
        this.props.selectCustomer(null);
        if(value!=""){
            let request={ method: 'post', url: apiRoutes.customerSearch,data: {search: value} };       
            axios(request).then(response =>{ return response }).then(json => { 
                let customerSearchState=this.state.customerSearch;
                customerSearchState.suggestions=json.data.data;
                this.setState({customerSearch:customerSearchState});              
            }).catch(error=>{ 
                console.log(error);           
            });    
        }    
    }
      onBlurCustomerSearch(e){
        let customerSearchState=this.state.customerSearch;
        customerSearchState.show=false;       
        this.setState({customerSearch:customerSearchState});
    }*/

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          customerSearch = _this$props.customerSearch,
          keyDownCustomerSearch = _this$props.keyDownCustomerSearch,
          onChangeCustomerSearch = _this$props.onChangeCustomerSearch,
          onBlurCustomerSearch = _this$props.onBlurCustomerSearch,
          onClickCustomerSuggestion = _this$props.onClickCustomerSuggestion;
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
      })), "Stock :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, this.props.stock ? this.props.stock : null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        md: 3
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "nav-label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "lable-icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-shopping-cart"
      })), "Qty :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, this.props.quantity ? this.props.quantity : null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        md: 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
        placeholder: "Choose Customer",
        "aria-label": "Choose Customer",
        onKeyDown: keyDownCustomerSearch,
        value: customerSearch.value,
        onChange: onChangeCustomerSearch,
        onBlur: onBlurCustomerSearch
      }), customerSearch.show ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InputSuggestion_InputSuggestion__WEBPACK_IMPORTED_MODULE_5__["default"], {
        suggestions: customerSearch.suggestions,
        activeIndex: customerSearch.activeIndex,
        onClickSuggestion: onClickCustomerSuggestion,
        renderSuggestion: this.customerRenderSuggestions
      }) : "", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"].Append, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        className: "nav-cus-add",
        onClick: this.props.handleCustomerCommand
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-user-plus"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        className: "nav-cus-edit",
        onClick: function onClick(e) {
          var id = _this2.props.selectedCustomer.id;
          id = id ? id : null;

          _this2.props.handleCustomerCommand(id);
        }
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
/* harmony import */ var _components_Bill_ThermalBill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/Bill/ThermalBill */ "./resources/js/src/components/Bill/ThermalBill.js");
/* harmony import */ var _components_Bill_A4Bill__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/Bill/A4Bill */ "./resources/js/src/components/Bill/A4Bill.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _new_sale_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./new-sale.css */ "./resources/js/src/views/sale/NewSale/new-sale.css");
/* harmony import */ var _new_sale_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_new_sale_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../Utils */ "./resources/js/src/Utils.js");
/* harmony import */ var _components_Product_ProductModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/Product/ProductModal */ "./resources/js/src/components/Product/ProductModal.js");
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
    _this.newSale = _Utils__WEBPACK_IMPORTED_MODULE_12__["newSale"].bind(_assertThisInitialized(_this));
    _this.updateSummary = _this.updateSummary.bind(_assertThisInitialized(_this));
    _this.searchProducts = _Utils__WEBPACK_IMPORTED_MODULE_12__["searchProducts"].bind(_assertThisInitialized(_this));
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
    _this.updateCustomerModalInput = _this.updateCustomerModalInput.bind(_assertThisInitialized(_this));
    _this.closeProductSuggestion = _this.closeProductSuggestion.bind(_assertThisInitialized(_this));
    _this.selectCustomer = _this.selectCustomer.bind(_assertThisInitialized(_this));
    _this.keyDownCustomerSearch = _this.keyDownCustomerSearch.bind(_assertThisInitialized(_this));
    _this.onChangeCustomerSearch = _this.onChangeCustomerSearch.bind(_assertThisInitialized(_this));
    _this.onClickCustomerSuggestion = _this.onClickCustomerSuggestion.bind(_assertThisInitialized(_this));
    _this.onBlurCustomerSearch = _this.onBlurCustomerSearch.bind(_assertThisInitialized(_this));
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
        billNumber: "",
        billDate: "",
        bill_setting: {
          vendor_name: "CODESENSE SOFT SOLUTIONS PVT LTD.",
          address_1: "RG COMPLEX 2ND FLOOR, TELUNGUPALAYAM PIRIVU",
          address_2: "COIMBATORE - 641039., TAMILNADU",
          phone_1: "+91 95244 76114",
          phone_2: "+91 9944313212",
          gstin: null,
          quoted_text: "Thank You! have a nice day."
        },
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
        customerSearch: {
          show: false,
          value: "",
          suggestions: [],
          activeIndex: 0
        },
        productModal: {
          data: {
            show: false,
            headerName: "Product"
          },
          inputs: {}
        },
        checkoutModal: {
          show: false,
          inputs: {
            payment_option: "Cash"
          },
          onHide: this.handleCheckOutModelClose
        },
        printMode: "Thermal",
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
    key: "keyDownCustomerSearch",
    value: function keyDownCustomerSearch(e) {
      var value = e.target.value;
      var customerSearchState = this.state.customerSearch;
      var index = customerSearchState.activeIndex;

      if (e.keyCode == 38 || e.key == "ArrowUp" || e.code == "ArrowUp") {
        // Up Arrow
        if (index > 0) {
          customerSearchState.activeIndex = index - 1;
        }

        this.setState({
          customerSearch: customerSearchState
        });
        e.target.nextSibling.querySelector('li.active').scrollIntoView(false);
        e.preventDefault();
      } else if (e.keyCode == 40 || e.key == "ArrowDown" || e.code == "ArrowDown") {
        // Down Arrow
        if (index < customerSearchState.suggestions.length - 1) {
          customerSearchState.activeIndex = index + 1;
        }

        this.setState({
          customerSearch: customerSearchState
        });
        e.target.nextSibling.querySelector('li.active').scrollIntoView(false);
        e.preventDefault();
      } else if (e.key === "Enter" || e.keyCode === 13 || e.code == "Enter" || e.key === "Tab" || e.keyCode === 9 || e.code == "Tab") {
        var _customerSearchState = this.state.customerSearch;
        var activeIndex = _customerSearchState.activeIndex;
        var suggestion = _customerSearchState.suggestions[activeIndex];

        if (suggestion) {
          _customerSearchState.value = suggestion['suggestion_label'];
          _customerSearchState.show = false;
          this.setState({
            customerSearch: _customerSearchState
          });
        }

        this.selectCustomer(_customerSearchState.suggestions[activeIndex]);
        e.preventDefault();
      }
    }
  }, {
    key: "onChangeCustomerSearch",
    value: function onChangeCustomerSearch(e) {
      var _this2 = this;

      var value = e.target.value;
      var customerSearchState = this.state.customerSearch;
      customerSearchState.value = value;
      customerSearchState.show = value != "" ? true : false;
      this.setState({
        customerSearch: customerSearchState
      });
      this.selectCustomer(null);

      if (value != "") {
        var request = {
          method: 'post',
          url: _Utils__WEBPACK_IMPORTED_MODULE_12__["apiRoutes"].customerSearch,
          data: {
            search: value
          }
        };
        axios(request).then(function (response) {
          return response;
        }).then(function (json) {
          var customerSearchState = _this2.state.customerSearch;
          customerSearchState.activeIndex = 0;
          customerSearchState.suggestions = json.data.data;

          _this2.setState({
            customerSearch: customerSearchState
          });
        })["catch"](function (error) {
          console.log(error);
        });
      }
    }
  }, {
    key: "onClickCustomerSuggestion",
    value: function onClickCustomerSuggestion(index, item, arr) {
      var customerSearchState = this.state.customerSearch;
      customerSearchState.value = item.suggestion_label;
      customerSearchState.show = false;
      this.setState({
        customerSearch: customerSearchState
      });
      this.selectCustomer(item);
    }
  }, {
    key: "onBlurCustomerSearch",
    value: function onBlurCustomerSearch(e) {
      var customerSearchState = this.state.customerSearch;
      customerSearchState.show = false;
      this.setState({
        customerSearch: customerSearchState
      });
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
    key: "closeProductSuggestion",
    value: function closeProductSuggestion() {
      this.setState({
        visibleBarcodeSuggestion: false,
        visibleProductSuggestion: false
      });
    }
  }, {
    key: "selectCustomer",
    value: function selectCustomer(selectedCustomer) {
      var customerSearch = this.state.customerSearch;

      if (selectedCustomer) {
        customerSearch.value = selectedCustomer.suggestion_label;
      }

      this.setState({
        customer: selectedCustomer,
        customerSearch: customerSearch
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

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
        handleCustomerCommand: this.handleCustomerCommand,
        stock: 0,
        quantity: 0,
        customerSearch: this.state.customerSearch,
        selectedCustomer: this.state.customer,
        keyDownCustomerSearch: this.keyDownCustomerSearch,
        onClickCustomerSuggestion: this.onClickCustomerSuggestion,
        onChangeCustomerSearch: this.onChangeCustomerSearch,
        onBlurCustomerSearch: this.onBlurCustomerSearch,
        selectCustomer: this.selectCustomer
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sale-bill-container my-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Container"], {
        fluid: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
        className: "no-gutters"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        md: 9,
        lg: 10
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Toast_AppToast__WEBPACK_IMPORTED_MODULE_6__["default"], {
        onClose: this.closeAppToast,
        show: this.state.appToast.show,
        data: this.state.appToast.data,
        duration: 3000
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Card"], {
        className: "bill-entry-form-card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"], {
        className: "bill-form flex-wrap justify-content-center",
        id: "billEntryForm",
        inline: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], {
        className: "my-2 mr-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"].Prepend, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "lbl-input-group rounded-left"
      }, "Barcode")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["FormControl"], {
        id: "billFormBarcode",
        placeholder: "Barcode",
        name: "barcode",
        value: this.state.billForm.barcode ? this.state.billForm.barcode : "",
        autoComplete: "off",
        onKeyDown: this.getBarcodeSuggestions,
        onChange: this.billFormInputChange,
        onBlur: this.closeProductSuggestion
      }), this.state.visibleBarcodeSuggestion ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AutoSuggestion_AutoSuggestion__WEBPACK_IMPORTED_MODULE_7__["default"], {
        activeIndex: this.state.productSuggestIndex,
        suggestions: this.state.productSuggestions,
        handleSetSuggestion: this.completeBillFormSugesstion
      }) : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], {
        className: "my-2 mr-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"].Prepend, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "lbl-input-group rounded-left"
      }, "Product")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["FormControl"], {
        id: "billFormProduct",
        placeholder: "Product Name",
        name: "product_name",
        value: this.state.billForm.product_name ? this.state.billForm.product_name : "",
        autoComplete: "off",
        onKeyDown: this.getProductSuggestions,
        onChange: this.billFormInputChange,
        onBlur: this.closeProductSuggestion
      }), this.state.visibleProductSuggestion ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AutoSuggestion_AutoSuggestion__WEBPACK_IMPORTED_MODULE_7__["default"], {
        activeIndex: this.state.productSuggestIndex,
        suggestions: this.state.productSuggestions,
        handleSetSuggestion: this.completeBillFormSugesstion
      }) : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], {
        className: "my-2 mr-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"].Prepend, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "lbl-input-group rounded-left"
      }, "Qty")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["FormControl"], {
        id: "billFormQuantity",
        className: "qty-input",
        placeholder: "Quantity",
        name: "quantity",
        value: this.state.billForm.quantity ? this.state.billForm.quantity : "",
        onKeyPress: this.handleKeyPressFormInput,
        onChange: this.billFormInputChange,
        onBlur: this.handleBlurFormInput
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], {
        className: "my-2 mr-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"].Prepend, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "lbl-input-group rounded-left"
      }, "Dis(%).")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["FormControl"], {
        id: "billFormDiscount",
        className: "disc-input",
        placeholder: "Discount",
        name: "discount",
        value: this.state.billForm.discount ? this.state.billForm.discount : "",
        onKeyPress: this.handleKeyPressFormInput,
        onChange: this.billFormInputChange,
        onBlur: this.handleBlurFormInput
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], {
        className: "my-2 mr-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"].Prepend, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "lbl-input-group rounded-left"
      }, "S.Price")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["FormControl"], {
        id: "billFormSellingPrice",
        className: "sprice-input",
        placeholder: "S.Price",
        name: "selling_price",
        value: this.state.billForm.selling_price ? this.state.billForm.selling_price : "",
        onKeyPress: this.handleKeyPressFormInput,
        onChange: this.billFormInputChange,
        onBlur: this.handleBlurFormInput
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], {
        className: "my-2 mr-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"].Prepend, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "lbl-input-group rounded-left"
      }, "Tax")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Control, {
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
      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Card"], {
        className: "bill-entry-form-card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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

        if (_this3.state.currentTaxMode == "sgst") {
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

        if (_this3.state.billItems.length == index + 1) {
          totalNetAmount = totalGrossValue - totalDiscount;

          if (_this3.state.currentTaxMode == "sgst") {
            totalNetAmount = totalNetAmount + (totalSGST + totalCGST);
          } else if (_this3.state.currentTaxMode == "igst") {
            totalNetAmount = totalNetAmount + totalIGST;
          }

          roundOff = totalNetAmount.round();
          _this3.totalGrossValue = totalGrossValue;
          _this3.totalDiscount = totalDiscount;
          _this3.totalSGST = totalSGST;
          _this3.totalCGST = totalCGST;
          _this3.totalIGST = totalIGST;
          _this3.totalNetAmount = totalNetAmount;
          _this3.roundOff = roundOff;
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          key: indexVal,
          "data-key": indexVal
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, indexVal + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, value.barcode), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, value.product_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          contentEditable: true,
          suppressContentEditableWarning: true,
          onKeyPress: function onKeyPress(event) {
            _this3.changeBillTable(event, indexVal, 'quantity');
          },
          onBlur: function onBlur(event) {
            _this3.handleTableColumnChange(event, indexVal, 'quantity');
          }
        }, value.quantity), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          contentEditable: true,
          suppressContentEditableWarning: true,
          onKeyPress: function onKeyPress(event) {
            _this3.changeBillTable(event, indexVal, 'discount_percentage');
          },
          onBlur: function onBlur(event) {
            _this3.handleTableColumnChange(event, indexVal, 'discount_percentage');
          }
        }, value.discount_percentage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, unitAmount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Control, {
          as: "select",
          className: "item-gst-tax",
          custom: true,
          value: value.sales_gst_tax_id,
          onChange: function onChange(e) {
            _this3.updateBillItemGst(e, indexVal);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: ""
        }, "NA"), _this3.state.gstTaxList.map(function (_ref2, index) {
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
            _this3.removeBillItem(indexVal);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fas fa-trash-alt"
        }))));
      }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        md: 3,
        lg: 2
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Card"], {
        className: "bill-summary-card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "card-title"
      }, "Bill Details")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
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
      }, roundOff))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        sm: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "key-map-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "key-map",
        onClick: function onClick() {
          return _this3.handlePrintCommand("Thermal");
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "key"
      }, "F2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text"
      }, "Thermal Bill")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "key-map",
        onClick: function onClick() {
          return _this3.handlePrintCommand("A4");
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "key"
      }, "F4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text"
      }, "A4 Bill")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "key-map",
        onClick: function onClick() {
          return _this3.handleCustomerCommand();
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "key"
      }, "Alt+C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text"
      }, "Add Customer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "key-map",
        onClick: function onClick() {
          return _this3.handleProductCommand().bind(_this3);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "key"
      }, "Alt+A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text"
      }, "Add Product")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "key-map",
        onClick: function onClick(e) {
          window.open(_Utils__WEBPACK_IMPORTED_MODULE_12__["appRoutes"].newSale);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "key"
      }, "Alt+H"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text"
      }, "Hold"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Bill_A4Bill__WEBPACK_IMPORTED_MODULE_9__["default"], {
        data: _objectSpread(_objectSpread({}, this.state.summary), {}, {
          bill_setting: this.state.bill_setting,
          bill_no: this.state.billNumber,
          bill_date: this.state.billDate,
          gstType: this.state.currentTaxMode,
          checkOut: this.state.checkoutModal.inputs,
          billItems: this.state.billItems
        })
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Customer_CustomerModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
        data: this.state.customerModal,
        stateLists: this.state.states,
        countryLists: this.state.countries,
        onHide: function onHide() {
          _this3.setState(function (prev) {
            var customerModal = prev.customerModal;
            customerModal.show = false;
            customerModal.inputs = {};
            return {
              customerModal: customerModal
            };
          });
        },
        updateInputs: function updateInputs(e) {
          return _this3.updateCustomerModalInputs(e);
        },
        updateInput: function updateInput(name, value) {
          return _this3.updateCustomerModalInput(name, value);
        },
        pageAlert: this.pageAlert,
        customerSearch: this.state.customerSearch,
        keyDownCustomerSearch: this.keyDownCustomerSearch,
        onClickCustomerSuggestion: this.onClickCustomerSuggestion,
        onBlurCustomerSearch: this.onBlurCustomerSearch,
        selectCustomer: this.selectCustomer
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Product_ProductModal__WEBPACK_IMPORTED_MODULE_13__["default"], {
        data: this.state.productModal.data,
        onHide: this.onHideProductModal.bind(this),
        onChangeInput: this.onChangeProductModal.bind(this),
        inputs: this.state.productModal.inputs,
        pageAlert: this.pageAlert
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Modal"], {
        className: "modal-check-out",
        show: this.state.checkoutModal.show,
        onHide: this.handleCheckOutModelClose,
        onEntered: function onEntered() {
          document.getElementById('checkoutPaidCash').focus();
        },
        backdrop: "static",
        keyboard: false
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Modal"].Header, {
        closeButton: false
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Modal"].Title, null, "Check Out Product")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Modal"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Tab"].Container, {
        id: "payment-options",
        activeKey: this.state.checkoutModal.inputs.payment_option
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        sm: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Nav"], {
        variant: "pills",
        className: "nav-fill bordered-tab"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Nav"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Nav"].Link, {
        className: "theme-active-btn",
        onClick: function onClick() {
          _this3.setCheckOutPaymentOption("Cash");
        },
        eventKey: "Cash"
      }, "Cash")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Nav"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Nav"].Link, {
        className: "theme-active-btn",
        onClick: function onClick() {
          _this3.setCheckOutPaymentOption("Card");
        },
        eventKey: "Card"
      }, "Card")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        sm: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Tab"].Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Tab"].Pane, {
        eventKey: "Cash",
        onEntered: function onEntered() {
          return document.getElementById('checkoutPaidCash').focus();
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "py-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
        controlId: "checkoutPaidCash"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Label, null, "Paid By Cash"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Control, {
        type: "text",
        placeholder: "Cash",
        name: "paid_by_cash",
        value: this.state.checkoutModal.inputs.paid_by_cash ? this.state.checkoutModal.inputs.paid_by_cash : "",
        onChange: this.changeCheckOutModal,
        onKeyDown: this.handleKeyPressCheckModal.bind(this),
        onKeyPress: this.preventFloatValue
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
        controlId: "checkoutRemainCash"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Label, null, "Remaining Balance"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Control, {
        type: "text",
        placeholder: "Balance",
        name: "remain_balance",
        value: this.state.checkoutModal.inputs.remain_balance ? this.state.checkoutModal.inputs.remain_balance : "",
        onChange: this.changeCheckOutModal,
        disabled: true
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Tab"].Pane, {
        eventKey: "Card",
        onEntered: function onEntered() {
          return document.getElementById('checkoutCardType').focus();
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "py-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
        controlId: "checkoutCardType"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Label, null, "Card Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Control, {
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
      }, "Others"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
        controlId: "checkoutCardNo"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Label, null, "Card No"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Control, {
        type: "text",
        placeholder: "Card No",
        name: "card_no",
        value: this.state.checkoutModal.inputs.card_no ? this.state.checkoutModal.inputs.card_no : "",
        onChange: this.changeCheckOutModal,
        onKeyDown: this.handleKeyPressCheckModal.bind(this)
      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        sm: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
        controlId: "checkOutRemarks"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Label, null, "Remarks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Control, {
        as: "textarea",
        rows: 3,
        style: {
          resize: "none"
        },
        name: "remarks",
        value: this.state.checkoutModal.inputs.remarks ? this.state.checkoutModal.inputs.remarks : "",
        onChange: this.changeCheckOutModal
      }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Modal"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        variant: "primary",
        onClick: function onClick() {
          _this3.proceedPrint("Thermal");
        }
      }, "Print Bill"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        variant: "secondary",
        onClick: this.handleCheckOutModelClose
      }, "Close")))));
    }
  }, {
    key: "onChangeProductModal",
    value: function onChangeProductModal(e) {
      var name = e.target.name;
      var value = e.target.value;
      var productModal = this.state.productModal;
      productModal.inputs[name] = value;
      this.setState({
        productModal: productModal
      });
    }
  }, {
    key: "onHideProductModal",
    value: function onHideProductModal() {
      var productModal = {
        data: {
          show: false,
          headerName: "Product"
        },
        inputs: {}
      };
      this.setState({
        productModal: productModal
      });
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
    key: "updateCustomerModalInput",
    value: function updateCustomerModalInput(name, value) {
      var customerModal = this.state.customerModal;
      customerModal.inputs[name] = value;
      this.setState(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          customerModal: customerModal
        });
      });
    }
  }, {
    key: "printBill",
    value: function printBill(data) {
      this.setState({
        billNumber: data.bill_number,
        billDate: data.bill_date
      }); //let printableElements = document.getElementById('thermalBill').innerHTML;
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
    value: function proceedPrint(billType) {
      var _this4 = this;

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
        customer_id: this.state.customer ? this.state.customer.id : null,
        bill_items: this.state.billItems,
        gst_type: this.state.currentTaxMode
      };
      var request = {
        method: 'post',
        url: _Utils__WEBPACK_IMPORTED_MODULE_12__["apiRoutes"].createBill,
        data: data
      };
      this.setState({
        loader: true
      });
      axios(request).then(function (response) {
        return response;
      }).then(function (json) {
        if (json.data.success) {
          _this4.printBill(json.data);

          var gstTaxList = _this4.state.gstTaxList;

          _this4.setState(_this4.getInitialState());

          var appToast = {
            show: true,
            data: {
              type: 1,
              header: "Success!",
              message: json.data.message
            }
          };

          _this4.setState(function (prev) {
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

          _this4.setState(function (prev) {
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

        _this4.setState({
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
        this.proceedPrint("Thermal");
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

        e.target.nextSibling.querySelector('li.active').scrollIntoView(false);
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

        e.target.nextSibling.querySelector('li.active').scrollIntoView(false);
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

            _this5.setState(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, {
                productSuggestIndex: 0,
                productSuggestions: suggests,
                visibleBarcodeSuggestion: true,
                visibleProductSuggestion: false
              });
            });
          }, function (error) {
            console.log(error);

            _this5.setState(function (prev) {
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
      var _this6 = this;

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

            _this6.setState(function (prev) {
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
    value: function handlePrintCommand(printMode) {
      if (this.state.billItems.length > 0) {
        this.setState(function (prev) {
          var checkoutModal = prev.checkoutModal;
          checkoutModal.show = true;
          return _objectSpread(_objectSpread({}, prev), {}, {
            checkoutModal: checkoutModal,
            printMode: printMode
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

      if (this.state.customer && id != "") {
        customerModal.inputs = this.state.customer;
      }

      this.setState(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          customerModal: customerModal
        });
      });
    }
  }, {
    key: "handleProductCommand",
    value: function handleProductCommand() {
      var stateProductModal = this.state.productModal;
      stateProductModal.data.show = true;
      this.setState({
        productModal: stateProductModal
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
        window.open(_Utils__WEBPACK_IMPORTED_MODULE_12__["appRoutes"].newSale);
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
        } else if (this.keysPressed['Alt'] && event.key.toLowerCase() == 'a' || this.keysPressed['Meta'] && event.key.toLowerCase() == 'a') {
          e.preventDefault();
          var stateProductModal = this.state.productModal;
          stateProductModal.data.show = true;
          this.setState({
            productModal: stateProductModal
          });
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
      var _this7 = this;

      window.addEventListener('keydown', this.handleKeyBoardShortCuts);
      window.addEventListener('keyup', this.handleKeyUpEvent);
      document.getElementById('billFormBarcode').focus();
      Object(_Utils__WEBPACK_IMPORTED_MODULE_12__["newSale"])(function (json) {
        if (json.data.success) {
          _this7.setState({
            loader: false,
            gstTaxList: json.data.gst_tax_lists,
            states: json.data.states,
            countries: json.data.countries,
            bill_setting: json.data.bill_setting
          });
        } else {
          _this7.setState({
            loader: false,
            gstTaxList: [],
            states: [],
            countries: []
          });
        }
      }, function (error) {
        console.log(error);

        _this7.setState({
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