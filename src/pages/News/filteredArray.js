const filteredArray = (filteredTags, cryptoNews) => {
  if (!filteredTags.length) {
    return cryptoNews;
  }
  let tempArr = [];

  filteredTags.forEach((fTag) => {
    cryptoNews.forEach((article) => {
      article.tags.forEach((tag) => {
        if (tag.name === fTag) {
          tempArr.push(article);
        }
      });
    });
  });

  return tempArr;
};

export default filteredArray;
