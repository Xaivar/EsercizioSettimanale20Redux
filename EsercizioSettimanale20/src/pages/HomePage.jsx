import React from 'react'
import MyNavbar from '../components/MyNavbar'
import Posts from '../components/Posts'
import Container from 'react-bootstrap/esm/Container'
import MyFooter from '../components/MyFooter'

export default function HomePage() {
  return (
    <>
        <MyNavbar />
        <Container>
            
            <Posts/>
        </Container>
        <MyFooter/>
            
    </>
  )
}