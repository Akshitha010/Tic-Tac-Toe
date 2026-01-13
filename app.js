let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;//true->O's turn,false->X's turn
let count=0;

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count++;
        let isWinner=checkWinner();
        if (count===9 && !isWinner){
            gameDraw();
            count=0;
        }
    })
})

const showWinner=(winner)=>{
    msg.innerText=`${winner} is the Winner!`;
    msgContainer.classList.remove("hide");
    disableAllBoxes();
}
const checkWinner=()=>{
    for(let pattern of winPatterns){
        let posVal1=boxes[pattern[0]].innerText;
        let posVal2=boxes[pattern[1]].innerText;
        let posVal3=boxes[pattern[2]].innerText;

        if(posVal1!=="" && posVal1===posVal2 && posVal2===posVal3){
            console.log("winner",posVal1);
            showWinner(posVal1);
            return true;
        }
    }
    retrun false;
}
const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const disableAllBoxes=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    })
}

resetBtn.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
    })
    turnO=true;
})
newGameBtn.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
    })
    turnO=true;
    msgContainer.classList.add("hide");
})
