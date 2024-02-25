console.log("this is running");
var a = document.getElementById("svg");


        //mouse wheel zoom
        //https://stackoverflow.com/questions/76150884/how-to-use-the-mouse-wheel-to-zoom-on-an-svg-using-the-viewbox

        a.addEventListener("load", function() {
            var svgDoc = a.contentDocument;
            var rmd = svgDoc.getElementById("path4878");

            rmd.addEventListener("mouseover", function() {
                console.log("hover")
            })

            rmd.addEventListener("mousedown", function() {
                rmd.setAttribute("style", "fill:red;fill-opacity:1;fill-rule:nonzero;stroke:none");
                
                var svg2 = svgDoc.getElementById("svg2");
                //original: viewBox="0 0 3408 2249.9999"
                svg2.setAttribute("viewBox","700 500 1000 1000");
                
                a.classList.add('show');

                         
        })

        })


        

//try and pass the id of the station into this function
function myFunc() {
    var a = document.getElementById("svg");
    var svgDoc = a.contentDocument;
    var svgItem = svgDoc.getElementById("path3322-8");
    svgItem.setAttribute("style", "fill:red;fill-opacity:1;fill-rule:nonzero;stroke:none");

}
