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
	var login = $('#login').val();
	console.log('login', login);
	gitinfo.getUserInfo(login);
}

// v
function _getUserInfo (argument) {
	console.log('gitinfo.getUserInfo()::', gitinfo.getUserInfo());
}
	
function _getUserInfo_successHandler(result) {
	console.log('getUserInfo_successHandler::', result);		
	return result;
};

