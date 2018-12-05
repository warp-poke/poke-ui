  
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
/*! Spectre.css Icons v0.5.7 | MIT License | github.com/picturepan2/spectre */
.icon {
  box-sizing: border-box;
  display: inline-block;
  font-size: inherit;
  font-style: normal;
  height: 1em;
  position: relative;
  text-indent: -9999px;
  vertical-align: middle;
  width: 1em;
}

.icon::before,
.icon::after {
  content: "";
  display: block;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}

.icon.icon-2x {
  font-size: 1.6rem;
}

.icon.icon-3x {
  font-size: 2.4rem;
}

.icon.icon-4x {
  font-size: 3.2rem;
}

.accordion .icon,
.btn .icon,
.toast .icon,
.menu .icon {
  vertical-align: -10%;
}

.btn-lg .icon {
  vertical-align: -15%;
}

.icon-arrow-down::before,
.icon-arrow-left::before,
.icon-arrow-right::before,
.icon-arrow-up::before,
.icon-downward::before,
.icon-back::before,
.icon-forward::before,
.icon-upward::before {
  border: .1rem solid currentColor;
  border-bottom: 0;
  border-right: 0;
  height: .65em;
  width: .65em;
}

.icon-arrow-down::before {
  transform: translate(-50%, -75%) rotate(225deg);
}

.icon-arrow-left::before {
  transform: translate(-25%, -50%) rotate(-45deg);
}

.icon-arrow-right::before {
  transform: translate(-75%, -50%) rotate(135deg);
}

.icon-arrow-up::before {
  transform: translate(-50%, -25%) rotate(45deg);
}

.icon-back::after,
.icon-forward::after {
  background: currentColor;
  height: .1rem;
  width: .8em;
}

.icon-downward::after,
.icon-upward::after {
  background: currentColor;
  height: .8em;
  width: .1rem;
}

.icon-back::after {
  left: 55%;
}

.icon-back::before {
  transform: translate(-50%, -50%) rotate(-45deg);
}

.icon-downward::after {
  top: 45%;
}

.icon-downward::before {
  transform: translate(-50%, -50%) rotate(-135deg);
}

.icon-forward::after {
  left: 45%;
}

.icon-forward::before {
  transform: translate(-50%, -50%) rotate(135deg);
}

.icon-upward::after {
  top: 55%;
}

.icon-upward::before {
  transform: translate(-50%, -50%) rotate(45deg);
}

.icon-caret::before {
  border-left: .3em solid transparent;
  border-right: .3em solid transparent;
  border-top: .3em solid currentColor;
  height: 0;
  transform: translate(-50%, -25%);
  width: 0;
}

.icon-menu::before {
  background: currentColor;
  box-shadow: 0 -.35em, 0 .35em;
  height: .1rem;
  width: 100%;
}

.icon-apps::before {
  background: currentColor;
  box-shadow: -.35em -.35em, -.35em 0, -.35em .35em, 0 -.35em, 0 .35em, .35em -.35em, .35em 0, .35em .35em;
  height: 3px;
  width: 3px;
}

.icon-resize-horiz::before,
.icon-resize-horiz::after,
.icon-resize-vert::before,
.icon-resize-vert::after {
  border: .1rem solid currentColor;
  border-bottom: 0;
  border-right: 0;
  height: .45em;
  width: .45em;
}

.icon-resize-horiz::before,
.icon-resize-vert::before {
  transform: translate(-50%, -90%) rotate(45deg);
}

.icon-resize-horiz::after,
.icon-resize-vert::after {
  transform: translate(-50%, -10%) rotate(225deg);
}

.icon-resize-horiz::before {
  transform: translate(-90%, -50%) rotate(-45deg);
}

.icon-resize-horiz::after {
  transform: translate(-10%, -50%) rotate(135deg);
}

.icon-more-horiz::before,
.icon-more-vert::before {
  background: currentColor;
  border-radius: 50%;
  box-shadow: -.4em 0, .4em 0;
  height: 3px;
  width: 3px;
}

.icon-more-vert::before {
  box-shadow: 0 -.4em, 0 .4em;
}

.icon-plus::before,
.icon-minus::before,
.icon-cross::before {
  background: currentColor;
  height: .1rem;
  width: 100%;
}

