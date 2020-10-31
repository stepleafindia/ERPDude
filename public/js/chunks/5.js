(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/react-easy-crop/index.module.js":
/*!******************************************************!*\
  !*** ./node_modules/react-easy-crop/index.module.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/react-easy-crop/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Compute the dimension of the crop area based on media size,
 * aspect ratio and optionally rotation
 */

function getCropSize(mediaWidth, mediaHeight, containerWidth, containerHeight, aspect, rotation) {
  if (rotation === void 0) {
    rotation = 0;
  }

  var _a = translateSize(mediaWidth, mediaHeight, rotation),
      width = _a.width,
      height = _a.height;

  var fittingWidth = Math.min(width, containerWidth);
  var fittingHeight = Math.min(height, containerHeight);

  if (fittingWidth > fittingHeight * aspect) {
    return {
      width: fittingHeight * aspect,
      height: fittingHeight
    };
  }

  return {
    width: fittingWidth,
    height: fittingWidth / aspect
  };
}
/**
 * Ensure a new media position stays in the crop area.
 */

function restrictPosition(position, mediaSize, cropSize, zoom, rotation) {
  if (rotation === void 0) {
    rotation = 0;
  }

  var _a = translateSize(mediaSize.width, mediaSize.height, rotation),
      width = _a.width,
      height = _a.height;

  return {
    x: restrictPositionCoord(position.x, width, cropSize.width, zoom),
    y: restrictPositionCoord(position.y, height, cropSize.height, zoom)
  };
}

function restrictPositionCoord(position, mediaSize, cropSize, zoom) {
  var maxPosition = mediaSize * zoom / 2 - cropSize / 2;
  return Math.min(maxPosition, Math.max(position, -maxPosition));
}

function getDistanceBetweenPoints(pointA, pointB) {
  return Math.sqrt(Math.pow(pointA.y - pointB.y, 2) + Math.pow(pointA.x - pointB.x, 2));
}
function getRotationBetweenPoints(pointA, pointB) {
  return Math.atan2(pointB.y - pointA.y, pointB.x - pointA.x) * 180 / Math.PI;
}
/**
 * Compute the output cropped area of the media in percentages and pixels.
 * x/y are the top-left coordinates on the src media
 */

function computeCroppedArea(crop, mediaSize, cropSize, aspect, zoom, rotation, restrictPosition) {
  if (rotation === void 0) {
    rotation = 0;
  }

  if (restrictPosition === void 0) {
    restrictPosition = true;
  } // if the media is rotated by the user, we cannot limit the position anymore
  // as it might need to be negative.


  var limitAreaFn = restrictPosition && rotation === 0 ? limitArea : noOp;
  var croppedAreaPercentages = {
    x: limitAreaFn(100, ((mediaSize.width - cropSize.width / zoom) / 2 - crop.x / zoom) / mediaSize.width * 100),
    y: limitAreaFn(100, ((mediaSize.height - cropSize.height / zoom) / 2 - crop.y / zoom) / mediaSize.height * 100),
    width: limitAreaFn(100, cropSize.width / mediaSize.width * 100 / zoom),
    height: limitAreaFn(100, cropSize.height / mediaSize.height * 100 / zoom)
  }; // we compute the pixels size naively

  var widthInPixels = Math.round(limitAreaFn(mediaSize.naturalWidth, croppedAreaPercentages.width * mediaSize.naturalWidth / 100));
  var heightInPixels = Math.round(limitAreaFn(mediaSize.naturalHeight, croppedAreaPercentages.height * mediaSize.naturalHeight / 100));
  var isImgWiderThanHigh = mediaSize.naturalWidth >= mediaSize.naturalHeight * aspect; // then we ensure the width and height exactly match the aspect (to avoid rounding approximations)
  // if the media is wider than high, when zoom is 0, the crop height will be equals to iamge height
  // thus we want to compute the width from the height and aspect for accuracy.
  // Otherwise, we compute the height from width and aspect.

  var sizePixels = isImgWiderThanHigh ? {
    width: Math.round(heightInPixels * aspect),
    height: heightInPixels
  } : {
    width: widthInPixels,
    height: Math.round(widthInPixels / aspect)
  };

  var croppedAreaPixels = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, sizePixels), {
    x: Math.round(limitAreaFn(mediaSize.naturalWidth - sizePixels.width, croppedAreaPercentages.x * mediaSize.naturalWidth / 100)),
    y: Math.round(limitAreaFn(mediaSize.naturalHeight - sizePixels.height, croppedAreaPercentages.y * mediaSize.naturalHeight / 100))
  });

  return {
    croppedAreaPercentages: croppedAreaPercentages,
    croppedAreaPixels: croppedAreaPixels
  };
}
/**
 * Ensure the returned value is between 0 and max
 */

