import { EmbedEvents, EventHandlerMap } from './types';
/**
 * Type alias for a map of event handlers.
 * It maps each event name to its corresponding handler function,
 * which receives the event data typed to the specific event type.
 */
/**
 * Handles an incoming postMessage event by parsing the data
 * and invoking the appropriate event handler if available.
 *
 * @param event - The MessageEvent received from the postMessage listener.
 * @param handlers - A map of event handlers keyed by the event type.
 */
export declare function handleEvent(
  event: MessageEvent,
  handlers: EventHandlerMap,
): void;
export declare function isEmbedEvent(data: unknown): data is EmbedEvents;
//# sourceMappingURL=handleEvents.d.ts.map
