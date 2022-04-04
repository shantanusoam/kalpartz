import Styled from 'styled-components';

export const Card = Styled.div`
box-shadow: 6px 4px 8px 2px rgb(0 0 0 / 20%);
&hover: {
    box-shadow: 6px 4px 8px 2px rgb(0 0 0 / 70%);
}
h4{
    text-align: center;
}
:hover{
    h4{
        color: #ff4503;

    }
}
`;

export const Button = Styled.div`
background-color: initial;
background-image: linear-gradient(-180deg, #FF7E31, #E62C03);
border-radius: 6px;
box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px;
color: #FFFFFF;
cursor: pointer;
display: inline-block;

font-family: Inter,-apple-system,system-ui,Roboto,"Helvetica Neue",Arial,sans-serif;
height: 40px;
line-height: 40px;
outline: 0;
overflow: hidden;
padding: 0 20px;
pointer-events: auto;
position: relative;
text-align: center;
touch-action: manipulation;
user-select: none;
-webkit-user-select: none;
vertical-align: top;
white-space: nowrap;
width: 100%;
z-index: 9;
border: 0;
transition: box-shadow .2s;
:hover{
    box-shadow: rgba(253, 76, 0, 0.5) 0 3px 8px;
}
`;
