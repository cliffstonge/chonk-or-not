$(function(){

    // Header
    // User clicks "start" button and screen scrolls to first question

    $('#startButton').on('click', function(){
        $('html, body').animate({
            scrollTop: $('#section1').offset().top
        }, 1000);
    });

    // Image sections
    // User clicks "yes" or "no" button under individual questions, which hides the buttons and displays response (dertermined by if/else statements)

    $('.question1 .yesButton').on('click', function(){
        $('.question1 button').hide(),
        $('.question1 .answerButtons').append(`<p>Correct: they are chonkerific</p>`)
    });

    $('.question1 .noButton').on('click', function(){
        $('.question1 button').hide(),
        $('.question1 .answerButtons').append(`<p>Incorrect: this is an absolute unit</p>`)
    });

    $('.question2 .yesButton').on('click', function(){
        $('.question2 button').hide(),
        $('.question2 .answerButtons').append(`<p>Correct: they are the goodest of chonkers</p>`)
    });

    $('.question2 .noButton').on('click', function(){
        $('.question2 button').hide(),
        $('.question2 .answerButtons').append(`<p>Incorrect: all chonkers are good chonkers</p>`)
    });
            
    // User clicks "next" button and screen scrolls to next question

    $('#section1 .nextButton').on('click', function(){
        $('html, body').animate({
            scrollTop: $('#section2').offset().top
        }, 1000);
    });

    $('#section2 .nextButton').on('click', function(){
        $('html, body').animate({
            scrollTop: $('#section3').offset().top
        }, 1000);
    });

    $('#section3 .nextButton').on('click', function(){
        $('html, body').animate({
            scrollTop: $('#section4').offset().top
        }, 1000);
    });

    $('#section4 .nextButton').on('click', function(){
        $('html, body').animate({
            scrollTop: $('#section5').offset().top
        }, 1000);
    });

    $('#section5 .nextButton').on('click', function(){
        $('html, body').animate({
            scrollTop: $('#section6').offset().top
        }, 1000);
    });

    $('#section6 .nextButton').on('click', function(){
        $('html, body').animate({
            scrollTop: $('#section7').offset().top
        }, 1000);
    });

    $('#section7 .nextButton').on('click', function(){
        $('html, body').animate({
            scrollTop: $('#section8').offset().top
        }, 1000);
    });

    $('#section8 .nextButton').on('click', function(){
        $('html, body').animate({
            scrollTop: $('#section9').offset().top
        }, 1000);
    });

    $('#section9 .nextButton').on('click', function(){
        $('html, body').animate({
            scrollTop: $('#section10').offset().top
        }, 1000);
    });

    $('#section10 .nextButton').on('click', function(){
        $('html, body').animate({
            scrollTop: $('#closingSection').offset().top
        }, 1000);
    });

    // Closing section
    // User clicks "yes" or "no" button which hides the buttons, displays response (dertermined by if/else statements), and reveals bonus image with restart button (hard refresh)

    
    // "Good, here is a bonus chonker for you" 
    // "No" = "Well the chonky animals did not enjoy you either"
});