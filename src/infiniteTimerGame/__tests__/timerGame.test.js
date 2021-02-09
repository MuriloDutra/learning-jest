'use strict';

jest.useFakeTimers()

test('waits one second before ending the game', () => {
    const timerGame = require('../src/timerGame')
    timerGame()

    expect(setTimeout).toHaveBeenCalledTimes(1)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000)
})

test('calls the callback after one second', () => {
    const timerGame = require('../src/timerGame')
    const callback = jest.fn()

    timerGame(callback)

    //At this point in time, the callback should not have been called yet
    expect(callback).not.toBeCalled()

    //Fast-forward until all timers have been executed
    jest.runAllTimers()

    //Now our callback should have been called!
    expect(callback).toBeCalled()
    expect(callback).toHaveBeenCalledTimes(1)
})

it('calls the callback after one second via advanceTimersByTime', () => {
    const timerGame = require('../src/timerGame')
    const callback = jest.fn()

    timerGame(callback)

    //At this point in time, the callback should not have been called yet
    expect(callback).not.toBeCalled()

    //Fast-forward until all timers have been executed
    jest.advanceTimersByTime(1000)

    //Now our callback should have been called!
    expect(callback).toBeCalled()
    expect(callback).toHaveBeenCalledTimes(1)
})