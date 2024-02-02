import "./Logo.Module.css"

const Logo = ({title, subtitle, genre}) => {
    return (  
        <div className="logo">
            <h3>{genre}</h3>
            <h1>{title}</h1>
            <div className="container-cutout">
                <h2>{subtitle}</h2>
            </div>
        </div>
    );
}
 
export default Logo;