        document.onreadystatechange = function() {
            if (document.readyState !== "complete") {
				document.querySelector("body").style.height = "80vh";
                document.querySelector("body").style.visibility = "hidden";
				document.querySelector("#loader").style.visibility = "visible";
            } else {
				setTimeout(function(){
                document.querySelector("#loader").style.display = "none";
				document.querySelector("body").style.height = "auto";
                document.querySelector("body").style.visibility = "visible";
				}, 9000);
            }
        };
