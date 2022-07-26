import styled from 'styled-components';
import { Nav } from 'react-bootstrap';
export const StyledFooter = styled.footer`
  color: #f2f2f5;
  background: #1c1c28;
  position: relative !important;
  .go-to-top {
    cursor: pointer;
    bottom: 1.5rem;
    right: 1rem;
    position: fixed;
    color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    mix-blend-mode: difference;
  }
`;
export const StyledSectionFooter = styled.section`
  background: rgb(28, 28, 40);
  padding-top: 104px;
`;
export const StyledSectionSubFooter = styled.section`
  background: rgb(0, 0, 0);
  line-height: 72px;
  margin-top: 64px;
  @media screen and (max-width: 767.98px) {
    line-height: 40px;
  }
  .text-label {
    line-height: 1;
    color: #c7c8d9;
    font-size: 15px;
    font-family: 'Lato Bold';
  }
  .list-icon {
    display: inline-flex;
    line-height: 48px;
    width: 24px;
    height: 24px;
    border-radius: 100%;
    padding: 5px;
    background: rgba(255, 255, 255, 0.1);
    color: rgb(255, 255, 255);
    margin-right: 16px;
    -webkit-box-pack: center;
    justify-content: center;
  }
`;
export const StyledNavLinkFooter = styled(Nav.Link)`
  color: #f2f2f5;
  font-family: 'Lato Regular';
  font-size: 16px;
`;
export const StyledTitleFooter = styled.h6`
  color: #f2f2f5;
  font-size: 20px;
  font-family: 'Lato Bold';
`;
