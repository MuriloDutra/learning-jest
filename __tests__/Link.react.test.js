import React from 'react'
import renderer from 'react-test-renderer'
import Link from '../src/Link'


it('renders correctly', () => {
    const tree = renderer
        .create(<Link page="http://www.instagram.com">Instagram</Link>)
        .toJSON()

    expect(tree).toMatchSnapshot()
})

/*it('will check the matchers and pass 1', () => {
    const user = {
        createdAt: new Date(),
        id: Math.floor(Math.random() * 20),
        name: 'LeBron James',
    };

    expect(user).toMatchSnapshot({
        createdAt: expect.any(Date),
        id: expect.any(Number),
    })
})*/