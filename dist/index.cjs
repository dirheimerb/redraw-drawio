'use strict';

var React = require('react');

const getEmbedUrl = (urlParameters, addConfiguration) => {
  const url = new URL('/', 'https://embed.diagrams.net');
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append('proto', 'json');
  if (addConfiguration) {
    urlSearchParams.append('configure', '1');
  }
  if (urlParameters) {
    Object.keys(urlParameters).forEach((key) => {
      const value = urlParameters[key];
      if (value) {
        if (typeof value === 'boolean') {
          urlSearchParams.append(key, value ? '1' : '0');
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
  if (!event.origin.includes('embed.diagrams.net')) {
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
  } catch {
    // An empty catch block should be avoided, at least log the error.
    console.error('Failed to handle event');
  }
}
// Helper type guard function to discriminate the EmbedEvents type
function isEmbedEvent(data) {
  return typeof data === 'object' && data !== null && 'event' in data;
}

const useActions = (iframeRef) => {
  const sendAction = (action, data) => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({
        action,
        ...data,
      }),
      '*',
    );
  };
  /**
   * Load the contents of a diagram
   */ const load = (data) => {
    sendAction('load', data);
  };
  const configure = (data) => {
    sendAction('configure', data);
  };
  /**
   * Merge the contents of the given XML into the current file
   */ const merge = (data) => {
    sendAction('merge', data);
  };
  /**
   * Display a dialog in the editor window
   */ const dialog = (data) => {
    sendAction('dialog', data);
  };
  /**
   * Display a prompt in the editor window
   */ const prompt = (data) => {
    sendAction('prompt', data);
  };
  /**
   * Show the template dialog
   */ const template = (data) => {
    sendAction('template', data);
  };
  /**
   * Runs an array of layouts using the same format as Arrange > Layout > Apply.
   */ const layout = (data) => {
    sendAction('layout', data);
  };
  /**
   * Show a draft dialog
   */ const draft = (data) => {
    sendAction('draft', data);
  };
  /**
   * Display a message in the status bar
   */ const status = (data) => {
    sendAction('status', data);
  };
  /**
   * Display a spinner with a message or hide the current spinner if show is set to false
   */ const spinner = (data) => {
    sendAction('spinner', data);
  };
  const exportDiagram = (data) => {
    sendAction('export', data);
  };
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
    exportDiagram,
  };
};

const DrawIOEmbed = /*#__PURE__*/ React.forwardRef(
  function DrawIoEmbed(props, ref) {
    const {
      urlParameters,
      configuration,
      xml,
      onSave,
      onClose,
      onLoad,
      onConfigure,
      onDraft,
      onExport,
      onMerge,
      onPrompt,
      onTemplate,
    } = props;
    const iframeRef = React.useRef(null);
    const action = useActions(iframeRef);
    const iframeUrl = getEmbedUrl(urlParameters, !!configuration);
    const [isInitialized, setIsInitialized] = React.useState(false);
    const messageHandler = React.useCallback(
      (evt) => {
        handleEvent(evt, {
          init: () => {
            setIsInitialized(true);
          },
          load: (data) => {
            if (onLoad) {
              onLoad(data);
            }
          },
          configure: (data) => {
            if (configuration) {
              action.configure({
                config: configuration,
              });
            }
            if (onConfigure) {
              onConfigure(data);
            }
          },
          save: (data) => {
            action.exportDiagram({
              format: 'xmlsvg',
              exit: data.exit,
            });
          },
          exit: (data) => {
            if (onClose) {
              onClose(data);
            }
          },
          draft: (data) => {
            if (onDraft) {
              onDraft(data);
            }
          },
          export: (data) => {
            if (onSave) {
              onSave({
                event: 'save',
                xml: data.data,
              });
            }
            if (onExport) {
              onExport(data);
            }
            if (data.message.exit && onClose) {
              onClose({
                event: 'exit',
                modified: true,
              });
            }
          },
          merge: (data) => {
            if (onMerge) {
              onMerge(data);
            }
          },
          prompt: (data) => {
            if (onPrompt) {
              onPrompt(data);
            }
          },
          template: (data) => {
            if (onTemplate) {
              onTemplate(data);
            }
          },
        });
      },
      [
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
        onTemplate,
      ],
    );
    React.useImperativeHandle(
      ref,
      () => ({
        ...action,
      }),
      [action],
    );
    React.useEffect(() => {
      if (isInitialized) {
        if (xml) {
          action.load({
            xml,
          });
        } else {
          action.load({
            xml: '',
          });
        }
      }
    }, [action, isInitialized, xml]);
    // Initial load
    React.useEffect(() => {
      window.addEventListener('message', messageHandler);
      return () => {
        window.removeEventListener('message', messageHandler);
      };
    }, [messageHandler]);
    return /*#__PURE__*/ React.createElement('iframe', {
      className: 'diagrams-iframe',
      src: iframeUrl,
      ref: iframeRef,
      title: 'Diagrams.net',
      style: {
        width: '100%',
        height: '100%',
        minWidth: '400px',
        minHeight: '400px',
        border: 'none',
      },
    });
  },
);

module.exports = DrawIOEmbed;
//# sourceMappingURL=index.cjs.map
