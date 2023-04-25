import preloadImg from '../../images/icon/preload.gif'

let Preloader = (props) => {
    return (
        <div className="preloader">
            <img className="preloader__img" src={preloadImg} alt="preload" width="64" height="64"/>
        </div>
    )
}

export default Preloader;