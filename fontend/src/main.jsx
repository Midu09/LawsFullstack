import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomPage from "./routes/HomPage.jsx";
import PostPage from "./routes/PostPage.jsx";
import LoginPage from "./routes/LoginPage.jsx";
import Register from "./routes/Register.jsx";
import Write from "./routes/Write.jsx";
import SinglePostPage from "./routes/SinglePostPage.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import StorePage from "./routes/StorePage.jsx";
import ContactPage from "./routes/ContactPage.jsx";
import LawsPage from "./routes/LawsPage.jsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomPage />,
      },
      {
        path: "/posts",
        element: <PostPage />,
      },
      {
        path: "/:slug",
        element: <SinglePostPage />,
      },
      {
        path: "/write",
        element: <Write />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      { path: "/store", element: <StorePage /> },
      { path: "/contact", element: <ContactPage /> },
      {
        path: "/laws",
        element: <LawsPage />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
