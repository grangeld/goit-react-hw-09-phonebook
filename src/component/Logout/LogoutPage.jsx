import { useDispatch } from 'react-redux';
import { logout } from '../../redux/user/operations';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import style from './logout.module.css';

const LogoutPage = () => {
  const dispatch = useDispatch();

  // return <button onClick={() => dispatch(logout())}>Log out</button>;
  return (
    <>
      <Button
        onClick={() => dispatch(logout())}
        variant="contained"
        color="primary"
      >
        <ExitToAppIcon className={style.icon} />
        Log out
      </Button>
    </>
  );
};

export default LogoutPage;
