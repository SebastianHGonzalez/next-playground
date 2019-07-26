import styled from "styled-components";

export const Button = styled.button`
    border-radius: 5rem;
    padding: 0.25em 1rem;

    font-size: ${fontSize};
    font-weight: ${fontWeight}
    background-color: ${backgroundColor};
    color: ${color};
    border: 0.09rem solid ${borderColor};

    ${boxShadow}
    
    &:hover {
        opacity: 0.8;
        ${boxShadowHover}
    }
`;

export default Button;

function boxShadow({ flat }) {
    if (flat) {
        return "";
    }

    return "box-shadow: 5px 5px 5px 1px rgba(0,0,0,0.025);"
}
function boxShadowHover({ flat }) {
    if (flat) {
        return "";
    }

    return "box-shadow: 3px 3px 5px 1px rgba(0,0,0,0.05);"
}

function fontWeight(props) {
    if (props.bold) {
        return "bold";
    }

    return "normal";
}

function color(props) {
    if (props.flat) {
        if (props.secondary) {
            return props.theme.button.flat.secondary.color;
        } else {
            return props.theme.button.flat.primary.color;
        }
    } else if (props.outlined || props.outline) {
        if (props.secondary) {
            return props.theme.button.outlined.secondary.color;
        } else {
            return props.theme.button.outlined.primary.color;
        }
    } else {
        if (props.secondary) {
            return props.theme.button.normal.secondary.color;
        } else {
            return props.theme.button.normal.primary.color;
        }
    }
}

function backgroundColor(props) {
    if (props.flat) {
        if (props.secondary) {
            return props.theme.button.flat.secondary.backgroundColor;
        } else {
            return props.theme.button.flat.primary.backgroundColor;
        }
    } else if (props.outlined || props.outline) {
        if (props.secondary) {
            return props.theme.button.outlined.secondary.backgroundColor;
        } else {
            return props.theme.button.outlined.primary.backgroundColor;
        }
    } else {
        if (props.secondary) {
            return props.theme.button.normal.secondary.backgroundColor;
        } else {
            return props.theme.button.normal.primary.backgroundColor;
        }
    }
}

function borderColor(props) {
    if (props.flat) {
        if (props.secondary) {
            return props.theme.button.flat.secondary.borderColor;
        } else {
            return props.theme.button.flat.primary.borderColor;
        }
    } else if (props.outlined || props.outline) {
        if (props.secondary) {
            return props.theme.button.outlined.secondary.borderColor;
        } else {
            return props.theme.button.outlined.primary.borderColor;
        }
    } else {
        if (props.secondary) {
            return props.theme.button.normal.secondary.borderColor;
        } else {
            return props.theme.button.normal.primary.borderColor;
        }
    }
}

function fontSize(props) {
    if (props.large) {
        return "x-large";
    }

    if (props.small) {
        return "normal";
    }

    return "large";
}
