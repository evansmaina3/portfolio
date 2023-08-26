import '../styles/base.css'

export default function Button(props) {
    return (
        <button className={props.className}>
            {props.text}
        </button>
    )
}
    