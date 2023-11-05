# Redraw Drawio

[![npm version](https://badge.fury.io/js/redraw-drawio.svg)](https://badge.fury.io/js/redraw-drawio)
[![Build Status](https://travis-ci.com/redraw/redraw-drawio.svg?branch=master)](https://travis-ci.com/redraw/redraw-drawio)
[![Coverage Status](https://coveralls.io/repos/github/redraw/redraw-drawio/badge.svg?branch=master)](https://coveralls.io/github/redraw/redraw-drawio?branch=master)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [redraw-drawio](#redraw-drawio)
  - [Overview](#overview)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Props](#props)
  - [Contributing](#contributing)
  - [License](#license)
  - [API](#api)
  - [| default |](#-default-)

## Overview

The DrawIOEmbed component is a React component that integrates diagrams.net (formerly draw.io) as an embeddable interface within React applications. This component facilitates the creation, editing, and saving of diagrams directly in the user interface of your web application.

## Features

Embedding diagrams.net: Seamlessly embed the diagrams.net editor using an iframe.

- Event Handling: Custom event handlers for various diagram events such as save, load, and export.
- Custom Configuration: Ability to configure the embedded editor with custom parameters.
- Ref Forwarding: Utilizes forwardRef to pass a ref down to the DOM iframe for parent component control.
- Action Hooks: A custom hook, useActions, to interact with the embedded editor through postMessage API.
- Life-cycle Integration: React lifecycle methods are used to handle the initialization and event listener cleanup.

## Installation

Before you can use the DrawIOEmbed component, ensure you have React and the required dependencies installed in your project:

```sh
npm install react
```

```sh
yarn add react
```

```sh
pnpm add react
```

## Usage

Here is a basic example of how to use the DrawIOEmbed component within a React application:

```tsx
import React from 'react';
import { DrawIOEmbed } from './DrawIOEmbed';

const App = () => {
  const handleSave = (data) => {
    // Handle the save event with the diagram data
  };

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <DrawIOEmbed onSave={handleSave} />
    </div>
  );
};

export default App;
```

## Props

The component accepts the following props:

urlParameters: Optional parameters to customize the diagrams.net editor.
configuration: Optional configuration settings for the editor.
xml: The initial XML of the diagram to be loaded.
onSave: Function that will be called when the diagram is saved.
onClose: Function that will be called when the editor is closed.
onLoad: Function that will be called when the diagram is loaded.
onConfigure: Function that will be called to configure the editor.
onDraft: Function that will be called when there is a draft event.
onExport: Function that will be called when the diagram is exported.
onMerge: Function that will be called for merge events.
onPrompt: Function that will be called for prompt events.
onTemplate: Function that will be called when a template is selected.
Ref Methods
The component exposes the following methods through the forwarded ref:

load: Loads a diagram XML into the editor.
configure: Sends configuration settings to the diagrams.net editor.
exportDiagram: Exports the current diagram in the specified format.
Event Handling
The component utilizes a message handler to communicate with the diagrams.net editor. It listens for messages from the iframe and triggers appropriate callbacks.

Styling
The iframe is styled to occupy the full width and height of its container, with a minimum size set to ensure usability. You can override these styles by passing a style prop to the component.

## Contributing

If you would like to contribute to the development of the DrawIOEmbed component, please follow the contributing guidelines in the project's repository.

## License

The DrawIOEmbed component is open-sourced software licensed under the MIT license.

## API

| Interfaces       |
| ---------------- |
| DrawIoEmbedProps |
| UrlParameters    |
| ActionConfigure  |

---

| Type Aliases          |
| --------------------- |
| ActionDialog          |
| ActionDraft           |
| ActionExit            |
| ActionExport          |
| ActionLayout          |
| ActionLoad            |
| ActionMerge           |
| ActionPromptv         |
| ActionSpinner         |
| ActionStatus          |
| ActionTemplate        |
| DrawIoEmbedRef        |
| EmbedActions          |
| EmbedActionsWithDraft |
| EmbedEvents           |
| EventConfigure        |
| EventDraft            |
| EventExit             |
| EventExport           |
| EventHandler          |
| EventHandlerMap       |
| EventInit             |
| EventKey              |
| EventLoad             |
| EventMap              |
| EventMerge            |
| EventPrompt           |
| EventSave             |
| EventTemplate         |
| EventUnion            |
| ExportFormat          |
| UiTheme               |

---

| Functions |
| --------- |
| default   |

---
