jest.mock('./request')//to tell Jest to use our manual mock.
import * as user from '../user'

// The assertion for a promise must be returned.
it('works with promises', () => {
    expect.assertions(1);
    return user.getUserName(5).then(data => expect(data).toEqual('Paul'));
    
    /*  This works too:
        return expect(user.getUserName(4)).resolves.toEqual('Mark')
    */
});

it('works with async/await', async () => {
    expect.assertions(1)
    const data = await user.getUserName(4)
    expect(data).toEqual('Mark')
})

it('works with async/await and resolves', async () => {
    expect.assertions(1)
    await expect(user.getUserName(5)).resolves.toEqual('Paul')
})

it('test error with promise', () => {
    expect.assertions(1)
    return user.getUserName(2)
        .catch(error => {
            expect(error).toEqual({
                error: 'User with 2 not found.'
            })
        })
})

it('tests error with async/await', async () => {
    expect.assertions(1)
    try{
        await user.getUserName(1)
    }catch(error){
        expect(error).toEqual({
            error: 'User with 1 not found.'
        })
    }
})

it('tests error with rejects', () => {
    expect.assertions(1)
    return expect(user.getUserName(3)).rejects.toEqual({
        error: 'User with 3 not found.'
    })
})

it('tests error with async/await and rejects', async () => {
    expect.assertions(1)
    await expect(user.getUserName(3)).rejects.toEqual({
        error: 'User with 3 not found.'
    })
})