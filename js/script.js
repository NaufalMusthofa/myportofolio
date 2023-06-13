// sidenav untuk icon navbar
const sidenav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sidenav);


// slider untuk gambar hero
const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
    indicators: false,
    heigt: 500,
    transition: 300,
    interval: 3000
});


// parallax gambar
const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);


// materialbox dari gambar portfolio
const materialbox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialbox);

// scroll
const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll);