import {
  setCustomProperty,
  incrementCustomProperty,
  getCustomProperty,
} from "./updateCustomProperty.js"

const SPEED = 0.05
const CACTUS_INTERVAL_MIN = 500
const CACTUS_INTERVAL_MAX = 2000
const woldElem = document.querySelector("[data-world]")

let nextCactusTime
export function setupCactus() {
  nextCactusTime = CACTUS_INTERVAL_MIN
  document.querySelectorAll("[data-cactus]").forEach(cactus=>{
    cactus.remove() 
  })
}

export function updateCactus(delta, speedScale){
  document.querySelectorAll("[data-cactus]").forEach(cactus => {
    incrementCustomProperty(cactus, "--left", delta * speedScale *SPEED * -1)
    if (getCustomProperty(cactus,"--left") <= -100) {
      cactus.remove()
    }
  }
    
    )
}