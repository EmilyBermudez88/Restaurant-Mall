const commentSubmit = document.getElementById('blogForm');

//make arrays for date- so days of week and months are not numbers
const dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday"
]
const monthArray = ["January", "February", "March", "April", "May", "June","July", "August","September", "October", "November","December"]



//add event listener for submit function and override default
commentSubmit.addEventListener('submit', function(event){
    event.preventDefault();

    //put user inputs into variables 
    const inputElement = document.getElementById('name');
    const userName = inputElement.value;

    const inputMessage = document.querySelector('textarea');
    const userMessage = inputMessage.value;

    //if something is left blank, make user go back and fill it in
    if (userName ==="") {
        alert('please fill out your name')
    } else if (userMessage ===""){
        alert('please leave a comment');
    } else {

        //need to display the commentContainer on the page
        const review = document.getElementById('guestReview');

        //remove guestReview class to make comment appear (get rid of display:none)
        review.classList.remove('guestReview');

        // assigning and posting userName
        const reviewName = document.getElementById('guestName');
        reviewName.textContent=` by ${userName}`;

        // getting the current date, and translating it to names instead of all numbers --> then post in h5
        const today = new Date();
        const dayNumber = today.getDay();
        const day = dayArray[dayNumber];
        const date = today.getDate();
        const monthNumber = today.getMonth();
        const month = monthArray[monthNumber];
        const year = today.getFullYear();

        const reviewDate = document.getElementById('commentDate');
        reviewDate.textContent = `${day} ${month} ${date}, ${year}`;
        reviewDate.appendChild(reviewName);

        // store the message inside a variable and post 
        const reviewMessage = document.getElementById('guestComment');
        reviewMessage.textContent=`${userMessage}`;

        //clear the form after submitting
        inputElement.value="";
        inputMessage.value="";
    }
    

})