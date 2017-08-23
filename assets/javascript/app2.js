var allQuestions = [{question: "Question 1: He won a noble peace price for his work and also the 7th Secretary-General of the United Nations?",
                     choices: ["A: Nelson Mandela",
                               "B: Kwame Nkrumah",
                               "C: Kofi Annan",
                               "D: Jomo Kenyatta"],
                     correctAnswer: 2
                    },
                    {question: "Question 2: He is one of the founding members of Organization of African Unity (OAU) and the first President African to win independece from the British?",
                     choices: ["A: Nelson Mandela",
                               "B: Jomo Kenyatta",
                               "C: Kwame Nkrumah",
                               "D: Haile Selassie"],
                     correctAnswer: 2
                    },
                    {question: "Question 3: The first Africa's elected female president?",
                     choices: ["A: Ellen Johnson-Sirleaf",
                               "B: Willie Mandela",
                               "C: Yaa Asantewa",
                               "D: Funmilayo Ransome Kuti"],
                     correctAnswer: 0
                    },
                    {question: "Question 4: He was a military captain, pan-African theorist, Marxist revolutionary and feminist. He was assassinated by an armed group on October 15, 1987?",
                     choices: ["A: Samora Machel",
                               "B: Jomo Kenyatta",
                               "C: Thomas Sankara",
                               "D: Alpha Oumar Konare"],
                     correctAnswer: 2
                    },
                    {question: "Question 5: He was involvement in South Africa’s anti-apartheid movement and later became the President of South Africa on 10 May 1994?",
                     choices: ["A: Kofi Annan",
                               "B: Willie Mandela",
                               "C: Jomo Kenyatta",
                               "D: Nelson Mandela"],
                     correctAnswer: 3
                    },
                    {question: "Question 6: He was a member of the Solomonic Dynasty. He served Ethiopia as its emperor from 1930 to 1974?",
                     choices: ["A: Samora Machel",
                               "B: Jomo Kenyatta",
                               "C: Julius Nyerere",
                               "D: Haile Selassie"],
                     correctAnswer: 3
                    },
                    {question: 'Question 7: The first President of Kenya. Kenya gained independence in 1963?',
                     choices: ["A: Robert Mugabe",
                               "B: Marcus Garvey",
                               "C: Jomo Kenyatta",
                               "D: Olusegun Obasanjo"],
                     correctAnswer: 2
                    },
                    {question: 'Question 8: A great king and conqueror. He lived in an area of south-east Africa between the Drakensberg and the Indian Ocean?',
                     choices: ["A: Mansa Musa",
                               "B: Kaku Ackah",
                               "C: Asebu Amenfi",
                               "D: Shaka Zulu"],
                     correctAnswer: 3
                    },
 {question: 'Question 9:  A Zimbabwean revolutionary and politician who has been President of Zimbabwe since 1980?',
                     choices: ["Morgan Tsvangirai",
                               "B: Marcus Garvey",
                               "C: Julius Nyerere",
                               "D: Robert Mugabe"],
                     correctAnswer: 3
                    },
 {question: 'Question 10: A South African activist and politician who has held several government positions and headed the African National Congress Women League?',
                     choices: ["A: Nelson Mandela",
                               "B: Robert Mugabe",
                               "C: Winnie Mandela",
                               "D: Jacob Zuma"],
                     correctAnswer: 2
                    },
  
                    ];


