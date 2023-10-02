import "./Button.scss"

export function Button({ text, size, color, clickHandler }: 
    { 
        text: string; 
        size: "small" | "big"; 
        color: "Dark" | "Light"; 
        clickHandler: () => void;
    }) {

    return (
        <button 
            className={size === 'big' ? 'button button--big' : `button button--small${color}`}
            onClick={() => clickHandler()}
        >
            { text }
        </button>
    )
}
