//class of Social Profile
class SocialProfile {
  //fields
  private name: string;
  private school: string[];
  private skills: string[];
  private hometown: string;
  private currentCity: string;
  private mobileNumber: number;
  private facebookId: string;
  private email: string;
  private birthday: string;
  private gender: string;
  private languages: string[];
  private views: string;
  private relationship: string;
  private about: string;
  private quote: string;

  //constructor
  constructor(name: string, school: string[], skills: string[], hometown: string, currentCity: string, 
            mobileNumber: number,facebookId: string, email: string, birthday: string, gender: string, 
            languages: string[], views: string, relationship?: any, about?: any, quote?: any) {
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
        this.quote =quote;
    }//end constructor

    //getter methods
    getName= () =>{
        return this.name;
    }

    getSchool= () =>{
        return this.school;
    }

    getSkills= () =>{
        return this.skills;
    }

    getHomeTown= () =>{
        return this.hometown;
    }

    getCurrentCity= () =>{
        return this.currentCity;
    }

    getMobileNo= () =>{
        return this.mobileNumber;
    }

    getFacebookId= () =>{
        return this.facebookId;
    }

    getEmail= () =>{
        return this.email;
    }

    getBirthday= () =>{
        return this.birthday;
    }

    getGender= () =>{
        return this.gender;
    }

    getLanguage= () =>{
        return this.languages;
    }

    getViews= () =>{
        return this.views;
    }

    getRelationship= () =>{
        return this.relationship;
    }

    getAbout= () =>{
        return this.about;
    }

    getQuote= () =>{
        return this.quote;
    }
    // end getters

    // setter methods
    //Some properties of profile can be changed like Views, Relationship, Quote, About
    setViews= (view:string) =>{
        this.views = view;
    }

    setRelationship= (relation:string) =>{
        this.relationship = relation;
    }

    setAbout= (abt : string) =>{
        this.about =abt;
    }

    setQuote= (quo : string) =>{
        this.quote = quo;
    }
    // end setters

}
// end Youtube video class

let info = new SocialProfile("Lokesh", ["DBPS", "RPS"], ["Web Developer"], "Rewari", "Sirsa", 7876812345, "/hrishikesh.saini.3",
                                "lokesh@edwisor.com", "10 Oct, 1995", "Male", ["JavaScript", "Python", "Java"],
                            "Not interested", "Single");

//printing information on console log
console.log(info);
console.log(`\nFacebook profile information\n`);
console.log(`Name: ${info.getName()}`);
console.log(`School: ${info.getSchool()}`);
console.log(`Skills: ${info.getSkills()}`);
console.log(`HomeTown: ${info.getHomeTown()}`);
console.log(`Current City: ${info.getCurrentCity()}`);
console.log(`Mobile No.: ${info.getMobileNo()}`);
console.log(`Facebook Id: ${info.getFacebookId()}`);
console.log(`Email: ${info.getEmail()}`);
console.log(`Birthday: ${info.getBirthday()}`);
console.log(`Gender: ${info.getGender()}`);
console.log(`Language: ${info.getLanguage()}`);
console.log(`Views: ${info.getViews()}`);
console.log(`Relationship status: ${info.getRelationship()}`);

//Changing some properties
info.setViews("Indian");
info.setRelationship("Complicated");
info.setAbout("Simple but intresting");
info.setQuote("You can do it");

//printing new information
console.log("\nModified info of Social class\n")
console.log(`Relationship status: ${info.getRelationship()}`);
console.log(`Views: ${info.getViews()}`);
console.log(`About: ${info.getAbout()}`);
console.log(`Quote: ${info.getQuote()}`);