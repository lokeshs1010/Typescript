//class of youtube video
var YoutubeVideo = /** @class */ (function () {
    //constructor
    function YoutubeVideo(title, channelName, views, likes, dislikes, comment, share, postedOn, link, recVideos, autoplay) {
        var _this = this;
        //getter methods 
        this.getTitle = function () {
            return _this.title;
        };
        this.getChannelName = function () {
            return _this.channelName;
        };
        this.getViews = function () {
            return _this.views;
        };
        this.getLikes = function () {
            return _this.likes;
        };
        this.getDislikes = function () {
            return _this.dislikes;
        };
        this.getComment = function () {
            var com = JSON.stringify(_this.comment);
            return com;
        };
        this.getShare = function () {
            return _this.share;
        };
        this.getPostedOn = function () {
            return _this.postedOn;
        };
        this.getLink = function () {
            return _this.link;
        };
        this.getRecVideos = function () {
            return "some other videos";
        };
        this.getAutoPlay = function () {
            return _this.autoplay;
        };
        // end getters
        // setter methods
        //Some properties of video can be changed like views, likes, dislikes and autoplay
        this.setVideoViews = function () {
            _this.views++;
        };
        this.setVideoLikes = function () {
            _this.likes++;
        };
        this.setVideoDislikes = function () {
            _this.dislikes++;
        };
        this.setAutoplay = function () {
            if (_this.autoplay == true) {
                return _this.autoplay = false;
            }
            else {
                return _this.autoplay = true;
            }
        };
        this.title = title;
        this.channelName = channelName;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.comment = comment;
        this.share = share;
        this.postedOn = postedOn;
        this.link = link;
        this.recommendedVideos = recVideos;
        this.autoplay = autoplay;
    } //end constructor
    return YoutubeVideo;
}());
// end Youtube video class
//class of video comments
var comments = /** @class */ (function () {
    //constructor
    function comments(commentBy, commentName, time, cLikes, cDislikes) {
        var _this = this;
        this.commentBy = commentBy;
        this.commentName = commentName;
        this.time = time;
        this.cLikes = cLikes;
        this.cDislikes = cDislikes;
        //end constructor
        //getters
        this.getCommentBy = function () {
            return _this.commentBy;
        };
        this.getCommentName = function () {
            return _this.commentName;
        };
        this.getTime = function () {
            return _this.time;
        };
        this.getCommentLikes = function () {
            return _this.cLikes;
        };
        this.getCommentDislikes = function () {
            return _this.cDislikes;
        };
        this.commentBy = commentBy;
        this.commentName = commentName;
        this.time = time;
        this.cLikes = cLikes;
        this.cDislikes = cDislikes;
    }
    return comments;
}());
//end video comment class
var comment1 = new comments("Lokesh", "It's very nice", "3 hours ago", 10, 3);
var comment2 = new comments("Ram", "WOW", "1 day ago", 22);
var comment3 = new comments("Anu", "Old is gold.... but New is Diamond", "5 hours ago");
var comments1 = [comment1, comment2];
var comments2 = [comment3];
var recvideo = new YoutubeVideo("Ghar Se Nikalte Hi Song", "T-Series", 1648, 273, 6, comments2, ["Facebook"], "7 days ago", "https://www.youtube.com/watch?v=f1qz8vn3XbY");
var video1 = new YoutubeVideo("Lo Safar Song", "T-Series", 2391, 199, 10, comments1, ["Facebook", "Twitter"], "2 month ago", "https://www.youtube.com/watch?v=I7nbSzLCtEE", recvideo, true);
//printing information on console log
console.log(video1);
console.log("\nYoutube Video: \n");
console.log("Video Title: " + video1.getTitle());
console.log("Channel Name: " + video1.getChannelName());
console.log("Views: " + video1.getViews());
console.log("Likes: " + video1.getLikes());
console.log("Dislikes: " + video1.getDislikes());
console.log("Comments: " + video1.getComment());
console.log("Posted On: " + video1.getPostedOn());
console.log("Share at: " + video1.getShare());
console.log("Link: " + video1.getLink());
console.log("Recommended Videos: " + video1.getRecVideos());
console.log("AutoPlay: " + video1.getAutoPlay());
//Changing some properties
video1.setVideoViews();
video1.setVideoLikes();
video1.setVideoDislikes();
video1.setAutoplay();
//printing new information
console.log("\nModified Info of YoutubeVideo: \n");
console.log("Views: " + video1.getViews());
console.log("Likes: " + video1.getLikes());
console.log("Dislikes: " + video1.getDislikes());
console.log("AutoPlay: " + video1.getAutoPlay());
