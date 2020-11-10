//component: reactContent function
//element: contentDesign variable (object)
import React from 'react'

export function ReactContent() {

    const content = `React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

    Declarative views make your code more predictable and easier to debug.`;

    // const contentDesign = React.createElement('p', { id: 'contentPara' }, content)
    const contentDesign = <p id='contentPara'>{content}</p>

    return contentDesign;
}