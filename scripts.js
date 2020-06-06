const chonkApp = {};

chonkApp.init = function(){
    // Header section user clicks "start" button and screen scrolls to first question

    $('.startButton').on('click', function(){
        $('html, body').animate({
            scrollTop: $('#sectionOne').offset().top
        }, 1000);
    });

    // Question section user clicks "yes" or "no" button under individual questions, which hides the buttons and displays response

    $('.answerOneButtons .yesButton').on('click', function(){
        const answer = $(this).attr('data-question');
        $(`.${answer} button`).hide();
        $(`.${answer} .answerOneButtons`).append(`<p>Correct: they are chonkerific</p>`);
    });

    $('.answerOneButtons .noButton').on('click', function(){
        const answer = $(this).attr('data-question');
        $(`.${answer} button`).hide();
        $(`.${answer} .answerOneButtons`).append(`<p>Incorrect: this is an absolute unit</p>`);
    });

    $('.answerTwoButtons .yesButton').on('click', function(){
        const answer = $(this).attr('data-question');
        $(`.${answer} button`).hide();
        $(`.${answer} .answerTwoButtons`).append(`<p>Correct: they are the goodest of chonkers</p>`);
    });

    $('.answerTwoButtons .noButton').on('click', function(){
        const answer = $(this).attr('data-question');
        $(`.${answer} button`).hide();
        $(`.${answer} .answerTwoButtons`).append(`<p>Incorrect: all chonkers are good chonkers</p>`);
    });
            
    // User clicks "next" button and screen scrolls to next question

    $('.nextSection .nextButton').on('click', function(){
        const scrollTo = $(this).attr('data-next');
        $('html, body').animate({
            scrollTop: $(`#${scrollTo}`).offset().top
        }, 1000);
    })

    // Closing section user clicks "yes" or "no" button which hides the buttons, displays response, and reveals bonus image with restart button

    $('.closingQuestion .yesButton').on('click', function(){
        $('.closingQuestion button').hide(),
        $('.closingQuestion .answerButtons').append(`
        <p>Good, here is a bonus chonker for you</p>
        <img src="https://placebear.com/500/500" alt="">
        <button onClick="location.href=location.href">Restart from beginning</button>`)
    });

    $('.closingQuestion .noButton').on('click', function(){
        $('.closingQuestion button').hide(),
        $('.closingQuestion .answerButtons').append(`
        <p>Well the chonky animals did not enjoy you either</p>
        <img src="https://placebear.com/500/500" alt="">
        <button onclick="location.href=location.href">Restart from beginning</button>`)
    });
};

$(function(){
    chonkApp.init();
});