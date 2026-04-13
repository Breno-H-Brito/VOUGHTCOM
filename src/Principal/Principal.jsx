import './Principal.css';
import thominho from '../assets/terrorprofile.jpg'
import homelander from '../assets/homelanderprofile.png'
import queen_maeve from '../assets/queenmeave.jpg'
import the_deep from '../assets/deep.jpg'
import a_train from '../assets/atrain.jpg'
import black_noir from '../assets/blacknoir.jpg'
import starlight from '../assets/starlight.jpg'
import translucido from '../assets/translucido.jpg'
import post0001 from '../assets/post0001.jpg'

import Post from './Post'

export default function Principal() {
    return (

<div className='Principal'>
    <div className='Stories'>
        <div className='storiesContainer'>
            <div className='storyItem'>
                <div className='storyBorder'>
                    <img src={homelander} alt="homelander" className='storyFoto' />
                </div>
                <p className='storyUsername'>Capitão Pátria</p>
            </div>

            <div className='storyItem'>
                <div className='storyBorder'>
                    <img src={queen_maeve} alt="queen_maeve" className='storyFoto' />
                </div>
                <p className='storyUsername'>Queen_Maeve</p>
            </div>

            <div className='storyItem'>
                <div className='storyBorder'>
                    <img src={the_deep} alt="the_deep" className='storyFoto' />
                </div>
                <p className='storyUsername'>O Profundo</p>
            </div>

            <div className='storyItem'>
                <div className='storyBorder'>
                    <img src={a_train} alt="a_train" className='storyFoto' />
                </div>
                <p className='storyUsername'>Trem_Bala</p>
            </div>

            <div className='storyItem'>
                <div className='storyBorder'>
                    <img src={black_noir} alt="black_noir" className='storyFoto' />
                </div>
                <p className='storyUsername'>Black_Noir</p>
            </div>

            <div className='storyItem'>
                <div className='storyBorder'>
                    <img src={starlight} alt="starlight" className='storyFoto' />
                </div>
                <p className='storyUsername'>Luz-Estrela</p>
            </div>

            <div className='storyItem'>
                <div className='storyBorderVisto'>
                    <img src={translucido} alt="translucido" className='storyFoto' />
                </div>
                <p className='storyUsername'>Translucido</p>
            </div>
        </div>
    </div>

            <div className='Feed'>
                {
            
                }
                <Post 
                    profileImage={thominho}
                    username="B_Butcher"
                    time="  2 horas atrás"
                    likes={100}
                    postImage={post0001}
                    caption= "Oi! Pátria que se cuide."
                 />
  

                    </div>
                </div>

    );
}