const images = [
    {
        url: 'SCVTHS.jpg',
        caption: 'Caption for Image 1'
    },
    {
        url: 'laptop.jpg',
        caption: 'Caption for Image 2'
    },
];

// Function to set a random image and its caption
function setRandomImage(elementId, captionId) {
    const randomIndex = Math.floor(Math.random() * images.length);
    const image = images[randomIndex]; // Get the random image object
    document.getElementById(elementId).src = image.url; // Set the image source
    document.getElementById(captionId).innerText = image.caption; // Set the caption text
}

// Set random images and captions for each team member
setRandomImage('member1', 'caption1');
setRandomImage('member3', 'caption3');
