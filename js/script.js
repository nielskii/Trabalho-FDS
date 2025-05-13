document.getElementById('btn').addEventListener('click',function btn(){
    let p = document.createElement('p')
    let div = document.querySelector('#msg')
    p.textContent = 'Cada linha de código escrita hoje te aproxima do desenvolvedor que você quer ser amanhã.'
    div.appendChild(p)

})