import React from 'react'

import {
    InicioContainer,
    Content,
    BackgroundImg,
    ImgPerfil,
    InitioTitle,
    InicioSubTitle,
    InicioListItems,
    Items,
    Link,
    ImgLink
} from './InicioElements'

import Perfil from '../../assets/perfil.jpg'

export const Inicio = () => {
    return(
        <InicioContainer>
            <Content>
                <BackgroundImg>
                    <ImgPerfil src={Perfil} />
                </BackgroundImg>
                <InitioTitle>Guilherme Parente</InitioTitle>
                <InicioSubTitle>Desenvolvedor Web e Mobile</InicioSubTitle>
                <InicioListItems>
                    <Items>
                        <Link>
                            <ImgLink />
                        </Link>
                    </Items>
                </InicioListItems>
            </Content>
        </InicioContainer>
    )
}

export default Inicio