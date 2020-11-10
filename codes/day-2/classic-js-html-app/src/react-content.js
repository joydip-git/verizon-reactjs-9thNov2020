//component: reactContent function
//element: contentDesign variable (object)
//import React from 'react'

export function reactContent() {

    const content = `React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

    Declarative views make your code more predictable and easier to debug.`;

    const contentDesign = document.createElement('p');
    contentDesign.style.backgroundColor=''
    contentDesign.innerHTML=content;

    // const contentDesign = React.createElement('p', { id: 'contentPara' }, content)

    return contentDesign;
}