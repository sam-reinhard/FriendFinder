var friends = require("../data/friends.js");

module.exports = function(app){
    // API request to display all of the friends
    app.get("/api/friends", function(req, res){
        return res.json(friends);
    });

    // API POST route to handle incoming survey results and compatability logic
    app.post("/api/friends", function(req, res){
        // take in the request
        var newFriend = req.body;

        // check the scores against all the others
        var minimumSimilarity = 40;

        for (var i=0; i<friends.length; i++){
            var totalSimilarity = 0;
            var bestestFriend;
            
            for (var j=0; j<friends[i].scores.length; j++){
                var answerSimilarity = Math.abs(parseInt(newFriend.scores[j]) - parseInt(friends[i].scores[j]));
                totalSimilarity += answerSimilarity;
            };

            // If the similarity of i is closer, replace minimumSimilarity with it's totalSimilarity value and make the object be the new best friend
            if (totalSimilarity < minimumSimilarity){
                var newBestFriend = friends[i];
                minimumSimilarity = totalSimilarity;
            }
        };

        console.log(newBestFriend);
        

        // push the new friend into the friends array
        friends.push(newFriend);

        // send the new best friend as the response
        res.json(newBestFriend);
    })
}