import { reactHeader } from './react-header'
import { reactContent } from './react-content'
//import React from 'react'

function app() {

    const headerElement = reactHeader();
    const contentElement = reactContent();

    const appDesign = document.createElement('div')
    appDesign.appendChild(headerElement);
    appDesign.appendChild(contentElement);

    // const appDesign = React.createElement('div', { id: 'mainDiv' }, [headerElement, contentElement]);

    return appDesign;
}
export default app;