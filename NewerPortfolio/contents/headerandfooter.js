var topbarlinks = [
    ["home", "Home"],
    ["about", "About Me"],
    ["web", "Web"],
    ["art", "Art"],
    ["games", "Games"],
];
var tree = {
    Web : ["%HTML", "Cheat Sheet", "Colors", "Commands", "%JavaScript", "Random String", "Hacker Speak", "Sorting", "JavaScript Test", "Text Box", "%JavaScript and SVG", "Crazy Buttons", "Speedometer", "Tiles", "BasketBall", "Grades"],
    Art : ["%SVG", "Random Shapes", "Venn Diagram", "Molecules", "Navigation Icons", "Icons", "Advanced SVG", "Letters", "Apple", "Flags", "%Screens", "Screen Sizes", "Screen and Icon Sizes", "%HTML Canvas", "Snow Globe"],
    Games : ["Hangman", "Tic Tac Toe", "Chase", "Maze (Not Done)"],
}

/*

    ["home", "Home"],
    ["html", "HTML"],
    ["svg", "SVG"],
    ["javascript", "JavaScript"],
    ["javascriptandsvg", "Java Script And SVG"],
    ["games", "Games"],
    ["screens", "Screens"],
    ["myprojects", "Personal Projects"],
*/
var size = Math.floor((window.innerWidth * .94) / topbarlinks.length) - 25;

