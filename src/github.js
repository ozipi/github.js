function Github (login){
	//Class definition
	this.urlBase = 'https://api.github.com';
	this.login = login;

	//Info
	this.users = {};

	//Paths
	this.paths = {};	
	this.paths.publicUsers = '/users/';
	this.paths.privateUsers = '/user/';	
	
	this.getUserInfo = function(user, data){
		if (user === undefined || user === ''){
			user = this.login;
		}
		
		if (data === undefined){
			data = {};			
		}
		
		$.getService("users").getUserInfo(
			{user: user, info: this, data: data},
			$.proxy(this._getUserInfo_successHandler, this)
		);
		
	};
	
	this.getPaths = new function(){
		return this.paths;
	};
	
	this._getUserInfo_successHandler = function(result){
		console.log('getUserInfo_successHandler::', result);		
		this.users[name]
		return result;
	};
	
}