


var bio = {
    "name" : "Jay LaForge",
    "role" : "Applications Developer",
    "contatctInformation": {"email" : " jaylaforge2@gmail.com", "mobile" : " (864) 554-1986", "GitHub" : " Jaylaforge", "location" : " Greenwood,SC"},
    "myPicture" : "images/me.jpg" ,
    "welcomeMessage" : "Welcome to my resume built using JavaScript!",
    "skills" : "I am proficient in JavaScript and HTML. I am currently working on SQL and would love to help your company by learning and utilizing any language you may need."
    
};
var formattedMoble =
    HTMLmobile.replace("%data%", bio.contatctInformation.mobile)
var formattedEmail =
    HTMLemail.replace("%data%", bio.contatctInformation.email);
var formattedName =
    HTMLheaderName.replace("%data%", bio.name);
var formattedRole =
    HTMLheaderRole.replace("%data%", bio.role);   
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedEmail);
$("#header").append(formattedMoble);


var work = {};
    work.position1 = " Teacher";
    work.company1 = " Greenwood District 50";
    work.years = 3;
    work.city = " Greenwood, SC";

//$("#main").append(work.position1);

var eductation = {
    "schools": [
        {
            "name": " Lander University",
            "city": " Greenwood, SC",
            "degree": " BS",
            "major" : " Sociology with Criminal Justice Emphasis"
        },
        {
            "name" : " Converse College",
            "city" : " Spartanburg, SC",
            "degree" : " Masters",
            "major" : " Masters of Arts in Teaching"
        }
    ],
    "onlinecourses": [
        {
            "title": "JavaScript",
            "school": "Udacity",
            "dates": "2016",
            "url": "https://classroom.udacity.com/courses/ud804"
        }
    ]
};

$("#main").append(eductation.name);

var projects = {};



