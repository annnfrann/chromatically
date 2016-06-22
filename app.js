search = function search() {
  $("#button").click(function(){
    var userInput = document.getElementById("userInput").value
    if (userInput === "") {
      alert("pls search for a thing")
    } else {
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
        var result = response.nyplAPI.response.result
        document.getElementById("background").innerHTML = "";
        var header = document.createElement("header")
        header.innerHTML = "hello"
        document.getElementById("background").appendChild(header)
        var container = document.createElement("div")
        var setClass = document.createAttribute("class")
        setClass.value = "container"
        container.setAttributeNode(setClass)
        document.getElementById("background").appendChild(container)
        var footer = document.createElement("footer")
        footer.innerHTML = "anna lewis made this. she tried hard."
        document.getElementById("background").appendChild(footer)

        for (var i = 0; i < result.length - 1; i++) {
          if (result[i].typeOfResource === "still image") {
            var box = document.createElement("div")
            var createClass = document.createAttribute("class")
            createClass.value = "box"
            box.setAttributeNode(createClass)
            document.getElementsByClassName("container")[0].appendChild(box)
            var photo = document.createElement("img")
            console.log(result[i].imageID);
            photo.src = "http://images.nypl.org/index.php?id=" + result[i].imageID + "&t=w"
            document.getElementsByClassName("box")[i].appendChild(photo)
          }
        }
      });
    }
  });
}
search()


// NYPL authentication token: wscle06au2nzk1ho
