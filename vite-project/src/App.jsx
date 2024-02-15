
import { HeaderMain } from "./Pages";
import { Footer, Header } from "./components";
import { HomePage,AboutPage, InfoPage } from "./Pages";
import { Routes } from "react-router";
import { Route } from "react-router";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<InfoPage />} path="/about/:id" />
        <Route element={<HeaderMain/>} path="/about/:id" />
        <Route element={<SingleHeader />} path="info/:id" />
          <Route element={<Footer />} path="footer" />
          <Route element={<NotFoundPage />} path="*" />
          <Route element={<TopRated />} path="*" />
          
      </Routes>
      <Footer />
    </>
  );
}
export default App;
