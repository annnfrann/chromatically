search = function search() {
  $("#button").click(function(){
    var userInput = document.getElementById("userInput").value
    $.get("http://loc.gov/pictures/search/?q=" + userInput + "&fo=json", function(data, status){
      console.log("data: ",  data)
    })
  })
}




$(document).ready(function(){
  search();
})

// http://loc.gov/pictures/search/?q=<query>&fo=json replace "<query" with the search term


// NYPL authentication token: wscle06au2nzk1ho
