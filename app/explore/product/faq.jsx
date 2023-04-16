import React from "react";
import Accordion from "../../shared/Accordion/Accordion";

const Faq = () => {
  return (
    <div className="max-w-screen-xl px-3 mx-auto mt-10 p-10 rounded-xl shadow-md bg-white mb-5">
      <div className="text-2xl pb-5">Frequently Asked Questions</div>
      <div>
        <Accordion 
          title="1. Where is my order? Quisque molestie" 
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the industry's standard dummy text ever since.
          </br>
          </br>
          Listen to what they say about you
          </br>
          Randomised words which.
          </br>
          Internet tend to repeat predefined chunks
          </br>
          Automate multiple scenarios 
          </br>
          </br>
          <b>Do you currently have vacancies?</b>
          </br>
          When an unknown printegalley of type and scrambled it to make a type specimen book. It has survived not only five cedfgfnturies, but alsjkjo the leap into electronic typesetting.
          " />
        <Accordion
          title="2. Can I cancel or change my order?"
          content="When an unknown printegalley of type and scrambled it to make a type specimen book. It has survived not only five cedfgfnturies, but alsjkjo the leap into electronic typesetting."
        />
        <Accordion
          title="3. How can I return an item purchased online?"
          content=" <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </br>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </br>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
        />
      </div>
    </div>
  );
};

export default Faq;
