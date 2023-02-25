import React, { useState } from "react";

interface Props {
  link: string;
  title: string;
  current?: boolean;
  className?: string;
}

const ListItem: React.FC<Props> = (props: Props) => {
  const [isLinkActive, setIsLinkActive] = useState(false);
  const handleClick = () => setIsLinkActive(true);
  const handleBlur = () => setIsLinkActive(false);
  return (
    <li className={props?.className}>
      <a
        href={props.link}
        onClick={handleClick}
        onBlur={handleBlur}
        aria-current={isLinkActive}
      >
        {props.title}
      </a>
    </li>
  );
};

export default ListItem;
