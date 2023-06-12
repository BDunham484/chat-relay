const formSubmitOne = document.getElementById('form-submit-one');
const inputOne = document.getElementById('input-one');
const inputTwo = document.getElementById('input-tow');

const postText = (userInput) => {
    console.log('USERINPUT')
    console.log(userInput)
    fetch('/relay', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInput)
    })
    .then((res) => res.json())
    .then((data) => {
        console.log('RETURNEDDATA')
        console.log(data)
        return data
    })
    .catch((err) => {
        console.error('ERROR IN POST REQUEST: ', err);
    })
}

const submitOneHandler =(e) => {
    e.preventDefault();

    let userInput = {
        'userInput': inputOne.value
    }

    postText(userInput).then((data) => console.log(data));

    inputTwo.value = userInput.userInput
    inputOne.value = '';
};

formSubmitOne.addEventListener('click', submitOneHandler);


