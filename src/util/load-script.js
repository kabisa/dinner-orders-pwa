export default function loadScript(src) {
  return new Promise(function(resolve, reject) {
    const script = document.createElement("script");
    script.async = true;
    script.src = src;

    script.onload = resolve;
    script.onerror = reject;

    document.head.appendChild(script);
  });
}
