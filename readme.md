## Github v3 Api Javascript library 
###[(http://developer.github.com)](http://developer.github.com/v3/)

####External Dependencies:
* JQuery
* jquery.servicelocator.js

####Library Files:
* services.github.js
* github.js

####Html Import:
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
	<script type="text/javascript" src="../plugins/jquery.servicelocator.js"></script>
	
	<script type="text/javascript" src="../src/services.github.js"></script>
	<script type="text/javascript" src="../src/github.js"></script>

####Javascript:
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

	
####Available Methods:
* .getUserRepos(login, handler);			
* .getOrgRepos(org, handler);	
* .getRepo(login, repo, handler);		
* .getRepoContributors(login, repo, handler);			
* .getRepoLanguages(login, repo, handler);				
* .getRepoTeams(login, repo, handler);				
* .getRepoTags(login, repo, handler);					
* .getRepoBranches(login, repo, handler);						
* .getRepoCommits(login, repo, handler);


####RoadMap:
- Call queue
- Min Builds
- Missing Public Methods (Gists, Git Data, Issues, Orgs, Pull Requests, Repos, Users)
- Auth methods
- Missing Private Methods
- Remove Jquery and servicelocator dependencies 
- Add tests (?)