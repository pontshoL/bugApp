import { useEffect } from 'react';
import { articles_url, _api_key, category, country_code} from '../config/rest-config';

export async function getArticles() {


    // try {
        
    //      let articles = await fetch(`${articles_url}?country=${country_code}&category=${category}`, {
    //         headers: {
    //             'X-API-KEY': _api_key
    //         }
    //      });

    //      let result = await articles.json();
    //      articles = null;

    //      return result.articles;
       
    // } catch (error) {
    //     throw error;
    // }

//fetching data
const getData = () =>{

          fetch(`articles_url`).then((results)=>results.json()).then((data)=>{
                 console.log(data)
          })
}

  useEffect(()=>{
    getData()    
    console.log('i am running')
  },[])

}