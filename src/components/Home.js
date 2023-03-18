import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Row from './Row';
import request from './request';
import Banner from './Banner';
import Navbar from './Navbar';
import NavMenu from './NavMenu';
import Welcome from './Welcome';
import Action from './Action';
import Comedy from './Comedy';
import Horror from './Horror';
import Romance from './Romance';
import Documentry from './Documentry';

function Home() {
    return (
        <div>
            {/* Routing */}
            {/* <Router>
                <Switch>
                    <Route path="/" exact >
                        <Redirect to="/Welcome" />
                    </Route>
                    <Route path="/Welcome" component={Welcome} />
                    <Route path="/Action" component={Action} />
                    <Route path="/Comedy" component={Comedy} />
                    <Route path="/Horror" component={Horror} />
                    <Route path="/Romance" component={Romance} />
                    <Route path="/Documentry" component={Documentry} />
                </Switch>
                <NavMenu />
            </Router> */}
            {/* Navbar */}
            <Navbar />
            {/* Banner */}
            <Banner />
            {/* Netflix Originals */}
            <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals} isLargeRow />
            {/* Trending Now */}
            <Row title="Trending Now" fetchUrl={request.fetchTrending} />
            {/* Top Rated */}
            <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
            {/*Action Movies  */}
            <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
            {/* Comedy Movies */}
            <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
            {/* Horror Movies  */}
            <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
            {/* Romance Movies */}
            <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
            {/* Documentaries */}
            <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
        </div>
    );
}

export default Home;
