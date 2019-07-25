/* eslint-disable no-console */
import React, { Component } from "react";
import Keyboard from "react-simple-keyboard";

const numericLayout = ["1 2 3", "4 5 6", "7 8 9", " 0 {bksp}"];

export default class extends Component {
    state = {
        value: "",
    };

    componentDidUpdate(prevProps, prevState) {
        const textAdded = this.state.value.length > prevState.value.length;
        
        if (textAdded && this.timeout) {
            clearTimeout(this.timeout);
        }


    }

    render() {
        const { value } = this.state;

        return (
            <>
                <ObfuscatedInput value={value} />
                <Keyboard
                    layout={{
                        default: numericLayout,
                    }}
                    onChange={(newValue) => this.setState({ value: newValue })}
                />
            </>
        );
    }
}

// eslint-disable-next-line react/no-multi-comp
function ObfuscatedInput({ value, showLast = true }) {
    const ofuscatedValue = showLast ? obfuscate(value.slice(0, -1)) + value.slice(-1) : obfuscate(value);

    return <input type="text" value={ofuscatedValue} />;
}

function obfuscate(string) {
    return string.replace(/./g, "*");
}
