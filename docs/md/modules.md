[redraw-drawio](README.md) / Exports

# redraw-drawio

## Table of contents

### Interfaces

- [DrawIoEmbedProps](interfaces/DrawIoEmbedProps.md)
- [UrlParameters](interfaces/UrlParameters.md)

### Type Aliases

- [ActionConfigure](modules.md#actionconfigure)
- [ActionDialog](modules.md#actiondialog)
- [ActionDraft](modules.md#actiondraft)
- [ActionExit](modules.md#actionexit)
- [ActionExport](modules.md#actionexport)
- [ActionKey](modules.md#actionkey)
- [ActionLayout](modules.md#actionlayout)
- [ActionLoad](modules.md#actionload)
- [ActionMap](modules.md#actionmap)
- [ActionMerge](modules.md#actionmerge)
- [ActionPrompt](modules.md#actionprompt)
- [ActionSpinner](modules.md#actionspinner)
- [ActionStatus](modules.md#actionstatus)
- [ActionTemplate](modules.md#actiontemplate)
- [ActionUnion](modules.md#actionunion)
- [DrawIoEmbedRef](modules.md#drawioembedref)
- [EmbedActions](modules.md#embedactions)
- [EmbedActionsWithDraft](modules.md#embedactionswithdraft)
- [EmbedEvents](modules.md#embedevents)
- [EventConfigure](modules.md#eventconfigure)
- [EventDraft](modules.md#eventdraft)
- [EventExit](modules.md#eventexit)
- [EventExport](modules.md#eventexport)
- [EventHandler](modules.md#eventhandler)
- [EventHandlerMap](modules.md#eventhandlermap)
- [EventInit](modules.md#eventinit)
- [EventKey](modules.md#eventkey)
- [EventLoad](modules.md#eventload)
- [EventMap](modules.md#eventmap)
- [EventMerge](modules.md#eventmerge)
- [EventPrompt](modules.md#eventprompt)
- [EventSave](modules.md#eventsave)
- [EventTemplate](modules.md#eventtemplate)
- [EventUnion](modules.md#eventunion)
- [ExportFormat](modules.md#exportformat)
- [UiTheme](modules.md#uitheme)
- [UniqueActionProps](modules.md#uniqueactionprops)

### Functions

- [DrawIOEmbed](modules.md#drawioembed)
- [useActions](modules.md#useactions)

## Type Aliases

### ActionConfigure

Ƭ **ActionConfigure**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `action` | ``"configure"`` |
| `config` | \{ `[key: string]`: `any`;  } |

#### Defined in

[src/types/index.ts:210](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L210)

___

### ActionDialog

Ƭ **ActionDialog**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `action` | ``"dialog"`` |
| `button` | `string` |
| `message` | `string` |
| `modified?` | `boolean` |
| `title` | `string` |

#### Defined in

[src/types/index.ts:214](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L214)

___

### ActionDraft

Ƭ **ActionDraft**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `action` | ``"draft"`` |
| `discardKey` | `string` |
| `editKey` | `string` |
| `ignore` | `boolean` |
| `name` | `string` |
| `xml` | `string` |

#### Defined in

[src/types/index.ts:235](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L235)

___

### ActionExit

Ƭ **ActionExit**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `action` | ``"exit"`` |
| `message?` | `string` |

#### Defined in

[src/types/index.ts:262](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L262)

___

### ActionExport

Ƭ **ActionExport**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `action` | ``"export"`` |
| `data?` | `string` |
| `exit?` | `boolean` |
| `format` | [`ExportFormat`](modules.md#exportformat) |
| `message?` | `string` |
| `xml?` | `string` |

#### Defined in

[src/types/index.ts:254](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L254)

___

### ActionKey

Ƭ **ActionKey**: ``"configure"`` \| ``"dialog"`` \| ``"draft"`` \| ``"exit"`` \| ``"export"`` \| ``"init"`` \| ``"layout"`` \| ``"load"`` \| ``"merge"`` \| ``"prompt"`` \| ``"status"`` \| ``"spinner"`` \| ``"save"`` \| ``"template"``

#### Defined in

[src/types/index.ts:187](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L187)

___

### ActionLayout

Ƭ **ActionLayout**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `action` | ``"layout"`` |
| `layouts` | `string`[] |

#### Defined in

[src/types/index.ts:231](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L231)

___

### ActionLoad

Ƭ **ActionLoad**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `action` | ``"load"`` |
| `xml` | `string` |

#### Defined in

[src/types/index.ts:202](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L202)

___

### ActionMap

Ƭ **ActionMap**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `configure` | [`ActionConfigure`](modules.md#actionconfigure) |
| `dialog` | [`ActionDialog`](modules.md#actiondialog) |
| `draft` | [`ActionDraft`](modules.md#actiondraft) |
| `exit` | [`ActionExit`](modules.md#actionexit) |
| `export` | [`ActionExport`](modules.md#actionexport) |
| `init` | [`EventInit`](modules.md#eventinit) |
| `layout` | [`ActionLayout`](modules.md#actionlayout) |
| `load` | [`ActionLoad`](modules.md#actionload) |
| `merge` | [`ActionMerge`](modules.md#actionmerge) |
| `prompt` | [`ActionPrompt`](modules.md#actionprompt) |
| `save` | [`EventSave`](modules.md#eventsave) |
| `spinner` | [`ActionSpinner`](modules.md#actionspinner) |
| `status` | [`ActionStatus`](modules.md#actionstatus) |
| `template` | [`ActionTemplate`](modules.md#actiontemplate) |

#### Defined in

[src/types/index.ts:274](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L274)

___

### ActionMerge

Ƭ **ActionMerge**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `action` | ``"merge"`` |
| `xml` | `string` |

#### Defined in

[src/types/index.ts:206](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L206)

___

### ActionPrompt

Ƭ **ActionPrompt**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `action` | ``"prompt"`` |
| `defaultValue` | `string` |
| `ok` | `string` |
| `title` | `string` |

#### Defined in

[src/types/index.ts:221](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L221)

___

### ActionSpinner

Ƭ **ActionSpinner**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `action` | ``"spinner"`` |
| `enabled` | `boolean` |
| `message` | `string` |
| `show` | `boolean` |

#### Defined in

[src/types/index.ts:248](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L248)

___

### ActionStatus

Ƭ **ActionStatus**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `action` | ``"status"`` |
| `message` | `string` |
| `modified?` | `boolean` |

#### Defined in

[src/types/index.ts:243](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L243)

___

### ActionTemplate

Ƭ **ActionTemplate**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `action` | ``"template"`` |
| `callback?` | `boolean` |

#### Defined in

[src/types/index.ts:227](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L227)

___

### ActionUnion

Ƭ **ActionUnion**\<`A`\>: \{ `action`: `A`  } & [`ActionMap`](modules.md#actionmap)[`A`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`ActionKey`](modules.md#actionkey) |

#### Defined in

[src/types/index.ts:291](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L291)

___

### DrawIoEmbedRef

Ƭ **DrawIoEmbedRef**: `ReturnType`\<typeof [`useActions`](modules.md#useactions)\>

#### Defined in

[src/types/index.ts:51](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L51)

___

### EmbedActions

Ƭ **EmbedActions**: [`ActionLoad`](modules.md#actionload) \| [`ActionMerge`](modules.md#actionmerge) \| [`ActionConfigure`](modules.md#actionconfigure) \| [`ActionDialog`](modules.md#actiondialog) \| [`ActionPrompt`](modules.md#actionprompt) \| [`ActionTemplate`](modules.md#actiontemplate) \| [`ActionLayout`](modules.md#actionlayout)

#### Defined in

[src/types/index.ts:266](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L266)

___

### EmbedActionsWithDraft

Ƭ **EmbedActionsWithDraft**: [`EmbedActions`](modules.md#embedactions) \| [`ActionDraft`](modules.md#actiondraft)

#### Defined in

[src/types/index.ts:292](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L292)

___

### EmbedEvents

Ƭ **EmbedEvents**: [`EventInit`](modules.md#eventinit) \| [`EventLoad`](modules.md#eventload) \| [`EventSave`](modules.md#eventsave) \| [`EventExit`](modules.md#eventexit) \| [`EventConfigure`](modules.md#eventconfigure) \| [`EventMerge`](modules.md#eventmerge) \| [`EventPrompt`](modules.md#eventprompt) \| [`EventTemplate`](modules.md#eventtemplate) \| [`EventDraft`](modules.md#eventdraft) \| [`EventExport`](modules.md#eventexport)

#### Defined in

[src/types/index.ts:101](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L101)

___

### EventConfigure

Ƭ **EventConfigure**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `event` | ``"configure"`` |

#### Defined in

[src/types/index.ts:152](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L152)

___

### EventDraft

Ƭ **EventDraft**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `error?` | `string` |
| `event` | ``"draft"`` |
| `message` | [`ActionDraft`](modules.md#actiondraft) |
| `result?` | `string` |

#### Defined in

[src/types/index.ts:174](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L174)

___

### EventExit

Ƭ **EventExit**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `event` | ``"exit"`` |
| `modified` | `boolean` |

#### Defined in

[src/types/index.ts:148](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L148)

___

### EventExport

Ƭ **EventExport**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `event` | ``"export"`` |
| `format` | [`ExportFormat`](modules.md#exportformat) |
| `message` | [`ActionExport`](modules.md#actionexport) |
| `xml` | `string` |

#### Defined in

[src/types/index.ts:180](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L180)

___

### EventHandler

Ƭ **EventHandler**\<`E`\>: (`data`: `E`) => `void`

#### Type parameters

| Name |
| :------ |
| `E` |

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `E` |

##### Returns

`void`

#### Defined in

[src/types/index.ts:130](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L130)

___

### EventHandlerMap

Ƭ **EventHandlerMap**: \{ [E in EventKey]?: EventHandler\<EventUnion\<E\>\> }

#### Defined in

[src/types/index.ts:132](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L132)

___

### EventInit

Ƭ **EventInit**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `event` | ``"init"`` |

#### Defined in

[src/types/index.ts:135](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L135)

___

### EventKey

Ƭ **EventKey**: ``"load"`` \| ``"init"`` \| ``"save"`` \| ``"exit"`` \| ``"configure"`` \| ``"merge"`` \| ``"prompt"`` \| ``"template"`` \| ``"draft"`` \| ``"export"`` \| ``"dialog"`` \| ``"layout"`` \| ``"status"`` \| ``"spinner"``

#### Defined in

[src/types/index.ts:4](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L4)

___

### EventLoad

Ƭ **EventLoad**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `event` | ``"load"`` |
| `scale` | `number` |
| `xml` | `string` |

#### Defined in

[src/types/index.ts:138](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L138)

___

### EventMap

Ƭ **EventMap**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `configure` | [`EventConfigure`](modules.md#eventconfigure) |
| `dialog` | [`ActionDialog`](modules.md#actiondialog) |
| `draft` | [`EventDraft`](modules.md#eventdraft) |
| `exit` | [`EventExit`](modules.md#eventexit) |
| `export` | [`EventExport`](modules.md#eventexport) |
| `init` | [`EventInit`](modules.md#eventinit) |
| `layout` | [`ActionLayout`](modules.md#actionlayout) |
| `load` | [`EventLoad`](modules.md#eventload) |
| `merge` | [`EventMerge`](modules.md#eventmerge) |
| `prompt` | [`EventPrompt`](modules.md#eventprompt) |
| `save` | [`EventSave`](modules.md#eventsave) |
| `spinner` | [`ActionSpinner`](modules.md#actionspinner) |
| `status` | [`ActionStatus`](modules.md#actionstatus) |
| `template` | [`EventTemplate`](modules.md#eventtemplate) |

#### Defined in

[src/types/index.ts:113](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L113)

___

### EventMerge

Ƭ **EventMerge**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `error` | `string` |
| `event` | ``"merge"`` |
| `message` | `string` |

#### Defined in

[src/types/index.ts:155](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L155)

___

### EventPrompt

Ƭ **EventPrompt**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `event` | ``"prompt"`` |
| `message` | [`ActionPrompt`](modules.md#actionprompt) |
| `value` | `string` |

#### Defined in

[src/types/index.ts:160](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L160)

___

### EventSave

Ƭ **EventSave**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `event` | ``"save"`` |
| `exit?` | `boolean` |
| `xml` | `string` |

#### Defined in

[src/types/index.ts:143](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L143)

___

### EventTemplate

Ƭ **EventTemplate**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blank?` | `boolean` |
| `builtIn?` | `boolean` |
| `event` | ``"template"`` |
| `libs?` | `string` |
| `message` | [`ActionTemplate`](modules.md#actiontemplate) |
| `name` | `string` |
| `xml` | `string` |

#### Defined in

[src/types/index.ts:165](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L165)

___

### EventUnion

Ƭ **EventUnion**\<`E`\>: \{ `event`: `E`  } & [`EventMap`](modules.md#eventmap)[`E`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`EventKey`](modules.md#eventkey) |

#### Defined in

[src/types/index.ts:129](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L129)

___

### ExportFormat

Ƭ **ExportFormat**: ``"html"`` \| ``"html2"`` \| ``"svg"`` \| ``"xmlsvg"`` \| ``"png"`` \| ``"xmlpng"``

#### Defined in

[src/types/index.ts:20](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L20)

___

### UiTheme

Ƭ **UiTheme**: ``"min"`` \| ``"atlas"`` \| ``"kennedy"`` \| ``"dark"``

#### Defined in

[src/types/index.ts:19](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L19)

___

### UniqueActionProps

Ƭ **UniqueActionProps**\<`T`\>: `Omit`\<`T`, ``"action"``\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/types/index.ts:131](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L131)

## Functions

### DrawIOEmbed

▸ **DrawIOEmbed**(`props`): `ReactNode`

Draw.io embed component

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`DrawIoEmbedProps`](interfaces/DrawIoEmbedProps.md) & `RefAttributes`\<\{ `configure`: (`data`: [`UniqueActionProps`](modules.md#uniqueactionprops)\<[`ActionConfigure`](modules.md#actionconfigure)\>) => `void` ; `dialog`: (`data`: [`UniqueActionProps`](modules.md#uniqueactionprops)\<[`ActionDialog`](modules.md#actiondialog)\>) => `void` ; `draft`: (`data`: [`UniqueActionProps`](modules.md#uniqueactionprops)\<[`ActionDraft`](modules.md#actiondraft)\>) => `void` ; `exportDiagram`: (`data`: [`UniqueActionProps`](modules.md#uniqueactionprops)\<[`ActionExport`](modules.md#actionexport)\>) => `void` ; `layout`: (`data`: [`UniqueActionProps`](modules.md#uniqueactionprops)\<[`ActionLayout`](modules.md#actionlayout)\>) => `void` ; `load`: (`data`: [`UniqueActionProps`](modules.md#uniqueactionprops)\<[`ActionLoad`](modules.md#actionload)\>) => `void` ; `merge`: (`data`: [`UniqueActionProps`](modules.md#uniqueactionprops)\<[`ActionMerge`](modules.md#actionmerge)\>) => `void` ; `prompt`: (`data`: [`UniqueActionProps`](modules.md#uniqueactionprops)\<[`ActionPrompt`](modules.md#actionprompt)\>) => `void` ; `spinner`: (`data`: [`UniqueActionProps`](modules.md#uniqueactionprops)\<[`ActionSpinner`](modules.md#actionspinner)\>) => `void` ; `status`: (`data`: [`UniqueActionProps`](modules.md#uniqueactionprops)\<[`ActionStatus`](modules.md#actionstatus)\>) => `void` ; `template`: (`data`: [`UniqueActionProps`](modules.md#uniqueactionprops)\<[`ActionTemplate`](modules.md#actiontemplate)\>) => `void`  }\> |

#### Returns

`ReactNode`

#### Defined in

node_modules/.pnpm/@types+react@18.2.34/node_modules/@types/react/index.d.ts:395

___

### useActions

▸ **useActions**(`iframeRef`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `iframeRef` | `RefObject`\<``null`` \| `HTMLIFrameElement`\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `configure` | (`data`: [`UniqueActionProps`](modules.md#uniqueactionprops)\<[`ActionConfigure`](modules.md#actionconfigure)\>) => `void` |
| `dialog` | (`data`: [`UniqueActionProps`](modules.md#uniqueactionprops)\<[`ActionDialog`](modules.md#actiondialog)\>) => `void` |
| `draft` | (`data`: [`UniqueActionProps`](modules.md#uniqueactionprops)\<[`ActionDraft`](modules.md#actiondraft)\>) => `void` |
| `exportDiagram` | (`data`: [`UniqueActionProps`](modules.md#uniqueactionprops)\<[`ActionExport`](modules.md#actionexport)\>) => `void` |
| `layout` | (`data`: [`UniqueActionProps`](modules.md#uniqueactionprops)\<[`ActionLayout`](modules.md#actionlayout)\>) => `void` |
| `load` | (`data`: [`UniqueActionProps`](modules.md#uniqueactionprops)\<[`ActionLoad`](modules.md#actionload)\>) => `void` |
| `merge` | (`data`: [`UniqueActionProps`](modules.md#uniqueactionprops)\<[`ActionMerge`](modules.md#actionmerge)\>) => `void` |
| `prompt` | (`data`: [`UniqueActionProps`](modules.md#uniqueactionprops)\<[`ActionPrompt`](modules.md#actionprompt)\>) => `void` |
| `spinner` | (`data`: [`UniqueActionProps`](modules.md#uniqueactionprops)\<[`ActionSpinner`](modules.md#actionspinner)\>) => `void` |
| `status` | (`data`: [`UniqueActionProps`](modules.md#uniqueactionprops)\<[`ActionStatus`](modules.md#actionstatus)\>) => `void` |
| `template` | (`data`: [`UniqueActionProps`](modules.md#uniqueactionprops)\<[`ActionTemplate`](modules.md#actiontemplate)\>) => `void` |

**`Description`**

A hook to send actions to the draw.io editor

#### Defined in

[src/hooks/use-actions.ts:25](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/hooks/use-actions.ts#L25)