function limitArea(max, value) {
  return Math.min(max, Math.max(0, value));
}

function noOp(_max, value) {
  return value;
}
/**
 * Compute the crop and zoom from the croppedAreaPixels
 */


function getZoomFromCroppedAreaPixels(croppedAreaPixels, mediaSize, cropSize) {
  var mediaZoom = mediaSize.width / mediaSize.naturalWidth;

  if (cropSize) {
    var isHeightMaxSize_1 = cropSize.height > cropSize.width;
    return isHeightMaxSize_1 ? cropSize.height / mediaZoom / croppedAreaPixels.height : cropSize.width / mediaZoom / croppedAreaPixels.width;
  }

  var aspect = croppedAreaPixels.width / croppedAreaPixels.height;
  var isHeightMaxSize = mediaSize.naturalWidth >= mediaSize.naturalHeight * aspect;
  return isHeightMaxSize ? mediaSize.naturalHeight / croppedAreaPixels.height : mediaSize.naturalWidth / croppedAreaPixels.width;
}
/**
 * Compute the crop and zoom from the croppedAreaPixels
 */


function getInitialCropFromCroppedAreaPixels(croppedAreaPixels, mediaSize, cropSize) {
  var mediaZoom = mediaSize.width / mediaSize.naturalWidth;
  var zoom = getZoomFromCroppedAreaPixels(croppedAreaPixels, mediaSize, cropSize);
  var cropZoom = mediaZoom * zoom;
  var crop = {
    x: ((mediaSize.naturalWidth - croppedAreaPixels.width) / 2 - croppedAreaPixels.x) * cropZoom,
    y: ((mediaSize.naturalHeight - croppedAreaPixels.height) / 2 - croppedAreaPixels.y) * cropZoom
  };
  return {
    crop: crop,
    zoom: zoom
  };
}
/**
 * Return the point that is the center of point a and b
 */

function getCenter(a, b) {
  return {
    x: (b.x + a.x) / 2,
    y: (b.y + a.y) / 2
  };
}
/**
 *
 * Returns an x,y point once rotated around xMid,yMid
 */

function rotateAroundMidPoint(x, y, xMid, yMid, degrees) {
  var cos = Math.cos;
  var sin = Math.sin;
  var radian = degrees * Math.PI / 180; // Convert to radians
  // Subtract midpoints, so that midpoint is translated to origin
  // and add it in the end again

  var xr = (x - xMid) * cos(radian) - (y - yMid) * sin(radian) + xMid;
  var yr = (x - xMid) * sin(radian) + (y - yMid) * cos(radian) + yMid;
  return [xr, yr];
}
/**
 * Returns the new bounding area of a rotated rectangle.
 */

