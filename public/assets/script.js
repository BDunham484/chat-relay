const formSubmitOne = document.getElementById('form-submit-one');
const inputOne = document.getElementById('input-one');
const inputTwo = document.getElementById('input-two');

const postText = async (userInput) => {
    const res = await fetch('/relay', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInput)
    })
    const data = await res.json()
    const message = data.body.userInput
    console.log('MESSAGE: ' + message)
    return message;
}

const submitOneHandler =(e) => {
    e.preventDefault();

    let userInput = {
        'userInput': inputOne.value
    }

    postText(userInput)
        .then((message) => inputTwo.value = message)
        .catch((err) => console.error(err));
    
    inputOne.value = '';
};

formSubmitOne.addEventListener('click', submitOneHandler);


