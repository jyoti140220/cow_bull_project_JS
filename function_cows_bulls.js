var list1=[0,1,2,3,4,5,6,7,8,9],list2=[]
var list3=[]
var list4=[]
var readlinesync=require('readline-sync').question

function randomlist(mainlist){
    let mySe = new Set()
    var i=0
    while (true){
        var b=list1[Math.floor(Math.random()*list1.length)];
        mySe.add(b)
        var list2=[...mySe]
        if (list2.length==5){
            break
        }
        i++;
    }
    return list2
}
a=randomlist(list1)
console.log("random list",a)



function chance(){
    var k=10
    
    while (k>=1){
        var number=parseInt(readlinesync("guess the number :"))
        var position=parseInt(readlinesync("enter the number position :"))
        if (position>4){
            console.log("\nError, You have 5 number of list you can choose till 4 position\n")
            var position=parseInt(readlinesync("enter the number position :"))


        }
        if (a.includes(number)==true && a.indexOf(number)==position){
            console.log(`Bull`)
            list3[position]=number
        }
        else if (a.includes(number)==true && a.indexOf(number)!=position){
            console.log(`Cow`)
            list4.push(number)
        }else if (a.includes(number)==false){
            console.log("################################# number is wrong ####################################")
        
        }

        k--
        if (k==0){
            console.log("\n**************************** Your chance is over ******************************\n")
        }else{
            console.log(`\n ***************************** Now You Have ${k} chance ***********************************\n `)
        }
    }if (list4.length>=1){
        console.log("you choose right number but position is wrong :-", list4)

    }
    
    return list3
    



}
b=chance()
console.log("your gussing list :-", b)

function comparision(){
    if (JSON.stringify(a)==JSON.stringify(b)){
        console.log()
        console.log("*************************** Congratulation, You Win ********************************\n")
    }else{
        console.log()
        console.log("**************************** Opps You are the looser! ********************************\n")
    }
    

    

}
comparision()

function main(){
    a=randomlist(list1)
    console.log("random list",a)
    b=chance()
    console.log("your guessing list :-",b)
    comparision()
        
    
}



var i=0
while (true){
    var user=readlinesync("if you want to play again than put yes otherwise no :")
    if (user=="yes"){
        main()
    }else{
        console.log("****************************** thank you *******************************")
        break
}
    

}


