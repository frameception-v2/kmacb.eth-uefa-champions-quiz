import { PROJECT_TITLE } from "~/lib/constants";

export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_URL || `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

  const config = {
    accountAssociation: {
      message: {
        domain: "kmacbeth-uefa-champions-quiz.vercel.app",
        timestamp: 1738713748,
        expirationTime: 1746489748
      },
      signature: "7850fbbf389af45f5c196cb1cb928760d59f5ecdd1e35592a8fe301e9e7f91f22ed69cf71e4c062eae418b4ca5a81ca8c1da4ea2074b72df4aeec697d0bcf3ee1b",
      signingKey: "e338c8776987a89c10f561406cbcc24b1cffdf6c3a35810bf9f8c9ea01aef753"
    },
    frame: {
      version: "1",
      name: PROJECT_TITLE,
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/frames/hello/opengraph-image`,
      buttonTitle: "Launch Frame",
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
      webhookUrl: `${appUrl}/api/webhook`,
    },
  };

  return Response.json(config);
}
