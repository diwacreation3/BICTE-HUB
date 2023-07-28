// pages
const firstSem = document.getElementById('semF');
const secondSem = document.getElementById('semS');
const thirdSem = document.getElementById('semT');
const fourthSem = document.getElementById('semFo'); // Note: this ID is duplicated, consider changing it to 'semFo' or similar
const fifthSem = document.getElementById('semFi');
const sixthSem = document.getElementById('semSi');
const seventhSem = document.getElementById('semSev');
const eighthSem = document.getElementById('semE');

// URLs for the corresponding pages
const firstURL = 'pages/sem1.html';
const secondURL = 'pages/sem2.html';
const thirdURL = 'pages/sem3.html';
const fourthURL = 'pages/sem4.html';
const fifthURL = 'pages/sem5.html';
const sixthURL = 'pages/sem6.html';
const seventhURL = 'pages/sem7.html';
const eighthURL = 'pages/sem8.html';

// Add click event listeners to each div element
firstSem.addEventListener('click', () => {
  window.location.href = firstURL;
});
secondSem.addEventListener('click', () => {
  window.location.href = secondURL;
});
thirdSem.addEventListener('click', () => {
  window.location.href = thirdURL;
});
fourthSem.addEventListener('click', () => {
  window.location.href = fourthURL;
});
fifthSem.addEventListener('click', () => {
  window.location.href = fifthURL;
});
sixthSem.addEventListener('click', () => {
  window.location.href = sixthURL;
});
seventhSem.addEventListener('click', () => {
  window.location.href = seventhURL;
});
eighthSem.addEventListener('click', () => {
  window.location.href = eighthURL;
});