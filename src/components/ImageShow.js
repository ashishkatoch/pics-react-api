function ImageShow({id,image}) {
    return (<li className="image"><img key={id} src={image} alt={id}></img></li>);
}
export default ImageShow;