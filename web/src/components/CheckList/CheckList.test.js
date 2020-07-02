import { render } from '@redwoodjs/testing'

import CheckList from './CheckList'

describe('CheckList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CheckList />)
    }).not.toThrow()
  })
})
