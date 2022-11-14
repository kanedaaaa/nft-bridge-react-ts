import "./Button.css"

interface ButtonProps {
    text: string;
    func: () => any;
}

const Button = (props: ButtonProps) => {
    return (
        <button className="button" onClick={props.func}>
            {props.text}
        </button>
    )
}

export default Button