require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// verify once
transporter.verify((err, success) => {
    if (err) {
        console.log("SMTP ERROR:", err);
    } else {
        console.log("GMAIL SMTP READY ");
    }
});


const sendMail = async ({ to, status, name, pdfBuffer }) => {
    try {
        let subject, html;
        if (status === "approved") {
            subject = "Congratulations Your Request Has Been Approved";
            html = `<p>Dear , ${name} </p>
            <p>Good News! Your Request Has Been Approve By Your Host. Please Find Your Visitor Pass Below. </p>
            <p>Best regards, </p>
            <p> The Vms Team </p>`
        }
        else if (status === "rejected") {
            subject = "Important Update:Your Request Has Been Rejected";
            html = `<p>Dear user , ${name} </p>
            <p>we are informed that your request has been Rejected  By Your Host , if your any doubts please contact your host</p>
            <p>Best regards, </p>
            <p> The Vms Team </p>`
        }
        const info = await transporter.sendMail({
            from: `VMS TEAM <${process.env.EMAIL_GMAIL}>`,
            to: to,
            subject: subject,
            html: html,
            attachments: status === "approved" ? [
                {
                    filename:`${name}-visitor-pass.pdf`,
                    content: pdfBuffer,
                    contentType: "application/pdf"
                }
            ]
                : []
        });
        console.log("Mail sent successfully ,", info.messageId)
    } catch (error) {
        throw new Error("server error in email",)
    }
}

module.exports = sendMail;