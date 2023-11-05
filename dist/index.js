import { forwardRef, useRef, useState, useCallback, useImperativeHandle, useEffect } from 'react';

const getEmbedUrl = (urlParameters, addConfiguration)=>{
    const url = new URL("/", "https://embed.diagrams.net");
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.append("proto", "json");
    if (addConfiguration) {
        urlSearchParams.append("configure", "1");
    }
    if (urlParameters) {
        Object.keys(urlParameters).forEach((key)=>{
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
};

/* eslint-disable @typescript-eslint/no-explicit-any */ /**
 * Type alias for a map of event handlers.
 * It maps each event name to its corresponding handler function,
 * which receives the event data typed to the specific event type.
 */ // export type EventHandler = {
//   [E in EmbedEvents as E['event']]?: (data: E) => void;
// };
/**
 * Handles an incoming postMessage event by parsing the data
 * and invoking the appropriate event handler if available.
 *
 * @param event - The MessageEvent received from the postMessage listener.
 * @param handlers - A map of event handlers keyed by the event type.
 */ function handleEvent(event, handlers) {
    // Validate the event origin to ensure it comes from 'embed.diagrams.net'.
    if (!event.origin.includes("embed.diagrams.net")) {
        return;
    }
    // export function handleEvent(event: MessageEvent, handlers: EventHandler) {
    try {
        // Attempt to parse the event data as an EmbedEvent.
        const data = JSON.parse(event.data);
        // Check if there is a handler for the received event type.
        if (isEmbedEvent(data)) {
            const handler = handlers[data.event];
            if (handler) {
                // Invoke the handler with the correctly typed data.
                handler(data);
            }
        }
    } catch  {
        // An empty catch block should be avoided, at least log the error.
        console.error("Failed to handle event");
    }
}
// Helper type guard function to discriminate the EmbedEvents type
function isEmbedEvent(data) {
    return typeof data === "object" && data !== null && "event" in data;
}

/**
 * @description A hook to send actions to the draw.io editor
 * @param {RefObject<HTMLIFrameElement | null>} iframeRef
 * @returns {EmbedActions}
 */ const useActions = (iframeRef)=>{
    function sendAction(action, data) {
        iframeRef.current?.contentWindow?.postMessage(JSON.stringify({
            action,
            ...data
        }), "*");
    }
    /**
   * Loads the given XML into the editor
   * @param {UniqueActionProps<ActionLoad>} data
   * @returns {void}
   */ const load = (data)=>{
        sendAction("load", data);
    };
    /**
 * Configure the editor
 * @param {UniqueActionProps<ActionConfigure>} data
 * @returns {void}
 */ const configure = (data)=>{
        sendAction("configure", data);
    };
    /**
   * Merge the contents of the given XML into the current file
   * @param {UniqueActionProps<ActionMerge>} data
   * @returns {void}
   */ const merge = (data)=>{
        sendAction("merge", data);
    };
    /**
   * Display a dialog in the editor window
   * @param {UniqueActionProps<ActionDialog>} data
   * @returns {void}
   */ const dialog = (data)=>{
        sendAction("dialog", data);
    };
    /**
   * Display a prompt in the editor window
   * @param {UniqueActionProps<ActionPrompt>} data
   * @returns {void}
   */ const prompt = (data)=>{
        sendAction("prompt", data);
    };
    /**
   * Show the template dialog
   * @param {UniqueActionProps<ActionTemplate>} data
   * @returns {void}
   */ const template = (data)=>{
        sendAction("template", data);
    };
    /**
   * Runs an array of layouts using the same format as Arrange > Layout > Apply.
   * @param {UniqueActionProps<ActionLayout>} data
   * @returns {void}
   */ const layout = (data)=>{
        sendAction("layout", data);
    };
    /**
   * Show a draft dialog
   * @param {UniqueActionProps<ActionDraft>} data
   * @returns {void}
   */ const draft = (data)=>{
        sendAction("draft", data);
    };
    /**
   * Display a message in the status bar
   * @param {UniqueActionProps<ActionStatus>} data
   * @returns {void}
   */ const status = (data)=>{
        sendAction("status", data);
    };
    /**
   * Display a spinner with a message or hide the current spinner if show is set to false
   * @param {UniqueActionProps<ActionSpinner>} data
   * @returns {void}
   */ const spinner = (data)=>{
        sendAction("spinner", data);
    };
    /**
   * Export the current diagram
   * @param {UniqueActionProps<ActionExport>} data
   * @returns {void}
   */ const exportDiagram = (data)=>{
        sendAction("export", data);
    };
    /**
 * @description A hook to send actions to the draw.io editor
 */ return {
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
};

/**
 * Draw.io embed component
 * @param {DrawIoEmbedProps} props
 * @param {string} props.urlParameters
 * @param {string} props.configuration
 * @param {string} props.xml
 * @param {(data: any) => void} props.onSave
 * @param {(data: any) => void} props.onClose
 * @param {(data: any) => void} props.onLoad
 * @param {(data: any) => void} props.onConfigure
 * @param {(data: any) => void} props.onDraft
 * @param {(data: any) => void} props.onExport
 * @param {(data: any) => void} props.onMerge
 * @param {(data: any) => void} props.onPrompt
 * @param {(data: any) => void} props.onTemplate
 * @param {React.Ref<DrawIoEmbedRef>} ref
 * @returns {JSX.Element}
 */ const DrawIOEmbed = /*#__PURE__*/ forwardRef(function DrawIoEmbed(props, ref) {
    const { urlParameters, configuration, xml, onSave, onClose, onLoad, onConfigure, onDraft, onExport, onMerge, onPrompt, onTemplate } = props;
    const iframeRef = useRef(null);
    const action = useActions(iframeRef);
    const iframeUrl = getEmbedUrl(urlParameters, !!configuration);
    const [isInitialized, setIsInitialized] = useState(false);
    /**
     * @param {MessageEvent} evt
     * @returns {void}
     */ const messageHandler = useCallback((evt)=>{
        /**
         * @param {MessageEvent} evt
         * @returns {void}
         */ handleEvent(evt, {
            /**
           * @returns {void}
           */ init: ()=>{
                setIsInitialized(true);
            },
            /**
           * @param {EventUnion<"load">} data
           * @returns {void}
           */ load: (data)=>{
                if (onLoad) {
                    onLoad(data);
                }
            },
            /**
           * 
           * @param {EventUnion<"configure">} data
           * @returns {void}
           */ configure: (data)=>{
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
           */ save: (data)=>{
                action.exportDiagram({
                    format: "xmlsvg",
                    exit: data.exit
                });
            },
            /**
           * @param {EventUnion<"exit">} data
           * @returns {void}
           */ exit: (data)=>{
                if (onClose) {
                    onClose(data);
                }
            },
            /**
           * @param {EventUnion<"draft">} data
           * @returns {void}
           */ draft: (data)=>{
                if (onDraft) {
                    onDraft(data);
                }
            },
            /**
           * @param {EventUnion<"export">} data
           * @returns {void}           
           */ export: (data)=>{
                if (onSave) {
                    onSave({
                        event: "save",
                        xml: data.data
                    });
                }
                /**
             * Check if exit is true and call onClose
             * @returns {void}
             */ if (onExport) {
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
           */ merge: (data)=>{
                if (onMerge) {
                    onMerge(data);
                }
            },
            /**
           * @param {EventUnion<'prompt'>} data
           * @returns {void}
           */ prompt: (data)=>{
                if (onPrompt) {
                    onPrompt(data);
                }
            },
            /**
           * @param {EventUnion<'template'>} data
           * @returns {void}
           */ template: (data)=>{
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
    useImperativeHandle(/**
       * @param {React.Ref<DrawIoEmbedRef>} ref
       */ ref, ()=>({
            /**
         * @param {string} xml
         * @returns {void}
         */ ...action
        }), [
        action
    ]);
    useEffect(()=>{
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
    // Initial load
    useEffect(()=>{
        /**
       * Add event listener for messages from iframe
       */ window.addEventListener("message", messageHandler);
        /**
       * Remove event listener for messages from iframe
       */ return ()=>{
            window.removeEventListener("message", messageHandler);
        };
    }, [
        messageHandler
    ]);
    return /*#__PURE__*/ React.createElement("iframe", {
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
});

export { DrawIOEmbed, useActions };
//# sourceMappingURL=index.js.map
