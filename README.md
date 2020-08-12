# hodldex.io-i18n

This repo contains i18n JSON files that will be used by production built of https://www.hodldex.io/

## To contribute

### Add new language JSON files

- follow standard here: https://www.w3.org/International/O-charset-lang.html, for example, to add translatation for Dutch, you need to create a new file as `nl.json`.

### Start translate

- check `en.json`, copy the content inside it, and start to translate, key by key
- leave the key as it was, only change the content.
- variables are inside doupble {{curly braces}}, leave variables as it was

### Example

To translate english to spanish, first copy `en.json` to `es.json`, start to update content of es.json:

from

en.json
```json
 "eventList": {
    "title": {
      "my": "My Events ({{number}} events)",
      "global": "Global Events ({{number}} events)"
    },
    ...
}
```

to spanish version

es.json
```json
 "eventList": {
    "title": {
      "my": "Mis Eventos ({{number}} eventos)",
      "global": "Eventos Globales ({{number}} eventos)"
    },
    ...
}
```

- don't change `eventList`, `title`, `my` and `global`, because they are keys.
- don't change {{number}}, because number is inside `{{}}`, it is variables

## Resources

i18n: documentation: https://www.i18next.com/
