function changeImage(screenWidth) {
    if (screenWidth > 1367) {
        document.getElementById("paralax1").src = "../img/fruits_1920.jpg";
        document.getElementById("paralax2").src = "../img/running_1920.jpg";
    } else if (screenWidth < 1367 && screenWidth > 800) {
        document.getElementById("paralax1").src = "../img/fruits_1366.jpg";
        document.getElementById("paralax2").src = "../img/running_1366.jpg";
    } else if (screenWidth < 800) {
        document.getElementById("paralax1").src = "../img/fruits_mobile.jpg";
        document.getElementById("paralax2").src = "../img/running_mobile.jpg";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    let screenWidth = window.outerHeight;
    changeImage(screenWidth);

    window.addEventListener('resize', function () {
        screenWidth = window.outerHeight
        changeImage(screenWidth);
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

    const modal = document.querySelectorAll('.modal');
    M.Modal.init(modal);

    const scrollspy = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(scrollspy);
});


