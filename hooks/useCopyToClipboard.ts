import { useEffect, useState } from "react";

export function useCopyToClipboard(dur: number = 3000) {
  const [isCopied, setIsCopied] = useState(false);

  const copyClipboard = (data: string) => {
    navigator.clipboard.writeText(data).then(() => {
      setIsCopied(true);
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setIsCopied(false);
    }, dur);
  }, [isCopied, dur]);

  return {
    isCopied,
    copyClipboard,
  };
}
