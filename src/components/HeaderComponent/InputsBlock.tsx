import InputSerch from './InputSerch';
import FiltersBlock from './FiltersBlock';
import { useAppDispatch } from '../../hooks/redux';
import { ListBooksSlice } from '../../store/redusers/ListBooks';
import { useState } from 'react';
import { getRequest } from '../../api/getReques'; 

const InputsBlock = ()=>{ 
    const [category, setCategory] = useState('All');
    const [sortBy, setSortBy] = useState('relevance');
    const dispatch = useAppDispatch();
    
    async function enterRequest(serchText:string, category:string, sortBy:string){
        if(serchText.length != 0){
        let isLoad:boolean = true;
        dispatch(ListBooksSlice.actions.Preloader(isLoad));
        let result = await getRequest(serchText, category, sortBy);
        let param:{ serchText: string; subject: string;sortBy: string;} = {serchText:serchText, subject:category, sortBy:sortBy}
        dispatch(ListBooksSlice.actions.params(param));
        dispatch(ListBooksSlice.actions.CreateList(result.items));
        dispatch(ListBooksSlice.actions.CreateCountLength(result.totalItems));
        isLoad = false;
        dispatch(ListBooksSlice.actions.Preloader(isLoad));
        }
        else{
            alert('Введите в поле текст для поиска');
        }
    } 
    return(
        <div id="wrapperInputsBlock">
        <InputSerch enterRequest = {(serchText:string)=>enterRequest(serchText, category, sortBy)} />
        <FiltersBlock category={category} setCategory={setCategory} sortBy={sortBy} setSortBy={setSortBy} />
        </div>
    )
}

export default InputsBlock;