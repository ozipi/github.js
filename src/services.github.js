$.addService("github", {


	// ##################################################################################
	//  Gists
	// http://developer.github.com/v3/gists/
	// ##################################################################################
	getUserGists: function(data, success, error){
		//End url format https://api.github.com/users/ozipi/gists
		var url = data.info.urlBase  + '/' + data.info.paths.publicUsers + '/' + data.user + '/' + data.info.paths.gists;
		//console.log('github::', data.info, data, url);				
		this.sendRequest(url, data.data, success);
	},
	
	getUserGist: function(data, success, error){
		//End url format https://api.github.com/gists/153045
		var url = data.info.urlBase + '/' + data.info.paths.gists + '/' + data.gistId;
		//console.log('getUserGist::', data.info, data, url);				
		this.sendRequest(url, data.data, success);
	},	
	
	getGistComments: function(data, success, error){
		//End url format https://api.github.com/gists/153045/comments
		var url = data.info.urlBase + '/' + data.info.paths.gists + '/' + data.gistId + '/' + data.info.paths.comments;
		console.log('getGistComments::', data.info, data, url);				
		this.sendRequest(url, data.data, success);
	},
	
	getGistCommentId: function(data, success, error){
		//End url format https://api.github.com/gists/153045/comments/
		var url = data.info.urlBase  + '/' + data.info.paths.publicUsers + '/' + data.user + '/' + data.info.paths.gists + '/' + data.gistId + '/' + data.info.paths.comments + '/' + data.commentId;
		//console.log('github::', data.info, data, url);				
		this.sendRequest(url, data.data, success);
	},	
	
	// ##################################################################################
	//  Git Data
	// http://developer.github.com/v3/pulls/
	// ##################################################################################

	// ##################################################################################
	//  Issues
	// http://developer.github.com/v3/pulls/
	// ##################################################################################

	// ##################################################################################
	//  Orgs
	// http://developer.github.com/v3/pulls/
	// ##################################################################################
	getOrg: function(data, success, error){
		//End url format https://api.github.com/
		var url = data.info.urlBase  + '/' + data.info.paths.organization + '/' + data.org;
		console.log('github::', data.info, data, url);				
		this.sendRequest(url, data.data, success);
	},
	
	getUserOrgs: function(data, success, error){
		//End url format https://api.github.com/users/ozipi/orgs
		var url = data.info.urlBase  + '/' + data.info.paths.publicUsers + '/' + data.user + '/' + data.info.paths.organizations;
		console.log('github::', data.info, data, url);				
		this.sendRequest(url, data.data, success);
	},	
	
	getOrgMembersList: function(data, success, error){
		//End url format http://developer.github.com/v3/orgs/members/
		var url = data.info.urlBase  + '/' + data.info.paths.organizations + '/' + data.org + '/' + data.info.paths.members;
		console.log('github::', data.info, data, url);				
		this.sendRequest(url, data.data, success);
	},
	
	getOrgPublicMembersList: function(data, success, error){
		//End url format http://developer.github.com/v3/orgs/members/
		var url = data.info.urlBase  + '/' + data.info.paths.organizations + '/' + data.org + '/' + data.info.paths.publicMembers;
		console.log('github::', data.info, data, url);				
		this.sendRequest(url, data.data, success);
	},	
	
	// ##################################################################################
	//  Pull Requests
	// http://developer.github.com/v3/pulls/
	// ##################################################################################
	
	// ##################################################################################
	//  Repos
	// http://developer.github.com/v3/repos/
	// ##################################################################################
	getUserRepos: function(data, success, error){
		//End url format https://api.github.com/users/ozipi/repos
		var url = data.info.urlBase  + '/' + data.info.paths.publicUsers + '/' + data.user + '/' + data.info.paths.repos;
		//console.log('github::', data.info, data, url);				
		this.sendRequest(url, data.data, success);
	},
	
	getUserPrivateRepos: function(data, success, error){
		//End url format https://api.github.com/user/repos
		var url = data.info.urlBase + '/' + data.info.paths.privateUsers + '/' + data.info.paths.repos;
		//console.log('github::', data.info, data, url);				
		this.sendRequest(url, data.data, success);
	},
	
	getOrgRepos: function(data, success, error){
		//End url format https://api.github.com/orgs/hackinvaders/repos
		var url = data.info.urlBase + '/' + data.info.paths.organization + '/' + data.user + '/' + data.info.paths.repos;
		//console.log('getOrgRepos::', data.info, data, url);				
		this.sendRequest(url, data.data, success);
	},	
	
	getRepo: function(data, success, error){
		//End url format https://api.github.com/repos/ozipi/github.js
		var url = data.info.urlBase + '/' + data.info.paths.repos + '/' + data.user + '/' + data.repo;
		//console.log('getRepo::', data.info, data, url);				
		this.sendRequest(url, data.data, success);
	},
	
	getRepoContributors: function(data, success, error){
		//End url format https://api.github.com/repos/ozipi/github.js/contributors 
		var url = data.info.urlBase + '/' + data.info.paths.repos + '/' + data.user + '/' + data.repo + '/' + data.info.paths.contributors;
		//console.log('github::', data.info, data, url);				
		this.sendRequest(url, data.data, success);
	},	
	
	getRepoLanguages: function(data, success, error){
		//End url format https://api.github.com/repos/ozipi/github.js/languages 
		var url = data.info.urlBase + '/' + data.info.paths.repos + '/' + data.user + '/' + data.repo + '/' + data.info.paths.languages;
		//console.log('github::', data.info, data, url);				
		this.sendRequest(url, data.data, success);
	},	
	
	getRepoTeams: function(data, success, error){
		//End url format https://api.github.com/repos/ozipi/github.js/teams 
		var url = data.info.urlBase + '/' + data.info.paths.repos + '/' + data.user + '/' + data.repo + '/' + data.info.paths.teams;
		//console.log('github::', data.info, data, url);				
		this.sendRequest(url, data.data, success);
	},	
	
	getRepoTags: function(data, success, error){
		//End url format https://api.github.com/repos/ozipi/github.js/tags
		var url = data.info.urlBase + '/' + data.info.paths.repos + '/' + data.user + '/' + data.repo + '/' + data.info.paths.tags;
		console.log('getRepoTags::', data.info, data, url);				
		this.sendRequest(url, data.data, success);
	},	
	
	getRepoBranches: function(data, success, error){
		//End url format https://api.github.com/repos/ozipi/github.js/branches
		var url = data.info.urlBase + '/' + data.info.paths.repos + '/' + data.user + '/' + data.repo + '/' + data.info.paths.branches;
		//console.log('github::', data.info, data, url);				
		this.sendRequest(url, data.data, success);
	},	
	
	// ##################################################################################
	// Repos - Collaborators
	// http://developer.github.com/v3/repos/collaborators/
	// ##################################################################################	
	getRepoCollaborators: function(data, success, error){
		//End url format https://api.github.com/repos/ozipi/github.js/contributors 
		var url = data.info.urlBase + '/' + data.info.paths.repos + '/' + data.user + '/' + data.repo + '/' + data.info.paths.collaborators;
		//console.log('github::', data.info, data, url);				
		this.sendRequest(url, data.data, success);
	},
	
	checkRepoCollaborator: function(data, success, error){
		//End url format https://api.github.com/repos/ozipi/github.js/contributors 
		var url = data.info.urlBase + '/' + data.info.paths.repos + '/' + data.user + '/' + data.repo + '/' + data.info.paths.collaborators + '/'  + data.collaborator;
		//console.log('github::', data.info, data, url);				
		this.sendRequest(url, data.data, success);
	},	
	
	// ##################################################################################
	// Repos - Commits
	// http://developer.github.com/v3/repos/commits/
	// ##################################################################################	
	getRepoCommits: function(data, success, error){
		//End url format https://api.github.com/repos/ozipi/github.js/commits
		var url = data.info.urlBase + '/' + data.info.paths.repos + '/' + data.user + '/' + data.repo + '/' + data.info.paths.commits;
		//console.log('github::', data.info, data, url);				
		this.sendRequest(url, data.data, success);
	},	
	
	getRepoCommit: function(data, success, error){
		//End url format https://api.github.com/repos/ozipi/github.js/commits/bba61daf28419a1762f6218fea3f96279e399371
		var url = data.info.urlBase + '/' + data.info.paths.repos + '/' + data.user + '/' + data.repo + '/' + data.info.paths.commits + '/' + data.commit;
		console.log('github::', data.info, data, url);				
		this.sendRequest(url, data.data, success);
	},	
	
	getRepoComments: function(data, success, error){
		//End url format https://api.github.com/repos/ozipi/github.js/comments
		var url = data.info.urlBase + '/' + data.info.paths.repos + '/' + data.user + '/' + data.repo + '/' + data.info.paths.comments;
		//console.log('github::', data.info, data, url);				
		this.sendRequest(url, data.data, success);
	},	
	
	getRepoCommitComments: function(data, success, error){
		//End url format https://api.github.com/repos/ozipi/github.js/commits/bba61daf28419a1762f6218fea3f96279e399371/comments
		var url = data.info.urlBase + '/' + data.info.paths.repos + '/' + data.user + '/' + data.repo + '/' + data.info.paths.commits + '/' + data.commit + '/' + data.info.paths.comments;
		//console.log('github::', data.info, data, url);				
		this.sendRequest(url, data.data, success);
	},	
	
	getRepoComment: function(data, success, error){
		//End url format https://api.github.com/repos/ozipi/github.js/comments/822633
		var url = data.info.urlBase + '/' + data.info.paths.repos + '/' + data.user + '/' + data.repo + '/' + data.info.paths.comments + '/' + data.commentId;
		console.log('github::', data.info, data, url);				
		this.sendRequest(url, data.data, success);
	},	

	compareRepoCommits: function(data, success, error){
		//End url format httpshttps://api.github.com/repos/ozipi/github.js/compare/bba61daf28419a1762f6218fea3f96279e399371...0f8a5590fa8d877b9193c383c4be7289e02eeb3f
		var url = data.info.urlBase + '/' + data.info.paths.repos + '/' + data.user + '/' + data.repo + '/' + data.info.paths.compare + '/' + data.compareBaseSha + '...' + data.compareEndSha;
		console.log('github::', data.info, data, url);				
		this.sendRequest(url, data.data, success);
	},		
	
	// ##################################################################################
	// Repos - Downloads
	// http://developer.github.com/v3/repos/downloads
	// ##################################################################################
	getRepoDownloads: function(data, success, error){
		//End url format https://api.github.com/repos/ozipi/github.js/downloads
		var url = data.info.urlBase + '/' + data.info.paths.repos + '/' + data.user + '/' + data.repo + '/' + data.info.paths.downloads;
		console.log('github::', data.info, data, url);				
		this.sendRequest(url, data.data, success);
	},	
	
	getRepoDownload: function(data, success, error){
		//End url format https://api.github.com/repos/ozipi/github.js/downloads/168855
		var url = data.info.urlBase + '/' + data.info.paths.repos + '/' + data.user + '/' + data.repo + '/' + data.info.paths.downloads + '/' + data.downloadId;
		//console.log('github::', data.info, data, url);				
		this.sendRequest(url, data.data, success);
	},
	
	// ##################################################################################
	// Repos - Forks
	// http://developer.github.com/v3/repos/forks
	// ##################################################################################	
	getRepoForks: function(data, success, error){
		//End url format https://api.github.com/repos/ozipi/github.js/forks
		var url = data.info.urlBase + '/' + data.info.paths.repos + '/' + data.user + '/' + data.repo + '/' + data.info.paths.forks;
		console.log('github::', data.info, data, url);				
		this.sendRequest(url, data.data, success);
	},

	// ##################################################################################
	// Repos - Keys        implement later when authentication is ready
	// http://developer.github.com/v3/repos/keys
	// ##################################################################################

	// ##################################################################################
	// Repos - Watching
	// http://developer.github.com/v3/repos/watching
	// ##################################################################################
	getRepoWatchers: function(data, success, error){
		//End url format https://api.github.com/repos/ozipi/github.js/watchers
		var url = data.info.urlBase + '/' + data.info.paths.repos + '/' + data.user + '/' + data.repo + '/' + data.info.paths.watchers;
		//console.log('github::', data.info, data, url);				
		this.sendRequest(url, data.data, success);
	},	
	
	getReposWatchedByUser: function(data, success, error){
		//End url format https://api.github.com/users/ozipi/watched
		var url = data.info.urlBase + '/' + data.info.paths.publicUsers + '/' + data.user + '/' + data.info.paths.watched;
		//console.log('github::', data.info, data, url);				
		this.sendRequest(url, data.data, success);
	},	
	
	// ##################################################################################
	// Repos - Hooks
	// http://developer.github.com/v3/repos/hooks/
	// ##################################################################################
	getRepoHooks: function(data, success, error){
		//End url format https://api.github.com/repos/ozipi/github.js/watchers
		var url = data.info.urlBase + '/' + data.info.paths.repos + '/' + data.user + '/' + data.repo + '/' + data.info.paths.hooks;
		console.log('github::', data.info, data, url);				
		this.sendRequest(url, data.data, success);
	},	
	
	getRepoHook: function(data, success, error){
		//End url format https://api.github.com/repos/ozipi/github.js/watchers
		var url = data.info.urlBase + '/' + data.info.paths.repos + '/' + data.user + '/' + data.repo + '/' + data.info.paths.hooks + '/' + data.hookId;
		//console.log('github::', data.info, data, url);				
		this.sendRequest(url, data.data, success);
	},
	
	testRepoHook: function(data, success, error){
		//End url format https://api.github.com/repos/ozipi/github.js/watchers
		var url = data.info.urlBase + '/' + data.info.paths.repos + '/' + data.user + '/' + data.repo + '/' + data.info.paths.hooks + '/' + data.hookId  + '/' + data.test;
		//console.log('github::', data.info, data, url);				
		this.sendRequest(url, data.data, success);
	},
	

	// ##################################################################################
	//  Users
	// http://developer.github.com/v3/users/
	// ##################################################################################
	getUserInfo: function(data, success, error)
	{
		//End url format https://api.github.com/users/ozipi 
		var url = data.info.urlBase + '/' + data.info.paths.publicUsers + '/' + data.user;
		//console.log('github::', data.info, data);				
		this.sendRequest(url, data.data, success);
	},
	
	getUserPrivateInfo: function(data, success, error)
	{
		//End url format https://api.github.com/user
		var url = data.info.urlBase + '/' + data.info.paths.privateUsers;
		//console.log('github::', data.info, data, url);				
		this.sendRequest(url, data.data, success);
	},	
	
	// ##################################################################################
	//  Users - Emails               Pending Auth req
	// http://developer.github.com/v3/users/emails
	// ##################################################################################
	getUserMails: function(data, success, error)
	{
		//End url format https://api.github.com/ozipi/emails
		var url = data.info.urlBase + '/' + data.user + '/' + data.info.paths.emails;
		console.log('github::', data.info, data, url);				
		this.sendRequest(url, data.data, success);
	},	

	// ##################################################################################
	//  Users - Followers
	// http://developer.github.com/v3/followers/
	// ##################################################################################		
	getUserFollowers: function(data, success, error)
	{
		//End url format https://api.github.com/users/ozipi/followers
		var url = data.info.urlBase + '/' + data.info.paths.publicUsers + '/' + data.user + '/' + data.info.paths.followers;
		//console.log('github::', data.info, data, url);				
		this.sendRequest(url, data.data, success);
	},	
	
	getUserFollowing: function(data, success, error)
	{
		//End url format https://api.github.com/users/ozipi/followers
		var url = data.info.urlBase + '/' + data.info.paths.publicUsers + '/' + data.user + '/' + data.info.paths.following;
		console.log('github::', data.info, data, url);				
		this.sendRequest(url, data.data, success);
	},	
	
	// ##################################################################################
	//  Users - Keys								Pending Auth req
	// http://developer.github.com/v3/Keys/
	// ##################################################################################	
	

	// ##################################################################################
	// General request template
	// ##################################################################################
	sendRequest: function(url, data, success)
	{
		//console.log('sendRequest::', url, data, success);	
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