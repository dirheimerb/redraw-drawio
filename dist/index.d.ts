import * as react from 'react';
import { RefObject } from 'react';

type EventKey =
  | 'load'
  | 'init'
  | 'save'
  | 'exit'
  | 'configure'
  | 'merge'
  | 'prompt'
  | 'template'
  | 'draft'
  | 'export';
type UiTheme = 'min' | 'atlas' | 'kennedy' | 'dark';
type ExportFormat =
  | 'html'
  | 'html2'
  | 'svg'
  | 'xmlsvg'
  | 'png'
  | 'xmlpng';
type UniqueActionProps<T> = Omit<T, 'action'>;
interface DrawIoEmbedProps {
  /**
   * Parameters documented at https://www.drawio.com/doc/faq/embed-mode
   */
  urlParameters?: UrlParameters;
  /**
   * XML structure for prefilling the editor
   */
  xml?: string;
  /**
   * For configuration options, see https://www.drawio.com/doc/faq/configure-diagram-editor
   */
  configuration?: {
    [key: string]: any;
  };
  onLoad?: (data: EventLoad) => void;
  onSave?: (data: EventSave) => void;
  onClose?: (data: EventExit) => void;
  onConfigure?: (data: EventConfigure) => void;
  onMerge?: (data: EventMerge) => void;
  onPrompt?: (data: EventPrompt) => void;
  onTemplate?: (data: EventTemplate) => void;
  onDraft?: (data: EventDraft) => void;
  onExport?: (data: EventExport) => void;
}
type DrawIoEmbedRef = ReturnType<typeof useActions>;
interface UrlParameters {
  /**
   * Theme of the editor
   */
  ui?: 'min' | 'atlas' | 'kennedy' | 'dark';
  /**
   * Shows a Loading… spinner while waiting for the diagram data to load in embed mode.
   *
   * @default false
   */
  spin?: boolean;
  /**
   * Disables the update of the modified state in embed mode after Save is selected and enables the update of the status message after changes are made. If 0 is used, the status bar is cleared after the changes. Otherwise, the value of this is used as the resource key.
   *
   * @default true
   */
  modified?: boolean;
  /**
   * If modified specifies a resource key, this is used to maintain the modified state after Save is selected.
   *
   * @default false
   */
  keepmodified?: boolean;
  /**
   * Specifies whether libraries should be enabled in embed mode.
   *
   * @default false
   */
  libraries?: boolean;
  /**
   * Displays a Save and Exit button instead of a Save button. Instead of using this URL parameter, you can specify this setting in the load message. If this is used, then the saveAndExit parameter is ignored.
   *
   * @default false
   */
  noSaveBtn?: boolean;
  /**
   * Displays an additional Save and Exit button. Instead of using this URL parameter, you can specify this setting in the load message. If noSaveBtn=1 is used, this can be disabled with saveAndExit=0.
   *
   * @default false
   */
  saveAndExit?: boolean;
  /**
   * Hides the Exit button. Instead of using this URL parameter, you can specify this setting in the load message.
   *
   * @default false
   */
  noExitBtn?: boolean;
}
type EmbedEvents =
  | EventInit
  | EventLoad
  | EventSave
  | EventExit
  | EventConfigure
  | EventMerge
  | EventPrompt
  | EventTemplate
  | EventDraft
  | EventExport;
