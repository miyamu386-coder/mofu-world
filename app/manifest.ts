import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "モフワールド",
    short_name: "モフワールド",
    description: "モフたちが暮らす小さな世界",
    start_url: "/",
    display: "standalone",
    background_color: "#dff4ff",
    theme_color: "#dff4ff",
    orientation: "landscape",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}