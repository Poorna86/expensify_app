const path = require('path')
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..' , 'public');
const port = process.env.PORT || 3000;
//const router = new express.Router
//const notifier = require('../server/sms')

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
})

app.post('/create', async (req,res) => {
    require('dotenv').config({ path: '.env.example' })
    const phno = '+916363027399'
    const client = require('twilio')(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILIO_AUTH_TOKEN
    );

    client.messages.create({
        from: process.env.TWILIO_NUMBER,
        to: phno,
        body: "You just sent an SMS from Node.js using Twilio!"
    }).then((messsage) => {
        console.log(messsage.sid)})
      .catch((e) => {
        console.log('error: ', e)
    });
})

app.listen(port, () => {
    console.log('server up running')
});