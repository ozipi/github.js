$.addService("users", {
	
	getUserInfo: function(data, success, error)
	{
		console.log('github::', data.info, data);		
		//End url format https://api.github.com/users/ozipi
		var url = data.info.urlBase + data.info.paths.publicUsers + data.user;
		this.sendRequest(url, data.data, success);
	},
	
	
	//General request template
	sendRequest: function(url, data, success)
	{
		//$.getJSON(url, data, success);
		console.log('sendRequest::', url, data, success);	
		$.ajax( {
			type : 'GET',
			dataType: 'jsonp',
			async : true,
			url : url,
			data: data,
			success: success
		});
	},
	
 	_getSingleUser_successHandler: function(result) {
		console.log('2_getSingleUser_successHandler::', result);		
	},
	
	fee: function(response) {
		console.log('foo2:::')
	  var meta = response.meta;
	  var data = response.data;
	  console.log(meta);
	  console.log(data);
	}
	
});