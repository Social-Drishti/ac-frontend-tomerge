import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import {
  blogs,
  getFeaturedBlog,
  getBlogsByDate,
  formatBlogDate,
  paginateBlogs,
} from "../data/blogs";
import "../styles/blogs-tokens.css";
import "./Blogs.css";

/**
 * BLOGS PAGE
 * Clean editorial journal layout
 * Dynamic content rendering from data source
 *
 * In production, replace the static import with:
 * - CMS API call (Sanity, Contentful, Strapi)
 * - MDX file loader
 * - Database query
 */

const BLOGS_PER_PAGE = 6;

export default function Blogs() {
  // In production, this would be fetched from an API
  const [blogData, setBlogData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [featuredBlog, setFeaturedBlog] = useState(null);

  // Simulate data fetching (replace with actual API call)
  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);

      // Simulate API delay for demonstration
      // In production: const response = await fetch('/api/blogs');
      await new Promise((resolve) => setTimeout(resolve, 300));

      // Set data from imported source (simulating API response)
      setBlogData(blogs);
      setFeaturedBlog(getFeaturedBlog(blogs));
      setIsLoading(false);
    };

    fetchBlogs();
  }, []);

  // Get blogs excluding featured, sorted by date
  const remainingBlogs = featuredBlog
    ? getBlogsByDate(blogData, featuredBlog.id)
    : getBlogsByDate(blogData);

  // Paginate remaining blogs
  const pagination = paginateBlogs(remainingBlogs, currentPage, BLOGS_PER_PAGE);

  // Pagination handlers
  const handlePrevPage = useCallback(() => {
    if (pagination.hasPrevPage) {
      setCurrentPage((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pagination.hasPrevPage]);

  const handleNextPage = useCallback(() => {
    if (pagination.hasNextPage) {
      setCurrentPage((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pagination.hasNextPage]);

  // Keyboard navigation for pagination
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft" && pagination.hasPrevPage) {
        handlePrevPage();
      } else if (e.key === "ArrowRight" && pagination.hasNextPage) {
        handleNextPage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    pagination.hasPrevPage,
    pagination.hasNextPage,
    handlePrevPage,
    handleNextPage,
  ]);

  return (
    <div className="blogs-page">
      <a href="#blogs-content" className="blogs-skip-link">
        Skip to blog articles
      </a>

      <Navbar />

      <main id="blogs-content" className="blogs-main">
        {/* Page Header */}
        <header className="blogs-header">
          <div className="blogs-container">
            <h1 className="blogs-header__title">Blogs</h1>
            <p className="blogs-header__description">
              Reflections on astrology, spiritual wisdom, and life's deeper
              questions. Writings by Acharya Dharmraj Guruji exploring Vedic
              knowledge, practical guidance, and contemplative insights for
              seekers on their journey.
            </p>
          </div>
        </header>

        <div className="blogs-container">
          {/* Loading State */}
          {isLoading && (
            <div className="blogs-loading" role="status" aria-live="polite">
              <div className="blogs-loading__spinner" aria-hidden="true" />
              <p className="blogs-loading__text">Loading articles...</p>
            </div>
          )}

          {/* Empty State */}
          {!isLoading && blogData.length === 0 && (
            <div className="blogs-empty">
              <h2 className="blogs-empty__title">No Articles Yet</h2>
              <p className="blogs-empty__text">
                New writings will appear here as they are published.
              </p>
            </div>
          )}

          {/* Content */}
          {!isLoading && blogData.length > 0 && (
            <>
              {/* Featured Blog Section */}
              {featuredBlog && (
                <section
                  className="blogs-featured"
                  aria-labelledby="featured-label"
                >
                  <p id="featured-label" className="blogs-featured__label">
                    Featured Article
                  </p>
                  <Link
                    to={`/blog/${featuredBlog.slug}`}
                    className="blogs-featured__card"
                    aria-describedby="featured-meta"
                  >
                    <h2 className="blogs-featured__title">
                      {featuredBlog.title}
                    </h2>
                    <p className="blogs-featured__excerpt">
                      {featuredBlog.excerpt}
                    </p>
                    <div id="featured-meta" className="blogs-featured__meta">
                      <time dateTime={featuredBlog.publishedAt}>
                        {formatBlogDate(featuredBlog.publishedAt)}
                      </time>
                      {featuredBlog.readingTime && (
                        <>
                          <span
                            className="blogs-featured__meta-divider"
                            aria-hidden="true"
                          />
                          <span>{featuredBlog.readingTime} min read</span>
                        </>
                      )}
                    </div>
                  </Link>
                </section>
              )}

              {/* Blog Grid Section */}
              {pagination.blogs.length > 0 && (
                <section
                  className="blogs-grid-section"
                  aria-labelledby="recent-label"
                >
                  <h2 id="recent-label" className="blogs-grid-section__title">
                    Recent Articles
                  </h2>

                  <div className="blogs-grid" role="list">
                    {pagination.blogs.map((blog) => (
                      <article key={blog.id} role="listitem">
                        <Link
                          to={`/blog/${blog.slug}`}
                          className="blogs-card"
                          aria-labelledby={`blog-title-${blog.id}`}
                        >
                          <h3
                            id={`blog-title-${blog.id}`}
                            className="blogs-card__title"
                          >
                            {blog.title}
                          </h3>
                          <p className="blogs-card__excerpt">{blog.excerpt}</p>
                          <div className="blogs-card__meta">
                            <time dateTime={blog.publishedAt}>
                              {formatBlogDate(blog.publishedAt)}
                            </time>
                            {blog.readingTime && (
                              <>
                                <span
                                  className="blogs-card__meta-divider"
                                  aria-hidden="true"
                                />
                                <span>{blog.readingTime} min read</span>
                              </>
                            )}
                          </div>
                        </Link>
                      </article>
                    ))}
                  </div>

                  {/* Pagination */}
                  {pagination.totalPages > 1 && (
                    <nav
                      className="blogs-pagination"
                      aria-label="Blog pagination"
                    >
                      <button
                        className="blogs-pagination__btn"
                        onClick={handlePrevPage}
                        disabled={!pagination.hasPrevPage}
                        aria-label="Go to previous page"
                      >
                        ← Previous
                      </button>
                      <span className="blogs-pagination__info">
                        Page {pagination.currentPage} of {pagination.totalPages}
                      </span>
                      <button
                        className="blogs-pagination__btn"
                        onClick={handleNextPage}
                        disabled={!pagination.hasNextPage}
                        aria-label="Go to next page"
                      >
                        Next →
                      </button>
                    </nav>
                  )}
                </section>
              )}
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
