import image from './Images/landing.jpg';
import LoginModule from './Components/WelcomeModule/WelcomeModule';
import styles from './LandingStyles';
import { withStyles } from '@material-ui/styles';

interface Props {
  classes: {
    Scene: string;
    Frame: string;
    Image: string;
  };
  history: {
    goBack: () => void;
    push: (input: string) => void;
  };
  openLandingModal: boolean;
  setOpenLandingModal: (i: boolean) => void;
}

const Landing: React.FC<Props> = ({
  classes,
  history,
  openLandingModal,
  setOpenLandingModal,
}) => {
  return (
    <>
      <LoginModule
        history={history}
        openLandingModal={openLandingModal}
        setOpenLandingModal={setOpenLandingModal}
      />
      <div className={classes.Scene}>
        <div className={classes.Frame}>
          <img className={classes.Image} src={image} alt="background albums" />
        </div>
      </div>
    </>
  );
};

export default withStyles(styles)(Landing);
