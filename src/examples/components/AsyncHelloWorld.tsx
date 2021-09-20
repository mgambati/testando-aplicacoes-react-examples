import { FC, useLayoutEffect, useState } from "react";

export const AsyncHelloWorld: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    const toggleOffAsync = async () => {
      await delay(1000);

      setIsLoading(false);
    };

    toggleOffAsync();
  }, []);
  
  return <div>{isLoading ? "Loading..." : "Hello World"}</div>;
};

const delay = (timeout: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(false), timeout);
  });
};
