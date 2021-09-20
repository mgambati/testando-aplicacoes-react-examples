import { FC, useEffect, useState } from "react";

export const Foo: FC = () => {
  const [foo, setFoo] = useState("");

  const fetchFoo = async () => {
    const response = await fetch("/foo");
    const data = await response.json();
    setFoo(data.foo);
  };

  useEffect(() => {
    fetchFoo();
  }, []);

  return <div>Foo {foo}</div>;
};
