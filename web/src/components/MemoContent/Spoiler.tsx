import classNames from "classnames";
import { useState } from "react";

interface Props {
  content: string;
}

const Spoiler: React.FC<Props> = ({ content }: Props) => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div
      className={classNames(
        "inline cursor-pointer select-none transition-all",
        isRevealed ? "bg-gray-100 dark:bg-zinc-700" : "bg-gray-200 dark:bg-zinc-600",
      )}
      onClick={() => setIsRevealed(!isRevealed)}
    >
      <span className={classNames(isRevealed ? "opacity-100" : "opacity-0")}>{content}</span>
    </div>
  );
};

export default Spoiler;
