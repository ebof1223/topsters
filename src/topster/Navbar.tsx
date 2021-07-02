import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from './topster-styles/NavbarStyles';
import EditIcon from '@material-ui/icons/Edit';
import HomeIcon from '@material-ui/icons/Home';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import ToggleBookmarkSnackBar from '../ToggleBookmarkSnackBar';

interface Props {
  classes: {
    Navbar: string;
    Title: string;
    Icon: string;
    IconOn: string;
  };
  title: string;
  history: { push: (input: string) => void };
  id: string;
  type?: string;
  bookmarks?: [];
  setBookmarks?: any;
  recommended?: any;
  initial: boolean;
  setInitial: any;
}
const Navbar: React.FC<Props> = ({
  classes,
  title,
  id,
  history,
  type,
  bookmarks,
  setBookmarks,
  recommended,
  initial,
}) => {
  const [bookmarkSaved, setBookmarkSaved] = useState(initial);
  const [openSnackBar, setOpenSnackBar] = useState(false);

  useEffect(() => {
    let current: any[];
    if (initial) return;
    if (bookmarkSaved) {
      current = recommended.filter((item: { id: string }) => item.id === id);
      setBookmarks([...current, ...bookmarks]);
    } else {
      current = bookmarks.filter((item: { id: string }) => item.id !== id);
      setBookmarks([...current]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookmarkSaved]);

  const handleEdit = () => {
    history.push(`/topsters/edit/${id}`);
  };

  const handleBookmarkToggle = () => {
    setBookmarkSaved(!bookmarkSaved);
    if (!bookmarkSaved) {
      setOpenSnackBar(true);
    }
  };
  return (
    <>
      <ToggleBookmarkSnackBar
        openSnackBar={openSnackBar}
        setOpenSnackBar={setOpenSnackBar}
      />
      <header className={classes.Navbar}>
        <Link to={'/home'}>
          <HomeIcon
            style={{ marginLeft: '3rem', cursor: 'pointer', color: 'black' }}
          />
        </Link>
        <div className={classes.Title}>
          <h3>{title}</h3>
        </div>
        {type === 'topsters' ? (
          <EditIcon className={classes.Icon} onClick={handleEdit} />
        ) : (
          <BookmarksIcon
            className={bookmarkSaved ? classes.IconOn : classes.Icon}
            onClick={handleBookmarkToggle}
          />
        )}
      </header>
    </>
  );
};

export default withStyles(styles)(Navbar);
