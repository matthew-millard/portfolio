import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import xml from "highlight.js/lib/languages/xml";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("xml", xml);

export default function formatCodeBlocks(rawContent) {
  const parser = new DOMParser();
  const parsedStr = parser.parseFromString(rawContent, "text/html");
  const hightlightedCode = hljs.highlight(parsedStr);
  return hightlightedCode;
}