function translateSize(width, height, rotation) {
  var centerX = width / 2;
  var centerY = height / 2;
  var outerBounds = [rotateAroundMidPoint(0, 0, centerX, centerY, rotation), rotateAroundMidPoint(width, 0, centerX, centerY, rotation), rotateAroundMidPoint(width, height, centerX, centerY, rotation), rotateAroundMidPoint(0, height, centerX, centerY, rotation)];
  var minX = Math.min.apply(Math, outerBounds.map(function (p) {
    return p[0];
  }));
  var maxX = Math.max.apply(Math, outerBounds.map(function (p) {
    return p[0];
  }));
  var minY = Math.min.apply(Math, outerBounds.map(function (p) {
    return p[1];
  }));
  var maxY = Math.max.apply(Math, outerBounds.map(function (p) {
    return p[1];
  }));
  return {
    width: maxX - minX,
    height: maxY - minY
  };
}
/**
 * Combine multiple class names into a single string.
 */

function classNames() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  return args.filter(function (value) {
    if (typeof value === 'string' && value.length > 0) {
      return true;
    }

    return false;
  }).join(' ').trim();
}

var css_248z = ".reactEasyCrop_Container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  user-select: none;\n  touch-action: none;\n  cursor: move;\n}\n\n.reactEasyCrop_Image,\n.reactEasyCrop_Video {\n  max-width: 100%;\n  max-height: 100%;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  will-change: transform; /* this improves performances and prevent painting issues on iOS Chrome */\n}\n\n.reactEasyCrop_CropArea {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  box-sizing: border-box;\n  box-shadow: 0 0 0 9999em;\n  color: rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n}\n\n.reactEasyCrop_CropAreaRound {\n  border-radius: 50%;\n}\n\n.reactEasyCrop_CropAreaGrid::before {\n  content: ' ';\n  box-sizing: border-box;\n  position: absolute;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  top: 0;\n  bottom: 0;\n  left: 33.33%;\n  right: 33.33%;\n  border-top: 0;\n  border-bottom: 0;\n}\n\n.reactEasyCrop_CropAreaGrid::after {\n  content: ' ';\n  box-sizing: border-box;\n  position: absolute;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  top: 33.33%;\n  bottom: 33.33%;\n  left: 0;\n  right: 0;\n  border-left: 0;\n  border-right: 0;\n}\n";

var MIN_ZOOM = 1;
var MAX_ZOOM = 3;

