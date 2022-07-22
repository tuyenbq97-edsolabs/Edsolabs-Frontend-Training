import moment from 'moment';
import React from 'react';
import Image from 'next/image';
import { Container, Row, Col, Card } from 'react-bootstrap';
import whatapp from '../../assets/icons/whatapp.svg';
import twitter from '../../assets/icons/tw.svg';
import facebook from '../../assets/icons/fb.svg';
import telegram from '../../assets/icons/telegram.svg';
import gmail from '../../assets/icons/gmail.svg';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Link from 'next/link';
import styled from 'styled-components';
import { StyledSubCategoryName } from '../../components/card-new-large/styled';
import { CardNewItem } from '../../components/card-new/card-new';
import { StyledTitleHead } from '..';
import {
  EmailShareButton,
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'next-share';

interface ArticleSlugProps {
  newsCardArticleSlug: CardNewItem;
}

const StyledContainer = styled(Container)`
  .divider {
    border-bottom: 1px solid rgb(227, 228, 235);
    margin: 40px 0;
  }
`;
const StyledSubCategory = styled(StyledSubCategoryName)`
  background: #2e015b;
  color: #ffffff;
`;
export default function ArticleSlug({ newsCardArticleSlug }: ArticleSlugProps) {
  const createMarkup = () => {
    return { __html: newsCardArticleSlug.content };
  };

  return (
    <main className="flex-shrink-0">
      <Header />
      <StyledContainer className="py-4">
        <Row>
          <Col lg={3} className="d-none d-lg-block">
            {newsCardArticleSlug.source} -{' '}
            {moment(newsCardArticleSlug.publishDate).format('MMM DD YYYY')}
            <section className="d-flex">
              <div className="me-3">
                <WhatsappShareButton
                  url={'https://github.com/next-share'}
                  title={
                    'next-share is a social share buttons for your next React apps.'
                  }
                  separator=":: "
                >
                  <Image src={whatapp} alt="whatapp-icon" />
                </WhatsappShareButton>
              </div>
              <div className="me-3">
                {' '}
                <TwitterShareButton
                  url={'https://github.com/next-share'}
                  title={
                    'next-share is a social share buttons for your next React apps.'
                  }
                >
                  <Image src={twitter} alt="twitter-icon" />
                </TwitterShareButton>
              </div>
              <div className="me-3">
                <FacebookShareButton
                  url={'https://github.com/next-share'}
                  quote={
                    'next-share is a social share buttons for your next React apps.'
                  }
                  hashtag={'#nextshare'}
                >
                  <Image src={facebook} alt="facebook-icon" />
                </FacebookShareButton>
              </div>
              <div className="me-3">
                <TelegramShareButton
                  url={'https://github.com/next-share'}
                  title={
                    'next-share is a social share buttons for your next React apps.'
                  }
                >
                  <Image src={telegram} alt="telegram-icon" />
                </TelegramShareButton>
              </div>
              <div className="me-3">
                <EmailShareButton
                  url={'https://github.com/next-share'}
                  subject={'Next Share'}
                  body="body"
                >
                  <Image src={gmail} alt="gmail-icon" />
                </EmailShareButton>
              </div>
            </section>
          </Col>
          <Col lg={9}>
            <Link href="/">NEWS/ GLOBAL NEWWS</Link>
            <h3 className="mt-2">{newsCardArticleSlug.title}</h3>
            <Card className="border-0 my-4">
              <Card.Img
                variant="top"
                className="mb-4"
                src={newsCardArticleSlug.imageUrl}
              />
              <StyledSubCategory>
                {newsCardArticleSlug.subCategory.name}
              </StyledSubCategory>
              <Card.Body className="p-0">
                <div dangerouslySetInnerHTML={createMarkup()}></div>
                <span className="my-4 d-block">
                  {newsCardArticleSlug.source} -{' '}
                  {moment(newsCardArticleSlug.publishDate).format(
                    ' MMM DD YYYY'
                  )}
                </span>
                <section className="d-flex">
                  <div className="me-3">
                    <WhatsappShareButton
                      url={'https://github.com/next-share'}
                      title={
                        'next-share is a social share buttons for your next React apps.'
                      }
                      separator=":: "
                    >
                      <Image src={whatapp} alt="whatapp-icon" />
                    </WhatsappShareButton>
                  </div>
                  <div className="me-3">
                    {' '}
                    <TwitterShareButton
                      url={'https://github.com/next-share'}
                      title={
                        'next-share is a social share buttons for your next React apps.'
                      }
                    >
                      <Image src={twitter} alt="twitter-icon" />
                    </TwitterShareButton>
                  </div>
                  <div className="me-3">
                    <FacebookShareButton
                      url={'https://github.com/next-share'}
                      quote={
                        'next-share is a social share buttons for your next React apps.'
                      }
                      hashtag={'#nextshare'}
                    >
                      <Image src={facebook} alt="facebook-icon" />
                    </FacebookShareButton>
                  </div>
                  <div className="me-3">
                    <TelegramShareButton
                      url={'https://github.com/next-share'}
                      title={
                        'next-share is a social share buttons for your next React apps.'
                      }
                    >
                      <Image src={telegram} alt="telegram-icon" />
                    </TelegramShareButton>
                  </div>
                  <div className="me-3">
                    <EmailShareButton
                      url={'https://github.com/next-share'}
                      subject={'Next Share'}
                      body="body"
                    >
                      <Image src={gmail} alt="gmail-icon" />
                    </EmailShareButton>
                  </div>
                </section>
                <div className="divider"></div>
                <StyledTitleHead className="mb-4">
                  More stories for you
                </StyledTitleHead>
                <Row>
                  {newsCardArticleSlug.moreArticles
                    .slice(0, 3)
                    .map((item, idx) => (
                      <Link
                        key={idx}
                        href={{
                          pathname: '/article/[articleSlug]',
                          query: {
                            articleSlug: item.slug,
                          },
                        }}
                      >
                        <Col md={4} key={idx}>
                          <Card className="border-0">
                            <Card.Img variant="top" src={item.imageUrl} />
                            <StyledSubCategory>
                              {newsCardArticleSlug.subCategory.name}
                            </StyledSubCategory>
                            <Card.Body className="p-0 mt-3">
                              <h4 className="mb-4 ">{item.title}</h4>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Link>
                    ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </StyledContainer>
      <Footer />
    </main>
  );
}

export async function getServerSideProps(context: {
  params: { articleSlug: ArticleSlugProps };
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_NEWS_ARTICLE}/${context.params.articleSlug}`
  );
  const dataArticle = await res.json();
  return {
    props: {
      newsCardArticleSlug: dataArticle.data,
    },
  };
}
