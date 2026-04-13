export default function ListItem(props) {
    return (
        <li>{props.icone} <span className="menu">{props.texto}</span></li>
    )
}