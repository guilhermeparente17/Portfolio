import styled from 'styled-components';

export const SobremimContainer = styled.div`
    width: 100%;
    height: 700px;
    background-color: #161616;
    

    @media screen and (max-width: 750px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
export const SobremimTitle = styled.h1`
    padding-top: 50px;
    text-align:center;
    font-size: 24px;
    color: white;
    font-family: 'Public Sans', sans-serif;
    text-transform: uppercase;
    margin-bottom: 30px;
`
export const SobremimContent = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 750px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
export const SobremimFoto = styled.img`
    width: 300px;
    height: 500px;
    border-radius: 25px;
    margin-right: 100px;

    @media screen and (max-width: 750px){
        width: 200px;
        height: 300px;
        margin-right: 0px;
    }
`
export const SobremimDescription = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 550px;
    justify-content: center;

    @media screen and (max-width: 750px){
        
    }
`
export const SobremimText = styled.p`
    color: #FF5862;
    font-size: 25px;
    line-height: 35px;
    
    font-family: 'Rambla', sans-serif;

    @media screen and (max-width: 750px){
        font-size: 15px;
        line-height: 25px;
        text-align: center;
        max-width: 300px;
        margin-top:20px;
    }
    
`

export const BackgroundButtom = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

`


export const SobremimButtom = styled.button`
    width: 200px;
    height: 50px;
    margin-top: 30px;
    background-color: #FE2935;
    border-radius: 25px;
    border:0;
    cursor: pointer;
    color: white;
    font-family: 'Noto Sans', sans-serif;
    font-size: 15px;
    transition: 0.4s ease-in-out;
    text-transform: uppercase;

    &:hover{
        background-color: #FF5862;
        transition: 0.4s ease-in-out;
    }

    @media screen and (max-width: 750px){
        width: 130px;
        height: 50px;
        font-size: 11px;
        margin-top: 20px
    }
`
