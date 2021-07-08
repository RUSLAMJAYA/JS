        document.onreadystatechange = function() {
            if (document.readyState !== "complete") {
                document.querySelector("#dvContainer").style.visibility = "hidden";
		document.querySelector("#preloading").style.visibility = "visible";
  		document.querySelector("#preloading").style.position  = "fixed";
            } else {
                document.querySelector("#preloading").style.display = "none";
                document.querySelector("#dvContainer").style.visibility = "visible";
  		document.querySelector("#dvContainer").style.height = "auto";
    		document.querySelector("#preloading").style.position  = "relative";
		}
        }; 
