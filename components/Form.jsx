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
    const { name } = field;

    return (
        <FormGroup collapseLabel={form.touched[field.name]}>
            <FieldElement name={name} onChange={makeChangeHandler(form, field)} {...props} />
            <FieldLabel formName={formName} name={name} optional={optional} />
            <FieldError name={name} />
        </FormGroup>
    )
}

function makeChangeHandler({ handleChange, setTouched, touched }, { name }) {
    return function (e) {
        const value = (e && e.target && e.target.value) || e

        setTouched({...touched, [name]: true})
        handleChange({target: {value, name}})
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

    & input {
        border: 0;
        background-color: transparent;
        padding: 0.5rem;
        margin-top: 1rem;

        transition: opacity 200ms ease-in-out;
        ${({ collapseLabel }) => `opacity: ${collapseLabel ? 1 : 0};`}

        &:focus {
            opacity: 1;
        }
    }


    & label {
        position absolute;
        pointer-events: none;

        transform-origin: top left;
        ${({ collapseLabel }) => collapseLabel ?
        labelCollapsed :
        labelExtended
        }

        transition: transform 200ms ease-in-out;

        &#error {
            right: 0;
            padding-right: 1rem;
            transform-origin: top right;
        }
    }

    & > input:focus ~ label {
        ${() => labelCollapsed}
    }

    & > span {
        transform-origin: bottom left;
        transform: scale(0.75);
    }
`;

const labelCollapsed = `transform: scale(0.75);`
const labelExtended = `transform: translate(0, 1rem);`

const OptionalLabelWrapper = styled.span`
    color: grey;
    font-style: italic;
    font-size: small;
`

function OptionalLabel() {
    return <OptionalLabelWrapper>(<I18n id="global.optional" />)</OptionalLabelWrapper>
}

function FieldLabel({ formName, name, optional }) {
    return (
        <label htmlFor={name}>
            <I18n id={`form.${formName}.${name}.label`} />
            {optional && <OptionalLabel />}
        </label>
    );
}

const FieldErrorComponent = styled.label`
    color: red;
`;

function FieldError({ name }) {
    return <FieldErrorComponent id="error" htmlFor={name}><ErrorMessage name={name} /></FieldErrorComponent>;
}
