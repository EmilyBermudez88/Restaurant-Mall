//SECOND TRY AT IMAGE GALLERY

const imageArray = [
    './assets/gallery-image-1.jpg',
    './assets/gallery-image-2.jpg',
    './assets/gallery-image-3.jpg',
    './assets/blog-side-image.jpg'
]

//define what the current slide in the array is:
let currentSlide = imageArray[0];
console.log(imageArray);

//define the container in which the image paths are going to be placed into:
const imageOnDisplay = document.querySelector('img');
const imageSrc = imageOnDisplay.attributes[0];
console.log(imageSrc);


//store arrows into variables
const arrows = document.querySelectorAll('.carousel i');
console.log(arrows);
const leftArrow = document.getElementById('left');
const rightArrow = document.getElementById('right');



arrows.forEach(function (individualArrow) {
    individualArrow.addEventListener('click', function () {
        const index = imageArray.indexOf(currentSlide);
        console.log(index);
        if (index <= 1) {
            leftArrow.classList.add('hideArrow')
        } else if (index === 2) {
            rightArrow.classList.add('hideArrow')
        }

        if (this === rightArrow) {
            leftArrow.classList.remove('hideArrow');
            currentSlide = imageArray[index + 1];
            console.log(currentSlide)

        } else if (this === leftArrow) {
            rightArrow.classList.remove('hideArrow');
            currentSlide = imageArray[index - 1];
            console.log(currentSlide);
        }

        imageSrc.textContent = `${currentSlide}`;
    })
})



//FORM DEBUGGING

//when someone hits 'submit' in either form, an alert comes up to say 'thank you for your feedback, we will get back to you....'
    
//define variables for each of the different inputs: name, email and message (so you can personalize messages)

//an IF/ELSE statement -> if they are missing their name, prompt comes up to add name // else if email is missing, add email - or if missing the correct terminology for email, then prompt comes up // else prompt 'thank you for your feedback, we will get back to you asap'


const formSubmit = document.getElementById('contactForm');
formSubmit.addEventListener('submit', function(event){
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const userName = nameInput.value;
    const userEmail = emailInput.value;
    const userMessage = messageInput.value;
    
    if (userName === "") {
        alert('Sorry, you forgot to include your name. Please include so we know who to contact!');
    } else if(userEmail === ""){
        alert(`Sorry ${userName}, you forgot your email. Please include it so we can get in touch!`);
    } else if (userMessage ===""){
        alert(`Would you like to tell us something ${userName}? Please leave us a message.`);
    } else {
        const newElement = document.createElement('h4');
        formSubmit.append(newElement);
        newElement.textContent = `Thank you for your message ${userName}! We will be in touch shortly!`
        newElement.style.margin="20px 0 0 0";
        
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';

        setTimeout(function () {
            newElement.style.display = "none"
        }, 2500);
    }

    
})


