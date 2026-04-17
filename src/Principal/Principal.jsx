import './Principal.css';
import thominho from '../assets/terrorprofile.jpg'
import homelander from '../assets/homelanderprofile.png'
import queen_maeve from '../assets/queenmeave.jpg'
import the_deep from '../assets/deep.jpg'
import a_train from '../assets/atrain.jpg'
import black_noir from '../assets/blacknoir.jpg'
import starlight from '../assets/starlight.jpg'
import translucido from '../assets/translucido.jpg'
import hughieprofile from '../assets/hughieprofile.jpg'
import frenchprofile from '../assets/frenchprofile.jpg'
import mothermilkprofile from '../assets/mothermilkprofile.jpg'
import kimikoprofile from '../assets/kimikoprofile.jpg'
import post0001 from '../assets/post0001.jpg'
import post0002 from '../assets/post0002.jpg'
import post0003 from '../assets/post0003.jpg'
import post0004 from '../assets/post0004.jpg'
import post0005 from '../assets/post0005.jpg'
import post0006 from '../assets/post0006.jpg'

import Post from './Post'

export default function Principal() {
    return (

<div className='Principal'>
    <div className='Stories'>
        <div className='storiesContainer'>

            <div className='storyItem'>
                <div className='storyBorderVisto'>
                    <img src={translucido} alt="translucido" className='storyFoto' />
                </div>
                <p className='storyUsername'>Translucido</p>
            </div>

             <div className='storyItem'>
                <div className='storyBorderVisto'>
                    <img src={hughieprofile} alt="hughieprofile" className='storyFoto' />
                </div>
                <p className='storyUsername'>REALHughie</p>
            </div>

             <div className='storyItem'>
                <div className='storyBorderVisto'>
                    <img src={frenchprofile} alt="frenchprofile" className='storyFoto' />
                </div>
                <p className='storyUsername'>OgFrench</p>
            </div>

             <div className='storyItem'>
                <div className='storyBorderVisto'>
                    <img src={mothermilkprofile} alt="mothermilkprofile" className='storyFoto' />
                </div>
                <p className='storyUsername'>M&M</p>
            </div>

             <div className='storyItem'>
                <div className='storyBorderVisto'>
                    <img src={kimikoprofile} alt="kimikoprofile" className='storyFoto' />
                </div>
                <p className='storyUsername'>kimikoo_</p>
            </div>

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

        </div>
    </div>

            <div className='Feed'>
                {
            
                }
                <Post 
                    profileImage={thominho}
                    username="B_Butcher"
                    time="  2 horas atrás"
                    likes={10}
                    postImage={post0001}
                    caption= "Oi!"
                 />
  

                    </div>

            <div className='Feed'>
                {
            
                }
                <Post 
                    profileImage={homelander}
                    username="Capitão Pátria"
                    time="  6 horas atrás"
                    likes={1000000}
                    postImage={post0002}
                    caption= "Obrigado pela recepção, patriotas! Vocês são os verdadeiros heróis dessa nação."
                 />
  

                    </div>

            <div className='Feed'>
                {
            
                }
                <Post 
                    profileImage={kimikoprofile}
                    username="kimikoo_"
                    time="  2 dias atrás"
                    likes={120}
                    postImage={post0003}
                    caption= "👍"
                 />
  

                    </div>

            <div className='Feed'>
                {
            
                }
                <Post 
                    profileImage={a_train}
                    username="Trem_Bala"
                    time="  1 dia atrás"
                    likes={200000}
                    postImage={post0004}
                    caption= "VAMBORA!"
                 />
  

                    </div>

            <div className='Feed'>
                {
            
                }
                <Post 
                    profileImage={starlight}
                    username="Luz-Estrela"
                    time="  40 minutos atrás"
                    likes={800000}
                    postImage={post0005}
                    caption= "⭐⭐⭐"
                 />
  

                    </div>

            <div className='Feed'>
                {
            
                }
                <Post 
                    profileImage={hughieprofile}
                    username="REALHughie"
                    time="  10 horas atrás"
                    likes={50}
                    postImage={post0006}
                    caption= "Nos trajes"
                 />
  

                    </div>


                </div>

                

    );
}