const questionContainer = document.querySelector(".card-body")

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
    const newQuestion = `<h1 class="card-title">${questionData.first} x  ${questionData.second}</h1>
    <button class="options"  id="option1" value=${arr[1]} onclick =checkAnswer(this.id)><h6 >&nbsp;A.&nbsp;&nbsp;&nbsp;${arr[1]}</h6></button>
      <button class="options"  id="option2" value=${arr[2]} onclick =checkAnswer(this.id)><h6 >&nbsp;B.&nbsp;&nbsp;&nbsp;${arr[2]}</h6></button>
        <button class="options"  id="option3" value=${arr[3]} onclick =checkAnswer(this.id)><h6 >&nbsp;C.&nbsp;&nbsp;&nbsp;${arr[3]}</h6></button>
          <button class="options"  id="option4" value=${arr[0]} onclick =checkAnswer(this.id)><h6 >&nbsp;D.&nbsp;&nbsp;&nbsp;${arr[0]}</h6></button>`

//adding new question
 questionContainer.innerHTML = newQuestion; 
}


const checkAnswer = (clicked_id) => {
  const rightAnswer = questionData.first*questionData.second;
  const click = document.getElementById(clicked_id).value;
  console.log(click);
  if(rightAnswer == click)
  {
    document.getElementById("answer").innerHTML = "Great Work Your Answer is correct"
  }
  else
  {
    document.getElementById("answer").innerHTML = `Try Again Correct Answer is ${rightAnswer}`;
  }
} 