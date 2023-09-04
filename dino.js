import{
    incrementCustomProperty,
    setCustomProperty,
    getCustomProperty,
} from ".updateCustomProperty.js"

const dinoElem = document.querySelector("[data-dino]")
const JUMP_SPEED = 0.45
const GRAVITY = 0.0015
const DINO_FRAME_COUNT = 2
const FRAME_TIME = 100

let isJumping
let dinoFrame
let currentFrameTime
let yVelocity
export function setupDino() {
    isJumping = false
    dinoFrame = 0
    currentFrameTime = 0
    yVelocity = 0
    setCustomProperty(dinoElem, "--bottom",0)
}

export function updateDino(delta, speedScale) {
    handleRun(delta,speedScale)
    handleJump(delta)
}
export function getDinoRect() {
    return dinoElem.getBoundingClientRect()
}

export function setDinoLose() {
    dinoElen.src = "imgs/dino-loe.png"
}

function handleRun(delta, speedScale) {
    if(is isJumping) {
        dinoElem.src = "imgs/dino-stationary.png"
        return
    }
    if (currentFrameTime >= FRAME_TIME) {
        dinoFrame = (dinoFrame + 1) % DINO_FRAME_COUNT
    }