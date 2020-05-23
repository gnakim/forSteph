$(document).ready(function () {
  var picHeight = $("#page01 .container-box #steph img").height();
  var topalign = (picHeight / 2) * -1;

  $('#page01 .container-box').css('margin-top', topalign);
  // var bgColors  = ["#FBEAD3", "#FBD3E4", "#D3F8FB", "#F7C9CF", "#D3FBEA", "#AEEEEE"]

  var back = ["#FBEAD3", "#FBD3E4", "#D3F8FB", "#F7C9CF", "#D3FBEA", "#AEEEEE"];
  var rand = back[Math.floor(Math.random() * back.length)];
  $('body').css('background',rand);

});
