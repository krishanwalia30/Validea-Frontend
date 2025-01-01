import React from "react";

import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Tailwind,
  Markdown,
} from "@react-email/components";

const Email = ({ markdownContent }) => {
  // const baseUrl = process.env.VERCEL_URL
  //   ? `https://${process.env.VERCEL_URL}`
  //   : "";
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white my-12 mx-auto font-sans">
          <Container className="px-4 max-w-[50rem]">
            <Img
              // src={`${baseUrl}/static/plaid-logo.png`}
              src={`cid:emailHeader@emailHeaderImage`}
              className="w-full"
            />

            {/* <Heading className="text-xl pt-4">Hello there 👋</Heading>
            <Text className="text-lg font-medium">
              Thanks fro joining me on this journey, check out some courses down
              here below.
            </Text> */}

            <Markdown
              markdownCustomStyles={{
                h1: {
                  color: "#616161",
                  fontFamily: "Trebuchet MS",
                  fontWeight: "900",
                  fontSize: "24px",
                  lineHeight: "28px",
                  textAlign: "center",
                },
                h2: {
                  color: "#ff5100",
                  fontFamily: "Trebuchet MS",
                  fontStyle: "normal",
                  fontWeight: "650",
                  fontSize: "20px",
                  textAlign: "left",
                  lineHeight: "21px",
                  textDecorationLine: "underline",
                },
                h3: {
                  color: "#ff5000",
                  fontFamily: "Trebuchet MS",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "18px",

                  textAlign: "left",
                },
                codeInline: { background: "grey" },
              }}
              markdownContainerStyles={{
                padding: "32px 32px",
                paddingTop: "12px 12px",
                background: "#FFF6E8",
                fontFamily: "Trebuchet MS",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "20px",
                color: "#616161",
                // borderRadius: "30px",
                // border: "solid 1px black",
              }}
            >
              {markdownContent}
            </Markdown>
            <Img
              // src={`${baseUrl}/static/plaid-logo.png`}
              src={`cid:unique@emailFooterImage`}
              className="w-full"
            />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Email;
