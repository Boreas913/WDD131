function addStars(id = 'stars'){
    const stars = span.innerText.length;
    span.setAttribute('aria-label', `${stars} out of 5 stars`);
}
const spans = document. querySelectorAll('article.movie p span');