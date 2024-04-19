function changeAllArticleColors() {
    const result = document.getElementById('products').querySelectorAll('article');
    for (const article of result) {
        article.classList.add('sale');



    }
}
changeAllArticleColors();

function attachBuyEvents() {
    const mainGoal = document.getElementById('products').querySelectorAll('button');
    mainGoal.forEach(button => {
        button.addEventListener('click', function(e) {
            console.log(e.currentTarget);

        });

    });

}
attachBuyEvents();

function againAttachBuyEvents() {
    const mainGoal = document.getElementById('products').querySelectorAll('button');
    mainGoal.forEach(button => {
        button.addEventListener('click', function(e) {
            console.log(button.parentNode);
            button.parentNode.classList.toggle('sale');
        });
    });



}
againAttachBuyEvents();