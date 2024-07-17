a=[1,2,3]
stirng=""
console.log('hi')
function reverseArray(a) {
    // Write your code here
    a.reverse();
    a.forEach((ele)=>{ stirng =`${stirng} ${ele}`
        console.log(ele)
    })
    console.log(stirng.trim())
}

reverseArray(a)
console.log(stirng.trim())

let arr = [1, 2, 3, 4];
let string = "";
arr.reverse().forEach((item) => (string = `${string} ${item}`));
console.log(string.trim());
let addingvalue=""
let eachHourGlass=[]
arr=[[1, 1, 1, 0 ,0, 0],
[0, 1 ,0 ,0, 0, 0],
[1 ,1 ,1 ,0, 0, 0],
[0 ,9, 2, -4, -4, 0],
[0, 0, 0, -2, 0, 0],
[0, 0, -1, -2, -4, 0],
]
maxvalue=0
for(i=0;i<arr.length;i++){
    for(j=0;j<arr[i].length;j++){
        if(j > 0 && arr[i] !== undefined && arr[i][j] !== undefined && arr[i][j-1] !== undefined && arr[i][j+1] !== undefined &&
            arr[i+1] !== undefined && arr[i+1][j] !== undefined &&
            arr[i+2] !== undefined && arr[i+2][j-1] !== undefined && arr[i+2][j] !== undefined && arr[i+2][j+1] !== undefined){
            
                addingvalue =arr[i][j-1]+arr[i][j]+arr[i][j+1]+arr[i+1][j]+arr[i+2][j-1]+arr[i+2][j]+arr[i+2][j+1]
                if(isNaN(addingvalue)  || addingvalue == undefined){
                }
                else{
                    eachHourGlass.push(addingvalue)

                }

           
            }
        else{
        }
    }}
for(i =0;i<eachHourGlass.length;i++){
    if(maxvalue > eachHourGlass[i]){
    }
    else{
        maxvalue =eachHourGlass[i]
    }
}
console.log(maxvalue)
// console.log(Math.max(eachHourGlass))
// console.log(arr)
arr=[1,2,3,4,5]
d=2

function rotateLeft(d, arr) {
for (let i=0;i< d;i++){
    arr.push(arr.shift())
  }
  console.log(arr)
  return arr
  }
rotateLeft(4,arr)

StringList =['abcde','sdaklfj','sdaklfj','na','basdn','sdaklfj','asdjf','na','asdjf','na','basdn','sdaklfj','asdjf']
queryString = ['abcde','sdaklfj','asdjf','na','basdn']
let result=''
function sameStringCount(a,b){
    
    return result =a.map(s=>
    b.filter(r=> s === r ).length
)
}

sameStringCount(queryString,StringList)
// man=[[5,3],[1 ,2 ,100],[2, 5 ,100],[3, 4 ,100]]

// n=5

// let manno=[0,0,0,0,0]
// man.forEach(res=>{
//     console.log(res)
//     change(res)
// })
// function change(k){
    
//         n=k[0]-1
//         b=k[1]-1
//         c=k[2]
//         console.log(n,b,c)
//         for (i =n; i<=b;i++){
//         manno[i]=manno[i]+c
//         }
//     }
//     console.log(manno)
//     console.log(Math.max(...manno))
man=[[5,3],[1 ,2 ,100],[2, 5 ,100],[3, 4 ,100]]
nam=[[10, 3],
,[1 ,5, 3]
,[4 ,8, 7]
,[6 ,9, 1]]
// let manno=[0,0,0,0,0]
//      let maxresult= ''

//     function arrayManipulation(h) {
       
 
//     h.forEach(res=>{
//         console.log(res)
//         change(res)
//        maxresult =Math.max(...manno)
//        console.log(maxresult)    
//     })    
     
//     }
    
//     function change(k){
       
//         console.log(k.length)
//         if(k.length == 2){
//             n=a[0]
//             m=a[1]
//         }
//         else{
       
//         let a
//         let b
//         let c
//             a=k[0]-1
//             b=k[1]-1
//             c=k[2]
//             console.log(a,b,c)
//             for (let i =a; i<=b;i++){
//             manno[i]=manno[i]+c
           
//         }
//     }
//     console.log(manno)
// }

// arrayManipulation(nam)
mano=[[1 ,2 ,100],[2, 5 ,100],[3, 4 ,100]]
nam=[[10, 3],
,[1 ,5, 3]
,[4 ,8, 7]
,[6 ,9, 1]]
function arrayManipulation(n,queries) {
    let man =[]
let p=n
for(let j=0;j<p;j++){
    man[j]=0
    console.log(man)
    
}
     queries.forEach((s)=>{
        
            

           let a=s[0]-1
           let b=s[1]-1
            let k=s[2]
           
            for(let i=a;i<=b;i++){
                man[i]=man[i]+k
                console.log(man)
            }
        
    })
    console.log(man)
    console.log(Math.max(...man))

}
arrayManipulation(5,mano)


// function waterBottles(bottles,exchange){
//     let quotient = Math.floor(bottles/exchange)
//     let remainder = Math.floor(bottles%exchange)
//     let total = quotient + bottles
//     let sum = quotient + remainder
//     console.log(sum)
//     if(bottles % exchange == 0){
//         if(exchange == quotient){
//             console.log(bottles + quotient + Math.floor(exchange/quotient))
//             // return ( bottles + quotient + Math.floor(exchange/quotient))
//         }
//         else if(quotient < exchange){
//         console.log(bottles + quotient)
//         }
//         else if(quotient > exchange){
//             console.log(bottles + Math.floor(quotient/exchange)+ quotient)
//         }
// }
//     else if( bottles % exchange !== 0){
//         console.log(bottles + quotient)
//         if( sum < exchange){
//             let result = quotient + remainder
//             console.log(result)
//             console.log(Math.floor(result/exchange))
//            return (bottles + quotient + Math.floor(result/exchange))
//         }
//         else if(sum >= exchange){
//             valiation(quotient,remainder,exchange,bottles)
//             // let result = quotient + remainder
//             // let total = bottles + quotient
//             // console.log(total)
//         // console.log(total)
//         // valiation()
//         // for(i=sum;i >= exchange;i++){
//         //   let partQuotient = Math.floor(sum/exchange)
//         //   let partRemainder = Math.floor(sum%exchange)
//         //   let result = partQuotient + partRemainder
//         //   console.log(result)
//         // }
        
