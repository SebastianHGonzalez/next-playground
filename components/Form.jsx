import { useRef } from "react";
import styled from "styled-components";
import { ErrorMessage } from "formik";

import I18n from "./I18n";

const Input = styled.input``;

export function TextField(props) {
    return <GenericField {...props} element={Input} />
}

export function NumericField(props) {
    return <GenericField {...props} element={Input} type="number" />
}

export function EmailField(props) {
    return <GenericField {...props} element={Input} type="email" />
}

export function TelephonicField(props) {
    return <GenericField {...props} element={Input} type="tel" />
}

export function DateField(props) {
    return <GenericField {...props} element={Input} type="date" />
}

export function GenericField({
    formName,
    field,
    form,
    optional,
    element: FieldElement,
    ...props
}) {
    const {
        handleBlur,
        handleChange,
        handleReset,
        handleSubmit,
    } = form;
    const { name } = field;
    const touched = form.touched[field.name];

    return (
        <FormGroup>
            <FieldLabel collapse={touched} formName={formName} name={name} optional={optional} />
            <FieldWrapper visible={touched}>
                <FieldElement
                    name={name}
                    onChange={makeChangeHandler(form, field)}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    onReset={handleReset}
                    onSubmit={handleSubmit}
                    onFocus={makeFocusHandler(form, field)}
                    {...props}
                />
            </FieldWrapper>
            <FieldError collapse={touched} name={name} />
        </FormGroup>
    )
}

const FieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    padding-bottom: 1rem;

    & * {
        font-size: large;
    }

    & * {
        background-color: transparent;
        border: 0;
    }

    transition: opacity 200ms ease-in-out;
    ${({ visible }) => `opacity: ${visible ? 1 : 0};`}

    &:focus {
        opacity: 1;
    }
`;

const Label = styled.label`    
    position absolute;
    pointer-events: none;
    
    ${({ collapse }) => collapse ?
        `top: 0.2rem`:
        `top: calc(50% - 0.5rem);` 
    }
    transition: top 200ms ease-in-out;
`

function makeFocusHandler({ setTouched, touched }, { name }) {
    return function () {
        setTouched({ ...touched, [name]: true })
    }
}

function makeChangeHandler({ handleChange, setTouched, touched }, { name }) {
    return function (e) {
        const value = (e && e.target && e.target.value) || e

        setTouched({ ...touched, [name]: true })
        handleChange({ target: { value, name } })
    }
}

const FormGroup = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    border: 0.05rem solid grey;
    border-radius: 0.2rem;
    padding: 0.5rem;

    form > & {
        margin: 1rem auto;
    }
`;

const OptionalLabelWrapper = styled.span`
    color: grey;
    font-style: italic;
    font-size: small;
`

function OptionalLabel() {
    return <OptionalLabelWrapper>(<I18n id="global.optional" />)</OptionalLabelWrapper>
}

function FieldLabel({ collapse, formName, name, optional }) {
    return (
        <Label collapse={collapse} htmlFor={name}>
            <I18n id={`form.${formName}.${name}.label`} />
            {optional && <OptionalLabel />}
        </Label>
    );
}

const ErrorLabel = styled.label`
    color: red;

    position absolute;
    pointer-events: none;

    transform-origin: bottom left;

    ${({ collapse }) => collapse ?
        `bottom: 0.2rem; right: 0.4rem`:
        `bottom: calc(50% - 0.5rem); opacity: 0` 
    }
    transition: bottom 200ms ease-in-out, opacity 200ms ease-in-out;
`;

function FieldError({ collapse, name }) {
    return <ErrorLabel collapse={collapse} id="error" htmlFor={name}><ErrorMessage name={name} /></ErrorLabel>;
}
