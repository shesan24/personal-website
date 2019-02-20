//Initialize Firebase
var config = {
    apiKey: "AIzaSyB_lSMScxkoqyhDd-XBCQyhjzO8PkIDnN0",
    authDomain: "personalwebsite-8f9fd.firebaseapp.com",
    databaseURL: "https://personalwebsite-8f9fd.firebaseio.com",
    projectId: "personalwebsite-8f9fd",
    storageBucket: "",
    messagingSenderId: "764262267572"
};

firebase.initializeApp(config);


// References messages collection
let messagesRef = firebase.database().ref('messages');

let contactBtn = document.getElementById('alert');
// Listen for form submit
contactBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let name = document.getElementById('form_name').value;
    let email = document.getElementById('form_email').value;
    let message = document.getElementById('form_message').value;

    if (!name || !email || !message) {
        contactBtn.innerHTML = 'Invalid Inputs';
        contactBtn.disabled = true;
        setTimeout(() => {
            contactBtn.innerHTML = 'Send Message';
            contactBtn.disabled = false;
        }, 3000);
    } else {
        saveMessage(name, email, message);

        //Show Alert
        contactBtn.innerHTML = 'Message Sent';
        contactBtn.disabled = true;

        setTimeout(() => {
            contactBtn.innerHTML = 'Send Message';
            contactBtn.disabled = false;
            document.getElementById('contact-form').reset();
        }, 3000);
    }
})

// Save messages to firebase
function saveMessage(name, email, message) {
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        message: message
    });
}

