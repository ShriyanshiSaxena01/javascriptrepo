// alert("this is external js page")
// brander each-1995
// mocha----livescript----javascript
// scripted language--->lightwated language
// two type of using java script in html -->internal and external
// document.write("<h1>this is heading text</h1>")
// document.write("this is normal text")
// syntax is a formate

//numeric -> integer,float
// alphabatic -> character , string
// boolean -> true , false

// by using these keywords we can defin variable
//-- var,let,const

// var-> re-declartaion , re-assign
// let -> no re-declartaion , re-assign
// const -> no re-declartaion, no re-assign

// var number_1=65
// var number_1=67

// let numberr1=348

// numberr1=34558

// const cybrom="institute"
//  cybrom="institute jj"

//  console.log(cybrom);//PRINT THE VALUE ON CONSOLE


 //operators-> are the special symbol 
 //why we use them ->to perform any thask
 //type of operater->unary ->which work  on single operant (increment,decremnt)
                // ->binary ->which work  ontwo operant  (airthmatic operator --> +,-,*,/,%)  ,  (relational operator --> >,<,>=,<=,!=,==,===) , (logical operator --> and(&&),or(||),not(!)) , (assigment operators -->=,+=,-=,*=,/=,)
                // ->turnary ->its an conditional operator (:)
//  ===  -> compare the type also
//  == -> only compare the value 


// var number_2=5  
// var number_3=5  
// prompt --> function
// parseInt --> it do typecasting into int  //because prompt default it take value in string .(function)
 // parseFloat-->it do typecasting into float
 
 

// *******************// **************************************************************************************************************************************************

// --------------------------------------------------------------------------conditional statement --------------------------------------------------------------------------

// let a= parseInt(prompt("enter no."));
// //pie r2=3.14159
// //var a= 3.14159
// let a= parseInt(prompt("enter no."));
// var a= 3.14159
// let b= parseInt(prompt("enter the value of radious."));
// document.write((a*b)*b);
// document.write(a);

// conditional statemnt---(if-else family)-
                                        // -if-else            
                                        // -else-if
                                        // -nasted if-else 
                                        // -if-else ladder


// **************************************************************************************************************************************************


// #####################################################################################

// write a program if number is positive or negative

// let a= parseInt(prompt("enter no."));
// if(a>=0)
// {
//     document.write("this number is positive")
// }
// else
// {
//     document.write("this number is not positive")
// }

// **************************************************************************************************************************************************

// Positive numbers: Numbers greater than 0 (e.g., 1, 2, 3, …).
// Negative numbers: Numbers less than 0 (e.g., -1, -2, -3, …).
// Zero (0): Neutral, neither positive nor negative


// **************************************************************************************************************************************************

// ######################################################################################################


// write a program te check number is ood or even
// let a= parseInt(prompt("enter no."));
// if(!(a%2==0))
// {
//     document.write("this number is odd")
// }
// else
// {
//     document.write("this number is even")
// }


// **************************************************************************************************************************************************

// ######################################################################################################


// write a program to check number is  positive negative or nutral

// let a=parseInt(prompt("enter a number."))
// if(a>=1)
// {
//     document.write("positive number")
// }
// else if(a<=-1)
// {
//     document.write("negative number")
// }
// else
// {
//     document.write("nutral number")
// }

// *******************<----or--->*******************************************************************************************************************************

// ######################################################################################################


// let a=parseInt(prompt("enter a number."))
// if(a<0)
// {
//     document.write("positive number")
// }
// else if(a>0)
// {
//     document.write("negative number")
// }
// else
// {
//     document.write("nutral number")
// }

// **************************************************************************************************************************************************

// #####################################################################################


// take amount from user 
// if he enter more than 100 or tell 500-->then bring chochlate
// if he enter more than 500 or tell 1000-->then bring t-shirt
// if he enter more than 1000 or tell 5000-->then bring neckband
// else -->kamao

