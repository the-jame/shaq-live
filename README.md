
# Discord Chat Bot
***
This is a simple bot made for my personal Discord server. Now with AI!


__The normal chat commands are:__
* `ai <string>`: Bot will answer with ai(OpenAI Davinci-003
* `ai <string>`: Bot will sales pitch an invention from the prompt(OpenAI Davinci-003)
* `say <string>`: Bot says the string in text-to-speech.
* `roll <integer>`: Make the bot randomly roll from 1 to your number.
* `8 <question>`: Bot will answer with an 8-ball style response.
* `er`: Bot will answer with a randomly-generated Elden Ring style message.

__The (dumb) chat commands are:__
* `who <question>(optional)`: Bot answers who did the thing that you just asked.
* `why <question>(optional)`: Bot says why something happened by making up an answer using a random proper noun and "reason".
* `whatis <question>`: Bot tells you what the thing you asked is.
* `ballsize|bs <string>`: Bot will tell you the ballsize of the string in question.
* `image` OR `random`: Respond with a random image from the database of meme responses.
* `memes`: List additional commands with image attachment responses. (50+)
 

***
# Installation
***
* `npm install`
* `cp sample-settings.json settings.json && nano settings.json` fill in your token.
* `node main.js` to run.

# Options & Config.
***

## Basic variables.
| Option | Type | Description | Location |
| --- | --- | --- | --- |
| token | String | Your discord bot token. | settings.json |
| botPrefix | String | The prefix of the bot. Defaults to "=". | settings.json + main.js [54] |
