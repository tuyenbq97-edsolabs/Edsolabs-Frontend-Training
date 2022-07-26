import moment from 'moment';
import { Card } from 'react-bootstrap';
import { StyledSubCategoryName } from '../card-new-large/styled';
import {
  StyledCardTitle,
  StyledCardTextSecond,
  StyledCardTextFooter,
  StyledCarImg,
  StyledCardTextFirst,
} from './styled';
export interface CardNewProps {
  news: CardNewItem;
  showArticle: boolean;
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
export default function CardNew({ news, showArticle }: CardNewProps) {
  return (
    <div className="p-0">
      <Card className="border-0">
        <StyledCarImg variant="top" src={news.imageUrl} />
        <StyledSubCategoryName>{news.subCategory.name}</StyledSubCategoryName>
        <Card.Body className="py-3 px-0">
          {showArticle && (
            <StyledCardTextFirst className="mb-2">
              {news.category.name}
            </StyledCardTextFirst>
          )}
          <StyledCardTitle className="mb-3 overflow-hidden">
            {news.title}
          </StyledCardTitle>
          <StyledCardTextSecond className="mb-2 overflow-hidden">
            {news.shortDescription}
          </StyledCardTextSecond>

          <div>
            <StyledCardTextFooter className="m-0 overflow-hidden">
              {news.source}
            </StyledCardTextFooter>

            <StyledCardTextFooter>
              {moment(news.publishDate).format(' MMM DD  YYYY')}
            </StyledCardTextFooter>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
