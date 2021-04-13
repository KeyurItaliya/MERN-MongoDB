const nodeMailer = require('nodemailer');

const trasport = nodeMailer.createTransport({
    service :"gmail",
    port: 465,
    host: "smtp.gmail.com",
    secure: false,
    auth :
    {
        user: "kosinfo2272@gmail.com",
        pass: ""
    }
})

// setup email data with unicode symbols
var mailOptions = {
    from: "kosinfo2272@gmail.com",
    to: 'keyuritaliyah1998@gmail.com',
    subject :'message',
    text :' "Hi,\n You have successfully created an account"',
    // html: '<b>Welcome?</b>' // html body
};

// sends mail
module.exports.sendMail  = function()
{
 // send mail with defined transport object
 trasport.sendMail(mailOptions, (error, info) => {
    if (error)
    {
        return console.log(error);
    }else{
        return console.log('Message sent: %s', info.messageId);
    }
});
}

