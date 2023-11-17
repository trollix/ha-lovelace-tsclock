# Simple Clock

A simple clock card for Home Assistant

![Simple Clock](https://img.shields.io/github/v/release/trollix/ha-tsclock-card)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

[![hacs_badge](https://img.shields.io/badge/HACS-Default-orange.svg?style=flat)](https://github.com/custom-components/hacs)

![Image of Simple Clock Card](https://github.com/trollix/ha-tsclock-card/blob/main/img01-fr.png?raw=true)

## Options

| Name              | Type    | Requirement  | Description                                 | Default             |
| ----------------- | ------- | ------------ | ------------------------------------------- | ------------------- |
| type              | string  | **Required** | `custom:ha-tsclock`                         |                     |
| locale            | string  | **Optional** | Locale to use for formatting. For example `fr` | locale set in your home assistant profile otherwise your browser locale |
| timeZone          | string  | **Optional** | Time zone to use. For example `Europe/Paris`   | time zone set in your home assistant profile otherwise your browser time zone |
| firstLineFormat or timeFormat  | object or string | **Optional** | Format of first line         | { hour: '2-digit', minute: '2-digit' } |
| secondLineFormat or dateFormat | object or string | **Optional** | Format of second line        | { weekday: 'short', day: '2-digit', month: 'short' } |

If `firstLineFormat` respectively `secondLineFormat` is a string, it can be every format, which is valid in Luxon.
See: [https://moment.github.io/luxon/#/formatting?id=toformat](https://moment.github.io/luxon/#/formatting?id=toformat)

If `firstLineFormat` respectively `secondLineFormat` is an object, it can be every valid object, which can be passed as options to the Luxon-function `toLocalString()`.
See: [https://moment.github.io/luxon/#/formatting?id=tolocalestring-strings-for-humans](https://moment.github.io/luxon/#/formatting?id=tolocalestring-strings-for-humans)

If `timeFormat` is specified, it will override `firstLineFormat` and `dateFormat` will override `secondLineFormat`.

## Example 1

```yaml

type: 'custom:tsclock-card'
dateFormat:
  weekday: 'long'
  day: '2-digit'
  month: 'short'
timeFormat:
  hour: '2-digit'
  minute: '2-digit'
```

## Example 2 - with tokens

See: [https://moment.github.io/luxon/#/formatting?id=table-of-tokens](https://moment.github.io/luxon/#/formatting?id=table-of-tokens)

```yaml

type: custom:tsclock-card
dateFormat: cccc dd LLLL
timeFormat: HH:mm
capitalize: true

```

[![releases-shield](https://img.shields.io/github/release-date/trollix/ha-tsclock-card)](https://img.shields.io/github/release-date/trollix/ha-tsclock-card)
[![License-schield](https://img.shields.io/github/license/trollix/ha-tsclock-card)](https://img.shields.io/github/license/trollix/ha-tsclock-card)
