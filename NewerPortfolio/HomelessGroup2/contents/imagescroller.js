function startSlideShow(back) {
    // Variables
    var stopProccess = false;
    var paused = false;
    var playing = false;
    //Images
    //MilliSeconds
    var s = 0;
    //Loop Number
    var m = 0;
    //Buttons
    for (var i=0; i<images.length; i++) {
        document.getElementById('buttons').innerHTML += "<img src='" + back + "contents/dot.svg' class='button' id='images" + i +"'/>";
    }
    var buttons = document.getElementsByClassName('button');
    for (var i=0; i<buttons.length; i++) {
        buttons[i].onclick = function (e) {
            for (var i=0; i<images.length; i++) {
                if (e.target.id == ('images' + [i])) {
                    m = i
                    changeImage();
                    stopProccess = true;
                }

            }
        }
    }
    //Image Changer
    function changeImage() {
        for (var i=0; i<images.length; i++) {
                buttons[i].style.opacity = 0.50;
                document.getElementById('images' + m).style.opacity = 1;

            }
        document.getElementById("slideshow").src = images[m];
        s = 0
    }
    // Functions
    //Timer
    function timer() {
        if (!paused) {
            s++
            if (s == 10) {
                opaticty()
                s = 0;
            }
        }
        setTimeout(timer, 1000);
    }
    timer()



    //Opacity
    function opaticty() {
        if (playing) {
            return
        }
        var proccess = 1;
        var proccess2 = 0;
        function invis() {
            if (stopProccess) {
                proccess2 = 1;
                document.getElementById('slideshow').style.opacity = proccess2;
                stopProccess = false;
                proccess = 1;
                proccess2 = 0;
                return
            }
            if (proccess <= 0.01 && proccess2 <= 0) {
                m++
                if (m == images.length || m < 0) {
                    m = 0;
                }
                changeImage();
                proccess2 = proccess2 + 0.01;
            }
            else if (proccess2 > 1) {
                s = 0;
                playing = false
                return;
            }
            else if (proccess2 >= proccess) {
                proccess = 0;
                proccess2 = proccess2 + 0.01;
                document.getElementById('slideshow').style.opacity = proccess2;
            }
            else {
                playing = true
                proccess = proccess - 0.01;
                document.getElementById('slideshow').style.opacity = proccess;
            }
        setTimeout(invis, 50);
        }
        invis();



    }
    changeImage();
}