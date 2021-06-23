'use strict';
// /*----------------------Introduction Message Function----------------------------*/
var person = prompt("Please enter your name");

var i = 0;
 var txt = "Hello " + person + "! How are you today, Welcome to my Website you will find all intresting things here.. Enjoy!";
 var speed = 10;

 function typeWriter() {
  if (i < txt.length && person != null) {
   document.getElementById("Message").innerHTML += txt.charAt(i);
    
   i++;
  setTimeout(typeWriter, speed);
}
}

typeWriter()

// /*----------------------Guessing Game----------------------------*/

var score=0;

function guessAname(){
    let guessedName= Number(prompt("Welcome " + person + ", Lets Play A Guessing Game about my self so what is my name ?                                                       type the following: (1) Jehad (2) Omar (3) Nasha'at "));     
    while(guessedName!==1){
        if (guessedName==1)
        {
            var nextFlag1=confirm("Great you did it It's Me Jehad!, Lets Continue ?");
            score=score+30;
            console.log("Score : "+ score);
            if(nextFlag1==1){
                break;
            }
        }
        else if(guessedName==2){
            score=score-10;
            console.log("Score : "+ score);
            guessedName=prompt("Oh no I am not Omar he is slower than me in Talking ! ^_^ Guess again! >> type the following: (1) Jehad (2) Omar (3) Nasha'at");
        }
        else if(guessedName==3){
            score=score-10;
            console.log("Score : "+ score);
            guessedName=prompt("Oh no I am fatter than him ^_^ Guess again! >> type the following: (1) Jehad (2) Omar (3) Nasha'at");
        }
        else{
            break;
        }
        break;
    }
}



function guessAplace(){
    let guessedPlace= Number(prompt("Where I am from ? type from the following:                           || (1) Amman | (2) Zarqa | (3) Aqaba || "));
    while(guessedPlace!==1){
        switch(guessedPlace){
            case 1:
                nextFlag2=confirm("Great you did it I am From Amman!");             
                score=score+30;
                console.log("Score : "+ score);
                if(nextFlag2==1){
                    break;
                }
            case 2:
                guessedPlace=prompt("Omar is from from Zarqa as a hint !! ^_^ Guess again and type from the following: || (1) Amman | (2) Zarqa | (3) Aqaba ||");             
                score=score-10;
                console.log("Score : "+ score);
            case 3:
                guessedPlace=prompt("Oh no there is no beach in my living area!! ^_^ Guess again and type from the following: || (1) Amman | (2) Zarqa | (3) Aqaba ||");       
                score=score-10;
                console.log("Score : "+ score);
            default:
                break;
        }
        break;
    }
}

function guessAnumberA(){
    let guessedNumberA= Number(prompt("Guess a number, The Number is between 2 and 7"));     
    for(let m=1;m<=5;m++)
    {
        if (guessedNumberA>=2 && guessedNumberA<=4){
            guessedNumberA=Number(prompt("Great you are too close but the number you entered is low, Lets Guess again ?"));
            score=score-10;
            console.log("Score : "+ score);
        }
        else if(guessedNumberA>=6 && guessedNumberA<=7){    
            guessedNumberA=Number(prompt("Great you are too close but the number you entered is High, Lets Guess again ?"));
            score=score-10;
            console.log("Score : "+ score);
        }
        else if(guessedNumberA==5){
            alert("Great! You Guess it The Number is Five!");
            score=score+30;
            console.log("Score : "+ score);
            break;
        }
    }
}



function guessAnumberB(){
    let guessedNumberList=['2','4','6','8','10'];
    let n=6;
    let guessedNumberB=Number(prompt("Enter A number from the following : "+guessedNumberList));
    while(n<=6 && n>=0){
        switch(guessedNumberB){
            case 2:
                guessedNumberB=Number(prompt('You are not close because the number you enterd it too low, Guess Again!'));
                score=score-10;
                console.log("Score : "+ score);
                n--;
                if(n==0){
                    alert("You Missed up!, Try Again Later..");
                    break;}
                    else if(n!==0){continue;}                        
            case 4:        
                guessedNumberB=Number(prompt('You are too close because the number you enterd it low, Guess Again!'))
                score=score-10;
                console.log("Score : "+ score);
                n--;
                if(n==0){
                    alert("You Missed up!, Try Again Later..");
                    break;}
                    else if(n!==0){continue;}                     
            case 6:
                if(n>=0 && n<=6 ){
                    score=score+30;
                    alert("You Did It GREAT! the number is 6");
                    break;}
                    else {continue;}
            case 8:
                guessedNumberB=Number(prompt('You are too close because the number you enterd it High, Guess Again!'));
                score=score-10;
                console.log("Score : "+ score);
                n--;
                if(n==0){
                    alert("You Missed up!, Try Again Later..");
                    break;}
                    else if(n!==0){continue;}  
            case 10:        
                guessedNumberB=Number(prompt('You are not close because the number you enterd it too High, Guess Again!'));
                score=score-10;
                console.log("Score : "+ score);
                n--;
                if(n==0){
                    alert("You Missed up!, Try Again Later..");
                    break;}
            default:
                guessedNumberB=Number(prompt('You Missed the List , Enter from this Numbers : '+ guessedNumberList));
                score=score-10;
                console.log("Score : "+ score);
                n--;
                if(n==0){
                    alert("You Missed up!, Try Again Later..");
                    break;}        
        }
    n--;
    break;    
    }
}
guessAname();
guessAplace();
guessAnumberA();
guessAnumberB();


/*----------------------Questionnaire Application----------------------------*/
function Questions(){    
    var answer1=prompt("Are You Engineer ? , Answer by Yes (Y) or No (N)").toUpperCase();
    //console.log(answer1);
    alert("Great , Your answer " + "(" + answer1 + ")");
    let Q1 = document.getElementById("q1");
    Q1.textContent += answer1;
    document.getElementById('q1').style.display='block';
    
    var answer2=prompt("Do you have an experiance in programming before? ,  Answer by Yes (Y) or No (N)").toUpperCase();
    //console.log(answer2);
    alert("Great , Your answer " + "(" + answer2 + ")");
    let Q2 = document.getElementById("q2");
    Q2.textContent += answer2;
    document.getElementById('q2').style.display='block';
    
    var answer3=prompt("Are you intresting in Artificial Intiligence Feild,  Answer by Yes (Y) or No (N)").toUpperCase();
    //console.log(answer3);
    alert("Great , Your answer " + "(" + answer3 + ")");
    let Q3 = document.getElementById("q3");
    Q3.textContent += answer3;
    document.getElementById('q3').style.display='block';
    
    var answer4=prompt("Do you Live in Amman ,  Answer by Yes (Y) or No (N)").toUpperCase();       
    //console.log(answer4);
    alert("Great , Your answer " + "(" + answer4 + ")");
    let Q4 = document.getElementById("q4");
    Q4.textContent += answer4; 
    document.getElementById('q4').style.display='block';

    var answer5=prompt("Do you have a free 3 hours daily to start learning,  Answer by Yes (Y) or No (N)").toUpperCase();
    //console.log(answer5);
    alert("Great , Your answer " + "(" + answer5 + ")");
    let Q5 = document.getElementById("q5");
    Q5.textContent += answer5;
    document.getElementById('q5').style.display='block';
 }


 let Score = document.getElementById("scoreElement");
    Score.textContent += score/10+" of 12";
    document.getElementById('scoreElement').style.display='block';