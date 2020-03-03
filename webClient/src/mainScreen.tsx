import * as React from 'react';
import { fetchService } from './utils';
import { ZLUXResources } from './ZoweZLUXWrapper';

interface MainScreenState {
  counter: number;
}

export default class MainScreen extends React.Component<{}, MainScreenState>  {

  private static DO_INCREMENT_TIMEOUT = 0;
  private static REQUEST_COUNTER_INTERVAL = 1000;

  private zoweContext = (window.parent as any).ZoweZLUX;

  state: MainScreenState = {
    counter: null
  }

  componentDidMount() {
    setTimeout(() => {
      this.incrementCounter();
    }, MainScreen.DO_INCREMENT_TIMEOUT);

    this.registerIntervalRequestToServer();
  }

  private incrementCounter() {
    fetchService(
      this.zoweContext,
      'sessionIssueBackend',
      { method: 'GET' },
      '/inc'
    );
  }

  private registerIntervalRequestToServer() {
    setInterval(() => {
      this.getCounter();
    }, MainScreen.REQUEST_COUNTER_INTERVAL);
  }

  private getCounter() {
    fetchService(
      this.zoweContext,
      'sessionIssueBackend',
      { method: 'GET' }
    )
      .then(response => response.json())
      .then(response => {
        this.setState({ counter: response.counter });
      })
  }


  render() {
    const { counter } = this.state;

    return (
      <p>{counter}</p>
    );
  }
}