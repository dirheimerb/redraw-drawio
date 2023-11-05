import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DrawIOEmbed } from 'redraw-drawio/lib/DrawIOEmbed';
import { getEmbedUrl } from '../src/lib/getEmbedUrl';

// Mock the external modules that the component uses
jest.mock('./getEmbedUrl');
jest.mock('./handleEvents');

// This is a helper function to setup the component with props and ref for testing
const setup = (props = {}) => {
  const ref = React.createRef();
  const utils = render(<DrawIOEmbed ref={ref} {...props} />);
  return { ref, ...utils };
};

describe('DrawIOEmbed', () => {
  it('renders an iframe with the correct src', () => {
    getEmbedUrl.mockReturnValue('mocked_url');
    const { getByTitle } = setup({ urlParameters: {}, configuration: {} });

    expect(getEmbedUrl).toHaveBeenCalledWith({}, true);
    expect(getByTitle('Diagrams.net')).toHaveAttribute('src', 'mocked_url');
  });

  it('initializes with the correct state', () => {
    const { ref } = setup();
    expect(ref.current).toBeDefined();
  });

  it('handles messages correctly', async () => {
    // Mock the message event
    const messageEvent = new MessageEvent('message', { data: 'someData' });
    const { ref } = setup();

    fireEvent(window, messageEvent);

    // waitFor allows us to handle asynchronous code
    await waitFor(() => {
      // We would check for the expected behavior after the message event is fired
      // For instance, if it calls some method from useActions or triggers some prop callback
    });
  });

  // Test more events and methods...
  it('calls onLoad when the load event is triggered', () => {
    // ... Implement test
  });

  it('calls onSave when the save event is triggered', () => {
    // ... Implement test
  });

  // and so on for onClose, onConfigure, onDraft, onExport, onMerge, onPrompt, onTemplate...

  // Cleanup after each test
  afterEach(() => {
    jest.clearAllMocks();
  });
});
