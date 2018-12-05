  
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
/*! Spectre.css Experimentals v0.5.7 | MIT License | github.com/picturepan2/spectre */
.form-autocomplete {
  position: relative;
}

.form-autocomplete .form-autocomplete-input {
  align-content: flex-start;
  display: flex;
  display: -ms-flexbox;
  -ms-flex-line-pack: start;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  height: auto;
  min-height: 1.6rem;
  padding: .1rem;
}

.form-autocomplete .form-autocomplete-input.is-focused {
  border-color: #f06; 
  box-shadow: 0 0 0 .1rem rgba(255, 0, 102, .2);
}

.form-autocomplete .form-autocomplete-input .form-input {
  border-color: transparent;
  box-shadow: none;
  display: inline-block;
  -ms-flex: 1 0 auto;
  flex: 1 0 auto;
  height: 1.2rem;
  line-height: .8rem;
  margin: .1rem;
  width: auto;
}

.form-autocomplete .menu {
  left: 0;
  position: absolute;
  top: 100%;
  width: 100%;
}

.form-autocomplete.autocomplete-oneline .form-autocomplete-input {
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  overflow-x: auto;
}

.form-autocomplete.autocomplete-oneline .chip {
  -ms-flex: 1 0 auto;
  flex: 1 0 auto;
}

.calendar {
  border: .05rem solid #dadee4;
  border-radius: .1rem;
  display: block;
  min-width: 280px;
}

.calendar .calendar-nav {
  align-items: center;
  background: #f7f8f9;
  border-top-left-radius: .1rem;
  border-top-right-radius: .1rem;
  display: flex;
  display: -ms-flexbox;
  -ms-flex-align: center;
  font-size: .9rem;
  padding: .4rem;
}

.calendar .calendar-header,
.calendar .calendar-body {
  display: flex;
  display: -ms-flexbox;
  -ms-flex-pack: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  justify-content: center;
  padding: .4rem 0;
}

.calendar .calendar-header .calendar-date,
.calendar .calendar-body .calendar-date {
  -ms-flex: 0 0 14.28%;
  flex: 0 0 14.28%;
  max-width: 14.28%;
}

.calendar .calendar-header {
  background: #f7f8f9;
  border-bottom: .05rem solid #dadee4;
  color: #bcc3ce;
  font-size: .7rem;
  text-align: center;
}

.calendar .calendar-body {
  color: #66758c;
}

.calendar .calendar-date {
  border: 0;
  padding: .2rem;
}

.calendar .calendar-date .date-item {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: transparent;
  border: .05rem solid transparent;
  border-radius: 50%;
  color: #66758c;
  cursor: pointer;
  font-size: .7rem;
  height: 1.4rem;
  line-height: 1rem;
  outline: none;
  padding: .1rem;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: background .2s, border .2s, box-shadow .2s, color .2s;
  vertical-align: middle;
  white-space: nowrap;
  width: 1.4rem;
}

.calendar .calendar-date .date-item.date-today {
  border-color: #ffb0d0;
  color: #f06;
}

.calendar .calendar-date .date-item:focus {
  box-shadow: 0 0 0 .1rem rgba(255, 0, 102, .2);
}

.calendar .calendar-date .date-item:focus,
.calendar .calendar-date .date-item:hover {
  background: #ffcfe2;
  border-color: #ffb0d0;
  color: #f06;
  text-decoration: none;
}

.calendar .calendar-date .date-item:active,
.calendar .calendar-date .date-item.active {
  background: #f00060;
  border-color: #d60056;
  color: #fff;
}

.calendar .calendar-date .date-item.badge::after {
  position: absolute;
  right: 3px;
  top: 3px;
  transform: translate(50%, -50%);
}

.calendar .calendar-date .date-item:disabled,
.calendar .calendar-date .date-item.disabled,
.calendar .calendar-date .calendar-event:disabled,
.calendar .calendar-date .calendar-event.disabled {
  cursor: default;
  opacity: .25;
  pointer-events: none;
}

.calendar .calendar-date.prev-month .date-item,
.calendar .calendar-date.prev-month .calendar-event,
.calendar .calendar-date.next-month .date-item,
.calendar .calendar-date.next-month .calendar-event {
  opacity: .25;
}

.calendar .calendar-range {
  position: relative;
}