// let a=parseInt(prompt("enter a number."))
// if(a>=100 && a<=500)
// {
//     document.write("bring chochlate")
// }
// else if(a>500 && a<=1000)
// {
//     document.write("bring t-shirt")
// }
// else if(a>1000 && a<=5000)
// {
//     document.write("bring neckband")
// }
// else
// {
//     document.write("kamao")
// }


// **************************************************************************************************************************************************

// ######################################################################################################

// nested if-else

// if(condition)
// {
//     if(condition)
//     {
//         //
//     }
//     else
//     {
//         //
//     }
// }
// else
// {
//     //
// }


// *******************************************************************************************************************************

// ######################################################################################################

// voting and nationality check


// let a=parseInt(prompt("enter your age"))  ------>prompt is for taking input<--------

// if(a>=18)
// {
//     let b=parseInt(prompt("press 1 if u r indian"))
//     if(b==1)
//     {
//         or we can weite---> alert("eligble")  ---->for alert box
//         document.write("u r eligble")
//     }
//     else
//     {
//         document.write("u r not eligble")
//     }
// }
// else
// {
//     document.write("bacche ho abhi")
// }

// *******************************************************************************************************************************

// ########################################################################################################################################


// let a=parseInt(prompt("enter no.")) 

// if(a%2==0)
// {
    
//     if(a%3==0)
//     {

//         document.write("write number")
//     }
//     else
//     {
//         document.write("not divisible by 3")
//     }
// }
// else
// {
//     document.write("not divisible by 2")
// }

// / *******************************************************************************************************************************

// #######################################################################################################################

// let a=parseInt(prompt("enter num 1")) 
// let b=parseInt(prompt("enter num 2")) 
// let c=parseInt(prompt("enter num 3")) 

// if(a%2==0)
// {
//     document.write("even")
//     document.write(a*b);
// }

// else
// {
//     document.write("odd")
//     document.write(a+c);
// }

// / *******************************************************************************************************************************

// #######################################################################################################################

// let a=parseInt(prompt("enter num 1")) 
// let b=parseInt(prompt("enter num 2")) 

// if(!(a%2==0))
// {

//     document.write("odd"+"<br>")
//     document.write(a*a);
// }
// else
// {
//     document.write("even")
//     document.write(b*b*b);
// }

// / / *****************************************************************************************************************************

// #######################################################################################################################

// let a=parseInt(prompt("enter 1 for add ,2 for multiplay ,3 for subtract ,4 for divide")) 
// let b=parseInt(prompt("enter num 1")) 
// let c=parseInt(prompt("enter num 2")) 


// if(a==1)
// {
//     document.write("add")
//     document.write(b+c);
// }
// else if(a==2)
// {
//     document.write("multiplay")
//     document.write(b*c);
// }
// else if(a==3)
// {
//     document.write("sub")
//     document.write(b-c);
// }
// else if(a==4)
// {
//     document.write("divide")
//     document.write(b/c);
// }
// else
// {
//     document.write("wrong input")
// }


//  *****************************************************************************************************************************


// wap to make leap year program

//  *****************************************************************************************************************************

/*

topic change

*/




//-------------------------------------------------------------------------- switch case--------------------------------------------------------------------------
// work on vaviable condition 
// work on without condition

// syntax
// switch(variable){
//     case variable_value:
//         //ststemnt
//         break;
//     case variable_value:
//          //ststemnt
//         break;
//     case variable_value:
//          //ststemnt
//         break;
//      case variable_value:
//            //ststemnt
//           break;
//     default:
//         //ststemnt
    
// }



//  *****************************************************************************************************************************
//################################################### example of switch case##################################

//  let a=parseInt(prompt("enter any number between 1 to 3")) 


// switch(a){
//     case 1:
//         document.write("111")
//         break;
//     case 2:
//         document.write("222")
//         break;
//     case 3:
//         document.write("333")
//         break;

//     default:
//         document.write("wrong input")
    
// }


//  *****************************************************************************************************************************

// ######################################################################################################

