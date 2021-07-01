        document.onreadystatechange = function() {
            if (document.readyState !== "complete") {
                document.querySelector("body").style.visibility = "hidden!important";
		document.getElementById("topheader").style.display = "none";
                document.querySelector("#loader").style.visibility = "visible";
            } else {
                document.querySelector("#loader").style.display = "none";
                document.querySelector("body").style.visibility = "visible!important";
		document.getElementById("topheader").style.display = "auto";				  
            }
        };
