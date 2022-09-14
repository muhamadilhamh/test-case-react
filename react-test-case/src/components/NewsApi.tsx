import React, { useEffect, useState } from "react";
import { News } from "../model/News";
import { NewsService } from "../service/NewsService";
import { Button, Card, Spin  } from "antd";
import moment from "moment";
import {Link} from "react-router-dom"

interface ListNews {
  loading: boolean;
  news: News[];
  errMessage: string;
}
const NewsApi: React.FC = () => {
  const [data, setData] = useState<ListNews>({
    loading: false,
    news: [] as News[],
    errMessage: "",
  });
  useEffect(() => {
    setData({ ...data, loading: true });
    NewsService.getAllNews()
      .then((res) => {
        setData({ ...data, loading: false, news: res.data.articles });
      })
      .catch((e) => {
        setData({ ...data, loading: false, errMessage: e.message });
      });
  }, []);
  const { loading, news, errMessage } = data;
  return (
    <div className="w-5/6 mx-auto ">
        <p className="text-xl font-bold mt-10 text-center">Welcome In News Case </p>
        <p className="text-small mb-10 text-gray-400 text-center">{news.length} items</p>
        {/* {errMessage && <h1>{errMessage}.</h1>}
        {loading && <h1>Loading...</h1>} */}
        <div className="px-10 justify-center md:flex md:flex-wrap items-center">
          {loading && <Spin  className="w-5/6 mx-auto my-60"/>}
          {errMessage && <h1 className="text-center my-60 font-bold text-xl" >{errMessage}</h1>}
          {news.length > 0 &&
            news.map((list) => {
              return (
                <>
                 {/* <Link to={`/news/${list.title}`}> */}
                  <Card
                    key={list.title}
                    className="mb-10 mr-5"
                    hoverable
                    style={{ width: 300 }}
                    cover={
                      <img
                        className="rounded-t-lg h-52 w-full object-cover mx-auto"
                        alt="example"
                        src={list.urlToImage !== null ? list.urlToImage : "Image Not Found" }
                      />
                    }
                  >
                    <p className="line-clamp-3 text-gray-900 font-bold text-lg">{list.title !== null ? list.title : "Title Not Found"}</p>
                    <p className="line-clamp-2">{list.description !== null ? list.description : "Description Not Found"}</p>
                    {/* <Link to={`/news/${list.title}`}> */}
                    <a href={list.url !== null ? list.url : "Tidak ada data"} target={"_blank"}><p className="text-blue-800 mb-5">Baca Selengkapnya...</p></a>
                    {/* </Link> */}
                    <div className="flex items-baseline flex-wrap">
                      <span className="text-gray-600">Author :</span>
                      <p className="text-gray-600 text-md ml-2">{list.author !== null ? list.author : "Author Not Found"}</p>
                    </div>
                    <p className="text-gray-400 mb-2">Published at {moment(new Date(list.publishedAt)).fromNow()}</p>
                    <span className="text-gray-600 border border-gray-600 px-3 py-1 my-2 rounded-full border-opacity-20">{list.source.name !== null ? list.source.name : "Name Not Found"}</span>
                  </Card>
                  {/* </Link> */}
                </>
              );
            })}
        </div>
    </div>
  );
};

export default NewsApi;
