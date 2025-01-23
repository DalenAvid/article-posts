import React from "react";
import { Link } from "react-router-dom";
import styles from "./ArticleList.module.scss"

const ArticleList = ({ articles }) => {
    return (
        <div>

            <div className={styles.articleList}>
                {articles.map((article) => (
                    <div
                        key={article.id}
                        className={styles.articleItemContainer}
                    >
                        <img
                            src={article.image}
                            alt={article.title}
                            className={styles.articleImg}
                        />
                        
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>

                        <Link to={`/article/${article.id}`}>Read More</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArticleList;
