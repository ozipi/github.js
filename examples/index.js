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
	
	
	// ##################################################################################
	//  Gists
	// ##################################################################################		
	gitinfo.getUserGists(login, $.proxy(_getUserGists_successHandler, this));		
	//gitinfo.getUserGist(login, gistId, $.proxy(_getUserGist_successHandler, this));		
	//gitinfo.getGistComments(login, gistId, $.proxy(_getGistComments_successHandler, this));		
	//gitinfo.getGistCommentId(login, gistId, gistCommentId, $.proxy(_getGistCommentsId_successHandler, this));		
	
	// ##################################################################################
	//  Users
	// ##################################################################################			
	//gitinfo.getUserInfo(login, $.proxy(_getUserInfo_successHandler, this));		
	
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
	//gitinfo.getRepoCommits(login, repo, $.proxy(_getRepoCommits_successHandler, this));							
	
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

function _getRepoCommits_successHandler(result){
	info.repoCommits = result;	
	return result;
};


