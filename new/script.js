var noOfTests = parseInt(prompt("Enter Number"));

while(noOfTests >0){
    let arr = new Array();
    let length = parseInt(prompt());
    for(var i=0;i<length;i++){
       arr.push(parseInt(prompt()));
    }
    arr.sort((a,b)=>a-b);
    var min = parseInt(arr[0]+arr[length-1]);
    var max = parseInt(arr[0]*arr[length-1]);
    

    document.write(min +" "+ max);
    noOfTests--;
}