.icon-plus::after,
.icon-cross::after {
  background: currentColor;
  height: 100%;
  width: .1rem;
}

.icon-cross::before {
  width: 100%;
}

.icon-cross::after {
  height: 100%;
}

.icon-cross::before,
.icon-cross::after {
  transform: translate(-50%, -50%) rotate(45deg);
}

.icon-check::before {
  border: .1rem solid currentColor;
  border-right: 0;
  border-top: 0;
  height: .5em;
  transform: translate(-50%, -75%) rotate(-45deg); 
  width: .9em;
}

.icon-stop {
  border: .1rem solid currentColor;
  border-radius: 50%;
}

.icon-stop::before {
  background: currentColor;
  height: .1rem;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 1em;
}

.icon-shutdown {
  border: .1rem solid currentColor;
  border-radius: 50%;
  border-top-color: transparent;
}

.icon-shutdown::before {
  background: currentColor;
  content: "";
  height: .5em;
  top: .1em;
  width: .1rem;
}

.icon-refresh::before {
  border: .1rem solid currentColor;
  border-radius: 50%;
  border-right-color: transparent;
  height: 1em;
  width: 1em;
}

.icon-refresh::after {
  border: .2em solid currentColor;
  border-left-color: transparent;
  border-top-color: transparent;
  height: 0;
  left: 80%;
  top: 20%;
  width: 0;
}

.icon-search::before {
  border: .1rem solid currentColor;
  border-radius: 50%;
  height: .75em;
  left: 5%;
  top: 5%;
  transform: translate(0, 0) rotate(45deg);
  width: .75em;
}

.icon-search::after {
  background: currentColor;
  height: .1rem;
  left: 80%;
  top: 80%;
  transform: translate(-50%, -50%) rotate(45deg);
  width: .4em;
}

.icon-edit::before {
  border: .1rem solid currentColor;
  height: .4em;
  transform: translate(-40%, -60%) rotate(-45deg);
  width: .85em;
}

.icon-edit::after {
  border: .15em solid currentColor;
  border-right-color: transparent;
  border-top-color: transparent;
  height: 0;
  left: 5%;
  top: 95%;
  transform: translate(0, -100%);
  width: 0;
}

.icon-delete::before {
  border: .1rem solid currentColor;
  border-bottom-left-radius: .1rem;
  border-bottom-right-radius: .1rem;
  border-top: 0;
  height: .75em;
  top: 60%;
  width: .75em;
}

.icon-delete::after {
  background: currentColor;
  box-shadow: -.25em .2em, .25em .2em;
  height: .1rem;
  top: .05rem;
  width: .5em;
}

.icon-share {
  border: .1rem solid currentColor;
  border-radius: .1rem;
  border-right: 0;
  border-top: 0;
}

.icon-share::before {
  border: .1rem solid currentColor;
  border-left: 0;
  border-top: 0;
  height: .4em;
  left: 100%;
  top: .25em;
  transform: translate(-125%, -50%) rotate(-45deg);
  width: .4em;
}

.icon-share::after {
  border: .1rem solid currentColor;
  border-bottom: 0;
  border-radius: 75% 0;
  border-right: 0;
  height: .5em;
  width: .6em;
}

.icon-flag::before {
  background: currentColor;
  height: 1em;
  left: 15%;
  width: .1rem;
}

.icon-flag::after {
  border: .1rem solid currentColor;
  border-bottom-right-radius: .1rem;
  border-left: 0;
  border-top-right-radius: .1rem;
  height: .65em;
  left: 60%;
  top: 35%;
  width: .8em;
}

.icon-bookmark::before {
  border: .1rem solid currentColor;
  border-bottom: 0;
  border-top-left-radius: .1rem;
  border-top-right-radius: .1rem;
  height: .9em;
  width: .8em;
}

.icon-bookmark::after {
  border: .1rem solid currentColor;
  border-bottom: 0;
  border-left: 0;
  border-radius: .1rem;
  height: .5em;
  transform: translate(-50%, 35%) rotate(-45deg) skew(15deg, 15deg);
  width: .5em;
}

.icon-download,
.icon-upload {
  border-bottom: .1rem solid currentColor;
}

.icon-download::before,
.icon-upload::before {
  border: .1rem solid currentColor;
  border-bottom: 0;
  border-right: 0;
  height: .5em;
  transform: translate(-50%, -60%) rotate(-135deg); 
  width: .5em;
}

