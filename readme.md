## Github v3 Api Javascript library 
###[(http://developer.github.com)](http://developer.github.com/v3/)

####Dependencies:
* JQuery
* jquery.servicelocator.js

####Library Files:
* services.github.js
* github.js

####Available Methods:
* gitinfo.getUserRepos(login, handler);			
* gitinfo.getOrgRepos(org, handler);	
* gitinfo.getRepo(login, repo, handler);		
* gitinfo.getRepoContributors(login, repo, handler);			
* gitinfo.getRepoLanguages(login, repo, handler);				
* gitinfo.getRepoTeams(login, repo, handler);				
* gitinfo.getRepoTags(login, repo, handler);					
* gitinfo.getRepoBranches(login, repo, handler);						
* gitinfo.getRepoCommits(login, repo, handler);							


####Example usage:
	$(function(){
		//Sample vars
		var login = 'ozipi';
		var org = 'hackinvaders';
		var repo = 'github.js'

		//Create the instance
		gitinfo = new Github('ozipi');

		gitinfo.getUserInfo(login, $.proxy(_getUserInfo_successHandler, this));		
		});

	function _getUserInfo_successHandler(result) {
		info.users = result;
	};
	

####RoadMap:
- Call queue
- Min Builds
- Missing Public Methods (Gists, Git Data, Issues, Orgs, Pull Requests, Repos, Users)
- Auth methods
- Missing Private Methods
- Remove Jquery and servicelocator dependencies 
- Add tests (?)