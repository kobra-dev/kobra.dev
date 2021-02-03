import { Image } from "@geist-ui/react";

export default function Demo() {
  return (
    <div style={{ paddingTop: "100vh", background: "#007B36" }}>
      <Image.Browser
        url="https://studio.kobra.dev"
        style={{ width: 1280, maxWidth: "90%" }}
      >
        <iframe
          src="https://studio.kobra.dev"
          style={{ width: "100%", height: "75vh" }}
          frameBorder={0}
          loading="eager"
        />
      </Image.Browser>
    </div>
  );
}
