import React, { Component } from "react";
import styled from "styled-components";
import classNames from "classnames";

const StepIndicator = styled.div`
    width: 100%;
    padding: 1rem;
    display: flex;
`;

const Steps = styled.ul`
    list-style: none;
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0;
`;

const Step = styled.div`
    background-color: ${({ active, completed }) => (completed ? "green" : active ? "yellow" : "red")};
    border-radius: 50%;
    padding: 1rem;

    .clase-loca {
        background-color: blue;
    }
`;

const StepDecorator = styled.div`
    position: absolute;
    padding: 1rem;
    pointer-events: none;
    background-color: pink;
`;

export default class StepIndicatorDemo extends Component {
    state = {
        step: 0,
    };

    goBack = () => {
        const { step: prevStep } = this.state;
        const step = prevStep - 1;
        this.setState({ step });
    };

    goNext = () => {
        const { step: prevStep } = this.state;
        const step = prevStep + 1;
        this.setState({ step });
    };

    render() {
        const { step } = this.state;

        return (
            <>
                <StepIndicator>
                    <Steps>
                        <Step className="foo" completed={step > 0} active={step === 0}>
                            step1
                        </Step>
                        <Step completed={step > 1} active={step === 1}>
                            step2
                        </Step>
                        <Step completed={step > 2} active={step === 2}>
                            <div
                                className={classNames({
                                    "clase-loca": step === 0,
                                })}>
                                loco
                            </div>
                        </Step>
                    </Steps>
                    <StepDecorator step={step} steps={3}>
                        D
                    </StepDecorator>
                </StepIndicator>
                <button type="button" onClick={this.goNext}>
                    next
                </button>
                <button type="button" onClick={this.goBack}>
                    prev
                </button>
            </>
        );
    }
}

// function UnstyledAvatar({className}) {
//     return <div className={"clases-locas "}>
//         <li>
//             <div className="clase-loca">
//     lcoo
//             </div>
//             </li>
//     </div>
// }

// const AvatarStyle = styled.div`
// .clases-locas{

// }
// `;

// const Avatar = (props) => <AvatarStyle><UnstyledAvatar {...props}/></AvatarStyle>

// function Profile({user}) {

//     return <>
//     <Avatar src={user.avatar.src} />
//     <UserName userName={user.name} />
//     </>
// }
