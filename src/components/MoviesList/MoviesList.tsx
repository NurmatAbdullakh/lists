"use client";

import { useMoviesGetAllInfiniteQuery } from "@/api/movies/movies.service";
import useIntersectionObserver from "@/hooks/useIntersectiongObserver";
import { useEffect, useRef } from "react";

export const MoviesList = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [intersecting] = useIntersectionObserver(targetRef);

  const { data, fetchNextPage, isLoading, isFetching } =
    useMoviesGetAllInfiniteQuery();

  useEffect(() => {
    if (intersecting) {
      fetchNextPage();
    }
  }, [intersecting]);

  const movies = data?.pages.flatMap((page) => page?.data?.movies) || [];

  return <button onClick={() => fetchNextPage()}>fetchNextPage</button>;
};
