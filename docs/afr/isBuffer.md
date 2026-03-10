# isBuffer

## Beskrywing

Kontroleer of ’n waarde ’n Node.js-`Buffer` is en gee `true` of `false` terug.

### Gebruikscenario

Valideer insette tydens looptyd (bv. API-ladings, lêerdata of boodskapbuffers) om te verseker dat ’n waarde ’n `Buffer`
is voordat dit verwerk word, en kry betroubaar `false` wanneer dit buite Node.js uitgevoer word waar `Buffer` moontlik
nie bestaan nie.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `isBuffer` om `unknown`-waardes na `Buffer` te vernou voordat Buffer-spesifieke metodes aangeroep word.

### Voordele

- Bespeur Node.js-`Buffer`-instansies veilig met `Buffer.isBuffer`.
- Gee `false` terug in omgewings waar `Buffer` nie beskikbaar is nie, en vermy sodoende looptydfoute.
- Werk met `unknown`-invoer, wat dit geskik maak vir looptydvalidasie en tipe-vernouing.

## Gebruik

### Sintaksis

Funksie:

- `isBuffer(value)`

Parameters:

- `value`: Die waarde wat getoets moet word.

### Plaaslike funksie-invoer

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // waar
console.log(isBuffer(b)); // vals

if (isBuffer(a)) {
  // a is hier 'n Buffer
  console.log(a.toString("utf8"));
}
```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.isBuffer(value)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>Hierdie lêer is op 31 January 2026 at 16:30:43 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>