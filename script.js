window.onload = function() {
    // Selecting necessary elements
    let imgWarp = document.querySelector(".img-warp");
    let imgBox = document.querySelector(".img-box");
    let originalImg = document.getElementById("originalImg");
    let Line = document.getElementById("line");

    // Function to calculate left space
    function calculateLeftSpace() {
        return imgBox.getBoundingClientRect().left;
    }

    // Setting initial width of original image
    originalImg.style.width = imgBox.offsetWidth + "px";

    // Handling mousemove event
    imgBox.onmousemove = function(e) {
        let leftspace = calculateLeftSpace();
        let boxWidth = (e.pageX - leftspace) + "px";
        imgWarp.style.width = boxWidth;
        Line.style.left = boxWidth;
    }

    // Recalculate leftspace when window is resized
    window.onresize = function() {
        leftspace = calculateLeftSpace();
    }
};

