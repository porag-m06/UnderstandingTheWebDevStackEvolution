function createElement(elementType, elementId, textContent, events ={}) {
    const el = document.createElement(elementType);
    el.id = elementId;
    el.textContent = textContent;
    
    for(const [fn, handle] of Object.entries(events)){
        el.addEventListener(fn, handle);
    }

    document.body.appendChild(el);
    return el;
}