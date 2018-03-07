var Twit = require('twit')

// Initiating the API
var Twitter = new Twit({
    consumer_key: 'mWt15Qt92u4U15G0YDdaLgqRQ',
    consumer_secret: 'BTfDWEXU8qb7JK6o6TnfRHdHaa8rkaZm2yzteM0vGI843qJVqK',
    access_token: '941200620752474112-htMyc8V78FmiyLfhie7OvzvFJi9W4sT',
    access_token_secret: 'AEDEq3U3BnwaXOHVOcPhnL8CZ2464zKeLuo7XNlfYldZa'
});


// post status/tweets to twitter
Twitter.post('statuses/update', { status: 'I Love #NodeJs!' }, function (error, tweet, response) {
    if (error) {
        console.log(error);
    } else {
        console.log(tweet);
    }
});

// streams listens for events
var stream = Twitter.stream('user');
stream.on('direct_message', function (eventMsg) {
    if (eventMsg.direct_message.text) {
        Twitter.post("direct_messages/new", {
            user_id: eventMsg.direct_message.sender.id, // USER_ID is parameter from directMsg object
            text: eventMsg.direct_message.text
        });
    }
})