// https://www.google.com/search?param1=3&param2=2&param3=4&param4=7

// 5

// param1 param2 param3 param4 param5

// 8 2 4 5 6


// let s ="https://www.google.com/search?param1=3&param2=2&param3=7&param4=5";
// let arr = [8,2,4,5,6];
// const check = (s,arr) => {
//     var arr2 = [];
//     s = s.split("?");
//     s= s[1].split("&");
//     for(var i=0;i<s.length;i++){
//         arr2[i]=s[i].substring(7);     
//     }
//     for(var i=0;i<arr2.length;i++){
//         if(arr[i]<arr2[i]){
//             return false;
//         }
        
//     }
//     return true;
// }
// console.log(check(s,arr));








// let url= "https://hackerearth.com/problemset/all/?page=4,difficulty=100";
// var N=2;
// let params = ["page", "difficulty"]
// let val = [5, 2]


// let url2 = url.split("?");
// let url1 = url2[0];
// url2= url2[1];

// let pageString = url2.split(",");
// let arr1 = [];
// let arr2 = [];
// var count =0;

// for(var i=0;i<pageString.length;i++){
//     let cur = pageString[i];
//     arr1.push (parseInt(cur.substring(cur.indexOf("=")+1,cur.length)));
//     arr2.push(cur.substring(0,cur.indexOf("=")));   
// }
// for(var i=0;i<arr1.length;i++){
//     if(val[i]<=arr1[i]) count++;
// }
// console.log(url1);
// console.log(count)


// for(var i=arr1.length-1;i>=0;i--){
//     console.log(arr2[i],arr1[i]);
// }
// if(count==arr1.length) {console.log(200);}
// else {console.log(404)}






// Coding questions are, 
// let input = {1,4,2,1,1,4,4,2};

// Output should be {1,1,1} sum = 3
// {2,2} sum = 4
// {4,4,4} sum = 12
// And total sum = 19

// This is what we have to print and also learn how to take inputs from users. 

// 2) s = "00002600.0001400.00003323.0/24"

// Output should be 

// IP: 2600.1400.3323.0
// Mask: 24







