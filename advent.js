const calendarButton = document.querySelector(".btn-start");
const calendarContainer = document.querySelector(".container");
const calendarDays = 25;

const doorsOpened = JSON.parse(localStorage.getItem("doorsOpened")) || []

const setVideo = (i, youtubeURL, isAfterToday) => {
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
    iframeElement.src = youtubeURL;
    iframeElement.title = "YouTube video player";
    iframeElement.frameborder = "0";
    iframeElement.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframeElement.allowfullscreen = true;
    iframeElement.classList.add('video');

    if (doorsOpened.includes(i)) {
        calendarDayText.parentNode.replaceChildren(iframeElement);
    }

    if (!isAfterToday) {
        calendarDayText.addEventListener("click", (event) => {
            doorsOpened.push(i)
            localStorage.setItem('doorsOpened', JSON.stringify(doorsOpened))
            event.target.parentNode.replaceChildren(iframeElement);
        });
    }
}

const createCalendar = () => {
    const todayDate = document.getElementById('start').value;
    for (let i = 0; i < calendarDays; i++) {
        const date = `2022-12-${String(i + 1).padStart(2, '0')}`
        const isAfterToday = todayDate < date
        if (i === 15) {
            setVideo(i, 'https://www.youtube.com/embed/G9d_L6JnkSQ', isAfterToday)
        }
        else if (i === 2) {
            setVideo(i, 'https://www.youtube.com/embed/-y6t1N8qTIU', isAfterToday)
        }
        else if (i === 6) {
            setVideo(i, "https://www.youtube.com/embed/jWRbbHe1ryU", isAfterToday)
        }
        else if (i === 8) {
            setVideo(i, "https://www.youtube.com/embed/f2UnLAU1x_I", isAfterToday)
        }
        else if (i === 11) {
            setVideo(i, "https://www.youtube.com/embed/H2ifOP25wLs", isAfterToday)
        }
        else if (i === 13) {
            setVideo(i, "https://www.youtube.com/embed/ZtjKa72uq9k", isAfterToday)
        }
        else if (i === 21) {
            setVideo(i, "https://www.youtube.com/embed/Oq3gi9IUkws", isAfterToday)
        }
        else if (i === 24) {
            setVideo(i, "https://www.youtube.com/embed/feYR2StoV3s", isAfterToday)
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

            const openDoor = (element) => {
                element.parentNode.style.backgroundImage = `url(${imagePath})`;
                element.style.opacity = "0";
                element.style.backgroundColor = "#521751";
            }
            if (doorsOpened.includes(i)) {
                openDoor(calendarDayText)
            }
            if (!isAfterToday) {
                calendarDayText.addEventListener("click", (event) => {
                    doorsOpened.push(i)
                    localStorage.setItem('doorsOpened', JSON.stringify(doorsOpened))
                    openDoor(event.target)
                }
                );
            }
        }
    }
}

calendarButton.addEventListener("click", createCalendar);


