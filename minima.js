//Minima of three numbers

function minima(array)
{
    
    let min =array[0]
    for(let i=1;i<array.length;i++)
        {
         if(min>array[i])
            {
             min=array[i]
             }
        }
        return min;
}
 let num = [1,2,8,-1];
 let findminima=minima(num);
 console.log(findminima);

 // input   let num = [1,2,8,-1];
 // Outout: -1