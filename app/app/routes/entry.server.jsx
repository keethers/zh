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
  const body = new PassThrough();

  const stream = renderToPipeableStream(
    <RemixServer context={remixContext} url={request.url} />,
    {
      onShellReady() {
        responseHeaders.set("Content-Type", "text/html");
        stream.pipe(body);
      },
      onError(error) {
        console.error(error);
      },
    }
  );

  return new Response(body, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
