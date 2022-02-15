import styled from 'styled-components';

export const TextWrapper = styled.main`
  margin: 0px 0px 190px 0px;
`;
export const Category = styled.h2`
  text-align: center;
  margin: auto;
  width: 800px;
  user-select: none;
  font-size: 20px;
  color: #fb6363;
  padding: 5px;
`;
export const Title = styled.h2`
  text-align: left;
  padding: 5px 0px 3px 0px;
  margin: auto;
  width: 800px;
  font-size: 20px;
  color: white;
  border-bottom: 1px solid white;
`;
export const UserNickname = styled.h2`
  font-size: 15px;
  font-weight: 600;
  color: #747474;
  padding: 2px 0px 0px 0px;
  text-align: right;
  margin: auto;
  width: 800px;
  span {
    margin: 0px 5px 0px 10px;
  }
`;
export const Content = styled.p`
  text-align: left;
  padding: 20px 0px 20px 0px;
  margin: auto;
  width: 800px;
  font-size: 16px;
  border-bottom: 1px solid white;
`;
export const ImageWrapper = styled.div`
  text-align: center;
  margin: auto;
  width: 800px;
  img {
    margin: 20px 0px 15px 0px;
    width: 400px;
  }
`;
export const ButtonWrapper = styled.div`
  margin: auto;
  width: 800px;
  text-align: right;
  user-select: none;
  button {
    background-color: #222222;
    width: 150px;
    height: 50px;
    border: 1px solid #222222;
    font-size: 15px;
    color: #999999;
  }
  button:hover {
    background-color: #2e2e2e;
  }
  button:active {
    background-color: #3c3c3c;
  }
`;

// Comment
export const Comment = styled.div`
  display: inline-flex;
  textarea {
    width: 700px;
    height: 70px;
    border: 1px solid #222222;
    padding: 10px;
    background-color: #e0e0e0;
    color: black;
  }
  button {
    background-color: #222222;
    color: #999999;
    width: 100px;
    height: 70px;
    border: 1px solid #222222;
  }
  button:hover {
    background-color: #2e2e2e;
  }
  button:active {
    background-color: #3c3c3c;
  }
`;
export const CommentWrapper = styled.div`
  text-align: center;
  margin: auto;
  margin-top: 30px;
  width: 800px;
  font-size: 16px;
`;

export const CommentFrom = styled.div`
  margin: auto;
  margin-top: 15px;
  width: 800px;
  display: block;
  display: block;
  border: 1px solid gray;
  div {
    text-align: left;
    padding: 15px 0px 0px 0px;
    span {
      padding: 0px 5px 0px 5px;
      display: block;
      color: gray;
    }
  }
  div:hover {
    background-color: #3c3c3c;
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
  /* align-items: center; */
  button {
    position: unset;
    margin-right: 15px;
    background-color: #222222;
    color: #999999;
    width: 100px;
    height: 30px;
    border: 1px solid #222222;
  }
  button:hover {
    background-color: #2e2e2e;
  }
  button:active {
    background-color: #3c3c3c;
  }
  p {
    padding: 0px 5px 10px 10px;
    margin-bottom: 5px;
    font-size: 16px;
    width: 700px;
  }
`;
