import React from "react";

export type PagerProps = {
    hasMore: boolean;
    hasLess: boolean;
    nextPage: () => void;
    prevPage: () => void;
};

export const Pager: React.FC<PagerProps> = ({ hasMore, hasLess, nextPage, prevPage }) => {

    return (
	<div className="flex justify-center my-4">
        <button className="px-4 py-2 mr-2 text-white rounded bg-darkGray" disabled={!hasLess} onClick={prevPage}>前のページ</button>
        <button className="px-4 py-2 mr-2 text-white rounded bg-darkGray" disabled={!hasMore} onClick={nextPage}>次のページ</button>
	</div>
    );
};

