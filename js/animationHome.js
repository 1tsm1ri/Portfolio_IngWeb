document.querySelectorAll('main article').forEach(article => {
    article.addEventListener('mouseover', () => {
        article.style.transform = 'scale(1.05)';
        article.style.transition = 'transform 0.3s ease-in-out';
    });

    article.addEventListener('mouseout', () => {
        article.style.transform = 'scale(1)';
    });
});
