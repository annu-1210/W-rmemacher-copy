import React from "react";
import GuidAndBlogForm from "./GuidAndBlogForm";

function NewsletterSection() {
  return (
    <section className="max-w-[1920px] w-full mx-auto mt-[150px]">
      <div className="flex items-center justify-between gap-7">
        <div className="max-w-[686px] w-full rounded-2xl max-h-[273px]"></div>
        <GuidAndBlogForm />
      </div>
    </section>
  );
}

export default NewsletterSection;
