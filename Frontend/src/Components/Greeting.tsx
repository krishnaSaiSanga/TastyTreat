import { useEffect } from "react";

const Greeting = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div
        className="visme_d"
        data-title="Untitled Project"
        data-url="z4re6zkx-untitled-project?fullPage=true"
        data-domain="forms"
        data-full-page="true"
        data-min-height="100vh"
        data-form-id="50282"
      ></div>
    </div>
  );
};

export default Greeting;
