// true si está dentro de la pantalla
const isIntersecting = entry => entry.isIntersecting

const loadImage = entry => {
    const container = entry.target // Este es el container DIV
    const imagen = container.querySelector('img')
    const url = imagen.dataset.src

    // Cargar imagen
    imagen.src = url

    loadedImages++;
    printLog();

    // Ahora borremos el listener (unlisten)
    observer.unobserve(container)
}

const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(loadImage)
})

const registerImage = imagen => {
    // Intersection Observer -> observer(imagen)
    observer.observe(imagen)
}

export default registerImage