var gitinfo = {};
var testcallbacks = [];
var info = {};
$(function(){
	//Add listener to the input
	$('#getInfo').bind('click', $.proxy(_getInfo_click, this));
	$('#login').keypress($.proxy(_onKeypress, this));	

	gitinfo = new Github('ozipi');
	
	_startTests();
	
});

function _onKeypress (event) {
  if ( event.which == 13 ) {
		_getInfo_click();
	}
}

function _getInfo_click (event) {
	var infoType = $('#infoType').val();
	var login = $('#login').val();
	
	console.log("_getInfo_click", infoType, login);
	
	switch(infoType){
		case "Users":
			gitinfo.getUserInfo(login, $.proxy(_getUserInfo_successHandler, this));		
			break;
		case "Repos":
			gitinfo.getUserRepos(login, $.proxy(_getUserRepos_successHandler, this));		
			break;			
	};
};

function _startTests() {
	var login = 'ozipi';	
	var gistId = '153045';
	var gistCommentId = '153045';	
	var org = 'hackinvaders';
	var repo = 'github.js'
	var githubjsCommit = '7176d2d27df32d2f195015acacc56e14aeb1e348';
	var compareEndSha = '3b1e3b97b97f47f69ef32dc15916fbf5fa0a16d7';
	var compareBaseSha = '9bde6deaa330c825c3462ee7405bc84c296309dd';	
	var commentId = '822633';
	var downloadId = '168855';
	var userId = '153045';
	var hookId = '';
	
	// ##################################################################################
	//  Gists
	// ##################################################################################		
	//gitinfo.getUserGists(login, $.proxy(_getUserGists_successHandler, this));		
	//gitinfo.getUserGist(login, gistId, $.proxy(_getUserGist_successHandler, this));		
	//gitinfo.getGistComments(login, gistId, $.proxy(_getGistComments_successHandler, this));		
	//gitinfo.getGistCommentId(login, gistId, gistCommentId, $.proxy(_getGistCommentsId_successHandler, this));		
	
	// ##################################################################################
	//  Users
	// ##################################################################################			
	//gitinfo.getUserInfo(login, $.proxy(_getUserInfo_successHandler, this));		
	//gitinfo.getUserMails(login, $.proxy(_getUserMails_successHandler, this));		 <- auth
	//gitinfo.getUserFollowers(login, $.proxy(_getUserFollowers_successHandler, this));		
	//gitinfo.getUserFollowing(login, $.proxy(_getUserFollowing_successHandler, this));					
	
	// ##################################################################################
	//  Repos
	// ##################################################################################	
	//gitinfo.getUserRepos(login, $.proxy(_getUserRepos_successHandler, this));			
	//gitinfo.getOrgRepos(org, $.proxy(_getOrgRepos_successHandler, this));	
	//gitinfo.getRepo(login, repo, $.proxy(_getRepo_successHandler, this));		
	//gitinfo.getRepoContributors(login, repo, $.proxy(_getRepoContributors_successHandler, this));			
	//gitinfo.getRepoLanguages(login, repo, $.proxy(_getRepoLanguages_successHandler, this));				
	//gitinfo.getRepoTeams(login, repo, $.proxy(_getRepoTeams_successHandler, this));				
	//gitinfo.getRepoTags(login, repo, $.proxy(_getRepoTags_successHandler, this));					
	//gitinfo.getRepoBranches(login, repo, $.proxy(_getRepoBranches_successHandler, this));						
	
	// ##################################################################################
	//  Repos - Collaborators
	// ##################################################################################	
	//gitinfo.getRepoCollaborators(login, repo, $.proxy(_getRepoCollaborators_successHandler, this));			
	// checkRepoCollaborator
	
	// ##################################################################################
	//  Repos - Commits
	// ##################################################################################	
	//gitinfo.getRepoCommits(login, repo, $.proxy(_getRepoCommits_successHandler, this));							
	//gitinfo.getRepoCommit(login, repo, githubjsCommit, $.proxy(_getRepoCommit_successHandler, this));			
	//gitinfo.getRepoComments(login, repo, $.proxy(_getRepoComments_successHandler, this));		
	//gitinfo.getRepoCommitComments(login, repo, githubjsCommit, $.proxy(_getRepoCommitComments_successHandler, this));		
	//gitinfo.getRepoComment(login, repo, commentId, $.proxy(_getRepoComment_successHandler, this));		
	//gitinfo.compareRepoCommits(login, repo, compareBaseSha, compareEndSha, $.proxy(_compareRepoCommits_successHandler, this));

	// ##################################################################################
	// Repos - Downloads
	// ##################################################################################
	//gitinfo.getRepoDownloads(login, repo, $.proxy(_getRepoDownloads_successHandler, this));		
	//gitinfo.getRepoDownload(login, repo, downloadId, $.proxy(_getRepoDownload_successHandler, this));		
	
	// ##################################################################################
	// Repos - Forks
	// ##################################################################################	
	//gitinfo.getRepoForks(login, repo, $.proxy(_getRepoForks_successHandler, this));		

	// ##################################################################################
	// Repos - Watchers
	// ##################################################################################	
	//gitinfo.getRepoWatchers(login, repo, $.proxy(_getRepoWatchers_successHandler, this));		
	//gitinfo.getReposWatchedByUser(login, repo, $.proxy(_getReposWatchedByUser_successHandler, this));		

	// ##################################################################################
	// Repos - Hooks
	// ##################################################################################	
	//gitinfo.getRepoHooks(login, repo, $.proxy(_getRepoHooks_successHandler, this));		
	//gitinfo.getRepoHook(login, repo, hookId, $.proxy(_getRepoHook_successHandler, this));		
	gitinfo.testRepoHook(login, repo, $.proxy(_testRepoHook_successHandler, this));	
	
	console.log('Tests:', info);
};
	
