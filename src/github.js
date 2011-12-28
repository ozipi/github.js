function Github (login){
	// Class definition
	this.urlBase = 'https://api.github.com';
	this.login = login;

	// Info
	this.data = {};
	this.data.repos = {};	
	this.data.users = {};
	this.data.meta = {};	

	// Paths
	this.paths = {};	
	this.paths.publicUsers = 'users';
	this.paths.privateUsers = 'user';	
	this.paths.repos = 'repos';		
	this.paths.organization = 'orgs';			
	this.paths.contributors = 'contributors';
	this.paths.languages = 'languages';
	this.paths.teams = 'teams';	
	this.paths.branches = 'branches';		
	this.paths.commits = 'commits';			
	
	this.callback = null;
	
  // Public Info methods  

	// Users
	this.getUserInfo = function(user, callback, data){
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
		
		this.callback = callback;
		
		$.getService("github").getUserInfo(
			{user: user, info: this, data: data},
			$.proxy(this._getUserInfo_successHandler, this)
		);		
	};
	
	this.getUserRepos = function(user, callback, data){
		//Init
		if (user === undefined || user === ''){
			user = this.login;
		}
		
		if (data === undefined){
			data = {};			
		}
		
		/*if (this._checkUsersRepos(user) != null){
				//Already on cache
				return;
		}*/
		
		this.callback = callback;
		
		$.getService("github").getUserRepos(
			{user: user, info: this, data: data},
			$.proxy(this._getUserRepos_successHandler, this)
		);		
	};	
	
	// Success Handlers
	// Users	
	this._getUserInfo_successHandler = function(result){
		if (this._checkMeta(result.meta) != null){
			this.data.users[result.data.login] = $.extend(true, {}, result.data);
			console.log('this.users ->', this.data.users);		
			
			if (this.callback != null){
				this.callback(result.data);
				//this.callback = null;
			}
		}
		else{
			console.log(result.data.message);
		}
	};
	
	this._getUserRepos_successHandler = function(result){
		if (this._checkMeta(result.meta) != null){
			this.data.repos[result.data.login] = $.extend(true, {}, result.data);
			console.log('this.repos ->', this.data.repos);		
			
			if (this.callback != null){
				this.callback(result.data);
				//this.callback = null;
			}
		}
		else{
			console.log(result.data.message);
		}
	};	
	
	// Helpers
	this._checkMeta = function(meta){
		this.data.meta = meta;
		if (this._checkGithubStatus(this.data.meta) == null){
			//Needs Auth

			return null;
		}
		//console.log('ಠ_ಠ', meta['X-RateLimit-Remaining']);
		return "ಠ_ಠ";
	};
	
	this._checkGithubStatus = function(meta){
		console.log('meta:', meta);
		if (meta.status == 401 || meta.status == 404){
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