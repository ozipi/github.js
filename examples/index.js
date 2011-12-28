var gitinfo = {};
$(function(){
	//Add listener to the input
	$('#getInfo').bind('click', $.proxy(_getInfo_click, this));
	$('#login').keypress($.proxy(_onKeypress, this));	

	gitinfo = new Github('ozipi');
	
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

	
function _getUserInfo_successHandler(result) {
	console.log('gitinfo::getUserInfo_successHandler::', result);		
	return result;
};

function _getUserRepos_successHandler(result) {
	console.log('gitinfo::getUserRepos_successHandler::', result);		
	return result;
};
