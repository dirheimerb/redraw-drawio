'use client';
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { DrawIoEmbedProps, DrawIoEmbedRef, EventUnion } from '../types';
import { getEmbedUrl } from './getEmbedUrl';
import { handleEvent } from './handleEvents';
import { useActions } from '../hooks/use-actions';
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
 */
export const DrawIOEmbed = forwardRef<DrawIoEmbedRef, DrawIoEmbedProps>(
  function DrawIoEmbed(props, ref): JSX.Element {
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
    /**
     * @param {MessageEvent} evt
     * @returns {void}
     */
    const messageHandler = useCallback(
      (evt: MessageEvent) => {
        /**
         * @param {MessageEvent} evt
         * @returns {void}
         */
        handleEvent(evt, {
          /**
           * @returns {void}
           */
          init: (): void => {
            setIsInitialized(true);
          },
          /**
           * @param {EventUnion<"load">} data
           * @returns {void}
           */
          load: (data: EventUnion<"load">): void => {
            if (onLoad) {
              onLoad(data);
            }
          },
          /**
           * 
           * @param {EventUnion<"configure">} data
           * @returns {void}
           */
          configure: (data: EventUnion<"configure">): void => {
            if (configuration) {
              action.configure({ config: configuration });
            }

            if (onConfigure) {
              onConfigure(data);
            }
          },
          /**
           * @param {EventUnion<"save">} data
           * @returns {void}
           */
          save: (data: EventUnion<"save">): void => {
            action.exportDiagram({
              format: 'xmlsvg',
              exit: data.exit,
            });
          },
          /**
           * @param {EventUnion<"exit">} data
           * @returns {void}
           */
          exit: (data: EventUnion<"exit">): void => {
            if (onClose) {
              onClose(data);
            }
          },
          /**
           * @param {EventUnion<"draft">} data
           * @returns {void}
           */ 
          draft: (data: EventUnion<"draft">): void => {
            if (onDraft) {
              onDraft(data);
            }
          },
          /**
           * @param {EventUnion<"export">} data
           * @returns {void}           
           */
          export: (data: EventUnion<"export">): void => {
            if (onSave) {
              onSave({
                event: 'save',
                xml: data.data,
              });
            }
            /**
             * Check if exit is true and call onClose
             * @returns {void}
             */
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
          /**
           * @param {EventUnion<"merge">} data
           * @returns {void}
           */
          merge: (data: EventUnion<"merge">): void => {
            if (onMerge) {
              onMerge(data);
            }
          },
          /**
           * @param {EventUnion<'prompt'>} data
           * @returns {void}
           */
          prompt: (data: EventUnion<'prompt'>): void => {
            if (onPrompt) {
              onPrompt(data);
            }
          },
          /**
           * @param {EventUnion<'template'>} data
           * @returns {void}
           */
          template: (data: EventUnion<'template'>): void => {
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
      /**
       * @param {React.Ref<DrawIoEmbedRef>} ref
       */
      ref,
      () => ({
        /**
         * @param {string} xml
         * @returns {void}
         */
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
      /**
       * Add event listener for messages from iframe
       */
      window.addEventListener('message', messageHandler);
      /**
       * Remove event listener for messages from iframe
       */
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
