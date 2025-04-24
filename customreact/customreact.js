function customRender(reactElement, mainContainer){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    mainContainer.append(domElement)
    */
   const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children
   for (const prop in reactElement.props) {
    if(prop === 'children') continue;
    domElement.setAttribute(prop, reactElement.props[prop])
   }

   mainContainer.append(domElement)
}


const reactElement = {
    type :'a',
    props : {
        href : "www.google.com",
        target : "_blank"
    },
    children : 'Click me to visit google...'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)