import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NewsFeed from "./components/NewsFeed";
import BookmarkedArticles from "./components/BookmarkedArticles";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <nav className="bg-blue-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
              <h1 className="text-white text-2xl font-bold">News Feed</h1>
              <div>
                <Link
                  to="/"
                  className="text-white mr-4 hover:underline px-4 py-2 bg-blue-700 rounded-md transition duration-300 ease-in-out hover:bg-blue-800"
                >
                  Home
                </Link>
                <Link
                  to="/bookmarks"
                  className="text-white hover:underline px-4 py-2 bg-blue-700 rounded-md transition duration-300 ease-in-out hover:bg-blue-800"
                >
                  Bookmarks
                </Link>
              </div>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<NewsFeed />} />
            <Route path="/bookmarks" element={<BookmarkedArticles />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
