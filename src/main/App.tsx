import { Route, Switch } from 'react-router-dom';
import recommended from './recommended-sample';
import { useState, useEffect } from 'react';
import { TopsterTemplate } from '../interface.js';
import Bookmarks from '../bookmarks/Bookmarks';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Topster from '../topster/Topster';
import Main from './Main';
import NewTopster from '../create/NewTopster';
import './main-styles/Page.css';
import Page from './Page';
import Landing from '../landing/Landing';
import defaultTopsters from './defaultTopsters';
import { UserContext } from './UserContext';

const App: React.FC = () => {
  const savedTopsters = JSON.parse(
    window.localStorage.getItem('topsters') || `{}`
  );
  const savedBookmarked = JSON.parse(
    window.localStorage.getItem('bookmarks') || '{}'
  );

  const [openLandingModal, setOpenLandingModal] = useState(true);
  const [topsters, setTopsters] = useState(
    Object.keys(savedTopsters).length ? savedTopsters : defaultTopsters
  );
  const [bookmarks, setBookmarks] = useState(
    Object.keys(savedBookmarked).length ? savedBookmarked : []
  );

  useEffect(() => {
    let localStorageBookmarks = JSON.parse(
      window.localStorage.getItem('bookmarks')
    );
    if (localStorageBookmarks && localStorageBookmarks.length) {
      for (let lsItem of localStorageBookmarks) {
        // eslint-disable-next-line array-callback-return
        recommended.map((recItem) => {
          if (lsItem.id === recItem.id) {
            recItem.bookmarked = lsItem.bookmarked;
          }
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    window.localStorage.setItem('topsters', JSON.stringify(topsters));
  });

  const findUserTopsters = (id: string) => {
    return topsters.find((topster: TopsterTemplate) => {
      return topster.id === id;
    });
  };
  const findRecommendedTopsters = (id: string) => {
    return recommended.find((topster: any) => {
      return topster.id === id;
    });
  };
  const saveTopsters = (newTopster: TopsterTemplate) => {
    setTopsters([...topsters, newTopster]);
  };
  return (
    <UserContext.Provider value={topsters}>
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition classNames="page" timeout={500} key={location.key}>
              <Switch location={location}>
                <Route
                  exact
                  path="/"
                  render={(routeProps) => (
                    <Page>
                      <Landing
                        {...routeProps}
                        openLandingModal={openLandingModal}
                        setOpenLandingModal={setOpenLandingModal}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path="/home"
                  render={(routeProps) => (
                    <Page>
                      <Main
                        recommended={recommended}
                        {...routeProps}
                        setTopsters={setTopsters}
                        setOpenLandingModal={setOpenLandingModal}
                        bookmarks={bookmarks}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path="/topsters/new"
                  render={(routeProps) => (
                    <Page>
                      <NewTopster saveTopsters={saveTopsters} {...routeProps} />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path="/recommended/:id"
                  render={(routeProps) => (
                    <Page>
                      <Topster
                        title={
                          findRecommendedTopsters(routeProps.match.params.id)
                            .title
                        }
                        id={
                          findRecommendedTopsters(routeProps.match.params.id).id
                        }
                        albums={
                          findRecommendedTopsters(routeProps.match.params.id)
                            .albums
                        }
                        recommended={recommended}
                        {...routeProps}
                        bookmarks={bookmarks}
                        setBookmarks={setBookmarks}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path="/bookmarks"
                  render={(routeProps) => (
                    <Page>
                      <Bookmarks
                        {...routeProps}
                        bookmarks={bookmarks}
                        setBookmarks={setBookmarks}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path="/bookmarks/:id"
                  render={(routeProps) => (
                    <Page>
                      <Topster
                        title={
                          findRecommendedTopsters(routeProps.match.params.id)
                            .title
                        }
                        id={
                          findRecommendedTopsters(routeProps.match.params.id).id
                        }
                        albums={
                          findRecommendedTopsters(routeProps.match.params.id)
                            .albums
                        }
                        recommended={recommended}
                        {...routeProps}
                        bookmarks={bookmarks}
                        setBookmarks={setBookmarks}
                      />
                    </Page>
                  )}
                />

                <Route
                  exact
                  path="/topsters/:id"
                  render={(routeProps) => (
                    <Page>
                      <Topster
                        title={
                          findUserTopsters(routeProps.match.params.id).title
                        }
                        id={findUserTopsters(routeProps.match.params.id).id}
                        albums={
                          findUserTopsters(routeProps.match.params.id).albums
                        }
                        {...routeProps}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path="/topsters/edit/:id"
                  render={(routeProps) => (
                    <Page>
                      <NewTopster saveTopsters={saveTopsters} {...routeProps} />
                    </Page>
                  )}
                />
                <Route
                  render={(routeProps) => (
                    <Page>
                      <Main
                        recommended={recommended}
                        {...routeProps}
                        setTopsters={setTopsters}
                        setOpenLandingModal={setOpenLandingModal}
                        bookmarks={bookmarks}
                      />
                    </Page>
                  )}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </UserContext.Provider>
  );
};

export default App;
