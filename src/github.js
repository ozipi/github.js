function Github (login){
	// Class definition
	this.urlBase = 'https://api.github.com';
	this.login = login;

	// Info
	this.data = {};
	this.data.meta = {};		
	this.data.users = {};
	this.data.repos = {};		
	this.data.org = {};	
	this.data.repo = {};		
	this.data.repoContributors = {};		
	this.data.repoLanguages = {};			
	this.data.repoTags = {};				
	this.data.repoBranches = {};
	this.data.repoCommits = {};	

	// Paths
	this.paths = {};	
	this.paths.publicUsers = 'users';
	this.paths.privateUsers = 'user';	
	this.paths.repos = 'repos';		
	this.paths.organization = 'orgs';			
	this.paths.contributors = 'contributors';
	this.paths.languages = 'languages';
	this.paths.teams = 'teams';	
	this.paths.tags = 'tags';		
	this.paths.branches = 'branches';		
	this.paths.commits = 'commits';			
	
	this.callback = null;
	
  // Public Info methods  

	// Users
	this.getUserInfo = function(user, callback, data){
		(user === undefined || user === '')? user = this.login : null;
		(data === undefined) ? data = {} : null;
		//(this._checkUsersInfo(user, 'users') != null) ? return; : null;
		if(this._checkCacheInfo(user, 'users') != null){
			return;
		}
		this.callback = callback;
		
		$.getService("github").getUserInfo(
			{user: user, info: this, data: data},
			$.proxy(this._getUserInfo_successHandler, this)
		);		
	};
	
	
	//Repos
	this.getUserRepos = function(user, callback, data){
		(user === undefined || user === '')? user = this.login : null;
		(data === undefined) ? data = {} : null;
		//(this._checkUsersInfo(user, 'repos') != null)? return : null;
		if(this._checkCacheInfo(user, 'repos') != null){
			return;
		}		
		this.callback = callback;
		this.lastIDCalled = user;
		
		$.getService("github").getUserRepos(
			{user: user, info: this, data: data},
			$.proxy(this._getUserRepos_successHandler, this)
		);		
	};	
	
	//Org
	this.getOrgRepos = function(user, callback, data){
		(user === undefined || user === '')? user = this.login : null;
		(data === undefined) ? data = {} : null;
		//(this._checkUsersInfo(user, 'repos') != null)? return : null;
		if(this._checkCacheInfo(user, 'org') != null){
			return;
		}		
		this.callback = callback;
		this.lastIDCalled = user;
		
		$.getService("github").getOrgRepos(
			{user: user, info: this, data: data},
			$.proxy(this._getOrgRepos_successHandler, this)
		);		
	};	
	
	//repo
	this.getRepo = function(user, repo, callback, data){
		(user === undefined || user === '')? user = this.login : null;
		(data === undefined) ? data = {} : null;
		//(this._checkUsersInfo(user, 'repos') != null)? return : null;
		if(this._checkCacheInfo(repo, 'repo') != null){
			return;
		}		
		this.callback = callback;
		this.lastIDCalled = repo;
		
		$.getService("github").getRepo(
			{user: user, repo: repo,info: this, data: data},
			$.proxy(this._getRepo_successHandler, this)
		);		
	};
	
	this.getRepoContributors = function(user, repo, callback, data){
		(user === undefined || user === '')? user = this.login : null;
		(data === undefined) ? data = {} : null;
		//(this._checkUsersInfo(user, 'repos') != null)? return : null;
		if(this._checkCacheInfo(repo, 'repoContributors') != null){
			return;
		}		
		this.callback = callback;
		this.lastIDCalled = repo;
		
		$.getService("github").getRepoContributors(
			{user: user, repo: repo,info: this, data: data},
			$.proxy(this._getRepoContributors_successHandler, this)
		);		
	};
	
	this.getRepoLanguages = function(user, repo, callback, data){
		(user === undefined || user === '')? user = this.login : null;
		(data === undefined) ? data = {} : null;
		//(this._checkUsersInfo(user, 'repos') != null)? return : null;
		if(this._checkCacheInfo(repo, 'repoLanguages') != null){
			return;
		}		
		this.callback = callback;
		this.lastIDCalled = repo;
		
		$.getService("github").getRepoLanguages(
			{user: user, repo: repo,info: this, data: data},
			$.proxy(this._getRepoContributors_successHandler, this)
		);		
	};	
	
	this.getRepoTeams = function(user, repo, callback, data){
		(user === undefined || user === '')? user = this.login : null;
		(data === undefined) ? data = {} : null;
		//(this._checkUsersInfo(user, 'repos') != null)? return : null;
		if(this._checkCacheInfo(repo, 'repoTeams') != null){
			return;
		}		
		this.callback = callback;
		this.lastIDCalled = repo;
		
		$.getService("github").getRepoTeams(
			{user: user, repo: repo,info: this, data: data},
			$.proxy(this._getRepoTeams_successHandler, this)
		);		
	};	
	
	this.getRepoTags = function(user, repo, callback, data){
		(user === undefined || user === '')? user = this.login : null;
		(data === undefined) ? data = {} : null;
		//(this._checkUsersInfo(user, 'repos') != null)? return : null;
		if(this._checkCacheInfo(repo, 'repoTags') != null){
			return;
		}		
		this.callback = callback;
		this.lastIDCalled = repo;
		
		$.getService("github").getRepoTags(
			{user: user, repo: repo,info: this, data: data},
			$.proxy(this._getRepoTags_successHandler, this)
		);		
	};	
	
	this.getRepoBranches = function(user, repo, callback, data){
		(user === undefined || user === '')? user = this.login : null;
		(data === undefined) ? data = {} : null;
		//(this._checkUsersInfo(user, 'repos') != null)? return : null;
		if(this._checkCacheInfo(repo, 'repoBranches') != null){
			return;
		}		
		this.callback = callback;
		this.lastIDCalled = repo;
		
		$.getService("github").getRepoBranches(
			{user: user, repo: repo,info: this, data: data},
			$.proxy(this._getRepoBranches_successHandler, this)
		);		
	};	
	
	this.getRepoCommits = function(user, repo, callback, data){
		(user === undefined || user === '')? user = this.login : null;
		(data === undefined) ? data = {} : null;
		//(this._checkUsersInfo(user, 'repos') != null)? return : null;
		if(this._checkCacheInfo(repo, 'repoCommits') != null){
			return;
		}		
		this.callback = callback;
		this.lastIDCalled = repo;
		
		$.getService("github").getRepoCommits(
			{user: user, repo: repo,info: this, data: data},
			$.proxy(this._getRepoCommits_successHandler, this)
		);		
	};	
	
	
	
	// Success Handlers
	// Users	
	this._getUserInfo_successHandler = function(result){
		if (this._checkMeta(result.meta) != null){
			this.data.users[result.data.login] = $.extend(true, {}, result.data);
			this._getCallback(result.data);
		}
		else{
			console.log(result.data.message);
		}
	};
	
	this._getUserRepos_successHandler = function(result){
		if (this._checkMeta(result.meta) != null){
			this.data.repos[this.lastIDCalled] = $.extend(true, {}, result.data);
			this._getCallback(result.data);
		}
		else{
			console.log(result.data.message);
		}
	};	
	
	this._getOrgRepos_successHandler = function(result){
		if (this._checkMeta(result.meta) != null){
			this.data.org[this.lastIDCalled] = $.extend(true, {}, result.data);
			this._getCallback(result.data);
		}
		else{
			console.log(result.data.message);
		}
	};
	
	this._getRepo_successHandler = function(result){
		if (this._checkMeta(result.meta) != null){
			this.data.repo[this.lastIDCalled] = $.extend(true, {}, result.data);
			this._getCallback(result.data);
		}
		else{
			console.log(result.data.message);
		}
	};	
	
	this._getRepoContributors_successHandler = function(result){
		if (this._checkMeta(result.meta) != null){
			this.data.repoContributors[this.lastIDCalled] = $.extend(true, {}, result.data);
			this._getCallback(result.data);
		}
		else{
			console.log(result.data.message);
		}
	};	

	this._getRepoLanguages_successHandler = function(result){
		if (this._checkMeta(result.meta) != null){
			this.data.repoLanguages[this.lastIDCalled] = $.extend(true, {}, result.data);
			this._getCallback(result.data);
		}
		else{
			console.log(result.data.message);
		}
	};	
	
	this._getRepoTeams_successHandler = function(result){
		if (this._checkMeta(result.meta) != null){
			this.data.repoTeams[this.lastIDCalled] = $.extend(true, {}, result.data);
			this._getCallback(result.data);
		}
		else{
			console.log(result.data.message);
		}
	};	
	
	this._getRepoTags_successHandler = function(result){
		if (this._checkMeta(result.meta) != null){
			this.data.repoTags[this.lastIDCalled] = $.extend(true, {}, result.data);
			this._getCallback(result.data);
		}
		else{
			console.log(result.data.message);
		}
	};	
	
	this._getRepoBranches_successHandler = function(result){
		if (this._checkMeta(result.meta) != null){
			this.data.repoBranches[this.lastIDCalled] = $.extend(true, {}, result.data);
			this._getCallback(result.data);
		}
		else{
			console.log(result.data.message);
		}
	};	
	
	this._getRepoCommits_successHandler = function(result){
		if (this._checkMeta(result.meta) != null){
			this.data.repoCommits[this.lastIDCalled] = $.extend(true, {}, result.data);
			this._getCallback(result.data);
		}
		else{
			console.log(result.data.message);
		}
	};	
	
	// Helpers
	this._getCallback = function (data) {
		if (this.callback != null){
			this.callback(data);
			this.callback = null;
		}
	}
	
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
	
	this._checkCacheInfo = function(user, dataType) {
		var userData = null;
		var data = this.data[dataType];
		console.log('_checkCacheInfo::', user, dataType);		
		for (var i in data){
			if (i == user){
				userData = data[i];
			}
		};
		return userData;
	}
	
}