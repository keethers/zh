import { PassThrough } from "stream";
import { Response } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { renderToPipeableStream } from "react-dom/server";

export default function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
) {
  return new Promise((resolve, reject) => {
    const { pipe } = renderToPipeableStream(
      <RemixServer context={remixContext} url={request.url} />,
      {
        onShellReady() {
          responseHeaders.set("Content-Type", "text/html");

          const body = new PassThrough();
          resolve(
            new Response(body, {
              status: responseStatusCode,
              headers: responseHeaders
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error);
        }
      }
    );
  });

}
