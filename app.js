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
        footer.innerHTML = "anna lewis made this. she worked hard."
        document.getElementById("background").appendChild(footer)

        for (var i = 0; i < result.length; i++) {
          if (result[i].typeOfResource === "still image") {
            if (i == 9) {
              break
            }else {
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
        }
        document.getElementsByClassName("box")[0].addEventListener("click", function(){
          document.getElementById("background").innerHTML = "";
          var header = document.createElement("header")
          header.innerHTML = "hello"
          document.getElementById("background").appendChild(header)
          var results = document.createElement("div")
          var makeClass = document.createAttribute("class")
          results.setAttributeNode(makeClass)
          makeClass.value = "results"
          document.getElementById("background").appendChild(results)
          var selectedImage = document.createElement("div")
          var newClass = document.createAttribute("class")
          selectedImage.setAttributeNode(newClass)
          newClass.value = "selectedImage"
          document.getElementsByClassName("results")[0].appendChild(selectedImage)
          var finalImage = document.createElement("img")
          finalImage.src = "http://images.nypl.org/index.php?id=" + result[0].imageID + "&t=w"
          document.getElementsByClassName("selectedImage")[0].appendChild(finalImage)
          var colorScheme = document.createElement("div")
          var anotherClass = document.createAttribute("class")
          colorScheme.setAttributeNode(anotherClass)
          anotherClass.value = "colorScheme"
          document.getElementsByClassName("results")[0].appendChild(colorScheme)
          console.log(result[0].title);
          var footer = document.createElement("footer")
          footer.innerHTML = "anna lewis made this. she worked hard."
          document.getElementById("background").appendChild(footer)
        })
        document.getElementsByClassName("box")[1].addEventListener("click", function(){
          document.getElementById("background").innerHTML = "";
          console.log(result[1].title);
        })
        document.getElementsByClassName("box")[2].addEventListener("click", function(){
          document.getElementById("background").innerHTML = "";
          console.log(result[2].title);
        })
        document.getElementsByClassName("box")[3].addEventListener("click", function(){
          document.getElementById("background").innerHTML = "";
          console.log(result[3].title);
        })
        document.getElementsByClassName("box")[4].addEventListener("click", function(){
          document.getElementById("background").innerHTML = "";
          console.log(result[4].title);
        })
        document.getElementsByClassName("box")[5].addEventListener("click", function(){
          document.getElementById("background").innerHTML = "";
          console.log(result[5].title);
        })
        document.getElementsByClassName("box")[6].addEventListener("click", function(){
          document.getElementById("background").innerHTML = "";
          console.log(result[6].title);
        })
        document.getElementsByClassName("box")[7].addEventListener("click", function(){
          document.getElementById("background").innerHTML = "";
          console.log(result[7].title);
        })
        document.getElementsByClassName("box")[8].addEventListener("click", function(){
          document.getElementById("background").innerHTML = "";
          console.log(result[8].title);
        })
      });
    }
  });
}
search()


// NYPL authentication token: wscle06au2nzk1ho
