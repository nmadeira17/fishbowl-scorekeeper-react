import React from 'react';
import { IndexHeader } from './IndexHeader';
import { IndexButtonList } from './IndexButtonList';

/**
 * The home page for the app
 */
export class Index extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  /**
   * Render
   */
  render() {
    return (
      <div>
        <IndexHeader />
        <IndexButtonList />
      </div>
    );
  }
}
