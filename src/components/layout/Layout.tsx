'use client'
import React from 'react'
import Header from './Header'
import Footer from './Footer'

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <>
            
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout
