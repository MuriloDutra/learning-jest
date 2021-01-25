test('Object assignment', () => {
    const data = {one: 1}
    data['two'] = 2
    expect(data).toEqual({one: 1, two: 2})
})

test("1 + 2 can't result zero", () => {
    expect(1 + 2).not.toBe(0)
})

test('Testing if is null', () => {
    const n = null;

    expect(n).toBeNull()
    expect(n).toBeDefined()
    expect(n).not.toBeUndefined()
    expect(n).not.toBeTruthy()
    expect(n).toBeFalsy()
})

test('Testing if is zero', () => {
    const z = 0;

    expect(z).not.toBeNull()
    expect(z).toBeDefined()
    expect(z).not.toBeUndefined()
    expect(z).not.toBeTruthy()
    expect(z).toBeFalsy()
})

test('Numbers', () => {
    const value = 2 + 2;

    expect(value).toBeGreaterThan(3)
    expect(value).toBeGreaterThanOrEqual(4)
    expect(value).toBeLessThan(5)
    expect(value).toBeLessThanOrEqual(4)

    //toBe and toEqual are equivalent for numbers
    expect(value).toBe(4)
    expect(value).toEqual(4)
})

test('Floating numbers', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3); - This won't work because of rounding error
    expect(value).toBeCloseTo(0.3)
})

test('There is no Y in this statement', () => {
    expect('Batman is the best').not.toMatch(/Y/)
})

test("There is a 'man' in this statement", () => {
    expect('Superman can fly').toMatch(/man/)
})

const princessesList = ['Elsa', 'Anna', 'Mulan', 'Bela', 'Ariel']
test("Is Elsa a princess?", () => {
    expect(princessesList).toContain('Anna')
    //expect(new Set(princessesList)).toContain('Anna');
})

function compileAndroidCode(){
    throw new Error('you are using the wrong JDK')
}

test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow()
    expect(() => compileAndroidCode()).toThrow(Error)

    //You can also use exact error message or a regexp
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK')
    expect(() => compileAndroidCode()).toThrow(/JDK/)
})