import React from 'react';
import { Button } from './Primitives/Button';

/**
 * Represents the list of buttons that is shown on the home page
 */
export class IndexButtonList extends React.Component<any, any> {
    /**
     * Render
     */
    render() {
        return (
            <div className="indexButtonList">
                <Button text="New Game" fnOnClick={this._fnNewGameClick} />
                <Button text="How To Play" fnOnClick={this._fnOnHowToPlayClick}/>
            </div>
        );
    }

    /**
     * Called when the user clicks the "How To Play" button
     */
    private _fnOnHowToPlayClick = () => {
        const url = 'https://www.wikihow.com/Play-Fish-Bowl';
        window.open(url, '_blank');
    }

    /**
     * Called when the user clicks the "New Game" button
     */
    private _fnNewGameClick = () => {
        window.open('http://localhost:8000/newGame', '_self');
    }
}