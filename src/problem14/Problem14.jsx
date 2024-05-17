import React from "react";
import Todos1 from "./Todos1";
import Todos2 from "./Todos2";
import Image from "./Image";
import Button from "./Button";

const Problem14 = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full gap-3 bg-gray-100 rounded top-3">
        <div className="flex flex-row justify-between w-full max-h-screen gap-3 bg-gray-100 rounded top-3">
          <Todos1 />
          <Todos2 />
        </div>
        <Image
          src="https://picsum.photos/200/300"
          alt="image"
          width={250}
          height={150}
        />
        <Button colorScheme="green" size="lg" variant="solid">
          Click me
        </Button>
      </div>
    </>
  );
};

export default Problem14;
