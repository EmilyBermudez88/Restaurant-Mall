///////// IMAGE CAROUSEL /////////// --test 1

//store imageContainers in an array 
const carousel = document.querySelector('.carouselContainer');
const carouselContainer = Array.from(carousel.children);
    // console.log(carouselContainer);

//store arrows into variables
const leftArrow = document.getElementById('left');
const rightArrow = document.getElementById('right');

// EVENT LISTENER: when I click right, pull 'next sibling' and apply class 'topImage'
rightArrow.addEventListener('click', function(){
    //assign values to which slide starts, and how to target following slide
    let currentSlide= document.querySelector('.topImage');
    let nextSlide= currentSlide.nextElementSibling;

    //remove z-index from currentSlide and pass it to nextSlide
    currentSlide.classList.remove('topImage');
    nextSlide.classList.add('topImage');

    //returns null for 'nextElementSibling' at end -- get rid of arrow so user can't click beyond
    if (currentSlide === carouselContainer[2]){
        rightArrow.classList.add('hideArrow');
    }

    //need to have leftArrow appear when not at beginning
    leftArrow.classList.remove('hideArrow');
})

//EVENT LISTENER: when I click left, I pull 'previous sibling' and apply 'topImage'
leftArrow.addEventListener('click', function(){
    //assign values to which slide is on top and how to target previous slide 
    let currentSlide = document.querySelector('.topImage');
    let previousSlide= currentSlide.previousElementSibling;

    //remove z-index from currentSlide and pass it to previousSlide
    currentSlide.classList.remove('topImage');
    previousSlide.classList.add('topImage');

    //returns null once you reach first image -- get rid of arrow so user can't click beyond
    if(currentSlide === carouselContainer[1]){
        leftArrow.classList.add('hideArrow');
    }

    rightArrow.classList.remove('hideArrow');

});







//////////// ENTER TO WIN ////////////

//assign variables to the container to append items to, and variable for button
const giveawayContainer = document.querySelector('.giveawayContainer');
const winButton = document.querySelector('.giveaway a');

//EVENT LISTENER for winButton
winButton.addEventListener('click', function(e){
    e.preventDefault();
    
    //create new div element and append it to page
    const  questionDiv = document.createElement('div');
    giveawayContainer.appendChild(questionDiv);

    //fill that div with html and user input
    questionDiv.innerHTML = '<p>can you answer the following skill testing question correctly?</p><h5>(3 x 50) + 20 / 4 =</h5><label for"mathAnswer" class="sr-only">Answer</label> <input type="text" id="mathAnswer"><button type="submit" class="answerButton">Submit</button>';

    //style the div
    questionDiv.classList.add('questionDiv');

    //create variable for answerButton
    const answerButton = document.querySelector('.answerButton');
    
    //EVENT LISTENER for answerButton
    answerButton.addEventListener('click', function(e){
        e.preventDefault();
        //assign variables to input and to user answer
        const input = document.getElementById('mathAnswer');
        const userInput = input.value;
        if (userInput == 155){
            alert('Congratulations, you have been entered into the draw');
            //correct answer= get rid of question
            questionDiv.innerHTML = "";
            questionDiv.classList.remove('questionDiv');
        } else{
            alert('Sorry, please try again')
        }
        input.value= "";
        
    })
    //don't let the user keep hitting the button and appending multiple div's 
},{once:true});










// fiddle with image

const burgerImage = document.querySelector('.burgerImgContainer');

burgerImage.addEventListener('click', function(){
    burgerImage.style.scale="2";
})
