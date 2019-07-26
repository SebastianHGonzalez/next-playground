import styled from "styled-components"

export const Layout = styled.div`
    display: grid;
    grid-template-areas: 
            "head"
            "body";

    grid-template-rows: 4rem 1fr;

    height: 100%;
`;

export default Layout;

export const Header = styled.header`
    grid-area: head;

    display: grid;
    grid-template-areas: "back title extra";
    grid-template-columns: 1fr 3fr 1fr;
`;

export const Title = styled.h1`
    grid-area: title;
    margin: auto;
`;

export const Body = styled.body`
    grid-area: body;

    display: flex;
    flex-direction: column;
    margin: 0;
    overflow: hidden auto;
`;

export const Main = styled.main`
    flex-grow: 1;
    padding: 1rem;
`;

export const Actions = styled.footer`
    display: flex;
    flex-direction: column;
    padding: 1rem;

    > * {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        flex: 0 0 auto;
    }
`;
