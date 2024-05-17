let questions = [
  {
    question: "Wer hat HTML Erfunden?",
    answer_1: "Chuck Norris",
    answer_2: "Steve Jobs",
    answer_3: "Tim Berners-Lee",
    answer_4: "Justin Bieber",
    right_answer: 3,
  },
  {
    question: "Wer hat HTML Erfunden?",
    answer_1: "Chuck Norris",
    answer_2: "Steve Jobs",
    answer_3: "Tim Berners-Lee",
    answer_4: "Justin Bieber",
    right_answer: 3,
  },
  {
    question: "Wer hat HTML Erfunden?",
    answer_1: "Chuck Norris",
    answer_2: "Steve Jobs",
    answer_3: "Tim Berners-Lee",
    answer_4: "Justin Bieber",
    right_answer: 3,
  },
  {
    question: "Wer hat HTML Erfunden?",
    answer_1: "Chuck Norris",
    answer_2: "Steve Jobs",
    answer_3: "Tim Berners-Lee",
    answer_4: "Justin Bieber",
    right_answer: 3,
  },
  {
    question: "Wer hat HTML Erfunden?",
    answer_1: "Chuck Norris",
    answer_2: "Steve Jobs",
    answer_3: "Tim Berners-Lee",
    answer_4: "Justin Bieber",
    right_answer: 3,
  },
  {
    question: "Wer hat HTML Erfunden?",
    answer_1: "Chuck Norris",
    answer_2: "Steve Jobs",
    answer_3: "Tim Berners-Lee",
    answer_4: "Justin Bieber",
    right_answer: 3,
  },
  {
    question: "Wer hat HTML Erfunden?",
    answer_1: "Chuck Norris",
    answer_2: "Steve Jobs",
    answer_3: "Tim Berners-Lee",
    answer_4: "Justin Bieber",
    right_answer: 3,
  },
];

let currentQuestion = 0; // Globale variable in Integer zum anzeigen der Aktuellen frage

function init() {
  document.getElementById("all-questions").innerHTML = questions.length; // damit wird die gesamit länge angezeigt bei Frage blabla von (allen Fragen als integer)
  showQuestion();// verbindung zur funktion, dadurch wird sie automatisch aufgerufen
}



function showQuestion(){        //hilfsfunktion um um aktuelle Frage anzuzeigen in der Init
    let question = questions[currentQuestion]; // neuen container namens question definiert in den die Currentquestion(ganzes JsonArray hineinkopiert wird)
    document.getElementById('questiontext').innerHTML = question['question']; // ruft nacheinander die einzelnen inhalter der jeweiligen fragen auf genauso wie die Antworten
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
  }

  function answer(selection){//selcetion hat den wert answer_1,2,3 oder 4 
    let question = questions[currentQuestion]; // um zur aktuellen frage zu kommen
    let selectedQuestionnumber = selection.slice(-1)// der letzte buchstabe des Strings in dem fall die integer 3 wird gespeichert
    
    let idOfRightAnswer = `answer_${question['right_answer']}`; // string definiert um bei falscher antwort die richtige zu highlighten
    
    if(selectedQuestionnumber == question['right_answer']){
      document.getElementById(selection).parentNode.classList.add('bg-success');// parentnode spricht das übergeornete Element an auch wenn es keine eigene ID hat
    } else{ // ansonsten, sag es ist die falsche antwort
      document.getElementById(selection).parentNode.classList.add('bg-danger');
      document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
  }

  function nextQuestion(){
    currentQuestion++; // Wert der Globalen Variable wir erhöhrt um 1, da currentquestion die aktuelle Frage aufruft wird so die nächste frage gespeichert
    showQuestion();// ruft erneut die Funktion auf, aber mit erhötem wert in let question = questions[currentQuestion]; , weil mit ++ erhögt wurde
  }


