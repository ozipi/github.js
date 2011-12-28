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
	gitinfo.getUserInfo(login, $.proxy(_getUserInfo_successHandler, this));
}

// v
function _getUserInfo (result) {
	console.log('gitinfo.getUserInfo()::', result);
}
	
function _getUserInfo_successHandler(result) {
	console.log('gitinfo::getUserInfo_successHandler::', result);		
	return result;
};

