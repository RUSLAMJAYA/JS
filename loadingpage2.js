        document.onreadystatechange = function() {
            if (document.readyState !== "complete") {
				document.querySelector("#navigate2").style.top = "-70px";
                document.querySelector("body").style.visibility = "hidden";
				document.querySelector(".design-blogger").style.visibility = "hidden";
				document.querySelector("#loader").style.visibility = "visible";
            } else {
				setTimeout(function(){
                document.querySelector("#loader").style.display = "none";
				document.querySelector("#navigate2").style.top = "0px";
				document.querySelector(".design-blogger").style.visibility = "visible";
                document.querySelector("body").style.visibility = "visible";
				}, 9000);
            }
        };