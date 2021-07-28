import SubMainHeading from './SubMainHeading';
import { TopsterTemplate } from '../interface';
import { useEffect, useRef, useState } from 'react';
import { withStyles } from '@material-ui/styles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import UpNext from './UpNext';
import Tooltip from '@material-ui/core/Tooltip';
import styles from './main-styles/Main-styles';
import UserTopsters from './UserTopsters';
import DeleteModal from './DeleteModal';
import Recommended from './Recommended';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

interface Props {
  classes: {
    root: string;
    OuterContainer: string;
    RecommendedTopsters: string;
    UserTopsters: string;
    RecommendedTitle: string;
    RecommendedTitleContainer: string;
    BackButton: string;
    subMain: string;
    AOTDTitleContainer: string;
    RecommendedSection: string;
    RecommendedContainer: string;
    topstersSection: string;
    recommendedArrowVisible: string;
    recommendedArrowHidden: string;
    topsterScrollDownIconOn: string;
    topsterScrollDownIconOff: string;
    topsterScrollUpIconOn: string;
    topsterScrollUpIconOff: string;
  };
  topsters: TopsterTemplate[];
  history: {
    push: (input: string) => void;
  };
  setTopsters: (input: TopsterTemplate[]) => void;
  recommended?: any;
  setOpenLandingModal: (i: boolean) => void;
  bookmarks: TopsterTemplate[];
}

