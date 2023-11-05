import { forwardRef, useRef, useState, useCallback, useImperativeHandle, useEffect } from 'react';

var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/lib/getEmbedUrl.ts
var getEmbedUrl = /* @__PURE__ */ __name((urlParameters, addConfiguration) => {
  const url = new URL("/", "https://embed.diagrams.net");
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("proto", "json");
  if (addConfiguration) {
    urlSearchParams.append("configure", "1");
  }
  if (urlParameters) {
    Object.keys(urlParameters).forEach((key) => {
      const value = urlParameters[key];
      if (value) {
        if (typeof value === "boolean") {
          urlSearchParams.append(key, value ? "1" : "0");
        } else {
          urlSearchParams.append(key, value.toString());
        }
      }
    });
  }
  url.search = urlSearchParams.toString();
  return url.toString();
}, "getEmbedUrl");

// src/lib/handleEvents.ts
function handleEvent(event, handlers) {
  if (!event.origin.includes("embed.diagrams.net")) {
    return;
  }
  try {
    const data = JSON.parse(event.data);
    if (isEmbedEvent(data)) {
      const handler = handlers[data.event];
      if (handler) {
        handler(data);
      }
    }
  } catch {
    console.error("Failed to handle event");
  }
}
__name(handleEvent, "handleEvent");
function isEmbedEvent(data) {
  return typeof data === "object" && data !== null && "event" in data;
}
__name(isEmbedEvent, "isEmbedEvent");

// src/hooks/use-actions.ts
var useActions = /* @__PURE__ */ __name((iframeRef) => {
  function sendAction(action, data) {
    iframeRef.current?.contentWindow?.postMessage(JSON.stringify({
      action,
      ...data
    }), "*");
  }
  __name(sendAction, "sendAction");
  const load = /* @__PURE__ */ __name((data) => {
    sendAction("load", data);
  }, "load");
  const configure = /* @__PURE__ */ __name((data) => {
    sendAction("configure", data);
  }, "configure");
  const merge = /* @__PURE__ */ __name((data) => {
    sendAction("merge", data);
  }, "merge");
  const dialog = /* @__PURE__ */ __name((data) => {
    sendAction("dialog", data);
  }, "dialog");
  const prompt = /* @__PURE__ */ __name((data) => {
    sendAction("prompt", data);
  }, "prompt");
  const template = /* @__PURE__ */ __name((data) => {
    sendAction("template", data);
  }, "template");
  const layout = /* @__PURE__ */ __name((data) => {
    sendAction("layout", data);
  }, "layout");
  const draft = /* @__PURE__ */ __name((data) => {
    sendAction("draft", data);
  }, "draft");
  const status = /* @__PURE__ */ __name((data) => {
    sendAction("status", data);
  }, "status");
  const spinner = /* @__PURE__ */ __name((data) => {
    sendAction("spinner", data);
  }, "spinner");
  const exportDiagram = /* @__PURE__ */ __name((data) => {
    sendAction("export", data);
  }, "exportDiagram");
  return {
    load,
    configure,
    merge,
    dialog,
    prompt,
    template,
    layout,
    draft,
    status,
    spinner,
    exportDiagram
  };
}, "useActions");

// src/lib/drawio-embed.tsx
var DrawIOEmbed = /* @__PURE__ */ forwardRef(/* @__PURE__ */ __name(function DrawIoEmbed(props, ref) {
  const { urlParameters, configuration, xml, onSave, onClose, onLoad, onConfigure, onDraft, onExport, onMerge, onPrompt, onTemplate } = props;
  const iframeRef = useRef(null);
  const action = useActions(iframeRef);
  const iframeUrl = getEmbedUrl(urlParameters, !!configuration);
  const [isInitialized, setIsInitialized] = useState(false);
  const messageHandler = useCallback((evt) => {
    handleEvent(evt, {
      /**
      * @returns {void}
      */
      init: () => {
        setIsInitialized(true);
      },
      /**
      * @param {EventUnion<"load">} data
      * @returns {void}
      */
      load: (data) => {
        if (onLoad) {
          onLoad(data);
        }
      },
      /**
      * 
      * @param {EventUnion<"configure">} data
      * @returns {void}
      */
      configure: (data) => {
        if (configuration) {
          action.configure({
            config: configuration
          });
        }
        if (onConfigure) {
          onConfigure(data);
        }
      },
      /**
      * @param {EventUnion<"save">} data
      * @returns {void}
      */
      save: (data) => {
        action.exportDiagram({
          format: "xmlsvg",
          exit: data.exit
        });
      },
      /**
      * @param {EventUnion<"exit">} data
      * @returns {void}
      */
      exit: (data) => {
        if (onClose) {
          onClose(data);
        }
      },
      /**
      * @param {EventUnion<"draft">} data
      * @returns {void}
      */
      draft: (data) => {
        if (onDraft) {
          onDraft(data);
        }
      },
      /**
      * @param {EventUnion<"export">} data
      * @returns {void}           
      */
      export: (data) => {
        if (onSave) {
          onSave({
            event: "save",
            xml: data.data
          });
        }
        if (onExport) {
          onExport(data);
        }
        if (data.message.exit && onClose) {
          onClose({
            event: "exit",
            modified: true
          });
        }
      },
      /**
      * @param {EventUnion<"merge">} data
      * @returns {void}
      */
      merge: (data) => {
        if (onMerge) {
          onMerge(data);
        }
      },
      /**
      * @param {EventUnion<'prompt'>} data
      * @returns {void}
      */
      prompt: (data) => {
        if (onPrompt) {
          onPrompt(data);
        }
      },
      /**
      * @param {EventUnion<'template'>} data
      * @returns {void}
      */
      template: (data) => {
        if (onTemplate) {
          onTemplate(data);
        }
      }
    });
  }, [
    action,
    configuration,
    onClose,
    onSave,
    onLoad,
    onConfigure,
    onDraft,
    onExport,
    onMerge,
    onPrompt,
    onTemplate
  ]);
  useImperativeHandle(
    /**
    * @param {React.Ref<DrawIoEmbedRef>} ref
    */
    ref,
    () => ({
      /**
      * @param {string} xml
      * @returns {void}
      */
      ...action
    }),
    [
      action
    ]
  );
  useEffect(() => {
    if (isInitialized) {
      if (xml) {
        action.load({
          xml
        });
      } else {
        action.load({
          xml: ""
        });
      }
    }
  }, [
    action,
    isInitialized,
    xml
  ]);
  useEffect(() => {
    window.addEventListener("message", messageHandler);
    return () => {
      window.removeEventListener("message", messageHandler);
    };
  }, [
    messageHandler
  ]);
  return /* @__PURE__ */ React.createElement("iframe", {
    className: "diagrams-iframe",
    src: iframeUrl,
    ref: iframeRef,
    title: "Diagrams.net",
    style: {
      width: "100%",
      height: "100%",
      minWidth: "400px",
      minHeight: "400px",
      border: "none"
    }
  });
}, "DrawIoEmbed"));

export { DrawIOEmbed, useActions };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map