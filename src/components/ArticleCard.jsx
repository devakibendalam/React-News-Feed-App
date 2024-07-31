import React from "react";
import { useBookmark } from "../hooks/useBookmark";

function ArticleCard({ article }) {
  const { isBookmarked, toggleBookmark } = useBookmark(article);
  const formattedDate = new Date(article.publishedAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col h-full">
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex-grow">
          <p className="text-sm font-medium text-indigo-600 mb-1">
            {article.source.name}
          </p>
          <h2 className="text-xl font-semibold mb-2 line-clamp-2">
            {article.title}
          </h2>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-500 mb-2">
            {article.author ? `By ${article.author}` : "Unknown Author"} |{" "}
            {formattedDate}
          </p>
          <div className="flex justify-between items-center">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              Read more
            </a>
            <button
              onClick={toggleBookmark}
              className={`${
                isBookmarked ? "text-yellow-500" : "text-gray-400"
              } hover:text-yellow-500 focus:outline-none`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
