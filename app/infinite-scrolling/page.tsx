"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

// Define type for a post item
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const InfiniteScrollManual: React.FC = () => {
  const [items, setItems] = useState<Post[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const observer = useRef<IntersectionObserver | null>(null);

  const lastItemRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
        );
        const result = await response.json();

        setItems((prevItems) => [...prevItems, ...result.data]);
        if (result.data.length === 0) {
          setHasMore(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setHasMore(false);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  return (
    <div>
      {items.map((item, index) => {
        if (items.length === index + 1) {
          return (
            <div
              ref={lastItemRef}
              key={item.id}
              style={{
                border: "1px solid #ccc",
                margin: "10px",
                padding: "10px",
              }}
            >
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          );
        } else {
          return (
            <div
              key={item.id}
              style={{
                border: "1px solid #ccc",
                margin: "10px",
                padding: "10px",
              }}
            >
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          );
        }
      })}
      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
      {!hasMore && (
        <p style={{ textAlign: "center" }}>Yay! You have seen it all</p>
      )}
    </div>
  );
};

export default InfiniteScrollManual;
