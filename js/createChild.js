function createChild(){
    let div = document.getElementById("childContainer");
    // div.innerHTML += '<p>Ammar</p>'
    let p = document.createElement('p')
    const node = document.createTextNode('Shabbir')
    p.appendChild(node)
    div.appendChild(p)
}