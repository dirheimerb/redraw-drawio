import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { DrawIoEmbedProps, DrawIoEmbedRef } from './types';
import { getEmbedUrl } from './getEmbedUrl';
import { handleEvent } from './handleEvents';
import { useActions } from './use-actions';

export const DrawIOEmbed = forwardRef<DrawIoEmbedRef, DrawIoEmbedProps>(
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

    const iframeRef = useRef<HTMLIFrameElement>(null);
    const action = useActions(iframeRef);
    const iframeUrl = getEmbedUrl(urlParameters, !!configuration);
    const [isInitialized, setIsInitialized] = useState(false);

    const messageHandler = useCallback(
      (evt: MessageEvent) => {
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
              action.configure({ config: configuration });
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

    useImperativeHandle(
      ref,
      () => ({
        ...action,
      }),
      [action],
    );

    useEffect(() => {
      if (isInitialized) {
        if (xml) {
          action.load({ xml });
        } else {
          action.load({ xml: '' });
        }
      }
    }, [action, isInitialized, xml]);

    // Initial load
    useEffect(() => {
      window.addEventListener('message', messageHandler);

      return () => {
        window.removeEventListener('message', messageHandler);
      };
    }, [messageHandler]);

    return (
      <iframe
        className="diagrams-iframe"
        src={iframeUrl}
        ref={iframeRef}
        title="Diagrams.net"
        style={{
          width: '100%',
          height: '100%',
          minWidth: '400px',
          minHeight: '400px',
          border: 'none',
        }}
      />
    );
  },
);
