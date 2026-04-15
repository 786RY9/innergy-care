/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Philosophy from "./pages/Philosophy";
import Therapies from "./pages/Therapies";
import Book from "./pages/Book";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="philosophy" element={<Philosophy />} />
          <Route path="therapies" element={<Therapies />} />
          <Route path="book" element={<Book />} />
        </Route>
      </Routes>
    </Router>
  );
}
