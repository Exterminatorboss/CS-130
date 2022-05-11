/**
 * 
 * -------------------------------------
 * DOM Manipulation / Traversal Activity
 * -------------------------------------
 * 
 * 1. Create and attach an event handler (function) to each ".image" 
 * element so that when the ".image" element is clicked, the corresponding 
 * image loads in the .featured image element.
 * 
 * 2. Create event handlers for the next and previous buttons. The next button should
 *    show the next image in the thumbnail list. The previous should show the previous.
 * 
 * 3. If you get to the end, start at the beginning. 
 * 
 * 4. If you get to the beginning, loop around to the end.
 * 
 * 
 */

const images = [
    'images/field1.jpg',
    'images/purple.jpg',
    'images/jar.jpg',
    'images/green.jpg',
    'images/green1.jpg',
    'images/purple1.jpg',
    'images/magnolias.jpg',
    'images/daisy1.jpg'
];

const initScreen = () => {
    images.forEach((image, idx) => {
        document.querySelector('.cards').innerHTML += `
        <li class="card">
            <button class="image" 
                style="background-image:url('${image}')"
                data-index=${idx}"
                aria-label="Displays image ${idx} in the main panel."></button>
        </li>`;
    });
};

initScreen();

////////////////////////////////part 1

const showImage = (ev) => {
    const elem = ev.currentTarget;
    console.log(elem.style.backgroundImage);
    currentIndex = parseInt(elem.dataset.index);
    console.log("currentIndex:", currentIndex);
    const image = images[currentIndex];

    document.querySelector('.featured_image').style.backgroundImage = `url('${image}')`;
};

const imageElements = document.querySelectorAll('.image');

for (const elem of imageElements) {
    elem.onclick = showImage;
}


///////////////////////part 2

//Hint 2: currentIndex as a global variable:
let currentIndex = 0;

// create event handler:

const showNext = (ev) => {
    
    console.log("currentIndex:", currentIndex);
    // update .featured_image
    if ((currentIndex + 1) >= images.length){
        currentIndex = 0;
    } else {
        currentIndex += 1;
    }

    const image = images[currentIndex];
    document.querySelector('.featured_image').style.backgroundImage = `url('${image}')`;
};

const showPrev = (ev) => {
    console.log("currentIndex:", currentIndex);
    // update .featured_image
    if ((currentIndex - 1) < 0){
        currentIndex = (images.length - 1);
    } else {
        currentIndex -= 1;
    }

    const image = images[currentIndex];
    document.querySelector('.featured_image').style.backgroundImage = `url('${image}')`;
};

document.querySelector('.next').onclick = showNext;
document.querySelector('.prev').onclick = showPrev;
document.querySelector('.featured_image').onclick = showNext;



