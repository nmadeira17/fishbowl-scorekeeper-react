import React from 'react';

interface ButtonProps {
    text: string;
    fnOnClick: () => void;
}

/**
 * Wrapper around a regular HTML button
 */
export class Button extends React.Component<ButtonProps, any> {
    /**
     * Render
     */
    render() {
        const { text, fnOnClick } = this.props;

        return (
            <button onClick={fnOnClick}>{text}</button>
        );
    }
}