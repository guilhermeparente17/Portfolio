import styled from 'styled-components'
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


export const InicioContainer = styled.div`
    background-color: #191a24;
    height: 480px;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px ;
`
export const BackgroundImg = styled.div`
    
`
export const ImgPerfil = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 150px;
    border: 5px solid #FF3F4A;
`
export const InitioTitle = styled.h2`
    font-size: 48px;
    color: #FF3F4A;
    font-family: 'Rambla', sans-serif;
    margin-top: 20px;

    @media screen and (max-width: 568px){
        font-size: 38px;
    }
    @media screen and (max-width: 300px){
        font-size: 32px;
    }
`
export const InicioSubTitle = styled.h3`
    font-size: 20px;
    color: white;
    font-family: 'Questrial', sans-serif;
    margin: 14px 0px 24px;

    @media screen and (max-width: 568px){
        font-size: 17px;
    }
    @media screen and (max-width: 300px){
        font-size: 14px;
    }
`
export const InicioListItems = styled.ul`
    display: flex;

`
export const Link = styled.a`
    margin: 0px 10px 0px;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    
`
export const Items = styled.li`
    
`

export const Linkedin = styled(ImLinkedin)`
    color: white;
    width: 40px;
    height: 40px;
    transition: 0.3s ease-in-out;

    &:hover{
        color: #FF3F4A;
        transition: 0.3s ease-in-out;
    }
`
export const Github = styled(FaGithub)`
    color: white;
    width: 40px;
    height: 40px;

    &:hover{
        color: #FF3F4A;
        transition: 0.3s ease-in-out;
    }
`
export const Whatsapp = styled(FaWhatsapp)`
    color: white;
    width: 40px;
    height: 40px;

    &:hover{
        color: #FF3F4A;
        transition: 0.3s ease-in-out;
    }
`



