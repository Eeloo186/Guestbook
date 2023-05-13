const { Guest } = require("../models");

exports.renderMain = async (req, res, next) => {
  console.log("renderMain 진입");
  res.render("guestBook");
};

exports.getPost = (req, res, next) => {
  Guest.findAll()
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      console.error(err);
    });
};

exports.writePost = (req, res, next) => {
  const { name, email, content } = req.body;
  Guest.create({
    name,
    email,
    content,
  })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      console.error(err);
    });
};

exports.deletePost = (req, res, next) => {
  const { postId } = req.params;
  console.log(`postid = ${postId}`);

  Guest.destroy({
    where: { id: postId },
  })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      console.error(err);
    });
};

exports.updatePost = (req, res, next) => {
  const { postId } = req.params;
  const { name, email, content } = req.body;
  console.log(req.body);
  Guest.update({
    name: name,
    email: email,
    content: content,
  }, {
    where: {id: postId},
  })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      console.error(err);
    });
};
