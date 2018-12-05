  
/**
  @license Apache 2.0
  Copyright (c) 2017 Horacio "LostInBrittany" Gonzalez for the style module encapsulation of CSS files
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
      http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  @demo demo/index.html
*/

import { html } from '@polymer/lit-element';

const styles = html`
<style>
/*! Spectre.css v0.5.7 | MIT License | github.com/picturepan2/spectre */
/* Manually forked from Normalize.css */
/* normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */
/** 1. Change the default font family in all browsers (opinionated). 2. Correct the line height in all browsers. 3. Prevent adjustments of font size after orientation changes in IE on Windows Phone and in iOS. */
/* Document ========================================================================== */
html {
  font-family: sans-serif; /* 1 */
  -webkit-text-size-adjust: 100%; /* 3 */ 
  -ms-text-size-adjust: 100%; /* 3 */
}

/* Sections ========================================================================== */
/** Remove the margin in all browsers (opinionated). */
body {
  margin: 0;
}

/** Add the correct display in IE 9-. */
article,
aside,
footer,
header,
nav,
section {
  display: block;
}

/** Correct the font size and margin on 'h1' elements within 'section' and 'article' contexts in Chrome, Firefox, and Safari. */
h1 {
  font-size: 2em;
  margin: .67em 0;
}

/* Grouping content ========================================================================== */
/** Add the correct display in IE 9-. 1. Add the correct display in IE. */
figcaption,
figure,
main {
  /* 1 */ display: block;
}

/** Add the correct margin in IE 8 (removed). */
/** 1. Add the correct box sizing in Firefox. 2. Show the overflow in Edge and IE. */
hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/** 1. Correct the inheritance and scaling of font size in all browsers. (removed) 2. Correct the odd 'em' font sizing in all browsers. */
/* Text-level semantics ========================================================================== */
/** 1. Remove the gray background on active links in IE 10. 2. Remove gaps in links underline in iOS 8+ and Safari 8+. */
a {
  background-color: transparent; /* 1 */
  -webkit-text-decoration-skip: objects; /* 2 */
}

/** Remove the outline on focused links when they are also active or hovered in all browsers (opinionated). */
a:active,
a:hover {
  outline-width: 0;
}

/** Modify default styling of address. */
address {
  font-style: normal;
}

/** 1. Remove the bottom border in Firefox 39-. 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari. (removed) */
/** Prevent the duplicate application of 'bolder' by the next rule in Safari 6. */
b,
strong {
  font-weight: inherit;
}

/** Add the correct font weight in Chrome, Edge, and Safari. */
b,
strong {
  font-weight: bolder;
}

/** 1. Correct the inheritance and scaling of font size in all browsers. 2. Correct the odd 'em' font sizing in all browsers. */
code,
kbd,
pre,
samp {
  font-family: "SF Mono", "Segoe UI Mono", "Roboto Mono", Menlo, Courier, monospace; /* 1 (changed) */
  font-size: 1em; /* 2 */
}

/** Add the correct font style in Android 4.3-. */
dfn {
  font-style: italic;
}

/** Add the correct background and color in IE 9-. (Removed) */
/** Add the correct font size in all browsers. */
small {
  font-size: 80%;
  font-weight: 400; /* (added) */
}

/** Prevent 'sub' and 'sup' elements from affecting the line height in all browsers. */
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -.25em;
}

sup {
  top: -.5em;
}

/* Embedded content ========================================================================== */
/** Add the correct display in IE 9-. */
audio,
video {
  display: inline-block;
}

/** Add the correct display in iOS 4-7. */
audio:not([controls]) {
  display: none;
  height: 0;
}

/** Remove the border on images inside links in IE 10-. */
img {
  border-style: none;
}

/** Hide the overflow in IE. */
svg:not(:root) {
  overflow: hidden;
}

/* Forms ========================================================================== */
/** 1. Change the font styles in all browsers (opinionated). 2. Remove the margin in Firefox and Safari. */
button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 (changed) */
  font-size: inherit; /* 1 (changed) */
  line-height: inherit; /* 1 (changed) */
  margin: 0; /* 2 */
}

/** Show the overflow in IE. 1. Show the overflow in Edge. */
button,
input {
  /* 1 */ overflow: visible;
}

/** Remove the inheritance of text transform in Edge, Firefox, and IE. 1. Remove the inheritance of text transform in Firefox. */
button,
select {
  /* 1 */ text-transform: none;
}

/** 1. Prevent a WebKit bug where (2) destroys native 'audio' and 'video' controls in Android 4. 2. Correct the inability to style clickable types in iOS and Safari. */
button,
html [type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button; /* 2 */
}

/** Remove the inner border and padding in Firefox. */
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/** Restore the focus styles unset by the previous rule (removed). */
/** Change the border, margin, and padding in all browsers (opinionated) (changed). */
fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

/** 1. Correct the text wrapping in Edge and IE. 2. Correct the color inheritance from 'fieldset' elements in IE. 3. Remove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers. */
legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/** 1. Add the correct display in IE 9-. 2. Add the correct vertical alignment in Chrome, Firefox, and Opera. */
progress {
  display: inline-block; /* 1 */
  vertical-align: baseline; /* 2 */
}

/** Remove the default vertical scrollbar in IE. */
textarea {
  overflow: auto;
}

/** 1. Add the correct box sizing in IE 10-. 2. Remove the padding in IE 10-. */
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/** Correct the cursor style of increment and decrement buttons in Chrome. */
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/** 1. Correct the odd appearance in Chrome and Safari. 2. Correct the outline style in Safari. */
[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/** Remove the inner padding and cancel buttons in Chrome and Safari on macOS. */
[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/** 1. Correct the inability to style clickable types in iOS and Safari. 2. Change font properties to 'inherit' in Safari. */
::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive ========================================================================== */
/* Add the correct display in IE 9-. 1. Add the correct display in Edge, IE, and Firefox. */
details,
menu {
  display: block;
}

/* Add the correct display in all browsers. */
summary {
  display: list-item;
  outline: none;
}

/* Scripting ========================================================================== */
/** Add the correct display in IE 9-. */
canvas {
  display: inline-block;
}

/** Add the correct display in IE. */
template {
  display: none;
}

/* Hidden ========================================================================== */
/** Add the correct display in IE 10-. */
[hidden] {
  display: none;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 20px;
  line-height: 1.5;
  -webkit-tap-highlight-color: transparent;
}

body {
  background: #fff;
  color: #3b4351;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
  font-size: .8rem;
  overflow-x: hidden;
  text-rendering: optimizeLegibility;
}

a {
  color: #f06;
  outline: none;
  text-decoration: none;
}

a:focus {
  box-shadow: 0 0 0 .1rem rgba(255, 0, 102, .2);
}

a:focus,
a:hover,
a:active,
a.active {
  color: #cc0052;
  text-decoration: underline;
}

a:visited {
  color: #ff3385;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: inherit;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: .5em;
  margin-top: 0;
}

.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  font-weight: 500;
}

h1,
.h1 {
  font-size: 2rem;
}

h2,
.h2 {
  font-size: 1.6rem;
}

h3,
.h3 {
  font-size: 1.4rem;
}

h4,
.h4 {
  font-size: 1.2rem;
}

h5,
.h5 {
  font-size: 1rem;
}

h6,
.h6 {
  font-size: .8rem;
}

p {
  margin: 0 0 1.2rem;
}

a,
ins,
u {
  -webkit-text-decoration-skip: ink edges;
  text-decoration-skip: ink edges;
}

abbr[title] {
  border-bottom: .05rem dotted;
  cursor: help;
  text-decoration: none;
}

kbd {
  background: #303742;
  border-radius: .1rem;
  color: #fff;
  font-size: .7rem; 
  line-height: 1.2;
  padding: .1rem .2rem;
}

mark {
  background: #ffe9b3;
  border-bottom: .05rem solid #ffd367;
  border-radius: .1rem;
  color: #3b4351;
  padding: .05rem .1rem 0;
}

blockquote {
  border-left: .1rem solid #dadee4;
  margin-left: 0;
  padding: .4rem .8rem;
}

blockquote p:last-child {
  margin-bottom: 0;
}

ul,
ol {
  margin: .8rem 0 .8rem .8rem;
  padding: 0;
}

ul ul,
ul ol,
ol ul,
ol ol {
  margin: .8rem 0 .8rem .8rem;
}

ul li,
ol li {
  margin-top: .4rem;
}

ul {
  list-style: disc inside;
}

ul ul {
  list-style-type: circle;
}

ol {
  list-style: decimal inside;
}

ol ol {
  list-style-type: lower-alpha;
}

dl dt {
  font-weight: bold;
}

dl dd {
  margin: .4rem 0 .8rem 0;
}

html:lang(zh),
html:lang(zh-Hans),
.lang-zh,
.lang-zh-hans {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", sans-serif;
}

html:lang(zh-Hant),
.lang-zh-hant {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang TC", "Hiragino Sans CNS", "Microsoft JhengHei", "Helvetica Neue", sans-serif;
}

html:lang(ja),
.lang-ja {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Hiragino Sans", "Hiragino Kaku Gothic Pro", "Yu Gothic", YuGothic, Meiryo, "Helvetica Neue", sans-serif;
}

html:lang(ko),
.lang-ko {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Malgun Gothic", "Helvetica Neue", sans-serif;
}

:lang(zh) ins,
:lang(zh) u,
:lang(ja) ins,
:lang(ja) u,
.lang-cjk ins,
.lang-cjk u {
  border-bottom: .05rem solid;
  text-decoration: none;
}

:lang(zh) del + del,
:lang(zh) del + s,
:lang(zh) ins + ins,
:lang(zh) ins + u,
:lang(zh) s + del,
:lang(zh) s + s,
:lang(zh) u + ins,
:lang(zh) u + u,
:lang(ja) del + del,
:lang(ja) del + s,
:lang(ja) ins + ins,
:lang(ja) ins + u,
:lang(ja) s + del,
:lang(ja) s + s,
:lang(ja) u + ins,
:lang(ja) u + u,
.lang-cjk del + del,
.lang-cjk del + s,
.lang-cjk ins + ins,
.lang-cjk ins + u,
.lang-cjk s + del,
.lang-cjk s + s,
.lang-cjk u + ins,
.lang-cjk u + u {
  margin-left: .125em;
}

.table {
  border-collapse: collapse;
  border-spacing: 0;
  text-align: left; 
  width: 100%;
}

.table.table-striped tbody tr:nth-of-type(odd) {
  background: #f7f8f9;
}

.table tbody tr.active,
.table.table-striped tbody tr.active {
  background: #eef0f3;
}

.table.table-hover tbody tr:hover {
  background: #eef0f3;
}

.table.table-scroll {
  display: block;
  overflow-x: auto;
  padding-bottom: .75rem;
  white-space: nowrap;
}

.table td,
.table th {
  border-bottom: .05rem solid #dadee4;
  padding: .6rem .4rem;
}

.table th {
  border-bottom-width: .1rem;
}

.btn {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #fff;
  border: .05rem solid #f06;
  border-radius: .1rem;
  color: #f06;
  cursor: pointer;
  display: inline-block;
  font-size: .8rem;
  height: 1.8rem;
  line-height: 1.2rem;
  outline: none;
  padding: .25rem .4rem;
  text-align: center;
  text-decoration: none;
  transition: background .2s, border .2s, box-shadow .2s, color .2s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
}

.btn:focus {
  box-shadow: 0 0 0 .1rem rgba(255, 0, 102, .2);
}

.btn:focus,
.btn:hover {
  background: #ffbfd9;
  border-color: #f00060;
  text-decoration: none;
}

.btn:active,
.btn.active {
  background: #f00060;
  border-color: #d60056;
  color: #fff;
  text-decoration: none;
}

.btn:active.loading::after,
.btn.active.loading::after {
  border-bottom-color: #fff;
  border-left-color: #fff;
}

.btn[disabled],
.btn:disabled,
.btn.disabled {
  cursor: default;
  opacity: .5;
  pointer-events: none;
}

.btn.btn-primary {
  background: #f06;
  border-color: #f00060;
  color: #fff;
}

.btn.btn-primary:focus,
.btn.btn-primary:hover {
  background: #e6005c;
  border-color: #d60056;
  color: #fff;
}

.btn.btn-primary:active,
.btn.btn-primary.active {
  background: #db0058;
  border-color: #cc0052;
  color: #fff;
}

.btn.btn-primary.loading::after {
  border-bottom-color: #fff;
  border-left-color: #fff;
}

.btn.btn-success {
  background: #32b643;
  border-color: #2faa3f;
  color: #fff;
}

.btn.btn-success:focus {
  box-shadow: 0 0 0 .1rem rgba(50, 182, 67, .2);
}

.btn.btn-success:focus,
.btn.btn-success:hover {
  background: #30ae40;
  border-color: #2da23c;
  color: #fff;
}

.btn.btn-success:active,
.btn.btn-success.active {
  background: #2a9a39;
  border-color: #278e34;
  color: #fff;
}

.btn.btn-success.loading::after {
  border-bottom-color: #fff;
  border-left-color: #fff;
}

.btn.btn-error {
  background: #e85600;
  border-color: #d95000;
  color: #fff;
}

.btn.btn-error:focus {
  box-shadow: 0 0 0 .1rem rgba(232, 86, 0, .2);
}

.btn.btn-error:focus,
.btn.btn-error:hover {
  background: #de5200;
  border-color: #cf4d00;
  color: #fff;
}

.btn.btn-error:active,
.btn.btn-error.active {
  background: #c44900;
  border-color: #b54300;
  color: #fff;
}

.btn.btn-error.loading::after {
  border-bottom-color: #fff;
  border-left-color: #fff;
}

.btn.btn-link {
  background: transparent;
  border-color: transparent;
  color: #f06;
}

.btn.btn-link:focus,
.btn.btn-link:hover,
.btn.btn-link:active,
.btn.btn-link.active {
  color: #cc0052;
}

.btn.btn-sm {
  font-size: .7rem;
  height: 1.4rem;
  padding: .05rem .3rem;
}

.btn.btn-lg {
  font-size: .9rem;
  height: 2rem;
  padding: .35rem .6rem;
}

.btn.btn-block {
  display: block;
  width: 100%;
}

.btn.btn-action {
  padding-left: 0;
  padding-right: 0; 
  width: 1.8rem;
}

.btn.btn-action.btn-sm {
  width: 1.4rem;
}

.btn.btn-action.btn-lg {
  width: 2rem;
}

.btn.btn-clear {
  background: transparent;
  border: 0;
  color: currentColor;
  height: 1rem;
  line-height: .8rem;
  margin-left: .2rem;
  margin-right: -2px;
  opacity: 1;
  padding: .1rem;
  text-decoration: none;
  width: 1rem;
}

.btn.btn-clear:focus,
.btn.btn-clear:hover {
  background: rgba(247, 248, 249, .5);
  opacity: .95;
}

.btn.btn-clear::before {
  content: "\\2715";
}

.btn-group {
  display: inline-flex;
  display: -ms-inline-flexbox;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.btn-group .btn {
  -ms-flex: 1 0 auto;
  flex: 1 0 auto;
}

.btn-group .btn:first-child:not(:last-child) {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}

.btn-group .btn:not(:first-child):not(:last-child) {
  border-radius: 0;
  margin-left: -.05rem;
}

.btn-group .btn:last-child:not(:first-child) {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  margin-left: -.05rem;
}

.btn-group .btn:focus,
.btn-group .btn:hover,
.btn-group .btn:active,
.btn-group .btn.active {
  z-index: 1;
}

.btn-group.btn-group-block {
  display: flex; 
  display: -ms-flexbox;
}

.btn-group.btn-group-block .btn {
  -ms-flex: 1 0 0;
  flex: 1 0 0;
}

.form-group:not(:last-child) {
  margin-bottom: .4rem;
}

fieldset {
  margin-bottom: .8rem;
}

legend {
  font-size: .9rem;
  font-weight: 500;
  margin-bottom: .8rem;
}

.form-label {
  display: block;
  line-height: 1.2rem;
  padding: .3rem 0;
}

.form-label.label-sm {
  font-size: .7rem;
  padding: .1rem 0;
}

.form-label.label-lg {
  font-size: .9rem;
  padding: .4rem 0;
}

.form-input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #fff;
  background-image: none;
  border: .05rem solid #bcc3ce;
  border-radius: .1rem;
  color: #3b4351;
  display: block;
  font-size: .8rem;
  height: 1.8rem;
  line-height: 1.2rem;
  max-width: 100%;
  outline: none;
  padding: .25rem .4rem;
  position: relative;
  transition: background .2s, border .2s, box-shadow .2s, color .2s;
  width: 100%;
}

.form-input:focus {
  border-color: #f06; 
  box-shadow: 0 0 0 .1rem rgba(255, 0, 102, .2);
}

.form-input:-ms-input-placeholder {
  color: #bcc3ce;
}

.form-input::-ms-input-placeholder {
  color: #bcc3ce;
}

.form-input::placeholder {
  color: #bcc3ce;
}

.form-input.input-sm {
  font-size: .7rem;
  height: 1.4rem;
  padding: .05rem .3rem;
}

.form-input.input-lg {
  font-size: .9rem;
  height: 2rem;
  padding: .35rem .6rem;
}

.form-input.input-inline {
  display: inline-block;
  vertical-align: middle;
  width: auto;
}

.form-input[type="file"] {
  height: auto;
}

textarea.form-input,
textarea.form-input.input-lg,
textarea.form-input.input-sm {
  height: auto;
}

.form-input-hint {
  color: #bcc3ce;
  font-size: .7rem;
  margin-top: .2rem;
}

.has-success .form-input-hint,
.is-success + .form-input-hint {
  color: #32b643;
}

.has-error .form-input-hint,
.is-error + .form-input-hint {
  color: #e85600;
}

.form-select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #fff; 
  border: .05rem solid #bcc3ce;
  border-radius: .1rem;
  color: inherit;
  font-size: .8rem;
  height: 1.8rem;
  line-height: 1.2rem;
  outline: none;
  padding: .25rem .4rem;
  vertical-align: middle;
  width: 100%;
}

.form-select:focus {
  border-color: #f06; 
  box-shadow: 0 0 0 .1rem rgba(255, 0, 102, .2);
}

.form-select::-ms-expand {
  display: none;
}

.form-select.select-sm {
  font-size: .7rem;
  height: 1.4rem;
  padding: .05rem 1.1rem .05rem .3rem;
}

.form-select.select-lg {
  font-size: .9rem;
  height: 2rem;
  padding: .35rem 1.4rem .35rem .6rem;
}

.form-select[size],
.form-select[multiple] {
  height: auto;
  padding: .25rem .4rem;
}

.form-select[size] option,
.form-select[multiple] option {
  padding: .1rem .2rem;
}

.form-select:not([multiple]):not([size]) {
  background: #fff url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%204%205'%3E%3Cpath%20fill='%23667189'%20d='M2%200L0%202h4zm0%205L0%203h4z'/%3E%3C/svg%3E") no-repeat right .35rem center/.4rem .5rem;
  padding-right: 1.2rem;
}

.has-icon-left,
.has-icon-right {
  position: relative;
}

.has-icon-left .form-icon,
.has-icon-right .form-icon {
  height: .8rem;
  margin: 0 .25rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: .8rem;
  z-index: 2;
}

.has-icon-left .form-icon {
  left: .05rem;
}

.has-icon-left .form-input {
  padding-left: 1.3rem;
}

.has-icon-right .form-icon {
  right: .05rem;
}

.has-icon-right .form-input {
  padding-right: 1.3rem;
}

.form-checkbox,
.form-radio,
.form-switch {
  display: block;
  line-height: 1.2rem;
  margin: .2rem 0;
  min-height: 1.2rem;
  padding: .1rem .4rem .1rem 1.2rem;
  position: relative;
}

.form-checkbox input,
.form-radio input,
.form-switch input {
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  position: absolute;
  width: 1px;
}

.form-checkbox input:focus + .form-icon,
.form-radio input:focus + .form-icon,
.form-switch input:focus + .form-icon {
  border-color: #f06; 
  box-shadow: 0 0 0 .1rem rgba(255, 0, 102, .2);
}

.form-checkbox input:checked + .form-icon,
.form-radio input:checked + .form-icon,
.form-switch input:checked + .form-icon {
  background: #f06;
  border-color: #f06;
}

.form-checkbox .form-icon,
.form-radio .form-icon,
.form-switch .form-icon {
  border: .05rem solid #bcc3ce;
  cursor: pointer;
  display: inline-block;
  position: absolute;
  transition: background .2s, border .2s, box-shadow .2s, color .2s;
}

.form-checkbox.input-sm,
.form-radio.input-sm,
.form-switch.input-sm {
  font-size: .7rem;
  margin: 0;
}

.form-checkbox.input-lg,
.form-radio.input-lg,
.form-switch.input-lg {
  font-size: .9rem;
  margin: .3rem 0;
}

.form-checkbox .form-icon,
.form-radio .form-icon {
  background: #fff;
  height: .8rem;
  left: 0;
  top: .3rem;
  width: .8rem;
}

.form-checkbox input:active + .form-icon,
.form-radio input:active + .form-icon {
  background: #eef0f3;
}

.form-checkbox .form-icon {
  border-radius: .1rem;
}

.form-checkbox input:checked + .form-icon::before {
  background-clip: padding-box;
  border: .1rem solid #fff;
  border-left-width: 0;
  border-top-width: 0;
  content: "";
  height: 9px;
  left: 50%;
  margin-left: -3px;
  margin-top: -6px;
  position: absolute;
  top: 50%;
  transform: rotate(45deg);
  width: 6px;
}

.form-checkbox input:indeterminate + .form-icon {
  background: #f06;
  border-color: #f06;
}

.form-checkbox input:indeterminate + .form-icon::before {
  background: #fff;
  content: "";
  height: 2px;
  left: 50%;
  margin-left: -5px;
  margin-top: -1px;
  position: absolute;
  top: 50%;
  width: 10px;
}

.form-radio .form-icon {
  border-radius: 50%;
}

.form-radio input:checked + .form-icon::before {
  background: #fff;
  border-radius: 50%;
  content: "";
  height: 6px;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
}

.form-switch {
  padding-left: 2rem;
}

.form-switch .form-icon {
  background: #bcc3ce;
  background-clip: padding-box;
  border-radius: .45rem;
  height: .9rem;
  left: 0;
  top: .25rem;
  width: 1.6rem;
}

.form-switch .form-icon::before {
  background: #fff;
  border-radius: 50%;
  content: "";
  display: block;
  height: .8rem;
  left: 0;
  position: absolute;
  top: 0;
  transition: background .2s, border .2s, box-shadow .2s, color .2s, left .2s;
  width: .8rem;
}

.form-switch input:checked + .form-icon::before {
  left: 14px;
}

.form-switch input:active + .form-icon::before {
  background: #f7f8f9;
}

.input-group {
  display: flex; 
  display: -ms-flexbox;
}

.input-group .input-group-addon {
  background: #f7f8f9;
  border: .05rem solid #bcc3ce;
  border-radius: .1rem;
  line-height: 1.2rem;
  padding: .25rem .4rem;
  white-space: nowrap;
}

.input-group .input-group-addon.addon-sm {
  font-size: .7rem;
  padding: .05rem .3rem;
}

.input-group .input-group-addon.addon-lg {
  font-size: .9rem;
  padding: .35rem .6rem;
}

.input-group .form-input,
.input-group .form-select {
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  width: 1%;
}

.input-group .input-group-btn {
  z-index: 1;
}

.input-group .form-input:first-child:not(:last-child),
.input-group .form-select:first-child:not(:last-child),
.input-group .input-group-addon:first-child:not(:last-child),
.input-group .input-group-btn:first-child:not(:last-child) {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}

.input-group .form-input:not(:first-child):not(:last-child),
.input-group .form-select:not(:first-child):not(:last-child),
.input-group .input-group-addon:not(:first-child):not(:last-child),
.input-group .input-group-btn:not(:first-child):not(:last-child) {
  border-radius: 0;
  margin-left: -.05rem;
}

.input-group .form-input:last-child:not(:first-child),
.input-group .form-select:last-child:not(:first-child),
.input-group .input-group-addon:last-child:not(:first-child),
.input-group .input-group-btn:last-child:not(:first-child) {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  margin-left: -.05rem;
}

.input-group .form-input:focus,
.input-group .form-select:focus,
.input-group .input-group-addon:focus,
.input-group .input-group-btn:focus {
  z-index: 2;
}

.input-group .form-select {
  width: auto;
}

.input-group.input-inline {
  display: inline-flex; 
  display: -ms-inline-flexbox;
}

.has-success .form-input,
.form-input.is-success,
.has-success .form-select,
.form-select.is-success {
  background: #f9fdfa;
  border-color: #32b643;
}

.has-success .form-input:focus,
.form-input.is-success:focus,
.has-success .form-select:focus,
.form-select.is-success:focus {
  box-shadow: 0 0 0 .1rem rgba(50, 182, 67, .2);
}

.has-error .form-input,
.form-input.is-error,
.has-error .form-select,
.form-select.is-error {
  background: #fffaf7;
  border-color: #e85600;
}

.has-error .form-input:focus,
.form-input.is-error:focus,
.has-error .form-select:focus,
.form-select.is-error:focus {
  box-shadow: 0 0 0 .1rem rgba(232, 86, 0, .2);
}

.has-error .form-checkbox .form-icon,
.form-checkbox.is-error .form-icon,
.has-error .form-radio .form-icon,
.form-radio.is-error .form-icon,
.has-error .form-switch .form-icon,
.form-switch.is-error .form-icon {
  border-color: #e85600;
}

.has-error .form-checkbox input:checked + .form-icon,
.form-checkbox.is-error input:checked + .form-icon,
.has-error .form-radio input:checked + .form-icon,
.form-radio.is-error input:checked + .form-icon,
.has-error .form-switch input:checked + .form-icon,
.form-switch.is-error input:checked + .form-icon {
  background: #e85600;
  border-color: #e85600;
}

.has-error .form-checkbox input:focus + .form-icon,
.form-checkbox.is-error input:focus + .form-icon,
.has-error .form-radio input:focus + .form-icon,
.form-radio.is-error input:focus + .form-icon,
.has-error .form-switch input:focus + .form-icon,
.form-switch.is-error input:focus + .form-icon {
  border-color: #e85600; 
  box-shadow: 0 0 0 .1rem rgba(232, 86, 0, .2);
}

.has-error .form-checkbox input:indeterminate + .form-icon,
.form-checkbox.is-error input:indeterminate + .form-icon {
  background: #e85600;
  border-color: #e85600;
}

.form-input:not(:placeholder-shown):invalid {
  border-color: #e85600;
}

.form-input:not(:placeholder-shown):invalid:focus {
  background: #fffaf7; 
  box-shadow: 0 0 0 .1rem rgba(232, 86, 0, .2);
}

.form-input:not(:placeholder-shown):invalid + .form-input-hint {
  color: #e85600;
}

.form-input:disabled,
.form-input.disabled,
.form-select:disabled,
.form-select.disabled {
  background-color: #eef0f3;
  cursor: not-allowed;
  opacity: .5;
}

.form-input[readonly] {
  background-color: #f7f8f9;
}

input:disabled + .form-icon,
input.disabled + .form-icon {
  background: #eef0f3;
  cursor: not-allowed;
  opacity: .5;
}

.form-switch input:disabled + .form-icon::before,
.form-switch input.disabled + .form-icon::before {
  background: #fff;
}

.form-horizontal {
  padding: .4rem 0;
}

.form-horizontal .form-group {
  display: flex;
  display: -ms-flexbox;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.form-inline {
  display: inline-block;
}

.label {
  background: #eef0f3;
  border-radius: .1rem;
  color: #455060;
  display: inline-block; 
  line-height: 1.2;
  padding: .1rem .2rem;
}

.label.label-rounded {
  border-radius: 5rem;
  padding-left: .4rem;
  padding-right: .4rem;
}

.label.label-primary {
  background: #f06;
  color: #fff;
}

.label.label-secondary {
  background: #ffbfd9;
  color: #f06;
}

.label.label-success {
  background: #32b643;
  color: #fff;
}

.label.label-warning {
  background: #ffb700;
  color: #fff;
}

.label.label-error {
  background: #e85600;
  color: #fff;
}

code {
  background: #fcf2f2;
  border-radius: .1rem;
  color: #d73e48;
  font-size: 85%; 
  line-height: 1.2;
  padding: .1rem .2rem;
}

.code {
  border-radius: .1rem;
  color: #3b4351;
  position: relative;
}

.code::before {
  color: #bcc3ce;
  content: attr(data-lang);
  font-size: .7rem;
  position: absolute;
  right: .4rem;
  top: .1rem;
}

.code code {
  background: #f7f8f9;
  color: inherit;
  display: block;
  line-height: 1.5;
  overflow-x: auto;
  padding: 1rem;
  width: 100%;
}

.img-responsive {
  display: block;
  height: auto;
  max-width: 100%;
}

.img-fit-cover {
  object-fit: cover;
}

.img-fit-contain {
  object-fit: contain;
}

.video-responsive {
  display: block;
  overflow: hidden;
  padding: 0;
  position: relative;
  width: 100%;
}

.video-responsive::before {
  content: "";
  display: block;
  padding-bottom: 56.25%;
}

.video-responsive iframe,
.video-responsive object,
.video-responsive embed {
  border: 0;
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
}

video.video-responsive {
  height: auto;
  max-width: 100%;
}

video.video-responsive::before {
  content: none;
}

.video-responsive-4-3::before {
  padding-bottom: 75%;
}

.video-responsive-1-1::before {
  padding-bottom: 100%;
}

.figure {
  margin: 0 0 .4rem 0;
}

.figure .figure-caption {
  color: #66758c;
  margin-top: .4rem;
}

.container {
  margin-left: auto;
  margin-right: auto;
  padding-left: .4rem;
  padding-right: .4rem;
  width: 100%;
}

.container.grid-xl {
  max-width: 1296px;
}

.container.grid-lg {
  max-width: 976px;
}

.container.grid-md {
  max-width: 856px;
}

.container.grid-sm {
  max-width: 616px;
}

.container.grid-xs {
  max-width: 496px;
}

.show-xs,
.show-sm,
.show-md,
.show-lg,
.show-xl {
  display: none !important;
}

.columns {
  display: flex;
  display: -ms-flexbox;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-left: -.4rem;
  margin-right: -.4rem;
}

.columns.col-gapless {
  margin-left: 0;
  margin-right: 0;
}

.columns.col-gapless > .column {
  padding-left: 0;
  padding-right: 0;
}

.columns.col-oneline {
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  overflow-x: auto;
}

.column {
  -ms-flex: 1;
  flex: 1;
  max-width: 100%;
  padding-left: .4rem;
  padding-right: .4rem;
}

.column.col-12,
.column.col-11,
.column.col-10,
.column.col-9,
.column.col-8,
.column.col-7,
.column.col-6,
.column.col-5,
.column.col-4,
.column.col-3,
.column.col-2,
.column.col-1 {
  -ms-flex: none;
  flex: none;
}

.col-12 {
  width: 100%;
}

.col-11 {
  width: 91.66666667%;
}

.col-10 {
  width: 83.33333333%;
}

.col-9 {
  width: 75%;
}

.col-8 {
  width: 66.66666667%;
}

.col-7 {
  width: 58.33333333%;
}

.col-6 {
  width: 50%;
}

.col-5 {
  width: 41.66666667%;
}

.col-4 {
  width: 33.33333333%;
}

.col-3 {
  width: 25%;
}

.col-2 {
  width: 16.66666667%;
}

.col-1 {
  width: 8.33333333%;
}

.col-auto {
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  max-width: none;
  width: auto;
}

.col-mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.col-ml-auto {
  margin-left: auto;
}

.col-mr-auto {
  margin-right: auto;
}

@media (max-width: 1280px) {
  .col-xl-12,
  .col-xl-11,
  .col-xl-10,
  .col-xl-9,
  .col-xl-8,
  .col-xl-7,
  .col-xl-6,
  .col-xl-5,
  .col-xl-4,
  .col-xl-3,
  .col-xl-2,
  .col-xl-1 {
    -ms-flex: none;
    flex: none;
  }
  .col-xl-12 {
    width: 100%;
  }
  .col-xl-11 {
    width: 91.66666667%;
  }
  .col-xl-10 {
    width: 83.33333333%;
  }
  .col-xl-9 {
    width: 75%;
  }
  .col-xl-8 {
    width: 66.66666667%;
  }
  .col-xl-7 {
    width: 58.33333333%;
  }
  .col-xl-6 {
    width: 50%;
  }
  .col-xl-5 {
    width: 41.66666667%;
  }
  .col-xl-4 {
    width: 33.33333333%;
  }
  .col-xl-3 {
    width: 25%;
  }
  .col-xl-2 {
    width: 16.66666667%;
  }
  .col-xl-1 {
    width: 8.33333333%;
  }
  .hide-xl {
    display: none !important;
  }
  .show-xl {
    display: block !important;
  }
}

@media (max-width: 960px) {
  .col-lg-12,
  .col-lg-11,
  .col-lg-10,
  .col-lg-9,
  .col-lg-8,
  .col-lg-7,
  .col-lg-6,
  .col-lg-5,
  .col-lg-4,
  .col-lg-3,
  .col-lg-2,
  .col-lg-1 {
    -ms-flex: none;
    flex: none;
  }
  .col-lg-12 {
    width: 100%;
  }
  .col-lg-11 {
    width: 91.66666667%;
  }
  .col-lg-10 {
    width: 83.33333333%;
  }
  .col-lg-9 {
    width: 75%;
  }
  .col-lg-8 {
    width: 66.66666667%;
  }
  .col-lg-7 {
    width: 58.33333333%;
  }
  .col-lg-6 {
    width: 50%;
  }
  .col-lg-5 {
    width: 41.66666667%;
  }
  .col-lg-4 {
    width: 33.33333333%;
  }
  .col-lg-3 {
    width: 25%;
  }
  .col-lg-2 {
    width: 16.66666667%;
  }
  .col-lg-1 {
    width: 8.33333333%;
  }
  .hide-lg {
    display: none !important;
  }
  .show-lg {
    display: block !important;
  }
}

@media (max-width: 840px) {
  .col-md-12,
  .col-md-11,
  .col-md-10,
  .col-md-9,
  .col-md-8,
  .col-md-7,
  .col-md-6,
  .col-md-5,
  .col-md-4,
  .col-md-3,
  .col-md-2,
  .col-md-1 {
    -ms-flex: none;
    flex: none;
  }
  .col-md-12 {
    width: 100%;
  }
  .col-md-11 {
    width: 91.66666667%;
  }
  .col-md-10 {
    width: 83.33333333%;
  }
  .col-md-9 {
    width: 75%;
  }
  .col-md-8 {
    width: 66.66666667%;
  }
  .col-md-7 {
    width: 58.33333333%;
  }
  .col-md-6 {
    width: 50%;
  }
  .col-md-5 {
    width: 41.66666667%;
  }
  .col-md-4 {
    width: 33.33333333%;
  }
  .col-md-3 {
    width: 25%;
  }
  .col-md-2 {
    width: 16.66666667%;
  }
  .col-md-1 {
    width: 8.33333333%;
  }
  .hide-md {
    display: none !important;
  }
  .show-md {
    display: block !important;
  }
}

@media (max-width: 600px) {
  .col-sm-12,
  .col-sm-11,
  .col-sm-10,
  .col-sm-9,
  .col-sm-8,
  .col-sm-7,
  .col-sm-6,
  .col-sm-5,
  .col-sm-4,
  .col-sm-3,
  .col-sm-2,
  .col-sm-1 {
    -ms-flex: none;
    flex: none;
  }
  .col-sm-12 {
    width: 100%;
  }
  .col-sm-11 {
    width: 91.66666667%;
  }
  .col-sm-10 {
    width: 83.33333333%;
  }
  .col-sm-9 {
    width: 75%;
  }
  .col-sm-8 {
    width: 66.66666667%;
  }
  .col-sm-7 {
    width: 58.33333333%;
  }
  .col-sm-6 {
    width: 50%;
  }
  .col-sm-5 {
    width: 41.66666667%;
  }
  .col-sm-4 {
    width: 33.33333333%;
  }
  .col-sm-3 {
    width: 25%;
  }
  .col-sm-2 {
    width: 16.66666667%;
  }
  .col-sm-1 {
    width: 8.33333333%;
  }
  .hide-sm {
    display: none !important;
  }
  .show-sm {
    display: block !important;
  }
}

@media (max-width: 480px) {
  .col-xs-12,
  .col-xs-11,
  .col-xs-10,
  .col-xs-9,
  .col-xs-8,
  .col-xs-7,
  .col-xs-6,
  .col-xs-5,
  .col-xs-4,
  .col-xs-3,
  .col-xs-2,
  .col-xs-1 {
    -ms-flex: none;
    flex: none;
  }
  .col-xs-12 {
    width: 100%;
  }
  .col-xs-11 {
    width: 91.66666667%;
  }
  .col-xs-10 {
    width: 83.33333333%;
  }
  .col-xs-9 {
    width: 75%;
  }
  .col-xs-8 {
    width: 66.66666667%;
  }
  .col-xs-7 {
    width: 58.33333333%;
  }
  .col-xs-6 {
    width: 50%;
  }
  .col-xs-5 {
    width: 41.66666667%;
  }
  .col-xs-4 {
    width: 33.33333333%;
  }
  .col-xs-3 {
    width: 25%;
  }
  .col-xs-2 {
    width: 16.66666667%;
  }
  .col-xs-1 {
    width: 8.33333333%;
  }
  .hide-xs {
    display: none !important;
  }
  .show-xs {
    display: block !important;
  }
}

.hero {
  display: flex;
  display: -ms-flexbox;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding-bottom: 4rem;
  padding-top: 4rem;
}

.hero.hero-sm {
  padding-bottom: 2rem;
  padding-top: 2rem;
}

.hero.hero-lg {
  padding-bottom: 8rem;
  padding-top: 8rem;
}

.hero .hero-body {
  padding: .4rem;
}

.navbar {
  align-items: stretch;
  display: flex;
  display: -ms-flexbox;
  -ms-flex-align: stretch;
  -ms-flex-pack: justify;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  justify-content: space-between;
}

.navbar .navbar-section {
  align-items: center;
  display: flex;
  display: -ms-flexbox;
  -ms-flex: 1 0 0;
  flex: 1 0 0; 
  -ms-flex-align: center;
}

.navbar .navbar-section:not(:first-child):last-child {
  -ms-flex-pack: end;
  justify-content: flex-end;
}

.navbar .navbar-center {
  align-items: center;
  display: flex;
  display: -ms-flexbox;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto; 
  -ms-flex-align: center;
}

.navbar .navbar-brand {
  font-size: .9rem;
  text-decoration: none;
}

.accordion input:checked ~ .accordion-header .icon,
.accordion[open] .accordion-header .icon {
  transform: rotate(90deg);
}

.accordion input:checked ~ .accordion-body,
.accordion[open] .accordion-body {
  max-height: 50rem;
}

.accordion .accordion-header {
  display: block;
  padding: .2rem .4rem;
}

.accordion .accordion-header .icon {
  transition: transform .25s;
}

.accordion .accordion-body {
  margin-bottom: .4rem;
  max-height: 0;
  overflow: hidden;
  transition: max-height .25s;
}

summary.accordion-header::-webkit-details-marker {
  display: none;
}

.avatar {
  background: #f06;
  border-radius: 50%;
  color: rgba(255, 255, 255, .85);
  display: inline-block;
  font-size: .8rem;
  font-weight: 300;
  height: 1.6rem;
  line-height: 1.25;
  margin: 0;
  position: relative;
  vertical-align: middle; 
  width: 1.6rem;
}

.avatar.avatar-xs {
  font-size: .4rem;
  height: .8rem;
  width: .8rem;
}

.avatar.avatar-sm {
  font-size: .6rem;
  height: 1.2rem;
  width: 1.2rem;
}

.avatar.avatar-lg {
  font-size: 1.2rem;
  height: 2.4rem;
  width: 2.4rem;
}

.avatar.avatar-xl {
  font-size: 1.6rem;
  height: 3.2rem;
  width: 3.2rem;
}

.avatar img {
  border-radius: 50%;
  height: 100%;
  position: relative;
  width: 100%;
  z-index: 1;
}

.avatar .avatar-icon,
.avatar .avatar-presence {
  background: #fff;
  bottom: 14.64%;
  height: 50%;
  padding: .1rem;
  position: absolute;
  right: 14.64%;
  transform: translate(50%, 50%);
  width: 50%;
  z-index: 2;
}

.avatar .avatar-presence {
  background: #bcc3ce;
  border-radius: 50%;
  box-shadow: 0 0 0 .1rem #fff;
  height: .5em;
  width: .5em;
}

.avatar .avatar-presence.online {
  background: #32b643;
}

.avatar .avatar-presence.busy {
  background: #e85600;
}

.avatar .avatar-presence.away {
  background: #ffb700;
}

.avatar[data-initial]::before {
  color: currentColor;
  content: attr(data-initial);
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.badge {
  position: relative;
  white-space: nowrap;
}

.badge[data-badge]::after,
.badge:not([data-badge])::after {
  background: #f06;
  background-clip: padding-box;
  border-radius: .5rem;
  box-shadow: 0 0 0 .1rem #fff;
  color: #fff;
  content: attr(data-badge);
  display: inline-block;
  transform: translate(-.05rem, -.5rem);
}

.badge[data-badge]::after {
  font-size: .7rem;
  height: .9rem;
  line-height: 1;
  min-width: .9rem;
  padding: .1rem .2rem;
  text-align: center;
  white-space: nowrap;
}

.badge:not([data-badge])::after,
.badge[data-badge=""]::after {
  height: 6px;
  min-width: 6px;
  padding: 0;
  width: 6px;
}

.badge.btn::after {
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(50%, -50%);
}

.badge.avatar::after {
  position: absolute;
  right: 14.64%;
  top: 14.64%;
  transform: translate(50%, -50%);
  z-index: 100;
}

.breadcrumb {
  list-style: none;
  margin: .2rem 0;
  padding: .2rem 0;
}

.breadcrumb .breadcrumb-item {
  color: #66758c;
  display: inline-block;
  margin: 0;
  padding: .2rem 0;
}

.breadcrumb .breadcrumb-item:not(:last-child) {
  margin-right: .2rem;
}

.breadcrumb .breadcrumb-item:not(:last-child) a {
  color: #66758c;
}

.breadcrumb .breadcrumb-item:not(:first-child)::before {
  color: #66758c;
  content: "/";
  padding-right: .4rem;
}

.bar {
  background: #eef0f3;
  border-radius: .1rem;
  display: flex;
  display: -ms-flexbox;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  height: .8rem;
  width: 100%;
}

.bar.bar-sm {
  height: .2rem;
}

.bar .bar-item {
  background: #f06;
  color: #fff;
  display: block;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  font-size: .7rem;
  height: 100%;
  line-height: .8rem;
  position: relative;
  text-align: center;
  width: 0;
}

.bar .bar-item:first-child {
  border-bottom-left-radius: .1rem;
  border-top-left-radius: .1rem;
}

.bar .bar-item:last-child {
  border-bottom-right-radius: .1rem;
  border-top-right-radius: .1rem;
  -ms-flex-negative: 1;
  flex-shrink: 1;
}

.bar-slider {
  height: .1rem;
  margin: .4rem 0;
  position: relative;
}

.bar-slider .bar-item {
  left: 0;
  padding: 0;
  position: absolute;
}

.bar-slider .bar-item:not(:last-child):first-child {
  background: #eef0f3;
  z-index: 1;
}

.bar-slider .bar-slider-btn {
  background: #f06;
  border: 0;
  border-radius: 50%;
  height: .6rem;
  padding: 0;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(50%, -50%);
  width: .6rem;
}

.bar-slider .bar-slider-btn:active {
  box-shadow: 0 0 0 .1rem #f06;
}

.card {
  background: #fff;
  border: .05rem solid #dadee4;
  border-radius: .1rem;
  display: flex;
  display: -ms-flexbox;
  -ms-flex-direction: column;
  flex-direction: column;
}

.card .card-header,
.card .card-body,
.card .card-footer {
  padding: .8rem;
  padding-bottom: 0;
}

.card .card-header:last-child,
.card .card-body:last-child,
.card .card-footer:last-child {
  padding-bottom: .8rem;
}

.card .card-body {
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
}

.card .card-image {
  padding-top: .8rem;
}

.card .card-image:first-child {
  padding-top: 0;
}

.card .card-image:first-child img {
  border-top-left-radius: .1rem;
  border-top-right-radius: .1rem;
}

.card .card-image:last-child img {
  border-bottom-left-radius: .1rem;
  border-bottom-right-radius: .1rem;
}

.chip {
  align-items: center;
  background: #eef0f3;
  border-radius: 5rem;
  display: inline-flex;
  display: -ms-inline-flexbox;
  -ms-flex-align: center;
  font-size: 90%;
  height: 1.2rem;
  line-height: .8rem;
  margin: .1rem;
  max-width: 320px;
  overflow: hidden;
  padding: .2rem .4rem;
  text-decoration: none;
  text-overflow: ellipsis;
  vertical-align: middle;
  white-space: nowrap;
}

.chip.active {
  background: #f06;
  color: #fff;
}

.chip .avatar {
  margin-left: -.4rem;
  margin-right: .2rem;
}

.chip .btn-clear {
  border-radius: 50%;
  transform: scale(.75);
}

.dropdown {
  display: inline-block;
  position: relative;
}

.dropdown .menu {
  animation: slide-down .15s ease 1;
  display: none;
  left: 0;
  max-height: 50vh;
  overflow-y: auto;
  position: absolute;
  top: 100%;
}

.dropdown.dropdown-right .menu {
  left: auto;
  right: 0;
}

.dropdown.active .menu,
.dropdown .dropdown-toggle:focus + .menu,
.dropdown .menu:hover {
  display: block;
}

.dropdown .btn-group .dropdown-toggle:nth-last-child(2) {
  border-bottom-right-radius: .1rem;
  border-top-right-radius: .1rem;
}

.empty {
  background: #f7f8f9;
  border-radius: .1rem;
  color: #66758c;
  padding: 3.2rem 1.6rem; 
  text-align: center;
}

.empty .empty-icon {
  margin-bottom: .8rem;
}

.empty .empty-title,
.empty .empty-subtitle {
  margin: .4rem auto;
}

.empty .empty-action {
  margin-top: .8rem;
}

.menu {
  background: #fff;
  border-radius: .1rem;
  box-shadow: 0 .05rem .2rem rgba(48, 55, 66, .3);
  list-style: none;
  margin: 0;
  min-width: 180px;
  padding: .4rem;
  transform: translateY(.2rem);
  z-index: 300;
}

.menu.menu-nav {
  background: transparent;
  box-shadow: none;
}

.menu .menu-item {
  margin-top: 0;
  padding: 0 .4rem;
  text-decoration: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.menu .menu-item > a {
  border-radius: .1rem;
  color: inherit;
  display: block;
  margin: 0 -.4rem;
  padding: .2rem .4rem;
  text-decoration: none;
}

.menu .menu-item > a:focus,
.menu .menu-item > a:hover {
  background: #ffbfd9;
  color: #f06;
}

.menu .menu-item > a:active,
.menu .menu-item > a.active {
  background: #ffbfd9;
  color: #f06;
}

.menu .menu-item .form-checkbox,
.menu .menu-item .form-radio,
.menu .menu-item .form-switch {
  margin: .1rem 0;
}

.menu .menu-item + .menu-item {
  margin-top: .2rem;
}

.menu .menu-badge {
  float: right;
  padding: .2rem 0;
}

.menu .menu-badge .btn {
  margin-top: -.1rem;
}

.modal {
  align-items: center;
  bottom: 0;
  display: none;
  -ms-flex-align: center;
  -ms-flex-pack: center;
  justify-content: center;
  left: 0;
  opacity: 0;
  overflow: hidden;
  padding: .4rem;
  position: fixed;
  right: 0;
  top: 0;
}

.modal:target,
.modal.active {
  display: flex;
  display: -ms-flexbox;
  opacity: 1;
  z-index: 400;
}

.modal:target .modal-overlay,
.modal.active .modal-overlay {
  background: rgba(247, 248, 249, .75);
  bottom: 0;
  cursor: default;
  display: block;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}

.modal:target .modal-container,
.modal.active .modal-container {
  animation: slide-down .2s ease 1;
  z-index: 1;
}

.modal.modal-sm .modal-container {
  max-width: 320px;
  padding: 0 .4rem;
}

.modal.modal-lg .modal-overlay {
  background: #fff;
}

.modal.modal-lg .modal-container {
  box-shadow: none;
  max-width: 960px;
}

.modal-container {
  background: #fff;
  border-radius: .1rem;
  box-shadow: 0 .2rem .5rem rgba(48, 55, 66, .3);
  display: flex;
  display: -ms-flexbox;
  -ms-flex-direction: column;
  flex-direction: column;
  max-height: 75vh;
  max-width: 640px;
  padding: 0 .8rem;
  width: 100%;
}

.modal-container.modal-fullheight {
  max-height: 100vh;
}

.modal-container .modal-header {
  color: #303742;
  padding: .8rem;
}

.modal-container .modal-body {
  overflow-y: auto;
  padding: .8rem;
  position: relative;
}

.modal-container .modal-footer {
  padding: .8rem;
  text-align: right;
}

.nav {
  display: flex;
  display: -ms-flexbox;
  -ms-flex-direction: column;
  flex-direction: column;
  list-style: none;
  margin: .2rem 0;
}

.nav .nav-item a {
  color: #66758c;
  padding: .2rem .4rem;
  text-decoration: none;
}

.nav .nav-item a:focus,
.nav .nav-item a:hover {
  color: #f06;
}

.nav .nav-item.active > a {
  color: #505c6e;
  font-weight: bold;
}

.nav .nav-item.active > a:focus,
.nav .nav-item.active > a:hover {
  color: #f06;
}

.nav .nav {
  margin-bottom: .4rem;
  margin-left: .8rem;
}

.pagination {
  display: flex;
  display: -ms-flexbox;
  list-style: none;
  margin: .2rem 0;
  padding: .2rem 0;
}

.pagination .page-item {
  margin: .2rem .05rem;
}

.pagination .page-item span {
  display: inline-block;
  padding: .2rem .2rem;
}

.pagination .page-item a {
  border-radius: .1rem;
  display: inline-block;
  padding: .2rem .4rem;
  text-decoration: none;
}

.pagination .page-item a:focus,
.pagination .page-item a:hover {
  color: #f06;
}

.pagination .page-item.disabled a {
  cursor: default;
  opacity: .5;
  pointer-events: none;
}

.pagination .page-item.active a {
  background: #f06;
  color: #fff;
}

.pagination .page-item.page-prev,
.pagination .page-item.page-next {
  -ms-flex: 1 0 50%;
  flex: 1 0 50%;
}

.pagination .page-item.page-next {
  text-align: right;
}

.pagination .page-item .page-item-title {
  margin: 0;
}

.pagination .page-item .page-item-subtitle {
  margin: 0;
  opacity: .5;
}

.panel {
  border: .05rem solid #dadee4;
  border-radius: .1rem;
  display: flex;
  display: -ms-flexbox;
  -ms-flex-direction: column;
  flex-direction: column;
}

.panel .panel-header,
.panel .panel-footer {
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  padding: .8rem;
}

.panel .panel-nav {
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
}

.panel .panel-body {
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  overflow-y: auto;
  padding: 0 .8rem;
}

.popover {
  display: inline-block;
  position: relative;
}

.popover .popover-container {
  left: 50%;
  opacity: 0;
  padding: .4rem;
  position: absolute;
  top: 0;
  transform: translate(-50%, -50%) scale(0);
  transition: transform .2s;
  width: 320px;
  z-index: 300;
}

.popover *:focus + .popover-container,
.popover:hover .popover-container {
  display: block;
  opacity: 1;
  transform: translate(-50%, -100%) scale(1);
}

.popover.popover-right .popover-container {
  left: 100%;
  top: 50%;
}

.popover.popover-right *:focus + .popover-container,
.popover.popover-right:hover .popover-container {
  transform: translate(0, -50%) scale(1);
}

.popover.popover-bottom .popover-container {
  left: 50%;
  top: 100%;
}

.popover.popover-bottom *:focus + .popover-container,
.popover.popover-bottom:hover .popover-container {
  transform: translate(-50%, 0) scale(1);
}

.popover.popover-left .popover-container {
  left: 0;
  top: 50%;
}

.popover.popover-left *:focus + .popover-container,
.popover.popover-left:hover .popover-container {
  transform: translate(-100%, -50%) scale(1);
}

.popover .card {
  border: 0; 
  box-shadow: 0 .2rem .5rem rgba(48, 55, 66, .3);
}

.step {
  display: flex;
  display: -ms-flexbox;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  list-style: none;
  margin: .2rem 0;
  width: 100%;
}

.step .step-item {
  -ms-flex: 1 1 0;
  flex: 1 1 0;
  margin-top: 0;
  min-height: 1rem;
  position: relative; 
  text-align: center;
}

.step .step-item:not(:first-child)::before {
  background: #f06;
  content: "";
  height: 2px;
  left: -50%;
  position: absolute;
  top: 9px;
  width: 100%;
}

.step .step-item a {
  color: #f06;
  display: inline-block;
  padding: 20px 10px 0;
  text-decoration: none;
}

.step .step-item a::before {
  background: #f06;
  border: .1rem solid #fff;
  border-radius: 50%;
  content: "";
  display: block;
  height: .6rem;
  left: 50%;
  position: absolute;
  top: .2rem;
  transform: translateX(-50%);
  width: .6rem;
  z-index: 1;
}

.step .step-item.active a::before {
  background: #fff;
  border: .1rem solid #f06;
}

.step .step-item.active ~ .step-item::before {
  background: #dadee4;
}

.step .step-item.active ~ .step-item a {
  color: #bcc3ce;
}

.step .step-item.active ~ .step-item a::before {
  background: #dadee4;
}

.tab {
  align-items: center;
  border-bottom: .05rem solid #dadee4;
  display: flex;
  display: -ms-flexbox;
  -ms-flex-align: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  list-style: none;
  margin: .2rem 0 .15rem 0;
}

.tab .tab-item {
  margin-top: 0;
}

.tab .tab-item a {
  border-bottom: .1rem solid transparent;
  color: inherit;
  display: block;
  margin: 0 .4rem 0 0;
  padding: .4rem .2rem .3rem .2rem;
  text-decoration: none;
}

.tab .tab-item a:focus,
.tab .tab-item a:hover {
  color: #f06;
}

.tab .tab-item.active a,
.tab .tab-item a.active {
  border-bottom-color: #f06;
  color: #f06;
}

.tab .tab-item.tab-action {
  -ms-flex: 1 0 auto;
  flex: 1 0 auto;
  text-align: right;
}

.tab .tab-item .btn-clear {
  margin-top: -.2rem;
}

.tab.tab-block .tab-item {
  -ms-flex: 1 0 0;
  flex: 1 0 0;
  text-align: center;
}

.tab.tab-block .tab-item a {
  margin: 0;
}

.tab.tab-block .tab-item .badge[data-badge]::after {
  position: absolute;
  right: .1rem;
  top: .1rem;
  transform: translate(0, 0);
}

.tab:not(.tab-block) .badge {
  padding-right: 0;
}

.tile {
  align-content: space-between;
  align-items: flex-start;
  display: flex; 
  display: -ms-flexbox;
  -ms-flex-align: start;
  -ms-flex-line-pack: justify;
}

.tile .tile-icon,
.tile .tile-action {
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
}

.tile .tile-content {
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
}

.tile .tile-content:not(:first-child) {
  padding-left: .4rem;
}

.tile .tile-content:not(:last-child) {
  padding-right: .4rem;
}

.tile .tile-title,
.tile .tile-subtitle {
  line-height: 1.2rem;
}

.tile.tile-centered {
  align-items: center; 
  -ms-flex-align: center;
}

.tile.tile-centered .tile-content {
  overflow: hidden;
}

.tile.tile-centered .tile-title,
.tile.tile-centered .tile-subtitle {
  margin-bottom: 0; 
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.toast {
  background: rgba(48, 55, 66, .95);
  border: .05rem solid #303742;
  border-color: #303742;
  border-radius: .1rem;
  color: #fff;
  display: block;
  padding: .4rem;
  width: 100%;
}

.toast.toast-primary {
  background: rgba(255, 0, 102, .95);
  border-color: #f06;
}

.toast.toast-success {
  background: rgba(50, 182, 67, .95);
  border-color: #32b643;
}

.toast.toast-warning {
  background: rgba(255, 183, 0, .95);
  border-color: #ffb700;
}

.toast.toast-error {
  background: rgba(232, 86, 0, .95);
  border-color: #e85600;
}

.toast a {
  color: #fff;
  text-decoration: underline;
}

.toast a:focus,
.toast a:hover,
.toast a:active,
.toast a.active {
  opacity: .75;
}

.toast .btn-clear {
  margin: .1rem;
}

.toast p:last-child {
  margin-bottom: 0;
}

.tooltip {
  position: relative;
}

.tooltip::after {
  background: rgba(48, 55, 66, .95);
  border-radius: .1rem;
  bottom: 100%;
  color: #fff;
  content: attr(data-tooltip);
  display: block;
  font-size: .7rem;
  left: 50%;
  max-width: 320px;
  opacity: 0;
  overflow: hidden;
  padding: .2rem .4rem;
  pointer-events: none;
  position: absolute;
  text-overflow: ellipsis;
  transform: translate(-50%, .4rem);
  transition: opacity .2s, transform .2s;
  white-space: pre;
  z-index: 300;
}

.tooltip:focus::after,
.tooltip:hover::after {
  opacity: 1;
  transform: translate(-50%, -.2rem);
}

.tooltip[disabled],
.tooltip.disabled {
  pointer-events: auto;
}

.tooltip.tooltip-right::after {
  bottom: 50%;
  left: 100%;
  transform: translate(-.2rem, 50%);
}

.tooltip.tooltip-right:focus::after,
.tooltip.tooltip-right:hover::after {
  transform: translate(.2rem, 50%);
}

.tooltip.tooltip-bottom::after {
  bottom: auto;
  top: 100%;
  transform: translate(-50%, -.4rem);
}

.tooltip.tooltip-bottom:focus::after,
.tooltip.tooltip-bottom:hover::after {
  transform: translate(-50%, .2rem);
}

.tooltip.tooltip-left::after {
  bottom: 50%;
  left: auto;
  right: 100%;
  transform: translate(.4rem, 50%);
}

.tooltip.tooltip-left:focus::after,
.tooltip.tooltip-left:hover::after {
  transform: translate(-.2rem, 50%);
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-1.6rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.text-primary {
  color: #f06 !important;
}

a.text-primary:focus,
a.text-primary:hover {
  color: #e6005c;
}

a.text-primary:visited {
  color: #ff1a75;
}

.text-secondary {
  color: #ffb0d0 !important;
}

a.text-secondary:focus,
a.text-secondary:hover {
  color: #ff96c0;
}

a.text-secondary:visited {
  color: #ffc9df;
}

.text-gray {
  color: #bcc3ce !important;
}

a.text-gray:focus,
a.text-gray:hover {
  color: #adb6c4;
}

a.text-gray:visited {
  color: #cbd0d9;
}

.text-light {
  color: #fff !important;
}

a.text-light:focus,
a.text-light:hover {
  color: #f2f2f2;
}

a.text-light:visited {
  color: white;
}

.text-dark {
  color: #3b4351 !important;
}

a.text-dark:focus,
a.text-dark:hover {
  color: #303742;
}

a.text-dark:visited {
  color: #455060;
}

.text-success {
  color: #32b643 !important;
}

a.text-success:focus,
a.text-success:hover {
  color: #2da23c;
}

a.text-success:visited {
  color: #39c94b;
}

.text-warning {
  color: #ffb700 !important;
}

a.text-warning:focus,
a.text-warning:hover {
  color: #e6a500;
}

a.text-warning:visited {
  color: #ffbe1a;
}

.text-error {
  color: #e85600 !important;
}

a.text-error:focus,
a.text-error:hover {
  color: #cf4d00;
}

a.text-error:visited {
  color: #ff6003;
}

.bg-primary {
  background: #f06 !important;
  color: #fff;
}

.bg-secondary {
  background: #ffbfd9 !important;
}

.bg-dark {
  background: #303742 !important;
  color: #fff;
}

.bg-gray {
  background: #f7f8f9 !important;
}

.bg-success {
  background: #32b643 !important;
  color: #fff;
}

.bg-warning {
  background: #ffb700 !important;
  color: #fff;
}

.bg-error {
  background: #e85600 !important;
  color: #fff;
}

.c-hand {
  cursor: pointer;
}

.c-move {
  cursor: move;
}

.c-zoom-in {
  cursor: zoom-in;
}

.c-zoom-out {
  cursor: zoom-out;
}

.c-not-allowed {
  cursor: not-allowed;
}

.c-auto {
  cursor: auto;
}

.d-block {
  display: block;
}

.d-inline {
  display: inline;
}

.d-inline-block {
  display: inline-block;
}

.d-flex {
  display: flex; 
  display: -ms-flexbox;
}

.d-inline-flex {
  display: inline-flex; 
  display: -ms-inline-flexbox;
}

.d-none,
.d-hide {
  display: none !important;
}

.d-visible {
  visibility: visible;
}

.d-invisible {
  visibility: hidden;
}

.text-hide {
  background: transparent;
  border: 0;
  color: transparent;
  font-size: 0;
  line-height: 0;
  text-shadow: none;
}

.text-assistive {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.divider,
.divider-vert {
  display: block;
  position: relative;
}

.divider[data-content]::after,
.divider-vert[data-content]::after {
  background: #fff;
  color: #bcc3ce;
  content: attr(data-content);
  display: inline-block;
  font-size: .7rem;
  padding: 0 .4rem;
  transform: translateY(-.65rem);
}

.divider {
  border-top: .05rem solid #dadee4;
  height: .05rem;
  margin: .4rem 0;
}

.divider[data-content] {
  margin: .8rem 0;
}

.divider-vert {
  display: block;
  padding: .8rem;
}

.divider-vert::before {
  border-left: .05rem solid #dadee4;
  bottom: .4rem;
  content: "";
  display: block;
  left: 50%;
  position: absolute;
  top: .4rem;
  transform: translateX(-50%);
}

.divider-vert[data-content]::after {
  left: 50%;
  padding: .2rem 0;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}

.loading {
  color: transparent !important;
  min-height: .8rem;
  pointer-events: none;
  position: relative;
}

.loading::after {
  animation: loading 500ms infinite linear;
  border: .1rem solid #f06;
  border-radius: 50%;
  border-right-color: transparent;
  border-top-color: transparent;
  content: "";
  display: block;
  height: .8rem;
  left: 50%;
  margin-left: -.4rem;
  margin-top: -.4rem;
  position: absolute;
  top: 50%;
  width: .8rem;
  z-index: 1;
}

.loading.loading-lg {
  min-height: 2rem;
}

.loading.loading-lg::after {
  height: 1.6rem;
  margin-left: -.8rem;
  margin-top: -.8rem;
  width: 1.6rem;
}

.clearfix::after {
  clear: both;
  content: "";
  display: table;
}

.float-left {
  float: left !important;
}

.float-right {
  float: right !important;
}

.p-relative {
  position: relative !important;
}

.p-absolute {
  position: absolute !important;
}

.p-fixed {
  position: fixed !important;
}

.p-sticky {
  position: sticky !important; 
  position: -webkit-sticky !important;
}

.p-centered {
  display: block;
  float: none;
  margin-left: auto;
  margin-right: auto;
}

.flex-centered {
  align-items: center;
  display: flex;
  display: -ms-flexbox;
  -ms-flex-align: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.m-0 {
  margin: 0 !important;
}

.mb-0 {
  margin-bottom: 0 !important;
}

.ml-0 {
  margin-left: 0 !important;
}

.mr-0 {
  margin-right: 0 !important;
}

.mt-0 {
  margin-top: 0 !important;
}

.mx-0 {
  margin-left: 0 !important;
  margin-right: 0 !important;
}

.my-0 {
  margin-bottom: 0 !important;
  margin-top: 0 !important;
}

.m-1 {
  margin: .2rem !important;
}

.mb-1 {
  margin-bottom: .2rem !important;
}

.ml-1 {
  margin-left: .2rem !important;
}

.mr-1 {
  margin-right: .2rem !important;
}

.mt-1 {
  margin-top: .2rem !important;
}

.mx-1 {
  margin-left: .2rem !important;
  margin-right: .2rem !important;
}

.my-1 {
  margin-bottom: .2rem !important;
  margin-top: .2rem !important;
}

.m-2 {
  margin: .4rem !important;
}

.mb-2 {
  margin-bottom: .4rem !important;
}

.ml-2 {
  margin-left: .4rem !important;
}

.mr-2 {
  margin-right: .4rem !important;
}

.mt-2 {
  margin-top: .4rem !important;
}

.mx-2 {
  margin-left: .4rem !important;
  margin-right: .4rem !important;
}

.my-2 {
  margin-bottom: .4rem !important;
  margin-top: .4rem !important;
}

.p-0 {
  padding: 0 !important;
}

.pb-0 {
  padding-bottom: 0 !important;
}

.pl-0 {
  padding-left: 0 !important;
}

.pr-0 {
  padding-right: 0 !important;
}

.pt-0 {
  padding-top: 0 !important;
}

.px-0 {
  padding-left: 0 !important;
  padding-right: 0 !important;
}

.py-0 {
  padding-bottom: 0 !important;
  padding-top: 0 !important;
}

.p-1 {
  padding: .2rem !important;
}

.pb-1 {
  padding-bottom: .2rem !important;
}

.pl-1 {
  padding-left: .2rem !important;
}

.pr-1 {
  padding-right: .2rem !important;
}

.pt-1 {
  padding-top: .2rem !important;
}

.px-1 {
  padding-left: .2rem !important;
  padding-right: .2rem !important;
}

.py-1 {
  padding-bottom: .2rem !important;
  padding-top: .2rem !important;
}

.p-2 {
  padding: .4rem !important;
}

.pb-2 {
  padding-bottom: .4rem !important;
}

.pl-2 {
  padding-left: .4rem !important;
}

.pr-2 {
  padding-right: .4rem !important;
}

.pt-2 {
  padding-top: .4rem !important;
}

.px-2 {
  padding-left: .4rem !important;
  padding-right: .4rem !important;
}

.py-2 {
  padding-bottom: .4rem !important;
  padding-top: .4rem !important;
}

.s-rounded {
  border-radius: .1rem;
}

.s-circle {
  border-radius: 50%;
}

.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}

.text-center {
  text-align: center;
}

.text-justify {
  text-align: justify;
}

.text-lowercase {
  text-transform: lowercase;
}

.text-uppercase {
  text-transform: uppercase;
}

.text-capitalize {
  text-transform: capitalize;
}

.text-normal {
  font-weight: normal;
}

.text-bold {
  font-weight: bold;
}

.text-italic {
  font-style: italic;
}

.text-large {
  font-size: 1.2em;
}

.text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.text-clip {
  overflow: hidden;
  text-overflow: clip;
  white-space: nowrap;
}

.text-break {
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
  word-break: break-word;
  word-wrap: break-word;
}
</style>
`;
export default styles;
