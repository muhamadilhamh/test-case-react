import axios from 'axios'
export class NewsService{
    private static key:string = "5322842732854a8a9753cdc8594b2377";
    private static URL:string = "https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey="
    
    public static getAllNews(){
        let NewsURL:string = `${this.URL}${this.key}`
        return axios.get(NewsURL)
    }

    // public static getNews(titleId:string){
    //     let NewsURL:string = `${this.URL}${this.key}/${titleId}`
    //     return axios.get(NewsURL)
    // }
}

