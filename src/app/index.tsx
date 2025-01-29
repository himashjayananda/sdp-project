import { BrowserRouter, Route, Routes } from "react-router";
import ThemeProvider from "./providers/theme-provider";
import { MainLayout } from "@/components/layouts";
import { Login, NotFound, Reports, Shipments } from "./pages";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route element={<MainLayout />}>
            <Route path="/shipments" element={<Shipments />} />
            <Route path="/reports" element={<Reports />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