function refresh() {
    document.getElementById('style').href = document.getElementById('style').href;
}
function resize() {
    var size = Math.floor((window.innerWidth * .94) / topbarlinks.length) - 26;
    for (var i = 0; i < topbarlinks.length; i++) {
        document.getElementById(topbarlinks[i][0]).style.width = size + "px";
    }
}
if (typeof back !== undefined) {
    var back = '';
}
if (typeof webInfo !== undefined) {
    var webInfo = 'Portfolio';
}
if (typeof topLinksEnable !== undefined) {
    var topLinksEnable = true;
    window.addEventListener("resize", resize);
}
function removeSpace(string) {
    return string.replace(/ /g,'')
}
window.onload = function () {
    
    function headerAndFooterStart() {
        if (typeof startSlideShow != "undefined") {
            startSlideShow(back)
        }
        
        document.getElementById('header').innerHTML += "<div class='status'><div id='time'></div></div>";
        
        if (topLinksEnable) {
            if (tree[currentsite] != null) {
                var currentSection = ""
                for (var i = 0; i < tree[currentsite].length; i++) {
                    if (tree[currentsite][i][0] == "%") {
                        currentSection = tree[currentsite][i].substring(1, tree[currentsite][i].length)
                        document.getElementById('figures').innerHTML += "<h1 id='h1Title' class='title dark center'>" + currentSection + "</h1>"
                        currentSection += "/"
                    }
                    else if (typeof(tree[currentsite][i]) == 'object') {
                        for (var j = 0; j < tree[currentsite][i].length; j++) {

                        }
                    }
                    else {
                        document.getElementById('figures').innerHTML += "<a href='" + removeSpace(currentSection) + removeSpace(tree[currentsite][i]) + "/index.html' class='figure'><figure><img src='" + removeSpace(currentSection) + removeSpace(tree[currentsite][i])  + "/" + removeSpace(tree[currentsite][i]) + ".png' alt='" + tree[currentsite][i] + "'><figcaption>" + tree[currentsite][i] + "</figcaption></figure></a>"
                    }
                }
            }
            
            document.getElementById('header').innerHTML += "<div class='topbarlinks' id='topbarlinks'></div>";
            for (var i = 0; i < topbarlinks.length; i++) {
                if (topbarlinks[i][0] == currentSite) {
                    if (currentSite == "about") {
                        var link = back + 'about.html';
                    }
                    else {
                        var link = extraBack + "index.html";
                    }
                }
                else if (topbarlinks[i][0] == "home") {
                    var link = back + 'index.html';
                }
                else if (topbarlinks[i][0] == "about") {
                    var link = back + 'about.html';
                }
                else {
                    var link = back + topbarlinks[i][1] + "/index.html";
                }
                document.getElementById('topbarlinks').innerHTML += "<a href='" + link + "'><div class='topbarlink' id='" + topbarlinks[i][0] + "'>" + topbarlinks[i][1] + "</div</a>";
            }
            resize()
        
            if (currentSite != "none") {
                document.getElementById(currentSite).className += " topbarlinkcurrent";
            }
            
        }
        else {
            document.getElementById('header').innerHTML += "<br />"
        }
        

        document.getElementById('footer').innerHTML += "<center> <div class='tricolumn' id='firsttricolumn'></div> <div class='tricolumn' id='secondtricolumn'></div> <div class='tricolumn' id='thirdtricolumn'> </center><center class='centered'> <br> <div class='dark'>Daniel Vasquez Copyright \u00A9 2016 - " + new Date().getFullYear() + " </div> </center>";
            if (topLinksEnable) {
            document.getElementById('firsttricolumn').innerHTML += "<a href='" + back + "index.html'>Home</a> <br />";
            document.getElementById('firsttricolumn').innerHTML += "<a href='" + back + "about.html'>About me</a> <br />";
            document.getElementById('firsttricolumn').innerHTML += "<a href='" + back + "HomelessGroup2/index.html'>Homeless Project</a> <br />";

            document.getElementById('secondtricolumn').innerHTML += "<a href='" + back + "Web/index.html'>Web</a> <br />";
            document.getElementById('secondtricolumn').innerHTML += "<a href='" + back + "Art/index.html'>Art</a> <br />";
            document.getElementById('secondtricolumn').innerHTML += "<a href='" + back + "Games/index.html'>Games</a> <br />";


            document.getElementById('thirdtricolumn').innerHTML += "<a href='https://www.facebook.com'> <img class='icon' src='" + back + "contents/fb.png'/> </a>";
            document.getElementById('thirdtricolumn').innerHTML += "<a href='https://www.twitter.com'> <img class='icon' src='" + back + "contents/twit.png'/> </a>";
        }


        document.getElementById('title').innerHTML = currentsite + " - " + webInfo;
        document.getElementById('h1Title').innerHTML = currentsite + " - " + webInfo;

        document.getElementById('head').innerHTML += "<link id='style' rel='stylesheet' type='text/css' href='" + back + "style.css'>";
        document.getElementById('head').innerHTML += "<link rel='icon' href='" + back + "favicon.ico'>";
        if (topLinksEnable) {
            document.getElementById('links').innerHTML = "<a href='" + back + "index.html' class='acurrentPageLink'>Home</a>";
            var howManyBacks = [''];
            for (var i=back.split('/').length; i>1; i--) {
                if (i == back.split('/').length) {
                    for (var i=2; i<back.split('/').length; i++) {
                        howManyBacks.push("../");
                    }
                }
                document.getElementById('links').innerHTML += "<span id='>" + i + "'> >> </span>" + "<a href='" + howManyBacks.join('') + "index.html' id='link" + i + "' class='acurrentPageLink'>" + location.href.split('/')[location.href.split('/').length - i] + "</a>";
                if (howManyBacks[1] == undefined) {
                    if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == "index.html") {
                        document.getElementById('link' + i).outerHTML = '';
                        document.getElementById('>' + i).outerHTML = '';
                    }
                }
                if (howManyBacks != './') {
                    howManyBacks.pop()
                }
            }
        }
        if (currentSite != 'home') {
            document.getElementById('links').innerHTML += " >> " + "<a href='" + location.href + "' class='acurrentPageLink'>" + currentsite + "</a>";
        }
    }
    
    var dayOfTheWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];

    var jsTime = new Date();
    var jsOldTime = new Date();
    function timeChange() {
        jsTime = new Date();
        var weekDay = dayOfTheWeek[new Date().getDay()];
        var m = "am";
        var minutes = jsTime.getMinutes()
        var hours = jsTime.getHours();
        if (hours == 0) {
            hours = 12;
        }
        if (hours >= 13) {
            hours = hours - 12
            m = "pm";
        }
        if (jsTime.getMinutes() < 10) {
            var minutes = "0" + jsTime.getMinutes()
        }
        document.getElementById('time').innerHTML = ("Date: " + weekDay + ' ' + jsTime.getDate() + ', ' + hours + ":" + minutes + " " + m);
        jsOldTime = new Date();
        setTimeout(timeChange, 0)
    };
    var favicon = new Image();
    favicon.src = back + 'favicon.ico';
    var backNum = 0;
    var extraBack = '';
    var homeBack = '';
    favicon.onerror = function(){
        back += '../';
        favicon.src = back + 'favicon.ico';
        backNum = backNum + 1;
        if (backNum >= 2) {
            extraBack += '../';
        }
        if (backNum >= 1) {
            homeBack += '../'
        }
    }
    function getBack () {
        return back;
    }
    favicon.onload = function () {
        headerAndFooterStart();
        timeChange();
    }
}
