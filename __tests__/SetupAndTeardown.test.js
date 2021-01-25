//Repeating Setup For Many Tests
beforeEach(() => {
    initializeCityDataBase()
})

afterEach(() => {
    clearCityDataBase()
})

test('City database has Vienna', () => {
    expect(isCity('Vienna')).toBeTruthy()
})

test('City database has San Juan', () => {
    expect(isCity('San Juan')).toBeTruthy()
})

//One-Time Setup
beforeAll(() => {
    return initializeCityDataBase()
})

afterAll(() => {
    return clearCityDataBase()
})

test('City database has Vienna', () => {
    expect(isCity('Vienna')).toBeTruthy()
})

test('City database has San Juan', () => {
    expect(isCity('San Juan')).toBeTruthy()
})

//Scoping
describe('Matching cities to foods', () => {
    beforeEach(() => { //Applies only to tests in this describe block
        return initializeCityDataBase()
    })

    test('Vienna <3 sausage', () => {
        expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true)
    })

    test('San Juan <3 plantains', () => {
        expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true)
    })
})

//Others
test.only('This will be the only test that runs', () => {
    expect(true).toBe(true)
})