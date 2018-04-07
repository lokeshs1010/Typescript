//class of youtube video
class YoutubeVideo {
    //fields of video
    private title : string;
    private channelName :string;
    private views: number;
    private likes : number;
    private dislikes : number;
    private comment : comments[];
    private share : string[];
    private postedOn : string;
    private link : string;
    private autoplay : Boolean
    private recommendedVideos : Object;

    //constructor
    constructor(title:string, channelName:string, views:number, likes:number, dislikes: number, comment:comments[], 
                share:string[], postedOn:string, link:string, recVideos?:any, autoplay?: any) {
        this.title=title;
        this.channelName=channelName;
        this.views=views;
        this.likes=likes;
        this.dislikes=dislikes;
        this.comment=comment;
        this.share=share;
        this.postedOn=postedOn;
        this.link=link;
        this.recommendedVideos=recVideos;
        this.autoplay=autoplay;
    } //end constructor

    //getter methods 
    getTitle= () => {
        return this.title;
    }

    getChannelName= () => {
        return this.channelName;
    }

    getViews= () => {
        return this.views;
    }

    getLikes= () => {
        return this.likes;
    }

    getDislikes= () => {
        return this.dislikes;
    }

    getComment= () => {
        let com = JSON.stringify(this.comment);
        return com;
    }

    getShare= () => {
        return this.share
    }

    getPostedOn= () => {
        return this.postedOn;
    }

    getLink= () => {
        return this.link;
    }

    getRecVideos= () => {
        return "some other videos";
    }

    getAutoPlay= () => {
        return this.autoplay;
    }
    // end getters

    // setter methods
    //Some properties of video can be changed like views, likes, dislikes and autoplay
    setVideoViews= () => {
        this.views++;
    }

    setVideoLikes= () => {
        this.likes++;
    }

    setVideoDislikes= () => {
        this.dislikes++;
    }

    setAutoplay= () => {
        if(this.autoplay == true) {
            return this.autoplay=false;
        }
        else {
            return this.autoplay=true;
        }
    }
    // end setters
}
// end Youtube video class

//class of video comments
class comments {
    //constructor
    constructor(private commentBy: string, private commentName: string, private time: string,
                private cLikes?: number, private cDislikes?: number) {
        this.commentBy = commentBy;
        this.commentName = commentName;
        this.time = time; 
        this.cLikes = cLikes;
        this.cDislikes = cDislikes;
    }
    //end constructor

    //getters
    getCommentBy= () => {
        return this.commentBy;
    }

    getCommentName= () => {
        return this.commentName;
    }

    getTime= () => {
        return this.time;
    }

    getCommentLikes= () => {
        return this.cLikes;
    }

    getCommentDislikes= () => {
        return this.cDislikes;
    }
    //end getters
}
//end video comment class


let comment1 = new comments("Lokesh", "It's very nice", "3 hours ago", 10, 3);
let comment2 = new comments("Ram", "WOW", "1 day ago", 22);
let comment3 = new comments("Anu", "Old is gold.... but New is Diamond", "5 hours ago");

let comments1 = [comment1, comment2];
let comments2 = [comment3];

let recvideo = new YoutubeVideo("Ghar Se Nikalte Hi Song", "T-Series", 1648, 273, 6, comments2, ["Facebook"], "7 days ago", "https://www.youtube.com/watch?v=f1qz8vn3XbY");
let video1 = new YoutubeVideo("Lo Safar Song", "T-Series", 2391, 199, 10, comments1, ["Facebook", "Twitter"], "2 month ago", "https://www.youtube.com/watch?v=I7nbSzLCtEE", recvideo, true);

//printing information on console log
console.log(video1);
console.log("\nYoutube Video: \n");
console.log(`Video Title: ${video1.getTitle()}`);
console.log(`Channel Name: ${video1.getChannelName()}`);
console.log(`Views: ${video1.getViews()}`);
console.log(`Likes: ${video1.getLikes()}`);
console.log(`Dislikes: ${video1.getDislikes()}`);
console.log(`Comments: ${video1.getComment()}`);
console.log(`Posted On: ${video1.getPostedOn()}`);
console.log(`Share at: ${video1.getShare()}`);
console.log(`Link: ${video1.getLink()}`);
console.log(`Recommended Videos: ${video1.getRecVideos()}`);
console.log(`AutoPlay: ${video1.getAutoPlay()}`);

//Changing some properties
video1.setVideoViews();
video1.setVideoLikes();
video1.setVideoDislikes();
video1.setAutoplay();

//printing new information
console.log("\nModified Info of YoutubeVideo: \n");
console.log(`Views: ${video1.getViews()}`);
console.log(`Likes: ${video1.getLikes()}`);
console.log(`Dislikes: ${video1.getDislikes()}`);
console.log(`AutoPlay: ${video1.getAutoPlay()}`);
