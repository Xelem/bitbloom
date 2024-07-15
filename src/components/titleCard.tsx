import React from "react";

interface TitleCardProps {
  title: string;
  children?: React.JSX.Element;
  topMargin?: string;
}

const TitleCard: React.FC<TitleCardProps> = ({
  title,
  children,
  topMargin,
}) => {
  return (
    <div
      className={
        "card w-full p-6 bg-base-100 shadow-xl  text-gray-700 dark:text-gray-200" +
        (topMargin || "mt-6")
      }
    >
      {/* Title for Card */}
      <div
        className={`text-xl font-semibold  text-gray-700 dark:text-gray-200`}
      >
        {title}
      </div>

      <div className="divider mt-2"></div>

      {/** Card Body */}
      <div className="h-full w-full pb-6 bg-base-100  text-gray-700 dark:text-gray-200">
        {children}
      </div>
    </div>
  );
};

export default TitleCard;