var Cropper =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Cropper, _super);

  function Cropper() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.imageRef = null;
    _this.videoRef = null;
    _this.containerRef = null;
    _this.styleRef = null;
    _this.containerRect = null;
    _this.mediaSize = {
      width: 0,
      height: 0,
      naturalWidth: 0,
      naturalHeight: 0
    };
    _this.dragStartPosition = {
      x: 0,
      y: 0
    };
    _this.dragStartCrop = {
      x: 0,
      y: 0
    };
    _this.lastPinchDistance = 0;
    _this.lastPinchRotation = 0;
    _this.rafDragTimeout = null;
    _this.rafPinchTimeout = null;
    _this.wheelTimer = null;
    _this.state = {
      cropSize: null,
      hasWheelJustStarted: false
    }; // this is to prevent Safari on iOS >= 10 to zoom the page

    _this.preventZoomSafari = function (e) {
      return e.preventDefault();
    };

    _this.cleanEvents = function () {
      document.removeEventListener('mousemove', _this.onMouseMove);
      document.removeEventListener('mouseup', _this.onDragStopped);
      document.removeEventListener('touchmove', _this.onTouchMove);
      document.removeEventListener('touchend', _this.onDragStopped);
    };

    _this.clearScrollEvent = function () {
      if (_this.containerRef) _this.containerRef.removeEventListener('wheel', _this.onWheel);

      if (_this.wheelTimer) {
        clearTimeout(_this.wheelTimer);
      }
    };

    _this.onMediaLoad = function () {
      _this.computeSizes();

      _this.emitCropData();

      _this.setInitialCrop();

      if (_this.props.onMediaLoaded) {
        _this.props.onMediaLoaded(_this.mediaSize);
      }
    };

    _this.setInitialCrop = function () {
      var _a = _this.props,
          initialCroppedAreaPixels = _a.initialCroppedAreaPixels,
          cropSize = _a.cropSize;

      if (!initialCroppedAreaPixels) {
        return;
      }

      var _b = getInitialCropFromCroppedAreaPixels(initialCroppedAreaPixels, _this.mediaSize, cropSize),
          crop = _b.crop,
          zoom = _b.zoom;

      _this.props.onCropChange(crop);

      _this.props.onZoomChange && _this.props.onZoomChange(zoom);
    };

    _this.computeSizes = function () {
      var _a, _b, _c, _d, _e, _f;

      var mediaRef = _this.imageRef || _this.videoRef;

      if (mediaRef && _this.containerRef) {
        _this.containerRect = _this.containerRef.getBoundingClientRect();
        _this.mediaSize = {
          width: mediaRef.offsetWidth,
          height: mediaRef.offsetHeight,
          naturalWidth: ((_a = _this.imageRef) === null || _a === void 0 ? void 0 : _a.naturalWidth) || ((_b = _this.videoRef) === null || _b === void 0 ? void 0 : _b.videoWidth) || 0,
          naturalHeight: ((_c = _this.imageRef) === null || _c === void 0 ? void 0 : _c.naturalHeight) || ((_d = _this.videoRef) === null || _d === void 0 ? void 0 : _d.videoHeight) || 0
        };
        var cropSize = _this.props.cropSize ? _this.props.cropSize : getCropSize(mediaRef.offsetWidth, mediaRef.offsetHeight, _this.containerRect.width, _this.containerRect.height, _this.props.aspect, _this.props.rotation);

        if (((_e = _this.state.cropSize) === null || _e === void 0 ? void 0 : _e.height) !== cropSize.height || ((_f = _this.state.cropSize) === null || _f === void 0 ? void 0 : _f.width) !== cropSize.width) {
          _this.props.onCropSizeChange && _this.props.onCropSizeChange(cropSize);
        }

        _this.setState({
          cropSize: cropSize
        }, _this.recomputeCropPosition);
      }
    };

    _this.onMouseDown = function (e) {
      e.preventDefault();
      document.addEventListener('mousemove', _this.onMouseMove);
      document.addEventListener('mouseup', _this.onDragStopped);

      _this.onDragStart(Cropper.getMousePoint(e));
    };

    _this.onMouseMove = function (e) {
      return _this.onDrag(Cropper.getMousePoint(e));
    };

    _this.onTouchStart = function (e) {
      e.preventDefault();
      document.addEventListener('touchmove', _this.onTouchMove, {
        passive: false
      }); // iOS 11 now defaults to passive: true

      document.addEventListener('touchend', _this.onDragStopped);

      if (e.touches.length === 2) {
        _this.onPinchStart(e);
      } else if (e.touches.length === 1) {
        _this.onDragStart(Cropper.getTouchPoint(e.touches[0]));
      }
    };

    _this.onTouchMove = function (e) {
      // Prevent whole page from scrolling on iOS.
      e.preventDefault();

      if (e.touches.length === 2) {
        _this.onPinchMove(e);
      } else if (e.touches.length === 1) {
        _this.onDrag(Cropper.getTouchPoint(e.touches[0]));
      }
    };

    _this.onDragStart = function (_a) {
      var _b, _c;

      var x = _a.x,
          y = _a.y;
      _this.dragStartPosition = {
        x: x,
        y: y
      };
      _this.dragStartCrop = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.crop);
      (_c = (_b = _this.props).onInteractionStart) === null || _c === void 0 ? void 0 : _c.call(_b);
    };

    _this.onDrag = function (_a) {
      var x = _a.x,
          y = _a.y;
      if (_this.rafDragTimeout) window.cancelAnimationFrame(_this.rafDragTimeout);
      _this.rafDragTimeout = window.requestAnimationFrame(function () {
        if (!_this.state.cropSize) return;
        if (x === undefined || y === undefined) return;
        var offsetX = x - _this.dragStartPosition.x;
        var offsetY = y - _this.dragStartPosition.y;
        var requestedPosition = {
          x: _this.dragStartCrop.x + offsetX,
          y: _this.dragStartCrop.y + offsetY
        };
        var newPosition = _this.props.restrictPosition ? restrictPosition(requestedPosition, _this.mediaSize, _this.state.cropSize, _this.props.zoom, _this.props.rotation) : requestedPosition;

        _this.props.onCropChange(newPosition);
      });
    };

    _this.onDragStopped = function () {
      var _a, _b;

      _this.cleanEvents();

      _this.emitCropData();

      (_b = (_a = _this.props).onInteractionEnd) === null || _b === void 0 ? void 0 : _b.call(_a);
    };

    _this.onWheel = function (e) {
      e.preventDefault();
      var point = Cropper.getMousePoint(e);
      var newZoom = _this.props.zoom - e.deltaY * _this.props.zoomSpeed / 200;

      _this.setNewZoom(newZoom, point);

      if (!_this.state.hasWheelJustStarted) {
        _this.setState({
          hasWheelJustStarted: true
        }, function () {
          var _a, _b;

          return (_b = (_a = _this.props).onInteractionStart) === null || _b === void 0 ? void 0 : _b.call(_a);
        });
      }

      if (_this.wheelTimer) {
        clearTimeout(_this.wheelTimer);
      }

      _this.wheelTimer = window.setTimeout(function () {
        return _this.setState({
          hasWheelJustStarted: false
        }, function () {
          var _a, _b;

          return (_b = (_a = _this.props).onInteractionEnd) === null || _b === void 0 ? void 0 : _b.call(_a);
        });
      }, 250);
    };

    _this.getPointOnContainer = function (_a) {
      var x = _a.x,
          y = _a.y;

      if (!_this.containerRect) {
        throw new Error('The Cropper is not mounted');
      }

      return {
        x: _this.containerRect.width / 2 - (x - _this.containerRect.left),
        y: _this.containerRect.height / 2 - (y - _this.containerRect.top)
      };
    };

    _this.getPointOnMedia = function (_a) {
      var x = _a.x,
          y = _a.y;
      var _b = _this.props,
          crop = _b.crop,
          zoom = _b.zoom;
      return {
        x: (x + crop.x) / zoom,
        y: (y + crop.y) / zoom
      };
    };

    _this.setNewZoom = function (zoom, point) {
      if (!_this.state.cropSize || !_this.props.onZoomChange) return;

      var zoomPoint = _this.getPointOnContainer(point);

      var zoomTarget = _this.getPointOnMedia(zoomPoint);

      var newZoom = Math.min(_this.props.maxZoom, Math.max(zoom, _this.props.minZoom));
      var requestedPosition = {
        x: zoomTarget.x * newZoom - zoomPoint.x,
        y: zoomTarget.y * newZoom - zoomPoint.y
      };
      var newPosition = _this.props.restrictPosition ? restrictPosition(requestedPosition, _this.mediaSize, _this.state.cropSize, newZoom, _this.props.rotation) : requestedPosition;

      _this.props.onCropChange(newPosition);

      _this.props.onZoomChange(newZoom);
    };

    _this.emitCropData = function () {
      if (!_this.state.cropSize) return; // this is to ensure the crop is correctly restricted after a zoom back (https://github.com/ricardo-ch/react-easy-crop/issues/6)

      var restrictedPosition = _this.props.restrictPosition ? restrictPosition(_this.props.crop, _this.mediaSize, _this.state.cropSize, _this.props.zoom, _this.props.rotation) : _this.props.crop;

      var _a = computeCroppedArea(restrictedPosition, _this.mediaSize, _this.state.cropSize, _this.getAspect(), _this.props.zoom, _this.props.rotation, _this.props.restrictPosition),
          croppedAreaPercentages = _a.croppedAreaPercentages,
          croppedAreaPixels = _a.croppedAreaPixels;

      _this.props.onCropComplete && _this.props.onCropComplete(croppedAreaPercentages, croppedAreaPixels);
    };

    _this.recomputeCropPosition = function () {
      if (!_this.state.cropSize) return;
      var newPosition = _this.props.restrictPosition ? restrictPosition(_this.props.crop, _this.mediaSize, _this.state.cropSize, _this.props.zoom, _this.props.rotation) : _this.props.crop;

      _this.props.onCropChange(newPosition);

      _this.emitCropData();
    };

    return _this;
  }

  Cropper.prototype.componentDidMount = function () {
    window.addEventListener('resize', this.computeSizes);

    if (this.containerRef) {
      this.props.zoomWithScroll && this.containerRef.addEventListener('wheel', this.onWheel, {
        passive: false
      });
      this.containerRef.addEventListener('gesturestart', this.preventZoomSafari);
      this.containerRef.addEventListener('gesturechange', this.preventZoomSafari);
    }

    if (!this.props.disableAutomaticStylesInjection) {
      this.styleRef = document.createElement('style');
      this.styleRef.setAttribute('type', 'text/css');
      this.styleRef.innerHTML = css_248z;
      document.head.appendChild(this.styleRef);
    } // when rendered via SSR, the image can already be loaded and its onLoad callback will never be called


    if (this.imageRef && this.imageRef.complete) {
      this.onMediaLoad();
    }
  };

  Cropper.prototype.componentWillUnmount = function () {
    window.removeEventListener('resize', this.computeSizes);

    if (this.containerRef) {
      this.containerRef.removeEventListener('gesturestart', this.preventZoomSafari);
      this.containerRef.removeEventListener('gesturechange', this.preventZoomSafari);
    }

    if (this.styleRef) {
      this.styleRef.remove();
    }

    this.cleanEvents();
    this.props.zoomWithScroll && this.clearScrollEvent();
  };

  Cropper.prototype.componentDidUpdate = function (prevProps) {
    var _a, _b, _c, _d;

    if (prevProps.rotation !== this.props.rotation) {
      this.computeSizes();
      this.recomputeCropPosition();
    } else if (prevProps.aspect !== this.props.aspect) {
      this.computeSizes();
    } else if (prevProps.zoom !== this.props.zoom) {
      this.recomputeCropPosition();
    } else if (((_a = prevProps.cropSize) === null || _a === void 0 ? void 0 : _a.height) !== ((_b = this.props.cropSize) === null || _b === void 0 ? void 0 : _b.height) || ((_c = prevProps.cropSize) === null || _c === void 0 ? void 0 : _c.width) !== ((_d = this.props.cropSize) === null || _d === void 0 ? void 0 : _d.width)) {
      this.computeSizes();
    }

    if (prevProps.zoomWithScroll !== this.props.zoomWithScroll && this.containerRef) {
      this.props.zoomWithScroll ? this.containerRef.addEventListener('wheel', this.onWheel, {
        passive: false
      }) : this.clearScrollEvent();
    }
  };

  Cropper.prototype.getAspect = function () {
    var _a = this.props,
        cropSize = _a.cropSize,
        aspect = _a.aspect;

    if (cropSize) {
      return cropSize.width / cropSize.height;
    }

    return aspect;
  };

  Cropper.prototype.onPinchStart = function (e) {
    var pointA = Cropper.getTouchPoint(e.touches[0]);
    var pointB = Cropper.getTouchPoint(e.touches[1]);
    this.lastPinchDistance = getDistanceBetweenPoints(pointA, pointB);
    this.lastPinchRotation = getRotationBetweenPoints(pointA, pointB);
    this.onDragStart(getCenter(pointA, pointB));
  };

  Cropper.prototype.onPinchMove = function (e) {
    var _this = this;

    var pointA = Cropper.getTouchPoint(e.touches[0]);
    var pointB = Cropper.getTouchPoint(e.touches[1]);
    var center = getCenter(pointA, pointB);
    this.onDrag(center);
    if (this.rafPinchTimeout) window.cancelAnimationFrame(this.rafPinchTimeout);
    this.rafPinchTimeout = window.requestAnimationFrame(function () {
      var distance = getDistanceBetweenPoints(pointA, pointB);
      var newZoom = _this.props.zoom * (distance / _this.lastPinchDistance);

      _this.setNewZoom(newZoom, center);

      _this.lastPinchDistance = distance;
      var rotation = getRotationBetweenPoints(pointA, pointB);
      var newRotation = _this.props.rotation + (rotation - _this.lastPinchRotation);
      _this.props.onRotationChange && _this.props.onRotationChange(newRotation);
      _this.lastPinchRotation = rotation;
    });
  };

  Cropper.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        image = _a.image,
        video = _a.video,
        mediaProps = _a.mediaProps,
        transform = _a.transform,
        _b = _a.crop,
        x = _b.x,
        y = _b.y,
        rotation = _a.rotation,
        zoom = _a.zoom,
        cropShape = _a.cropShape,
        showGrid = _a.showGrid,
        _c = _a.style,
        containerStyle = _c.containerStyle,
        cropAreaStyle = _c.cropAreaStyle,
        mediaStyle = _c.mediaStyle,
        _d = _a.classes,
        containerClassName = _d.containerClassName,
        cropAreaClassName = _d.cropAreaClassName,
        mediaClassName = _d.mediaClassName;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      onMouseDown: this.onMouseDown,
      onTouchStart: this.onTouchStart,
      ref: function ref(el) {
        return _this.containerRef = el;
      },
      "data-testid": "container",
      style: containerStyle,
      className: classNames('reactEasyCrop_Container', containerClassName)
    }, image ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
      alt: "",
      className: classNames('reactEasyCrop_Image', mediaClassName)
    }, mediaProps, {
      src: image,
      ref: function ref(el) {
        return _this.imageRef = el;
      },
      style: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, mediaStyle), {
        transform: transform || "translate(" + x + "px, " + y + "px) rotate(" + rotation + "deg) scale(" + zoom + ")"
      }),
      onLoad: this.onMediaLoad
    })) : video && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("video", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
      autoPlay: true,
      loop: true,
      muted: true,
      className: classNames('reactEasyCrop_Video', mediaClassName)
    }, mediaProps, {
      src: video,
      ref: function ref(el) {
        return _this.videoRef = el;
      },
      onLoadedMetadata: this.onMediaLoad,
      style: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, mediaStyle), {
        transform: transform || "translate(" + x + "px, " + y + "px) rotate(" + rotation + "deg) scale(" + zoom + ")"
      }),
      controls: false
    })), this.state.cropSize && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, cropAreaStyle), {
        width: this.state.cropSize.width,
        height: this.state.cropSize.height
      }),
      "data-testid": "cropper",
      className: classNames('reactEasyCrop_CropArea', cropShape === 'round' && 'reactEasyCrop_CropAreaRound', showGrid && 'reactEasyCrop_CropAreaGrid', cropAreaClassName)
    }));
  };

  Cropper.defaultProps = {
    zoom: 1,
    rotation: 0,
    aspect: 4 / 3,
    maxZoom: MAX_ZOOM,
    minZoom: MIN_ZOOM,
    cropShape: 'rect',
    showGrid: true,
    style: {},
    classes: {},
    mediaProps: {},
    zoomSpeed: 1,
    restrictPosition: true,
    zoomWithScroll: true
  };

  Cropper.getMousePoint = function (e) {
    return {
      x: Number(e.clientX),
      y: Number(e.clientY)
    };
  };

  Cropper.getTouchPoint = function (touch) {
    return {
      x: Number(touch.clientX),
      y: Number(touch.clientY)
    };
  };

  return Cropper;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Cropper);
//# sourceMappingURL=index.module.js.map


/***/ }),

/***/ "./node_modules/react-easy-crop/node_modules/tslib/tslib.es6.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-easy-crop/node_modules/tslib/tslib.es6.js ***!
  \**********************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ })

}]);