import request from './request';
import Row from './Row';

function Horror() {
    return (
        <>
            <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
        </>
    );
}

export default Horror;