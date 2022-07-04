import CardNew from '../components/card-new/card-new';
import { Col, Row } from 'react-bootstrap';

export interface DataGlobalNew {
  setDataNews?: any;
  dataNews: any[];
}
export default function GlobalNewContainer({ dataNews }: DataGlobalNew) {
  return (
    <div>
      <Row>
        {dataNews &&
          dataNews.map((itemNews, idxNew) => (
            <Col key={idxNew} md={3}>
              <CardNew news={itemNews} />
            </Col>
          ))}
      </Row>
    </div>
  );
}
