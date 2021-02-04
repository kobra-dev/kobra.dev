import { Heading } from "@chakra-ui/react";
import { Image } from "@geist-ui/react";

export default function Demo() {
  return (
    <div style={{ height: "90vh", paddingTop: "1vh", background: "#007B36" }}>
      <Heading style={{ color: "white", textAlign: "center" }}>
        Try it out!
      </Heading>
      <br />
      <Image.Browser
        url="https://studio.kobra.dev"
        style={{ width: 1280, maxWidth: "90%" }}
      >
        <iframe
          src="https://studio.kobra.dev"
          style={{ width: "100%", height: "75vh" }}
          loading="eager"
        />
      </Image.Browser>
    </div>
  );
}
