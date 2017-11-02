$(document).ready(function() {
  //allow horizontal scroll upon click
  $('#menu li a').click(function(event){
    var link = $(this).attr('href');
    $('#horizontal-cont').animate({
      scrollLeft: $('#horizontal-cont').scrollLeft() + $(link).offset().left - $('#horizontal-cont').offset().left
    }, 500);
    event.preventDefault();
  });

  //start nav-bar menu active link effect
  $('#menu li').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
  });

  //start burger button trigger
  $('.burger-button').click(function(){
    $('#nav-bar').toggleClass('active');
    $(this).toggleClass('active');
  });

  // start nav-arrows
  var sections = $('section');
  var leftArrow = $('.fa-angle-left');
  var rightArrow = $('.fa-angle-right');
  var n = 0;
  var sectionId = sections[n].getAttribute('id');
  var sectionCur = '#' + sectionId;

  $(rightArrow).click(function() {
    if(n === sections.length - 2) {
      n = sections.length - 2;
    }
    else {
      n++;
      sectionId = sections[n].getAttribute('id');
      sectionCur = '#' + sectionId;
    }

    $('#horizontal-cont').animate({
      scrollLeft: $('#horizontal-cont').scrollLeft() + $(sectionCur).offset().left - $('#horizontal-cont').offset().left
    }, 500);

    // console.log(n);
    // console.log(sectionCur);
    // console.log('next');
  });

  $(leftArrow).click(function() {
    if(n === 0) {
      n = 0;
    }
    else {
      n--;
      sectionId = sections[n].getAttribute('id');
      sectionCur = '#' + sectionId;
    }

    $('#horizontal-cont').animate({
      scrollLeft: $('#horizontal-cont').scrollLeft() + $(sectionCur).offset().left - $('#horizontal-cont').offset().left
    }, 500);

    // console.log(n)
    // console.log('#'+sectionId);
    // console.log('prev');
  });

});
