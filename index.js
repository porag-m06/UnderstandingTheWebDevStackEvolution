var counter = 0;

function inc() {
    counter+=1;
    document.querySelector('#count').innerText = counter;
}

var $h1 = createElement('h1', 'count', '0')
var $button = createElement('button', null, 'Increment', {
    click:() => {
        inc();
    }
})
