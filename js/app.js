$(function () {
    let login = $('section#login');
    let welcomeMain = $('section#welcome-main-content');
    let fullGradient = $('div#full-gradient-background');
    let submit = $('button#submit');
    let welcomeTop = $('#welcome-top-content');
    let welcomeMiddle = $('#welcome-mmiddle-content');
    let welcomeBottom = $('#welcome-bottom-content');
    let checkingMain = $("#checking-main-content");

    const username = 'aaa';
    const password = 'bbb';
    let inputUserName;
    let inputPassword;

    login.css('visiility', 'visible');
    welcomeMain.css('visibility', 'hidden');
    checkingMain.css('visibility', 'hidden');
    submit.click(loadWelcome);

    function loadWelcome() {
        getUserName();
        getPassword();
        if (inputUserName === username && inputPassword === password) {
        login.css('visibility', 'hidden');
        welcomeMain.css('visibility', 'visible');
        welcomeMain.css('z-index', '5');
        fullGradient.css('visibility', 'hidden');
        let tl = gsap.timeline();
        tl.from(welcomeTop,{opacity: 0, y: -200, duration: 0.8, ease: 'elastic.out(1 0.75)'},'+=0.5');
        tl.from(welcomeMiddle,{opacity: 0, y: 200, duration: 0.8, ease: 'elastic.out(1 0.75)'});
        }   
    }
    function getUserName() {
        $('#username')
        .keyup(function () {
            let userNameValue = $(this).val();
            console.log(userNameValue);
            inputUserName = userNameValue;
        })
        .keyup();
    }
    function getPassword() {
        $('#password')
        .keyup(function () {
            let passwordValue = $(this).val();
            console.log(passwordValue);
            inputPassword = passwordValue;
        })
        .keyup();
    }
})