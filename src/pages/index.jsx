
import React from "react"
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from '../gatsby-theme-material-ui-top-layout/theme'
import Container from '@material-ui/core/Container';
import Header from '../components/header';
import Footer from '../components/footer';


  export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Header/>
            <Container fixed>
                <div>Hello world!</div>
            </Container>
            <Footer/>
        </ThemeProvider>
    )
  }