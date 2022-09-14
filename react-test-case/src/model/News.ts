export interface News {
    status: string;
    totalResults: number;
    author?: string | null;
    title: string;
    description?: string | null;
    url: string;
    urlToImage?: string | null;
    publishedAt: string;
    content?: string | null;
    source :{
      id?: string | null;
      name: string;
    }   
    
  }
