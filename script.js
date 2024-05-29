const events = {
    "2020-3": {
        description: "COVID-19 pandemic declared by WHO.",
        image: "./images/covid19.jpg"
    },
    "1969-7": {
        description: "Apollo 11 Moon landing.",
        image: "./images/moon_landing.jpg"
    },
    "1989-11": {
        description: "Fall of the Berlin Wall.",
        image: "./images/berlin_wall.jpg"
    },
    "2001-9": {
        description: "9/11 Terrorist Attacks in the USA.",
        image: "./images/911.jpg"
    },
    "1945-5": {
        description: "End of World War II in Europe.",
        image: "./images/ww2_end.jpg"
    },
    "1963-11": {
        description: "Assassination of John F. Kennedy.",
        image: "./images/jfk_assassination.jpg"
    },
    "1990-10": {
        description: "Reunification of Germany.",
        image: "./images/germany_reunification.jpg"
    },
    "2016-11": {
        description: "Donald Trump elected as the 45th President of the United States.",
        image: "./images/trump_election.jpg"
    },
    "2011-3": {
        description: "Fukushima Daiichi nuclear disaster.",
        image: "./images/fukushima.jpg"
    },
    "2004-12": {
        description: "Indian Ocean earthquake and tsunami.",
        image: "./images/indian_ocean_tsunami.jpg"
    },
    "1969-8": {
        description: "First manned mission to orbit the Moon (Apollo 8).",
        image: "./images/apollo8.jpg"
    },
    "2018-7": {
        description: "Thai cave rescue of 12 boys and their soccer coach.",
        image: "./images/thai_cave_rescue.jpg"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    populateYearPicker();
    populateMonthPicker();
});

function populateYearPicker() {
    const yearPicker = document.getElementById("yearPicker");
    const years = Object.keys(events).map(key => key.split('-')[0]);
    const uniqueYears = [...new Set(years)];

    uniqueYears.forEach(year => {
        const option = document.createElement("option");
        option.value = year;
        option.textContent = year;
        yearPicker.appendChild(option);
    });
}

function populateMonthPicker() {
    const monthPicker = document.getElementById("monthPicker");
    const months = [
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"
    ];

    months.forEach(month => {
        const option = document.createElement("option");
        option.value = month;
        option.textContent = month;
        monthPicker.appendChild(option);
    });
}

function showEvent() {
    const year = document.getElementById("yearPicker").value;
    const month = document.getElementById("monthPicker").value;
    const eventKey = `${year}-${month}`;
    const event = events[eventKey];

    if (event) {
        document.getElementById("eventInfo").innerText = event.description;
        const eventImage = document.getElementById("eventImage");
        eventImage.src = event.image;
        eventImage.style.display = 'block';
    } else {
        document.getElementById("eventInfo").innerText = "No event found for this date.";
        document.getElementById("eventImage").style.display = 'none';
    }
}

// EmailJS functionality
document.getElementById("mailForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const emailParams = {
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_ebgi65c", "template_iz2lt2w", emailParams)
        .then(response => {
            alert("Email sent successfully!");
            document.getElementById("mailForm").reset();
        }, error => {
            alert("Failed to send email. Please try again.");
        });
});

document.getElementById("mailButton").onclick = function() {
    document.getElementById("mailModal").style.display = "block";
};

document.querySelector(".close").onclick = function() {
    document.getElementById("mailModal").style.display = "none";
};

window.onclick = function(event) {
    if (event.target == document.getElementById("mailModal")) {
        document.getElementById("mailModal").style.display = "none";
    }
};
