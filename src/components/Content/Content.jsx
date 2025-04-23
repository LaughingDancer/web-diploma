import styles from './Content.module.css';

const Content = () => {
  return (
    <div className={styles.text}>
      <h1>Почему стоит использовать нашу информационно-аналитическую систему для управления производственной фабрикой?</h1>
      
      <p className={styles.intro}>Современные предприятия по пошиву спецодежды сталкиваются с рядом вызовов: рост требований к качеству продукции, жесткие сроки исполнения заказов и необходимость минимизации производственных затрат. Наша информационно-аналитическая система «Морион» разработана специально для решения этих задач, предлагая комплексный подход к автоматизации и оптимизации производственных процессов.</p>
      
      <div className={styles.keyPlus}>
        <h2>Ключевые преимущества системы:</h2>
        <div className={styles.recentPostsContainer}>
          <div className={styles.recentPostsItems}>
            <div className={styles.recentPostsColumn}>
              <article className={`${styles.recentPostsItem} ${styles.recentPost}`}>
                <p className={styles.recentPostLink}>
                  <span className={styles.featureIcon}>📊</span>
                  Оптимизация производства и снижение затрат
                </p>
                <div className={styles.featureContent}>
                  <p>Система автоматически рассчитывает оптимальное использование материалов, минимизируя отходы.</p>
                  <p>Встроенные алгоритмы на основе библиотеки Guna.Charts позволяют визуализировать данные о производственных процессах, помогая принимать обоснованные решения.</p>
                </div>
              </article>
            </div>

            <div className={styles.recentPostsColumn}>
              <article className={`${styles.recentPostsItem} ${styles.recentPost}`}>
                <p className={styles.recentPostLink}>
                  <span className={styles.featureIcon}>⚡</span>
                  Повышение эффективности управления заказами
                </p>
                <div className={styles.featureContent}>
                  <p>Удобный интерфейс для оформления, дублирования и отслеживания заказов ускоряет работу операторов.</p>
                  <p>Интеграция с базой данных обеспечивает мгновенный доступ к актуальной информации.</p>
                </div>
              </article>
            </div>
          </div>

          <div className={styles.recentPostsItems}>
            <div className={styles.recentPostsColumn}>
              <article className={`${styles.recentPostsItem} ${styles.recentPost}`}>
                <p className={styles.recentPostLink}>
                  <span className={styles.featureIcon}>🔧</span>
                  Гибкость и масштабируемость
                </p>
                <div className={styles.featureContent}>
                  <p>Система поддерживает работу с внешними API, что позволяет легко интегрировать её с другими сервисами.</p>
                  <p>Возможность расширения функционала под конкретные нужды предприятия.</p>
                </div>
              </article>
            </div>

            <div className={styles.recentPostsColumn}>
              <article className={`${styles.recentPostsItem} ${styles.recentPost}`}>
                <p className={styles.recentPostLink}>
                  <span className={styles.featureIcon}>🔒</span>
                  Многоуровневая система безопасности и контроля
                </p>
                <div className={styles.featureContent}>
                  <p>Разграничение прав доступа для разных ролей</p>
                  <p>Шифрование паролей, ведение журнала изменений и автоматическое резервное копирование данных.</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.benefitsSection}>
        <h2 className={styles.benefitsTitle}>Внедрение системы «Морион» позволяет:</h2>
        <ul className={styles.benefitsList}>
          <li className={styles.benefitItem}>
            <span className={styles.benefitIcon}>⏱️</span>
            <span className={styles.benefitText}>Сократить время выполнения заказов на 20-30%</span>
          </li>
          <li className={styles.benefitItem}>
            <span className={styles.benefitIcon}>💰</span>
            <span className={styles.benefitText}>Уменьшить затраты на материалы за счет оптимизации раскроя ткани</span>
          </li>
          <li className={styles.benefitItem}>
            <span className={styles.benefitIcon}>👁️</span>
            <span className={styles.benefitText}>Повысить прозрачность производственных процессов и качество выпускаемой продукции</span>
          </li>
        </ul>
      </div>

      <div className={styles.solutionWrapper}>
        <p className={styles.solution}>
          <span className={styles.solutionHighlight}>Наше решение</span> — это не просто программный продукт, а надежный инструмент для роста и развития вашего предприятия. Оно сочетает в себе передовые технологии, удобство использования и высокий уровень безопасности, что делает его идеальным выбором для современных производственных фабрик.
        </p>
      </div>

      <div className={styles.ctaSection}>
        <h3 className={styles.ctaTitle}>Выбирайте эффективность — выбирайте «Морион»!</h3>
        <a href='https://github.com/LaughingDancer/Morion' target="_blank" className={styles.ctaButton}>GitHub</a>
      </div>
    </div>
)
}

export default Content;