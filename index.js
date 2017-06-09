'use strict';
var Alexa = require('alexa-sdk');
// Credit to: https://github.com/alexa/skill-sample-nodejs-fact/blob/master/src/index.js

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.  
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = "undefined";

var SKILL_NAME = "Chuck Norris Jokes";
var GET_FACT_MESSAGE = "Here's your joke: ";
var HELP_MESSAGE = "You can say tell me a Chuck Norris joke, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
var data = [
    "Chuck Norris doesn't read books. He stares them down until he gets the information he wants.",
    "I find it ironic that the colors red, white, and blue stand for freedom until they are flashing behind you.",
    "If i had a dollar for every girl that found me unattractive, they would eventually find me attractive.",
    "When my boss asked me who is the stupid one, me or him? I told him everyone knows he doesn't hire stupid people.",
    "Before I criticize a man, I like to walk a mile in his shoes. That way, when I do criticize him, I'm a mile away and I have his shoes.",
    "Standing in the park, I was wondering why a Frisbee gets larger the closer it gets. Then it hit me.",
    "I asked God for a bike, but I know God doesn't work that way so I stole a bike and asked for forgiveness.",
    "I hate Russian dolls, they're so full of themselves.",
    "I refused to believe my road worker father was stealing from his job, but when I got home all the signs were there.",
    "I recently decided to sell my vacuum cleaner as all it was doing was gathering dust.",
    "My girlfriend told me to go out and get something that makes her look sexy... so I got drunk.",
    "As I watched the dog chasing his tail I thought Dogs are easily amused, then I realized I was watching the dog chasing his tail.",
    "I've just written a song about tortillas; actually, it’s more of a rap.",
    "To the man on crutches, dressed in camouflage, who stole my wallet - you can hide, but you can't run.",
    "Velcro - what a rip-off!",
    "Just because nobody complains doesn't mean all parachutes are perfect."
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.  
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewJokeIntent');
    },
    'GetNewJokeIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};