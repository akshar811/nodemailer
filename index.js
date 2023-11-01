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
    to : req.body.email,
    subject : req.body.subject,
    text : req.body.text
  };
  transporter.sendMail(mailoptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log(info);
    }
  });
  res.send("mail is sent")
});

app.listen(8090, () => {
  console.log("listening on port 8090");
});
