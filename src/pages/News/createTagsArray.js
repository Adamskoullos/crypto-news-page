const createTagsArray = (cryptoNews) => {
  const tagsArr = [];
  const arrayOfTagsArrays = cryptoNews.map((article) => article.tags);
  arrayOfTagsArrays.forEach((tags) => {
    tags.forEach((tag) => {
      if (!tagsArr.includes(tag.name)) {
        tagsArr.push(tag.name);
      }
    });
  });
  return tagsArr;
};

export default createTagsArray;
