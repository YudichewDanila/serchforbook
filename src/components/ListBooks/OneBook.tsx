const OneBook = (props:any)=>{
    return(
        <div className="OneBook">
            <div className="OneBook_img">
            <img  src={props.img?props.img:'/img/noPicture.png'} alt={'Изображение для книги: '+props.title} />
        </div>
        <div className="OneBook_categorys">{props.categories?props.categories[0]:''}</div>
        <div className="OneBook_title">
        <b>{props.title}</b></div>
        <div className="OneBook_author">{props.authors?props.authors:''}</div>
    </div>
    
    )
}

export default OneBook;