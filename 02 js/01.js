const personajes = ['Wolverine', 'Magneto', 'Jean', 'Mistique']

// Desestructurar array en constantes
const [p1, p2, p3, p4] = personajes
console.log(p1, p2, p3, p4)
const [, , , metamorfo] = personajes
console.log(metamorfo)


const funRetArr = (valor)=>{
    return [valor,()=>{console.log('log: '+valor)}]
}
const [nombre,imprimirNombre] = funRetArr('Diego')
console.log(nombre)

funRetArr('Anibal')[1]()
imprimirNombre() // desestructurado