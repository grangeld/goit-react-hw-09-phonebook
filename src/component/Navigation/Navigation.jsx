import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import { useSelector } from 'react-redux';
import UserMenu from '../UserMenu';
import Container from '../Container';

export default function Navigation() {
  const isLoginIn = useSelector(state => state.user.token);
  return (
    <Container>
      <div className={styles.content}>
        {isLoginIn && (
          <ul className={styles.navbar}>
            <li className={styles.li}>
              <NavLink
                exact
                to="/contacts"
                className={styles.link}
                activeClassName={styles.activeLink}
              >
                Phone
              </NavLink>
            </li>
          </ul>
        )}
        <div></div>

        <ul className={`${styles.navbar}  ${styles.left}`}>
          {!isLoginIn && (
            <>
              <li className={styles.li}>
                <NavLink
                  to="/register"
                  className={styles.link}
                  activeClassName={styles.activeLink}
                >
                  Registration
                </NavLink>
              </li>
              <li className={styles.li}>
                <NavLink
                  to="/login"
                  className={styles.link}
                  activeClassName={styles.activeLink}
                >
                  Login
                </NavLink>
              </li>
            </>
          )}
          {isLoginIn && (
            <li className={styles.logout}>
              <UserMenu />
            </li>
          )}
        </ul>
      </div>
    </Container>
  );
}
