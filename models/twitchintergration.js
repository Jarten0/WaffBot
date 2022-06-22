//i took a bit of data from online. no need to try and figure it out when someone else already has, right?

let clinetId = "l6ioq2jiq0ky6unflw8prefxv72osf";
let clinetSecret = "kfmxqtxlrdn13v2ydyfj9kxhy2c0ty";

function getTwitchAuthorization() {
    let url = `https://id.twitch.tv/oauth2/token?client_id=${clinetId}&client_secret=${clinetSecret}&grant_type=client_credentials`;

    fetch(url, {
    method: "POST",
    })
    .then((res) => res.json())
    .then((data) => handleAuthorization(data));
}

function handleAuthorization(data) {
    let { access_token, expires_in, token_type } = data;
    document.write(`${token_type} ${access_token}`);
}
getTwitchAuthorization();



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
				if (live != True)
				{
				console.log("Send whatever message plus stream link here.")
				var live = bool True
				}
			else
			{

			}
			}
		})
