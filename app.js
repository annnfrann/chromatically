search = function search() {
  $("#button").click(function(){
    var userInput = document.getElementById("userInput").value
    console.log(userInput);
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://cors-anywhere.herokuapp.com/http://api.repo.nypl.org/api/v1/items/search?q=" + userInput + "&publicDomainOnly=true",
      "method": "GET",
      "headers": {
        "token": "wscle06au2nzk1ho",
        "x-requested-with": "text/html",
        "authorization": "Basic YW5ubmZyYW5uOmJhbmFuYQ==",
        "cache-control": "no-cache",
        "postman-token": "b0daef8a-76a5-589f-3bc9-b55beda775b4"
      }
    }
    $.ajax(settings).done(function (response) {
      console.log(response.nyplAPI.response.result);
    });
  });
}
search()


// NYPL authentication token: wscle06au2nzk1ho
