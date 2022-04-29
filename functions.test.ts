const {shuffleArray} = require('./utils')
const {bots} = require(`./data.js`)
const {playerRecord} = require(`./data.js`)

describe('shuffleArray should', () => {
    test(`return type array`, ()=>{
        expect(shuffleArray(bots)).toBeInstanceOf(Array)
    }),
    test(`return same length array`, ()=>{
        expect(shuffleArray(bots)).toHaveLength(bots.length)
    }),
    test(`shuffle the array`,()=>{
        let shuffled = false
        let shfldBots = shuffleArray(bots)
        while(shuffled === false){
            shfldBots.map(bot=>shfldBots.indexOf(bot)===bots.indexOf(bot)?null:shuffled=true)
            
        }
        expect(shuffled).toEqual(true)
    })
})
