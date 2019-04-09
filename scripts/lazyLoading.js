document.body.onload = lazyLoad

//Code taken from: https://www.robinosborne.co.uk/2016/05/16/lazy-loading-images-dont-rely-on-javascript/
function lazyLoad() {
    const lazy = document.getElementsByClassName('lazy');

    for(let i=0; i<lazy.length; i++){
        lazy[i].src =
            lazy[i].getAttribute('data-src');
    }
}
