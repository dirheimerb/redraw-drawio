/* eslint-disable @typescript-eslint/no-explicit-any */
import { EmbedEvents, EventHandlerMap } from '../types';

/**
 * Type alias for a map of event handlers.
 * It maps each event name to its corresponding handler function,
 * which receives the event data typed to the specific event type.
 */
// export type EventHandler = {
//   [E in EmbedEvents as E['event']]?: (data: E) => void;
// };
/**
 * Handles an incoming postMessage event by parsing the data
 * and invoking the appropriate event handler if available.
 *
 * @param event - The MessageEvent received from the postMessage listener.
 * @param handlers - A map of event handlers keyed by the event type.
 */
export function handleEvent(
  event: MessageEvent,
  handlers: EventHandlerMap,
): void {
  // Validate the event origin to ensure it comes from 'embed.diagrams.net'.
  if (!event.origin.includes('embed.diagrams.net')) {
    return;
  }
  // export function handleEvent(event: MessageEvent, handlers: EventHandler) {

  try {
    // Attempt to parse the event data as an EmbedEvent.
    const data = JSON.parse(event.data) as EmbedEvents;

    // Check if there is a handler for the received event type.

    if (isEmbedEvent(data)) {
      const handler = handlers[data.event];

      if (handler) {
        // Invoke the handler with the correctly typed data.
        handler(data as any);
      }
    }
  } catch {
    // An empty catch block should be avoided, at least log the error.
    console.error('Failed to handle event');
  }
}

// Helper type guard function to discriminate the EmbedEvents type
export function isEmbedEvent(data: unknown): data is EmbedEvents {
  return typeof data === 'object' && data !== null && 'event' in data;
}
