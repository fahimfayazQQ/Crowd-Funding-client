import React from "react";
import { Collapse } from "antd";
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Faq = () => {
  return (
    <div className="max-w-screen-xl px-5 mx-auto my-10 p-10 rounded-xl shadow-md bg-white">
      <div className="text-2xl pb-5">Frequently Asked Questions</div>
      <Collapse accordion>
        <Panel header="1. Where is my order? Quisque molestie" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="2. How can I return an item purchased online?" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="3. Can I cancel or change my order?" key="3">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </div>
  );
};

export default Faq;
