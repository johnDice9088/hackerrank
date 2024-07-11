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

bottles=17
exchange=3
function waterBottles(bottles,exchange){
    let quotient = Math.floor(bottles/exchange)
    let remainder = Math.floor(bottles%exchange)
    if(bottles % exchange == 0){
        if(exchange == quotient){
            console.log(bottles + quotient + Math.floor(exchange/quotient))
            // return ( bottles + quotient + Math.floor(exchange/quotient))
        }
        else if(quotient < exchange){
        console.log(bottles + quotient)
        }
        else if(quotient > exchange){
            console.log(bottles + Math.floor(quotient/exchange)+ quotient)
        }
}
    else if( bottles % exchange !== 0){
        console.log(bottles + quotient)
         if( quotient < exchange){
            let result = quotient + remainder
            console.log(result)
            console.log(Math.floor(result/exchange))
           return (bottles + quotient + Math.floor(result/exchange))
        }
        else if(quotient > exchange){
            console.log(bottles + quotient)
            valiation(quotient,remainder,exchange)
            // result = quotient + remainder
            // console.log(result) 
            // console.log(Math.floor(result/exchange))
            // console.log(Math.floor(result%exchange))


            // console.log(bottles + quotient + Math.floor(result/exchange))
        }
}

   
}

function valiation(q,r,ex){
    let result = q + r
    while(result < q){
        console.log(Math.floor(result/exchange))
        console.log(Math.floor(result%exchange))
        result = Math.floor(result/exchange) + Math.floor(result%exchange)
        console.log(result)

    }
}
waterBottles(bottles,exchange)