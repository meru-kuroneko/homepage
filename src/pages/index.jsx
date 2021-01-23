
import React from "react"
import Container from '@material-ui/core/Container';
import Header from '../components/header';

export default function HomeContainer() {
    return (
        <>
            <Header headerText="こんにちは" />
            <Container fixed>
            <div>Hello world!</div>
            </Container>
        </>
    )
  }