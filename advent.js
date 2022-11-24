//const myIframe= document.getElementById('myIframe');
const calendarButton = document.querySelector(".btn-start");
const calendarContainer = document.querySelector(".container");


const calendarDays = 25;

const openDay = (path, event) => {
    event.target.parentNode.style.backgroundImage = `url(${path})`;
    event.target.style.opacity = "0";
    event.target.style.backgroundColor = "#521751";
}

const createCalendar = () => {
    for (let i = 0; i < calendarDays; i++) {
        if (i === 15) {
            //κώδικας για εισαγωγή βίντεο
            const iframeElement = document.createElement('iframe');
            iframeElement.width = "158";
            iframeElement.height = "178";
            iframeElement.src = "https://www.youtube.com/embed/npnp--SSx_8" 
            iframeElement.title = "YouTube video player";
            iframeElement.frameborder = "0";
            iframeElement.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            iframeElement.allowfullscreen= true;
            iframeElement.classList.add('video');
            calendarContainer.appendChild(iframeElement);
        } else {
            //κώδικας για εισαγωγή εικόνων
            const calendarDay = document.createElement("div");
            const calendarDayText = document.createElement("div");
            calendarDay.classList.add("image");
            calendarDay.style.gridArea = "day" + (i + 1);
            calendarContainer.appendChild(calendarDay);
            

            calendarDayText.classList.add("text");
            calendarDayText.innerHTML = i + 1;
            calendarDay.appendChild(calendarDayText);

            imageNumber = i + 1;
            let imagePath = `./images/image${imageNumber}.jpg`;

            calendarDayText.addEventListener("click", openDay.bind(null, imagePath));
        }
    }
}


calendarButton.addEventListener("click", createCalendar);

