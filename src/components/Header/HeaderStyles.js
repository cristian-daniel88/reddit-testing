import styled from 'styled-components';


export const Headerr = styled.header`
display: flex;

color: #3d5af1;
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
height: 64px;
padding: 0 64px;
`

export const Logo = styled.div`
	font-weight: bold;
	padding: 8px 0;
	display: flex;
	align-items: center;
    width: 50%;
`
export const P = styled.p`
`
export const Span = styled.span`
color: #444444;
`

export const Search = styled.form`
display: flex;
  align-items: center;

width: 100%;

`

export const InputSearch = styled.input`
  width: 42%;
  background: #f3f3f3;
  border: none;
  padding: 8px 16px;
  height: max-content;
  border-radius: 4px;
  margin-right: .5%;
`

export const ButtonSearch = styled.button`
border: none;
outline: none;
background-color: #fcfcfc;
color: #717171;
cursor: pointer;

`