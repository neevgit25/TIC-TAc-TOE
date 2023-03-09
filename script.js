let btnGame= document.querySelectorAll(".btn");
let popupGame=document.querySelector(".popup");
let newbtn=document.getElementById("new-game");
let restart=document.getElementById("again");
let msg=document.getElementById("message");


let winning = [[0,1,2] ,[0,3,6],[2,5,8] ,[6,7,8],[3,4,5],[1,4,7] ,[0,4,8] ,[2,4,6],];

//player "X" plays first

let xTurn= true;
let count =0;


//Disable All buttons
const disableButtons = ()=>{
    btnGame.forEach((element) =>(element.disabled = true));
    //enable popup
    popupGame.classList.remove("hide");
};
//Enable all buttons (For New Game and Restart)
  const enableButtons= () =>{
    btnGame.forEach((element) => {
        element.innerText="";
        element.disabled=false;
    });

    //disable popup
    popupGame.classList.add("hide");
  };

  //this function executed when players wins
const winFunction = (letter) => {
    disableButtons();
    if(letter == "X"){
        msg.innerHTML="X Wins";
    }
    else {
        msg.innerHTML="O Wins";
    }
};
//Function draw

const drawFunction =() =>{
    disableButtons();
    msg.innerHTML=" I'ts a Draw";
};

  //new game
   newbtn.addEventListener("click", () =>{
    count =0;
    enableButtons();
   });
   restart.addEventListener("click", () => {
    count =0;
    enableButtons();
   });




//win logic
const winChecker = () => {
    //loopthrough all win patterns
    for(let i of winning)
    {
        let [element1 ,element2,element3] =[
            btnGame[i[0]].innerText,
            btnGame[i[1]].innerText,
            btnGame[i[2]].innerText,
        ];
        //check if elements are filled
        //3 empty elements are same and would givewin as would

        if(element1 != "" && (element2 != "") && (element3 !="")){
            if(element1 == element2 && element2 == element3){
            // if all 3 buttons have values then pass the value to winFunction
            winFunction(element1);
        }
        }
    }
};

  // Display X/0 click
btnGame.forEach((element) => {
    element.addEventListener("click",() => {
        if(xTurn)
        {
        xTurn=false;
        element.innerText = "X";
        element.disabled =true;
        }
        else{
            xTurn =true;
            element.innerText="O"
            element.disabled =false;
        }
        count += 1;
        if(count == 9){
            drawFunction();

        }
       winChecker();
    });
});

//Enable Button and popUp on pageLoad
window.onload = enableButtons; 

