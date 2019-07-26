import styled from "styled-components";

const BackgroundWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: block;

    background-color: ${props => props.theme.background.color};
`;

const AnimationWrapper = styled.div`
    left: 50vw;
    top: 50vh;
    position: fixed;
    z-index: -1;
`

export default function Background({ children, ...props }) {
    return (
        <BackgroundWrapper {...props}>
            <AnimationWrapper>
                <Animation />
            </AnimationWrapper>
            {children}
        </BackgroundWrapper>
    )
}

const Spinning = styled.div`
    animation: spin 2s linear infinite;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`

const Wondering = styled.div`
    transform-origin: 50%;
    animation: wonder 10s infinite;

    @keyframes wonder {
        0% { transform: translate(50vw); }
        50% { transform: translate(-50vw); }
        100% { transform: translate(50vw); }
    }
`

function Animation() {
    return (<>
    <Wondering><Box /></Wondering>
    <Spinning><Box /></Spinning></>);
}

const Box = styled.div`
    width: 2rem;
    height: 2rem;
    background-color: red;
`