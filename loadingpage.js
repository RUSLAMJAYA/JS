        document.onreadystatechange = function() {
            if (document.readyState !== "complete") {
				document.querySelector(".dd01").style.height = "0px";
				document.querySelector("body").style.height = "100vh";
                document.querySelector("body").style.visibility = "hidden";
				document.querySelector("#loader").style.visibility = "visible";
            } else {
				setTimeout(function(){
                document.querySelector("#loader").style.display = "none";
				document.querySelector("body").style.height = "auto";
                document.querySelector("body").style.visibility = "visible";
				document.querySelector(".dd01").style.visibility = "auto";
				}, 9000);
            }
        };
