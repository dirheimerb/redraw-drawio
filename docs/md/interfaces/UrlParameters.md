[redraw-drawio](../README.md) / [Exports](../modules.md) / UrlParameters

# Interface: UrlParameters

## Table of contents

### Properties

- [keepmodified](UrlParameters.md#keepmodified)
- [libraries](UrlParameters.md#libraries)
- [modified](UrlParameters.md#modified)
- [noExitBtn](UrlParameters.md#noexitbtn)
- [noSaveBtn](UrlParameters.md#nosavebtn)
- [saveAndExit](UrlParameters.md#saveandexit)
- [spin](UrlParameters.md#spin)
- [ui](UrlParameters.md#ui)

## Properties

### keepmodified

• `Optional` **keepmodified**: `boolean`

If modified specifies a resource key, this is used to maintain the modified state after Save is selected.

**`Default`**

```ts
false
```

#### Defined in

[src/types/index.ts:74](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L74)

___

### libraries

• `Optional` **libraries**: `boolean`

Specifies whether libraries should be enabled in embed mode.

**`Default`**

```ts
false
```

#### Defined in

[src/types/index.ts:80](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L80)

___

### modified

• `Optional` **modified**: `boolean`

Disables the update of the modified state in embed mode after Save is selected and enables the update of the status message after changes are made. If 0 is used, the status bar is cleared after the changes. Otherwise, the value of this is used as the resource key.

**`Default`**

```ts
true
```

#### Defined in

[src/types/index.ts:68](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L68)

___

### noExitBtn

• `Optional` **noExitBtn**: `boolean`

Hides the Exit button. Instead of using this URL parameter, you can specify this setting in the load message.

**`Default`**

```ts
false
```

#### Defined in

[src/types/index.ts:98](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L98)

___

### noSaveBtn

• `Optional` **noSaveBtn**: `boolean`

Displays a Save and Exit button instead of a Save button. Instead of using this URL parameter, you can specify this setting in the load message. If this is used, then the saveAndExit parameter is ignored.

**`Default`**

```ts
false
```

#### Defined in

[src/types/index.ts:86](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L86)

___

### saveAndExit

• `Optional` **saveAndExit**: `boolean`

Displays an additional Save and Exit button. Instead of using this URL parameter, you can specify this setting in the load message. If noSaveBtn=1 is used, this can be disabled with saveAndExit=0.

**`Default`**

```ts
false
```

#### Defined in

[src/types/index.ts:92](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L92)

___

### spin

• `Optional` **spin**: `boolean`

Shows a Loading… spinner while waiting for the diagram data to load in embed mode.

**`Default`**

```ts
false
```

#### Defined in

[src/types/index.ts:62](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L62)

___

### ui

• `Optional` **ui**: ``"min"`` \| ``"atlas"`` \| ``"kennedy"`` \| ``"dark"``

Theme of the editor

#### Defined in

[src/types/index.ts:56](https://github.com/dirheimerb/redraw-drawio/blob/3ef2222/src/types/index.ts#L56)
