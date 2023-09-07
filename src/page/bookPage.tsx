import {useEffect} from 'react'
import { useAppSelector } from "../hooks/redux";
import { useNavigate } from "react-router-dom";

const BookPage = ()=>{
    const history = useNavigate();
    let Book:any = {};
    Book = useAppSelector(state=>state.ListBooks.oneBook);
    useEffect(()=>{
        if(Object.keys(Book).length < 1){
            history('/');
        }
    }, [])
    
return(
    <>
    <div id='pageBook'>
        {Object.keys(Book).length < 1 && <div>Страница книги</div>}
        <div id='imgPageBook'>
        <img width='200px'  src={Book?.volumeInfo?.imageLinks?.smallThumbnail?Book?.volumeInfo?.imageLinks?.smallThumbnail:'/img/noPicture.png'} alt={'Изображение для книги: '+Book?.volumeInfo?.title} ></img>
            
        </div>
        <div id='textPageBook'>
            <p id='categoryPageBook'>{Book?.volumeInfo?.categories}</p>
            <h2 id='mainTextPageBook'>{Book?.volumeInfo?.title}</h2>
            <h3 id='authorPageBook'>{Book?.volumeInfo?.authors}</h3>
            <h3 id='directionPageBook'>{Book?.searchInfo?.textSnippet}</h3>
        </div>
    </div>
    </>
) 
}
export {BookPage};
