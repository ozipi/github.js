$.addService("github", {
	
	getUserInfo: function(data, success, error)
	{
		console.log('github::', data.info, data);		

		//End url format https://api.github.com/users/ozipi
		var url = data.info.urlBase + data.info.paths.publicUsers + data.user;
		this.sendRequest(url, data.data, success);
	},
	
	getUserPrivateInfo: function(data, success, error)
	{
		//End url format https://api.github.com/user
		var url = data.info.urlBase + data.info.paths.privateUsers;
		console.log('github::', data.info, data, url);				
		this.sendRequest(url, data.data, success);
	},	
	
	//General request template
	sendRequest: function(url, data, success)
	{
		console.log('sendRequest::', url, data, success);	
		$.ajax( {
			type : 'GET',
			dataType: 'jsonp',
			async : true,
			url : url,
			data: data,
			success: success
		});
	}
	
});