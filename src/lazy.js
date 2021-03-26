// true si está dentro de la pantalla
const isIntersecting = entry => entry.isIntersecting

const accion = entry => {
    const nodo = entry.target
    console.log('Holis')

    // Ahora borremos el listener (unlisten)
    observer.unobserve(nodo)
}

const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(accion)
})

const registerImage = imagen => {
    // Intersection Observer -> observer(imagen)
    observer.observe(imagen)
}

export default registerImage