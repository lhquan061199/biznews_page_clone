import { articles } from "../assets/data";

const sortViewArticles = [...articles];

const sortArticles = (sortViewArticles, n) => {
  for (let i = 0; i < sortViewArticles.length; i++) {
    let temp = sortViewArticles[i];
    for (let j = i + 1; j < sortViewArticles.length; j++) {
      if (sortViewArticles[j].view > sortViewArticles[i].view) {
        temp = sortViewArticles[j];
        sortViewArticles[j] = sortViewArticles[i];
        sortViewArticles[i] = temp;
      }
    }
  }
  const topViewArticles = sortViewArticles.slice(0, n);
  return topViewArticles;
};

const TOP_VIEW_LIST = sortArticles(sortViewArticles, 3);

const articlesApiTopView = {
  getData: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(TOP_VIEW_LIST);
      }, 200);
    });
  },
};

export default articlesApiTopView;
