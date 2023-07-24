import ImageShow from './ImageShow';
function ImagesList({images}) {
    console.log(images);
    const renderImages = 
    images.map((image)=>{
        console.log(image);
         return (
         <><ImageShow id={image.id} image={image.urls.small}  /> </>
         )
    })
    return (<div className="image-list">
        {renderImages}
    </div>);
}
export default ImagesList;