search = function search() {

  // $("#button").click(function(){
  //   var userInput = document.getElementById("userInput").value
  //   $.get("http://annnfrann:banana@api.repo.nypl.org/api/v1/items/search?q=cats&publicDomainOnly=true", function(data, status){
  //     console.log("data: ",  data)
  //   })
  // })

  // $("#button").click(function(){
  //   var userInput = document.getElementById("userInput").value
  //   $.get("http://api.repo.nypl.org/api/v1/items/search.json?q=" + userInput, function(data, status){
  //     console.log("data: ",  data)
  //   })
  // })

  $("#button").click(function(){
    var userInput = document.getElementById("userInput").value
    $.ajax({
      url: "http://annnfrann:banana@api.repo.nypl.org/api/v1/items/search?q=cats&publicDomainOnly=true",
      headers: {
        "Authorization": "Token token=wscle06au2nzk1ho"
      },
    success: function(result){
      console.log(result);
      alert("yay")
    }});
  });

}
search()
// curl "http://api.repo.nypl.org/api/v1/items/search?q=cats&publicDomainOnly=true" -H 'Authorization: Token token="wscle06au2nzk1ho"'

// http://loc.gov/pictures/search/?q=<query>&fo=json replace "<query" with the search term


// NYPL authentication token: wscle06au2nzk1ho
