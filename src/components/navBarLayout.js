import * as React from 'react'

const NavBarLayout = ({ children }) => {
    return (<div>
        <MenuBar buttons={[['Home', '/desktop'], ['Work', '/work'], ['Blog', '/blog'], ['About', '/about'], ['Shop', '/shop']]}/>
        <div>{children}</div>
        </div>)
}

export default NavBarLayout