.icon-download::after,
.icon-upload::after {
  background: currentColor;
  height: .6em;
  top: 40%;
  width: .1rem;
}

.icon-upload::before {
  transform: translate(-50%, -60%) rotate(45deg);
}

.icon-upload::after {
  top: 50%;
}

.icon-copy::before {
  border: .1rem solid currentColor;
  border-bottom: 0;
  border-radius: .1rem;
  border-right: 0;
  height: .8em;
  left: 40%;
  top: 35%;
  width: .8em;
}

.icon-copy::after {
  border: .1rem solid currentColor;
  border-radius: .1rem;
  height: .8em;
  left: 60%;
  top: 60%;
  width: .8em;
}

.icon-time {
  border: .1rem solid currentColor;
  border-radius: 50%;
}

.icon-time::before {
  background: currentColor;
  height: .4em;
  transform: translate(-50%, -75%);
  width: .1rem;
}

.icon-time::after {
  background: currentColor;
  height: .3em;
  transform: translate(-50%, -75%) rotate(90deg);
  transform-origin: 50% 90%;
  width: .1rem;
}

.icon-mail::before {
  border: .1rem solid currentColor;
  border-radius: .1rem;
  height: .8em;
  width: 1em;
}

.icon-mail::after {
  border: .1rem solid currentColor;
  border-right: 0;
  border-top: 0;
  height: .5em;
  transform: translate(-50%, -90%) rotate(-45deg) skew(10deg, 10deg);
  width: .5em;
}

.icon-people::before {
  border: .1rem solid currentColor;
  border-radius: 50%;
  height: .45em;
  top: 25%;
  width: .45em;
}

.icon-people::after {
  border: .1rem solid currentColor;
  border-radius: 50% 50% 0 0;
  height: .4em;
  top: 75%;
  width: .9em;
}

.icon-message {
  border: .1rem solid currentColor;
  border-bottom: 0;
  border-radius: .1rem;
  border-right: 0;
}

.icon-message::before {
  border: .1rem solid currentColor;
  border-bottom-right-radius: .1rem;
  border-left: 0;
  border-top: 0;
  height: .8em;
  left: 65%;
  top: 40%;
  width: .7em;
}

.icon-message::after {
  background: currentColor;
  border-radius: .1rem;
  height: .3em;
  left: 10%;
  top: 100%;
  transform: translate(0, -90%) rotate(45deg);
  width: .1rem;
}

.icon-photo {
  border: .1rem solid currentColor;
  border-radius: .1rem;
}

.icon-photo::before {
  border: .1rem solid currentColor;
  border-radius: 50%;
  height: .25em;
  left: 35%;
  top: 35%;
  width: .25em;
}

.icon-photo::after {
  border: .1rem solid currentColor;
  border-bottom: 0;
  border-left: 0;
  height: .5em;
  left: 60%;
  transform: translate(-50%, 25%) rotate(-45deg);
  width: .5em;
}

.icon-link::before,
.icon-link::after {
  border: .1rem solid currentColor;
  border-radius: 5em 0 0 5em;
  border-right: 0;
  height: .5em;
  width: .75em;
}

.icon-link::before {
  transform: translate(-70%, -45%) rotate(-45deg);
}

.icon-link::after {
  transform: translate(-30%, -55%) rotate(135deg);
}

.icon-location::before {
  border: .1rem solid currentColor;
  border-radius: 50% 50% 50% 0;
  height: .8em;
  transform: translate(-50%, -60%) rotate(-45deg);
  width: .8em;
}

.icon-location::after {
  border: .1rem solid currentColor;
  border-radius: 50%;
  height: .2em;
  transform: translate(-50%, -80%);
  width: .2em;
}

.icon-emoji {
  border: .1rem solid currentColor;
  border-radius: 50%;
}

.icon-emoji::before {
  border-radius: 50%;
  box-shadow: -.17em -.1em, .17em -.1em;
  height: .15em;
  width: .15em;
}

.icon-emoji::after {
  border: .1rem solid currentColor;
  border-bottom-color: transparent;
  border-radius: 50%;
  border-right-color: transparent;
  height: .5em;
  transform: translate(-50%, -40%) rotate(-135deg);
  width: .5em;
}
</style>
`;
export default styles;
