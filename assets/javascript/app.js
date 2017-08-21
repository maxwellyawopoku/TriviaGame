var allQuestions = [{question: "Question 1: Which of the following is correct?",
                     choices: ["A: jQuery is a JavaScript Library",
                               "B: jQuery is a JavaScript framework",
                               "C: jQuery is a JSON Library",
                               "D: jQuery is a plug-in"],
                     correctAnswer: 0
                    },
                    {question: "Question 2: What sign does jQuery use as a shortcut for jQuery?",
                     choices: ["A:  the % sign",
                               "B: the ? sign",
                               "C: the $ sign",
                               "D: the underscore _ sign"],
                     correctAnswer: 2
                    },
                    {question: "Question 3: Look at the following selector: $('div p'). What does it select?",
                     choices: ["A: All p elements inside a div element",
                               "B: All div elements with a p element",
                               "C: The first p element inside a div element",
                               "D: The first and last p element inside a div element"],
                     correctAnswer: 0
                    },
                    {question: "Question 4: What is the correct jQuery code to set the background color of all p elements to green?",
                     choices: ["A: $('p').layout('background-color','green');",
                               "B: $('p').manipulate('background-color','green');",
                               "C: $('p').css('background-color','green';",
                               "D: ('p').style('background-color','green');"],
                     correctAnswer: 2
                    },
                    {question: "Question 5: Which is the correct jQuery code for making all div elements 80 pixels high?",
                     choices: ["A: $('div').yPos(80)",
                               "B: $('div').height='80'",
                               "C: $(.div).height('80px')",
                               "D: $('div').height(80)"],
                     correctAnswer: 3
                    },
                    {question: "Question 6:Which jQuery method is used to set one or more style properties for selected elements?",
                     choices: ["A: html()",
                               "B: styles()",
                               "C: css()",
                               "D: style()"],
                     correctAnswer: 3
                    },
                    {question: 'Question 7: Look at the following selector: $("p#intro"). What does it select?',
                     choices: ["A: All p elements with class='intro'",
                               "B: All parentheses functions with p#intro",
                               "C: The p element with id='intro'",
                               "D: The first p element with the div 'intro'"],
                     correctAnswer: 2
                    },
                    {question: 'Question 8: Which of the following selects all image elements in the document?',
                     choices: ["A: $(<img>)",
                               "B: $(‘#img’)",
                               "C:$(‘img’)",
                               "D: $(‘.img’)"],
                     correctAnswer: 2
                    },
 {question: 'Question 9:  jQuery selector syntax is based closely on what other web technology?',
                     choices: ["A: Cross-origin resource sharing",
                               "B: HTML5 Canvas commands",
                               "C: CSS Selectors",
                               "D: Geolocation APIs"],
                     correctAnswer: 2
                    },
 {question: 'Question 10: Which of the following selects all elements with class “gallery-item”?',
                     choices: ["A: $(‘#gallery-item’)",
                               "B: $(‘gallery-item’)",
                               "C: $(‘.gallery-item’)",
                               "D: $(‘$gallery-item’)"],
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

    var tallyScore = function() {
        for(var i = 0; i < allQuestionsArrayLength; i++) {
            var findAnswer = allQuestions[i].correctAnswer,
                answerID = "radio-c" + i + "-" + findAnswer;

            //console.log(answerID);
            //console.log(document.getElementById(answerID));
            //console.log(document.getElementById(answerID).checked);
            if(document.getElementById(answerID).checked) {
                //console.log('true');
                numberOfCorrectAnswers++;
                //console.log(numberOfCorrectAnswers);
            }
        }

        $('#score-total').html(numberOfCorrectAnswers);
    };

    //Begin button
    $('#begin-button').click(function() {
        $('#welcome').hide('fast');
        $('.nav-button').show('fast');

        if(questionNavIndex === 0) {
            $('#back-button').hide('fast');
        }

        printQuizQuestions();
        $('#question-0').show('fast');
    });

    //Next button
    $('#next-button').click(function() {
        var questionNavIDToHide = "#question-" + questionNavIndex;

        $(questionNavIDToHide).hide('fast');

        questionNavIndex++

        var questionNavIDToShow = "#question-" + questionNavIndex;

        $(questionNavIDToShow).show('fast');

        if(questionNavIndex >= allQuestionsArrayLength) {
            $('.nav-button').hide('fast');
            tallyScore();
            $('#score').show('fast');
        }

         if(questionNavIndex >= 0) {
            $('#back-button').show('fast');
         }
    });

    //Back button
    $('#back-button').click(function() {
        if(questionNavIndex === 0) {
            $('#back-button').hide('fast');
        }

        var questionNavIDToHide = "#question-" + questionNavIndex;

        $(questionNavIDToHide).hide('fast');

        questionNavIndex--

        var questionNavIDToShow = "#question-" + questionNavIndex;

        $(questionNavIDToShow).show('fast');
    });

    //Retake Quiz button
    $('#retake-button').click(function() {
        $('#quiz').children().remove();
        questionNavIndex = 0
        previousQuizAttempts.push(numberOfCorrectAnswers);
        numberOfCorrectAnswers = 0;
        $('#score').hide('fast');
        $('#welcome').show('fast');

        console.log(previousQuizAttempts);
    });
});