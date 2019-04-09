document.body.onload = lazyLoad

function lazyLoad() {
    const lazy = document.getElementsByClassName('lazy');

    for(let i=0; i<lazy.length; i++){
        lazy[i].src =
            lazy[i].getAttribute('data-src');
    }
}