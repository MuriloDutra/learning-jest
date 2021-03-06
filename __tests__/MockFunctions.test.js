function forEach(items, callback){
    for (let index = 0; index < items.length; index++){
        callback(items[index])
    }
}

test('Testing forEach function', () => {
    const mockCallback = jest.fn(x => 42 + x)
    forEach([0, 1], mockCallback)

    //The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(2)

    //The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0)

    //The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1)

    //The return value of the first call to the function was 42
    expect(mockCallback.mock.results[0].value).toBe(42)

    //The return value of the second call to the function was 43
    expect(mockCallback.mock.results[1].value).toBe(43)
})

test('Mock instances', () => {
    const myMock = jest.fn();

    const a = new myMock();
    const b = {};
    const bound = myMock.bind(b);
    bound();

    console.log('Mock instances: ', myMock.mock.instances)
})


test('.mock properties', () => {
    //The function was called exactly once
    expect(someMockFunction.mock.calls.length).toBe(1)

    //The first arg of the first call to the function was "first arg"
    expect(someMockFunction.mock.calls[0][0]).toBe('first arg')

    //The second arg of the first call to the function was "second arg"
    expect(someMockFunction.mock.calls[0][0]).toBe('first arg')

    //The return value of the first call to the function was 'return value'
    expect(someMockFunction.mock.results[0].value).toBe('return value')

    //This function was instantiated exactly twice
    expect(someMockFunction.mock.instances.length).toBe(2)

    //The object returned by the first instantiated of this function
    //had a 'name' property whose value was set to 'test'
    expect(someMockFunction.mock.instances[0].name).toBe('test')
})

test('Mock return values', () => {
    const myMock = jest.fn()
    
    myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true)

    console.log('Mock return values: ', myMock(), myMock(), myMock(), myMock())
})

test('Injecting values into Mock Functions', () => {
    const filterTestFn = jest.fn();

    // Make the mock return `true` for the first call,
    // and `false` for the second call
    filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

    const result = [11, 12].filter(num => filterTestFn(num));

    console.log('Injecting values: ', result)
    console.log('Injecting values: ', filterTestFn.mock.calls[0][0])
    console.log('Injecting values: ', filterTestFn.mock.calls[0][1])
})

test('Mock implementation 01', () => {
    const myMockFn = jest.fn(callback => callback(null, true))
    myMockFn((error, value) => console.log('Mock implementation 01 :', value))
})

test('Mock implementation 02', () => {
    jest.mock('../src/foo')
    const foo = require('../src/foo')

    foo.mockImplementation(() => 42)
    foo()
})

test('Mock implementation 03', () => {
    const myMockFn = jest
        .fn()
        .mockImplementationOnce(callback => callback(null, true))
        .mockImplementationOnce(callback => callback(null, false))

    myMockFn((error, value) => console.log('Mock implementation 03: ',value))
    myMockFn((error, value) => console.log('Mock implementation 03: ',value))
})

test('Mock implementation 04', () => {
    const myMockFn = jest
        .fn(() => 'default,')
        .mockImplementationOnce(() => 'first call,')
        .mockImplementationOnce(() => 'second call,')

        console.log('Mock implementation 04: ', myMockFn(), myMockFn(), myMockFn(), myMockFn())
})

test(`Returning 'this'`, () => {
    const myObj = {
        myMethod: jest.fn().mockReturnThis(),
    }

    //Is the same as

    const otherObj = {
        myMethod: jest.fn(function () {
            return this
        })
    }

    console.log('myObj: ', myObj.myMethod())
    console.log('otherObj: ', otherObj.myMethod())
})

test('Giving a name to the mock function', () => {
    const myMock = jest()
        .fn()
        .mockReturnValue('default')
        .mockImplementation(scalar => 42 + scalar)
        .mockName('Test - naming a mock function')
})

test('Custom matcher for mock functions', () => {
    const myMock = jest.fn()

    //The mock function was called at least once
    expect(myMock).toHaveBeenCalled()

    //The mock function was called at least once with the specified args
    expect(myMock).toHaveBeenCalledWith(arg1, arg2)

    //The last call to the mock function was called with the specified args
    expect(myMock).toHaveBeenLastCalledWith(arg1, arg2)

    //All calls and the name of the mock is written as a snapshot
    expect(myMock).toMatchSnapshot()

    //The mock function was called at least once
    expect(myMock.mock.calls.length).toBeGreaterThan(0)

    //The mock function was called at least once with the specified args
    expect(myMock.mock.calls).toContainEqual([arg1, arg2])

    //The last call to the mock function was called with the specified args
    expect(myMock.mock.calls[myMock.mock.calls.length] - 1).toEqual([arg1, arg2])

    //The first arg of the last call to the mock function was `42`
    //(note that there is no sugar helper for this specific of an assertion)
    expect(myMock.mock.calls[myMock.mock.calls.length - 1][0]).toBe(42)

    //A snapshot will check that a mock was invoked the same number of times,
    //in the same order, with the same arguments. It will also assert on the name.
    expect(myMock.mock.calls).toEqual([arg1, arg2])
    expect(myMock.getMockName()).toBe('a mock name')
})