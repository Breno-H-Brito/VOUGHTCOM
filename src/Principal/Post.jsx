import { useState } from "react"; // useState é um Hook do React que permite adicionar estado a componentes funcionais. 
// Ele retorna um array com dois elementos: o valor atual do estado e uma função para atualizá-lo. O useState é usado para criar variáveis de estado em componentes funcionais, permitindo que eles sejam reativos e possam atualizar a interface do usuário quando o estado muda.

export default function Post(props) {
    const [likes, setLikes] = useState(props.likes);

    /*
        var likes = props.likes

        function setLikes() {
            likes = likes + 1
        }
    */

    const handleLike = () => {
        setLikes(likes + 1);
    };

    /*
        var x = function handleLike() {
            setLikes(likes + 1);
        } 
            
    */

    return (

        <div className="Post">
            <div className="post_header">
                <img src={props.profileImage} alt="Profile" />
                <span>{props.username}</span>
                <span className="time">{props.time}</span>
            </div>
            <div className="post_image">
                <img src={props.postImage} alt="Post" />
            </div>
            <div className="post_footer">
                <button onClick={handleLike}>Like</button>
                <button>Comment</button>
                <button>Share</button>
                <button>Save</button>
            </div>
            <div className="post_likes">
                <span>{likes} likes</span>
            </div>
            <div className="post_caption">
                <span><strong>{props.username}</strong> {props.caption}</span>
            </div>
        </div>
    );
}