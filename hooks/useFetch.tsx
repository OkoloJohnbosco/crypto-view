"use client";

import React from "react";

const useFetch = () => {
  const [state, setState] = React.useState({
    data: null,
    isLoading: false,
    error: null,
  });

  const mutateAsync = ({ url, ...options }: { url: string; options: any }) => {
    setState((prev) => ({ ...prev, isLoading: true, data: null }));
    // @ts-expect-error
    return fetch(url, options)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        throw new Error("API Error");
      })
      .then((response) => {
        console.log(response);
        setState((prev) => ({
          ...prev,
          isLoading: false,
          data: response,
          error: null,
        }));
        return response;
      })
      .catch((err) => {
        const error = { message: "Api Error" };
        setState((prev) => ({
          ...prev,
          isLoading: false,
          data: null,
          error: err,
        }));
        return err;
      });
  };

  return { ...state, mutateAsync };
};

export default useFetch;
