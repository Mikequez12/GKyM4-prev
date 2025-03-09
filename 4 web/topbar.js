root = document.currentScript.getAttribute('root') == 'true';
document.addEventListener('DOMContentLoaded',(DOMEvent) => {
    document.querySelector('#lateral > #exit').addEventListener('click',function(event) {
        this.classList.toggle('close');
    });
    let topbar = document.body.querySelector('div#lateral');
    layout = {
        Inicio:'./',
        Noticias:'Noticias',
        Reglamento:'Reglamento',
        Discord:'Discord',
        Suscribirse:'Suscribirse',
        Jugadores:'Jugadores',
        Créditos:'Créditos'
    };
    for (let [label,data] of Object.entries(layout)) {
        let button = document.createElement('div');
        button.style.cursor = 'pointer';
        button.id = 'topbar-btn';
        button.textContent = label;
        button.addEventListener('click',(event) => {
            window.location.href = root?data:`../${data}`;
        });
        topbar.appendChild(button);
    }
})