// let a=parseInt(prompt("enter 1 for add ,2 for multiplay ,3 for subtract ,4 for divide")) 
// let b=parseInt(prompt("enter num 1")) 
// let c=parseInt(prompt("enter num 2")) 
//  switch(a){
//         case 1:
//             document.write("add")
//             document.write(b+c);
//             break;
//         case 2:
//             document.write("multiplay")
//             document.write(b*c);
//             break;
//         case 3:
//                 document.write("sub")
//                 document.write(b-c);
//             break;
//         case 3:
//                 document.write("divide")
//                 document.write(b/c);
//             break;
    
//         default:
//             document.write("wrong input")
        
//     }

// ######################################################################################################

// let a=parseInt(prompt("enter 1 for add ,2 for multiplay ,3 for subtract ,4 for divide")) 
// let b=parseInt(prompt("enter num 1")) 
// let c=parseInt(prompt("enter num 2")) 
//  switch(a){
//         case 1:
//             document.write("add")
//             document.write(b+c);
//             break;
//         case 2:
//             document.write("multiplay")
//             document.write(b*c);
//             break;
//         case 3:
//                 document.write("sub")
//                 document.write(b-c);
//             break;
//         case 3:
//                 document.write("divide")
//                 document.write(b/c);
//             break;
    
//         default:
//             document.write("wrong input")
        
//     }
// ######################################################################################################

// let a=parseInt(prompt("enter 1 to add cold coffe  -180 and enter 2 to add sandwich -80 and enter 3 for both ")) 
// // let b=parseInt(prompt("enter 2 to add sandwich -80")) 



///////////////////////////////////////////////////////////////////////////////**********************************************************************************************************///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  switch(a){
//         case 1:
//             let A=parseInt(prompt("enter number to add number of quintity")) 
//             document.write(180*A);
//             break;
//         case 2:
//             let B=parseInt(prompt("enter number to add number of quintity")) 
//             document.write(80*B);
//             break;
//         case 3:
//             let D=parseInt(prompt("enter number to add number of quintity")) 
//             document.write(180*A+80*B);
//             break;
        
    
//         default:
//             document.write("wrong input")
        
//     }


//  *****************************************************************************************************************************




//-------------------------------------------------------------------------- loops in js --------------------------------------------------------------------------

// Loops come into use when we need to repeatedly execute a block of statements.
// types of loop-->>while loop
//              -->>do while loop
//              -->>for loop
//              -->>nested for 
//              -->>for in
//              -->>for out
//              -->>for each

// for (let i=10;i<10;i++)
// {
//    if(i%2==0)
//    {
//      document.write(i);
//    }
//    else
//    {

//    }
// }




/*
//



topic change

*/


//  ****************************************************************************************************************************************************************************************************************************

// -------------------------------------------------------------------------- function--------------------------------------------------------------------------

// function ->> is a block of code or a set of instruction which work when it is called.
// use -->> help to incres code reusability
//  type of function -->> 1.user-define function
                        //2.pre-define function 

// syntax

// ---identity is function name----

// function identity (para/argment)
// {
     //statemnt
// }

// main parts -->>
// function declaration
//  function defination
//  function calling


//  *****************************************************

// function showdata()
// {
//     alert("hyy")
// }
// showdata()

//  *****************************************************************************

// ################# find area of circle #################
// function showdata()
// {
//     let a=parseInt(prompt("enter radious of circle")) 
//     let pie= 3.14159
//         document.write("area of circle"+pie*a*a)
// }
// showdata()

//  ********************************************************************************

// type in user-define function-:


// --------------------------------------------------------------------------without parameter and no return value.--------------------------------------------------------------------------

// --->>

// ################# find area of circle #################
// function showdata()
// {
//     let a=parseInt(prompt("enter radious of circle")) 
//     let pie= 3.14159
//         document.write("area of circle"+pie*a*a)
// }
// showdata()

//  ********************************************************


// -------------------------------------------------------------------------- without parameter and with no return value. --------------------------------------------------------------------------

// function my()
// {
//      document.write("hello")
// }

// document.write(my())


// -------------------------------------------------------------------------- without parameter and with return value. --------------------------------------------------------------------------


// function cybrom(){
//     let a=parseInt(prompt("enter radious of circle"))
//     let pie= 3.14159


