import * as React from 'react';

const mvdWindow:any = window.parent;
const ZoweZLUX: ZoweZLUXResources = mvdWindow && mvdWindow.ZoweZLUX ? mvdWindow.ZoweZLUX as ZoweZLUXResources : ZoweZLUXResources;
export const ZLUXResources: React.Context<ZoweZLUXResources> = React.createContext(ZoweZLUX);

export class ZoweZLUXWrapper extends React.Component{
  render(){ 
    return(
      React.createElement(ZLUXResources.Provider, {value: ZoweZLUX}, this.props.children)
    )
  }
}