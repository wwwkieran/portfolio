import * as React from 'react'
import NavBarLayout from './src/components/navBarLayout'

export const wrapPageElement = ({ element, props }) => {
  // const [loading, setLoading] = React.useState(true)
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <NavBarLayout loading={false} {...props}>{element}</NavBarLayout>
}

// export const onPreRouteUpdate = ({ location, prevLocation }) => {
//   setLoading(true)
// }
