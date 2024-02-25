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

            rmd.addEventListener("mousedown", function(e) {
                rmd.setAttribute("style", "fill:red;fill-opacity:1;fill-rule:nonzero;stroke:none");
            
                var svg2 = svgDoc.getElementById("svg2");
                
                let p = toSVGPoint(e.target, e.x, e.y);
                let coord = `x: ${p.x} - y: ${p.y}`;
                console.log(coord); 
               
                //https://www.sitepoint.com/how-to-translate-from-dom-to-svg-coordinates-and-back-again/
                /*
                var e = evt.target;
                var dim = e.getBoundingClientRect();
                var x = evt.clientX - dim.left;
                var y = evt.clientY - dim.top;
                alert("x: "+x+" y:"+y);
                */

                //(min-x, min-y, width, height)
                //original: viewBox="0 0 3408 2249.9999"
                
                svg2.setAttribute("viewBox","-0.9 -13 3408 2249.9999");
                
                
        })

        })


        const toSVGPoint = (svg, x, y) => {
            let p = new DOMPoint(x, y);
            return p.matrixTransform(svg.getScreenCTM().inverse());
          };    

//try and pass the id of the station into this function
function myFunc() {
    var a = document.getElementById("svg");
    var svgDoc = a.contentDocument;
    var svgItem = svgDoc.getElementById("path3322-8");
    svgItem.setAttribute("style", "fill:red;fill-opacity:1;fill-rule:nonzero;stroke:none");

}
