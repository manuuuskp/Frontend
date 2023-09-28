import React, { useState } from "react";
import { IFileData } from './IFileData';

import "./fileexplorer.css";

const FileExplorer = ({fileData: {id, name, isFolder, items}}:Props) => {
    const [openFolder, setOpenFolder] = useState(true);
    const [showAddField, setShowField] = useState(false);
    const [isNewItemFolder, setIsNewItemFolder] = useState(false);

    const onClickAddItem = (item:string) => {
        item === 'folder' ? setIsNewItemFolder(true): setIsNewItemFolder(false);
        setShowField(true);
    }

    const onBlurOutAddItem = (e:React.ChangeEvent<HTMLInputElement>) => {
        if(!e.target.value)
        setShowField(false);
    }

    return <>
    <div className="file__container">
        <div className="content__container">
            <span className="file__name" onClick={() => setOpenFolder(!openFolder)}>{isFolder ? '🗂️' : '🗄️'} {name}</span>
            {isFolder && <div>
                <button onClick={() => onClickAddItem('folder')}>+folder</button>
                <button onClick={() => onClickAddItem('file')}>+file</button>
            </div>}
        </div>
        {showAddField && <input type="text" onBlur={onBlurOutAddItem} autoFocus/>}
            {
                isFolder && items.map((item:IFileData) => {
                    return openFolder && <FileExplorer fileData={item} />
                })
            }
    </div>
    </>
}

export default FileExplorer;

interface Props {
    fileData: IFileData
}