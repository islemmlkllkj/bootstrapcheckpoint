
function bolde(){ 
  event.preventDefault();
  var  getId=document.getElementById("texte") ;
  getId.style.fontWeight="bold";
  }
function ITALICE(){
  event.preventDefault();
  var getID=document.getElementById("texte");
  getID.style.fontStyle="italic"
  }
   function Underline(){
    event.preventDefault();
    var getID=document.getElementById("texte");
    getID.style.textDecoration ="underline";
    }
    function SIZE(){
      event.preventDefault();
      var getID=document.getElementById("texte");

      getID.style.fontSize=document.getElementById("fs").value;
    }
     function STYLE() {
      event.preventDefault();
      var getID=document.getElementById("texte");

      getID.style.fontFamily=document.getElementById("islem").value;
     }
      $( "document" ).ready(function(){
        $( ".services .image1" ).hover(
          function() {
            $(".iss1" ).toggle()
          })
      })
      $( "document" ).ready(function(){
        $( ".services .image2" ).hover(
          function() {
            $(".iss2" ).toggle()
          })
      })
      $( "document" ).ready(function(){
        $( ".services .image3" ).hover(
          function() {
            $(".iss3" ).toggle()
          })
      })
      $( "document" ).ready(function(){
        $( ".services .image4" ).hover(
          function() {
            $(".iss4" ).toggle()
          })
      })
      $( "document" ).ready(function(){
        $( ".services .image5" ).hover(
          function() {
            $(".iss5" ).toggle()
          })
      })
      $( "document" ).ready(function(){
        $( ".services .image6" ).hover(
          function() {
            $(".iss6" ).toggle()
          })
      })
      $( "document" ).ready(function(){
        $( ".services .image7" ).hover(
          function() {
            $(".iss7" ).toggle()
          })
      })
      $( "document" ).ready(function(){
        $( ".services .image8" ).hover(
          function() {
            $(".iss8" ).toggle()
          })
      })
      $( "document" ).ready(function(){
        $( ".services .image9" ).hover(
          function() {
            $(".iss9" ).toggle()
          })
      })
    
    
    // $('#services').mouseenter(function(){
    //   $('.h3').click(function(){
    //    alert(This is GoMyCode Track. 
    //     Each track has its own goal. 
    //     By adopting this track, you chose your own goal.);
    //   });
    // })
  