// // return "placement"; --->> becuse its a string
//     return pie*a*a;
// }

// document.write(cybrom())

//  ********************************************************

// --------------------------------------------------------------------------with parameter and no return value. --------------------------------------------------------------------------

// ################# wap to check no. is even or odd with using #################

// function demo(b){

//          if(!(a%2==0))
//                {

//                    document.write("odd")
   
//                }
//          else
//                {
//                   document.write("even")
   
//                }
//        }
//        let a=parseInt(prompt("enter num ")) 
//        demo(a)

//  ********************************************************

// with parameter and with return value.

//  ********************************************************

// wap to return area of triangle using function


// function cybrom(){
//     let b=parseInt(prompt("enter the base of triangle "))
//     let h=parseInt(prompt("enter the hight of triangle"))
    
    
//     return 1/2*b*h;
// }
// document.write(cybrom())


// function shriyanshi()
// {
//      document.write("shriyanshi")
// }
// document.write(shriyanshi())

//  ********************************************************

// functions <<argument --work as an input>>
// pow((a,b))---->>function to calculate power



//  ********************************************************
// *********************************************************************************************************************************************************************************************************************

//-------------------------------------------------------------------------- dom --------------------------------------------------------------------------


// dom --->> document object model

// dom -->> with the help of dom we can change html and css
// if we want to change html and css with the help of dom in js

// getElementById-->> its return single node

// let heading= document.getElementById("name of id")
// heading.innerHTML="we can write changes"
// heading.style.backgroundcolor="yellow

// getElementByClassName
// --->its return node list in array form




//  **************************** inner html ****************************
// //  node list return ho ga array formet 

// let heading= document.getElementById('head')
// heading.innerHTML="js class"
// heading.style.backgroundColor="yellow"
// heading.style.fontFamily="verdana"
// heading.style.padding="20px"

// let i = document.getElementsByClassName('head2')
// i[0].innerHTML="cybrom"
// i[0].style.backgroundColor="yellow"
// i[1].innerHTML="cybrom"
// i[2].innerHTML="cybrom"


// let para = document.getElementsByTagName('p')
// para[3].innerHTML="changed"
// para[5].innerHTML="<h1>changed</h1>"
// // para[p].style.backgroundColor="blue"
// para[3].style.cssText="background-color: red; color:white"


// change priiveous tag content and can also changed tag also



// (((((((((((((((((((((((((((((((((((((((((((((((((((((((()))))))))))))))))))))))))))))((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((99)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))

// let a=document.createElement('p')
// let b=document.createTextNode("i am shriyanshi")

// a.append(b)
// let c=document.getElementById("main")
// c.append(b)


// let a1=document.createElement('p')
// let b1=document.createTextNode("i m shriyanshi saxena")

// a.append(b)
// let c1=document.getElementsById("second")
// c.append(b)


// ********************************************************************************************************************************************************************************************************************
// css for chnging the image
// let img = document.getElementById('image')
// img.src="immm.jpeg"
 


// ********************************************************************************************************************************************************************************************************************


// ------------------------------>>>>EVENTS<<<<<---------------------------------------

// its a action which is performed by users


// function fun(){
//      alert("button ")
// }


//  function color1(){
//     document.body.style.backgroundColor="red"
// }

// function color2()
// {
//      document.body.style.backgroundColor="green"
// }
// function color3()
// {
//      document.body.style.backgroundColor="yellow"
// }
// function color4()
// {
//      document.body.style.backgroundColor="blue"
// }

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<---CLASS-->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




// function fun1(){
//      let img= document.getElementById('image_change')
//      img.src="immm.jpeg"
// }
// function fun(){
//      let img= document.getElementById('image_change')
//      img.src="download (1).jpeg"
// }


// function lapi(){
//      let img= document.getElementById('image_change')
//      img.src="lapi.jpeg"
// }
// function earphone(){
//      let img= document.getElementById('image_change')
//      img.src="ear.png"
// }
// function mobile(){
//      let img= document.getElementById('image_change')
//      img.src="mobile.jpeg"
// }
// function ipad(){
//      let img= document.getElementById('image_change')
//      img.src="ipad.jpeg"
// }
// function watch(){
//      let img= document.getElementById('image_change')
//      img.src="wat.jpeg"
// }
// function spcex(){
//      let img= document.getElementById('image_change')
//      img.src="spex.jpeg"
// }


