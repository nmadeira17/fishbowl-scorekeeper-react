import React from 'react'

interface DropDownProps {
    text: string;
    contents: number[];
    fnOnChange: (number) => void;
}

export class DropDown extends React.Component<DropDownProps, any> {
    constructor(props) {
        super(props);
    }

    render() {
        const { text, contents, fnOnChange} = this.props;

        return (
            <div>
                <label>{text}</label>
                <select name="numTeamsSelect" id="numTeamsSelect" onChange={fnOnChange}>
                    {contents.map((value, index) => {
                        return <option value={value}>{value}</option>
                    })}
                </select>
            </div>
        );
    }
}