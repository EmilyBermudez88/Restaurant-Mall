//MAKING AN IMAGE CAROUSEL

// const galleryImage = document.getElementsByClassName("galleryImgContainer");
// console.log(galleryImage);


// for(i = 0; i < galleryImage.length; i++){
//     galleryImage[i].addEventListener('click', function (event) {
//         console.log(event);
//         event.target.style.display="none";
//         //what if you add a class that you can animate to a larger size, and then toggle on and off so it grows and shrinks?
//     })
// }





//FORM DEBUGGING

//when someone hits 'submit' in either form, an alert comes up to say 'thank you for your feedback, we will get back to you....'
    //an if statement -> if they are missing their name, prompt comes up to add name // else if email is missing, add email - or if missing the correct terminology for email, then prompt comes up // else prompt 'thank you for your feedback, we will get back to you asap'




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
        alert('Thank you for your message! We will be in touch shortly');
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    }
})


//gift card section: 
//if you click 'find out more' - several prompts of information and a skill testing question- if/else statement (if correct, 'congrats', if incorrect' sorry, not qualified )



