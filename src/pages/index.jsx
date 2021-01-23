
import React from "react"
import Container from '@material-ui/core/Container';
import Header from '../components/header';
import Footer from '../components/footer';

export default function HomeContainer() {
    return (
        <>
            <Header/>
            <Container fixed>
                <div>Hello world!</div>
            </Container>
            <Footer/>
        </>
    )
  }