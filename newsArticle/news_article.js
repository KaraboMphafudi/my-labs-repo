var xhr = new XMLHttpRequest();
var url = './news_article.json';

xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function() {
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');

    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = article.title;

        var description = document.createElement('p');
        description.textContent = article.description;

        var keyPointsHeader = document.createElement('h3');
        keyPointsHeader.textContent = 'Key Points:';

        var keyPointsList = document.createElement('ul');
        article.key_points.forEach(function(point) {
            var listItem = document.createElement('li');
            listItem.textContent = point;
            keyPointsList.appendChild(listItem);
        });

        var impactHeader = document.createElement('h3');
        impactHeader.textContent = 'Impact:';

        var impactList = document.createElement('ul');
        article.impact.forEach(function(item) {
            var listItem = document.createElement('li');
            listItem.textContent = item;
            impactList.appendChild(listItem);
        });

        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(keyPointsHeader);
        articleDiv.appendChild(keyPointsList);
        articleDiv.appendChild(impactHeader);
        articleDiv.appendChild(impactList);

        articlesDiv.appendChild(articleDiv);
    });
}

xhr.send();