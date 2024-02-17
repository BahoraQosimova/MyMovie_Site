import { Route, Routes } from "react-router";

import {
  HomePage,
  AboutPage,
  SinglePage,
  NotFoundPage,
  InfoPage,
} from "./Pages/index";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<SinglePage />} path="/singlePage/:id" />
        <Route element={<InfoPage />} path="/info" />

        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </>
  );
}

export default App;
