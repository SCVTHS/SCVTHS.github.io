const images = [
    {
        url: 'dom-img.jpg',
        caption: 'Homeless Dude from the Street'
    },
    {
        url: 'IMG_3400.JPG',
        caption: 'Participant in SkillsUSA'
    },
    {
        url: 'IMG_3443.JPG',
        caption: 'One of Our Gold Medal SkillsUSA Winners'
    },
    {
        url: 'IMG_3518.JPG',
        caption: 'Senior in the Computer Science Program'
    },
    {
        url: 'IMG_3532.JPG',
        caption: 'Participant in SkillsUSA'
    },
    {
        url: 'IMG_3579.JPG',
        caption: 'Freshmen in the Computer Science Program'
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
