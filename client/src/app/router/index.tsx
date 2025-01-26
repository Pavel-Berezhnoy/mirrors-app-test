import { Route, Routes } from "react-router-dom";
import MainView from "../../views/main";
import DefaultLayout from "../../widgets/default-layout";

export default function index() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout><MainView /></DefaultLayout>} />
    </Routes>
  )
}
