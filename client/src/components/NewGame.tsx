import React from 'react';
import { NewGameTeamList }  from './NewGameTeamList';

const numTeamsDropdownContent = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export class NewGame extends React.Component<any, any> {
    render() {
        return (
            <div>
                <h1>New Game</h1>
                <NewGameTeamList text="How many teams?" numTeamsDropdownContent={numTeamsDropdownContent}/>
            </div>
        );
    }
}