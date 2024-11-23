import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App";

import ListCardsPage from "./list-cards/ListCardsPage";
import { ListCardsLoader } from "./list-cards/list-card-loader";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [{ path: "/", element: <ListCardsPage />, loader: ListCardsLoader }],
  },
]);

const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
