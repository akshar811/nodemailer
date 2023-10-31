const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "aksharambaliya6@gmail.com",
    pass: "rzxy eiqf jypf wvqt",
  },
});

app.post("/send", (req, res) => {
  let { email, subject, text } = req.body;
  const mailoptions = {
    from: "aksharambaliya6@gmail.com",
    to: "daksh1or2@gmail.com",
    subject: "Node.js",
    text: 'Hello',
  };
  transporter.sendMail(mailoptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});

app.listen(8090, () => {
  console.log("listening on port 8090");
});
