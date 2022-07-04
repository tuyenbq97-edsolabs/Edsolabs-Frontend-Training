import moment from 'moment';
import { Card } from 'react-bootstrap';
import { StyledSubCategoryName } from '../card-new-large/styled';
import {
  StyledCard,
  StyledCardTextFirst,
  StyledCardTitle,
  StyledCardTextSecond,
  StyledCardTextFooter,
  StyledCardBody,
} from './styled';
export interface CardNewProps {
  news: CardNewItem;
}

export interface CardNewItem {
  id: number;
  title: string;
  imageUrl: string;
  shortDescription: string;
  source: string;
  publishDate: string;
  subCategory: {
    name: string;
  };
  category: {
    name: string;
  };
}
export default function CardNew({ news }: CardNewProps) {
  return (
    <div className="p-0">
      <StyledCard className="border-0">
        <Card.Img variant="top" src={news.imageUrl} />
        <StyledSubCategoryName>{news.subCategory.name}</StyledSubCategoryName>
        <StyledCardBody>
          <StyledCardTextFirst>{news.category.name}</StyledCardTextFirst>
          <StyledCardTitle className="mb-3">{news.title}</StyledCardTitle>
          <StyledCardTextSecond className="mb-2">
            {news.shortDescription}
          </StyledCardTextSecond>

          <div>
            <StyledCardTextFooter>{news.source}</StyledCardTextFooter>

            <StyledCardTextFooter>
              {moment(news.publishDate).format('MMM DD YYYY')}
            </StyledCardTextFooter>
          </div>
        </StyledCardBody>
      </StyledCard>
    </div>
  );
}
