var c3ext={};if(c3ext.generate=function(a){function b(a,b,c,d){var e=a.slice(b[0],b[1]),g=1,h=e;if(h.length>d){var g=f(e.length/d);h=h.splitIntoChunksOf(g).map(c)}return h}function c(a){return a[0]}function d(a){j.columns.removeAll(function(b){a.contains(b)})}function e(){var a=Q.copy(j);n(a),p(a)}var f=Math.ceil;if(null!=a.zoom2&&(g=a.zoom2.reducers||{},h=a.zoom2.enabled,_zoom2_factor=a.zoom2.factor||1,i=a.zoom2.maxItems),!h)return c3.generate(a);var g,h,i,j=Q.copy(a.data);if(null==i){var k=d3.select(a.bindto)[0][0];if(null!=k){var l=k.clientWidth;i=f(l/20)}(null==i||10>i)&&(i=10)}var m=c3ext.ZoomBehavior({changed:function(){e()},bindto:a.bindto});m.enhance=function(){i*=2;var a=m.getZoom().totalItems;i>a&&(i=a),e()},m.dehance=function(){i=f(i/2)+1,e()},m.maxItems=function(){return i};var n=function(a){if(null!=a.columns&&0!=a.columns.length){var d=m.getZoom();return d.totalItems!=a.columns[0].length-1&&(m.setOptions({totalItems:a.columns[0].length-1}),d=m.getZoom()),a.columns=j.columns.map(function(a){var e=a[0],f=g[e]||c,h=a.slice(1),j=b(h,d.currentZoom,f,i);return[e].concat(j)}),a}};n(a.data);var o=c3.generate(a),p=o.load.bind(o);return o.zoom2=m,o.load=function(a){a.unload&&(d(a.unload),delete a.unload),Q.copy(a,j),e()},o.unload=function(a){d(a),e()},o},c3ext.ZoomBehavior=function(a){function b(a){if(a[1]>i){var b=a[1]-i;a[0]-=b,a[1]-=b}if(0>a[0]){var b=-1*a[0];a[0]+=b,a[1]+=b}a[1]>i&&(a[1]=i),0>a[0]&&(a[0]=0)}function c(a,c){var e=m(i/a),f=[c,c+e];b(f),j=f,d()}function d(){null!=p&&p(n.getZoom())}function e(){c(g,h)}function f(){var a=m(i/g);return a}var g,h,i,j,k,l,m=Math.ceil,n={__type:"ZoomBehavior"},o=a.bindto,p=a.changed||function(){},q=0,r=0;return n.setOptions=function(a){null==a&&(a={}),g=a.factor||1,h=0,i=a.totalItems||0,j=[0,i],p=a.changed||p},n.setOptions(a),n.getZoom=function(){return{totalItems:i,currentZoom:j.slice()}},n.factor=function(a,b){return 0==arguments.length?g:void(g=a,1>g&&(g=1),b||e())},n.left=function(a,b){if(0==arguments.length)return h;h=a,0>h&&(h=0);var c=f();h+c>i&&(h=i-c),console.log({left:h,pageSize:c}),b||e()},n.zoomAndPanByRatio=function(a,b){var c=Math.round,d=f(),g=c(d*b),i=h+g;n.factor(n.factor()*a,!0);var j=i;if(1!=a){var k=f(),l=c(k*b);j=i-l}n.left(j,!0),e()},n.zoomIn=function(){n.zoomAndPanByRatio(2,0)},n.zoomOut=function(){n.zoomAndPanByRatio(0.5,0)},n.panLeft=function(){n.zoomAndPanByRatio(1,-1)},n.panRight=function(){n.zoomAndPanByRatio(1,1)},n.reset=function(){h=0,g=1,e()},null!=o&&(k=$(a.bindto),k.mousewheel&&(l=new Timer(function(){if(0!=q){var a=10,b=(a+q)/a;console.log({deltaY:q,multiply:b}),n.zoomAndPanByRatio(b,r),q=0}}),k.mousewheel(function(a){q+=a.deltaY,r=(a.offsetX-70)/(a.currentTarget.offsetWidth-70),l.set(150),a.preventDefault()}))),n},"undefined"==typeof Q){var Q=function(){};Q.copy=function(a,b,c,d){if(null==d&&(d=0),100==d&&console.warn("Q.copy is in depth of 100 - possible circular reference"),c=c||{overwrite:!1},a==b||null==a)return b;if("object"!=typeof a)return c.overwrite||null==b?a:b;if("function"==typeof a.clone)return c.overwrite||null==b?a.clone():b;if(null==b&&(a instanceof Array?b=[]:b={}),a instanceof Array){for(var e=0;e<a.length;e++){var f=a[e],g=b[e];g=Q.copy(f,g,c,d+1),b[e]=g}return b.splice(a.length,b.length-a.length),b}for(var h in a){var i=a[h],j=b[h];j=Q.copy(i,j,c,d+1),b[h]=j}return b}}if("undefined"==typeof Timer){var Timer=function(a,b){this.action=a,null!=b&&this.set(b)};Timer.prototype.set=function(a){null==a?a=this._ms:this._ms=a,this.clear(),null==a||(this.timeout=window.setTimeout(this.onTick.bind(this),a))},Timer.prototype.onTick=function(){this.clear(),this.action()},Timer.prototype.clear=function(){null==this.timeout||(window.clearTimeout(this.timeout),this.timeout=null)}}"undefined"==typeof Array.prototype.splitIntoChunksOf&&(Array.prototype.splitIntoChunksOf=function(a){for(var b=Math.ceil(this.length/a),c=[],d=0;d<this.length;d+=a)c.push(this.slice(d,d+a));return c});