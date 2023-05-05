import { useState, useMemo } from "react";

type UsePaginationResult<T> = {
  currentPageData: T[];
  nextPage: ()=> void;
  prevPage: ()=> void;
  hasMore: boolean;
  hasLess: boolean;
};

export const usePagination = <T>(data: T[], itemPerPage: number): UsePaginationResult<T> => {

  // 現在のページ数
  const [currentPage, setCurrentPage] = useState(1);
  // データの総数÷1ページあたりの表示数を切り上げ＝totalPages（データの総数,1ページの表示数が変わったら再計算）
  const totalPages = useMemo(() => Math.ceil(data.length / itemPerPage), [data, itemPerPage]);

  // 何番目から何番目までのデータを表示するか→データをslice（データ、現在のページ位置、表示数が変わったら再計算）
  const currentPageData = useMemo(()=> {
    const start = (currentPage -1)* itemPerPage;
    const end = start + itemPerPage;
    return data.slice(start, end);
    },[data, currentPage, itemPerPage]);

  // 次のページは何ページ目になるか
  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  // 前のページは何ページ目になるか
  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  // 次or前のページが存在するか
  const hasMore = currentPage < totalPages;
  const hasLess = currentPage > 1;

  return { currentPageData, nextPage, prevPage, hasMore, hasLess };

};
  
