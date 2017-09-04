var questions = [{
    "question": "What is the Lorem Ipsum?em Ipsem Ipsem Ipsem Ipsem Ipsem Ipsemem Ipsem Ipsem Ipsem Ipsem Ipsem Ips Ipsem Ipsem Ipsem Ipsem Ips",
    "answer1": "Lorem",
    "answer2": "Lorem Ipsum?em Ipsem Ipsem Ipsem Ipsem IpseIpsem Ipsem Ips Ipsem Ipsem Ipsem Ipsum",
    "answer3": "Dolor",
    "answer4": "Nope"
  },
  {
    "question": "What is the Eom Ipsum?",
    "answer1": "Lorem",
    "answer2": "Ipsum",
    "answer3": "Dolor",
    "answer4": "Ne"
  },
  {
    "question": "What he Lorem Ipsum?",
    "answer1": "rem",
    "answer2": "Ipsum",
    "answer3": "Dolor",
    "answer4": "Nope"
  },
  {
    "question": "What safashe Lorem Ipsum?",
    "answer1": "rem",
    "answer2": "Isafaspsum",
    "answer3": "Dolor",
    "answer4": "Nsafaope"
  },
  {
    "question": "What he Lorem Ipsum?",
    "answer1": "rem",
    "answer2": "Ipsum",
    "answer3": "Dolor",
    "answer4": "Nope"
  },
  {
    "question": "What he Lorem Ipsum?",
    "answer1": "rem",
    "answer2": "Ipsum",
    "answer3": "Dolor",
    "answer4": "Nope"
  },
  {
    "question": "What he Lorem Ipsum?",
    "answer1": "rem",
    "answer2": "Ipsum",
    "answer3": "Dolor",
    "answer4": "Nope"
  },
  {
    "question": "What he Lorem Ipsum?",
    "answer1": "rem",
    "answer2": "Ipsum",
    "answer3": "Dolor",
    "answer4": "Nope"
  },
  {
    "question": "What he Lorem Ipsum?",
    "answer1": "rem",
    "answer2": "Ipsum",
    "answer3": "Dolor",
    "answer4": "Nope"
  },
  {
    "question": "What he Lorem Ipsum?",
    "answer1": "rem",
    "answer2": "Ipsum",
    "answer3": "Dolor",
    "answer4": "Nope"
  },
  {
    "question": "What he Lorem Ipsum?",
    "answer1": "rem",
    "answer2": "Ipsum",
    "answer3": "Dolor",
    "answer4": "Nope"
  },
  {
    "question": "What he Lorem Ipsum?",
    "answer1": "rem",
    "answer2": "Ipsum",
    "answer3": "Dolor",
    "answer4": "Nope"
  },
  {
    "question": "What he Lorem Ipsum?",
    "answer1": "rem",
    "answer2": "Ipsum",
    "answer3": "Dolor",
    "answer4": "Nope"
  },
  {
    "question": "What he Lorem Ipsum?",
    "answer1": "rem",
    "answer2": "Ipsum",
    "answer3": "Dolor",
    "answer4": "Nope"
  },
  {
    "question": "What i Ipsum?",
    "answer1": "Lrem",
    "answer2": "Ipum",
    "answer3": "Dlor",
    "answer4": "ope"
  }];

var questionNumber=0;
var container=document.getElementById('test');
var questionName=document.getElementById('questions');
var odp1=document.getElementById('odp1');
var odp2=document.getElementById('odp2');
var odp3=document.getElementById('odp3');
var odp4=document.getElementById('odp4');
var continueButton=document.getElementById('nextQuest');
var continues=document.getElementsByClassName('continues');

odp1.onclick=enableQuestion1;
odp2.onclick=enableQuestion2;
odp3.onclick=enableQuestion3;
odp4.onclick=enableQuestion4;
continueButton.onclick=nextQuestion;
continues[1].onclick=showNext;

loadQuestion(questionNumber);

function loadQuestion(questionIndex)
{
  var x= questions[questionIndex];
  questionName.textContent = (questionIndex+1)+'.'+x.question;
  odp1.textContent = x.answer1;
  odp2.textContent = x.answer2;
  odp3.textContent = x.answer3;
  odp4.textContent = x.answer4;
}

function enableQuestion1()
{
  continueButton.disabled=false;
  odp1.style.backgroundColor="#75accb";
  odp1.style.color="whitesmoke";
  odp2.style.backgroundColor="whitesmoke";
  odp2.style.color="#75accb";
  odp3.style.backgroundColor="whitesmoke";
  odp3.style.color="#75accb";
  odp4.style.backgroundColor="whitesmoke";
  odp4.style.color="#75accb";
}

function enableQuestion2()
{
  continueButton.disabled=false;
  odp2.style.backgroundColor="#75accb";
  odp2.style.color="whitesmoke";
  odp1.style.backgroundColor="whitesmoke";
  odp1.style.color="#75accb";
  odp3.style.backgroundColor="whitesmoke";
  odp3.style.color="#75accb";
  odp4.style.backgroundColor="whitesmoke";
  odp4.style.color="#75accb";
}

function enableQuestion3()
{
  continueButton.disabled=false;
  odp3.style.backgroundColor="#75accb";
  odp3.style.color="whitesmoke";
  odp2.style.backgroundColor="whitesmoke";
  odp2.style.color="#75accb";
  odp1.style.backgroundColor="whitesmoke";
  odp1.style.color="#75accb";
  odp4.style.backgroundColor="whitesmoke";
  odp4.style.color="#75accb";
}

function enableQuestion4()
{
  continueButton.disabled=false;
  odp4.style.backgroundColor="#75accb";
  odp4.style.color="whitesmoke";
  odp2.style.backgroundColor="whitesmoke";
  odp2.style.color="#75accb";
  odp3.style.backgroundColor="whitesmoke";
  odp3.style.color="#75accb";
  odp1.style.backgroundColor="whitesmoke";
  odp1.style.color="#75accb";
}


function enableQuestion()
{
  continueButton.disabled=false;
}


function nextQuestion()
{
  continueButton.disabled=true;
  questionNumber++;
  if(questionNumber<15)
  {
    odp1.style.backgroundColor="whitesmoke";
    odp1.style.color="#75accb";
    odp2.style.backgroundColor="whitesmoke";
    odp2.style.color="#75accb";
    odp3.style.backgroundColor="whitesmoke";
    odp3.style.color="#75accb";
    odp4.style.backgroundColor="whitesmoke";
    odp4.style.color="#75accb";
    loadQuestion(questionNumber);
  }
  else
  {
    document.getElementsByClassName('game')[0].style.display="none";
    document.getElementsByClassName('end')[0].style.display="block";
  }
}

function showNext()
{
  var phoneNumberLength=document.getElementById('phoneNumber').value.length;
  if(phoneNumberLength<9)
  {
    alert("nope!");
  }
  else
  {
    document.getElementsByClassName('phoneSignal')[0].style.display="block";
  }
}
