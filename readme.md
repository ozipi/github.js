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

#### Organizations
* .gitinfo.getOrg(org, $.proxy(_getOrg_successHandler, this));		
* .gitinfo.getUserOrgs(login, $.proxy(_getUserOrgs_successHandler, this));	
* .gitinfo.getOrgMembersList(org, $.proxy(_getOrgMembersList_successHandler, this));		
* .gitinfo.getOrgPublicMembersList(org, $.proxy(_getOrgPublicMembersList_successHandler, this));

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

* .getRepoCommit(login, repo, githubjsCommit, $.proxy(_getRepoCommit_successHandler, this));			
* .getRepoComments(login, repo, $.proxy(_getRepoComments_successHandler, this));		
* .getRepoCommitComments(login, repo, githubjsCommit, $.proxy(_getRepoCommitComments_successHandler, this));		
* .getRepoComment(login, repo, commentId, $.proxy(_getRepoComment_successHandler, this));		
* .compareRepoCommits(login, repo, compareBaseSha, compareEndSha, $.proxy(_compareRepoCommits_successHandler, this));

#### Repos - Downloads
* .getRepoDownloads(login, repo, $.proxy(_getRepoDownloads_successHandler, this));		
* .getRepoDownload(login, repo, downloadId, $.proxy(_getRepoDownload_successHandler, this));		

#### Repos - Forks	
* .getRepoForks(login, repo, $.proxy(_getRepoForks_successHandler, this));		

#### Repos - Watchers
* .getRepoWatchers(login, repo, $.proxy(_getRepoWatchers_successHandler, this));		
* .getReposWatchedByUser(login, repo, $.proxy(_getReposWatchedByUser_successHandler, this));		

#### Repos - Hooks
* .getRepoHooks(login, repo, $.proxy(_getRepoHooks_successHandler, this));		
* .getRepoHook(login, repo, hookId, $.proxy(_getRepoHook_successHandler, this));		
* .testRepoHook(login, repo, $.proxy(_testRepoHook_successHandler, this));
				

#### == RoadMap ==:
- Call queue
- Min Builds
- Missing Public Methods (Git Data, Issues, Orgs, Pull Requests)
- Auth methods
- Missing Private Methods
- Remove Jquery and servicelocator dependencies 
- Add tests (?)