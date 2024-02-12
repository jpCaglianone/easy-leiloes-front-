import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/styles.css'

const About = () => {
    return (
        <div className='container about-text'>
            <div className='row'>
                <div className='col'></div>
                <div className='col-6'>
                    <h2 className='display-4'>Sobre nós</h2>
                    <br></br>
                    <p>
                        Bem-vindo à EasyLeilão!

                        Somos uma plataforma dedicada a facilitar o processo de leilões, conectando compradores e vendedores de forma eficiente e transparente. Nosso objetivo é oferecer uma experiência de leilão simples e segura para todos os nossos usuários.

                        Na EasyLeilão, valorizamos a confiança, a integridade e a transparência. Trabalhamos arduamente para garantir que cada transação seja realizada de forma justa e transparente, proporcionando aos nossos usuários a tranquilidade de saber que estão participando de um ambiente seguro e confiável.

                        Nossa equipe é composta por profissionais experientes e dedicados, prontos para oferecer suporte e assistência em todas as etapas do processo de leilão. Estamos sempre disponíveis para responder às suas perguntas, fornecer orientações e garantir uma experiência positiva em nossa plataforma.

                        Queremos simplificar a experiência de leilão para você, tornando-a fácil, acessível e emocionante. 
                        
                        <p>Junte-se a nós na EasyLeilão e descubra uma maneira simples e eficaz de comprar e vender itens exclusivos e de qualidade.
                        </p>
                       <p> Obrigado por escolher a EasyLeilão. Estamos ansiosos para ajudá-lo a alcançar seus objetivos de leilão!</p>
                    </p>
                    
                </div>
                <div className='col'></div>
            </div>

        </div>
    );
};

export default About;
