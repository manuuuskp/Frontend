import { Dispatch, SetStateAction, useCallback, useEffect, useRef } from "react";
import { ISearchData } from "./ISearchData";

const InfiniteScroll = ({data, setPageNum}:Props) => {

    const observer = useRef<any>(null);
    const elemRef= useCallback((node:any) => {
        if(observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting) {
                setPageNum(prev => String(Number(prev) + 1));
            }
        })
        if(node) observer.current.observe(node);
    },[])

    return (
        <>
            {
                data.map((item , index) => {
                    if(index === data.length - 1) {
                        return <div key={item.key} ref={elemRef}>{item.title}</div>
                    }
                    return (<div key={item.key}>{item.title}</div>)
                })
            }
        </>
    )
}

export default InfiniteScroll;

interface Props {
    data: ISearchData[];
    setPageNum: Dispatch<SetStateAction<string>>
}