new SimpleLightbox({ elements: '.gallery a' });
new SimpleLightbox({ elements: '.single a' });

const closeNav = () => {
    document.body.querySelector('.checkbox').checked = false;
};

window.onresize = function () {
    let w = window.outerWidth;
    if (w > 800) {
        closeNav();
    }
};

const headers = document.querySelectorAll('h2, .content');

const options = {
    root: null,
    threshold: 0.2
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.matches('h2')) {
                entry.target.classList.add('line-animation');
                entry.target.classList.add('dot-animation');
                entry.target.classList.add('fade-in-header');
            } 
            if (entry.target.matches('.content')) {
                entry.target.classList.add('fade-in-text');
            }
            observer.unobserve(entry.target);
        } else {
            return;
        }
    });
}, options);

headers.forEach(header => observer.observe(header));