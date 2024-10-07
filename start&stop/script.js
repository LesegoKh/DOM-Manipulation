const images = [
    './images/image0.jpg',
    './images/image1.jpg', 
    './images/image2.jpg',
    './images/image3.jpg',
    './images/image4.jpg',
    './images/image5.jpg',
    './images/image6.jpg',
    './images/image7.jpg',
];

let currentIndex = 0;
let countdown = 5;
let timerInterval; // Stores the timers Interval
const timerElement = document.getElementById('timer');
const galleryImage = document.getElementById('gallery-image');
const startButton = document.getElementById ('start-btn');
const stopButton = document.getElementById('stop-btn');

function updateImage(){
    galleryImage.src = images[currentIndex];
    countdown = 3;
    timerElement.textContent = countdown;
}
function startTimer(){
    if (!timerInterval){
        timerInterval = setInterval(()=>{
            countdown--;
            timerElement.textContent = countdown;
            if (countdown <=0){
                currentIndex = (currentIndex + 1) % images.length;
                updateImage();
            }
        },1000);
    }
}

function stopTimer(){
    clearInterval(timerInterval);
    timerInterval = null;
}
//Listeners
startButton.addEventListener('click',startTimer);
stopButton.addEventListener('click',stopTimer);

updateImage();