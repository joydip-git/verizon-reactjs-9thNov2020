import React from 'react'

//JSX: JavaScript XML
export function ReactHeader() {

    const headerContent = 'Introduction React JS'

    const headerStyle = {
        backgroundColor: 'burlywood',
        fontFamily: 'Segoe UI',
        border: '1px solid azure',
        borderRadius: '3px',
        margin: '10px'
    }
    // const headerAttributes = {
    //     id: 'reactHeader',
    //     style: headerStyle
    // }
    // const headerDesign = React.createElement(
    //     'h3', headerAttributes, 
    //     [
    //      headerContent, 
    //      React.creatElement('span',null,''Welcome to React JS)
    //     ]);

    const headerDesign = (
        <h3 id='reactHeader' style={headerStyle}>
            <span>Welcome to React JS</span>
            <br/>
            {headerContent}
        </h3>
    );

    return headerDesign;
}

/**
 * {
 *  type:'h3',
 *  ref:null,
 *  key:null,
 *  props:{
 *    id:'reactHeader',
 *    style:headerStyle,
 *    children:[headerContent,{
 *      type:'span',
 *      ref:null,
 *      key:null,
 *      props:{
 *       children:['Welcome to React JS']
 *      }
 *    }]
 *  }
 * }
 */