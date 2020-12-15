test('CALLBACK - the data is peanut butter', done => {
    function callback(data) {
        try{
            expect(data).toBe('peanut butter');
            done();
        }catch (error) {
            done(error);
        }
    }
  
    fetchData(callback);
});

test('PROMISE', () => {
    expect.assertions(1) //verify that a certain number of assertions are called

    return fetchData()
        .then(data => expect(data).toBe('peanut butter'))
        .catch(error => expect(error).toMatch(/error/))
})

test('.resolves', () => {
    return expect(fetchData()).resolves.toBe('peanut butter')
})

test('.rejects', () => {
    return expect(fetchData()).rejects.toMatch('error')
})

test('Async/Await', async () => {
    const data = await fetchData()
    expect(data).toBe('peanut butter')
})

test('Async/Await must fails', async () => {
    expect.assertions(1)

    try{
        await fetchData()
    }catch(error){
        expect(error).toMatch(/error/)
    }
})

test('Async and .resolves', async () => {
    await expect(fetchData()).resolves.toBe('Peanut butter')
})

test('Async and .rejects', async () => {
    await expect(fetchData()).rejects.toThrow('error')
})