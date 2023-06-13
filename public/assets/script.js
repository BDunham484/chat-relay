const formSubmitOne = document.getElementById('form-submit-one');
const inputOne = document.getElementById('input-one');
const inputTwo = document.getElementById('input-two');
const nicknameOne = document.getElementById('nickname-one');
const nicknameTwo = document.getElementById('nickname-two');

const getSessName = async () => {
    const res = await fetch('/getSessName', {
        method: 'GET',
    })
    const data = await res.json()
    nicknameOne.value = data;
}

getSessName()

const postText = async (userInput) => {
    try {
        const res = await fetch('/relay', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInput)
        })
        const data = await res.json()
        console.log(data);
        const message = {
            nickname: data.body.nickname,
            message: data.body.message
        }
        
        return message;
    } catch (err) {
        alert(err)
    }
    
}

const submitOneHandler =(e) => {
    e.preventDefault();

    if (nicknameOne.value) {
        let userInput = {
            'nickname': nicknameOne.value,
            'message': inputOne.value
        }
    } else {
        alert('You have to use a nickname');
    }
    

    postText(userInput)
        .then((message) => {
            inputTwo.value = `${message.nickname}: ${message.message}`;
        })
        .catch((err) => console.error(err));
    
    inputOne.value = '';
};

formSubmitOne.addEventListener('click', submitOneHandler);


