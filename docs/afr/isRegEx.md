# isRegEx

## Beskrywing

Bepaal of 'n verskafde waarde 'n `RegExp`-instansie is.

### Gebruikscenario

Valideer gebruiker-verskafte of dinamiese waardes (bv. konfigurasie, API-nuttige ladings, inprop-insette) voordat jy dit
as 'n gereelde uitdrukking hanteer.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `isRegEx` om `unknown` (of unie-)waardes te vernou voordat jy RegExp-spesifieke eienskappe of metodes gebruik;
> dit gee slegs `true` terug vir waardes wat instansies van `RegExp` is.

### Voordele

- Verskaf 'n eenvoudige looptyd-tipewag om te kontroleer of 'n waarde 'n `RegExp` is.
- Help om foute te voorkom wanneer kode 'n gereelde uitdrukking verwag (bv. voordat `test`, `exec` geroep word, of
  `source` gelees word).
- Werk met beide regex-letterlikes en instansies wat via `new RegExp(...)` geskep is.
- Gee 'n duidelike booleaanse resultaat (`true`/`false`) terug sonder om vir nie-regex-insette 'n uitsondering te gooi.

## Gebruik

### Sintaksis

Funksie:

- `isRegEx(value)`

Parameters:

- `value`: Die waarde wat nagegaan moet word.

### Plaaslike funksie-invoer

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // invoer is hier 'n RegExp
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.isRegEx(value)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>Hierdie lêer is op 30 January 2026 at 23:28:29 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>