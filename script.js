const images = [
    {
        url: 'images/meet-the-team/akemy-team.JPG',
        caption: 'Participant in SkillsUSA Web-Design Team'
    },
    {
        url: 'images/meet-the-team/armando-team.JPG',
        caption: 'Gold Medal SkillsUSA Winners'
    },
    {
        url: 'images/meet-the-team/dom-team.JPG',
        caption: 'Collaborative Student at SCVTHS'
    },
    {
        url: 'images/meet-the-team/gian-team.JPG',
        caption: 'Participant in SkillsUSA Web-Design Team'
    },
    {
        url: 'images/meet-the-team/gian-team2.JPG',
        caption: 'Participant in SkillsUSA Web-Design Team'
    },
    {
        url: 'images/meet-the-team/kenny-team.JPG',
        caption: 'Senior in the Computer Science Program'
    }
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
