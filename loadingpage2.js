        document.onreadystatechange = function() {
            if (document.readyState !== "complete") {
                document.querySelector("#body").style.visibility = "hidden";
		document.querySelector("#preloading").style.visibility = "visible";
  		document.querySelector("#preloading").style.position  = "fixed";
            } else {
                document.querySelector("#preloading").style.display = "none";
                document.querySelector("#body").style.visibility = "visible";
  		document.querySelector("#body").style.height = "auto";
    		document.querySelector("#preloading").style.position  = "relative";
		}
        }; 
