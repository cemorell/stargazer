
function showImage(jason){
var image = jason.image.src;
$('#preview').html(`<div><img src="${image}" /> </div>`)

}


function search(name) {
  var api = 'http://www.strudel.org.uk/lookUP/json/?name='+name;
$.ajax({
  Method: "Get",
  url: api,
  dataType: "jsonp",
  jsonpCallback: "showImage"
});
}



$(document).ready(function() {
  $("#submitStar").click(function(event) {
    event.preventDefault();

    var name = $('#search-name').val();
    search(name);

  });
});
