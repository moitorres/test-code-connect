import React from "react"
import { Footer } from "./Footers"
import figma from "@figma/code-connect"

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  Footer,
  "https://www.figma.com/design/BUqAux9bF0K5jeim9yrn5W/Simple-Design-System-(Community)?node-id=321%3A11357",
  {
    props: {
      platform: figma.enum("Platform", {
        Desktop: "desktop",
        Mobile: "mobile",
      }),
    },
    example: (props) => <Footer />,
  },
)
