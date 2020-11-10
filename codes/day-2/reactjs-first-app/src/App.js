import { ReactHeader } from './ReactHeader'
import { ReactContent } from './ReactContent'
import React from 'react'

function App() {

    /*
    const headerElement = reactHeader();
    const contentElement = reactContent();

    const appDesign = React.createElement('div', { id: 'mainDiv' }, [headerElement, contentElement]);
    */

    /*
    const headerElement = <reactHeader />;
    const contentElement = <reactContent />;
    const appDesign = (<div id='mainDiv'>
        {headerElement}
        {contentElement}
    </div>);
    */

    const appDesign = (
        <div id='mainDiv'>
            <ReactHeader />
            <ReactContent />
        </div>
    );

    return appDesign;
}
export default App;