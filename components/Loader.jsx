import styled from "styled-components";

export function DotsLoader() {
    return (
        <Pulse>
            <Dot />
            <Dot />
            <Dot />
        </Pulse>
    );
}

const Dot = styled.span`
    margin: 0 0.3em;
    width: 0.5rem;
    height: 0.5rem;
    background-color: currentColor;
    border-radius: 100%;
    display: inline-block;
`;

const Pulse = styled.span`
    @keyframes pulse {
        0% {
            transform: scale(0.6);
        }
        40% {
            transform: scale(1);
        }
        80% {
            transform: scale(0.6);
        }
        100% {
            transform: scale(0.6);
        }
    }

    > * {
        animation: pulse 1.4s infinite ease-in-out both;
    }

    > *:nth-child(2) {
        animation-delay: 160ms;
    }

    > *:nth-child(3) {
        animation-delay: 320ms;
    }
`;
