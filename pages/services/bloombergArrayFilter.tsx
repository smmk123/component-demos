import Link from 'next/link';
import React from 'react';

const BloombergArrayFilter = (props: any) => {
    const modules = props.data.modules;
    let nonEmptyStories: any[] = [];
  
    modules.forEach((module: { stories: any }) => {
      if (module.stories && module.stories.length > 0) {
        nonEmptyStories = nonEmptyStories.concat(module.stories);
      }
    });
  
    const limitedStories = nonEmptyStories.slice(0, 10);
  
    return (
      <div>
        {limitedStories.map((story) => (
          <div className="m-2" key={story.id}>
            <h2 className="text-xl font-bold">{story.title}</h2>
            <p>{story.summary}</p>
            <p>Published: {new Date(story.published*1000).toLocaleDateString()}</p>
            <p>By: {story.byline}</p>
            <Link className="text-blue-500 text-sm"href={story.longURL}>Click for More.</Link>
          </div>
        ))}
      </div>
    );
  };
  
  export default BloombergArrayFilter;