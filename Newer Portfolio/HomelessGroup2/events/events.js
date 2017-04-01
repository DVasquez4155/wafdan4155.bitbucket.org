var events = [
    {
        eventTitle : "Annual Toy Giveaway - South SF",
        eventDate : "December 22, 2016 (8:00 AM-10:00 AM)",
        eventLocation : "1381 South First St. San Jose, CA 95110",
        eventDescription : "In partnership with the SSF Police Department, we will provide toys to low income families in the community to brighten their holiday season. This event is free for all families to attend. There will be gifts given to children ages 0-12. Volunteers needed to help families sign in, guide them to gifts based on their tickets, organize gifts, set up and break down the decor and table and chairs.",
        eventLink : "https://www.eventbrite.com/e/annual-toy-giveaway-south-sf-shift-1-tickets-29943667315?aff=es2",
        eventMap : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.1020429888104!2d-121.87687208486!3d37.3164104798455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e33373dd4309f%3A0xdc53a8d8c0aba03c!2s1381+S+1st+St%2C+San+Jose%2C+CA+95110!5e0!3m2!1sen!2sus!4v1481408353438" width="100%" height="350px" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    {
        eventTitle : "Second Harvest Food Bank of Santa Clara and San Mateo Counties",
        eventDate : "Every Tuesday and Friday",
        eventLocation : "Central San Jose Second Harvest Food Bank",
        eventDescription : "Some of our most dedicated volunteers help through distributing food at hundreds of sites throughout our two counties. This is best for individuals or small groups willing to commit to weekly or monthly support.",
        eventLink : "http://www.shfb.org/familyharvestscc",
        eventMap : '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12696.581932175917!2d-121.8772059!3d37.2916857!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x756ea5fff4050eea!2sSecond+Harvest+Food+Bank+of+Santa+Clara+and+San+Mateo+Counties+-+Curtner+Center!5e0!3m2!1sen!2sus!4v1481440932172" width="100%" height="350px" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    {
        eventTitle : "Second Harvest Food Bank of Santa Clara and San Mateo Counties",
        eventDate : "Every Wednesday and Friday",
        eventLocation : "East San Jose Second Harvest Food Bank",
        eventDescription : "Some of our most dedicated volunteers help through distributing food at hundreds of sites throughout our two counties. This is best for individuals or small groups willing to commit to weekly or monthly support.",
        eventLink : "http://www.shfb.org/familyharvestscc",
        eventMap : '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6348.290940773811!2d-121.877206!3d37.291686000000006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x756ea5fff4050eea!2sSecond+Harvest+Food+Bank+of+Santa+Clara+and+San+Mateo+Counties+-+Curtner+Center!5e0!3m2!1sen!2sus!4v1481441177148" width="100%" height="350" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    {
        eventTitle : "Sacred Hearts Silicon Valley",
        eventDate : "Everyday",
        eventLocation : "1381 South First St. San Jose, CA 95110",
        eventDescription : "Sacred Heart Community Service is dedicated to bringing our community together to address poverty in Silicon Valley. Through a comprehensive array of resources, services, and community involvement initiatives, SHCS is making a real impact in the lives of working poor families. <br />Our vision is a community united to ensure that every child and adult is free from poverty.",
        eventLink : "http://sacredheartcs.org/volunteer/",
        eventMap : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.1020429888094!2d-121.87687208466082!3d37.31641047984552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e33373dd4309f%3A0xdc53a8d8c0aba03c!2s1381+S+1st+St%2C+San+Jose%2C+CA+95110!5e0!3m2!1sen!2sus!4v1481441236972" width="100%" height="350px" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    {
        eventTitle : "Danville Area Community Harvest",
        eventDate : "December 10, 2016 (10:00 AM-1:00 PM)",
        eventLocation : "Sycamore Valley Road and Camino Ramon Danville, CA 94526",
        eventDescription : "We will harvest fresh backyard fruit for donation to local soup kitchens, food pantries, shelters and the food bank. Typical harvests take about 3 hours and travel no more than 25 miles from the starting location. We will have all the necessary equipment, including buckets, picking-poles, ladders, clippers, and crates with us.",
        eventLink : "https://www.eventbrite.com/e/danville-area-community-harvest-tickets-25872247589?aff=es2",
        eventMap : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.091642792494!2d-121.9930437846468!3d37.81132237975275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808ff34b6ef9e9eb%3A0x13d24eb72b608eb3!2sCamino+Ramon+%26+Sycamore+Valley+Rd%2C+Danville%2C+CA+94526!5e0!3m2!1sen!2sus!4v1481441291163" width="100%" height="350px" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    /*How to incoperate events onto this object
    {
        eventTitle : "Title",
        eventDate : "Date",
        eventLocation : "Location",
        eventDescription : "Description",
        eventLink : "Link",
        eventMap : 'Google Map (Ask Dan to do this)'
    },
    */
];

document.getElementById('eventTitle').innerHTML = events[(parseFloat(hash)-1)]["eventTitle"];
var currentsite = events[(parseFloat(hash)-1)]["eventTitle"];
document.getElementById('eventDate').innerHTML = events[(parseFloat(hash)-1)]["eventDate"];
document.getElementById('eventLocation').innerHTML = events[(parseFloat(hash)-1)]["eventLocation"];
document.getElementById('eventDescription').innerHTML = events[(parseFloat(hash)-1)]["eventDescription"];
document.getElementById('eventLink').href = events[(parseFloat(hash)-1)]["eventLink"];
document.getElementById('eventMap').innerHTML = events[(parseFloat(hash)-1)]["eventMap"];
document.getElementById('links').innerHTML = '<a class="acurrentPageLink" href="../events/index.html">Events</a> >> <a class="acurrentPageLink" href="' + location.href + '">Event: ' + events[(parseFloat(hash)-1)]["eventTitle"] + '</a>';
if (hash == 1) {
    document.getElementById('back').innerHTML = '';
}
else {
    document.getElementById('back').innerHTML = '<<';
    document.getElementById('back').href = 'event.html#' + (parseFloat(hash) - 1); 
}
document.getElementById('current').innerHTML = 'Event ' + parseFloat(hash);
document.getElementById('current').href = location.href;
if (hash == events.length) {
    document.getElementById('next').innerHTML = '';
}
else {
    document.getElementById('next').innerHTML = '>>';
    document.getElementById('next').href = 'event.html#' + (parseFloat(hash) + 1); 
}