const Main: React.FC<Props> = ({
  topsters,
  history,
  setTopsters,
  classes,
  recommended,
  setOpenLandingModal,
  bookmarks,
}) => {
  const RecommendedSectionalRef = useRef(null);
  const TopsterContainerRef = useRef(null);

  const elementRef: React.MutableRefObject<HTMLDivElement> = useRef();
  useEffect(() => {
    elementRef.current && elementRef.current.scrollIntoView();
  }, []);

  const [deleteDialog, setDeleteDialog] = useState(false);
  const [toBeDeleted, setToBeDeleted] = useState(null);
  const [currentRecSection, setCurrentRecSection] = useState(null);
  const [currentTopSection, setCurrentTopSection] = useState(null);
  const [currentRecIndex, setCurrentRecIndex] = useState(0);
  const [currentTopIndex, setCurrentTopIndex] = useState(null);

  useEffect(() => {
    setCurrentRecSection(
      RecommendedSectionalRef.current.parentElement.childNodes[currentRecIndex]
    );
    setCurrentTopSection(
      TopsterContainerRef.current.childNodes[
        TopsterContainerRef.current.childNodes.length - 1
      ]
    );
    setCurrentTopIndex(TopsterContainerRef.current.childNodes.length - 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDeleteConfirmation = () => {
    let newTopster = topsters.filter((item) => item.id !== toBeDeleted);
    setTopsters([...newTopster]);
    setDeleteDialog(!deleteDialog);
  };

  const handleLandingModal = () => {
    history.push('/');
    setTimeout(() => {
      setOpenLandingModal(true);
    }, 100);
  };

  const divideBySection = (type: typeof recommended | typeof topsters) => {
    var sectionLength = type === recommended ? 5 : 8;
    let copy = [...type];
    let grouping = [];
    while (copy.length) grouping.push(copy.splice(0, sectionLength));
    return grouping;
  };

  const handleRecArrows = (direction: string) => {
    if (direction === 'next' && currentRecSection.nextSibling) {
      currentRecSection.nextSibling?.scrollIntoView({ behavior: 'smooth' });
      setCurrentRecSection(currentRecSection.nextSibling);
      setCurrentRecIndex(currentRecIndex + 1);
    }
    if (direction === 'previous' && currentRecSection.previousSibling) {
      currentRecSection.previousSibling?.scrollIntoView({ behavior: 'smooth' });
      setCurrentRecSection(currentRecSection.previousSibling);
      setCurrentRecIndex(currentRecIndex - 1);
    }
  };
  const handleTopArrows = (direction: string) => {
    if (direction === 'next' && currentTopSection.nextSibling) {
      currentTopSection.nextSibling?.scrollIntoView({ behavior: 'smooth' });
      setCurrentTopSection(currentTopSection.nextSibling);
      setCurrentTopIndex(currentTopIndex + 1);
    }
    if (direction === 'previous' && currentTopSection.previousSibling) {
      currentTopSection.previousSibling?.scrollIntoView({ behavior: 'smooth' });
      setCurrentTopSection(currentTopSection.previousSibling);
      setCurrentTopIndex(currentTopIndex - 1);
    }
  };
  return (
    <>
      <div className={classes.root}>
        <div className={classes.OuterContainer}>
          <div className={classes.BackButton}>
            <Tooltip title="Landing">
              <ArrowBackIcon
                fontSize="large"
                onClick={handleLandingModal}
                style={{ cursor: 'pointer' }}
              />
            </Tooltip>
          </div>
          <div className={classes.RecommendedTitleContainer}>
            <h2 className={classes.RecommendedTitle}>Recommended</h2>
          </div>
          <div className={classes.RecommendedContainer}>
            <ArrowLeftIcon
              className={
                currentRecSection && currentRecSection.previousSibling
                  ? classes.recommendedArrowVisible
                  : classes.recommendedArrowHidden
              }
              color="primary"
              onClick={() => handleRecArrows('previous')}
            />
            <TransitionGroup className={classes.RecommendedTopsters}>
              {divideBySection(recommended).map((group, i) => (
                <CSSTransition
                  classNames="fade"
                  timeout={500}
                  key={`recommended-group-${i}`}
                >
                  <section
                    className={classes.RecommendedSection}
                    ref={RecommendedSectionalRef}
                  >
                    {group.map((item: TopsterTemplate) => (
                      <Recommended
                        {...item}
                        handleClick={() =>
                          history.push(`/recommended/${item.id}`)
                        }
                        id={item.id}
                        recommended={recommended}
                        title={item.title}
                        key={`group-item-${item.id}`}
                      />
                    ))}
                  </section>
                </CSSTransition>
              ))}
            </TransitionGroup>
            <ArrowRightIcon
              className={
                currentRecSection && currentRecSection.nextSibling
                  ? classes.recommendedArrowVisible
                  : classes.recommendedArrowHidden
              }
              color="primary"
              onClick={() => handleRecArrows('next')}
            />
          </div>
          <SubMainHeading bookmarks={bookmarks} history={history} />
          {currentTopSection && (
            <ExpandLessIcon
              className={
                currentTopSection.previousSibling
                  ? classes.topsterScrollUpIconOn
                  : classes.topsterScrollUpIconOff
              }
              onClick={() => handleTopArrows('previous')}
            />
          )}
          <div className={classes.subMain}>
            <div className={classes.UserTopsters} ref={TopsterContainerRef}>
              {divideBySection(topsters).map((group, i) => (
                <div
                  key={`userTopsters-group-${i}`}
                  className={classes.topstersSection}
                >
                  {group.map((item: TopsterTemplate) => (
                    <CSSTransition
                      key={item.id}
                      classNames="fade"
                      timeout={500}
                    >
                      <UserTopsters
                        {...item}
                        handleClick={() => history.push(`/topsters/${item.id}`)}
                        id={item.id}
                        deleteDialog={deleteDialog}
                        setDeleteDialog={setDeleteDialog}
                        setToBeDeleted={setToBeDeleted}
                      />
                    </CSSTransition>
                  ))}
                  <div ref={elementRef} />
                </div>
              ))}
            </div>
            <UpNext bookmarks={bookmarks} history={history} />
          </div>
          {currentTopSection && (
            <ExpandMoreIcon
              className={
                currentTopSection.nextSibling
                  ? classes.topsterScrollDownIconOn
                  : classes.topsterScrollDownIconOff
              }
              onClick={() => handleTopArrows('next')}
            />
          )}
        </div>
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
