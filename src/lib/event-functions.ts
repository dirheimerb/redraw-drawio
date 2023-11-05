import { RefObject } from "react";
import { EventUnion, UniqueActionProps, EmbedActions } from "../types";

function action<A>(
    iframeRef: RefObject<HTMLIFrameElement>,
    action: A,
    data: UniqueActionProps<EmbedActions>,
) {
    const message = iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({
        action,
        ...data,
      }),
      '*',
    );
    return message;
  }
export function onSave(data: EventUnion<"save">, iframeRef: RefObject<HTMLIFrameElement>) {
    action(iframeRef, 'save', {
      format: 'xmlsvg',
      exit: data.exit,
    });
  }