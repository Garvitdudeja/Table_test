const questionContainer = document.querySelector(".Test");
var correct = 0, incorrect = 0, timeoutId= 0;
var questionData = {
  first : 0,
  second: 0,
}

const Start = () =>{
  questionData = {
    first : Math.floor(Math.random()*20),
    second : Math.floor(Math.random()*20),
  }

  
    const arr = []
    const answer = questionData.first*questionData.second;
    const option1 = (questionData.first-1)*(questionData.second-2);
    const option2 = (questionData.first-1)*(questionData.second+2);
    const option3 = (questionData.first+1)*(questionData.second+2);
    arr.push(option1);
    arr.push(option2);arr.push(option3);arr.push(answer);

    clearTimeout(timeoutId);

    // Shuffling The Array
    function shuffle(array) {
      let currentIndex = array.length,  randomIndex;
    
      // While there remain elements to shuffle...
      while (currentIndex != 0) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
    
      return array;
    }
    
    shuffle(arr);
    const newQuestion = `<div class="main">
    <div class="card" style="width: 18rem;">
    <div class="result">
    <h6 style="color:green;">Correct : ${correct}</h6>
    <h6 style="color:red;">InCorrect : ${incorrect}</h6>
    </div>
      <div class="card-body">
    <h1 class="card-title">${questionData.first} x  ${questionData.second}</h1>
    <button class="options"  id="option1" value=${arr[1]} onclick =checkAnswer(this.id)><h6 >&nbsp;A.&nbsp;&nbsp;&nbsp;${arr[1]}</h6></button>
      <button class="options"  id="option2" value=${arr[2]} onclick =checkAnswer(this.id)><h6 >&nbsp;B.&nbsp;&nbsp;&nbsp;${arr[2]}</h6></button>
        <button class="options"  id="option3" value=${arr[3]} onclick =checkAnswer(this.id)><h6 >&nbsp;C.&nbsp;&nbsp;&nbsp;${arr[3]}</h6></button>
          <button class="options"  id="option4" value=${arr[0]} onclick =checkAnswer(this.id)><h6 >&nbsp;D.&nbsp;&nbsp;&nbsp;${arr[0]}</h6></button>
          </div>
          <h6 id="answer" class="text-center"></h1>
          <button class="Next px-3 py-1 border-0 rounded mx-auto"
        onclick=Start()>Next</button>
          
        </div>
      </div>`

//adding new question
 questionContainer.innerHTML = newQuestion;
 document.getElementById("answer").innerHTML = ""; 
}


const checkAnswer = (clicked_id) => {
  const rightAnswer = questionData.first*questionData.second;
  const click = document.getElementById(clicked_id).value;
  console.log(click);
  if(rightAnswer == click)
  {
    document.getElementById("answer").innerHTML = "Great Work Your Answer is correct";
    correct += 1; 
    timeoutId = setTimeout(Start,3000);
  }
  else
  {
    document.getElementById("answer").innerHTML = `Oops! The Correct Answer is ${rightAnswer}`;
    incorrect += 1;
    timeoutId = setTimeout(Start,6000);
  }
  console.log(correct, incorrect);
} 