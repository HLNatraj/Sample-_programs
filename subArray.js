// Find the Sub arrays of the given array
let arr=[1,2,3,5,6,7];
let n=arr.length;
for(let l=0;l<n;l++){
    
    for(let r=l;r<n;r++){

        for(i=l;i<=r;i++){
            console.log(arr[i]);
           
        }
        console.log(" ");
    }
}