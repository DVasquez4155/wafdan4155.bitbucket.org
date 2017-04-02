var testimonials = [
    {
        testimonialDate : "September 3, 2016",
        testimonialStars : 3,
        testimonialComment : "The events were simple enought to follow. Could use more terms to apply and methods to use to help the website though.",
        testimonialRecommend : "Great review",
        testimonialUser : "John Doe",
    },
    {
        testimonialDate : "October 6, 2016",
        testimonialStars : 5,
        testimonialComment : "I have contributed in over 300 hours of community service thanks to Humanity Helping Homeless",
        testimonialRecommend : "Awesome Help!",
        testimonialUser : "Anonymous User",
    },
    {
        testimonialDate : "November 6, 2016",
        testimonialStars : 4,
        testimonialComment : "I found out helpful ways and paths for my Homeless Father. Thanks Humanity Helping Homeless",
        testimonialRecommend : "Yeah!",
        testimonialUser : "Anonymous User",
    },
    {
        testimonialDate : "December 22, 2016",
        testimonialStars : 5,
        testimonialComment : "I donated a lot!",
        testimonialRecommend : "Yes!!!",
        testimonialUser : "Anonymous User",
    },
    
    
//    {
//        testimonialDate : "December 22, 2016",
//        testimonialStars : 3,
//        testimonialTComment : "Comment",
//        testimonialRecommend : "Recommendation",
//        testimonialUser : "Anonymous User",
//    },
];

function testPage() {
    for (var i = 0; i < testimonials.length; i++) {
        document.getElementById('testimonialList').innerHTML += "<div class='halfbox'><div class='stars'></div><br /><span>" + testimonials[i].testimonialComment + "</span><br /><span>-" + testimonials[i].testimonialRecommend + "</span><br /><br /><span>By " + testimonials[i].testimonialUser + "</span></div>"
        for (var j = 0; j < testimonials[i].testimonialStars; j++) {
            document.getElementsByClassName('stars')[i].innerHTML += "<img class='star' src='contents/star.svg'/>"
        }
        for (var j = 0; j <  5 - testimonials[i].testimonialStars; j++) {
            document.getElementsByClassName('stars')[i].innerHTML += "<img class='star gray' src='contents/star.svg'/>"
        }
    }
    
}
function testHome() {
    for (var i = 0; i < 2; i++) {
        document.getElementById('testimonialList').innerHTML += "<div class='halfbox'><div class='stars'></div><br /><span>" + testimonials[i].testimonialComment + "</span><br /><span>-" + testimonials[i].testimonialRecommend + "</span><br /><br /><span>By " + testimonials[i].testimonialUser + "</span></div>"
        for (var j = 0; j < testimonials[i].testimonialStars; j++) {
            document.getElementsByClassName('stars')[i].innerHTML += "<img class='star' src='contents/star.svg'/>"
        }
        for (var j = 0; j <  5 - testimonials[i].testimonialStars; j++) {
            document.getElementsByClassName('stars')[i].innerHTML += "<img class='star gray' src='contents/star.svg'/>"
        }
    }
    
}