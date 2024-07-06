var a = document.getElementById("svg");

a.addEventListener("load", function() {

    var svgDoc = a.contentDocument;
    var svgCanvas = svgDoc.getElementById("svg2"); //svg2
    //var viewPort = document.getElementById("layer1");

    var viewPort = svgDoc.getElementsByClassName("viewport"); 

    var drag = false;
    var offset = { x: 0, y: 0 };
    var factor = .1;
    var matrix = new DOMMatrix();

    console.log("viewport: " + viewPort);

    svgCanvas.addEventListener('pointerdown', function (event) {
        drag = true;
        offset = { x: event.offsetX, y: event.offsetY };
        //console.log(event.offsetX + ", " + event.offsetY);
    });

    svgCanvas.addEventListener('pointermove', function (event) {
        if (drag) {
            var tx = event.offsetX - offset.x;
            var ty = event.offsetY - offset.y;
            offset = {
                x: event.offsetX,
                y: event.offsetY
            };
            matrix.preMultiplySelf(new DOMMatrix()
                .translateSelf(tx, ty));

            console.log("current viewport: " + viewPort.toString()); 

            //viewPort.transform = matrix.toString();
            
            //viewPort.style.transform = matrix.toString(); 

            viewPort.transform = 'translate(-200px, -200px)';

            console.log("new viewport: " + viewPort); 
            console.log("test: " + viewPort.transform); 
            
            
            //viewPort.style.transform = matrix.toString();

            //viewPort.transform = matrix.toString(); //not doing anything..
        }
    });

    svgCanvas.addEventListener('pointerup', function (event) {
        drag = false;
    });


    })


