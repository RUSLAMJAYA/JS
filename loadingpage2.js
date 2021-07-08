        document.onreadystatechange = function() {
            if (document.readyState !== "complete") {
                document.querySelector("#body").style.visibility = "hidden";
		document.querySelector("#loader").style.visibility = "visible";
  		document.querySelector("#loader").style.position  = "fixed";
            } else {
		setTimeout(function(){
                document.querySelector("#loader").style.display = "none";
                document.querySelector("#body").style.visibility = "visible";
  		document.querySelector("#body").style.height = "auto";
  		document.querySelector("#body").style.backgroundColor  = "white";
    		document.querySelector("#loader").style.position  = "relative";
		}, 9000);
            }
        }; 
