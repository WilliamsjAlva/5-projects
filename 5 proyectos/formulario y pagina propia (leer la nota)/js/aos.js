/*!
 * AOS - Animate on scroll library
 * 2.3.1
 * https://michalsnik.github.io/aos/
 * Licensed under the MIT License
 */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
      define([], factory);
    } else if (typeof exports === 'object') {
      module.exports = factory();
    } else {
      root.AOS = factory();
    }
  }(this, function () {
    'use strict';
  
    var AOS = function() {
      // Initialization code here
      function init(options) {
        var elems = document.querySelectorAll('[data-aos]');
        elems.forEach(function(elem) {
          elem.style.opacity = '0';
          elem.style.transitionProperty = 'transform, opacity';
          elem.style.transitionDuration = options.duration + 'ms';
          elem.style.transitionTimingFunction = 'ease-out';
        });
  
        window.addEventListener('scroll', function() {
          var scrollY = window.pageYOffset;
          elems.forEach(function(elem) {
            var offsetTop = elem.offsetTop;
            if (scrollY + window.innerHeight > offsetTop) {
              elem.classList.add('aos-animate');
            }
          });
        });
      }
  
      return {
        init: init
      };
    }();
  
    return AOS;
  }));
  