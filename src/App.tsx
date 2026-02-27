import { Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import GuideLayout from "@/pages/guide/GuideLayout";
import GuidePage from "@/pages/guide/GuidePage";
import NotFoundPage from "@/pages/NotFoundPage";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/guide" element={<GuideLayout />}>
        <Route path=":slug" element={<GuidePage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
