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
  content: string;
  id: number;
  title: string;
  imageUrl: string;
  shortDescription: string;
  source: string;
  slug: string;
  publishDate: string;
  subCategory: {
    name: string;
  };
  viewType: string;
  category: {
    name: string;
    icon: string;
    slug: string;
  };
  articles: CardNewItem[];
  moreArticles: [
    {
      imageUrl: string;
      title: string;
      slug: string;
    }
  ];
}
export default function CardNew({ news }: CardNewProps) {
  return (
    <div className="p-0">
      <StyledCard className="border-0">
        <Card.Img variant="top" src={news.imageUrl} />
        <StyledSubCategoryName>{news.subCategory.name}</StyledSubCategoryName>
        <StyledCardBody>
          <StyledCardTitle className="mb-3">{news.title}</StyledCardTitle>
          <StyledCardTextSecond className="mb-2">
            {news.shortDescription}
          </StyledCardTextSecond>

          <div>
            <StyledCardTextFooter>{news.source}</StyledCardTextFooter>

            <StyledCardTextFooter>
              {moment(news.publishDate).format(' MMM DD  YYYY')}
            </StyledCardTextFooter>
          </div>
        </StyledCardBody>
      </StyledCard>
    </div>
  );
}
