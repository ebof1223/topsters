import { arrayMove } from 'react-sortable-hoc';

import BookmarksContainer from './Components/DraggableField';
import HomeIcon from '@material-ui/icons/Home';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import styles from './Bookmarks-styles';
import { Tooltip } from '@material-ui/core';
import { TopsterTemplate } from '../../App/Constants/interface';
import { withStyles } from '@material-ui/styles';

interface Props {
  classes: {
    root: string;
    topster: string;
    BackButton: string;
    PriorityContainer: string;
    PriorityText: string;
  };
  bookmarks: TopsterTemplate[];
  setBookmarks: any;
  history: {
    push: (input: string) => void;
  };
}

const Bookmarks: React.FC<Props> = ({
  classes,
  bookmarks,
  setBookmarks,
  history,
}) => {
  const onSortEnd = ({
    oldIndex,
    newIndex,
  }: {
    oldIndex: number;
    newIndex: number;
  }) => {
    document.body.style.cursor = 'default';
    if (oldIndex === newIndex) return;
    let newBookmarks = arrayMove(bookmarks, oldIndex, newIndex);
    setBookmarks([...newBookmarks]);
  };
  return (
    <div className={classes.root}>
      <div className={classes.BackButton}>
        <Tooltip title="Home">
          <HomeIcon fontSize="large" onClick={() => history.push('/home')} />
        </Tooltip>
      </div>
      <div className={classes.PriorityContainer}>
        <KeyboardBackspaceIcon color="primary" fontSize="large" />
        <h2 className={classes.PriorityText}>Priority</h2>
      </div>
      <BookmarksContainer
        axis="xy"
        onSortStart={() => (document.body.style.cursor = 'grabbing')}
        onSortEnd={onSortEnd}
        bookmarks={bookmarks}
      />
    </div>
  );
};
export default withStyles(styles)(Bookmarks);
