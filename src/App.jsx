
import styles from  './App.module.scss'
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import WebinarInfo from './components/WebinarInfo/WebinarInfo';
import iconsImage from './assets/imgs/icons.png'
import footerImg from './assets/imgs/footer.png'

import teacherImg from "./assets/imgs/teacher.png";
import bonusImg from "./assets/imgs/present.png";

function App() {

  return (
    <>
      <div className={styles.background}>
        <div className={styles.blurryOne}></div>
        <div className={styles.blurrySecond}></div>
      </div>
      <div className={styles.mainContainer}>
        <Header />

        <div className={styles.contentContainer}>
          <WebinarInfo />
          <Form />
          <div className={styles.featuresMobile}>
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

            <div className={`${styles.feature} ${styles.tutorFeature}`}>
              <div className={styles.featureImage}>
                <img src={teacherImg} alt="tutor" />
              </div>
              <div className={styles.featureInfo}>
                <h3>
                  Кирилл <span>Касатонов</span>
                </h3>
                <p>
                  6 лет коммерческого опыта
                  <br /> с такими компаниями как
                  
                  <br /> Mercedes-Benz и другими
                  <br /> крупными корпорациями
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.icons}>
          <div className={styles.iconContainer}>
            <img src={iconsImage} alt="" />
          </div>
        </div>
        <div className={styles.footerTextMobile}>
          <img src={footerImg} alt="" />
        </div>
      </div>
      <div className={styles.footerText}>
        <img src={footerImg} alt="" />
      </div>
    </>
  );
}

export default App
