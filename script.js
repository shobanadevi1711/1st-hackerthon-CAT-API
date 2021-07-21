async function getCat() {
    var data = await fetch("https://cataas.com/api/cats");
    var res = await data.json();
    //console.log(res);
    //console.log(res[0].id);
    let input = document.createElement("INPUT");
    input.setAttribute("type", "text");
    input.addEventListener("input", updateValue);
    function updateValue(e) {
      document.getElementById("container").innerHTML = "";
      log.textContent = e.target.value;
      async function searchTag() {
        var TagData = await fetch(
          "https://cataas.com/api/cats?tags=" + e.target.value
        );
        var Tagres = await TagData.json();
        console.log(Tagres);
        for (let i = 0; i < Tagres.length; i++) {
          var cat = document.createElement("IMG");
          cat.setAttribute("src", "https://cataas.com/cat/" + Tagres[i].id);
          cat.setAttribute("width", "304");
          cat.setAttribute("height", "228");
          // document.body.appendChild(x);
          document.getElementById("container").appendChild(cat);
        }
      }
      searchTag();
  
      // Based on e.target.value we need to filter car as per tag name
      // getting all cat and then use filter on them
    }
    document.getElementById("containersearch").appendChild(input);
  
    for (let i = 0; i < 500; i++) {
      var x = document.createElement("IMG");
      x.setAttribute("src", "https://cataas.com/cat/" + res[i].id);
      x.setAttribute("width", "304");
      x.setAttribute("height", "228");
      // document.body.appendChild(x);
      document.getElementById("container").appendChild(x);
    }
  }
  getCat();