// import { Button  } from "antd";
import React, { useEffect } from "react";
import Button, { TShape } from "../components/button";
import { Flex } from "antd";
// import "../page.module.css"
const xd: TShape[] = ["square", "circle", "oval", "trapezoid", "rectangle", "parallelogram"];

export default function test1() {
  return (
    <div>
      test1
      <Flex gap={10} justify="center">
        <Button shape="triangle-left" />
        <Button shape="triangle-up" />
        <Button shape="triangle-down" />
        <Button shape="triangle-right" />
      </Flex>
      <div className="text-center">
        <Flex gap={10} justify="center" wrap="wrap" style={{ width: "500px" }}>
          {xd.map((res) => (
            <Button shape={res} />
          ))}
        </Flex>
      </div>
    </div>
  );
}
