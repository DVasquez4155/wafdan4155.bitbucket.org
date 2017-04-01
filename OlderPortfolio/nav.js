var lefticon = "thumbnails/triangle-left-white.svg"
var righticon = "thumbnails/triangle-right-white.svg"
var homeicon = "thumbnails/waffle-white.svg"
var divID = "navigation"

var pages = ["basketball.html", "speed.html", "fortune.html", "buttons.html", "Maze.html", "keys.html", "Colors.html", "Tic-Tac-Toe/Tic-Tac-Toe.html", "flags.html", "SevenSegmentDisplay/clock.html", "Hangman.html"]

function drawLeft(p) {
    return "<a class='navIconLink' href='" + folder + pages[p] + "'><img class='navIcon' src='" + folder + lefticon + "' /></a>"
}

function drawRight(p) {
    return "<a class='navIconLink' href='" + folder + pages[p] + "'><img class='navIcon' src='" + folder + righticon + "' /></a>"
}

function drawHome() {
    return "<a class='navIconLink' href='" + folder + "index.html'><img class='navIcon'  src='" + folder + homeicon + "' /></a>"
}
var folder = "";

function drawnav() {
    var currentPage = getCurrentPage()
    if (pages[currentPage].indexOf("/") > -1) {
        folder += "../"
    }
    var previousPage = currentPage + pages.length - 1
    
    previousPage %= pages.length
    
    var links = drawLeft(previousPage)
    
    links += drawHome()
    
    var nextPage = (currentPage + 1) % pages.length
    
    links += drawRight(nextPage)
    
    document.getElementById(divID).innerHTML = links;
}

function getCurrentPage() {
    var url = document.location.href
    for (var i = 0 ; i < pages.length; i++) {
        if (url.indexOf(pages[i]) > -1) {
            return i
        }
    }
    return 0
}
var navIcons = document.createElement("div");
navIcons.innerHTML = "<div style='text-align: center;'><div id='navigation' style='display: inline-block;  text-align: center; width: 25%'> </div></div>"
navIcons.innerHTML += "<style>.navIcon {background-color: red; width: 15%; border-radius: 10%; padding: 5%;} .navIconLink{padding: 2.5%;}</style>"
var scripts = document.getElementsByTagName('script')
scripts[scripts.length - 1].parentNode.insertBefore(navIcons, document.querySelector('div.before'))
drawnav()