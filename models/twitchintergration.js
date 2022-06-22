//i took a bit of data from online. no need to try and figure it out when someone else already has, right?

//get data from streamer theendercore
twitch api get users -q login=theendercore




/*
client id
l6ioq2jiq0ky6unflw8prefxv72osf

secret
kfmxqtxlrdn13v2ydyfj9kxhy2c0ty
*/


var json_file = "twitchstatus.json";
	$.getJSON(json_file, function(t) 
	{
		if (t["data"].length > 0 && t["data"][0].type == 'live')
		{
			console.log("Send whatever message plus stream link here.")
		}
	})
