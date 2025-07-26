import { useState } from 'react';

const CopyLinkButton = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch((err) => {
      console.error('링크 복사 실패:', err);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className="copy-link-button px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
    >
      {copied ? '복사완료 ✅' : '링크 복사하기'}
    </button>
  );
};

export default CopyLinkButton;
