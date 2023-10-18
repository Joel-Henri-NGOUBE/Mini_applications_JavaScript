let meter = document.querySelector("#meters")
let kilometer = document.querySelector("#kilometers")
let foot = document.querySelector("#feet")

meter.addEventListener("input", () => {
kilometer.value = parseFloat(meter.value) / 1000
foot.value = parseFloat(meter.value) * 0.305
})

kilometer.addEventListener("input", () => {
    meter.value = parseFloat(kilometer.value) * 1000
    foot.value = parseFloat(kilometer.value) * 305
    })

foot.addEventListener("input", () => {
    meter.value = parseFloat(foot.value) * 3.27
    kilometer.value = parseFloat(foot.value) * 0.00327
    })