$(function () {
    let login = $('section#login');
    let welcomeMain = $('welcome-main-content');
    let fullGradient = $('div#full-gradient-background');
    let submit = $('button#submit');
    let welcomeTop = $('#welcome-top-content');
    let welcomeMiddle = $('#welcome-middle-content');
    let welcomeBottom = $('#welcome-bottom-content');
    let checkingMain = $('#checking-main-content');
    let leftChevron = $('#left');
    let checking_1 = $('#checking-1');
    let checkingData = $('#checking-data');
    let savings = $('#savings');
    let checking = $('#checking');
    let checkingDataDivs = $('.checking-data-divs');

    const username = 'aaa';
    const password = 'bbb';
    let inputUserName;
    let inputPassword;
    let userFName = $('#userFName');

    let transDate = $('.transDate');
    let transAmt = $('.transAmt');
    let transPurc = $('.transPurc');
    let transCard = $('.transCard');

    login.css('visiility', 'visible');
    welcomeMain.css('visibility', 'hidden');
    welcomeTop.css('visibility', 'hidden');
    welcomeMiddle.css('visibility', 'hidden');
    welcomeBottom.css("visibility", "hidden");
    checkingMain.css('visibility', 'hidden');
    submit.click(loadWelcome);

    function loadWelcome() {
        getUserName();
        getPassword();
        if (inputUserName === username && inputPassword === password) {
            getData();
        login.css('visibility', 'hidden');
        welcomeMain.css('visibility', 'visible');
        welcomeMain.css('z-index', '5');
        fullGradient.css('visibility', 'hidden');
        welcomeTop.css('visibility', 'visible');
        welcomeMiddle.css('visibility', 'visible');
        welcomeBottom.css("visibility", "visible");
        let tl = gsap.timeline();
        tl.from(welcomeTop,{opacity: 0, y: -200, duration: 0.8, ease: 'elastic.out(1 0.75)'},'+=0.5');
        tl.from(welcomeMiddle,{opacity: 0, y: 200, duration: 0.8, ease: 'elastic.out(1 0.75)'});
        }   
    }
    
    checking.click(loadChecking);
    function loadChecking() {
        welcomeTop.css('visibility', 'hidden');
        welcomeMiddle.css('visibility', 'hidden');
        checkingMain.css('visibility', 'visible');
        checking_1.css('visibility', 'visible');
        welcomeMain.css('visibility', 'hidden');
        welcomeMain.css('z-index', '4');
        let tl = gsap.timeline();
        tl.from(checkingDataDivs,{opacity: 0, duration: 1, stagger: 0.1, ease: 'power4.out'});
    }

    leftChevron.click(reLoadWelcome);
    function reLoadWelcome() {
        welcomeTop.css('visibility', 'visible');
        welcomeMiddle.css('visibility', 'visible');
        checking_1.css('visibility', 'hidden');
        checkingData.css('visibility', 'hidden');
    }

    function getUserName() {
        $('#username')
        .keyup(function () {
            let userNameValue = $(this).val();
            // console.log(userNameValue);
            inputUserName = userNameValue;
        })
        .keyup();
    }
    function getPassword() {
        $('#password')
        .keyup(function () {
            let passwordValue = $(this).val();
            // console.log(passwordValue);
            inputPassword = passwordValue;
        })
        .keyup();
    }

    function getData () {
        $.ajax({
            url: 'js/data.json',
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                // console.log(data[1].transactionDate[0]);
                userFName.text(data[0].userFName);
                $('#yearJoin').text('Customer since ' + data[0].yearJoined);
                $('#checkingNum').text(data[0].checkingNum);
                $('#checkingBal').text(data[0].checkingBal);
                $('#savingsNum').text(data[0].savingsNum);
                $('#savingsBal').text(data[0].savingsBal);
                for(let i=0; i < 5; i++) {
                    let test = data[1][i].transactionDate;
                    console.log(test);
                    transDate.text(data[1][i].transactionDate);
                }
            }
        })
    }
})