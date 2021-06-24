import { withStyles } from '@material-ui/core/styles';
import { AlbumStructure, ToppingsStructure } from './interface';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import SaveButton from './SaveButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import styles from './styles/NewToppingsFormNavStyles';
import BackButton from './BackButton';
import DoublyLinkedList from 'dbly-linked-list';
import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorIcon from '@material-ui/icons/Error';
import Tooltip from '@material-ui/core/Tooltip';

type Node = {
  data: AlbumStructure[] | null;
  next: AlbumStructure[] | null;
  prev: AlbumStructure[] | null;
};

interface Props {
  classes: {
    root: string;
    hide: string;
    appBar: string;
    appBarShift: string;
    menuButton: string;
    btnContainer: string;
  };
  openDrawer: boolean;
  setOpenDrawer: (input: boolean) => void;
  history: {
    push: (input: string) => void;
  };
  match: { params: any };
  setUserToppings: (args: object) => void;
  userToppings: AlbumStructure[] | undefined;
  toppings: ToppingsStructure[];
  saveToppings: (input: ToppingsStructure) => void;
  userToppingsName: string;
  setUserToppingsName: (input: string) => void;
  userToppingsHistory: DoublyLinkedList;
  setCurrentNode: (input: {}) => void;
  currentNode: {
    data: Node;
    next: Node;
    prev: Node;
  };
  nodesFromTail: number;
  setNodesFromTail: (input: number) => void;
  isLoading: boolean;
  noResults: boolean;
  setOpenConfirm: (i: boolean) => void;
  openConfirm: boolean;
}

const NewToppingsFormNav: React.FC<Props> = ({
  classes,
  openDrawer,
  setOpenDrawer,
  history,
  setUserToppings,
  userToppings,
  toppings,
  saveToppings,
  userToppingsName,
  setUserToppingsName,
  match,
  userToppingsHistory,
  setCurrentNode,
  currentNode,
  nodesFromTail,
  setNodesFromTail,
  isLoading,
  noResults,
  openConfirm,
  setOpenConfirm,
}) => {
  const handleUndo = () => {
    setUserToppings(currentNode.prev.data);
    setCurrentNode(currentNode.prev);
    setNodesFromTail(nodesFromTail + 1);
  };
  const handleRedo = () => {
    setUserToppings(currentNode.next.data);
    setCurrentNode(currentNode.next);
    setNodesFromTail(nodesFromTail - 1);
  };

  var Undo = (
    <Button
      onClick={handleUndo}
      disabled={currentNode && currentNode.prev === null}
    >
      <UndoIcon />
    </Button>
  );

  var Redo = (
    <Button
      onClick={handleRedo}
      disabled={currentNode && currentNode.next === null}
      style={{ marginRight: '5rem' }}
    >
      <RedoIcon />
    </Button>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        color="inherit"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: openDrawer,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpenDrawer(!openDrawer)}
            edge="start"
            className={clsx(classes.menuButton, openDrawer && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap></Typography>
        </Toolbar>
      </AppBar>
      <CssBaseline />
      <AppBar
        color="inherit"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: openDrawer,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpenDrawer(!openDrawer)}
            edge="start"
            className={clsx(classes.menuButton, openDrawer && classes.hide)}
          >
            <ChevronRightIcon color="primary" />
          </IconButton>
        </Toolbar>
        <div className={classes.btnContainer}>
          {currentNode && currentNode.prev === null ? (
            Undo
          ) : (
            <Tooltip title="Undo">{Undo}</Tooltip>
          )}
          {currentNode && currentNode.next === null ? (
            Redo
          ) : (
            <Tooltip title="Redo">{Redo}</Tooltip>
          )}
          {isLoading && <CircularProgress />}
          {!isLoading && noResults && (
            <Tooltip title="No results found. Please try again.">
              <ErrorIcon fontSize="large" />
            </Tooltip>
          )}
          <BackButton
            userToppings={userToppings}
            history={history}
            setCurrentNode={setCurrentNode}
            userToppingsHistory={userToppingsHistory}
          />
          <SaveButton
            userToppingsName={userToppingsName}
            setUserToppingsName={setUserToppingsName}
            userToppings={userToppings}
            toppings={toppings}
            history={history}
            saveToppings={saveToppings}
            match={match}
            setCurrentNode={setCurrentNode}
            userToppingsHistory={userToppingsHistory}
            openConfirm={openConfirm}
            setOpenConfirm={setOpenConfirm}
          />
        </div>
      </AppBar>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(NewToppingsFormNav);
