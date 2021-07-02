        document.onreadystatechange = function() {
            if (document.readyState !== "complete") {
				document.getElementsByClassName("topheader").style.height = "0px";
                document.querySelector("body").style.visibility = "hidden";
				document.querySelector("#loader").style.visibility = "visible";
            } else {
                document.querySelector("#loader").style.display = "none";
                document.querySelector("body").style.visibility = "visible";
				document.getElementsByClassName("topheader").style.height = "50px";    
            }
        };
