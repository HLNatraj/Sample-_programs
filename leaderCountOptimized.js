// Given an array find the count of leaders 
// An Element is called Leader if that element is greater than all the elements on right Side

let arr=[1,2,4,9,7,6]
let n=arr.length;
var max=n-1;
var count=1;
for(i=n-2;i>=0;i--){
    if(arr[i]>max){
        max=arr[i];
        count++;
    }
}
console.log("Count ="+count);