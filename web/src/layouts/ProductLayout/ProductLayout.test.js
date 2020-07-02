import { render } from '@redwoodjs/testing'

import ProductLayout from './ProductLayout'

describe('ProductLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProductLayout />)
    }).not.toThrow()
  })
})
