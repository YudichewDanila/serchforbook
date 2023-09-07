import { getRequest } from "../../api/getReques";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import Preloader from "./Preloader";
import OneBook from "./OneBook";
import { ListBooksSlice } from "../../store/redusers/ListBooks";
import { Link } from "react-router-dom";

const ListBooks = ()=>{
    let ListBooks = useAppSelector(state=>state.ListBooks); 
    let LengthListBooks = useAppSelector(state=>state.ListBooks.ListBooksLength);
    let isLoad = useAppSelector(state=>state.ListBooks.isLoading);
    let data = useAppSelector(state => state.ListBooks);
    const dispatch = useAppDispatch();
    function saveBook(book:any){
        dispatch(ListBooksSlice.actions.SaveBook(book));
    }
    async function loadMore(){
        let result = await getRequest(data.param.serchText, data.param.subject, data.param.sortBy, String(data.page+30));
        dispatch(ListBooksSlice.actions.AddList(result.items));
    }
    return(
        <>
        <div id="countResults">
            <h2>Found {LengthListBooks} results</h2>
        </div>
       
        <div id="wrapperListBooks">
        {!isLoad?
        <div id="ListBooks">
        {ListBooks.ListBooks.map((book: any, index:number) =>
         <Link key={book.id+index} onClick={()=>saveBook(book)}  className="link" to={`/book/:${book.id}`}>
            <OneBook 
            key={book.id+index} 
            id={book.id}
            authors={book.volumeInfo?.authors}
            title={book.volumeInfo.title}
            categories={book.volumeInfo?.categories}
            img={book.volumeInfo?.imageLinks?.smallThumbnail}
        />

         </Link>
     
         
        )}
        {ListBooks.ListBooks.length > 0 &&
     <div id="loadMore">
        <button onClick={loadMore}>LoadMore</button>
    </div>
    }
    </div>
   
    :<Preloader />
    }
    </div>
   
    
    
        
    
    </>
    )
}

export default ListBooks;