.calendar .calendar-range::before {
  background: #ffbfd9;
  content: "";
  height: 1.4rem;
  left: 0;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.calendar .calendar-range.range-start::before {
  left: 50%;
}

.calendar .calendar-range.range-end::before {
  right: 50%;
}

.calendar .calendar-range.range-start .date-item,
.calendar .calendar-range.range-end .date-item {
  background: #f00060;
  border-color: #d60056;
  color: #fff;
}

.calendar .calendar-range .date-item {
  color: #f06;
}

.calendar.calendar-lg .calendar-body {
  padding: 0;
}

.calendar.calendar-lg .calendar-body .calendar-date {
  border-bottom: .05rem solid #dadee4;
  border-right: .05rem solid #dadee4;
  display: flex;
  display: -ms-flexbox;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 5.5rem;
  padding: 0;
}

.calendar.calendar-lg .calendar-body .calendar-date:nth-child(7n) {
  border-right: 0;
}

.calendar.calendar-lg .calendar-body .calendar-date:nth-last-child(-n+7) {
  border-bottom: 0;
}

.calendar.calendar-lg .date-item {
  align-self: flex-end;
  -ms-flex-item-align: end;
  height: 1.4rem;
  margin-right: .2rem;
  margin-top: .2rem;
}

.calendar.calendar-lg .calendar-range::before {
  top: 19px;
}

.calendar.calendar-lg .calendar-range.range-start::before {
  left: auto;
  width: 19px;
}

.calendar.calendar-lg .calendar-range.range-end::before {
  right: 19px;
}

.calendar.calendar-lg .calendar-events {
  flex-grow: 1;
  -ms-flex-positive: 1;
  line-height: 1;
  overflow-y: auto;
  padding: .2rem;
}

.calendar.calendar-lg .calendar-event {
  border-radius: .1rem;
  display: block;
  font-size: .7rem;
  margin: .1rem auto;
  overflow: hidden;
  padding: 3px 4px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.carousel .carousel-locator:nth-of-type(1):checked ~ .carousel-container .carousel-item:nth-of-type(1),
.carousel .carousel-locator:nth-of-type(2):checked ~ .carousel-container .carousel-item:nth-of-type(2),
.carousel .carousel-locator:nth-of-type(3):checked ~ .carousel-container .carousel-item:nth-of-type(3),
.carousel .carousel-locator:nth-of-type(4):checked ~ .carousel-container .carousel-item:nth-of-type(4),
.carousel .carousel-locator:nth-of-type(5):checked ~ .carousel-container .carousel-item:nth-of-type(5),
.carousel .carousel-locator:nth-of-type(6):checked ~ .carousel-container .carousel-item:nth-of-type(6),
.carousel .carousel-locator:nth-of-type(7):checked ~ .carousel-container .carousel-item:nth-of-type(7),
.carousel .carousel-locator:nth-of-type(8):checked ~ .carousel-container .carousel-item:nth-of-type(8) {
  animation: carousel-slidein .75s ease-in-out 1;
  opacity: 1;
  z-index: 100;
}

.carousel .carousel-locator:nth-of-type(1):checked ~ .carousel-nav .nav-item:nth-of-type(1),
.carousel .carousel-locator:nth-of-type(2):checked ~ .carousel-nav .nav-item:nth-of-type(2),
.carousel .carousel-locator:nth-of-type(3):checked ~ .carousel-nav .nav-item:nth-of-type(3),
.carousel .carousel-locator:nth-of-type(4):checked ~ .carousel-nav .nav-item:nth-of-type(4),
.carousel .carousel-locator:nth-of-type(5):checked ~ .carousel-nav .nav-item:nth-of-type(5),
.carousel .carousel-locator:nth-of-type(6):checked ~ .carousel-nav .nav-item:nth-of-type(6),
.carousel .carousel-locator:nth-of-type(7):checked ~ .carousel-nav .nav-item:nth-of-type(7),
.carousel .carousel-locator:nth-of-type(8):checked ~ .carousel-nav .nav-item:nth-of-type(8) {
  color: #f7f8f9;
}

.carousel {
  background: #f7f8f9;
  display: block;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  position: relative;
  width: 100%;
  z-index: 1;
}

.carousel .carousel-container {
  height: 100%;
  left: 0;
  position: relative;
}

.carousel .carousel-container::before {
  content: "";
  display: block;
  padding-bottom: 56.25%;
}

.carousel .carousel-container .carousel-item {
  animation: carousel-slideout 1s ease-in-out 1;
  height: 100%;
  left: 0;
  margin: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.carousel .carousel-container .carousel-item:hover .item-prev,
.carousel .carousel-container .carousel-item:hover .item-next {
  opacity: 1;
}

.carousel .carousel-container .item-prev,
.carousel .carousel-container .item-next {
  background: rgba(247, 248, 249, .25);
  border-color: rgba(247, 248, 249, .5);
  color: #f7f8f9;
  opacity: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: all .4s;
  z-index: 100;
}

.carousel .carousel-container .item-prev {
  left: 1rem;
}

.carousel .carousel-container .item-next {
  right: 1rem;
}

.carousel .carousel-nav {
  bottom: .4rem;
  display: flex;
  display: -ms-flexbox;
  -ms-flex-pack: center;
  justify-content: center;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 10rem;
  z-index: 100;
}

.carousel .carousel-nav .nav-item {
  color: rgba(247, 248, 249, .5);
  display: block;
  -ms-flex: 1 0 auto;
  flex: 1 0 auto;
  height: 1.6rem;
  margin: .2rem;
  max-width: 2.5rem;
  position: relative;
}

.carousel .carousel-nav .nav-item::before {
  background: currentColor;
  content: "";
  display: block;
  height: .1rem;
  position: absolute;
  top: .5rem;
  width: 100%;
}

@keyframes carousel-slidein {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes carousel-slideout {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%);
  }
}

.comparison-slider {
  height: 50vh;
  overflow: hidden;
  -webkit-overflow-scrolling: touch; 
  position: relative;
  width: 100%;
}

.comparison-slider .comparison-before,
.comparison-slider .comparison-after {
  height: 100%;
  left: 0;
  margin: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
}

.comparison-slider .comparison-before img,
.comparison-slider .comparison-after img {
  height: 100%;
  object-fit: cover;
  object-position: left center;
  position: absolute;
  width: 100%;
}

.comparison-slider .comparison-before {
  width: 100%;
  z-index: 1;
}

.comparison-slider .comparison-before .comparison-label {
  right: .8rem;
}

.comparison-slider .comparison-after {
  max-width: 100%;
  min-width: 0;
  z-index: 2;
}

.comparison-slider .comparison-after::before {
  background: transparent;
  content: "";
  cursor: default;
  height: 100%;
  left: 0;
  position: absolute;
  right: .8rem;
  top: 0;
  z-index: 1;
}

.comparison-slider .comparison-after::after {
  background: currentColor;
  border-radius: 50%;
  box-shadow: 0 -5px, 0 5px;
  color: #fff;
  content: "";
  height: 3px;
  position: absolute;
  right: .4rem;
  top: 50%;
  transform: translate(50%, -50%);
  width: 3px;
}

.comparison-slider .comparison-after .comparison-label {
  left: .8rem;
}

.comparison-slider .comparison-resizer {
  animation: first-run 1.5s 1 ease-in-out;
  cursor: ew-resize;
  height: .8rem;
  left: 0;
  max-width: 100%;
  min-width: .8rem;
  opacity: 0;
  outline: none;
  position: relative;
  resize: horizontal;
  top: 50%;
  transform: translateY(-50%) scaleY(30);
  width: 0;
}

.comparison-slider .comparison-label {
  background: rgba(48, 55, 66, .5);
  bottom: .8rem;
  color: #fff;
  padding: .2rem .4rem;
  position: absolute;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

@keyframes first-run {
  0% {
    width: 0;
  }
  25% {
    width: 2.4rem;
  }
  50% {
    width: .8rem;
  }
  75% {
    width: 1.2rem;
  }
  100% {
    width: 0;
  }
}

.filter .filter-tag#tag-0:checked ~ .filter-nav .chip[for="tag-0"],
.filter .filter-tag#tag-1:checked ~ .filter-nav .chip[for="tag-1"],
.filter .filter-tag#tag-2:checked ~ .filter-nav .chip[for="tag-2"],
.filter .filter-tag#tag-3:checked ~ .filter-nav .chip[for="tag-3"],
.filter .filter-tag#tag-4:checked ~ .filter-nav .chip[for="tag-4"],
.filter .filter-tag#tag-5:checked ~ .filter-nav .chip[for="tag-5"],
.filter .filter-tag#tag-6:checked ~ .filter-nav .chip[for="tag-6"],
.filter .filter-tag#tag-7:checked ~ .filter-nav .chip[for="tag-7"],
.filter .filter-tag#tag-8:checked ~ .filter-nav .chip[for="tag-8"] {
  background: #f06;
  color: #fff;
}

.filter .filter-tag#tag-1:checked ~ .filter-body .filter-item:not([data-tag~="tag-1"]),
.filter .filter-tag#tag-2:checked ~ .filter-body .filter-item:not([data-tag~="tag-2"]),
.filter .filter-tag#tag-3:checked ~ .filter-body .filter-item:not([data-tag~="tag-3"]),
.filter .filter-tag#tag-4:checked ~ .filter-body .filter-item:not([data-tag~="tag-4"]),
.filter .filter-tag#tag-5:checked ~ .filter-body .filter-item:not([data-tag~="tag-5"]),
.filter .filter-tag#tag-6:checked ~ .filter-body .filter-item:not([data-tag~="tag-6"]),
.filter .filter-tag#tag-7:checked ~ .filter-body .filter-item:not([data-tag~="tag-7"]),
.filter .filter-tag#tag-8:checked ~ .filter-body .filter-item:not([data-tag~="tag-8"]) {
  display: none;
}

.filter .filter-nav {
  margin: .4rem 0;
}

.filter .filter-body {
  display: flex;
  display: -ms-flexbox;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.meter {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #f7f8f9;
  border: 0;
  border-radius: .1rem;
  display: block;
  height: .8rem; 
  width: 100%;
}

.meter::-webkit-meter-inner-element {
  display: block;
}

.meter::-webkit-meter-bar,
.meter::-webkit-meter-optimum-value,
.meter::-webkit-meter-suboptimum-value,
.meter::-webkit-meter-even-less-good-value {
  border-radius: .1rem;
}

.meter::-webkit-meter-bar {
  background: #f7f8f9;
}

.meter::-webkit-meter-optimum-value {
  background: #32b643;
}

.meter::-webkit-meter-suboptimum-value {
  background: #ffb700;
}

.meter::-webkit-meter-even-less-good-value {
  background: #e85600;
}

.meter::-moz-meter-bar,
.meter:-moz-meter-optimum,
.meter:-moz-meter-sub-optimum,
.meter:-moz-meter-sub-sub-optimum {
  border-radius: .1rem;
}

.meter:-moz-meter-optimum::-moz-meter-bar {
  background: #32b643;
}

.meter:-moz-meter-sub-optimum::-moz-meter-bar {
  background: #ffb700;
}

.meter:-moz-meter-sub-sub-optimum::-moz-meter-bar {
  background: #e85600;
}

.off-canvas {
  display: flex;
  display: -ms-flexbox;
  -ms-flex-flow: nowrap;
  flex-flow: nowrap;
  height: 100%;
  position: relative;
  width: 100%;
}

.off-canvas .off-canvas-toggle {
  display: block;
  left: .4rem; 
  position: absolute;
  top: .4rem;
  transition: none;
  z-index: 1;
}

.off-canvas .off-canvas-sidebar {
  background: #f7f8f9;
  bottom: 0;
  left: 0;
  min-width: 10rem;
  overflow-y: auto;
  position: fixed;
  top: 0;
  transform: translateX(-100%); 
  transition: transform .25s;
  z-index: 200;
}

.off-canvas .off-canvas-content {
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  height: 100%;
  padding: .4rem .4rem .4rem 4rem;
}

.off-canvas .off-canvas-overlay {
  background: rgba(48, 55, 66, .1);
  border-color: transparent;
  border-radius: 0;
  bottom: 0;
  display: none;
  height: 100%;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
}

.off-canvas .off-canvas-sidebar:target,
.off-canvas .off-canvas-sidebar.active {
  transform: translateX(0);
}

.off-canvas .off-canvas-sidebar:target ~ .off-canvas-overlay,
.off-canvas .off-canvas-sidebar.active ~ .off-canvas-overlay {
  display: block;
  z-index: 100;
}

@media (min-width: 960px) {
  .off-canvas.off-canvas-sidebar-show .off-canvas-toggle {
    display: none;
  }
  .off-canvas.off-canvas-sidebar-show .off-canvas-sidebar {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    position: relative;
    transform: none;
  }
  .off-canvas.off-canvas-sidebar-show .off-canvas-overlay {
    display: none !important;
  }
}

.parallax {
  display: block;
  height: auto;
  position: relative;
  width: auto;
}

.parallax .parallax-content {
  box-shadow: 0 1rem 2.1rem rgba(48, 55, 66, .3);
  height: auto;
  transform: perspective(1000px);
  transform-style: preserve-3d;
  transition: all .4s ease;
  width: 100%;
}

.parallax .parallax-content::before {
  content: "";
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.parallax .parallax-front {
  align-items: center;
  color: #fff;
  display: flex;
  display: -ms-flexbox;
  -ms-flex-align: center;
  -ms-flex-pack: center;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  text-align: center;
  text-shadow: 0 0 20px rgba(48, 55, 66, .75);
  top: 0;
  transform: translateZ(50px) scale(.95);
  transition: transform .4s;
  width: 100%;
  z-index: 1;
}

.parallax .parallax-top-left {
  height: 50%;
  left: 0;
  outline: none;
  position: absolute;
  top: 0; 
  width: 50%;
  z-index: 100;
}

.parallax .parallax-top-left:focus ~ .parallax-content,
.parallax .parallax-top-left:hover ~ .parallax-content {
  transform: perspective(1000px) rotateX(3deg) rotateY(-3deg);
}

.parallax .parallax-top-left:focus ~ .parallax-content::before,
.parallax .parallax-top-left:hover ~ .parallax-content::before {
  background: linear-gradient(135deg, rgba(255, 255, 255, .35) 0%, transparent 50%);
}

.parallax .parallax-top-left:focus ~ .parallax-content .parallax-front,
.parallax .parallax-top-left:hover ~ .parallax-content .parallax-front {
  transform: translate3d(4.5px, 4.5px, 50px) scale(.95);
}

.parallax .parallax-top-right {
  height: 50%;
  outline: none;
  position: absolute;
  right: 0;
  top: 0; 
  width: 50%;
  z-index: 100;
}

.parallax .parallax-top-right:focus ~ .parallax-content,
.parallax .parallax-top-right:hover ~ .parallax-content {
  transform: perspective(1000px) rotateX(3deg) rotateY(3deg);
}

.parallax .parallax-top-right:focus ~ .parallax-content::before,
.parallax .parallax-top-right:hover ~ .parallax-content::before {
  background: linear-gradient(-135deg, rgba(255, 255, 255, .35) 0%, transparent 50%);
}

.parallax .parallax-top-right:focus ~ .parallax-content .parallax-front,
.parallax .parallax-top-right:hover ~ .parallax-content .parallax-front {
  transform: translate3d(-4.5px, 4.5px, 50px) scale(.95);
}

.parallax .parallax-bottom-left {
  bottom: 0;
  height: 50%;
  left: 0; 
  outline: none;
  position: absolute;
  width: 50%;
  z-index: 100;
}

.parallax .parallax-bottom-left:focus ~ .parallax-content,
.parallax .parallax-bottom-left:hover ~ .parallax-content {
  transform: perspective(1000px) rotateX(-3deg) rotateY(-3deg);
}

.parallax .parallax-bottom-left:focus ~ .parallax-content::before,
.parallax .parallax-bottom-left:hover ~ .parallax-content::before {
  background: linear-gradient(45deg, rgba(255, 255, 255, .35) 0%, transparent 50%);
}

.parallax .parallax-bottom-left:focus ~ .parallax-content .parallax-front,
.parallax .parallax-bottom-left:hover ~ .parallax-content .parallax-front {
  transform: translate3d(4.5px, -4.5px, 50px) scale(.95);
}

.parallax .parallax-bottom-right {
  bottom: 0;
  height: 50%;
  outline: none;
  position: absolute;
  right: 0; 
  width: 50%;
  z-index: 100;
}

.parallax .parallax-bottom-right:focus ~ .parallax-content,
.parallax .parallax-bottom-right:hover ~ .parallax-content {
  transform: perspective(1000px) rotateX(-3deg) rotateY(3deg);
}

.parallax .parallax-bottom-right:focus ~ .parallax-content::before,
.parallax .parallax-bottom-right:hover ~ .parallax-content::before {
  background: linear-gradient(-45deg, rgba(255, 255, 255, .35) 0%, transparent 50%);
}

.parallax .parallax-bottom-right:focus ~ .parallax-content .parallax-front,
.parallax .parallax-bottom-right:hover ~ .parallax-content .parallax-front {
  transform: translate3d(-4.5px, -4.5px, 50px) scale(.95);
}

.progress {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #eef0f3;
  border: 0;
  border-radius: .1rem;
  color: #f06;
  height: .2rem;
  position: relative;
  width: 100%;
}

.progress::-webkit-progress-bar {
  background: transparent;
  border-radius: .1rem;
}

.progress::-webkit-progress-value {
  background: #f06;
  border-radius: .1rem;
}

.progress::-moz-progress-bar {
  background: #f06;
  border-radius: .1rem;
}

.progress:indeterminate {
  animation: progress-indeterminate 1.5s linear infinite;
  background: #eef0f3 linear-gradient(to right, #f06 30%, #eef0f3 30%) top left/150% 150% no-repeat;
}

.progress:indeterminate::-moz-progress-bar {
  background: transparent;
}

@keyframes progress-indeterminate {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

.slider {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: transparent;
  display: block;
  height: 1.2rem; 
  width: 100%;
}

.slider:focus {
  box-shadow: 0 0 0 .1rem rgba(255, 0, 102, .2);
  outline: none;
}

.slider.tooltip:not([data-tooltip])::after {
  content: attr(value);
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  background: #f06;
  border: 0;
  border-radius: 50%;
  height: .6rem;
  margin-top: -.25rem;
  transition: transform .2s;
  width: .6rem;
}

.slider::-moz-range-thumb {
  background: #f06;
  border: 0;
  border-radius: 50%;
  height: .6rem;
  transition: transform .2s;
  width: .6rem;
}

.slider::-ms-thumb {
  background: #f06;
  border: 0;
  border-radius: 50%;
  height: .6rem;
  transition: transform .2s;
  width: .6rem;
}

.slider:active::-webkit-slider-thumb {
  transform: scale(1.25);
}

.slider:active::-moz-range-thumb {
  transform: scale(1.25);
}

.slider:active::-ms-thumb {
  transform: scale(1.25);
}

.slider:disabled::-webkit-slider-thumb,
.slider.disabled::-webkit-slider-thumb {
  background: #f7f8f9;
  transform: scale(1);
}

.slider:disabled::-moz-range-thumb,
.slider.disabled::-moz-range-thumb {
  background: #f7f8f9;
  transform: scale(1);
}

.slider:disabled::-ms-thumb,
.slider.disabled::-ms-thumb {
  background: #f7f8f9;
  transform: scale(1);
}

.slider::-webkit-slider-runnable-track {
  background: #eef0f3;
  border-radius: .1rem;
  height: .1rem;
  width: 100%;
}

.slider::-moz-range-track {
  background: #eef0f3;
  border-radius: .1rem;
  height: .1rem;
  width: 100%;
}

.slider::-ms-track {
  background: #eef0f3;
  border-radius: .1rem;
  height: .1rem;
  width: 100%;
}

.slider::-ms-fill-lower {
  background: #f06;
}

.timeline .timeline-item {
  display: flex;
  display: -ms-flexbox;
  margin-bottom: 1.2rem;
  position: relative;
}

.timeline .timeline-item::before {
  background: #dadee4;
  content: "";
  height: 100%;
  left: 11px;
  position: absolute;
  top: 1.2rem;
  width: 2px;
}

.timeline .timeline-item .timeline-left {
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
}

.timeline .timeline-item .timeline-content {
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 2px 0 2px .8rem;
}

.timeline .timeline-item .timeline-icon {
  align-items: center;
  border-radius: 50%;
  color: #fff;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  -ms-flex-pack: center;
  height: 1.2rem;
  justify-content: center;
  text-align: center;
  width: 1.2rem;
}

.timeline .timeline-item .timeline-icon::before {
  border: .1rem solid #f06;
  border-radius: 50%;
  content: "";
  display: block;
  height: .4rem;
  left: .4rem;
  position: absolute;
  top: .4rem;
  width: .4rem;
}

.timeline .timeline-item .timeline-icon.icon-lg {
  background: #f06;
  line-height: 1.2rem;
}

.timeline .timeline-item .timeline-icon.icon-lg::before {
  content: none;
}

.viewer-360 {
  align-items: center;
  display: flex;
  display: -ms-flexbox;
  -ms-flex-align: center;
  -ms-flex-direction: column;
  flex-direction: column;
}

.viewer-360 .viewer-slider[value="1"] + .viewer-image {
  background-position-y: 0;
}

.viewer-360 .viewer-slider[value="2"] + .viewer-image {
  background-position-y: 2.8571428571%;
}

.viewer-360 .viewer-slider[value="3"] + .viewer-image {
  background-position-y: 5.7142857143%;
}

.viewer-360 .viewer-slider[value="4"] + .viewer-image {
  background-position-y: 8.5714285714%;
}

.viewer-360 .viewer-slider[value="5"] + .viewer-image {
  background-position-y: 11.4285714286%;
}

.viewer-360 .viewer-slider[value="6"] + .viewer-image {
  background-position-y: 14.2857142857%;
}

.viewer-360 .viewer-slider[value="7"] + .viewer-image {
  background-position-y: 17.1428571429%;
}

.viewer-360 .viewer-slider[value="8"] + .viewer-image {
  background-position-y: 20%;
}

.viewer-360 .viewer-slider[value="9"] + .viewer-image {
  background-position-y: 22.8571428571%;
}

.viewer-360 .viewer-slider[value="10"] + .viewer-image {
  background-position-y: 25.7142857143%;
}

.viewer-360 .viewer-slider[value="11"] + .viewer-image {
  background-position-y: 28.5714285714%;
}

.viewer-360 .viewer-slider[value="12"] + .viewer-image {
  background-position-y: 31.4285714286%;
}

.viewer-360 .viewer-slider[value="13"] + .viewer-image {
  background-position-y: 34.2857142857%;
}

.viewer-360 .viewer-slider[value="14"] + .viewer-image {
  background-position-y: 37.1428571429%;
}

.viewer-360 .viewer-slider[value="15"] + .viewer-image {
  background-position-y: 40%;
}

.viewer-360 .viewer-slider[value="16"] + .viewer-image {
  background-position-y: 42.8571428571%;
}

.viewer-360 .viewer-slider[value="17"] + .viewer-image {
  background-position-y: 45.7142857143%;
}

.viewer-360 .viewer-slider[value="18"] + .viewer-image {
  background-position-y: 48.5714285714%;
}

.viewer-360 .viewer-slider[value="19"] + .viewer-image {
  background-position-y: 51.4285714286%;
}

.viewer-360 .viewer-slider[value="20"] + .viewer-image {
  background-position-y: 54.2857142857%;
}

.viewer-360 .viewer-slider[value="21"] + .viewer-image {
  background-position-y: 57.1428571429%;
}

.viewer-360 .viewer-slider[value="22"] + .viewer-image {
  background-position-y: 60%;
}

.viewer-360 .viewer-slider[value="23"] + .viewer-image {
  background-position-y: 62.8571428571%;
}

.viewer-360 .viewer-slider[value="24"] + .viewer-image {
  background-position-y: 65.7142857143%;
}

.viewer-360 .viewer-slider[value="25"] + .viewer-image {
  background-position-y: 68.5714285714%;
}

.viewer-360 .viewer-slider[value="26"] + .viewer-image {
  background-position-y: 71.4285714286%;
}

.viewer-360 .viewer-slider[value="27"] + .viewer-image {
  background-position-y: 74.2857142857%;
}

.viewer-360 .viewer-slider[value="28"] + .viewer-image {
  background-position-y: 77.1428571429%;
}

.viewer-360 .viewer-slider[value="29"] + .viewer-image {
  background-position-y: 80%;
}

.viewer-360 .viewer-slider[value="30"] + .viewer-image {
  background-position-y: 82.8571428571%;
}

.viewer-360 .viewer-slider[value="31"] + .viewer-image {
  background-position-y: 85.7142857143%;
}

.viewer-360 .viewer-slider[value="32"] + .viewer-image {
  background-position-y: 88.5714285714%;
}

.viewer-360 .viewer-slider[value="33"] + .viewer-image {
  background-position-y: 91.4285714286%;
}

.viewer-360 .viewer-slider[value="34"] + .viewer-image {
  background-position-y: 94.2857142857%;
}

.viewer-360 .viewer-slider[value="35"] + .viewer-image {
  background-position-y: 97.1428571429%;
}

.viewer-360 .viewer-slider[value="36"] + .viewer-image {
  background-position-y: 100%;
}

.viewer-360 .viewer-slider {
  cursor: ew-resize;
  -ms-flex-order: 2;
  margin: 1rem;
  order: 2;
  width: 60%;
}

.viewer-360 .viewer-image {
  background-position-y: 0;
  background-repeat: no-repeat;
  background-size: 100%;
  -ms-flex-order: 1;
  height: 9rem;
  order: 1;
  width: 24rem;
}
</style>
`;
export default styles;
