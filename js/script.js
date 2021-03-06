function changeImage(screenWidth) {
    if (screenWidth > 1367) {
        document.getElementById("paralax1").src = "../img/fruits_1920.jpg";
        document.getElementById("paralax2").src = "../img/salad_1920.jpg";
    } else if (screenWidth < 1367 && screenWidth > 800) {
        document.getElementById("paralax1").src = "../img/fruits_1366.jpg";
        document.getElementById("paralax2").src = "../img/salad_1366.jpg";
    } else if (screenWidth < 800) {
        document.getElementById("paralax1").src = "../img/fruits_mobile.jpg";
        document.getElementById("paralax2").src = "../img/salad_mobile.jpg";
    }
}

document.addEventListener('DOMContentLoaded', function () {

    /* Navbar switch */

    let navbar = document.querySelector('nav');
    let windowPosY = window.scrollY;
    
    function navbarSwitch() {
        if(windowPosY >= 100){
            if((window.scrollY > windowPosY) && !navbar.classList.contains('hidden')){
                navbar.classList.add('hidden');  
            }else if((window.scrollY < windowPosY) && navbar.classList.contains('hidden')){
                navbar.classList.remove('hidden');
            }
        }
        windowPosY = window.scrollY;
    }

    window.addEventListener('scroll', navbarSwitch);

    /* Change Images */

    let screenWidth = window.outerHeight;
    changeImage(screenWidth);

    window.addEventListener('resize', function () {
        screenWidth = window.outerHeight
        changeImage(screenWidth);
    })

    /* Sending email */

    const form = document.getElementById("contact-form");
    const formAlert = document.getElementById("form-alert");



    function sendEmail(e) {
        e.preventDefault();
        formAlert.className = '';
        formAlert.innerHTML = 'Wysyłanie wiadomości...';

        const data = {
            "first_name": form['first_name'].value,
            "email": form['email'].value,
            "subject": form['subject'].value,
            "message": form['message'].value
        };

        if(!form.classList.contains('hidden')){
            form.classList.add('hidden');
        }

        console.log(data);

        fetch("https://food-and-diet.pl/email", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        }).then(response => {
            if (response.ok && response.status == 200) {
                console.log("Wysłane!")
                setTimeout(() => {
                    formAlert.className = 'success';
                    formAlert.innerHTML = "Wiadomość została wysłana";
                }, 1000)  
            }
        }).catch(err => {
            console.log(err.message)
            setTimeout(() => {
                formAlert.className = 'fail';
                formAlert.innerHTML = "Błąd! Wiadomość nie została wysłana";
            }, 1000)
        }).finally(()=>{
            if(form.classList.contains('hidden')){
                setTimeout(()=> {
                    form.classList.remove('hidden');
                    form.reset()
                }, 1000)
            }
        })
    }

    form.addEventListener('submit', e => {
        sendEmail(e);
    })

    /* Materialize Stuff */
    const sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    const parallax = document.querySelectorAll('.parallax');
    M.Parallax.init(parallax);

    const collapsible = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsible, { accordion: false });

    const tabs = document.querySelectorAll('.tabs');
    M.Tabs.init(tabs);

    const scrollspy = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(scrollspy);
});


