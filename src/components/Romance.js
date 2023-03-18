import request from './request';
import Row from './Row';

function Romance() {
    return (
        <>
            <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
        </>
    );
}

export default Romance;