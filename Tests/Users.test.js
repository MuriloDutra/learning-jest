import axios from 'axios'
import Users from '../src/users'

jest.mock('axios')

test('Should fetch users', () => {
    const users = [{name: 'Bob'}]
    const response = {data: users}

    axios.get.mockResolvedValue(response)
    //or you could use the following depending on your use case:
    //axios.get.mockImplementation(() => Promise.resolve(resp))

    return Users.all().then(data => expect(data).toEqual(users))
})