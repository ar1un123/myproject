// // // var e = 125
// // // var f = 200
// // // if(e<f){
// // //     console.log('True')
// // // }
// // // else if(e>f){
// // //     console.log('Good')
// // // }
// // // else{
// // //     console.log('False')
// // // }

// //  var a = ['Rajni','Java','Thirunagar', 28]
// //  a[4]='Python fullstack'
// //  console.log(a[4])

// // var x ={name:'Raja', Course:'Django', City:'Thirumangalam', Age:32}
// // console.log(x)
// // console.log(x.name,x.City)

// var x =[{Name:'Anbu', Course:'C,C++', Age:24},
//         {Name:'Rani', Course:'Java,Oracle', Age:21},
//         {Name:'Regi', Course:'Python,FSD', Age:26},
//         {Name:'Rani', Course:'OOPS,DSP', Age:22}
//        ]
// console.log(x) 
// console.log(x[2],x[0])      

//filter find map sort findIndex
// var x = 10
// var y = 20
// z = x*y
// console.log(z)

// var x = 5
// x **= 5
// console.log(x)

// const any = ()=>{
//     return
// }

// const fil = x.findIndex((data)=>{
//     if(data.Name == 'Rani'){
//         return data
//     }

// })
// console.log(fil)

// var y = [3,45,67,23,1,5,78,17,2,56,4]


// const so = x.sort((a,b)=>{

//     return a.Age - b.Age;
// })

// console.log(so)


// const ma =x.map((data)=>{
//     if(data.Age < 24){
//         data.city = 'mdu'
//     }
//     return data
// })

// console.log(ma)

// var x =[{Name:'Anbu', Course:'C,C++', City:'mdu', Age:24},
//         {Name:'Rani', Course:'Java,Oracle', City:'cbe', Age:21},
//         {Name:'Regi', Course:'Python,FSD', City:'Salem', Age:26},
//         {Name:'Rani', Course:'OOPS,DSP', City:'Sivangai', Age:22}
//        ]

// ##FILTER
// const sum = x.filter((data)=>{
//     if (data.Name == 'Rani'){
//         return data
//     }
// })
// console.log(sum)

// Find

// const sum = x.find((data)=>{
//     if (data.Name == 'Rani'){
//         return data
//     }
// })
// console.log(sum)

//SORT

// var z = [1, 2, 3, 38, 15, 78, 25, 46, 65, 5, 4, 8]

// const sum = z.sort((a,b)=>{
//     return a - b
// })
// console.log(sum)

// const sum = x.sort((b,a)=>{
//     return a.Age - b.Age
// })
// console.log(sum)

// MAP REPLACE AND INSERT
// const sum = x.map((data)=>{
//     if(data.Name =='Rani'){
//         data.Course="SQL"
//     }
//     return data
// })
// console.log(sum)

// const sum = x.map((data)=>{
//     if(data.Age < 25){
//         data.Salary = 15000
//     }
//     return data
// })
// console.log(sum)

var y =[{Name:'Raja', Dept:'Mechanical', Designation:'Design Engineer', city:'Cbe', Exp: 2 },
        {Name:'Ashwini', Dept:'Cse', Designation:'Dotnet Developer', city:'Trichy', Exp:3},
        {Name:'Raja', Dept:'IT', Designation:'Java Developer', city:'Salem', Exp:5},
        {Name:'Shyam', Dept:'Cse', Designation:'FSD', city:'Trichy', Exp:8},
        {Name:'Anwar', Dept:'EEE', Designation:'Python', city:'Mdu', Exp: 6}]


const add = y.findIndex((data)=>{
        if(data.city == 'Trichy'){
                return data
        }
})  
console.log(add)      

// const add = y.sort((a,b)=>{
//         return a.Exp - b.Exp
// })
// console.log(add)
