import React from "react";
import logo from "./logo.svg";
import "./App.css";
import InfiniteScrollWrapper from "./infinitescroll/InfiniteScrollWrapper";
import ProgressBarWrapper from "./progressbar/ProgressBarWrapper";
import PaginationWrapper from "./pagination/PaginationWrapper";
import CountDown from "./countdowntimer/CountDown";
import StarRating from "./starrating/StarRating";
import FileExplorerWrapper from "./fileexplorer/FileExplorerWrapper";
import { Routes, Route } from "react-router";
import { Link } from "react-router-dom";
import StepperWrapper from "./stepper/StepperWrapper";
import CustomSwitchWrapper from "./switch/CustomSwitchWrapper";

function App() {
  return (
    <>
      <div>
        <main>
          <Link to="infinitescroll">Infinite Scroll</Link>
          <Link to="progressbar">Progress bar</Link>
          <Link to="pagination">Pagination</Link>
          <Link to="countdown">CountDown</Link>
          <Link to="starRating">Star Rating</Link>
          <Link to="fileexplorer">File Explorer</Link>
          <Link to="stepper">Stepper</Link>
          <Link to="customswitch">Custom Switch</Link>
        </main>
      </div>
      <Routes>
        <Route
          path="infinitescroll"
          element={<InfiniteScrollWrapper />}
        ></Route>
        <Route path="progressbar" element={<ProgressBarWrapper />}></Route>
        <Route path="pagination" element={<PaginationWrapper />}></Route>
        <Route path="countdown" element={<CountDown />}></Route>
        <Route path="starRating" element={<StarRating />}></Route>
        <Route path="fileexplorer" element={<FileExplorerWrapper />}></Route>
        <Route path="stepper" element={<StepperWrapper />}></Route>
        <Route path="customswitch" element={<CustomSwitchWrapper />}></Route>
      </Routes>
    </>
  );
}

export default App;
