import { useContext, useState } from 'react';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import BookmarksSection from './Sections/Bookmarks/BookmarksSection';
import DeleteModal from './Sections/UserTopsters/Components/Delete Modal/DeleteModal';
import RecommendedSection from './Sections/Recommended/RecommendedSection';
import styles from './Home-styles';
import Tooltip from '@material-ui/core/Tooltip';
import { TopsterTemplate } from '../../App/Constants/interface';
import UserTopstersSection from './Sections/UserTopsters/UserTopstersSection';
import { UserContext } from './Sections/UserTopsters/Hooks/UserContext';
import { withStyles } from '@material-ui/styles';

interface Props {
  classes: {
    root: string;
    BackButton: string;
  };
  history: {
    push: (input: string) => void;
  };
  setTopsters: (input: TopsterTemplate[]) => void;
  recommended?: any;
  setOpenLandingModal: (i: boolean) => void;
  bookmarks: TopsterTemplate[];
}

const Main: React.FC<Props> = ({
  history,
  setTopsters,
  classes,
  recommended,
  setOpenLandingModal,
  bookmarks,
}) => {
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [toBeDeleted, setToBeDeleted] = useState(null);
  let test = useContext(UserContext);

  const handleDeleteConfirmation = () => {
    let newTopster = test.filter(
      (item: TopsterTemplate) => item.id !== toBeDeleted
    );
    setTopsters([...newTopster]);
    setDeleteDialog(!deleteDialog);
  };

  const handleLandingModal = () => {
    history.push('/');
    setTimeout(() => {
      setOpenLandingModal(true);
    }, 100);
  };
  return (
    <>
      <div className={classes.root}>
        <div className={classes.BackButton}>
          <Tooltip title="Landing">
            <ArrowBackIcon
              fontSize="large"
              onClick={handleLandingModal}
              style={{ cursor: 'pointer' }}
            />
          </Tooltip>
        </div>
        <RecommendedSection recommended={recommended} history={history} />
        <UserTopstersSection
          history={history}
          deleteDialog={deleteDialog}
          setDeleteDialog={setDeleteDialog}
          setToBeDeleted={setToBeDeleted}
        />
        <BookmarksSection bookmarks={bookmarks} history={history} />
      </div>
      <DeleteModal
        handleDeleteConfirmation={handleDeleteConfirmation}
        deleteDialog={deleteDialog}
        setDeleteDialog={setDeleteDialog}
      />
    </>
  );
};

export default withStyles(styles)(Main);
