        document.onreadystatechange = function() {
            if (document.readyState !== "complete") {
				document.getElementsByClassName("dd01").style.visibility = "hidden";
                document.querySelector("body").style.visibility = "hidden";
				document.querySelector("#loader").style.visibility = "visible";
            } else {
                document.querySelector("#loader").style.display = "none";
                document.querySelector("body").style.visibility = "visible";
				document.getElementsByClassName("dd01").style.visibility = "visible";    
            }
        };
