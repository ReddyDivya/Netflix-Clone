import request from './request';
import Row from './Row';

function Comedy() {
    return (
        <>
            <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
        </>
    );
}

export default Comedy;