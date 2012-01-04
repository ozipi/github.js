## Github v3 Api Javascript library 
###[(http://developer.github.com)](http://developer.github.com/v3/)

###External Dependencies:
* JQuery
* jquery.servicelocator.js

###Library Files:
* services.github.js
* github.js

###Html Import:
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
	<script type="text/javascript" src="../plugins/jquery.servicelocator.js"></script>
	
	<script type="text/javascript" src="../src/services.github.js"></script>
	<script type="text/javascript" src="../src/github.js"></script>

###Javascript:
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

	
### Available Methods:
#### Gists
* .getUserGists(login, $.proxy(_getUserGists_successHandler, this));		
* .getUserGist(login, gistId, $.proxy(_getUserGist_successHandler, this));		
* .getGistComments(login, gistId, $.proxy(_getGistComments_successHandler, this));		
* .getGistCommentId(login, gistId, gistCommentId, $.proxy(_getGistCommentsId_successHandler, this));		

#### Users	
* .getUserInfo(login, $.proxy(_getUserInfo_successHandler, this));		
* .getUserFollowers(login, $.proxy(_getUserFollowers_successHandler, this));		
* .getUserFollowing(login, $.proxy(_getUserFollowing_successHandler, this));					

#### Repos
* .getUserRepos(login, $.proxy(_getUserRepos_successHandler, this));			
* .getOrgRepos(org, $.proxy(_getOrgRepos_successHandler, this));	
* .getRepo(login, repo, $.proxy(_getRepo_successHandler, this));		
* .getRepoContributors(login, repo, $.proxy(_getRepoContributors_successHandler, this));			
* .getRepoLanguages(login, repo, $.proxy(_getRepoLanguages_successHandler, this));				
* .getRepoTeams(login, repo, $.proxy(_getRepoTeams_successHandler, this));				
* .getRepoTags(login, repo, $.proxy(_getRepoTags_successHandler, this));					
* .getRepoBranches(login, repo, $.proxy(_getRepoBranches_successHandler, this));						

#### Repos - Commits	
* .getRepoCommits(login, repo, $.proxy(_getRepoCommits_successHandler, this));							

#### == RoadMap ==:
- Call queue
- Min Builds
- Missing Public Methods (Gists, Git Data, Issues, Orgs, Pull Requests, Repos, Users)
- Auth methods
- Missing Private Methods
- Remove Jquery and servicelocator dependencies 
- Add tests (?)