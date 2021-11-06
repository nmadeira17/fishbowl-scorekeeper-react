import React from 'react'
import { NewGameTeam } from './NewGameTeam';

interface NewGameTeamListProps {
    text: string;
    numTeamsDropdownContent: number[];
}

interface NewGameTeamListState {
    numTeams: number;
}

export class NewGameTeamList extends React.Component<NewGameTeamListProps, NewGameTeamListState> {
    constructor(props) {
        super(props);
        this.state = {
            numTeams: 2
        };
    }

    render() {
        const { text, numTeamsDropdownContent } = this.props;

        return (
            <div>
                <label>{text}</label>
                <select name="numTeamsSelect" id="numTeamsSelect" onChange={this._fnOnSelectChange}>
                    {numTeamsDropdownContent.map((value, index) => {
                        if (value === 2) {
                            return <option value={value} selected>{value}</option>
                        } else {
                            return <option value={value}>{value}</option>
                        }
                    })}
                </select>
                {[...Array(this.state.numTeams)].map((value, index) => {
                    return <NewGameTeam teamNumber={index + 1}/>
                })}
            </div>
        );
    }

    private _fnOnSelectChange = (event) => {
        this.setState({
            numTeams: Number(event.target.value)
        });
    }
}