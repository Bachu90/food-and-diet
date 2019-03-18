document.addEventListener('DOMContentLoaded', function () {
    var sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    var parallax = document.querySelectorAll('.parallax');
    M.Parallax.init(parallax);

    var collapsible = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsible);

    var modal = document.querySelectorAll('.modal');
    M.Modal.init(modal);

    var scrollspy = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(scrollspy);
});