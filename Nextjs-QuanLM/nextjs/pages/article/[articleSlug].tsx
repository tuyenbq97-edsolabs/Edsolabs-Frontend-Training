import moment from 'moment';
import Image from 'next/image';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { SubCategoryNameStyled } from '../../components/card-new-header/card-new-header-sm/style';
import {
  CardStyled,
  TitleFooterStyled,
} from '../../components/card-new/vertical -card/style';
import FooterContainer from '../../containers/footer-container';
import HeaderContainer from '../../containers/header-container';
import { LinkStyled } from '../../containers/header-new-container';
import SubFooterContainer from '../../containers/sub-footer-container';
import phone_icon from '../../assets/icons/phone_icon.svg';
import facebook_icon from '../../assets/icons/facebook_icon.svg';
import gmail_icon from '../../assets/icons/gmai_icon.svg';
import tele_icon from '../../assets/icons/tele_icon.svg';
import twitter_icon from '../../assets/icons/twitter_icon.svg';
import { CardNewItem } from '../../components/card-new/vertical -card/card-new';
import Link from 'next/link';

const ImageStyled = styled(Image)`
  object-fit: cover;
`;

const DateReleaseStyled = styled(TitleFooterStyled)`
  color: #28293d;
  line-height: 28px;
  margin-bottom: 16px;
  margin-top: 16px;
`;

const CardTitleStyled = styled.h3`
  font-size: 32px;
  line-height: 48px;
  color: #1c1c28;
  font-weight: bold;
  margin-bottom: 16px;
`;

const CustomColorStyled = styled(SubCategoryNameStyled)`
  background-color: #2e015b;
  color: white;
`;

const HrStyled = styled.hr`
  margin-top: 63px;
  margin-bottom: 40px;
`;

const CardImgStyled = styled(Card.Img)`
  max-height: 197px;
  object-fit: cover;
  filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1));
  border-radius: 4px;
`;
const CardBodyStyled = styled(Card.Body)`
  padding: 0rem 0rem !important;
`;

interface ArticleProp {
  articles: CardNewItem;
}

function ArticleSlug({ articles }: ArticleProp) {
  const createMarkup = () => {
    return { __html: articles.content };
  };
  return (
    <div>
      <HeaderContainer />
      <Container>
        <Row className="d-flex justify-content-center ">
          <Col lg={2} className="d-none d-xl-inline">
            <DateReleaseStyled>
              {articles.source} -{' '}
              {moment(articles.publishDate).format('DD MMM YYYY')}
            </DateReleaseStyled>
            <div className="d-flex">
              <div className="pe-3">
                <Image src={phone_icon} alt="" />
              </div>
              <div className="pe-3">
                <Image src={twitter_icon} alt="" />
              </div>
              <div className="pe-3">
                <Image src={facebook_icon} alt="" />
              </div>
              <div className="pe-3">
                <Image src={tele_icon} alt="" />
              </div>
              <div>
                <Image src={gmail_icon} alt="" />
              </div>
            </div>
          </Col>
          <Col lg={10}>
            <LinkStyled href="/">NEWS/ GLOBAL NEWS/</LinkStyled>

            <Card className="border-0">
              <CardTitleStyled>{articles.title}</CardTitleStyled>
              <div>
                <CustomColorStyled>
                  {articles.subCategory.name}
                </CustomColorStyled>
                <ImageStyled
                  src={articles.imageUrl}
                  alt=""
                  width={807}
                  height={360}
                  layout="responsive"
                />
              </div>
              <CardBodyStyled>
                <div dangerouslySetInnerHTML={createMarkup()} />
                <DateReleaseStyled>
                  {moment(articles.publishDate).format('DD MMM YYYY')} -{' '}
                  {articles.source}
                </DateReleaseStyled>
                <div className="d-flex">
                  <div className="pe-3 ">
                    <Image src={phone_icon} alt="" />
                  </div>
                  <div className="pe-3">
                    <Image src={twitter_icon} alt="" />
                  </div>
                  <div className="pe-3">
                    <Image src={facebook_icon} alt="" />
                  </div>
                  <div className="pe-3">
                    <Image src={tele_icon} alt="" />
                  </div>
                  <div>
                    <Image src={gmail_icon} alt="" />
                  </div>
                </div>
              </CardBodyStyled>
            </Card>
            <HrStyled />
            <h3 className="mb-4">More stories for you </h3>
            <Row>
              {articles.moreArticles.slice(0, 3).map((item, idx) => (
                <Link
                  key={idx}
                  href={{
                    pathname: '/article/[articleSlug]',
                    query: {
                      articleSlug: item.slug,
                    },
                  }}
                >
                  <Col key={idx} md={4}>
                    <CardStyled className="border-0">
                      <CardImgStyled variant="top" src={item.imageUrl} />
                      <Card.Body>
                        <Card.Text className="mb-4 ">{item.title}</Card.Text>
                      </Card.Body>
                    </CardStyled>
                  </Col>
                </Link>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      <FooterContainer />
      <SubFooterContainer />
    </div>
  );
}

export async function getServerSideProps(context: {
  params: { articleSlug: ArticleProp };
}) {
  // Fetch data from external API
  const res = await fetch(
    `https://api.w2project-internal.asia/api/v1/news/article/${context.params.articleSlug}`
  );
  const data = await res.json();
  return {
    props: {
      articles: data.data,
    },
  };
}

export default ArticleSlug;
