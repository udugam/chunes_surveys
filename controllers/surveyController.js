const utilities = require('./utils/utilities.js')

module.exports = {
    submit: function(req,res) {
        
        let emailBody = ""
        emailBody = `<div><h3>user: ${req.body.id}</h3></div>
                     <div><h3>answers: ${JSON.stringify(req.body.answers)}</h3></div>`

        const mailOptions = {
            from: "purekitchensportal@gmail.com",
            to: 'chunesmusicapp@gmail.com',
            subject: `A Survey Has Been Completed!`,
            generateTextFromHTML: true,
            html: emailBody
        }

        //Send Email
        utilities.sendEmail(mailOptions)

        res.json(true)
    }
}