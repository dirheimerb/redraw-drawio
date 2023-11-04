/* eslint-disable @typescript-eslint/no-explicit-any */
import { useActions } from './use-actions';

export type EventKey =
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
export type UiTheme = 'min' | 'atlas' | 'kennedy' | 'dark';
export type ExportFormat =
  | 'html'
  | 'html2'
  | 'svg'
  | 'xmlsvg'
  | 'png'
  | 'xmlpng';
export interface DrawIoEmbedProps {
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
  configuration?: { [key: string]: any };
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

export type DrawIoEmbedRef = ReturnType<typeof useActions>;
export interface UrlParameters {
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

export type EmbedEvents =
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

export type EventMap = {
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
export type EventUnion<E extends EventKey> = { event: E } & EventMap[E];
export type EventHandler<E> = (data: E) => void;
export type EventHandlerMap = {
  [E in EventKey]?: EventHandler<EventUnion<E>>;
};
export type EventInit = {
  event: 'init';
};
export type EventLoad = {
  event: 'load';
  xml: string;
  scale: number;
};
export type EventSave = {
  event: 'save';
  exit?: boolean;
  xml: string;
};
export type EventExit = {
  event: 'exit';
  modified: boolean;
};
export type EventConfigure = {
  event: 'configure';
};
export type EventMerge = {
  event: 'merge';
  error: string;
  message: string;
};
export type EventPrompt = {
  event: 'prompt';
  value: string;
  message: ActionPrompt;
};
export type EventTemplate = {
  event: 'template';
  xml: string;
  name: string;
  message: ActionTemplate;
  libs?: string;
  builtIn?: boolean;
  blank?: boolean;
};
export type EventDraft = {
  event: 'draft';
  error?: string;
  result?: string;
  message: ActionDraft;
};
export type EventExport = {
  event: 'export';
  format: ExportFormat;
  message: ActionExport;
  data: string;
  xml: string;
};
export type ActionLoad = {
  action: 'load';
  xml: string;
};
export type ActionMerge = {
  action: 'merge';
  xml: string;
};
export type ActionConfigure = {
  action: 'configure';
  config: { [key: string]: any };
};
export type ActionDialog = {
  action: 'dialog';
  title: string;
  message: string;
  button: string;
  modified?: boolean;
};
export type ActionPrompt = {
  action: 'prompt';
  title: string;
  ok: string;
  defaultValue: string;
};
export type ActionTemplate = {
  action: 'template';
  callback?: boolean;
};
export type ActionLayout = {
  action: 'layout';
  layouts: string[];
};
export type ActionDraft = {
  action: 'draft';
  xml: string;
  name: string;
  editKey: string;
  discardKey: string;
  ignore: boolean;
};
export type ActionStatus = {
  action: 'status';
  message: string;
  modified?: boolean;
};
export type ActionSpinner = {
  action: 'spinner';
  message: string;
  show: boolean;
  enabled: boolean;
};
export type ActionExport = {
  action: 'export';
  format: ExportFormat;
  data?: string;
  message?: string;
  xml?: string;
  exit?: boolean;
};
export type ActionExit = {
  action: 'exit';
  message?: string;
};
export type EmbedActions =
  | ActionLoad
  | ActionMerge
  | ActionConfigure
  | ActionDialog
  | ActionPrompt
  | ActionTemplate
  | ActionLayout;
export type EmbedActionsWithDraft = EmbedActions | ActionDraft;
