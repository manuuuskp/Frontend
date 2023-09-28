import React from 'react';
import logo from './logo.svg';
import './App.css';
import InfiniteScrollWrapper from './infinitescroll/InfiniteScrollWrapper';
import ProgressBarWrapper from './progressbar/ProgressBarWrapper';
import PaginationWrapper from './pagination/PaginationWrapper';
import CountDown from './countdowntimer/CountDown';
import StarRating from "./starrating/StarRating";
import FileExplorerWrapper from "./fileexplorer/FileExplorerWrapper";

function App() {
  return (
    <div>
      <main>
        {/* <InfiniteScrollWrapper /> */}
        {/* <ProgressBarWrapper /> */}
        {/* <PaginationWrapper /> */}
        {/* <CountDown /> */}
        {/* <StarRating /> */}
        <FileExplorerWrapper />
      </main>
    </div>
  );
}

export default App;
