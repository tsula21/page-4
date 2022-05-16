// VARIABLES
// MAIN MENU
const home = document.querySelector('#home');
const about = document.querySelector('#about');
const portfolio = document.querySelector('#portfolio');
const contact = document.querySelector('#contact');
const body = document.querySelector('body');
const sentSms = document.querySelector('.sent');
const button = document.querySelector('button');
// resp menu
const menuBar = document.querySelector('.barMenuBtn');
const closeMenu = document.querySelector('.closebtn');
const allSideBar = document.querySelector('.responsive__menu');

// ADRESS(URL)
const page1 = "https://tsula21.github.io/page-1/";
const page2 = "https://tsula21.github.io/page-2/";
const page3 = "https://tsula21.github.io/page-3/";
const page4 = "https://tsula21.github.io/page-4/";

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

menuBar.addEventListener('click',openMenu);
closeMenu.addEventListener('click',menuCloes);

// SMS SENT

button.addEventListener('click', showSentSms);

function showSentSms(){
    sentSms.classList.add('active');
    setTimeout(hideSentSms, 3000);
}

function hideSentSms(){
    sentSms.classList.remove('active');
}

function openMenu(){
    menuBar.classList.add('active');
    closeMenu.classList.add('active');
    allSideBar.classList.add('active');
}

function menuCloes(){
    closeMenu.classList.remove('active');
    menuBar.classList.remove('active');
    allSideBar.classList.remove('active');
}