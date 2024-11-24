import dbPool from "../config/database.js";

const getAllArticlesModels = () => {
  const SQLQuery = "SELECT * FROM articles";

  return dbPool.query(SQLQuery);
}

const getArticleByIdModels = (idArticle) => {
  const SQLQuery = `SELECT * FROM articles WHERE id = ${idArticle}`;

  return dbPool.query(SQLQuery, [idArticle]);
}

export {getAllArticlesModels, getArticleByIdModels}