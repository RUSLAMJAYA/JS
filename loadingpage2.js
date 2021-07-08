        document.onreadystatechange = function() {
            if (document.readyState !== "complete") {
                document.querySelector("#dvContainer").style.visibility = "hidden";
		document.querySelector("#preloading").style.visibility = "visible";
            } else {
                document.querySelector("#dvContainer").style.visibility = "visible";
		document.querySelector("#preloading").style.visibility = "hidden";
		}
        }; 
