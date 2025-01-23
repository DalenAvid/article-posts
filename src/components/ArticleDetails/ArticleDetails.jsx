import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./ArticleDetails.module.scss";

const ArticleDetails = ({ articles }) => {
    const { id } = useParams(); // Отримуємо ID зі шляху
    const navigate = useNavigate(); // Ініціалізуємо функцію для навігації
    const article = articles.find((item) => item.id === parseInt(id)); // Знаходимо статтю

    if (!article) {
        return <h1>Article not found</h1>;
    }

    const handleGoBack = () => {
        navigate(-1); // Повертає на попередню сторінку
    };

    return (
        <section className={styles.sectionArticle}>
            <div className={styles.articleContainer}>
                <h1>{article.title}</h1>
                <img
                    src={article.image}
                    alt={article.title}
                    className={styles.articleImage}
                />
                <p className={styles.articleDescription}>{article.description}</p>
                <p>{article.content}</p>
                <button onClick={handleGoBack} className={styles.goBackButton}>
                    ← Повернутися назад
                </button>
            </div>
        </section>
    );
};

export default ArticleDetails;
