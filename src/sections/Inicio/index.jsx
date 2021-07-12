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
    Linkedin,
    Github,
    Whatsapp

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
                            <Linkedin />
                        </Link>
                    </Items>

                    <Items>
                        <Link>
                            <Github />
                        </Link>
                    </Items>

                    <Items>
                        <Link>
                            <Whatsapp />
                        </Link>
                    </Items>
                </InicioListItems>
            </Content>
        </InicioContainer>
    )
}

export default Inicio