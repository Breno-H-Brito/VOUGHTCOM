import './LateralDireita.css'
import thominho from '../assets/terrorprofile.jpg'
import homelander from '../assets/homelanderprofile.png'
import a_train from '../assets/atrain.jpg'
import starlight from '../assets/starlight.jpg'
import frances from '../assets/frances.jpg'
import the_deep from '../assets/deep.jpg'




export default function LateralDireita() {
    return (
        <div className='LateralDireita'>
            {/* Seção do perfil do usuário */}
            <div className='perfilUsuario'>
                <div className='perfilInfo'>
                    <img 
                        src={thominho}
                        alt="Foto de perfil" 
                        className='fotoPerfil'
                    />
                    <div className='nomeUsuario'>
                        <p className='username'>B_Butcher</p>
                        <p className='nomeCompleto'>Billy Butcher</p>
                    </div>
                </div>
                <button className='btnMudar'>Mudar</button>
            </div>

            {/* Seção de sugestões */}
            <div className='sugestoes'>
                <div className='sugestoesHeader'>
                    <p className='sugestoesTitulo'>Sugestões para você</p>
                    <button className='btnVerTudo'>Ver tudo</button>
                </div>

                {/* Lista de sugestões */}
                <SugestaoItem 
                    foto={homelander}
                    username="Capitão Pátria"
                    descricao="Seguido(a) por Trem Bala"
                />
                <SugestaoItem 
                    foto={a_train}
                    username="TremBalaOFC🔥"
                    descricao="Seguido(a) por Espoleta"
                />
                <SugestaoItem 
                    foto={starlight}
                    username="Luz-Estrela"
                    descricao="Seguido(a) por REALHughie"
                />
                <SugestaoItem 
                    foto={frances}
                    username="ogFrench"
                    descricao="Sugestões para você"
                />
                <SugestaoItem 
                    foto={the_deep}
                    username="O Profundo"
                    descricao="Seguido(a) por Timothy"
                />
            </div>

            {/* Footer */}
            <footer className='footerDireita'>
                <p className='linksFooter'>
                    Sobre · Ajuda · Imprensa · API · Carreiras · Privacidade · 
                    Termos · Localizações · Idioma · Vought Verified
                </p>
                <p className='copyright'>© 2026 VOUGHTCOM FROM VOUGHT</p>
            </footer>
        </div>
    );
}

// Componente de item de sugestão
function SugestaoItem({ foto, username, descricao }) {
    return (
        <div className='sugestaoItem'>
            <div className='sugestaoInfo'>
                <img src={foto} alt={username} className='fotoSugestao' />
                <div className='textoSugestao'>
                    <p className='usernameSugestao'>{username}</p>
                    <p className='descricaoSugestao'>{descricao}</p>
                </div>
            </div>
            <button className='btnSeguir'>Seguir</button>
        </div>
    );
}