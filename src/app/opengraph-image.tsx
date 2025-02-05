import { ImageResponse } from "next/og";
import { PROJECT_TITLE, PROJECT_DESCRIPTION } from "~/lib/constants";

export const alt = PROJECT_TITLE;
export const size = {
  width: 600,
  height: 400,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div tw="h-full w-full flex flex-col justify-center items-center relative bg-blue-800">
        <div tw="flex flex-col items-center text-center">
          <h1 tw="text-6xl text-white font-bold mb-4 flex items-center">
            🏆 {PROJECT_TITLE}
          </h1>
          <h3 tw="text-3xl text-blue-200 font-medium max-w-[80%]">
            {PROJECT_DESCRIPTION}
          </h3>
        </div>
        <div tw="absolute bottom-4 right-4 text-blue-200 text-xl">
          uefa-quiz.vercel.app
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
