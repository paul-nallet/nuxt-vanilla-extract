export const useMousePosition = () => {
    const mouse = reactive({ x: 0, y: 0 })

    if (process.client) {
        const updateMouse = (e: MouseEvent) => {
            mouse.x = e.pageX
            mouse.y = e.pageY
        }

        window.addEventListener('mousemove', updateMouse)
    }

    return mouse
}