type EventMap = {
  load: EventLoad;
  init: EventInit;
  save: EventSave;
  exit: EventExit;
  configure: EventConfigure;
  merge: EventMerge;
  prompt: EventPrompt;
  template: EventTemplate;
  draft: EventDraft;
  export: EventExport;
};
type EventUnion<E extends EventKey> = {
  event: E;
} & EventMap[E];
type EventHandler<E> = (data: E) => void;
type EventHandlerMap = {
  [E in EventKey]?: EventHandler<EventUnion<E>>;
};
type EventInit = {
  event: 'init';
};
type EventLoad = {
  event: 'load';
  xml: string;
  scale: number;
};
type EventSave = {
  event: 'save';
  exit?: boolean;
  xml: string;
};
type EventExit = {
  event: 'exit';
  modified: boolean;
};
type EventConfigure = {
  event: 'configure';
};
type EventMerge = {
  event: 'merge';
  error: string;
  message: string;
};
type EventPrompt = {
  event: 'prompt';
  value: string;
  message: ActionPrompt;
};
type EventTemplate = {
  event: 'template';
  xml: string;
  name: string;
  message: ActionTemplate;
  libs?: string;
  builtIn?: boolean;
  blank?: boolean;
};
type EventDraft = {
  event: 'draft';
  error?: string;
  result?: string;
  message: ActionDraft;
};
type EventExport = {
  event: 'export';
  format: ExportFormat;
  message: ActionExport;
  data: string;
  xml: string;
};
type ActionLoad = {
  action: 'load';
  xml: string;
};
type ActionMerge = {
  action: 'merge';
  xml: string;
};
type ActionConfigure = {
  action: 'configure';
  config: {
    [key: string]: any;
  };
};
type ActionDialog = {
  action: 'dialog';
  title: string;
  message: string;
  button: string;
  modified?: boolean;
};
type ActionPrompt = {
  action: 'prompt';
  title: string;
  ok: string;
  defaultValue: string;
};
type ActionTemplate = {
  action: 'template';
  callback?: boolean;
};
type ActionLayout = {
  action: 'layout';
  layouts: string[];
};
type ActionDraft = {
  action: 'draft';
  xml: string;
  name: string;
  editKey: string;
  discardKey: string;
  ignore: boolean;
};
type ActionStatus = {
  action: 'status';
  message: string;
  modified?: boolean;
};
type ActionSpinner = {
  action: 'spinner';
  message: string;
  show: boolean;
  enabled: boolean;
};
type ActionExport = {
  action: 'export';
  format: ExportFormat;
  data?: string;
  message?: string;
  xml?: string;
  exit?: boolean;
};
type ActionExit = {
  action: 'exit';
  message?: string;
};
type EmbedActions =
  | ActionLoad
  | ActionMerge
  | ActionConfigure
  | ActionDialog
  | ActionPrompt
  | ActionTemplate
  | ActionLayout;
type EmbedActionsWithDraft = EmbedActions | ActionDraft;
declare const useActions: (
  iframeRef: RefObject<HTMLIFrameElement | null>,
) => {
  load: (data: UniqueActionProps<ActionLoad>) => void;
  configure: (data: UniqueActionProps<ActionConfigure>) => void;
  merge: (data: UniqueActionProps<ActionMerge>) => void;
  dialog: (data: UniqueActionProps<ActionDialog>) => void;
  prompt: (data: UniqueActionProps<ActionPrompt>) => void;
  template: (data: UniqueActionProps<ActionTemplate>) => void;
  layout: (data: UniqueActionProps<ActionLayout>) => void;
  draft: (data: UniqueActionProps<ActionDraft>) => void;
  status: (data: UniqueActionProps<ActionStatus>) => void;
  spinner: (data: UniqueActionProps<ActionSpinner>) => void;
  exportDiagram: (data: UniqueActionProps<ActionExport>) => void;
};
declare function handleEvent(
  event: MessageEvent,
  handlers: EventHandlerMap,
): void;
declare function isEmbedEvent(data: unknown): data is EmbedEvents;
declare const getEmbedUrl: (
  urlParameters?: any,
  addConfiguration?: boolean,
) => string;
declare const DrawIOEmbed: react.ForwardRefExoticComponent<
  Omit<DrawIoEmbedProps, 'ref'> & react.RefAttributes<DrawIoEmbedRef>
>;

export { ActionConfigure, ActionDialog, ActionDraft, ActionExit, ActionExport, ActionLayout, ActionLoad, ActionMerge, ActionPrompt, ActionSpinner, ActionStatus, ActionTemplate, DrawIOEmbed, DrawIoEmbedProps, DrawIoEmbedRef, EmbedActions, EmbedActionsWithDraft, EmbedEvents, EventConfigure, EventDraft, EventExit, EventExport, EventHandler, EventHandlerMap, EventInit, EventKey, EventLoad, EventMap, EventMerge, EventPrompt, EventSave, EventTemplate, EventUnion, ExportFormat, UiTheme, UniqueActionProps, UrlParameters, getEmbedUrl, handleEvent, isEmbedEvent, useActions };
