// function changeTheme(theme, btn) {
//     // theme change
//     document.getElementById("theme").href = theme;

//     // remove active class from all buttons
//     const buttons = document.querySelectorAll('.btn');
//     buttons.forEach(b => b.classList.remove('active'));

//     // add active class to the clicked button
//     btn.classList.add('active');
// }


 window.addEventListener('DOMContentLoaded', () => {
    // Default theme
    document.getElementById("theme").href = "classic.css";

    // Active button set
    document.getElementById('btn-classic').classList.add('active');
});

function changeTheme(theme, btn) {
    document.getElementById("theme").href = theme;

    // Remove active from all buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(b => b.classList.remove('active'));

    // Add active to clicked button
    btn.classList.add('active');
}