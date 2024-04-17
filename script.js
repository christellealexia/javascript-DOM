function changeAllArticleColors() {
    const result = document.getElementById('products').querySelectorAll('article');
    for (const article of result) {
        article.classList.add('sale');



    }
}
changeAllArticleColors();