import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface typeInitialState{
    oneBook:any,
    oneBookBool:boolean,
    ListBooks:Array<any>,
    ListBooksLength:number,
    isLoading:boolean,
    page:number,
    param:{
        serchText:string,
        subject:string,
        sortBy:string,
    }, 
    eror:string
}

const initialState:typeInitialState = {
    oneBook:{},
    oneBookBool:false,
    ListBooks:[],
    ListBooksLength:0,
    isLoading:false,
    page:0,
    param:{
        serchText:'',
        subject:'',
        sortBy:'',
    }, 
    eror:''
}

export const ListBooksSlice = createSlice({
    name: 'ListBooksSlice',
    initialState,
    reducers:{
        SaveBook(state, action:PayloadAction<any>){
            state.oneBook = action.payload;
            state.oneBookBool = true;
        },
        CreateList(state, action: PayloadAction<[]>){
            state.ListBooks = action.payload;
            state.page = 0;
        },
        params(state, action:PayloadAction<{ serchText: string; subject: string; sortBy: string;}>){
            state.param = action.payload;
        },
        CreateCountLength(state, action:PayloadAction<number>){
            state.ListBooksLength = action.payload;
        },
        AddList(state, action:PayloadAction){
            state.page = state.page + 30;
            let newArray:any = action.payload;
            state.ListBooks = [...state.ListBooks, ...newArray];
        },
        Preloader(state, action:PayloadAction<boolean>){
            state.isLoading = action.payload;
        }
    }
})

export default ListBooksSlice.reducer;