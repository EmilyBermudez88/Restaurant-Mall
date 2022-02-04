//comment section- can I figure out if I add a comment in, can I post it onto the actual blog site?

const commentSubmit = document.getElementById('blogForm');

commentSubmit.addEventListener('submit', function(event){
    event.preventDefault();

    const inputElement = document.getElementById('name');
    const userName = inputElement.value;

    const inputMessage = document.querySelector('textarea');
    const userMessage = inputMessage.value;

    if (userName ==="") {
        alert('please fill out your name')
    } else if (userMessage ===""){
        alert('please leave a comment');
    } else {

        //need to display the commentContainer on the page
        const review = document.getElementById('guestReview');

        review.classList.remove('guestReview');

        const reviewName = document.getElementById('guestName');
        reviewName.textContent=`by ${userName}`

        // const today = new Date();
        // const day = today.getDay();
        // const date = today.getDate();
        // const month = today.getMonth() + 1;
        // const year = today.getFullYear();

        // const reviewDate = document.getElementById('commentDate');

        // reviewDate.textContent = `${day} ${month} ${date}, ${year}`

        const reviewMessage = document.getElementById('guestComment');
        reviewMessage.textContent=`${userMessage}`;

        inputElement.value="";
        inputMessage.value="";
    }
    

})