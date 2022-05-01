
let soma
function rd3() {
    let l1n1 = document.getElementById('l1n1')
    let l1n2 = document.getElementById('l1n2')
    let l2n1 = document.getElementById('l2n1')

    l1n1 = Number(l1n1.value)
    l1n2 = Number(l1n2.value)
    l2n1 = Number(l2n1.value)

    soma = (l1n2 * l2n1) / l1n1

    let res = document.getElementById('res')
    res.placeholder = `${soma.toFixed(3)}`
}
function rd3i() {
    let l1n1 = document.getElementById('l1n1')
    let l1n2 = document.getElementById('l1n2')
    let l2n1 = document.getElementById('l2n1')

    l1n1 = Number(l1n1.value)
    l1n2 = Number(l1n2.value)
    l2n1 = Number(l2n1.value)

    soma = (l1n1 * l1n2) / l2n1  

    let res = document.getElementById('res')
    res.placeholder = `${soma.toFixed(3)}`
}
