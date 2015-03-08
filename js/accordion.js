var $ = require('jquery');
var Velocity = require('velocity-animate');

/*
* This is jQuery Script
*/
$(function() {
  var action = (function(jqObject) {
    var content = jqObject.next('.content');
    var contentParent = content.parent();
    if(contentParent.hasClass('active')){
      content.slideUp('250',function(){
        contentParent.removeClass('active');
      });
    } else {
      contentParent.addClass('active');
      content.slideDown('250');
    }
  });
  $('.jq-accordion').on('click', function(event) {
    event.preventDefault();
    action($(this));
  });
});
/*
* That is Native Javascript and Velocity.js
*/
document.addEventListener('DOMContentLoaded', function(event) {
  var content = this.querySelectorAll('.js-accordion + .content');
  for (var i = 0; i < content.length; i++) {
    var height = content[i].offsetHeight;
    content[i].setAttribute('data-height', height);
    content[i].style.height = 0;
  }
  var action = (function(elemObject){
    var content = elemObject.nextElementSibling;
    var contentParent = elemObject.parentElement;
    var contentHeight = content.getAttribute('data-height');
    if(contentParent.classList.contains('active')){
      contentParent.classList.remove('active');
      Velocity(content, { height: 0 }, 250);
    } else {
      contentParent.classList.add('active');
      Velocity(content, { height: contentHeight }, 250);
    }
  });
  var actionElem = this.querySelectorAll('.js-accordion');
  for (var i = 0; i < actionElem.length; i++) {
    actionElem[i].addEventListener('click',function(event){
      event.preventDefault();
      action(this);
    });
  }
});
