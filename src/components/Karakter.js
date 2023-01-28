// Karakter bileşeniniz buraya gelecek
import React from "react";
import styled from "styled-components";

const SCDiv = styled.div`
  background-color: transparent;
  width: 500px;
  margin: 0 auto;
`;
const SCH2 = styled.h2`
  background-color: transparent;
  width: 500px;
  margin: 0 auto;
`;

const Karakter = (props) => {
  return (
    <SCDiv key={props.kisi.url} onClick={props.tiklayincaYap}>
      <SCH2>{props.kisi.name}</SCH2>
      {props.acikMi && (
        <SCDiv className="char-ozellikleri">
          <SCDiv>Göz rengi {props.kisi.eye_color}</SCDiv>
          <SCDiv>Boyu: {props.kisi.height}</SCDiv>
          <SCDiv>Kilosu: {props.kisi.mass}</SCDiv>
          <SCDiv>Doğum Tarihi: {props.kisi.birth_year}</SCDiv>
        </SCDiv>
      )}
    </SCDiv>
  );
};

export default Karakter;
