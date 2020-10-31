/*! For license information please see 7.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{155:function(t,e,o){"use strict";var n=o(1),r=o(3),i=o(5),a=o.n(i),s=o(0),p=o.n(s),c=o(6),h=p.a.forwardRef((function(t,e){var o=t.bsPrefix,i=t.fluid,s=t.as,h=void 0===s?"div":s,u=t.className,d=Object(r.a)(t,["bsPrefix","fluid","as","className"]),l=Object(c.a)(o,"container"),m="string"==typeof i?"-"+i:"-fluid";return p.a.createElement(h,Object(n.a)({ref:e},d,{className:a()(u,i?""+l+m:l)}))}));h.displayName="Container",h.defaultProps={fluid:!1},e.a=h},156:function(t,e,o){"use strict";var n=o(1),r=o(3),i=o(5),a=o.n(i),s=o(0),p=o.n(s),c=o(6),h=["xl","lg","md","sm","xs"],u=p.a.forwardRef((function(t,e){var o=t.bsPrefix,i=t.className,s=t.noGutters,u=t.as,d=void 0===u?"div":u,l=Object(r.a)(t,["bsPrefix","className","noGutters","as"]),m=Object(c.a)(o,"row"),f=m+"-cols",v=[];return h.forEach((function(t){var e,o=l[t];delete l[t];var n="xs"!==t?"-"+t:"";null!=(e=null!=o&&"object"==typeof o?o.cols:o)&&v.push(""+f+n+"-"+e)})),p.a.createElement(d,Object(n.a)({ref:e},l,{className:a.a.apply(void 0,[i,m,s&&"no-gutters"].concat(v))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},e.a=u},76:function(t,e,o){"use strict";var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)};var r=function(){return(r=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var r in e=arguments[o])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.create;Object.create;var i=o(0),a=o.n(i);function s(t,e,o,n,r,i){void 0===i&&(i=0);var a=S(t,e,i),s=a.width,p=a.height,c=Math.min(s,o),h=Math.min(p,n);return c>h*r?{width:h*r,height:h}:{width:c,height:c/r}}function p(t,e,o,n,r){void 0===r&&(r=0);var i=S(e.width,e.height,r),a=i.width,s=i.height;return{x:c(t.x,a,o.width,n),y:c(t.y,s,o.height,n)}}function c(t,e,o,n){var r=e*n/2-o/2;return Math.min(r,Math.max(t,-r))}function h(t,e){return Math.sqrt(Math.pow(t.y-e.y,2)+Math.pow(t.x-e.x,2))}function u(t,e){return 180*Math.atan2(e.y-t.y,e.x-t.x)/Math.PI}function d(t,e,o,n,i,a,s){void 0===a&&(a=0),void 0===s&&(s=!0);var p=s&&0===a?l:m,c={x:p(100,((e.width-o.width/i)/2-t.x/i)/e.width*100),y:p(100,((e.height-o.height/i)/2-t.y/i)/e.height*100),width:p(100,o.width/e.width*100/i),height:p(100,o.height/e.height*100/i)},h=Math.round(p(e.naturalWidth,c.width*e.naturalWidth/100)),u=Math.round(p(e.naturalHeight,c.height*e.naturalHeight/100)),d=e.naturalWidth>=e.naturalHeight*n?{width:Math.round(u*n),height:u}:{width:h,height:Math.round(h/n)};return{croppedAreaPercentages:c,croppedAreaPixels:r(r({},d),{x:Math.round(p(e.naturalWidth-d.width,c.x*e.naturalWidth/100)),y:Math.round(p(e.naturalHeight-d.height,c.y*e.naturalHeight/100))})}}function l(t,e){return Math.min(t,Math.max(0,e))}function m(t,e){return e}function f(t,e,o){var n=e.width/e.naturalWidth,r=function(t,e,o){var n=e.width/e.naturalWidth;if(o)return o.height>o.width?o.height/n/t.height:o.width/n/t.width;var r=t.width/t.height;return e.naturalWidth>=e.naturalHeight*r?e.naturalHeight/t.height:e.naturalWidth/t.width}(t,e,o),i=n*r;return{crop:{x:((e.naturalWidth-t.width)/2-t.x)*i,y:((e.naturalHeight-t.height)/2-t.y)*i},zoom:r}}function v(t,e){return{x:(e.x+t.x)/2,y:(e.y+t.y)/2}}function g(t,e,o,n,r){var i=Math.cos,a=Math.sin,s=r*Math.PI/180;return[(t-o)*i(s)-(e-n)*a(s)+o,(t-o)*a(s)+(e-n)*i(s)+n]}function S(t,e,o){var n=t/2,r=e/2,i=[g(0,0,n,r,o),g(t,0,n,r,o),g(t,e,n,r,o),g(0,e,n,r,o)],a=Math.min.apply(Math,i.map((function(t){return t[0]}))),s=Math.max.apply(Math,i.map((function(t){return t[0]}))),p=Math.min.apply(Math,i.map((function(t){return t[1]})));return{width:s-a,height:Math.max.apply(Math,i.map((function(t){return t[1]})))-p}}function y(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return t.filter((function(t){return"string"==typeof t&&t.length>0})).join(" ").trim()}var w=function(t){function e(){var o=null!==t&&t.apply(this,arguments)||this;return o.imageRef=null,o.videoRef=null,o.containerRef=null,o.styleRef=null,o.containerRect=null,o.mediaSize={width:0,height:0,naturalWidth:0,naturalHeight:0},o.dragStartPosition={x:0,y:0},o.dragStartCrop={x:0,y:0},o.lastPinchDistance=0,o.lastPinchRotation=0,o.rafDragTimeout=null,o.rafPinchTimeout=null,o.wheelTimer=null,o.state={cropSize:null,hasWheelJustStarted:!1},o.preventZoomSafari=function(t){return t.preventDefault()},o.cleanEvents=function(){document.removeEventListener("mousemove",o.onMouseMove),document.removeEventListener("mouseup",o.onDragStopped),document.removeEventListener("touchmove",o.onTouchMove),document.removeEventListener("touchend",o.onDragStopped)},o.clearScrollEvent=function(){o.containerRef&&o.containerRef.removeEventListener("wheel",o.onWheel),o.wheelTimer&&clearTimeout(o.wheelTimer)},o.onMediaLoad=function(){o.computeSizes(),o.emitCropData(),o.setInitialCrop(),o.props.onMediaLoaded&&o.props.onMediaLoaded(o.mediaSize)},o.setInitialCrop=function(){var t=o.props,e=t.initialCroppedAreaPixels,n=t.cropSize;if(e){var r=f(e,o.mediaSize,n),i=r.crop,a=r.zoom;o.props.onCropChange(i),o.props.onZoomChange&&o.props.onZoomChange(a)}},o.computeSizes=function(){var t,e,n,r,i,a,p=o.imageRef||o.videoRef;if(p&&o.containerRef){o.containerRect=o.containerRef.getBoundingClientRect(),o.mediaSize={width:p.offsetWidth,height:p.offsetHeight,naturalWidth:(null===(t=o.imageRef)||void 0===t?void 0:t.naturalWidth)||(null===(e=o.videoRef)||void 0===e?void 0:e.videoWidth)||0,naturalHeight:(null===(n=o.imageRef)||void 0===n?void 0:n.naturalHeight)||(null===(r=o.videoRef)||void 0===r?void 0:r.videoHeight)||0};var c=o.props.cropSize?o.props.cropSize:s(p.offsetWidth,p.offsetHeight,o.containerRect.width,o.containerRect.height,o.props.aspect,o.props.rotation);(null===(i=o.state.cropSize)||void 0===i?void 0:i.height)===c.height&&(null===(a=o.state.cropSize)||void 0===a?void 0:a.width)===c.width||o.props.onCropSizeChange&&o.props.onCropSizeChange(c),o.setState({cropSize:c},o.recomputeCropPosition)}},o.onMouseDown=function(t){t.preventDefault(),document.addEventListener("mousemove",o.onMouseMove),document.addEventListener("mouseup",o.onDragStopped),o.onDragStart(e.getMousePoint(t))},o.onMouseMove=function(t){return o.onDrag(e.getMousePoint(t))},o.onTouchStart=function(t){t.preventDefault(),document.addEventListener("touchmove",o.onTouchMove,{passive:!1}),document.addEventListener("touchend",o.onDragStopped),2===t.touches.length?o.onPinchStart(t):1===t.touches.length&&o.onDragStart(e.getTouchPoint(t.touches[0]))},o.onTouchMove=function(t){t.preventDefault(),2===t.touches.length?o.onPinchMove(t):1===t.touches.length&&o.onDrag(e.getTouchPoint(t.touches[0]))},o.onDragStart=function(t){var e,n,i=t.x,a=t.y;o.dragStartPosition={x:i,y:a},o.dragStartCrop=r({},o.props.crop),null===(n=(e=o.props).onInteractionStart)||void 0===n||n.call(e)},o.onDrag=function(t){var e=t.x,n=t.y;o.rafDragTimeout&&window.cancelAnimationFrame(o.rafDragTimeout),o.rafDragTimeout=window.requestAnimationFrame((function(){if(o.state.cropSize&&void 0!==e&&void 0!==n){var t=e-o.dragStartPosition.x,r=n-o.dragStartPosition.y,i={x:o.dragStartCrop.x+t,y:o.dragStartCrop.y+r},a=o.props.restrictPosition?p(i,o.mediaSize,o.state.cropSize,o.props.zoom,o.props.rotation):i;o.props.onCropChange(a)}}))},o.onDragStopped=function(){var t,e;o.cleanEvents(),o.emitCropData(),null===(e=(t=o.props).onInteractionEnd)||void 0===e||e.call(t)},o.onWheel=function(t){t.preventDefault();var n=e.getMousePoint(t),r=o.props.zoom-t.deltaY*o.props.zoomSpeed/200;o.setNewZoom(r,n),o.state.hasWheelJustStarted||o.setState({hasWheelJustStarted:!0},(function(){var t,e;return null===(e=(t=o.props).onInteractionStart)||void 0===e?void 0:e.call(t)})),o.wheelTimer&&clearTimeout(o.wheelTimer),o.wheelTimer=window.setTimeout((function(){return o.setState({hasWheelJustStarted:!1},(function(){var t,e;return null===(e=(t=o.props).onInteractionEnd)||void 0===e?void 0:e.call(t)}))}),250)},o.getPointOnContainer=function(t){var e=t.x,n=t.y;if(!o.containerRect)throw new Error("The Cropper is not mounted");return{x:o.containerRect.width/2-(e-o.containerRect.left),y:o.containerRect.height/2-(n-o.containerRect.top)}},o.getPointOnMedia=function(t){var e=t.x,n=t.y,r=o.props,i=r.crop,a=r.zoom;return{x:(e+i.x)/a,y:(n+i.y)/a}},o.setNewZoom=function(t,e){if(o.state.cropSize&&o.props.onZoomChange){var n=o.getPointOnContainer(e),r=o.getPointOnMedia(n),i=Math.min(o.props.maxZoom,Math.max(t,o.props.minZoom)),a={x:r.x*i-n.x,y:r.y*i-n.y},s=o.props.restrictPosition?p(a,o.mediaSize,o.state.cropSize,i,o.props.rotation):a;o.props.onCropChange(s),o.props.onZoomChange(i)}},o.emitCropData=function(){if(o.state.cropSize){var t=d(o.props.restrictPosition?p(o.props.crop,o.mediaSize,o.state.cropSize,o.props.zoom,o.props.rotation):o.props.crop,o.mediaSize,o.state.cropSize,o.getAspect(),o.props.zoom,o.props.rotation,o.props.restrictPosition),e=t.croppedAreaPercentages,n=t.croppedAreaPixels;o.props.onCropComplete&&o.props.onCropComplete(e,n)}},o.recomputeCropPosition=function(){if(o.state.cropSize){var t=o.props.restrictPosition?p(o.props.crop,o.mediaSize,o.state.cropSize,o.props.zoom,o.props.rotation):o.props.crop;o.props.onCropChange(t),o.emitCropData()}},o}return function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}(e,t),e.prototype.componentDidMount=function(){window.addEventListener("resize",this.computeSizes),this.containerRef&&(this.props.zoomWithScroll&&this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}),this.containerRef.addEventListener("gesturestart",this.preventZoomSafari),this.containerRef.addEventListener("gesturechange",this.preventZoomSafari)),this.props.disableAutomaticStylesInjection||(this.styleRef=document.createElement("style"),this.styleRef.setAttribute("type","text/css"),this.styleRef.innerHTML=".reactEasyCrop_Container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  user-select: none;\n  touch-action: none;\n  cursor: move;\n}\n\n.reactEasyCrop_Image,\n.reactEasyCrop_Video {\n  max-width: 100%;\n  max-height: 100%;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  will-change: transform; /* this improves performances and prevent painting issues on iOS Chrome */\n}\n\n.reactEasyCrop_CropArea {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  box-sizing: border-box;\n  box-shadow: 0 0 0 9999em;\n  color: rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n}\n\n.reactEasyCrop_CropAreaRound {\n  border-radius: 50%;\n}\n\n.reactEasyCrop_CropAreaGrid::before {\n  content: ' ';\n  box-sizing: border-box;\n  position: absolute;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  top: 0;\n  bottom: 0;\n  left: 33.33%;\n  right: 33.33%;\n  border-top: 0;\n  border-bottom: 0;\n}\n\n.reactEasyCrop_CropAreaGrid::after {\n  content: ' ';\n  box-sizing: border-box;\n  position: absolute;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  top: 33.33%;\n  bottom: 33.33%;\n  left: 0;\n  right: 0;\n  border-left: 0;\n  border-right: 0;\n}\n",document.head.appendChild(this.styleRef)),this.imageRef&&this.imageRef.complete&&this.onMediaLoad()},e.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.computeSizes),this.containerRef&&(this.containerRef.removeEventListener("gesturestart",this.preventZoomSafari),this.containerRef.removeEventListener("gesturechange",this.preventZoomSafari)),this.styleRef&&this.styleRef.remove(),this.cleanEvents(),this.props.zoomWithScroll&&this.clearScrollEvent()},e.prototype.componentDidUpdate=function(t){var e,o,n,r;t.rotation!==this.props.rotation?(this.computeSizes(),this.recomputeCropPosition()):t.aspect!==this.props.aspect?this.computeSizes():t.zoom!==this.props.zoom?this.recomputeCropPosition():(null===(e=t.cropSize)||void 0===e?void 0:e.height)===(null===(o=this.props.cropSize)||void 0===o?void 0:o.height)&&(null===(n=t.cropSize)||void 0===n?void 0:n.width)===(null===(r=this.props.cropSize)||void 0===r?void 0:r.width)||this.computeSizes(),t.zoomWithScroll!==this.props.zoomWithScroll&&this.containerRef&&(this.props.zoomWithScroll?this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}):this.clearScrollEvent())},e.prototype.getAspect=function(){var t=this.props,e=t.cropSize,o=t.aspect;return e?e.width/e.height:o},e.prototype.onPinchStart=function(t){var o=e.getTouchPoint(t.touches[0]),n=e.getTouchPoint(t.touches[1]);this.lastPinchDistance=h(o,n),this.lastPinchRotation=u(o,n),this.onDragStart(v(o,n))},e.prototype.onPinchMove=function(t){var o=this,n=e.getTouchPoint(t.touches[0]),r=e.getTouchPoint(t.touches[1]),i=v(n,r);this.onDrag(i),this.rafPinchTimeout&&window.cancelAnimationFrame(this.rafPinchTimeout),this.rafPinchTimeout=window.requestAnimationFrame((function(){var t=h(n,r),e=o.props.zoom*(t/o.lastPinchDistance);o.setNewZoom(e,i),o.lastPinchDistance=t;var a=u(n,r),s=o.props.rotation+(a-o.lastPinchRotation);o.props.onRotationChange&&o.props.onRotationChange(s),o.lastPinchRotation=a}))},e.prototype.render=function(){var t=this,e=this.props,o=e.image,n=e.video,i=e.mediaProps,s=e.transform,p=e.crop,c=p.x,h=p.y,u=e.rotation,d=e.zoom,l=e.cropShape,m=e.showGrid,f=e.style,v=f.containerStyle,g=f.cropAreaStyle,S=f.mediaStyle,w=e.classes,C=w.containerClassName,x=w.cropAreaClassName,z=w.mediaClassName;return a.a.createElement("div",{onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart,ref:function(e){return t.containerRef=e},"data-testid":"container",style:v,className:y("reactEasyCrop_Container",C)},o?a.a.createElement("img",r({alt:"",className:y("reactEasyCrop_Image",z)},i,{src:o,ref:function(e){return t.imageRef=e},style:r(r({},S),{transform:s||"translate("+c+"px, "+h+"px) rotate("+u+"deg) scale("+d+")"}),onLoad:this.onMediaLoad})):n&&a.a.createElement("video",r({autoPlay:!0,loop:!0,muted:!0,className:y("reactEasyCrop_Video",z)},i,{src:n,ref:function(e){return t.videoRef=e},onLoadedMetadata:this.onMediaLoad,style:r(r({},S),{transform:s||"translate("+c+"px, "+h+"px) rotate("+u+"deg) scale("+d+")"}),controls:!1})),this.state.cropSize&&a.a.createElement("div",{style:r(r({},g),{width:this.state.cropSize.width,height:this.state.cropSize.height}),"data-testid":"cropper",className:y("reactEasyCrop_CropArea","round"===l&&"reactEasyCrop_CropAreaRound",m&&"reactEasyCrop_CropAreaGrid",x)}))},e.defaultProps={zoom:1,rotation:0,aspect:4/3,maxZoom:3,minZoom:1,cropShape:"rect",showGrid:!0,style:{},classes:{},mediaProps:{},zoomSpeed:1,restrictPosition:!0,zoomWithScroll:!0},e.getMousePoint=function(t){return{x:Number(t.clientX),y:Number(t.clientY)}},e.getTouchPoint=function(t){return{x:Number(t.clientX),y:Number(t.clientY)}},e}(a.a.Component);e.a=w}}]);