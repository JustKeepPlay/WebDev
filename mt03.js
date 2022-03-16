function capToFront(s) {
    let lower = [...s].filter(x => x === x.toLowerCase())
    let upper = [...s].filter(x => x === x.toUpperCase())
    return [...upper,...lower].join("")
}
console.log(capToFront("hApPy"))
console.log(capToFront("moveMENT"))
console.log(capToFront("shOrtCAKE"))