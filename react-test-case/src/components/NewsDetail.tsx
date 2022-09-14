import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import { News } from "../model/News";
import { NewsService } from "../service/NewsService";

interface Params{
    title:string
}

interface DetailNews{
    loading:boolean,
    newsDetail:News,
    errMessage: string;
}

const NewsDetail:React.FC = () =>{
    const [data, setData] = useState<DetailNews>({
        loading: false,
        newsDetail: {} as News,
        errMessage: "",
      });
    const {id} = useParams <Params | any> ()

    // useEffect(() =>{
    //     if(id){
    //         NewsService.getNews(id)
    //         .then(res => console.log(res))
    //         .catch(e => console.log(e.message))
    //     }
    // },[id])
    return(
        <p>{id}</p>
    )
}
export default NewsDetail