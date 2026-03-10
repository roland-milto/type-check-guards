# isPlainObject

## Beskrywing

Kontroleer of 'n gegewe `value` 'n gewone objek is en gee `true` terug as dit is, anders `false`.

### Gebruikscenario

Valideer dat 'n `unknown`-invoer (bv. geparste JSON, eksterne data, of funksie-argumente) 'n gewone objek is voordat
sleutels gelees word of dit na 'n getipeerde konfigurasie-objek gekarteer word.

> **Wenk vir TypeScript-gebruikers:**
>
> `isPlainObject` is nuttig om `unknown` te vernou voordat dit as 'n rekord-agtige objek hanteer word; dit gee slegs
`true` terug vir waardes waarvan die interne etiket `[object Object]` is.

### Voordele

- Bied 'n eenvoudige, betroubare kontrole om te bepaal of 'n waarde 'n gewone objek is (d.w.s. `Object` / `{}`), en gee
  `true` of `false` terug.
- Help om gewone objekte te onderskei van skikkings, funksies, `null` en ander nie-gewone objek-tipes.
- Nuttig as 'n tipe-bewaker in TypeScript om `unknown`-waardes te vernou voordat objek-eienskappe benader word.

## Gebruik

### Sintaksis

Funksie:

- `isPlainObject(value)`

Parameters:

- `value`: Die waarde om te toets vir gewone-objek-status.

### Plaaslike funksie-invoer

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // invoer is hier 'n gewone objek
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // waar
console.log(isPlainObject([])); // vals
console.log(isPlainObject(null)); // vals

```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.isPlainObject(value)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>Hierdie lêer is op 6 February 2026 at 12:16:20 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>