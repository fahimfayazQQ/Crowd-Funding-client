import Image from "next/image";
import React from "react";
import Image3 from "../../../public/assets/images/overview.png"

const Overview = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-10 p-10 rounded-xl shadow-md bg-white">
      <div className="text-2xl text-cneter">
        Paragraphs What this handout is about
      </div>
      <div>
        This handout will help you understand how paragraphs are formed, how to
        develop stronger paragraphs, and how to completely and clearly express
        your ideas. What is a paragraph?
      </div>
      <Image src={Image3} alt="img" className="w-full my-5" />
      <div>
        Paragraphs are the building blocks of papers. Many students define
        paragraphs in terms of length: a paragraph is a group of at least five
        sentences, a paragraph is half a page long, etc. In reality, though, the
        unity and coherence of ideas among sentences is what constitutes a
        paragraph. A paragraph is defined as “a group of sentences or a single
        sentence that forms a unit” (Lunsford and Connors 116). Length and
        appearance do not determine whether a section in a paper is a paragraph.{" "}
        <br />
        For instance, in some styles of writing, particularly journalistic
        styles, a paragraph can be just one sentence long. Ultimately, a
        paragraph is a sentence or group of sentences that support one main
        idea. In this handout, we will refer to this as the “controlling idea,”
        because it controls what happens in the rest of the paragraph. <br />{" "}
        How do I decide what to put in a paragraph? Before you can begin to
        determine what the composition of a particular paragraph will be, you
        must first decide on an argument and a working thesis statement for your
        paper. What is the most important idea that you are trying to convey to
        your reader? The information in each paragraph must be related to that
        idea. In other words, your paragraphs should remind your reader that
        there is a recurrent relationship between your thesis and the
        information in each paragraph. A working thesis functions like a seed
        from which your paper, and your ideas, will grow. The whole process is
        an organic one—a natural progression from a seed to a full-blown paper
        where there are direct, familial relationships between all of the ideas
        in the paper.
      </div>
    </div>
  );
};

export default Overview;
