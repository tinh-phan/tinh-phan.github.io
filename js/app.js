const siema = document.querySelector('.siema') && new Siema({
    selector: '.siema',
    duration: 500,
    easing: 'ease-in-out',
    perPage: 1,
    loop: true,
});
if (siema !== null) {
    const prev = document.querySelector('.slide-prev');
    const next = document.querySelector('.slide-next');
    if (prev !== null) {
        prev.addEventListener('click', () => {
            siema.prev();
        });
    }
    if (next !== null) {
        next.addEventListener('click', () => {
            siema.next();
        });
    }
}

