import request from './request';
import Row from './Row';

function Documentry() {
    return (
        <>
            <Row title="Documentries" fetchUrl={request.fetchDocumentaries} />
        </>
    );
}

export default Documentry;