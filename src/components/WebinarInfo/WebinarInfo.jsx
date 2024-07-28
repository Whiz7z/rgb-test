
import styles from "./WebinarInfo.module.scss";
import GlobeSvg from "../../svg/GlobeSvg";
import teacherImg from "../../assets/imgs/teacher.png";
import bonusImg from "../../assets/imgs/present.png";

const WebinarInfo = () => {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.webinarPseudoBtn}>
        <GlobeSvg />
        <span>Вебинар</span>
      </div>

      <h1>front-end</h1>

      <div className={styles.secondTitle}>
        <div className={styles.diagonal}>
          <span>с нуля</span>
        </div>
        <span className={styles.text}>легкий старт в IT профессии</span>
      </div>

      <p className={styles.description}>
        Узнайте какими{" "}
        <span>
          {" "}
          навыками должен обладать
          <br /> фронтенд разработчик в 2022 году{" "}
        </span>
        и как начать
        <br /> карьеру в востребованной профессии{" "}
      </p>

      <div className={styles.features}>
        <div className={`${styles.feature} ${styles.tutorFeature}`}>
          <div className={styles.featureImage}>
            <img src={teacherImg} alt="tutor" />
          </div>
          <div className={styles.featureInfo}>
            <h3>
              Кирилл <span>Касатонов</span>
            </h3>
            <p>
              6 лет коммерческого опыта с такими компаниями как
              <br /> Mercedes-Benz и другими крупными корпорациями
            </p>
          </div>
        </div>

        <div className={`${styles.feature} ${styles.bonusFeature}`}>
          <div className={styles.featureImage}>
            <img src={bonusImg} alt="bonus" />
          </div>
          <div className={styles.featureInfo}>
            <h3>Бонус за регистрацию</h3>
            <p>
              PDF-файл {'"'}5 преимуществ
              <br /> профессии фронтенд разработчика{'"'}
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default WebinarInfo;
