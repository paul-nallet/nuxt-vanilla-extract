import { globalFontFace } from "@vanilla-extract/css";

export const HubotSans = "Hubot Sans";

globalFontFace(HubotSans, {
    src: 'url("/fonts/Hubot-Sans.woff2") format("woff2")',
    fontDisplay: "swap",
});