//Success Handlers
function _getUserGists_successHandler(result) {
	console.log('gitinfo::_getUserGists_successHandler::', result);		
	info.gists = result;
	return result;
};

function _getUserGist_successHandler(result) {
	console.log('gitinfo::_getUserGist_successHandler::', result);		
	info.gist = result;
	return result;
};

function _getGistComments_successHandler(result) {
	console.log('gitinfo::_getGistComments_successHandler::', result);		
	info.gistsComments = result;
	return result;
};

function _getGistCommentsId_successHandler(result) {
	console.log('gitinfo::_getGistCommentsId_successHandler::', result);		
	info.gistsCommentsId = result;
	return result;
};

function _getUserInfo_successHandler(result) {
	//console.log('gitinfo::getUserInfo_successHandler::', result);		
	info.users = result;
	return result;
};

function _getUserMails_successHandler(result) {
	//console.log('gitinfo::getUserInfo_successHandler::', result);		
	info.usersMail = result;
	return result;
};

function _getUserFollowers_successHandler(result) {
	//console.log('gitinfo::getUserInfo_successHandler::', result);		
	info.usersFollowers = result;
	return result;
};

function _getUserFollowing_successHandler(result) {
	//console.log('gitinfo::getUserInfo_successHandler::', result);		
	info.usersFollowing = result;
	return result;
};

function _getUserRepos_successHandler(result) {
	//console.log('gitinfo::getUserRepos_successHandler::', result);		
	info.repos = result;	
	return result;
};

function _getOrgRepos_successHandler(result) {
	//console.log('gitinfo::getUserRepos_successHandler::', result);		
	info.repos = result;	
	return result;
};

function _getRepo_successHandler(result){
	info.repo = result;	
	return result;
};

function _getRepoContributors_successHandler(result){
	info.repoContributors = result;	
	return result;
};

function _getRepoLanguages_successHandler(result){
	info.repoLanguages = result;	
	return result;
};

function _getRepoTeams_successHandler(result){
	info.repoTeams = result;	
	return result;
};

function _getRepoTags_successHandler(result){
	info.repoTags = result;	
	return result;
};

function _getRepoBranches_successHandler(result){
	info.repoBranches = result;	
	return result;
};

function _getRepoCollaborators_successHandler(result) {
	info.repoCollaborators = result;
	return result;
};

function _getRepoCommits_successHandler(result){
	info.repoCommits = result;	
	return result;
};

function _getRepoComments_successHandler(result) {
	console.log('gitinfo::_getRepoComments_successHandler::', result);		
	info.repoComments = result;
	return result;
};

function _getRepoCommit_successHandler(result) {
	console.log('gitinfo::_getRepoCommit_successHandler::', result);		
	info.repoCommit = result;
	return result;
};

function _getRepoCommitComments_successHandler(result) {
	console.log('gitinfo::_getRepoCommitComments_successHandler::', result);		
	info.repoCommitsComments = result;
	return result;
};

function _getRepoComment_successHandler(result) {
	console.log('gitinfo::_getRepoComment_successHandler::', result);		
	info.repoComment = result;
	return result;
};

function _compareRepoCommits_successHandler(result) {
	console.log('gitinfo::_compareRepoCommits_successHandler::', result);		
	info.compareCommits = result;
	return result;
};

function _getRepoDownloads_successHandler(result) {
	console.log('gitinfo::_getRepoDownloads_successHandler::', result);		
	info.repoDownloads = result;
	return result;
};

function _getRepoDownload_successHandler(result) {
	console.log('gitinfo::_getRepoDownload_successHandler::', result);		
	info.repoDownload = result;
	return result;
};

function _getRepoForks_successHandler(result) {
	console.log('gitinfo::_getRepoForks_successHandler::', result);		
	info.repoForks = result;
	return result;
};

function _getRepoWatchers_successHandler(result) {
	console.log('gitinfo::_getRepoWatchers_successHandler::', result);		
	info.repoWatchers = result;
	return result;
};

function _getReposWatchedByUser_successHandler(result) {
	console.log('gitinfo::_getReposWatchedByUser_successHandler::', result);		
	info.repoWatchedByUser = result;
	return result;
};

function _getRepoHooks_successHandler(result) {
	console.log('gitinfo::_getRepoHooks_successHandler::', result);		
	info.repoHooks = result;
	return result;
};

function _getRepoHook_successHandler(result) {
	console.log('gitinfo::_getRepoHook_successHandler::', result);		
	info.repoHook = result;
	return result;
};

function _testRepoHook_successHandler(result) {
	console.log('gitinfo::_testRepoHook_successHandler::', result);		
	info.repoHookTest = result;
	return result;
};