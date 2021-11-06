import React from 'react';

interface NewGameTeamProps {
    teamNumber: number;
}

export class NewGameTeam extends React.Component<NewGameTeamProps, any> {
    constructor(props) {
        super(props);
    }

    render() {
        const { teamNumber } = this.props;
        const labelText = `Team ${teamNumber} Name:`;

        return(
            <div>
                <label>{labelText}</label>
                <input type="text" />
            </div>
        );
    };
}