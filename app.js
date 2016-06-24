function search (){
  $("#button").click(function(){
    var userInput = document.getElementById("userInput").value
    userInput = userInput.trim()
    if (userInput === "") {
      alert("pls search for a thing")
    } else {
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
        if (!result) {
          alert("Your search returned 0 results, please try again with another")
        } else {
          prepForResults()
          for (var i = 0; i < result.length; i++) {
            if (result[i].typeOfResource === "still image") {
              if (i === 9) {
                break
              } else {
                appendImage(result[i], i);
              }
            }
          }
        }
      });
    }
  });
}
search()

function appendImage(result, i) {
  var box = document.createElement("div")
  var createClass = document.createAttribute("class")
  createClass.value = "box"
  box.setAttributeNode(createClass)
  document.getElementsByClassName("container")[0].appendChild(box)
  var photo = document.createElement("img")
  console.log(result.imageID);
  photo.src = "http://images.nypl.org/index.php?id=" + result.imageID + "&t=w"
  document.getElementsByClassName("box")[i].appendChild(photo)
  doTheThing(result, i)
}

function prepForResults() {
  document.getElementById("background").innerHTML = "";
  var header = document.createElement("header")
  header.innerHTML = '<a href="index.html">&nbsp;chromatically</a> <span><a href="/about.html">about</a></span>'
  document.getElementById("background").appendChild(header)
  var container = document.createElement("div")
  var setClass = document.createAttribute("class")
  setClass.value = "container"
  container.setAttributeNode(setClass)
  document.getElementById("background").appendChild(container)
  var footer = document.createElement("footer")
  footer.innerHTML = 'anna lewis made this. here is her <a href="https://github.com/annnfrann/">github</a>.'
  document.getElementById("background").appendChild(footer)
}

function doTheThing(result, i) {
  document.getElementsByClassName("box")[i].addEventListener("click", function(){
    document.getElementById("background").innerHTML = "";
    var header = document.createElement("header")
    header.innerHTML = '<a href="index.html">&nbsp;chromatically</a> <span><a href="/about.html">about</a></span>'
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

    console.log(finalImage);

    finalImage.src = "http://images.nypl.org/index.php?id=" + result.imageID + "&t=w"
    document.getElementsByClassName("selectedImage")[0].appendChild(finalImage)

    // $.get("https://api.imagga.com/v1/colors?url=" + finalImage.src, function(data, status){
    //   alert("Data: " + data + "\nStatus: " + status);
    // });


    var getColorScheme = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.imagga.com/v1/colors?url=" + finalImage.src,
      "method": "GET",
      "headers": {
        // "basic": "YWNjXzc0MjQ5MmI1ZDMxZDk0ZTo4ZWZjZjk2ZDNhYWFiN2Q5ZWMwYjE1NjljZTg0NjVhZg==",
        "authorization": "Basic YWNjXzc0MjQ5MmI1ZDMxZDk0ZTo4ZWZjZjk2ZDNhYWFiN2Q5ZWMwYjE1NjljZTg0NjVhZg==",
        "cache-control": "no-cache",
      }
    }

    $.ajax(getColorScheme).done(function (response) {
      console.log(response);
    });



    var colorScheme = document.createElement("div")
    var anotherClass = document.createAttribute("class")
    colorScheme.setAttributeNode(anotherClass)
    anotherClass.value = "colorScheme"
    document.getElementsByClassName("results")[0].appendChild(colorScheme)
    console.log(result.title);
    var footer = document.createElement("footer")
    footer.innerHTML = 'anna lewis made this. here is her <a href="https://github.com/annnfrann/">github</a>.'
    document.getElementById("background").appendChild(footer)
  });
}


// NYPL authentication token: wscle06au2nzk1ho
