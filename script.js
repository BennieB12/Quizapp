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
  showQuestion();
}



function showQuestion(){        //hilfsfunktion um um aktuelle Frage anzuzeigen in der Init
    let question = questions[currentQuestion]; // neuen container namens question definiert in den die Currentquestion(ganzes JsonArray hineinkopiert wird)
    document.getElementById('questiontext').innerHTML = `${question['question']}`;
    document.getElementById('answer_1').innerHTML = `${question['answer_1']}`;
    document.getElementById('answer_2').innerHTML = `${question['answer_2']}`;
    document.getElementById('answer_3').innerHTML = `${question['answer_3']}`;
    document.getElementById('answer_4').innerHTML = `${question['answer_4']}`;
  }
