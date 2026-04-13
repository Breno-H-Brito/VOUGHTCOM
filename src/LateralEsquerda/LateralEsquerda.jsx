import './LateralEsquerda.css'

// Importações de Imagem
// var nomeDaVariavel = require('caminho/para/imagem.jpg')
import instagram from '../assets/instacom.png'

//Importação de Ícones
import { MdExplore } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";
import { RiVideoFill } from "react-icons/ri";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";

export default function LateralEsquerda() {
    return (
        <div className='LateralEsquerda'>
            <img src={instagram} alt='Logo da VOUGHTCOM' className='logoInstagram' />
            <ul style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
            }}>
                <ListItem icone={<GoHomeFill size={40}  color="rgb(255, 255, 255)" />} texto="Página Inicial" />
                <ListItem icone={<RiVideoFill size={40}  color="#ffffff" />} texto="Reels" />
                <ListItem icone={<BiSolidMessageSquareDetail size={40}  color="#ffffff" />} texto="Mensagens"  />
                <ListItem icone={<MdExplore size={40}  color="#ffffff" />} texto="Explore" />
                <ListItem icone={<FaHeart size={40}  color="#ffffff" />} texto="Notificações" />
                <ListItem icone={<CiCirclePlus size={40}  color="#ffffff" />} texto="Criar" />

            </ul>
        </div>
    )
}

function ListItem({icone, texto}) {
    return (
        <li style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
        }}>
            {icone}
            <span>{texto}</span>
        </li>
    )

}
