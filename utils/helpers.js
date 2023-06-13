module.exports = {
    rando_name: () => {
        let num = Math.floor(Math.random() * 1000)
        let randoUser = 'user' + num
        return randoUser
    }
}