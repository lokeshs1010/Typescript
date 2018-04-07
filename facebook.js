//class of Social Profile
var SocialProfile = /** @class */ (function () {
    //constructor
    function SocialProfile(name, school, skills, hometown, currentCity, mobileNumber, facebookId, email, birthday, gender, languages, views, relationship, about, quote) {
        var _this = this;
        //getter methods
        this.getName = function () {
            return _this.name;
        };
        this.getSchool = function () {
            return _this.school;
        };
        this.getSkills = function () {
            return _this.skills;
        };
        this.getHomeTown = function () {
            return _this.hometown;
        };
        this.getCurrentCity = function () {
            return _this.currentCity;
        };
        this.getMobileNo = function () {
            return _this.mobileNumber;
        };
        this.getFacebookId = function () {
            return _this.facebookId;
        };
        this.getEmail = function () {
            return _this.email;
        };
        this.getBirthday = function () {
            return _this.birthday;
        };
        this.getGender = function () {
            return _this.gender;
        };
        this.getLanguage = function () {
            return _this.languages;
        };
        this.getViews = function () {
            return _this.views;
        };
        this.getRelationship = function () {
            return _this.relationship;
        };
        this.getAbout = function () {
            return _this.about;
        };
        this.getQuote = function () {
            return _this.quote;
        };
        // end getters
        // setter methods
        //Some properties of profile can be changed like Views, Relationship, Quote, About
        this.setViews = function (view) {
            _this.views = view;
        };
        this.setRelationship = function (relation) {
            _this.relationship = relation;
        };
        this.setAbout = function (abt) {
            _this.about = abt;
        };
        this.setQuote = function (quo) {
            _this.quote = quo;
        };
        this.name = name;
        this.school = school;
        this.skills = skills;
        this.hometown = hometown;
        this.currentCity = currentCity;
        this.mobileNumber = mobileNumber;
        this.facebookId = facebookId;
        this.email = email;
        this.birthday = birthday;
        this.gender = gender;
        this.languages = languages;
        this.views = views;
        this.relationship = relationship;
        this.about = about;
        this.quote = quote;
    } //end constructor
    return SocialProfile;
}());
// end Youtube video class
var info = new SocialProfile("Lokesh", ["DBPS", "RPS"], ["Web Developer"], "Rewari", "Sirsa", 7876812345, "/hrishikesh.saini.3", "lokesh@edwisor.com", "10 Oct, 1995", "Male", ["JavaScript", "Python", "Java"], "Not interested", "Single");
//printing information on console log
console.log(info);
console.log("\nFacebook profile information\n");
console.log("Name: " + info.getName());
console.log("School: " + info.getSchool());
console.log("Skills: " + info.getSkills());
console.log("HomeTown: " + info.getHomeTown());
console.log("Current City: " + info.getCurrentCity());
console.log("Mobile No.: " + info.getMobileNo());
console.log("Facebook Id: " + info.getFacebookId());
console.log("Email: " + info.getEmail());
console.log("Birthday: " + info.getBirthday());
console.log("Gender: " + info.getGender());
console.log("Language: " + info.getLanguage());
console.log("Views: " + info.getViews());
console.log("Relationship status: " + info.getRelationship());
//Changing some properties
info.setViews("Indian");
info.setRelationship("Complicated");
info.setAbout("Simple but intresting");
info.setQuote("You can do it");
//printing new information
console.log("\nModified info of Social class\n");
console.log("Relationship status: " + info.getRelationship());
console.log("Views: " + info.getViews());
console.log("About: " + info.getAbout());
console.log("Quote: " + info.getQuote());
