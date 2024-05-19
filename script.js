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
    question: "Was bedeutet das HTML Tag <a>?",
    answer_1: "Fetter Text",
    answer_2: "Ein Link",
    answer_3: "Ein Container",
    answer_4: "Kursiver Text",
    right_answer: 2,
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
let rightAnswers = 0; // Gloabale variable um die richtigen Antworten zu zählen
let Audio_Success = new Audio("./sounds/lose.mp3"); // fügt musik hinzu
let Audio_fail = new Audio("./sounds/win.mp3"); //fügt musik hinzu

function init() {
  document.getElementById("all-questions").innerHTML = questions.length; // damit wird die gesamit länge angezeigt bei Frage blabla von (allen Fragen als integer)
  showQuestion(); // verbindung zur funktion, dadurch wird sie automatisch aufgerufen
}

function showQuestion() {
  //hilfsfunktion um um aktuelle Frage anzuzeigen in der Init

  if (gameIsOver()) { //rufen zur lesbarkeit eine neue funktion auf
    showEndscreen();
  } else {
    // ansonsten mach normal weiter , show question
    updateProgressBar();
    updateToNextQuestion();
    
  }
}
function gameIsOver(){ // funktion gibt nur das if statement aus, dient nur zur lesbarkeit und nicht azur verbesserung ( valiedierung des Ausdrucks)
 return currentQuestion >= questions.length;
}
function answer(selection) {
  //selcetion hat den wert answer_1,2,3 oder 4
  let question = questions[currentQuestion]; // um zur aktuellen frage zu kommen
  let selectedQuestionnumber = selection.slice(-1); // der letzte buchstabe des Strings in dem fall die integer 3 wird gespeichert
  let idOfRightAnswer = `answer_${question["right_answer"]}`; // string definiert um bei falscher antwort die richtige zu highlighten

  if (rightAnswerSelected(selectedQuestionnumber)) { // wenn die richtige numemr die ausgewählt nummer ist
    document.getElementById(selection).parentNode.classList.add("bg-success"); // parentnode spricht das übergeornete Element an auch wenn es keine eigene ID hat
    rightAnswers++; // erhöt bei richtiger antwort die Globale variable um 1fum sie später anzuzeigen
    Audio_Success.play(); // spielt die musik an diser stelle ab
  } else {
    // ansonsten, sag es ist die falsche antwort
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add("bg-success");
    Audio_fail.play(); // spielt sound an dieser Stelle ab
  }
  document.getElementById("next-button").disabled = false; // wir sagen das der wert nun false ist und somit falsch ( also enable)
}

function rightAnswerSelected(selectedQuestionnumber){
  let question = questions[currentQuestion];
  return selectedQuestionnumber == question["right_answer"];
}
function nextQuestion() {
  // löst das anzeigen der n#chsten Frage aus
  currentQuestion++; // Wert der Globalen Variable wir erhöhrt um 1, da currentquestion die aktuelle Frage aufruft wird so die nächste frage gespeichert
  document.getElementById("next-button").disabled = true; // setzt den Button zurück
  resetAnswerButtons(); // ruft funktion zum entfernen der klassen auf
  showQuestion(); // ruft erneut die Funktion auf, aber mit erhötem wert in let question = questions[currentQuestion]; , weil mit ++ erhögt wurde
}

function resetAnswerButtons() {
  document.getElementById("answer_1").parentNode.classList.remove("bg-success");
  document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_2").parentNode.classList.remove("bg-success");
  document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_3").parentNode.classList.remove("bg-success");
  document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_4").parentNode.classList.remove("bg-success");
  document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
}

function restartGame() {
  document.getElementById("show-screen").src = "./img/brainbg.jpg"; // resettes das bild zum neustart des spieles
  document.getElementById("question-card").style -= "display: none"; // entfernt die klasse von der quizkarte
  document.getElementById("end-card").style = "display:none;"; // fügt der endcard eine klasse hinzu

  currentQuestion = 0; // Globale variable wird resettet
  rightAnswers = 0; // Gloabale variable wird resettet

  init(); // startet das Spiel neu
}

function showEndscreen() {
  document.getElementById("end-card").style = ""; // wir greifen auf das HTML tag welches wir gesetzt haben zu ( style ="display:none;") und ersetzt es durch nichts(leere klasse) [show endscreen
  document.getElementById("counter-from").innerHTML = questions.length; // zeigt an wieviele Fragen hätten richtig beantwortet werden können
  document.getElementById("question-counter").innerHTML = rightAnswers; // zeigt an wieviele Fragen richtig beantwortet wurden
  document.getElementById("question-card").style = "display: none"; // sorgt dafür das der andere container ausgeblendet wird! (und der neue direkt zentriert wird)
  document.getElementById("show-screen").src = "./img/brain result.png"; // tauscht das bild vom startscreen mit dem endscreen
}

function updateToNextQuestion() {
  let question = questions[currentQuestion]; // neuen container namens question definiert in den die Currentquestion(ganzes JsonArray hineinkopiert wird)
  document.getElementById("actual-question").innerHTML = currentQuestion + 1; // zeigt die aktuelle Frage an, die.. Frage von 7
  document.getElementById("questiontext").innerHTML = question["question"]; // ruft nacheinander die einzelnen inhalter der jeweiligen fragen auf genauso wie die Antworten
  document.getElementById("answer_1").innerHTML = question["answer_1"]; // antwort 1, 2,3,4 bei jedem Block
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_4"];

}

function updateProgressBar() {
  let percent = (currentQuestion + 1) / questions.length; // zum anzeigen der prozente in der progressbar aus bootstrap| aktuelle frage geteilt durch alle fragen
  
  percent = Math.round(percent * 100); // oben kommt der Wert (0,) raus und dieser Wert wird hier umgewandelt und mit math.round aufgerundet
  
  document.getElementById("progress-bar").innerHTML = `${percent} %`; // in der Progrssbar wird nun der ausgerechnete Wert angezeigt
  document.getElementById("progress-bar").style = `width: ${percent}%;`; // ändern im stylingbereich die weite der progressbar mit style.width zu der größe der Prozentvariable in px
}
  