// }
// }
// }
// function valiation(q,r,ex,bot){
//     let result = q + r
//     console.log(result)
//     let total = bot + q
//     console.log(total)
//     for(i=0;result >= ex;i++){
//         if(result >= ex){
//             console.log(total)
//         let quot =Math.floor(result/ex)
//         console.log(Math.floor(result%ex))
//         result = quot + Math.floor(result%ex)
//         console.log(result)
//         total = total + quot
    
//     }
    
// }
// console.log(total)
// }
// waterBottles(bottles,exchange)
var numWaterBottles = function(numBottles, numExchange) {
    let quotient = Math.floor(numBottles/numExchange)
    let remainder = Math.floor(numBottles%numExchange)
    let total = quotient + numBottles
    let sum = quotient + remainder
    if(numBottles % numExchange == 0){
        if(numExchange == quotient){
       return ( numBottles + quotient + Math.floor(numExchange/quotient))
    }
    else if(quotient < numExchange){
        console.log(numBottles + quotient)
        return numBottles + quotient
    }
    else if(sum >= numExchange){
        let result = quotient + remainder
        let total = numBottles + quotient
        for(let i=0;result >= numExchange;i++){
            if(result >= numExchange){
            let quot = Math.floor(result/numExchange)
            let rem = Math.floor(result%numExchange)
            result = quot + rem
            total = total + quot
        }
    }
    console.log(total)
        console.log(numBottles + Math.floor(quotient/numExchange)+ quotient)
      return numBottles + Math.floor(quotient/numExchange)+ quotient
    }
}
    else if( numBottles % numExchange !== 0){
         if( sum < numExchange){
            let result = quotient + remainder
           return (numBottles + quotient + Math.floor(result/numExchange))
        }
        else if(sum >= numExchange){
            let result = quotient + remainder
    let total = numBottles + quotient
    for(let i=0;result >= numExchange;i++){
        if(result >= numExchange){
        let quot = Math.floor(result/numExchange)
        let rem = Math.floor(result%numExchange)
        result = quot + rem
        total = total + quot
    }
}
console.log(total)
            // valiation(quotient,remainder,numExchange,numBottles)
    }

        }
     
}
function valiation(q,r,ex,bot){
    let result = q + r
    let total = bot + q
    for(let i=0;result >= ex;i++){
        if(result >= ex){
        let quot = Math.floor(result/ex)
        let rem = Math.floor(result%ex)
        result = quot + rem
        total = total + quot
    }
}
console.log(total)
}
numWaterBottles(92,4)
nums=[2,5,5,11]
targets=10

function target(nums,targets){
    let indices =[]
    for (let i =0;i < nums.length;i++ ){
        for (let j =1;j < nums.length;j++ ){
            let add= nums[i] + nums[j]
           if( add == targets && indices == 0  && i!=j){
               indices.push(i,j)
               console.log(indices)
           }
          
          

        }
}
}
target(nums,targets)

numbe= "121"
let reversedstring=''
reversedstring= numbe.split('').reduce((accum,current)=>current + accum)
console.log(reversedstring)
// numbe.forEach(s=>{
    // const reversedString = numbe.reduce((s,i)=>{
    //     console.log(s,i)
    // })
    // console.log(reversedString)
    // reversed=''
// })
// for (i=0; i < numbe.length;i++){
//     console.log(numbe[i-1])
// }
// console.log(numbe.reverse())
// if(numbe === numbe.reverse()){
//     console.log(" true")
// }
// else{
//     console.log("false")
//     // return false
// }
s = "MCMXCIV"
let add =0 
p=  {I     :    1,
V      :     5,
X      :    10,
L      :    50,
C      : 100,
D      :   500,
M      :  1000 }
console.log(s.split(''))
let stored = s.split('')
console.log(stored)
for (i= 0; i< stored.length;i++){
    // for(j=1;j<stored.length;j++){
        if(stored[i] == 'I' || stored[i] == 'X' ||  stored[i] == 'C' ){
                    console.log(stored[i])
                 if(stored[i+1] == 'V' || stored[i+1] == 'X' || stored[i+1] == 'L' || stored[i+1] == 'C' || stored[i+1] =='D' || stored[i+1] == 'M'){
                    add= add + (p[stored[i+1]] -p[stored[i]] )
                     console.log(add)
                    //    add=  curr - acc
                    }
                    else{
                        add = add + p[stored[i]] 
                        // add += p[acc]
                        console.log(add)
                    }
                }
        else{
                    add = add + p[stored[i]] 
                    console.log(add)
                }
    }
// }

// .reduce((acc,curr)=>{
//     if(acc == 'I' || 'X' || 'C'){
//         console.log(acc)
//         console.log(curr)
//      if(curr === 'V' || 'X'){
//             console.log(curr)
//             console.log(add)
//            add=  curr - acc
//         }
//         else{
//             add += p[acc]
//             console.log(add)
//         }
//     }
//     else{
//         console.log(p[f])
//     }
//     // if(Object.keys(p).includes(f)){
//     //     console.log(p[f])
//     // }
// })