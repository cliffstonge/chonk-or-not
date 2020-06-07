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
        $(`.${answer} .answerOneButtons`).append(`<p><span>Incorrect: this is an absolute unit</span></p>`);
    });

    $('.answerTwoButtons .yesButton').on('click', function(){
        const answer = $(this).attr('data-question');
        $(`.${answer} button`).hide();
        $(`.${answer} .answerTwoButtons`).append(`<p>Correct: they are the goodest of chonkers</p>`);
    });

    $('.answerTwoButtons .noButton').on('click', function(){
        const answer = $(this).attr('data-question');
        $(`.${answer} button`).hide();
        $(`.${answer} .answerTwoButtons`).append(`<p><span>Incorrect: all chonkers are good chonkers</span></p>`);
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
        $('.closingQuestion .closingButtons').append(`
        <p>Good, here is a bonus chonker for you</p>
        <img src="./images/bonusYes.jpeg" alt="Chonky baby penuin sitting in snow and smiling.">
        <button onclick="location.href=location.href">Restart from beginning</button>`)
    });

    $('.closingQuestion .noButton').on('click', function(){
        $('.closingQuestion button').hide(),
        $('.closingQuestion .closingButtons').append(`
        <p><span>Well the chonky animals did not enjoy you either</span></p>
        <img src="./images/bonusNo.jpeg" alt="Chonky cat sitting outside in grass, looking up and howling.">
        <button onclick="location.href=location.href">Restart from beginning</button>`)
    });
};

$(function(){
    chonkApp.init();
});