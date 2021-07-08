        document.onreadystatechange = function() {
            if (document.readyState !== "complete") {
                document.querySelector("#body").style.visibility = "hidden";
		document.querySelector("#preloading").style.visibility = "visible";
  		document.querySelector("#preloading").style.position  = "fixed";
            } else {
		setTimeout(function(){
                document.querySelector("#preloading").style.display = "none";
                document.querySelector("#body").style.visibility = "visible";
  		document.querySelector("#body").style.height = "auto";
  		document.querySelector("#body").style.backgroundColor  = "white";
    		document.querySelector("#preloading").style.position  = "relative";
		}, 9000);
            }
        }; 
