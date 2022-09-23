const Tags = require("../models/Tags");


module.exports = {
  
  createTag: async (req, res) => {
    try {
      
      await Tags.create({
        tag: req.body.tag,
        likes: 0,
        post: req.params.id,
       
      });
      console.log("tag has been added!");
      res.redirect("/post/" + req.params.id);
    } catch (err) {
      console.log(err);
    }
  }

};
