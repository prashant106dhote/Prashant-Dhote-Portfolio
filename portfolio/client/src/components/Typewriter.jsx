import { useEffect, useState } from "react";

export default function Typewriter({ words }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const w = words[i];
    let t;
    if (!del && text === w) t = setTimeout(() => setDel(true), 1500);
    else if (del && text === "") { setDel(false); setI((i + 1) % words.length); }
    else t = setTimeout(() => setText(del ? w.slice(0, text.length - 1) : w.slice(0, text.length + 1)), del ? 35 : 75);
    return () => clearTimeout(t);
  }, [text, del, i, words]);

  return (
    <span aria-label={words.join(", ")}>
      <span className="grad-text" aria-hidden="true">{text}</span><span className="caret" aria-hidden="true">|</span>
    </span>
  );
}
