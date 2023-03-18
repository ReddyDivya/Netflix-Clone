import request from './request';
import Row from './Row';

function Action() {
    return (
        <>
            <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
        </>
    );
}

export default Action;