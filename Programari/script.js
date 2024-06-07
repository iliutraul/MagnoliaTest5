function animateButtons() {
    const buttons = document.querySelectorAll('.buton');
    let topPosition = 10;
    buttons.forEach((button, index) => {
        button.style.top = topPosition + "%";
        topPosition += 10;
        button.classList.add('animate');
        button.addEventListener('click', function() {
            showCalendar(index); // Apelăm funcția showCalendar cu indexul butonului
        });
    });
}

function showCalendar(index) {
    const calendarContainer = document.getElementById('calendar');
    calendarContainer.style.display = 'block'; // Afișăm calendarul

    const reservationForm = document.getElementById('reservation-form');
    reservationForm.style.display = 'block'; // Afișăm formularul de rezervare

    // Initialize the calendar if not already initialized
    if (!calendarContainer.innerHTML) {
        initializeCalendar();
    }
}

function initializeCalendar() {
    var calendar = new FullCalendar.Calendar(document.getElementById('calendar'), {
        initialView: 'timeGridWeek',
        height: 'auto',
        weekends: true,
        nowIndicator: true,
        headerToolbar: {
            start: 'prev',
            center: 'title',
            end: 'next'
        },
        slotMinTime: '10:00:00',
        slotMaxTime: '23:59:59',
        now: new Date(),
        backgroundColor: 'white',
        eventBackgroundColor: '#bcbcbc',
        eventBorderColor: '#bcbcbc',
        eventTextColor: '#000000',
        events: [],
        slotLabelContent: function(arg) {
            var hour = arg.date.getHours();
            if (hour >= 10 && hour <= 23) {
                return { html: hour + ":00", classList: ['custom-cell'] };
            } else {
                return '';
            }
        }
    });
    calendar.render();
}



/*function saveReservation(date, time, phoneNumber, terrainType) {
    // Obținem o referință către baza de date Firebase
    const database = getDatabase(app);

    // Cream un nou nod pentru rezervare cu o cheie unică generată automat de Firebase
    const newReservationRef = ref(database, 'rezervari').push();

    // Salvăm datele rezervării în nodul nou creat
    set(newReservationRef, {
        date: date,
        time: time,
        phoneNumber: phoneNumber,
        terrainType: terrainType
    }).then(() => {
        console.log('Rezervare salvată cu succes în baza de date Firebase!');
    }).catch((error) => {
        console.error('Eroare la salvarea rezervării în baza de date Firebase:', error);
    });
}*/


var dateInput = document.getElementById('date');

// Obținem data curentă în formatul 'YYYY-MM-DD'
var currentDate = new Date().toISOString().split('T')[0];

// Setăm data minimă pentru câmpul de selectare a datei la data curentă
dateInput.setAttribute('min', currentDate);