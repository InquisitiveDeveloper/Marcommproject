
const navPage = require('./nav.js');;
$(function(){
  var $readMoreLink = $(".read-more");

  $readMoreLink.on("click", function(e){
    new navePage();
    console.log("inside the function")

    $(this).parent().next("div").show();
    $(this).remove();
  });
});








