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
	this.data.orgRepos = {};	
	this.data.orgs = {};	
	this.data.userOrgs = {};			
	this.data.members = {};
	this.data.repo = {};		
	this.data.repoContributors = {};		
	this.data.repoLanguages = {};			
	this.data.repoTags = {};				
	this.data.repoBranches = {};
	this.data.repoCollaborators = {};	
	this.data.repoCommits = {};		
	this.data.repoCommit = {};	
	this.data.repoComments = {};	
	this.data.repoCommitComments = {};		
	this.data.repoComment = {};			
	this.data.repoCompareCommits = {};				
	this.data.repoDownloads = {};			
	this.data.repoDownload = {};						
	this.data.repoForks = {};
	this.data.repoWatchers = {};
	this.data.reposWatchedByUser = {};	
	this.data.repoHooks = {};		
	this.data.repoHook = {};
	this.data.orgMembersList = {};
	this.data.orgPublicMembersList = {};
	
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
	this.paths.downloads = 'downloads';
	this.paths.organizations = 'orgs';	
	this.paths.members = 'members';		
	this.paths.publicMembers = 'public_members';			
	
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
	
	this.getOrg = function(org, callback, data){
		(data === undefined) ? data = {} : null;
		if(this._checkCacheInfo(org, 'orgs') != null){
			return;
		}
		this.callback = callback;
		this.lastIDCalled = org;	

		$.getService("github").getOrg(
			{org: org, info: this, data: data},
			$.proxy(this._getOrg_successHandler, this)
		);		
	};	
	
	this.getUserOrgs = function(user, callback, data){
		(user === undefined || user === '')? user = this.login : null;
		(data === undefined) ? data = {} : null;
		if(this._checkCacheInfo(user, 'userOrgs') != null){
			return;
		}
		this.callback = callback;
		this.lastIDCalled = user;	

		$.getService("github").getUserOrgs(
			{user: user, info: this, data: data},
			$.proxy(this._getUserOrgs_successHandler, this)
		);		
	};
	
	this.getOrgMembersList = function(org, callback, data){
		(data === undefined) ? data = {} : null;
		if(this._checkCacheInfo(org, 'orgMembersList') != null){
			return;
		}
		this.callback = callback;
		this.lastIDCalled = org;	

		$.getService("github").getOrgMembersList(
			{org: org, info: this, data: data},
			$.proxy(this._getOrgMembersList_successHandler, this)
		);		
	};	

	this.getOrgPublicMembersList = function(org, callback, data){
		(data === undefined) ? data = {} : null;
		if(this._checkCacheInfo(org, 'orgPublicMembersList') != null){
			return;
		}
		this.callback = callback;
		this.lastIDCalled = org;	

		$.getService("github").getOrgPublicMembersList(
			{org: org, info: this, data: data},
			$.proxy(this._getOrgPublicMembersList_successHandler, this)
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
	
	// ##################################################################################
	//  Repos - Collaborators
	// http://developer.github.com/v3/repos/collaborators/	
	// ##################################################################################	
	this.getRepoCollaborators = function(user, repo, callback, data){
		(user === undefined || user === '')? user = this.login : null;
		(data === undefined) ? data = {} : null;
		if(this._checkCacheInfo(user, 'repoCollaborators') != null){
			return;
		}
		this.callback = callback;
		this.lastIDCalled = repo;		

		$.getService("github").getRepoCollaborators(
			{user: user, repo: repo, info: this, data: data},
			$.proxy(this._getRepoCollaborators_successHandler, this)
		);		
	};
	
	// ##################################################################################
	//  Repos - Collaborators
	//	http://developer.github.com/v3/repos/commits/
	// ##################################################################################	
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
	
	this.getRepoCommit = function(user, repo, commit, callback, data){
		(user === undefined || user === '')? user = this.login : null;
		(data === undefined) ? data = {} : null;
		if(this._checkCacheInfo(user, 'repoCommit') != null){
			return;
		}
		this.callback = callback;
		this.lastIDCalled = commit;	

		$.getService("github").getRepoCommit(
			{user: user, repo: repo, commit: commit, info: this, data: data},
			$.proxy(this._getRepoCommit_successHandler, this)
		);		
	};	
	
	this.getRepoComments = function(user, repo, callback, data){
		(user === undefined || user === '')? user = this.login : null;
		(data === undefined) ? data = {} : null;
		if(this._checkCacheInfo(user, 'repoComments') != null){
			return;
		}
		this.callback = callback;
		this.lastIDCalled = repo;	

		$.getService("github").getRepoComments(
			{user: user, repo: repo, info: this, data: data},
			$.proxy(this._getRepoComments_successHandler, this)
		);		
	};	
	
	this.getRepoCommitComments = function(user, repo, commit, callback, data){
		(user === undefined || user === '')? user = this.login : null;
		(data === undefined) ? data = {} : null;
		if(this._checkCacheInfo(user, 'repoCommitComments') != null){
			return;
		}
		this.callback = callback;
		this.lastIDCalled = commit;	

		$.getService("github").getRepoCommitComments(
			{user: user, repo: repo, commit: commit, info: this, data: data},
			$.proxy(this._getRepoCommitComments_successHandler, this)
		);		
	};	
	
	this.getRepoComment = function(user, repo, commentId, callback, data){
		(user === undefined || user === '')? user = this.login : null;
		(data === undefined) ? data = {} : null;
		if(this._checkCacheInfo(user, 'repoComment') != null){
			return;
		}
		this.callback = callback;
		this.lastIDCalled = commentId;	

		$.getService("github").getRepoComment(
			{user: user, repo: repo, commentId: commentId, info: this, data: data},
			$.proxy(this._getRepoComment_successHandler, this)
		);		
	};	
	
	this.compareRepoCommits = function(user, repo, compareBaseSha, compareEndSha, callback, data){
		(user === undefined || user === '')? user = this.login : null;
		(data === undefined) ? data = {} : null;
		if(this._checkCacheInfo(user, 'repoCompareCommits') != null){
			return;
		}
		this.callback = callback;
		this.lastIDCalled = compareBaseSha + '...' + compareEndSha;	

		$.getService("github").compareRepoCommits(
			{user: user, repo: repo, compareBaseSha: compareBaseSha, compareEndSha: compareEndSha, info: this, data: data},
			$.proxy(this._compareRepoCommits_successHandler, this)
		);		
	};	
	
	// ##################################################################################
	//  Repos - Downloads
	//	http://developer.github.com/v3/repos/downloads/	
	// ##################################################################################	
	this.getRepoDownloads = function(user, repo, callback, data){
		(user === undefined || user === '')? user = this.login : null;
		(data === undefined) ? data = {} : null;
		if(this._checkCacheInfo(user, 'repoDownloads') != null){
			return;
		}
		this.callback = callback;
		this.lastIDCalled = repo;	

		$.getService("github").getRepoDownloads(
			{user: user, repo: repo, info: this, data: data},
			$.proxy(this._getRepoDownloads_successHandler, this)
		);		
	};

	this.getRepoDownload = function(user, repo, downloadId, callback, data){
		(user === undefined || user === '')? user = this.login : null;
		(data === undefined) ? data = {} : null;
		if(this._checkCacheInfo(user, 'repoDownload') != null){
			return;
		}
		this.callback = callback;
		this.lastIDCalled = repo;	

		$.getService("github").getRepoDownload(
			{user: user, repo: repo, downloadId: downloadId, info: this, data: data},
			$.proxy(this._getRepoDownload_successHandler, this)
		);		
	};
	
	// ##################################################################################
	//  Repos - Forks
	//	http://developer.github.com/v3/repos/forks/
	// ##################################################################################		
	this.getRepoForks = function(user, repo, callback, data){
		(user === undefined || user === '')? user = this.login : null;
		(data === undefined) ? data = {} : null;
		if(this._checkCacheInfo(user, 'repoForks') != null){
			return;
		}
		this.callback = callback;
		this.lastIDCalled = repo;	

		$.getService("github").getRepoForks(
			{user: user, repo: repo, info: this, data: data},
			$.proxy(this._getRepoForks_successHandler, this)
		);		
	};		

	// ##################################################################################
	//  Repos - Watchers
	//	http://developer.github.com/v3/repos/watchers/
	// ##################################################################################	
	this.getRepoWatchers = function(user, repo, callback, data){
		(user === undefined || user === '')? user = this.login : null;
		(data === undefined) ? data = {} : null;
		if(this._checkCacheInfo(user, 'repoWatchers') != null){
			return;
		}
		this.callback = callback;
		this.lastIDCalled = repo;	

		$.getService("github").getRepoWatchers(
			{user: user, repo: repo, info: this, data: data},
			$.proxy(this._getRepoWatchers_successHandler, this)
		);		
	};	
	
	this.getReposWatchedByUser = function(user, repo, callback, data){
		(user === undefined || user === '')? user = this.login : null;
		(data === undefined) ? data = {} : null;
		if(this._checkCacheInfo(user, 'reposWatchedByUser') != null){
			return;
		}
		this.callback = callback;
		this.lastIDCalled = repo;	

		$.getService("github").getReposWatchedByUser(
			{user: user, repo: repo, info: this, data: data},
			$.proxy(this._getReposWatchedByUser_successHandler, this)
		);		
	};	

	// ##################################################################################
	//  Repos - Hooks
	//	http://developer.github.com/v3/repos/hooks/
	// ##################################################################################	
	this.getRepoHooks = function(user, repo, callback, data){
		(user === undefined || user === '')? user = this.login : null;
		(data === undefined) ? data = {} : null;
		if(this._checkCacheInfo(user, 'repoHooks') != null){
			return;
		}
		this.callback = callback;
		this.lastIDCalled = repo;	

		$.getService("github").getRepoHooks(
			{user: user, repo: repo, info: this, data: data},
			$.proxy(this._getRepoHooks_successHandler, this)
		);		
	};	
	
	this.getRepoHook = function(user, repo, hookId, callback, data){
		(user === undefined || user === '')? user = this.login : null;
		(data === undefined) ? data = {} : null;
		if(this._checkCacheInfo(user, 'repoHook') != null){
			return;
		}
		this.callback = callback;
		this.lastIDCalled = hookId;	

		$.getService("github").getRepoHook(
			{user: user, repo: repo, hookId: hookId, info: this, data: data},
			$.proxy(this._getRepoHook_successHandler, this)
		);		
	};	
	
	this.testRepoHook = function(user, repo, callback, data){
		(user === undefined || user === '')? user = this.login : null;
		(data === undefined) ? data = {} : null;

		this.callback = callback;

		$.getService("github").testRepoHook(
			{user: user, repo: repo, info: this, data: data},
			$.proxy(this._testRepoHook_successHandler, this)
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
			this.data.orgRepos[this.lastIDCalled] = $.extend(true, {}, result.data);
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
	
	this._getRepoCollaborators_successHandler = function(result){
		if (this._checkMeta(result.meta) != null){
			console.log('_getRepoCollaborators_successHandler::', result)
			this.data.repoCollaborators[this.lastIDCalled] = $.extend(true, {}, result.data);
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
	
	this._getRepoCommit_successHandler = function(result){
		if (this._checkMeta(result.meta) != null){
			this.data.repoCommit[this.lastIDCalled] = $.extend(true, {}, result.data);
			this._getCallback(result.data);
		}
		else{
			console.log(result.data.message);
		}
	};	
	
	this._getRepoComments_successHandler = function(result){
		if (this._checkMeta(result.meta) != null){
			this.data.repoComments[this.lastIDCalled] = $.extend(true, {}, result.data);
			this._getCallback(result.data);
		}
		else{
			console.log(result.data.message);
		}
	};
	
	this._getRepoCommitComments_successHandler = function(result){
		if (this._checkMeta(result.meta) != null){
			this.data.repoCommitComments[this.lastIDCalled] = $.extend(true, {}, result.data);
			this._getCallback(result.data);
		}
		else{
			console.log(result.data.message);
		}
	};	
	
	this._getRepoComment_successHandler = function(result){
		if (this._checkMeta(result.meta) != null){
			this.data.repoComment[this.lastIDCalled] = $.extend(true, {}, result.data);
			this._getCallback(result.data);
		}
		else{
			console.log(result.data.message);
		}
	};	
	
	this._compareRepoCommits_successHandler = function(result){
		if (this._checkMeta(result.meta) != null){
			this.data.repoCompareCommits[this.lastIDCalled] = $.extend(true, {}, result.data);
			this._getCallback(result.data);
		}
		else{
			console.log(result.data.message);
		}
	};	
	
	this._getRepoDownloads_successHandler = function(result){
		if (this._checkMeta(result.meta) != null){
			this.data.repoDownloads[this.lastIDCalled] = $.extend(true, {}, result.data);
			this._getCallback(result.data);
		}
		else{
			console.log(result.data.message);
		}
	};	
	
	this._getRepoDownload_successHandler = function(result){
		if (this._checkMeta(result.meta) != null){
			this.data.repoDownload[this.lastIDCalled] = $.extend(true, {}, result.data);
			this._getCallback(result.data);
		}
		else{
			console.log(result.data.message);
		}
	};
	
	this._getRepoForks_successHandler = function(result){
		if (this._checkMeta(result.meta) != null){
			this.data.repoForks[this.lastIDCalled] = $.extend(true, {}, result.data);
			this._getCallback(result.data);
		}
		else{
			console.log(result.data.message);
		}
	};
	
	this._getRepoWatchers_successHandler = function(result){
		if (this._checkMeta(result.meta) != null){
			this.data.repoWatchers[this.lastIDCalled] = $.extend(true, {}, result.data);
			this._getCallback(result.data);
		}
		else{
			console.log(result.data.message);
		}
	};	
	
	this._getReposWatchedByUser_successHandler = function(result){
		if (this._checkMeta(result.meta) != null){
			this.data.reposWatchedByUser[this.lastIDCalled] = $.extend(true, {}, result.data);
			this._getCallback(result.data);
		}
		else{
			console.log(result.data.message);
		}
	};	
	
	this._getRepoHooks_successHandler = function(result){
		if (this._checkMeta(result.meta) != null){
			this.data.repoHooks[this.lastIDCalled] = $.extend(true, {}, result.data);
			this._getCallback(result.data);
		}
		else{
			console.log(result.data.message);
		}
	};	
	
	this._getRepoHook_successHandler = function(result){
		if (this._checkMeta(result.meta) != null){
			this.data.repoHook[this.lastIDCalled] = $.extend(true, {}, result.data);
			this._getCallback(result.data);
		}
		else{
			console.log(result.data.message);
		}
	};	
	
	this._testRepoHook_successHandler = function(result){
		if (this._checkMeta(result.meta) != null){
			this._getCallback(result.data);
		}
		else{
			console.log(result.data.message);
		}
	};	
	
	
	this._getOrg_successHandler = function(result){
		if (this._checkMeta(result.meta) != null){
			this.data.orgs[this.lastIDCalled] = $.extend(true, {}, result.data);
			this._getCallback(result.data);
		}
		else{
			console.log(result.data.message);
		}
	};	
	
	this._getUserOrgs_successHandler = function(result){
		if (this._checkMeta(result.meta) != null){
			this.data.userOrgs[this.lastIDCalled] = $.extend(true, {}, result.data);
			this._getCallback(result.data);
		}
		else{
			console.log(result.data.message);
		}
	};	

	this._getOrgMembersList_successHandler = function(result){
		if (this._checkMeta(result.meta) != null){
			this.data.orgMembersList[this.lastIDCalled] = $.extend(true, {}, result.data);
			this._getCallback(result.data);
		}
		else{
			console.log(result.data.message);
		}
	};	
	
	this._getOrgPublicMembersList_successHandler = function(result){
		if (this._checkMeta(result.meta) != null){
			this.data.orgPublicMembersList[this.lastIDCalled] = $.extend(true, {}, result.data);
			this._getCallback(result.data);
		}
		else{
			console.log(result.data.message);
		}
	};	
		
	////////////////
	// Helpers
	////////////////	
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