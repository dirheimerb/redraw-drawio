'use client';
import { RefObject } from 'react';
import {
  ActionConfigure,
  ActionDialog,
  ActionDraft,
  ActionExport,
  ActionLayout,
  ActionLoad,
  ActionMerge,
  ActionPrompt,
  ActionSpinner,
  ActionStatus,
  ActionTemplate,
  EmbedActions,
  EventKey,
  UniqueActionProps,
  // ActionUnion
} from '../types';
/**
 * @description A hook to send actions to the draw.io editor
 * @param {RefObject<HTMLIFrameElement | null>} iframeRef
 * @returns {EmbedActions}
 */
export const useActions = (iframeRef: RefObject<HTMLIFrameElement | null>) => {
  function sendAction<A extends EventKey>(
    action: A,
    data: UniqueActionProps<EmbedActions>,
  ): void{
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({
        action,
        ...data,
      }),
      '*',
    );
  }

  /**
   * Loads the given XML into the editor
   * @param {UniqueActionProps<ActionLoad>} data
   * @returns {void}
   */
  const load = (data: UniqueActionProps<ActionLoad>): void => {
    sendAction('load', data);
  };
/**
 * Configure the editor
 * @param {UniqueActionProps<ActionConfigure>} data
 * @returns {void}
 */
  const configure = (data: UniqueActionProps<ActionConfigure>): void => {
    sendAction('configure', data);
  };
  /**
   * Merge the contents of the given XML into the current file
   * @param {UniqueActionProps<ActionMerge>} data
   * @returns {void}
   */
  const merge = (data: UniqueActionProps<ActionMerge>): void => {
    sendAction('merge', data);
  };
  /**
   * Display a dialog in the editor window
   * @param {UniqueActionProps<ActionDialog>} data
   * @returns {void}
   */
  const dialog = (data: UniqueActionProps<ActionDialog>): void => {
    sendAction('dialog', data);
  };
  /**
   * Display a prompt in the editor window
   * @param {UniqueActionProps<ActionPrompt>} data
   * @returns {void}
   */
  const prompt = (data: UniqueActionProps<ActionPrompt>): void => {
    sendAction('prompt', data);
  };

  /**
   * Show the template dialog
   * @param {UniqueActionProps<ActionTemplate>} data
   * @returns {void}
   */
  const template = (data: UniqueActionProps<ActionTemplate>): void => {
    sendAction('template', data);
  };
  /**
   * Runs an array of layouts using the same format as Arrange > Layout > Apply.
   * @param {UniqueActionProps<ActionLayout>} data
   * @returns {void}
   */
  const layout = (data: UniqueActionProps<ActionLayout>): void => {
    sendAction('layout', data);
  };
  /**
   * Show a draft dialog
   * @param {UniqueActionProps<ActionDraft>} data
   * @returns {void}
   */
  const draft = (data: UniqueActionProps<ActionDraft>): void => {
    sendAction('draft', data);
  };
  /**
   * Display a message in the status bar
   * @param {UniqueActionProps<ActionStatus>} data
   * @returns {void}
   */
  const status = (data: UniqueActionProps<ActionStatus>): void => {
    sendAction('status', data);
  };
  /**
   * Display a spinner with a message or hide the current spinner if show is set to false
   * @param {UniqueActionProps<ActionSpinner>} data
   * @returns {void}
   */
  const spinner = (data: UniqueActionProps<ActionSpinner>): void => {
    sendAction('spinner', data);
  };
  /**
   * Export the current diagram
   * @param {UniqueActionProps<ActionExport>} data
   * @returns {void}
   */
  const exportDiagram = (data: UniqueActionProps<ActionExport>): void => {
    sendAction('export', data);
  };
/**
 * @description A hook to send actions to the draw.io editor
 */
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
