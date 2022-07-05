import CardNew, { CardNewItem } from '../components/card-new/card-new';
import { Col, Row, Container } from 'react-bootstrap';

export interface GlobalNewProps {
  setDataNews: (arg: CardNewItem[]) => void;
  dataNews: CardNewItem[];
}
export default function GlobalNewContainer({ dataNews }: GlobalNewProps) {
  return (
    <Container>
      <Row>
        {dataNews &&
          dataNews.map((itemNews, idxNew) => (
            <Col key={idxNew} md={3}>
              <CardNew news={itemNews} />
            </Col>
          ))}
      </Row>
    </Container>
  );
}
