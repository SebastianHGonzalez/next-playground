import { ThemeProvider } from "styled-components";
import { Formik, Field, Form } from "formik";
import * as Yup from 'yup';

import { makeTheme, colors } from "../themes";
import { Layout, Header, Body, Actions, Main, Title } from "./Layout";
import Button from "./Button"
import Background from "./Background"
import { TextField, NumericField, EmailField, DateField, TelephonicField } from "./Form";

export default function LayoutDemo() {
    return (
        <ThemeProvider theme={makeTheme(colors.normal)}>
            <Background>
                <style global="true">{`
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
                            <Formik
                                onSubmit={() => { debugger }}
                                initialValues={{
                                    firstName: undefined,
                                    middleName: undefined,
                                    lastName: undefined,
                                    age: undefined,
                                    phone: undefined,
                                    email: undefined,
                                    expiration: undefined,
                                }}
                                validationSchema={
                                    Yup.object().shape({
                                        firstName: Yup.string().required(),
                                        middleName: Yup.string().required(),
                                        lastName: Yup.string().required(),
                                        age: Yup.string().required(),
                                        phone: Yup.string().required(),
                                        email: Yup.string().required(),
                                        expiration: Yup.string().required(),
                                    })
                                }
                            >
                                <Form>
                                    <Field
                                        component={TextField} name="firstName" />
                                    <Field
                                        component={TextField} name="middleName" optional />
                                        <Field
                                            component={TextField} name="lastName" />
                                            <Field
                                                component={NumericField} name="age" />
                                                <Field
                                                    component={TelephonicField} name="phone" />
                                                <Field
                                                    component={EmailField} name="email" />
                                                    <Field
                                                        component={DateField} name="expiration" />
                                    <button type="submit">submit</button>
                                </Form>
                            </Formik>
                        </Main>
                        <Actions>
                            <Button large >
                                Continuar
                        </Button>
                            <Button outline secondary>
                                Cancelar
                        </Button>
                        </Actions>
                    </Body>
                </Layout>
            </Background>
        </ThemeProvider>
    );
}
