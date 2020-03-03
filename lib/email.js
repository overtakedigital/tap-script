const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = async function sendEmailCSV(params) {
  const content = Buffer.from(params.content).toString("base64");
  return sgMail.send({
    to: params.to,
    from: "jacob@overtakedigital.com",
    subject: params.subject,
    text: params.text,
    attachments: [
      {
        content,
        filename: "data.csv",
        type: "text/csv",
        disposition: "attachment",
        contentId: "mytext"
      }
    ]
  });
};
