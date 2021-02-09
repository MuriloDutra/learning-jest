'use strict'

function infiniteTimerGame(callback){
    console.log('Ready...go!')
    
    setTimeout(() => {
        console.log(`Time's up! Ten seconds before the next game starts...`)
        callback && callback()

        //Schedule the next game in ten seconds
        setTimeout(() => {
            infiniteTimerGame(callback)
        }, 10000)
    }, 1000)
}

module.exports = infiniteTimerGame