import "./StdButton.Module.css"

const StdButton = ({source, text}) => {
    return ( 
        <div class="container-Btn">
            <a href={source} target="_blank" rel="noreferrer">
                <button className="btn">{text}</button>
            </a>
        </div>

     );
}
 
export default StdButton;