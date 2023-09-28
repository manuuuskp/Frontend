import { useEffect, useState } from "react";
import InfiniteScroll from "./InfiniteScroll";
import { ISearchData } from "./ISearchData";
import { useDebounce } from "../utils/hooks/useDebounce";

const InfiniteScrollWrapper = () => {

    const [searchVal, setSearchVal] = useState("");
    const [pageNum, setPageNum] = useState('1');
    const [data, setData] = useState<ISearchData[]>([]);
    const debouncedSearchVal = useDebounce(searchVal, 300);

    async function getData() {
        const dataResp = await fetch('https://openlibrary.org/search.json?' + new URLSearchParams({
            q: searchVal,
            page: pageNum
        }));
        const response = await dataResp.json();
        setData(prev => [...prev, ...response.docs]);
    }

    useEffect(() => {
        getData();
    }, [debouncedSearchVal, pageNum]);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchVal(e.target.value);
    }

    return (
        <>
            <input type="text" value={searchVal} onChange={handleOnChange} />
            <InfiniteScroll data={data} setPageNum={setPageNum} />
        </>
    )
}

export default InfiniteScrollWrapper;