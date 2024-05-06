const questions=[{
    id:1,
    question:'Which was the 1st non Test playing country to beat India in an international match?',
    options:['Canada','Sri Lanka','Zimbabwe','East Africa'],
    correctAns:'Sri Lanka'
},
{
    id:2,
    question:'Who is the first Indian woman to win an Asian Games gold in 400m run?',
    options:['M.L.Valsamma','P.T.Usha','Kamaljit Sandhu','K.Malleshwari'],
    correctAns:'Kamaljit Sandhu'
},
{
    id:3,
    question:'How long are professional Golf Tour players allotted per shot?',
    options:['45 seconds','25 seconds','1 minute','2 minutes'],
    correctAns:'45 seconds'
},
{
    id:4,
    question:'India won its first Olympic hockey gold in...?',
    options:[1928,1932,1936,1948],
    correctAns:1928
},
{
    id:5,
    question:'Who was the 1st ODI captain for India?',
    options:['Ajit Wadekar','Bishen Singh Bedi','Nawab Pataudi','Vinoo Mankad'],
    correctAns:'Ajit Wadekar'
}
]
const questionEl=document.getElementById('question');
const optionsEl=document.getElementById('options');
const scoreEl=document.getElementById('score');
const nextEl=document.getElementById('next');
let currentQues=0;
let score=0;
const totalScore=questions.length;
scoreEl.textContent=`Score: ${score} / ${totalScore}`;
displayQuestion()

nextEl.addEventListener('click', ()=>{
    scoreEl.textContent = `Score: ${score} / ${totalScore}`;
    nextQuestion();
  } );
function displayQuestion(){
    const {question,options,correctAns}=questions[currentQues];
    optionsEl.innerHTML = "";
    questionEl.textContent=question;
    options.forEach((opt)=>{
        const btn=document.createElement('button');
        btn.textContent=opt;
        optionsEl.appendChild(btn)

        btn.addEventListener('click',()=>{
            if (opt==correctAns){
                score++;
            }
            else{
                score=score-0.25;
            }
            scoreEl.textContent = `Score: ${score} / ${totalScore}`;
            nextQuestion();
        })
    })
}
function nextQuestion(){
    currentQues++;
    for (let i=0;i<questions.length;i++){
        if (currentQues>=questions.length){
            questionEl.innerText='Quiz Completed'
            optionsEl.remove()
            nextEl.remove()
        }
        else{
            displayQuestion()
        }
    }
}