// ********************************************************************************************************************************************************************************************************************

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<---CLASS-->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// ------------------------------>>>>FORM EVENTS<<<<<---------------------------------------

// way of takinng input from users
// by default function return true


// function fun1(){
//      let num1 = parseInt(document.getElementById('number1').value);
//      let num2 = parseInt(document.getElementById('number2').value);

//      num3=num1+num2

//      document.getElementById('ans').innerHTML = num3

//      return false   //to stop from to be sumbmit
// }

// function add(){
//      let num1 = parseInt(document.getElementById('number1').value);
//      let num2 = parseInt(document.getElementById('number2').value);

//      num3=num1+num2
//      document.getElementById('ans').innerHTML = num3

//      return false  
// }
// function sub(){
//      let num1 = parseInt(document.getElementById('number1').value);
//      let num2 = parseInt(document.getElementById('number2').value);

//      num3=num1-num2
//      document.getElementById('ans').innerHTML = num3

//      return false  
// }
// function mul(){
//      let num1 = parseInt(document.getElementById('number1').value);
//      let num2 = parseInt(document.getElementById('number2').value);

//      num3=num1*num2
//      document.getElementById('ans').innerHTML = num3

//      return false  
// }
// function div(){
//      let num1 = parseInt(document.getElementById('number1').value);
//      let num2 = parseInt(document.getElementById('number2').value);

//      num3=num1/num2
//      document.getElementById('ans').innerHTML = num3

//      return false  
// }



// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<---CLASS-->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// ------------------------------>>>>FORM validation<<<<<---------------------------------------

// function data(){

//      let name = document.getElementById('name').value   // taking value for making this compulsary
//      let address = document.getElementById('address').value
//      let contect = document.getElementById('contect').value
//      let email = document.getElementById('email').value
//      let password = document.getElementById('password').value
//      let cpassword = document.getElementById('cpassword').value

//      if(name==""){ //giving space make this code work " " which is wrong
//           alert("please enter name")
//           document.getElementById('name').focus() // focus() is a function which is used to focus on perticular box
//           return false
//      }
//     else if(address==""){ //giving space make this code work " " which is wrong
//      alert("please enter address")
//      document.getElementById('address').focus() // focus() is a function which is used to focus on perticular box
//      return false
//      }
//      else if(contect==""){ //giving space make this code work " " which is wrong
//           alert("please enter contect")
//           document.getElementById('contect').focus() // focus() is a function which is used to focus on perticular box
//           return false
//      }
//      else if(contect.length>10 ||contect.length<10){ //.length--->> to specifay the lenngth of input
//           alert("please enter 10 number contect")
//           document.getElementById('contect').focus() 
//           return false
//      }
//      else if(isNaN(contect)){ //.length--->> to specifay the lenngth of input //include -->> is a function of string 
//           alert("please enter only number contect")
//           document.getElementById('contect').focus() 
//           return false
//      }
//      else if(!(email.includes('@'))){ //include -->> is a function of string //include only save only one
//           alert("please enter @ email")
//           document.getElementById('email').focus() 
//           return false
//      }
//      else if(!(password.match(/[@#$%^&*!]/))){ //include -->> is a function of string //include only save only one
//           alert("please enter @#$%^&*! one of this password")
//           document.getElementById('password').focus() 
//           return false
//      }
//      else if(cpassword!=password){ //include -->> is a function of string //include only save only one
//           alert("please enter same password")
//           document.getElementById('cpassword').focus() 
//           return false
//      }


// }




let a=parseInt(prompt("enter no.")) 

if(a%2==0)
{
    
    if(a%3==0)
    {

        document.write("write number")
    }
    else
    {
        document.write("not divisible by 3")
    }
}
else
{
    document.write("not divisible by 2")
}