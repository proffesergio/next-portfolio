import { ReactNode } from 'react';

type TProps = { heading: string; content?: string | ReactNode };

export const SectionHeading = ({ heading, content }: TProps) => (
  <div className="section-heading">
    <h2>
      {heading}
      <span className="text-violet-400">.</span>
    </h2>
    {content && <p>{content}</p>}
  </div>
);
