import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MainScreen from './mainScreen';
import { ZoweZLUXWrapper } from './ZoweZLUXWrapper';

interface IndexState {
  counter: number;
}

export default class Index extends React.Component<Object, IndexState>  {
  render() {
    return (
      <ZoweZLUXWrapper>
        <MainScreen />
      </ZoweZLUXWrapper>
    );
  }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('index')
);