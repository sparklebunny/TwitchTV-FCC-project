This project is part of the FreeCodeCamp online curriculum for the Front End Development certificate. I was fortunate enough to be included in the pilot program SCCodes.org which used this curriculum in their 12-week front end development cohort. The SCCodes.org program offers weekly small group meetings with mentors to help students complete the Front End Development certificate offered through FreeCodeCamp.com.  

The requirements included (taken from FCC user stories): 
  ***Objective: Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/Myvqmo/.
  ***Fulfill the below user stories. Use whichever libraries or APIs you need. Give it your own personal style.
  1. User Story: I can see whether Free Code Camp is currently streaming on Twitch.tv.
  2. User Story: I can click the status output and be sent directly to the Free Code Camp's Twitch.tv channel.
  3. User Story: if a Twitch user is currently streaming, I can see additional details about what they are streaming.
  4. User Story: I will see a placeholder notification if a streamer has closed their Twitch account (or the account never existed). You can verify this works by adding brunofin and comster404 to your array of Twitch streamers.
  ***Hint: See an example call to Twitch.tv's JSONP API at http://forum.freecodecamp.com/t/use-the-twitchtv-json-api/19541. 
  ***Hint: The relevant documentation about this API call is here: https://github.com/justintv/Twitch-API/blob/master/v3_resources/streams.md#get-streamschannel.
  ***Hint: Here's an array of the Twitch.tv usernames of people who regularly stream: ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
  ***UPDATE: Due to a change in conditions on API usage explained here Twitch.tv now requires an API key, but we've built a workaround. Use https://wind-bow.gomix.me/twitch-api instead of twitch's API base URL (i.e. https://api.twitch.tv/kraken ) and you'll still be able to get account information, without needing to sign up for an API key.

I incorporated Twitter Bootstrap to aid in the responsiveness of the layout. I used AJAX for the API calls and jQuery to access the data elements needed to retrieve and display them to the page. I added a simple click event for the menu to show and hide the data associated with each menu item. I plan to refactor this section in the future into a single function.
