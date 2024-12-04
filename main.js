document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burgerMenu');
    const slideMenu = document.getElementById('slideMenu');
    // const closeMenu = document.getElementById('closeMenu');
    const buttons =[
        document.querySelector('.menubtn1'),
        document.querySelector('.menubtn2'),
        document.querySelector('.menubtn3'),
        document.getElementById('closeMenu')
    ]

    // Открытие меню
    burgerMenu.addEventListener('click', () => {
        slideMenu.classList.add('open');
    });

    // Закрытие меню
    buttons.forEach(button => {
        if (button){
            button.addEventListener('click',() => {
                slideMenu.classList.remove('open')
            })
        }
    })
});

// Проверка, поддерживает ли устройство сенсорный экран
if ('ontouchstart' in window || navigator.maxTouchPoints) {
    // Убираем эффект hover на мобильных устройствах
    document.body.classList.add('no-hover');
}