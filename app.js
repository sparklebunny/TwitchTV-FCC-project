$(document).ready(function() {


 	var twitchUsers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];
  
	for (var i = 0; i < twitchUsers.length; i++) {
    	getUserStreams(twitchUsers[i]);
	}

	//access API data for user streams
	function getUserStreams(userName){
		$.ajax({
			type: 'GET',
      		dataType: "json",
			url: 'https://api.twitch.tv/kraken/streams/' + userName,
			headers: {'Client-ID': '46mv0vv9e8m0tvs77vxb2fog4n7m2gz'},
			success: function(data) {
        		console.log(data);
				var stream = data.stream;
				//if a stream is online, return displayOnlineData function
			   	if (stream !== null) {displayOnlineData(userName, stream);} 
				else //if stream is offline, return getOfflineInfo function
				{getOfflineInfo(userName);}
			},
			 error: function(error) {
				  console.log(error);
				 //if there's an error like 404 or 422 return displayUnavailableData function
			  
			}
		});
	}

	function displayOnlineData(userName, stream) {  
	    var channel = stream.channel;
	    var displayName = stream.channel.display_name;
	    var logo = stream.channel.logo;
	    var game = stream.channel.game;
	    var url = stream.channel.url;
		
	    
	    $("#online").append("<li>" + "<img class='logo' src='" + logo + "'/>" + " <a href='" + url + "' target=_blank>" + displayName + "</a>" + " is watching " + game + "</li>"); 
	};

	function getOfflineInfo(userName){
		$.ajax({
			type: 'GET',
      		dataType: "json",
			url: 'https://api.twitch.tv/kraken/users/' + userName,
			headers: {'Client-ID': '46mv0vv9e8m0tvs77vxb2fog4n7m2gz'},
			success: function(data) {
        		console.log(data);
			   displayOfflineData(userName, data); 
			},
			error: function(error) {
				console.log(error);
				displayUnavailableData(userName, error);
			}
		});
	}

	
	function displayOfflineData(userName, data) {
		var logo = data.logo;
		var displayName = data.display_name;

		$("#offline").append("<li>" + "<img class='logo' src='" + logo + "'/>" + " <a href='https://www.twitch.tv/" + userName + "' target=_blank>" + userName + "</a>" + " is OFFLINE" + "</li>");
	};

	
	function displayUnavailableData(userName, data) {
		if (data.status === 404 || data.status === 422){
			var displayName = data.display_name;
			var status = data.status;

			$("#unavailable").append("<li>Oh no! " + userName + " does not have an account on Twitch.tv.</li>"); }
		else {
			$("#unavailable").append("<li>" + userName + " not found.</li>"); }
	};
	
// show and hide menu link data
	
	$("#all-user").click(function() {
		$("#online").show();
		$("#offline").show();
		$("#unavailable").show();
	});
	
	$("#online-user").click(function() {
		$("#online").show();
		$("#offline").hide();
		$("#unavailable").hide();
	});

	$("#offline-user").click(function() {
		$("#online").hide();
		$("#offline").show();
		$("#unavailable").hide();
	});
	
	$("#no-user").click(function() {
		$("#online").hide();
		$("#offline").hide();
		$("#unavailable").show();
	});
		
	
}); // FIN