function RetrieveDirectoryFiles(dir, fileextension, callback)
{
	/*var dir = "img/backgrounds/";
	var fileextension = ".jpg";*/
	$.ajax({
	    //This will retrieve the contents of the folder if the folder is configured as 'browsable'
	    url: dir,
	    success: function (data) {
			callback(fileextension, data)
	    },
	    error: function(XMLHttpRequest, textStatus, errorThrown) { 
	        alert("Status: " + textStatus); alert("Error: " + errorThrown); 
	    }    
	});
}