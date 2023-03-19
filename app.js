var lis = document.querySelectorAll("li");
//console.log(lis);
for(var i=0; i<lis.length; i++){
    if(i==1){
        lis[i].style.backgroundColor = "green";
    }
    if(i==2){
        lis[i].style.display = "none";
    }
}