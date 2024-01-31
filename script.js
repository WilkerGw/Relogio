function carregar() {
    let msg = window.document.getElementById('msg');
    let img = window.document.getElementById('imagem');
    let time = window.document.getElementById('time');
    let dataSist = new Date();
    let hora = dataSist.getHours();
    let dia = dataSist.getDay();
    let min = dataSist.getMinutes();
    let sec = dataSist.getSeconds(); // Adiciona os segundos
    let datan = dataSist.getFullYear();

    // Adiciona um zero à esquerda se os minutos forem menores que 10
    let minutosFormatados = (min < 10) ? '0' + min : min;

    // Adiciona um zero à esquerda se os segundos forem menores que 10
    let segundosFormatados = (sec < 10) ? '0' + sec : sec;

    // Atualiza a exibição da hora, minutos e segundos
    time.innerHTML = `<strong>${hora}:${minutosFormatados}:${segundosFormatados}</strong>`;

    switch (dia){
        case 0: 
        dia = "Domingo"
        break
        case 1: 
        dia = "Segunda"
        break
        case 2: 
        dia = "Terça"
        break
        case 3: 
        dia = "Quarta"
        break
        case 4: 
        dia = "Quinta"
        break
        case 5: 
        dia = "Sexta"
        break
        case 6: 
        dia = "Sábado"
        break
    }

    time.innerHTML += `<p>${dia}-Feira</p>`;
    time.innerHTML += `<p>${datan}</p>`;

    if (hora < 12) {
        msg.innerHTML = 'BOM DIA';
        img.src = 'imagens/manha.JPG';
    } else if (hora <= 18) {
        msg.innerHTML = 'BOA TARDE';
        img.src = 'imagens/tarde.JPG';
    } else if (hora < 24) {
        msg.innerHTML = 'BOA NOITE';
        img.src = 'imagens/noite.JPG';
    }
}

// Chama a função carregar inicialmente
carregar();

// Atualiza a cada segundo
setInterval(carregar, 1000); // 1000 milissegundos = 1 segundo