$(document).ready(function() {

    var questionNavIndex = 0,
        numberOfCorrectAnswers = 0,
        previousQuizAttempts = [],
        allQuestionsArrayLength = allQuestions.length;

    var printQuizQuestions = function() {
        for(var loopIndexQuestion = 0; loopIndexQuestion < allQuestionsArrayLength; loopIndexQuestion++) {
            var pathToQuestion = allQuestions[loopIndexQuestion].question,
                pathToChoices = allQuestions[loopIndexQuestion].choices,
                questionsDivElementID = "question-" + loopIndexQuestion,
                questionsDivElement = "<div class='question-container' id='" + questionsDivElementID + "'></div>",
                hastagDivElement = "#" + questionsDivElementID,
                questionID = "q"+ loopIndexQuestion,
                questionTag = "<p class='question' id='" + questionID + "'>" + pathToQuestion + "</div>";

            $('#quiz').append(questionsDivElement);
            $(hastagDivElement).append(questionTag);

            for(var loopIndexChoices = 0, x = pathToChoices.length; loopIndexChoices < x; loopIndexChoices++) {
                var choicesID = "c" + loopIndexQuestion + "-" + loopIndexChoices,
                    choicesTag = "<label class='radio-label' id='" + choicesID + "'>" +
                                 "<input type='radio' name='quiz-radio-button-" + loopIndexQuestion + "' id='radio-" + choicesID +
                                 "'>   " +  pathToChoices[loopIndexChoices] + "</label>";

                $(hastagDivElement).append(choicesTag);
            }

            $(hastagDivElement).hide();
        }
    };

    


    //Begin button
    $("#begin-button").click(function() {
        $("#welcome").hide("fast");
        $(".nav-button").show("fast");

        if(questionNavIndex === 0) {
            $("#back-button").hide("fast");
        }

        printQuizQuestions();
        $("#question-0").show("fast");
    });

    //Next button
    $("#next-button").click(function() {
        var questionNavIDToHide = "#question-" + questionNavIndex;

        $(questionNavIDToHide).hide('fast');

        questionNavIndex++

        var questionNavIDToShow = "#question-" + questionNavIndex;

        $(questionNavIDToShow).show('fast');

        if(questionNavIndex >= allQuestionsArrayLength) {
            $(".nav-button").hide('fast');
            tallyScore();
            $("#score").show('fast');
        }

         if(questionNavIndex >= 0) {
            $("#back-button").show('fast');
         }
    });

    //Back button
    $("#back-button").click(function() {
        if(questionNavIndex === 0) {
            $("#back-button").hide('fast');
        }

        var questionNavIDToHide = "#question-" + questionNavIndex;

        $(questionNavIDToHide).hide('fast');

        questionNavIndex--

        var questionNavIDToShow = "#question-" + questionNavIndex;

        $(questionNavIDToShow).show('fast');
    });

    // //Retake Quiz button
    // $('#retake-button').click(function() {
    //     $('#quiz').children().remove();
    //     questionNavIndex = 0
    //     previousQuizAttempts.push(numberOfCorrectAnswers);
    //     numberOfCorrectAnswers = 0;
    //     $('#score').hide('fast');
    //     $('#welcome').show('fast');

    //     console.log(previousQuizAttempts);
    // });


    //  Interval Demonstration***************************************************************************
    //  Set our number counter to 100.
    var number = 6;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

    var clockRunning = true;

    //  When the stop button gets clicked, run the stop function.
    // $("#stop").on("click", stop);

    //  When the resume button gets clicked, execute the run function.
    $("#begin-button").on("click", run);

    //  The run function sets an interval
    //  that runs the decrement function once a second.
    function run() {
      if (clockRunning === true) {
       clockRunning = false;
       intervalId = setInterval(decrement, 1000);
       
      }
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#timeRemaining").html("<h2>" + number + "</h2>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        
         $('#quiz').children().remove();
        questionNavIndex = 0
        // previousQuizAttempts.push(numberOfCorrectAnswers);
       
        $('#score').show('fast');
        $('#welcome').hide('fast');


        //  Alert the user that time is up.
       $("#timeRemaining").text("Time Up!");
       stop();
      }
    }
    var tallyScore = function() {
        for(var i = 0; i < allQuestionsArrayLength; i++) {
            var findAnswer = allQuestions[i].correctAnswer,
                answerID = "radio-c" + i + "-" + findAnswer;

            // console.log(answerID);
            // console.log(document.getElementById(answerID));
            //console.log(document.getElementById(answerID).checked);
            if(document.getElementById(answerID).checked) {
                //console.log('true');
                numberOfCorrectAnswers++;
                //console.log(numberOfCorrectAnswers);

            }

        }

       $("#score-total").text(numberOfCorrectAnswers); 
    };

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clockRunning = false;
      clearInterval(intervalId);
      $(".nav-button").html("");
    }

    //  Execute the run function.
    // run();


    
    });
