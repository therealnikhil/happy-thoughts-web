import { render } from '@redwoodjs/testing'

import SectionDivider from './SectionDivider'

describe('SectionDivider', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SectionDivider />)
    }).not.toThrow()
  })
})
