import React, { useState } from "react";

interface Props {
  title: string;
  isLink: boolean;
  link?: string;
  current?: boolean;
  className?: string;
}

const ListItem: React.FC<Props> = (props: Props) => {
  const [isLinkActive, setIsLinkActive] = useState(false);
  const handleClick = () => setIsLinkActive(true);
  const handleBlur = () => setIsLinkActive(false);

  return (
    <>
      {props.isLink && (
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
      )}

      {!props.isLink && (
        <>
          <li className={props?.className}>{props.title}</li>
        </>
      )}
    </>
  );
};

export default ListItem;
