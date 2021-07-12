import React from 'react'

import {
    SobremimContainer,
    SobremimTitle,
    SobremimContent,
    SobremimFoto,
    SobremimDescription,
    SobremimText,
    SobremimButtom,
    BackgroundButtom
} from './SobremimElements'

import ImagemPerfil from '../../assets/foto-perfil.jpg'



const index = () => {
    return (
        <SobremimContainer>
            <SobremimTitle>Sobre mim</SobremimTitle>
            <SobremimContent>
                <SobremimFoto src={ImagemPerfil} />
                <SobremimDescription>
                    <SobremimText>
                        Me chamo <font color="white" face="'Anton', sans-serif"> Guilherme Parente</font>, tenho 26 anos, curso Análise e Desenvolvimento de Sistemas(último semestre), sou 
                        <font color="white" face="'Anton', sans-serif"> Desenvolvedor Front End Web e Mobile</font> e apaixonado por tecnologia.
                        Em busca de me aperfeiçoar cada vez mais e encarar novos <font color="white" face="'Anton', sans-serif"> Desafios</font> para o crescimento da minha carreira.
                    </SobremimText>
                    <BackgroundButtom>
                        <SobremimButtom>Entre em contato</SobremimButtom>
                    </BackgroundButtom>
                </SobremimDescription>
            </SobremimContent>
        </SobremimContainer>
    )
}

export default index
