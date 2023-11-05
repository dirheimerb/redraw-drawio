[redraw-drawio](../README.md) / [Exports](../modules.md) / DrawIoEmbedProps

# Interface: DrawIoEmbedProps

## Table of contents

### Properties

- [configuration](DrawIoEmbedProps.md#configuration)
- [onClose](DrawIoEmbedProps.md#onclose)
- [onConfigure](DrawIoEmbedProps.md#onconfigure)
- [onDraft](DrawIoEmbedProps.md#ondraft)
- [onExport](DrawIoEmbedProps.md#onexport)
- [onLoad](DrawIoEmbedProps.md#onload)
- [onMerge](DrawIoEmbedProps.md#onmerge)
- [onPrompt](DrawIoEmbedProps.md#onprompt)
- [onSave](DrawIoEmbedProps.md#onsave)
- [onTemplate](DrawIoEmbedProps.md#ontemplate)
- [urlParameters](DrawIoEmbedProps.md#urlparameters)
- [xml](DrawIoEmbedProps.md#xml)

## Properties

### configuration

• `Optional` **configuration**: `Object`

For configuration options, see https://www.drawio.com/doc/faq/configure-diagram-editor

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[src/types/index.ts:39](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L39)

___

### onClose

• `Optional` **onClose**: (`data`: [`EventExit`](../modules.md#eventexit)) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`EventExit`](../modules.md#eventexit) |

##### Returns

`void`

#### Defined in

[src/types/index.ts:42](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L42)

___

### onConfigure

• `Optional` **onConfigure**: (`data`: [`EventConfigure`](../modules.md#eventconfigure)) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`EventConfigure`](../modules.md#eventconfigure) |

##### Returns

`void`

#### Defined in

[src/types/index.ts:43](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L43)

___

### onDraft

• `Optional` **onDraft**: (`data`: [`EventDraft`](../modules.md#eventdraft)) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`EventDraft`](../modules.md#eventdraft) |

##### Returns

`void`

#### Defined in

[src/types/index.ts:47](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L47)

___

### onExport

• `Optional` **onExport**: (`data`: [`EventExport`](../modules.md#eventexport)) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`EventExport`](../modules.md#eventexport) |

##### Returns

`void`

#### Defined in

[src/types/index.ts:48](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L48)

___

### onLoad

• `Optional` **onLoad**: (`data`: [`EventLoad`](../modules.md#eventload)) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`EventLoad`](../modules.md#eventload) |

##### Returns

`void`

#### Defined in

[src/types/index.ts:40](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L40)

___

### onMerge

• `Optional` **onMerge**: (`data`: [`EventMerge`](../modules.md#eventmerge)) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`EventMerge`](../modules.md#eventmerge) |

##### Returns

`void`

#### Defined in

[src/types/index.ts:44](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L44)

___

### onPrompt

• `Optional` **onPrompt**: (`data`: [`EventPrompt`](../modules.md#eventprompt)) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`EventPrompt`](../modules.md#eventprompt) |

##### Returns

`void`

#### Defined in

[src/types/index.ts:45](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L45)

___

### onSave

• `Optional` **onSave**: (`data`: [`EventSave`](../modules.md#eventsave)) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`EventSave`](../modules.md#eventsave) |

##### Returns

`void`

#### Defined in

[src/types/index.ts:41](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L41)

___

### onTemplate

• `Optional` **onTemplate**: (`data`: [`EventTemplate`](../modules.md#eventtemplate)) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`EventTemplate`](../modules.md#eventtemplate) |

##### Returns

`void`

#### Defined in

[src/types/index.ts:46](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L46)

___

### urlParameters

• `Optional` **urlParameters**: [`UrlParameters`](UrlParameters.md)

Parameters documented at https://www.drawio.com/doc/faq/embed-mode

#### Defined in

[src/types/index.ts:31](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L31)

___

### xml

• `Optional` **xml**: `string`

XML structure for prefilling the editor

#### Defined in

[src/types/index.ts:35](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L35)
