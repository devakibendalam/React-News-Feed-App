import React from "react";
import { useBookmarkedArticles } from "../hooks/useBookmark";
import ArticleCard from "./ArticleCard";

function BookmarkedArticles() {
  const bookmarkedArticles = useBookmarkedArticles();

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Bookmarked Articles</h2>
      {bookmarkedArticles.length === 0 ? (
        <p className="text-center text-gray-600">No bookmarked articles yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookmarkedArticles.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}

export default BookmarkedArticles;
