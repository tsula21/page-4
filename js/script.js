// VARIABLES
// MAIN MENU
const home = document.querySelector('#home');
const about = document.querySelector('#about');
const portfolio = document.querySelector('#portfolio');
const contact = document.querySelector('#contact');
const body = document.querySelector('body');
const sentSms = document.querySelector('.sent');
const button = document.querySelector('button');

// ADRESS(URL)
const page1 = "file:///C:/Users/user/Desktop/Themeforest_Portfolio/page_1/Themeforest_1.html";
const page2 = "file:///C:/Users/user/Desktop/Themeforest_Portfolio/page_2/Themeforest_2.html";
const page3 = "file:///C:/Users/user/Desktop/Themeforest_Portfolio/page_3/Themeforest_3.html";
const page4 = "file:///C:/Users/user/Desktop/Themeforest_Portfolio/page_4/Themeforest_4.html";

// Event Listeners
// MAIN MENU
home.addEventListener('click', () => {
    window.open(page1, '_top');
});

about.addEventListener('click', () => {
    window.open(page2, '_top');
});

portfolio.addEventListener('click', () => {
    window.open(page3, '_top');
});

contact.addEventListener('click', () => {
    window.open(page4, '_top');
});

// SMS SENT

button.addEventListener('click', showSentSms);

function showSentSms(){
    sentSms.classList.add('active');
    setTimeout(hideSentSms, 3000);
}

function hideSentSms(){
    sentSms.classList.remove('active');
}