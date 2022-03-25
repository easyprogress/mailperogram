var multiMailer = require("node-multi-mailer");
var path = require("path");

var attachmentFolder = path.join(__dirname, "attachment"); // attachment folder path

let attachments = ["myimage.png"]; // pass list of files you want to send with multiMailer
var emailFolder = path.join(__dirname, "email"); // template folder path

// Create a new instance of MultiMailer
multiMailer.configuration({
  senderEmail: "neha.gupta@emagia.com",
  senderName: "neha", // Business Name
  //sendGridApiKey: SENDGRID_API_KEY, // SendGrid API Key
  replyTo: "nehagupta9642@gmail.com", // optional parameter [ default = senderEmail ]
  templateFolderPath: emailFolder, // optional parameter  [ required for sending templates ]
  attachmentFolderPath: attachmentFolder, // Optional parameter  [ required for sending attachments]
});

var RECEIVER_EMAIL = "nehagupta9642@gmail.com";

// To send a plain text email
multiMailer(
  RECEIVER_EMAIL,
  "Sending email from node-multi-mailer", // subject
  "Thanks for sending email with node-multi-mailer" // body
  //attachments,
);