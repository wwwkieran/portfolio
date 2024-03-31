import * as React from 'react'
import NavBarLayout from './src/components/navBarLayout'

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <NavBarLayout {...props}>{element}</NavBarLayout>
}
