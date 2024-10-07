const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
];

let currentIndex = 0;
let countdown = 4;
const timerElement = document.getElementById('timer');
const galleryImage = document.getElementById('gallery-image');

function updateImage(){
    galleryImage.src=images[currentIndex];
    countdown = 5;
    timerElement.textContent = countdown;
}

function startTimer() {
    const interval = setInterval(()=>{
        countdown--;
        timerElement.textContent = countdown;
        if (countdown <= 0){
            currentIndex = (currentIndex + 1) % images.length;
            updateImage();
            changeTitle()
        }
    },1000);
}

updateImage();
startTimer();
;

function changeTitle(){
    document.title = 'Change!'; // Changes title to this after timer 
}
    
