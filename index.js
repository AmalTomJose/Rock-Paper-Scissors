 let userScore=0;
 let     compScore=0;
  
 const choices=document.querySelectorAll(".choice");
 const msg=document.querySelector("#msg");
 const userScorePara =document.querySelector("#user-score");
 const compScorePara =document.querySelector("#computer-score");

  const genCompChoice =() =>{
    const options =["rock","paper","scissors"];
    const randIdx=  Math.floor(Math.random()*3);
    return options[randIdx];
  }
  const drawGame =() =>{
    console.log("Game was draw");
    msg.innerText="Game was draw try again";
    msg.style.backgroundColor="orange";
  };
  const showWinner =(userWin,userChoice,compChoice)=>{
    if(userWin)
    {
        userScore ++;
        userScorePara.innerText=userScore;

       msg.innerText=`You win!! ${userChoice} beats ${compChoice}`;
       msg.style.backgroundColor="green";
    } else{
        compScore++;
        compScorePara.innerText= compScore;
        console.log("u lose");
        msg.innerText=`You lose ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
  }
 const playGame =(userChoice) =>{
    console.log("user choice =",userChoice);
    const compChoice=genCompChoice();
    console.log("computer choice=",compChoice);
    if(userChoice==compChoice)
    {
        drawGame();
    } else {
        let userWin=true;
        if(userChoice==="rock"){
            //paper scissorrs
            userWin=compChoice==="paper"?false:true;
        } else if(userChoice==="paper"){
            //rock scissors
            userWin=compChoice==="rock" ? true:false;
        } else if(userChoice==="scissors"){
            //rock paper
            userWin=compChoice==="rock" ? false:true;
        }
        showWinner(userWin,userChoice,compChoice);

    }
 };
 choices.forEach((choice) => {
    choice.addEventListener("click",()=> {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice )
    });
 });