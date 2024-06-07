import styled from "styled-components";

export const Whole = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 25px;
  height: 1, 021px;
  border-width: 271px;
  //width:271px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
`;

export const Button = styled.button`
  display: flex;
  gap: 5px;
  background: #3538cd;
  width: 400px;
  margin: auto;
  height: 44px;
  color: #fff;
  font-size: 16px;
  padding: 0px 125px;
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 0 20px;
  }
`;

export const But = styled.div`
  margin-top: 8px;
`;

export const TextArea = styled.textarea`
  height: 100px;
  width: 832px;
  padding: 10px;
  margin: 10px 0;

  resize: none;
`;

export const ImageUploadContainer = styled.div`
  margin-top: 20px;
  border: 1px dashed #888;
  height: 138px;
  width: 832px;
  padding: 10px;
  margin: 10px 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  input{
    width: 11.04%;
    border: none;
    background-color: blue;
  }
`;
export const Space = styled.div`
  
`;

export const ImagePreview = styled.div`
  border: 2px dashed #aaa;
  padding: 10px;
`;

export const Occup = styled.div`
  align-items: center;

  h4{
    font-weight: 500;
    font-size: 16px;
    font-style: Heebo;
  }

  @media (max-width: 1000px) {
    text-align: center;
    max-width: 400px;
  }
`;

export const Aval = styled.select`
  width: 832px;
  height: 44px;
  border-radius: 4px;
  border-color: grey;
  padding: 10px;
  margin: 10px 0;

  .option{
    padding: 200px;
    margin-right: 50px;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px; 
  }
`;

export const Price = styled.input`
  float: right;
  width: 45%;
  height: 44px;
  border: 1px;
  border-radius: 4px;
`;
export const Head = styled.div`
  text-align: center;
  font-weight: 300;
  margin-bottom: 20px;
  margin-top: 0;
`;

export const One = styled.h3`
  font-weight: bold;
  font-family: sans-serif;
  font-size: 25px;
  margin-bottom: 5px;
`;
export const Two = styled.h3`
  font-weight: 150;
  font-family: serif;
  font-size: 20px;
  margin-bottom: 5px;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;

  h4{
    font-weight: 500;
    font-size: 16px;
    font-style: Heebo;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const FormTitle = styled.h4`
  text-align: left;
`;
export const Num = styled.input`
  width: 400px;
  height: 44px;
  border-radius: 4px;
  border: 1px solid grey; 
  padding: 10px;
  margin: 10px 0;
`;
export const Name = styled.input`
  width: 400px;
  height: 44px;
  border-radius: 4px;
  border: 1px solid grey; 
  padding: 10px;
  margin: 10px 0;
  border-color: grey;
`;
export const Loc = styled.select`
  width: 400px;
  height: 44px;
  border-radius: 4px;
  border-color: grey;
  padding: 10px;
  margin: 10px 0;
`;
export const Dnd = styled.p`
  width: 15%;
  font-size: 14px;
`;