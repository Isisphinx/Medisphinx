import React from 'react'
import TabsIcons from '../components/tabsIcons'

const Layout = ({ children }) => (
  <div>
    <TabsIcons />
    {children}
  </div>
)

export default Layout
