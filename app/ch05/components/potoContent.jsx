import React from "react";

function PotoContent({ content }) {
  const descriptions = content.map((desc, index) => (
    <span key={index}>
      <div class="">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{desc}
        </span>
      </div>
    </span>
  ));

  return <>{descriptions}</>;
}

export default PotoContent;
