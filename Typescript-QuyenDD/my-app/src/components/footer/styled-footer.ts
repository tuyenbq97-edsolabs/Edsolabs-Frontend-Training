import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
export const StyledFooter = styled.div`
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  color: #f2f2f5;
  background: #1c1c28;
`;

export const StyledRow = styled(Row)`
  padding-top: 64px;
  padding-bottom: 136px;
  margin-left: 0px;
  margin-right: 0px;
  .logo-footer {
    margin-left: 108px;
    padding-top: 25px;
    padding-bottom: 136px;
  }
`;
export const StyledA = styled.a`
  color: #f2f2f5 !important;
  :hover {
    color: #ccc !important;
  }
  text-decoration: none;
`;

export const StyledSubFooter = styled.div`
  font-size: 15px;
  font-family: 'Lato Bold';
  font-style: normal;
  padding: 24px 0px;
  background-color: #000;
  .sub-footer {
    @media (max-width: 768px) {
      flex-direction: column-reverse;
      .list-icon {
        margin-bottom: 12px;
      }
    }
  }
`;
export const StyledColSubFooter = styled(Col)`
  color: #c7c8d9;
  font-size: 14px;
  font-family: 'Lato Regular';
  font-style: normal;
`;
export const StyledButton = styled.button`
  background-color: inherit;
`;
export const StyledRowTitle = styled(Row)`
  margin-bottom: 18px;
  font-size: 20px;
  font-family: 'Lato Bold';
`;
export const StyledRowContent = styled(Row)`
  margin-top: 12px;
  font-size: 16px;
  font-family: 'Lato Regular';
`;
export const StyledImg = styled.img`
  padding: 0 10px;
`;
