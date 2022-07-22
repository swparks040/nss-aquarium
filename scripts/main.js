import { getFish } from './database.js'

let allFish = getFish()


for (const fish of allFish) {
    console.log(fish)
}
