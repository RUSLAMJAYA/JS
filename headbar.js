    function showhide1()
    {
         document.getElementById("sh003").style.display = "none";
         document.getElementById("sh002").style.display = "none";  
         var div = document.getElementById("sh001");  
         if (div.style.display !== "none") 
         {  
             div.style.display = "none";  
         }  
         else
         {  
             div.style.display = "block";  
         }  
    }
    function showhide2()
    { 
         document.getElementById("sh001").style.display = "none";
         document.getElementById("sh003").style.display = "none"; 
         var div = document.getElementById("sh002");  
         if (div.style.display !== "none") 
         {  
             div.style.display = "none";  
         }  
         else
         {  
             div.style.display = "block";  
         }  
    } 
    function showhide3()
    {  
         document.getElementById("sh001").style.display = "none";
         document.getElementById("sh002").style.display = "none";
         var div = document.getElementById("sh003");  
         if (div.style.display !== "none") 
         {  
             div.style.display = "none";  
         }  
         else
         {  
             div.style.display = "block";  
         }  
    }

    function showdafk1()
    {  
         document.getElementById("disp1").style.display= "inline-block";
    }  

    function showdafk2()
    {  
         document.getElementById("disp2").style.display= "inline-block";
    }
    function hidedafk1()
    {  
         document.getElementById("disp1").style.display= "none"; 
    }
     function hidedafk2()
    {  
         document.getElementById("disp2").style.display= "none"; 
    }
