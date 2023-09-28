import React, { useState } from "react";
import { fileData } from "./data/fileData";
import FileExplorer from "./FileExplorer";
import { IFileData } from "./IFileData";

const FileExplorerWrapper = () => {
    const [fileDataTree, setFileDataTree] = useState<IFileData>(fileData);
    return <div>
        <FileExplorer fileData={fileDataTree} />
    </div>
}

export default FileExplorerWrapper;