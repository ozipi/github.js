function Github (login){
	//Class definition
	this.urlBase = 'https://api.github.com';
	this.login = login;

	//Info
	this.data = {};
	this.data.users = {};
	this.data.meta = {};	

	//Paths
	this.paths = {};	
	this.paths.publicUsers = '/users/';
	this.paths.privateUsers = '/user';	
	
	
  // Public Info methods  
	this.getUserInfo = function(user, data){
		//Init
		if (user === undefined || user === ''){
			user = this.login;
		}
		
		if (data === undefined){
			data = {};			
		}
		
		if (this._checkUsersInfo(user) != null){
				//Already on cache
				return;
		}
		
		$.getService("github").getUserInfo(
			{user: user, info: this, data: data},
			$.proxy(this._getUserInfo_successHandler, this)
		);
		
	};
	
	//Success Handlers
	this._getUserInfo_successHandler = function(result){
		//refactor
		if (this._checkMeta(result.meta) != null){
			this.data.users[result.data.login] = $.extend(true, {}, result.data);
			console.log('this.users ->', this.data.users, result);		
		}
		else{
			console.log(result.data.message);
		}
	};
	
	//Helpers
	this._checkMeta = function(meta){
		this.data.meta = meta;
		if (this._checkGithubStatus(this.data.meta) == null){
			//Needs Auth

			return null;
		}
		console.log('ಠ_ಠ', meta['X-RateLimit-Remaining']);
		return "ಠ_ಠ";
	};
	
	this._checkGithubStatus = function(meta){
		console.log('meta:', meta);
		if (meta.status == 401){
			return null;
		}
		return "ಠ_ಠ";
	};
	
	this._checkUsersInfo = function(user) {
		var userData = null;
		for (var i in this.data.users){
			if (i == user){
				userData = this.data.users[i];
			}
		};
		return userData;
	}
	
}