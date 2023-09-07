const baseUrl = 'https://www.googleapis.com/books/v1/volumes';

export async function getRequest(serchText='', subject='All', sortBy='Relevance', page='0'){
    let response;
    if(subject != 'All'){
        response = await fetch(`${baseUrl}?q=${serchText}+subject:${subject}&startIndex=${page}&maxResults=30&orderBy=${sortBy}&key=AIzaSyAFptFWT4cgCE7DY1N_C9j50doO3d9n7-0`);
    } else{
        response = await fetch(`https://www.googleapis.com/books/v1/volumes?startIndex=${page}&maxResults=30&q=${serchText}&orderBy=${sortBy}&key=AIzaSyAFptFWT4cgCE7DY1N_C9j50doO3d9n7-0`);
    }
    let result = await response.json();
    if(result.totalItems == 0){
        result.items = [];
        result.totalItems = 0;
    }
    return result;

}