//client ID    

//i took this data from online. no need to try and figure it out when someone else already has, right?

//get data from streamer theendercore
twitch api get users -q login=theendercore


var json_file = "twitchstatus.json";
	$.getJSON(json_file, function(t) 
	{
		if (t["data"].length > 0 && t["data"][0].type == 'live')
		{
			console.log("Send whatever message plus stream link here.")
		}
	})
