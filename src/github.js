function Github (login){
	// Class definition
	this.urlBase = 'https://api.github.com';
	this.login = login;

	// Info
	this.data = {};
	this.data.meta = {};		
	this.data.users = {};
	this.data.usersGists = {};
	this.data.usersGist = {};	
	this.data.usersGistComments = {};		
	this.data.usersFollowers = {};			
	this.data.usersFollowing = {};	
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
	this.paths.emails = 'emails';		
	this.paths.followers = 'followers';
	this.paths.following = 'following';
	this.paths.repos = 'repos';		
	this.paths.organization = 'orgs';			
	this.paths.contributors = 'contributors';
	this.paths.languages = 'languages';
	this.paths.teams = 'teams';	
	this.paths.tags = 'tags';		
	this.paths.branches = 'branches';		
	this.paths.commits = 'commits';			
	this.paths.collaborators = 'collaborators';	
	this.paths.comments = 'comments';					
	this.paths.compare = 'compare';						
	this.paths.forks = 'forks';							
	this.paths.watchers = 'watchers';
	this.paths.watched = 'watched';	
	this.paths.hooks = 'hooks';		
	this.paths.gists = 'gists';			
	
	this.callback = null;
	
  
	// ##################################################################################
	//
	// Public Info methods  
	// 
	// ##################################################################################

	// ##################################################################################
	//  Gists
	// http://developer.github.com/v3/repos/
	// ##################################################################################
	this.getUserGists = function(user, callback, data){
		(user === undefined || user === '')? user = this.login : null;
		(data === undefined) ? data = {} : null;
		//(this._checkUsersInfo(user, 'users') != null) ? return; : null;
		if(this._checkCacheInfo(user, 'userGists') != null){
			return;
		}
		this.callback = callback;
		
		$.getService("github").getUserGists(
			{user: user, info: this, data: data},
			$.proxy(this._getUserGists_successHandler, this)
		);		
	};	
	
	this.getUserGist = function(user, gistId, callback, data){
		(user === undefined || user === '')? user = this.login : null;
		(data === undefined) ? data = {} : null;
		//(this._checkUsersInfo(user, 'users') != null) ? return; : null;
		if(this._checkCacheInfo(user, 'userGist') != null){
			return;
		}
		this.callback = callback;
		
		$.getService("github").getUserGist(
			{user: user, gistId: gistId, info: this, data: data},
			$.proxy(this._getUserGist_successHandler, this)
		);		
	};	
	
	this.getGistComments = function(user, gistId, callback, data){
		(user === undefined || user === '')? user = this.login : null;
		(data === undefined) ? data = {} : null;
		//(this._checkUsersInfo(user, 'users') != null) ? return; : null;
		if(this._checkCacheInfo(user, 'gistComments') != null){
			return;
		}
		this.callback = callback;
		
		$.getService("github").getGistComments(
			{user: user, gistId: gistId, info: this, data: data},
			$.proxy(this._getGistComments_successHandler, this)
		);		
	};	
	
	this.getGistCommentId = function(user, gistId, commentId, callback, data){
		(user === undefined || user === '')? user = this.login : null;
		(data === undefined) ? data = {} : null;
		//(this._checkUsersInfo(user, 'users') != null) ? return; : null;
		if(this._checkCacheInfo(user, 'gistComments') != null){
			return;
		}
		this.callback = callback;
		
		$.getService("github").getGistCommentId(
			{user: user, gistId: gistId, commentId: commentId, info: this, data: data},
			$.proxy(this._getGistCommentId_successHandler, this)
		);		
	};
	
	// ##################################################################################
	//  Users
	// http://developer.github.com/v3/users/
	// ##################################################################################
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
	
	this.getUserMails = function(user, callback, data){
		(user === undefined || user === '')? user = this.login : null;
		(data === undefined) ? data = {} : null;
		//(this._checkUsersInfo(user, 'users') != null) ? return; : null;
		if(this._checkCacheInfo(user, 'usersMails') != null){
			return;
		}
		this.callback = callback;
		
		$.getService("github").getUserMails(
			{user: user, info: this, data: data},
			$.proxy(this._getUserMails_successHandler, this)
		);		
	};	
	
	this.getUserFollowers = function(user, callback, data){
		(user === undefined || user === '')? user = this.login : null;
		(data === undefined) ? data = {} : null;
		//(this._checkUsersInfo(user, 'users') != null) ? return; : null;
		if(this._checkCacheInfo(user, 'usersFollowers') != null){
			return;
		}
		this.callback = callback;
		
		$.getService("github").getUserFollowers(
			{user: user, info: this, data: data},
			$.proxy(this._getUserFollowers_successHandler, this)
		);		
	};		
	
	this.getUserFollowing = function(user, callback, data){
		(user === undefined || user === '')? user = this.login : null;
		(data === undefined) ? data = {} : null;
		//(this._checkUsersInfo(user, 'users') != null) ? return; : null;
		if(this._checkCacheInfo(user, 'usersFollowing') != null){
			return;
		}
		this.callback = callback;
		
		$.getService("github").getUserFollowing(
			{user: user, info: this, data: data},
			$.proxy(this._getUserFollowing_successHandler, this)
		);		
	};	
	
	// ##################################################################################
	//  Repos
	// http://developer.github.com/v3/repos/
	// ##################################################################################
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
	
	// ##################################################################################	
	//
	// Success Handlers
	//
	// ##################################################################################	
	// ##################################################################################
	//  Gists
	// ##################################################################################	
	this._getUserGists_successHandler = function(result){
		if (this._checkMeta(result.meta) != null){
			this.data.usersGists[result.data.login] = $.extend(true, {}, result.data);
			this._getCallback(result.data);
		}
		else{
			console.log(result.data.message);
		}
	};
	
	this._getUserGist_successHandler = function(result){
		if (this._checkMeta(result.meta) != null){
			this.data.usersGist[result.data.login] = $.extend(true, {}, result.data);
			this._getCallback(result.data);
		}
		else{
			console.log(result.data.message);
		}
	};	
	
	this._getGistComments_successHandler = function(result){
		if (this._checkMeta(result.meta) != null){
			this.data.usersGistComments[result.data.login] = $.extend(true, {}, result.data);
			this._getCallback(result.data);
		}
		else{
			console.log(result.data.message);
		}
	};	
	
	this._getGistCommentId_successHandler = function(result){
		if (this._checkMeta(result.meta) != null){
			this.data.usersGistSingleComment[result.data.login] = $.extend(true, {}, result.data);
			this._getCallback(result.data);
		}
		else{
			console.log(result.data.message);
		}
	};	
	
	// ##################################################################################
	//  Users
	// ##################################################################################	
	this._getUserInfo_successHandler = function(result){
		if (this._checkMeta(result.meta) != null){
			this.data.users[result.data.login] = $.extend(true, {}, result.data);
			this._getCallback(result.data);
		}
		else{
			console.log(result.data.message);
		}
	};
	
	this._getUserMails_successHandler = function(result){
		if (this._checkMeta(result.meta) != null){
			this.data.usersMails[result.data.login] = $.extend(true, {}, result.data);
			this._getCallback(result.data);
		}
		else{
			console.log(result.data.message);
		}
	};	
	
	this._getUserFollowers_successHandler = function(result){
		if (this._checkMeta(result.meta) != null){
			this.data.usersFollowers[result.data.login] = $.extend(true, {}, result.data);
			this._getCallback(result.data);
		}
		else{
			console.log(result.data.message);
		}
	};	
	
	this._getUserFollowing_successHandler = function(result){
		if (this._checkMeta(result.meta) != null){
			this.data.usersFollowing[result.data.login] = $.extend(true, {}, result.data);
			this._getCallback(result.data);
		}
		else{
			console.log(result.data.message);
		}
	};	
	
	// ##################################################################################
	//  Repos
	// ##################################################################################	
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