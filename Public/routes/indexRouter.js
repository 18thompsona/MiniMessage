const { Router } = require("express");

const indexRouter = Router();

const messages = [
    {
      id: 1,
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      id: 2,
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];  

indexRouter.get("/", (req, res) => res.render("index", {messages: messages}));

// indexRouter.post("/new", (req, res) => {
//   const { username, message } = req.body;
//   console.log(req.body);
//   messages.push({ text: message, user: username, added: new Date()});
//   res.render("index", {messages: messages})
// });


indexRouter.post("/new", (req, res) => {
  const { username, message } = req.body;
  if (username && message) {
    messages.push({
      id: messages.length + 1,
      text: message,
      user: username,
      added: new Date()
    });
  }
  res.redirect("/");
});

indexRouter.get("/messages/:id", (req, res) => {
  const messageId = parseInt(req.params.id);
  const message = messages.find(msg => msg.id === messageId);

  if (!message) {
    return res.status(404).send("Message not found");
  }

  res.render("messageDetails", { message });
});

module.exports = indexRouter;