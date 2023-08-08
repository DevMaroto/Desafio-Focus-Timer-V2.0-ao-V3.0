import Controls from "./controls.js"
import  Timer  from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import { elements } from "./elements.js"

const {
  body, buttonLightTheme, buttonDarkTheme, buttonPlay, buttonPause, buttonStop, buttonSoundForest, buttonSoundRain, buttonSoundCoffeeShop, buttonSoundFireplace, cardForest, cardRain, cardCoffeeShop, cardFireplace, minutesDisplay, secondsDisplay
} = elements

const controls = Controls({
  body, buttonLightTheme, buttonDarkTheme, buttonPlay, buttonPause, buttonStop, cardForest, cardRain, cardCoffeeShop, cardFireplace, buttonSoundForest, buttonSoundRain, buttonSoundCoffeeShop, buttonSoundFireplace
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})

const sound = Sound()

Events({controls, timer, sound})