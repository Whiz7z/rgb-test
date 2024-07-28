import React from 'react'
import styles from './Header.module.scss'
import LogoSvg from '../../svg/LogoSvg'
import CalendarSvg from '../../svg/CalendarSvg';
import ClockSvg from '../../svg/ClockSvg';
import MobileLogo from '../../svg/MobileLogo'

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <a href="#" className={styles.desktopLogo}>
        <LogoSvg />
      </a>

      <a href="#" className={styles.mobileLogo}>
        <MobileLogo />
      </a>

      <div className={styles.date}>
        <div className={styles.calendar}>
          <CalendarSvg />
          <span>28 декабря</span>
        </div>

        <div className={styles.clock}>
          <ClockSvg />
          <span>3,5 часа</span>
        </div>
      </div>
    </div>
  );
}

export default Header
