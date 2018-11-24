var element = document.getElementsByClassName("navbar");
var links = element[0].getElementsByClassName("link");

document.addEventListener("DOMContentLoaded", function() {
    var hash = this.location.hash;
    for(i=0; i< links.length; i++){
    	if(links[i].hash == hash)
    	{
    		active(links[i]);
    	}
    }
});

for (var i = 0; i < links.length; i++){
        links[i].addEventListener("click", function(){
        	active(this);
	});
}

var active = function(link){
	if (link.className != "link hire")
	{
		var current = document.getElementsByClassName("active");
        if(current.length != 0)
        {
		    current[0].className = current[0].className.replace("active", "link");
        }
        link.className = "active";
	}
}

var add = function(target){
     for(var i=0; i<links.length; i++)
     {
     	if(links[i].hash == target.hash)
    	{
    		active(links[i]);
    	}
	 }
}
