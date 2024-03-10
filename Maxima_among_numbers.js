// Maxima among numbers 

/* let array =[1,8,5]
let max=array[0]
for(let i=1;i<array.length;i++)
{
    if(max<array[i])
    {
        max=array[i]
    }
    

}
console.log(max)*/


function maxima(num)
{
    
    let max =num[0]
    for(let i=1;i<num.length;i++)
        {
         if(max<num[i])
            {
             max=num[i]
             }
        }
        return max;
}
let num = [1,2,8];
 let findmaxima=maxima(num);
 console.log(findmaxima);

// Input: let num = [1,2,8];
//output 8
