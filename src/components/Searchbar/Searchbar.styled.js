import styled from 'styled-components';

export const Header = styled.header`
background-color:  #8458B3;
display: flex;
justify-content: center;
padding: 30px;
`

export const Form = styled.form`
display: flex;
gap: 20px;
`

export const Input = styled.input`
width: 400px;
padding: 5px;
background-color: #e5eaf5;
border: 1px transparent solid;
border-radius: 5px;
&:focus{
    background-color: #d0bdf4;
    outline: 1px transparent solid;
}
`

export const Button = styled.button`
background-color: #d0bdf4;
cursor: pointer;
padding: 7px;
border-radius: 5px;
color:  #8458B3;
border: 1px transparent solid;

&:hover{
    background-color: #a0d2eb;
}
`