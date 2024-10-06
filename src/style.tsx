import { PropsWithChildren } from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 500px;
  height: 80vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`;

export const Item = styled.div`
  width: 100%;
  margin-top: 2px;
`;

export const Block = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  background: #eeeeee;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

interface ButtonProps {
  background?: string;
}

export const Button = styled.div<PropsWithChildren<ButtonProps>>`
  border-radius: 10px;
  padding: 5px 10px;
  background: ${({ background }) => background || "#016a01"};
  color: #fff;
  font-family: "Gill Sans", sans-serif;
  font-size: 17px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

export const Title = styled.p`
  font-size: 20px;
  font-family: "Gill Sans", sans-serif;
  user-select: none;
`;

export const SubItem = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  user-select: none;
`;

export const SubTitle = styled.p`
  font-size: 17px;
  font-family: "Gill Sans", sans-serif;
`;
