function getData() {
    return fetch('https://api.mcstatus.io/v2/status/java/gatokawaiiymagico4.aternos.me')
        .then((response) => {
            if (!response.ok) {
                alert(`Error ${response.status}`)
            } else {
                return response.json();
            }
        })
        .then((raw) => {
            console.log(raw);
            raw.image = {src:raw.icon}
            if (raw.motd.clean.startsWith('This server is offline')) {
                raw.online = false;
            } else {
                raw.online = true;
            };
            return raw;
        })
}

document.addEventListener('DOMContentLoaded',async (event) => {
    let server = await getData();
    document.querySelector('#logo').src=server.image.src;
    document.querySelector('#logo').style.opacity = 1;
    if (!server.online) {
        document.querySelector('#logo').style.filter = 'grayscale(1)';
        document.querySelector('#server-status').textContent = 'Offline';
    } else {
        document.querySelector('#server-status').textContent = 'Online';
    }
    document.querySelector('#server-players').textContent = `${server.players.online}/${server.players.max} Jugando ahora`;
})