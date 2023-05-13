"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[738],{"./packages/components/src/custom-gradient-picker/constants.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{ob:function(){return DEFAULT_GRADIENT},KE:function(){return DEFAULT_LINEAR_GRADIENT_ANGLE},Pg:function(){return HORIZONTAL_GRADIENT_ORIENTATION},C6:function(){return GRADIENT_OPTIONS},dk:function(){return DIRECTIONAL_ORIENTATION_ANGLE_MAP}});var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/i18n/build-module/index.js");const DEFAULT_GRADIENT="linear-gradient(135deg, rgba(6, 147, 227, 1) 0%, rgb(155, 81, 224) 100%)",DEFAULT_LINEAR_GRADIENT_ANGLE=180,HORIZONTAL_GRADIENT_ORIENTATION={type:"angular",value:"90"},GRADIENT_OPTIONS=[{value:"linear-gradient",label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Linear")},{value:"radial-gradient",label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Radial")}],DIRECTIONAL_ORIENTATION_ANGLE_MAP={top:0,"top right":45,"right top":45,right:90,"right bottom":135,"bottom right":135,bottom:180,"bottom left":225,"left bottom":225,left:270,"top left":315,"left top":315}},"./packages/components/src/custom-gradient-picker/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return custom_gradient_picker}});var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),build_module=__webpack_require__("./packages/deprecated/build-module/index.js"),i18n_build_module=__webpack_require__("./packages/i18n/build-module/index.js"),angle_picker_control=__webpack_require__("./packages/components/src/angle-picker-control/index.tsx"),gradient_bar=__webpack_require__("./packages/components/src/custom-gradient-picker/gradient-bar/index.tsx"),component=__webpack_require__("./packages/components/src/flex/flex/component.tsx"),select_control=__webpack_require__("./packages/components/src/select-control/index.tsx"),v_stack_component=__webpack_require__("./packages/components/src/v-stack/component.tsx"),node=__webpack_require__("./node_modules/gradient-parser/build/node.js"),colord=__webpack_require__("./node_modules/colord/index.mjs"),names=__webpack_require__("./node_modules/colord/plugins/names.mjs"),constants=__webpack_require__("./packages/components/src/custom-gradient-picker/constants.ts");function serializeGradientColorStop(_ref2){let{type:type,value:value,length:length}=_ref2;return`${function serializeGradientColor(_ref){let{type:type,value:value}=_ref;return"literal"===type?value:"hex"===type?`#${value}`:`${type}(${value.join(",")})`}({type:type,value:value})} ${function serializeGradientPosition(position){if(!position)return"";const{value:value,type:type}=position;return`${value}${type}`}(length)}`}function serializeGradient(_ref3){let{type:type,orientation:orientation,colorStops:colorStops}=_ref3;const serializedOrientation=function serializeGradientOrientation(orientation){if(!Array.isArray(orientation)&&orientation&&"angular"===orientation.type)return`${orientation.value}deg`}(orientation);return`${type}(${[serializedOrientation,...colorStops.sort(((colorStop1,colorStop2)=>{const getNumericStopValue=colorStop=>{var _colorStop$length;return void 0===(null==colorStop||null===(_colorStop$length=colorStop.length)||void 0===_colorStop$length?void 0:_colorStop$length.value)?0:parseInt(colorStop.length.value)};return getNumericStopValue(colorStop1)-getNumericStopValue(colorStop2)})).map(serializeGradientColorStop)].filter(Boolean).join(",")})`}function hasUnsupportedLength(item){return void 0===item.length||"%"!==item.length.type}function getStopCssColor(colorStop){switch(colorStop.type){case"hex":return`#${colorStop.value}`;case"literal":return colorStop.value;case"rgb":case"rgba":return`${colorStop.type}(${colorStop.value.join(",")})`;default:return"transparent"}}(0,colord.l7)([names.Z]);var emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),flex_block_component=__webpack_require__("./packages/components/src/flex/flex-block/component.tsx");const SelectWrapper=(0,emotion_styled_base_browser_esm.Z)(flex_block_component.Z,{target:"e10bzpgi1"})({name:"1gvx10y",styles:"flex-grow:5"}),AccessoryWrapper=(0,emotion_styled_base_browser_esm.Z)(flex_block_component.Z,{target:"e10bzpgi0"})({name:"1gvx10y",styles:"flex-grow:5"});try{SelectWrapper.displayName="SelectWrapper",SelectWrapper.__docgenInfo={description:"",displayName:"SelectWrapper",props:{children:{defaultValue:null,description:"The children elements.",name:"children",required:!1,type:{name:"ReactNode"}},display:{defaultValue:null,description:"The (CSS) display of the `FlexItem`.",name:"display",required:!1,type:{name:"Display"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/custom-gradient-picker/styles/custom-gradient-picker-styles.tsx#SelectWrapper"]={docgenInfo:SelectWrapper.__docgenInfo,name:"SelectWrapper",path:"packages/components/src/custom-gradient-picker/styles/custom-gradient-picker-styles.tsx#SelectWrapper"})}catch(__react_docgen_typescript_loader_error){}try{AccessoryWrapper.displayName="AccessoryWrapper",AccessoryWrapper.__docgenInfo={description:"",displayName:"AccessoryWrapper",props:{children:{defaultValue:null,description:"The children elements.",name:"children",required:!1,type:{name:"ReactNode"}},display:{defaultValue:null,description:"The (CSS) display of the `FlexItem`.",name:"display",required:!1,type:{name:"Display"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/custom-gradient-picker/styles/custom-gradient-picker-styles.tsx#AccessoryWrapper"]={docgenInfo:AccessoryWrapper.__docgenInfo,name:"AccessoryWrapper",path:"packages/components/src/custom-gradient-picker/styles/custom-gradient-picker-styles.tsx#AccessoryWrapper"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const GradientAnglePicker=_ref=>{var _gradientAST$orientat,_gradientAST$orientat2;let{gradientAST:gradientAST,hasGradient:hasGradient,onChange:onChange}=_ref;const angle=null!==(_gradientAST$orientat=null==gradientAST||null===(_gradientAST$orientat2=gradientAST.orientation)||void 0===_gradientAST$orientat2?void 0:_gradientAST$orientat2.value)&&void 0!==_gradientAST$orientat?_gradientAST$orientat:constants.KE;return(0,jsx_runtime.jsx)(angle_picker_control.Z,{__nextHasNoMarginBottom:!0,onChange:newAngle=>{onChange(serializeGradient({...gradientAST,orientation:{type:"angular",value:`${newAngle}`}}))},value:hasGradient?angle:""})};GradientAnglePicker.displayName="GradientAnglePicker";const GradientTypePicker=_ref2=>{let{gradientAST:gradientAST,hasGradient:hasGradient,onChange:onChange}=_ref2;const{type:type}=gradientAST;return(0,jsx_runtime.jsx)(select_control.Z,{__nextHasNoMarginBottom:!0,className:"components-custom-gradient-picker__type-picker",label:(0,i18n_build_module.__)("Type"),labelPosition:"top",onChange:next=>{"linear-gradient"===next&&onChange(serializeGradient({...gradientAST,orientation:gradientAST.orientation?void 0:constants.Pg,type:"linear-gradient"})),"radial-gradient"===next&&(()=>{const{orientation:orientation,...restGradientAST}=gradientAST;onChange(serializeGradient({...restGradientAST,type:"radial-gradient"}))})()},options:constants.C6,size:"__unstable-large",value:hasGradient?type:void 0})};function CustomGradientPicker(_ref3){let{__nextHasNoMargin:__nextHasNoMargin=!1,value:value,onChange:onChange,__experimentalIsRenderedInSidebar:__experimentalIsRenderedInSidebar=!1}=_ref3;const{gradientAST:gradientAST,hasGradient:hasGradient}=function getGradientAstWithDefault(value){var _gradientAST$orientat;let gradientAST,hasGradient=!!value;const valueToParse=null!=value?value:constants.ob;try{gradientAST=node.parse(valueToParse)[0]}catch(error){console.warn("wp.components.CustomGradientPicker failed to parse the gradient with error",error),gradientAST=node.parse(constants.ob)[0],hasGradient=!1}if(Array.isArray(gradientAST.orientation)||"directional"!==(null===(_gradientAST$orientat=gradientAST.orientation)||void 0===_gradientAST$orientat?void 0:_gradientAST$orientat.type)||(gradientAST.orientation={type:"angular",value:constants.dk[gradientAST.orientation.value].toString()}),gradientAST.colorStops.some(hasUnsupportedLength)){const{colorStops:colorStops}=gradientAST,step=100/(colorStops.length-1);colorStops.forEach(((stop,index)=>{stop.length={value:""+step*index,type:"%"}}))}return{gradientAST:gradientAST,hasGradient:hasGradient}}(value),background=function getLinearGradientRepresentation(gradientAST){return serializeGradient({type:"linear-gradient",orientation:constants.Pg,colorStops:gradientAST.colorStops})}(gradientAST),controlPoints=gradientAST.colorStops.map((colorStop=>({color:getStopCssColor(colorStop),position:parseInt(colorStop.length.value)})));return __nextHasNoMargin||(0,build_module.Z)("Outer margin styles for wp.components.CustomGradientPicker",{since:"6.1",version:"6.4",hint:"Set the `__nextHasNoMargin` prop to true to start opting into the new styles, which will become the default in a future version"}),(0,jsx_runtime.jsxs)(v_stack_component.Z,{spacing:4,className:classnames_default()("components-custom-gradient-picker",{"is-next-has-no-margin":__nextHasNoMargin}),children:[(0,jsx_runtime.jsx)(gradient_bar.Z,{__experimentalIsRenderedInSidebar:__experimentalIsRenderedInSidebar,background:background,hasGradient:hasGradient,value:controlPoints,onChange:newControlPoints=>{onChange(serializeGradient(function getGradientAstWithControlPoints(gradientAST,newControlPoints){return{...gradientAST,colorStops:newControlPoints.map((_ref=>{let{position:position,color:color}=_ref;const{r:r,g:g,b:b,a:a}=(0,colord.Vi)(color).toRgb();return{length:{type:"%",value:null==position?void 0:position.toString()},type:a<1?"rgba":"rgb",value:a<1?[`${r}`,`${g}`,`${b}`,`${a}`]:[`${r}`,`${g}`,`${b}`]}}))}}(gradientAST,newControlPoints)))}}),(0,jsx_runtime.jsxs)(component.Z,{gap:3,className:"components-custom-gradient-picker__ui-line",children:[(0,jsx_runtime.jsx)(SelectWrapper,{children:(0,jsx_runtime.jsx)(GradientTypePicker,{gradientAST:gradientAST,hasGradient:hasGradient,onChange:onChange})}),(0,jsx_runtime.jsx)(AccessoryWrapper,{children:"linear-gradient"===gradientAST.type&&(0,jsx_runtime.jsx)(GradientAnglePicker,{gradientAST:gradientAST,hasGradient:hasGradient,onChange:onChange})})]})]})}GradientTypePicker.displayName="GradientTypePicker",CustomGradientPicker.displayName="CustomGradientPicker";var custom_gradient_picker=CustomGradientPicker;try{CustomGradientPicker.displayName="CustomGradientPicker",CustomGradientPicker.__docgenInfo={description:"CustomGradientPicker is a React component that renders a UI for specifying\nlinear or radial gradients. Radial gradients are displayed in the picker as\na slice of the gradient from the center to the outside.\n\n```jsx\nimport { CustomGradientPicker } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MyCustomGradientPicker = () => {\n  const [ gradient, setGradient ] = useState();\n\n  return (\n    <CustomGradientPicker\n\t\tvalue={ gradient }\n\t\tonChange={ setGradient }\n    />\n  );\n};\n```",displayName:"CustomGradientPicker",props:{__nextHasNoMargin:{defaultValue:{value:"false"},description:"Start opting in to the new margin-free styles that will become the default\nin a future version, currently scheduled to be WordPress 6.4. (The prop\ncan be safely removed once this happens.)",name:"__nextHasNoMargin",required:!1,type:{name:"boolean"}},value:{defaultValue:{value:"'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)'"},description:"The current value of the gradient. Pass a css gradient string (See default value for example).\nOptionally pass in a `null` value to specify no gradient is currently selected.",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"The function called when a new gradient has been defined. It is passed to\nthe `currentGradient` as an argument.",name:"onChange",required:!0,type:{name:"(currentGradient: string) => void"}},__experimentalIsRenderedInSidebar:{defaultValue:{value:"false"},description:"Whether this is rendered in the sidebar.",name:"__experimentalIsRenderedInSidebar",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/custom-gradient-picker/index.tsx#CustomGradientPicker"]={docgenInfo:CustomGradientPicker.__docgenInfo,name:"CustomGradientPicker",path:"packages/components/src/custom-gradient-picker/index.tsx#CustomGradientPicker"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/gradient-picker/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/i18n/build-module/index.js"),_wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/deprecated/build-module/index.js"),_circular_option_picker__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/circular-option-picker/index.tsx"),_custom_gradient_picker__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/components/src/custom-gradient-picker/index.tsx"),_v_stack__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/src/v-stack/component.tsx"),_color_palette_styles__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/src/color-palette/styles.ts"),_spacer__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/components/src/spacer/component.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const isMultipleOriginArray=arr=>arr.length>0&&arr.every((gradientObj=>{return obj=gradientObj,Array.isArray(obj.gradients)&&!("gradient"in obj);var obj}));function SingleOrigin(_ref){let{className:className,clearGradient:clearGradient,gradients:gradients,onChange:onChange,value:value,actions:actions}=_ref;const gradientOptions=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>gradients.map(((_ref2,index)=>{let{gradient:gradient,name:name}=_ref2;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_circular_option_picker__WEBPACK_IMPORTED_MODULE_3__.ZP.Option,{value:gradient,isSelected:value===gradient,tooltipText:name||(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.gB)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gradient code: %s"),gradient),style:{color:"rgba( 0,0,0,0 )",background:gradient},onClick:value===gradient?clearGradient:()=>onChange(gradient,index),"aria-label":name?(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.gB)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gradient: %s"),name):(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.gB)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gradient code: %s"),gradient)},gradient)}))),[gradients,value,onChange,clearGradient]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_circular_option_picker__WEBPACK_IMPORTED_MODULE_3__.ZP,{className:className,options:gradientOptions,actions:actions})}function MultipleOrigin(_ref3){let{className:className,clearGradient:clearGradient,gradients:gradients,onChange:onChange,value:value,actions:actions,headingLevel:headingLevel}=_ref3;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_v_stack__WEBPACK_IMPORTED_MODULE_4__.Z,{spacing:3,className:className,children:gradients.map(((_ref4,index)=>{let{name:name,gradients:gradientSet}=_ref4;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_v_stack__WEBPACK_IMPORTED_MODULE_4__.Z,{spacing:2,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_color_palette_styles__WEBPACK_IMPORTED_MODULE_5__.A,{level:headingLevel,children:name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SingleOrigin,{clearGradient:clearGradient,gradients:gradientSet,onChange:gradient=>onChange(gradient,index),value:value,...gradients.length===index+1?{actions:actions}:{}})]},index)}))})}function Component(props){return isMultipleOriginArray(props.gradients)?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MultipleOrigin,{...props}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SingleOrigin,{...props})}function GradientPicker(_ref5){let{__nextHasNoMargin:__nextHasNoMargin=!1,className:className,gradients:gradients=[],onChange:onChange,value:value,clearable:clearable=!0,disableCustomGradients:disableCustomGradients=!1,__experimentalIsRenderedInSidebar:__experimentalIsRenderedInSidebar,headingLevel:headingLevel=2}=_ref5;const clearGradient=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)((()=>onChange(void 0)),[onChange]);__nextHasNoMargin||(0,_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_6__.Z)("Outer margin styles for wp.components.GradientPicker",{since:"6.1",version:"6.4",hint:"Set the `__nextHasNoMargin` prop to true to start opting into the new styles, which will become the default in a future version"});const deprecatedMarginSpacerProps=__nextHasNoMargin?{}:{marginTop:gradients.length?void 0:3,marginBottom:clearable?0:6};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_spacer__WEBPACK_IMPORTED_MODULE_7__.Z,{marginBottom:0,...deprecatedMarginSpacerProps,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_v_stack__WEBPACK_IMPORTED_MODULE_4__.Z,{spacing:gradients.length?4:0,children:[!disableCustomGradients&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_custom_gradient_picker__WEBPACK_IMPORTED_MODULE_8__.Z,{__nextHasNoMargin:!0,__experimentalIsRenderedInSidebar:__experimentalIsRenderedInSidebar,value:value,onChange:onChange}),(gradients.length||clearable)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component,{className:className,clearGradient:clearGradient,gradients:gradients,onChange:onChange,value:value,actions:clearable&&!disableCustomGradients&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_circular_option_picker__WEBPACK_IMPORTED_MODULE_3__.ZP.ButtonAction,{onClick:clearGradient,children:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Clear")}),headingLevel:headingLevel})]})})}SingleOrigin.displayName="SingleOrigin",MultipleOrigin.displayName="MultipleOrigin",Component.displayName="Component",GradientPicker.displayName="GradientPicker",__webpack_exports__.Z=GradientPicker;try{GradientPicker.displayName="GradientPicker",GradientPicker.__docgenInfo={description:"GradientPicker is a React component that renders a color gradient picker to\ndefine a multi step gradient. There's either a _linear_ or a _radial_ type\navailable.\n\n```jsx\nimport { GradientPicker } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst myGradientPicker = () => {\nconst [ gradient, setGradient ] = useState( null );\n\nreturn (\n<GradientPicker\n\t__nextHasNoMargin\n\tvalue={ gradient }\n\tonChange={ ( currentGradient ) => setGradient( currentGradient ) }\n\tgradients={ [\n\t\t{\n\t\t\tname: 'JShine',\n\t\t\tgradient:\n\t\t\t\t'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',\n\t\t\tslug: 'jshine',\n\t\t},\n\t\t{\n\t\t\tname: 'Moonlit Asteroid',\n\t\t\tgradient:\n\t\t\t\t'linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)',\n\t\t\tslug: 'moonlit-asteroid',\n\t\t},\n\t\t{\n\t\t\tname: 'Rastafarie',\n\t\t\tgradient:\n\t\t\t\t'linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)',\n\t\t\tslug: 'rastafari',\n\t\t},\n\t] }\n/>\n);\n};\n```",displayName:"GradientPicker",props:{className:{defaultValue:null,description:"The class name added to the wrapper.",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"The function called when a new gradient has been defined. It is passed to\nthe `currentGradient` as an argument.",name:"onChange",required:!0,type:{name:"(currentGradient: string) => void"}},value:{defaultValue:{value:"'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)'"},description:"The current value of the gradient. Pass a css gradient string (See default value for example).\nOptionally pass in a `null` value to specify no gradient is currently selected.",name:"value",required:!1,type:{name:"string"}},clearable:{defaultValue:{value:"true"},description:"Whether the palette should have a clearing button or not.",name:"clearable",required:!1,type:{name:"boolean"}},headingLevel:{defaultValue:{value:"2"},description:"The heading level. Only applies in cases where gradients are provided\nfrom multiple origins (ie. when the array passed as the `gradients` prop\ncontains two or more items).",name:"headingLevel",required:!1,type:{name:"enum",value:[{value:"2"},{value:"1"},{value:'"1"'},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"6"'}]}},gradients:{defaultValue:{value:"[]"},description:"An array of objects as predefined gradients displayed above the gradient\nselector. Alternatively, if there are multiple sets (or 'origins') of\ngradients, you can pass an array of objects each with a `name` and a\n`gradients` array which will in turn contain the predefined gradient objects.",name:"gradients",required:!1,type:{name:"GradientsProp"}},__nextHasNoMargin:{defaultValue:{value:"false"},description:"Start opting in to the new margin-free styles that will become the default\nin a future version, currently scheduled to be WordPress 6.4. (The prop\ncan be safely removed once this happens.)",name:"__nextHasNoMargin",required:!1,type:{name:"boolean"}},disableCustomGradients:{defaultValue:{value:"false"},description:"If true, the gradient picker will not be displayed and only defined\ngradients from `gradients` will be shown.",name:"disableCustomGradients",required:!1,type:{name:"boolean"}},__experimentalIsRenderedInSidebar:{defaultValue:{value:"false"},description:"Whether this is rendered in the sidebar.",name:"__experimentalIsRenderedInSidebar",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/gradient-picker/index.tsx#GradientPicker"]={docgenInfo:GradientPicker.__docgenInfo,name:"GradientPicker",path:"packages/components/src/gradient-picker/index.tsx#GradientPicker"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/gradient-picker/stories/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},WithNoExistingGradients:function(){return WithNoExistingGradients},MultipleOrigins:function(){return MultipleOrigins}});var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/gradient-picker/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const meta={title:"Components/GradientPicker",component:___WEBPACK_IMPORTED_MODULE_1__.Z,parameters:{sourceLink:"packages/components/src/gradient-picker",controls:{expanded:!0},docs:{source:{state:"open"}},actions:{argTypesRegex:"^on.*"}},argTypes:{value:{control:{type:null}}}};__webpack_exports__.default=meta;const GRADIENTS=[{name:"Vivid cyan blue to vivid purple",gradient:"linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)",slug:"vivid-cyan-blue-to-vivid-purple"},{name:"Light green cyan to vivid green cyan",gradient:"linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)",slug:"light-green-cyan-to-vivid-green-cyan"},{name:"Luminous vivid amber to luminous vivid orange",gradient:"linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)",slug:"luminous-vivid-amber-to-luminous-vivid-orange"},{name:"Luminous vivid orange to vivid red",gradient:"linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%)",slug:"luminous-vivid-orange-to-vivid-red"},{name:"Very light gray to cyan bluish gray",gradient:"linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%)",slug:"very-light-gray-to-cyan-bluish-gray"},{name:"Cool to warm spectrum",gradient:"linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%)",slug:"cool-to-warm-spectrum"}],Template=_ref=>{let{onChange:onChange,...props}=_ref;const[gradient,setGradient]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(null);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{...props,value:gradient,onChange:function(){for(var _len=arguments.length,changeArgs=new Array(_len),_key=0;_key<_len;_key++)changeArgs[_key]=arguments[_key];setGradient(...changeArgs),null==onChange||onChange(...changeArgs)}})};Template.displayName="Template";const Default=Template.bind({});Default.args={__nextHasNoMargin:!0,gradients:GRADIENTS};const WithNoExistingGradients=Template.bind({});WithNoExistingGradients.args={...Default.args,gradients:[]};const MultipleOrigins=Template.bind({});MultipleOrigins.args={...Default.args,gradients:[{name:"Origin 1",gradients:GRADIENTS},{name:"Origin 2",gradients:GRADIENTS}]};try{ComponentMeta.displayName="ComponentMeta",ComponentMeta.__docgenInfo={description:"For the common case where a component's stories are simple components that receives args as props:\n\n```tsx\nexport default { ... } as ComponentMeta<typeof Button>;\n```",displayName:"ComponentMeta",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/gradient-picker/stories/index.tsx#ComponentMeta"]={docgenInfo:ComponentMeta.__docgenInfo,name:"ComponentMeta",path:"packages/components/src/gradient-picker/stories/index.tsx#ComponentMeta"})}catch(__react_docgen_typescript_loader_error){}}}]);