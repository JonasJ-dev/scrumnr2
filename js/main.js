// function testStart() {
//     let question = document.getElementById()
// };

function nextQuestion(){
    const questions = document.querySelectorAll('.question');
    let btn = document.getElementById('btn');
    let lastElement = 0;

    for(let i = 0; i < questions.length-1; i++) {
        if (questions[i].classList.contains('selected')) {
            questions[i].classList.remove('selected');

            if (questions[i+1]) {
                lastElement = i + 1;
                questions[i+1].classList.add('selected');
            }
            
            break;
        }
    }
    if(lastElement==14){
        btn.innerHTML="pabaiga";
        

    }
}

function selectAnswer(answerIsCorrect){
    // this.querySelector('')
    // // answerIsCorrect
    // document.querySelector('question')
    const question = document.querySelector('.question.selected');
  
   
    // document.querySelectorAll('.question.selected input').forEach(el => {
    //     el.setAttribute('disabled', true);
    // });

    if (answerIsCorrect) {
        question.querySelector('.correct-answer').classList.add('selected');
        question.querySelector('.incorrect-answer').classList.remove('selected');
        
    } else {
        question.querySelector('.incorrect-answer').classList.add('selected');
        question.querySelector('.correct-answer').classList.remove('selected');
       
    }
    question.querySelector('.answer').classList.remove('d-none');
}