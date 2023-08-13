import React from 'react'


const RootDashboard =({
    children,
  }: {
    children: React.ReactNode
  }) => {
    return (
    <div>
        {children}
    </div>
  )
}

export default RootDashboard