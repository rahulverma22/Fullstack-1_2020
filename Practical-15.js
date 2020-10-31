document.querySelector(".dec-btn").setAttribute("disabled","disabled");

var valuec
document.querySelector(".inc-btn").addEventListener("click",function(){
    valuec=document.getElementById("number").value;
    valuec++;
    document.getElementById("number").value=valuec;
    if(valuec > 0){
        document.querySelector(".dec-btn").removeAttribute("disabled");
    }
});
document.querySelector(".dec-btn").addEventListener("click",function(){
    valuec=document.getElementById("number").value;
    valuec--;
    document.getElementById("number").value=valuec;
    
    if(valuec==0){
      document.querySelector(".dec-btn").setAttribute("disabled","disabled");
    }
});