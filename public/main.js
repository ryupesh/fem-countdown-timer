const timer = document.querySelector('[data-timer]');

const countdownCalc = function() {

    let date = new Date();
    let launchDate = new Date('August 31, 2022 00:00:00');
    const timeLeft = launchDate - date;

    let day = 24 * 60 * 60 * 1000;
    let hr = 60 * 60 * 1000;
    let min = 60 * 1000;

    let timeCounted = [{
            timeNum: Math.floor(timeLeft / day),
            timeText: 'Days'
        },
        {
            timeNum: Math.floor((timeLeft % day) / hr),
            timeText: 'Hours'
        },
        {
            timeNum: Math.floor((timeLeft % hr) / min),
            timeText: 'Minutes'
        },
        {
            timeNum: Math.floor((timeLeft % min) / 1000),
            timeText: 'Seconds'
        }
    ];

    let html = '';
    timeCounted.forEach((time, i) => {
        timeNum = time.timeNum
            .toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false,
            });
        // to show double digits 01, 02, 03,...
        timeText = time.timeText;

        html += `
                    <div>
                        <div class="time-num-wrapper">
                            <span class="flip"></span>
                            <span class="time-num">${timeNum}</span>
                        </div>
                        <h2 class="time-text">${timeText}</h2>
                    </div>
                    `;
    });
    timer.innerHTML = html;


    if (timeLeft !== 0) {
        // adding animation
        let timerArray = Array.from(timer.children);

        // Adding animate class on span.flip element
        // span.flip = timerArray[0,1,2,3].children[0].children[0]

        // timerArray[3] = div for Seconds
        // timerArray[2] = div for Minutes
        // timerArray[1] = div for Hours
        // timerArray[0] = div for Days


        //Adding animation on seconds count
        timerArray[3].children[0].children[0].classList.add(`animate-[flip-card_1s]`);

        // Adding animation on Minutes count 
        // If Seconds == 00
        if (timerArray[3].children[0].children[1].textContent == '00') {
            timerArray[2].children[0].children[0].classList.add(`animate-[flip-card_1s]`);
        }


        // Adding animation on Hours count 
        // If Minutes == 00
        if (timerArray[2].children[0].children[1].textContent == '00') {
            timerArray[1].children[0].children[0].classList.add(`animate-[flip-card_1s]`);
        }


        // Adding animation on Days count 
        // If Hours == 00
        if (timerArray[1].children[0].children[1].textContent == '00') {
            timerArray[0].children[0].children[0].classList.add(`animate-[flip-card_1s]`);
        }
    }

};


// countdownCalc();
setInterval(countdownCalc, 1000);