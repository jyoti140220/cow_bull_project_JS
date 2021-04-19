let mySe = new Set()
var i=0
var list1=[0,1,2,3,4,5,6,7,8,9]
while (true){
    var b=list1[Math.floor(Math.random()*list1.length)];
    mySe.add(b)
    var list2=[...mySe]
    if (list2.length==5){
        break
    }
    i++;

}
// console.log(typeof(list2))
console.log(list2)
var readlinesync=require('readline-sync').question
var k=1
var list3=[]
var list4=[]
while (k<=10){
    var number=parseInt(readlinesync("guess the number :"))
    var position=parseInt(readlinesync("enter the number position :"))
    if (list2.includes(number)==true && list2.indexOf(number)==position){
        console.log(`Bull`)
        list3[position]=number
    }
    else if (list2.includes(number)==true && list2.indexOf(number)!=position){
        console.log(`Cow`)
        list4.push(number)
    }else if (list2.includes(number)==false){
        console.log("********************* number is wrong **********************")
    
    }

    k++

}
console.log(list3)
console.log(list4)
if (JSON.stringify(list2)==JSON.stringify(list3)){
    console.log("congress")
}else{
    console.log("no")
}

