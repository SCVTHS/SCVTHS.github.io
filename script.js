const images = [
    {
        url: 'dom-img.jpg',
        caption: 'Caption for Image 1'
    },
    {
        url: 'py-logo.png',
        caption: 'Caption for Image 2'
    },
    {
        url: 'java-logo.png',
        caption: 'Caption for Image 3'
    },
];

// Function to set a random image and its caption
function setRandomImage(elementId, captionId, availableImages) {
    const randomIndex = Math.floor(Math.random() * availableImages.length);
    const image = availableImages[randomIndex]; // Get the random image object
    document.getElementById(elementId).src = image.url; // Set the image source
    document.getElementById(captionId).innerText = image.caption; // Set the caption text
    availableImages.splice(randomIndex, 1); // Remove the selected image from availableImages
}

// Make a copy of the images array to keep track of available images
const availableImages = [...images];

// Set random images and captions for each team member without duplication
setRandomImage('member1', 'caption1', availableImages);
setRandomImage('member2', 'caption2', availableImages);
setRandomImage('member3', 'caption3', availableImages);
