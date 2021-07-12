// This function is the webhook's request handler.
exports = async function(payload, response) {
    
    var collection = context.services.get("mongodb-atlas").db("postsDB").collection("posts");
    
    var posts = await collection.find().toArray();
    
    //Convert the ObjectIds to strings....
    
    posts.forEach(post => {
      
      post._id = post._id.toString();
      
    })
    
    return  posts;
    
};