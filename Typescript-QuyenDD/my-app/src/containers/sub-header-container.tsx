import styled from 'styled-components';
import { Row, Col, Carousel, Image, Container } from 'react-bootstrap';
import moment from 'moment';
import CardNewSmall from '../components/card-new-small/card-new-small';
import CardNewLarge from '../components/card-new-large/card-new-large';
import { StyledSubCategoryName } from '../components/card-new-large/styled';
import { StyledCardTextFooter } from '../components/card-new/styled';
import { CardNewItem } from '../components/card-new/card-new';
interface CardNewHeaderProps {
  dataSlider: CardNewItem[];
  dataNewsLarge: CardNewItem[];
  dataNewsSmall: CardNewItem[];
}

const StyledA = styled.a`
  text-decoration: none;
  font-size: 12px;
  font-family: 'Lato Bold';
`;
const StyledTitle = styled.p`
  font-size: 32px;
  margin: 16px 0;
  font-family: 'Lato Black';
  color: #1c1c28;
`;
const StyedCaruosel = styled(Carousel)`
  .carousel-control-next,
  .carousel-control-prev {
    display: none;
  }
`;
const StyledCarouselCaption = styled(Carousel.Caption)`
  position: absolute;
  text-align: left;
  background: #1c1c28;
  opacity: 0.8;
  bottom: 0;
  left: 0;
  right: 0;
  color: #fff;
  padding-left: 24px;
  padding-right: 50px;
`;
export const StyledCardTextHeader = styled(StyledCardTextFooter)`
  color: #c7c8d9;
`;
const StyledCarouseTitle = styled.p`
  font-size: 24px;
  font-family: 'Lato Bold';
  color: #ffffff;
`;
const StyledCarouseSubTitle = styled.p`
  color: #c7c8d9;
  font-size: 16px;
  font-family: 'Lato Regular';
`;
const StyledRow = styled(Row)`
  margin-top: 40px;
  .row {
    --bs-gutter-x: 0rem !important;
  }
`;
export default function SubHeaderContainer({
  dataSlider,
  dataNewsLarge,
  dataNewsSmall,
}: CardNewHeaderProps) {
  return (
    <Container>
      <StyledA href="##">News /</StyledA>
      <StyledTitle>Global news</StyledTitle>
      <span>Always up-to-date to latest telecommuncation news.</span>

      <StyledRow className="p-0 ms-0">
        <Col lg={6} className="p-0">
          <StyedCaruosel className="m-0">
            {dataSlider.map((itemSlider, idx) => (
              <Carousel.Item key={idx}>
                <Image
                  className=" position-relative d-block w-100"
                  src={itemSlider.imageUrl}
                  alt="slider"
                />
                <StyledSubCategoryName>
                  {itemSlider.subCategory.name}
                </StyledSubCategoryName>
                <StyledCarouselCaption>
                  <StyledCardTextHeader>
                    {itemSlider.source} -{' '}
                    {moment(itemSlider.publishDate).format('DD MMM YYYY')}
                  </StyledCardTextHeader>

                  <StyledCarouseTitle className="text-truncate text-nowrap overflow-hidden">
                    {itemSlider.title}
                  </StyledCarouseTitle>
                  <StyledCarouseSubTitle className="text-truncate text-nowrap overflow-hidden">
                    {itemSlider.shortDescription}
                  </StyledCarouseSubTitle>
                </StyledCarouselCaption>
              </Carousel.Item>
            ))}
          </StyedCaruosel>
        </Col>
        <Col lg={6} className="p-0">
          <Row>
            {dataNewsSmall.map((itemSmall, idx) => (
              <Col className="p-0" md={6} key={idx}>
                <CardNewSmall newsCardSmall={itemSmall} />
              </Col>
            ))}
          </Row>
          <Row>
            {dataNewsLarge.map((itemLarge, idx) => (
              <Col className="p-0" key={idx}>
                <CardNewLarge newsCardLarge={itemLarge} />
              </Col>
            ))}
          </Row>
        </Col>
      </StyledRow>
    </Container>
  );
}
