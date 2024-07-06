
var a = document.getElementById("svg");

        //mouse wheel zoom
        //https://stackoverflow.com/questions/76150884/how-to-use-the-mouse-wheel-to-zoom-on-an-svg-using-the-viewbox

        

        a.addEventListener("load", function() {
            var svgDoc = a.contentDocument;
            var rmd = svgDoc.getElementById("lul-circle_lul-district_940gzzlubwt");

            rmd.addEventListener("mouseover", function() {
                console.log("hover")
            })

            rmd.addEventListener("mousedown", function(e) {
                rmd.setAttribute("style", "fill:green;fill-opacity:1;fill-rule:nonzero;stroke:none");
            
                var svg2 = svgDoc.getElementById("svg2");
                
               
                //getCoords(); 


                
                offset = { x: e.offsetX, y: e.offsetY };
                console.log("coords: " + e.offsetX + ", " + e.offsetY);
               
                gsap.ticker.fps(-1); 

                gsap.to(svg2, {
                    attr: {
                        viewBox: e.offsetX + ' ' + (e.offsetY-100) + ' 200 200' //'650 1450 200 200' - richmond
                    },
                    duration: 4,
                    ease: "power3.inOut"
                   
                })                

                //svg2.setAttribute("viewBox","660 1450 200 200");                
                
            
        })

        })


        const toSVGPoint = (svg, x, y) => {
            let p = new DOMPoint(x, y);
            return p.matrixTransform(svg.getScreenCTM().inverse());
          };    


/*try and pass the id of the station into this function
function myFunc() {
    var a = document.getElementById("svg");
    var svgDoc = a.contentDocument;
    var svgItem = svgDoc.getElementById("path3322-8");
    svgItem.setAttribute("style", "fill:green;fill-opacity:1;fill-rule:nonzero;stroke:none");

}
*/
