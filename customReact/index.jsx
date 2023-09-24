function customRender(reactElement, mainContainer){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const key in reactElement.props) {
        if (key ==="children") continue;
        domElement.setAttribute(key, reactElement.props[key])
    }
    mainContainer.appendChild(domElement)
}
const reactElement = {
    type : 'a',
    props :{
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Visit Google.com'
};

const mainContainer = document.getElementById('root');

customRender(reactElement,mainContainer);