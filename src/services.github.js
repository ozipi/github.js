$.addService("github", {

	// Users 
	// http://developer.github.com/v3/users/
	getUserInfo: function(data, success, error)
	{
		//End url format https://api.github.com/users/ozipi ***
		var url = data.info.urlBase  + '/' + data.info.paths.publicUsers + '/' + data.user;
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
	
	//Repos
	getUserRepos: function(data, success, error){
		//End url format https://api.github.com/users/ozipi/repos ***
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
		//End url format https://api.github.com/orgs/hackinvaders/repos ***
		var url = data.info.urlBase + '/' + data.info.paths.organization + '/' + data.user + '/' + data.info.paths.repos;
		//console.log('getOrgRepos::', data.info, data, url);				
		this.sendRequest(url, data.data, success);
	},	
	
	getRepo: function(data, success, error){
		//End url format https://api.github.com/repos/ozipi/github.js ***
		var url = data.info.urlBase + '/' + data.info.paths.repos + '/' + data.user + '/' + data.repo;
		//console.log('getRepo::', data.info, data, url);				
		this.sendRequest(url, data.data, success);
	},
	
	getRepoContributors: function(data, success, error){
		//End url format https://api.github.com/repos/ozipi/github.js/contributors ***
		var url = data.info.urlBase + '/' + data.info.paths.repos + '/' + data.user + '/' + data.repo + '/' + data.info.paths.contributors;
		//console.log('github::', data.info, data, url);				
		this.sendRequest(url, data.data, success);
	},	
	
	getRepoLanguages: function(data, success, error){
		//End url format https://api.github.com/repos/ozipi/github.js/languages ***
		var url = data.info.urlBase + '/' + data.info.paths.repos + '/' + data.user + '/' + data.repo + '/' + data.info.paths.languages;
		//console.log('github::', data.info, data, url);				
		this.sendRequest(url, data.data, success);
	},	
	
	getRepoTeams: function(data, success, error){
		//End url format https://api.github.com/repos/ozipi/github.js/teams ***
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
	
	getRepoCommits: function(data, success, error){
		//End url format https://api.github.com/repos/ozipi/github.js/commits
		var url = data.info.urlBase + '/' + data.info.paths.repos + '/' + data.user + '/' + data.repo + '/' + data.info.paths.commits;
		//console.log('github::', data.info, data, url);				
		this.sendRequest(url, data.data, success);
	},	
	
	// General request template
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