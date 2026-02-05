function addStars(span){
    const stars = span.innerText.legnth;
    span.setAttribute('aria-label', `${stars} out of 5 stars`);
}
const spans = document. querySelectorAll('article.movie p span');


//for (let i = spans.length - 1){}
//for (let i = 0; i < spans.length; i++)
//^^ set i, go for the length, increase i