import { ThemeProvider } from "styled-components";

import { makeTheme, colors } from "../themes";
import { Layout, Header, Body, Actions, Main, Title } from "../components/Layout";
import Button from "../components/Button"
import Background from "../components/Background"

export default function dinn() {
    return (
        <ThemeProvider theme={makeTheme(colors.normal)}>
        <Background>
            <style global>{`
            html, html > body, #__next {
                height: 100vh;
                margin: 0;
                display: block;
                font-family: sans-serif;
            }
            `}</style>
            <Layout>
                <Header>
                    <Title>
                        Titulo
                    </Title>
                    <Button flat>
                        Regresar
                    </Button>
                    <Button flat>
                        X
                    </Button>
                </Header>
                <Body>
                    <Main>
                        main
                    </Main>
                    <Actions>
                        <Button primary large>
                            Continuar
                        </Button>
                        <Button flat secondary>
                            Cancelar
                        </Button>
                    </Actions>
                </Body>
            </Layout>
        </Background>
    </ThemeProvider>
    );
}
