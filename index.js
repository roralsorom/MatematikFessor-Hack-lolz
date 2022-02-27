console.clear()

console.log('%c [+] ', 'background: #222; color: #00FFFF', 'Emat Hack loaded');

console.log("Searching for question");

var question1 = document.getElementsByClassName('mjx-char MJXc-TeX-main-R')[0].innerText;

var sss = document.getElementsByClassName('mjx-char MJXc-TeX-main-R').innerText;

var question2 = document.getElementsByClassName('mjx-char MJXc-TeX-main-R')[2].innerText;

console.log("Found Question: " + question1, question2);

anssss = question1 * question2;

console.log("Answer: "  + anssss);

console.log("Clearing Interval in 10 seconds");

const sleep = ms => new Promise(r => setTimeout(r, ms));

await sleep(10000);

console.clear();


