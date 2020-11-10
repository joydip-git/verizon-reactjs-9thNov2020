//import React from 'react'

export function reactHeader() {

    const headerContent = 'React JS Introduction'

    const headerDesign = document.createElement('h3')
    headerDesign.style.backgroundColor = 'burlywood';
    headerDesign.style.fontFamily = 'Segoe UI';
    headerDesign.style.border = '1px solid azure'
    headerDesign.style.borderRadius = '3px'
    headerDesign.style.margin = '10px'
    headerDesign.innerHTML = headerContent

    // const headerStyle = {
    //     backgroundColor: 'burlywood',
    //     fontFamily: 'Segoe UI',
    //     border: '1px solid azure',
    //     borderRadius: '3px',
    //     margin: '10px'
    // }
    // const headerAttributes = {
    //     id: 'reactHeader',
    //     style: headerStyle
    // }
    // const headerDesign = React.createElement('h3', headerAttributes, headerContent);

    return headerDesign;
}