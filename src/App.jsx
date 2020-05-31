import React from 'react';
import Button, { ButtonGroup } from '@atlaskit/button';
import Calendar from "./components/Calendar.jsx";
import SingleExample from './components/Select.jsx';
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const WrapperHalfWidth = styled.div`
    width: 50%;
    margin: 0 auto;
`

const App = () => {
    return (
        <>
            <Wrapper>
                <h1>react</h1>
                <Calendar/>
                <Button appearance='primary'>Click</Button>
            </Wrapper>
            <WrapperHalfWidth>
                <SingleExample/>
            </WrapperHalfWidth>
        </>
    )
};

export default App
