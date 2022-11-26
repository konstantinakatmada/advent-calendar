
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
            const calendarDay = document.createElement("div");
            const calendarDayText = document.createElement("div");
            calendarDay.classList.add("image");
            calendarDay.style.gridArea = "day" + (i + 1);
            calendarContainer.appendChild(calendarDay);
            calendarDayText.classList.add("text");
            calendarDayText.innerHTML = i + 1;
            calendarDay.appendChild(calendarDayText);

            const iframeElement = document.createElement('iframe');
            iframeElement.width = "238";
            iframeElement.height = "218";
            iframeElement.src = "https://www.youtube.com/embed/G9d_L6JnkSQ";
            iframeElement.title = "YouTube video player";
            iframeElement.frameborder = "0";
            iframeElement.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            iframeElement.allowfullscreen = true;
            iframeElement.classList.add('video');



            calendarDayText.addEventListener("click", (event) => {
                event.target.parentNode.replaceChildren(iframeElement);
            });
        }
           else if (i === 2) {
                const calendarDay = document.createElement("div");
                const calendarDayText = document.createElement("div");
                calendarDay.classList.add("image");
                calendarDay.style.gridArea = "day" + (i + 1);
                calendarContainer.appendChild(calendarDay);
                calendarDayText.classList.add("text");
                calendarDayText.innerHTML = i + 1;
                calendarDay.appendChild(calendarDayText);
    
                const iframeElement = document.createElement('iframe');
                iframeElement.width = "238";
                iframeElement.height = "218";
                iframeElement.src = 'https://www.youtube.com/embed/-y6t1N8qTIU';
                iframeElement.title = "YouTube video player";
                iframeElement.frameborder = "0";
                iframeElement.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
                iframeElement.allowfullscreen = true;
                iframeElement.classList.add('video');
    
    
    
                calendarDayText.addEventListener("click", (event) => {
                    event.target.parentNode.replaceChildren(iframeElement);
                });
            }
        else if (i === 6) {
            const calendarDay = document.createElement("div");
            const calendarDayText = document.createElement("div");
            calendarDay.classList.add("image");
            calendarDay.style.gridArea = "day" + (i + 1);
            calendarContainer.appendChild(calendarDay);
            calendarDayText.classList.add("text");
            calendarDayText.innerHTML = i + 1;
            calendarDay.appendChild(calendarDayText);

            const iframeElement = document.createElement('iframe');
            iframeElement.width = "238";
            iframeElement.height = "218";
            iframeElement.src = "https://www.youtube.com/embed/jWRbbHe1ryU";
            iframeElement.title = "YouTube video player";
            iframeElement.frameborder = "0";
            iframeElement.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            iframeElement.allowfullscreen = true;
            iframeElement.classList.add('video');



            calendarDayText.addEventListener("click", (event) => {
                event.target.parentNode.replaceChildren(iframeElement);
            });

        } 
        else if (i === 11) {
            const calendarDay = document.createElement("div");
            const calendarDayText = document.createElement("div");
            calendarDay.classList.add("image");
            calendarDay.style.gridArea = "day" + (i + 1);
            calendarContainer.appendChild(calendarDay);
            calendarDayText.classList.add("text");
            calendarDayText.innerHTML = i + 1;
            calendarDay.appendChild(calendarDayText);

            const iframeElement = document.createElement('iframe');
            iframeElement.width = "238";
            iframeElement.height = "218";
            iframeElement.src = "https://www.youtube.com/embed/H2ifOP25wLs";
            iframeElement.title = "YouTube video player";
            iframeElement.frameborder = "0";
            iframeElement.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            iframeElement.allowfullscreen = true;
            iframeElement.classList.add('video');



            calendarDayText.addEventListener("click", (event) => {
                event.target.parentNode.replaceChildren(iframeElement);
            });

        } 
        else if (i === 13) {
            const calendarDay = document.createElement("div");
            const calendarDayText = document.createElement("div");
            calendarDay.classList.add("image");
            calendarDay.style.gridArea = "day" + (i + 1);
            calendarContainer.appendChild(calendarDay);
            calendarDayText.classList.add("text");
            calendarDayText.innerHTML = i + 1;
            calendarDay.appendChild(calendarDayText);

            const iframeElement = document.createElement('iframe');
            iframeElement.width = "238";
            iframeElement.height = "218";
            iframeElement.src = "https://www.youtube.com/embed/ZtjKa72uq9k";
            iframeElement.title = "YouTube video player";
            iframeElement.frameborder = "0";
            iframeElement.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            iframeElement.allowfullscreen = true;
            iframeElement.classList.add('video');



            calendarDayText.addEventListener("click", (event) => {
                event.target.parentNode.replaceChildren(iframeElement);
            });

        } 
        else if (i === 21) {
            const calendarDay = document.createElement("div");
            const calendarDayText = document.createElement("div");
            calendarDay.classList.add("image");
            calendarDay.style.gridArea = "day" + (i + 1);
            calendarContainer.appendChild(calendarDay);
            calendarDayText.classList.add("text");
            calendarDayText.innerHTML = i + 1;
            calendarDay.appendChild(calendarDayText);

            const iframeElement = document.createElement('iframe');
            iframeElement.width = "238";
            iframeElement.height = "218";
            iframeElement.src = "https://www.youtube.com/embed/Oq3gi9IUkws";
            iframeElement.title = "YouTube video player";
            iframeElement.frameborder = "0";
            iframeElement.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            iframeElement.allowfullscreen = true;
            iframeElement.classList.add('video');



            calendarDayText.addEventListener("click", (event) => {
                event.target.parentNode.replaceChildren(iframeElement);
            });
        }
        else if (i === 24) {
            const calendarDay = document.createElement("div");
            const calendarDayText = document.createElement("div");
            calendarDay.classList.add("image");
            calendarDay.style.gridArea = "day" + (i + 1);
            calendarContainer.appendChild(calendarDay);
            calendarDayText.classList.add("text");
            calendarDayText.innerHTML = i + 1;
            calendarDay.appendChild(calendarDayText);

            const iframeElement = document.createElement('iframe');
            iframeElement.width = "238";
            iframeElement.height = "218";
            iframeElement.src = "https://www.youtube.com/embed/f2UnLAU1x_I";
            iframeElement.title = "YouTube video player";
            iframeElement.frameborder = "0";
            iframeElement.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            iframeElement.allowfullscreen = true;
            iframeElement.classList.add('video');



            calendarDayText.addEventListener("click", (event) => {
                event.target.parentNode.replaceChildren(iframeElement);
            });

        } else {

            const calendarDay = document.createElement("div");
            const calendarDayText = document.createElement("div");
            calendarDay.classList.add("image");
            calendarDay.style.gridArea = "day" + (i + 1);
            calendarContainer.appendChild(calendarDay);
            calendarDayText.classList.add("text");
            calendarDayText.innerHTML = i + 1;
            calendarDay.appendChild(calendarDayText);

            const imageNumber = i + 1;
            const imagePath = `./images/image${imageNumber}.jpg`;

            calendarDayText.addEventListener("click", openDay.bind(null, imagePath));
        }
    }
}


calendarButton.addEventListener("click", createCalendar);

