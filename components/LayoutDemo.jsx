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
                                validateOnBlur={false}
                                validateOnChange={false}
                                onSubmit={() => { debugger }}
                                initialValues={{
                                    firstName: undefined,
                                    middleName: undefined,
                                    lastName: undefined,
                                    age: undefined,
                                    cellphone: undefined,
                                    workphone: undefined,
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
                                    {({ isSubmitting }) => (
                                        <Form>
                                            <Field
                                                component={TextField}
                                                formName="onboarding.personalData"
                                                name="firstName"
                                            />
                                            <Field
                                                component={TextField}
                                                formName="onboarding.personalData"
                                                name="middleName"
                                                optional
                                            />
                                            <Field
                                                component={TextField}
                                                formName="onboarding.personalData"
                                                name="lastName"
                                            />
                                            <Field
                                                component={NumericField}
                                                formName="onboarding.personalData"
                                                name="age"
                                            />
                                            <Field
                                                component={TelephonicField}
                                                formName="onboarding.personalData"
                                                name="cellphone"
                                            />
                                            <Field
                                                component={TelephonicField}
                                                formName="onboarding.personalData"
                                                name="workphone"
                                                optional
                                            />
                                            <Field
                                                component={EmailField}
                                                formName="onboarding.personalData"
                                                name="email"
                                            />
                                            <Field
                                                component={DateField}
                                                formName="onboarding.personalData"
                                                name="expiration"
                                            />
                                            <Button 
                                                loading={isSubmitting}
                                                type="submit" 
                                                large 
                                            >
                                                Submit
                                            </Button>
                                        </Form>
                                    )}
                            </Formik>
                        </Main>
                        <Actions>
                            <Button large bold>
                                large bold filled primary
                            </Button>
                            <Button outline secondary>
                                outlined secondary
                            </Button>
                        </Actions>
                    </Body>
                </Layout>
            </Background>
        </ThemeProvider>
    );
}
