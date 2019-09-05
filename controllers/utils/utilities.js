//Import email related packages
const nodemailer = require('nodemailer')
const {google} = require('googleapis')


module.exports = {
    sendEmail: function(mailOptions) {
        const OAuth2 = google.auth.OAuth2

        //Setup OAth client
        const oauth2Client = new OAuth2(
            process.env.OAUTH2_CLIENT,
            process.env.OAUTH2_SECRET,
            "https://developers.google.com/oauthplayground"
        )
        oauth2Client.setCredentials({refresh_token: process.env.OAUTH2_REFRESH_TOKEN})
        oauth2Client.refreshAccessToken()
            .then((credentials) => {
                const smtpTransport = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        type: 'OAuth2',
                        user: 'purekitchensportal@gmail.com',
                        clientId: process.env.OAUTH2_CLIENT,
                        clientSecret: process.env.OAUTH2_SECRET,
                        refreshToken: process.env.OAUTH2_REFRESH_TOKEN,
                        accessToken: credentials.access_token
                    }
                })
                //Send Email
                smtpTransport.sendMail(mailOptions, (error, response) => {
                    error ? console.log(error) : console.log(response);
                    smtpTransport.close();
                })
            })
            .catch(err=> {
                console.log(err)
            })
    }
}