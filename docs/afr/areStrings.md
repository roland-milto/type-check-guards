# areStrings

## Beskrywing

`areStrings` kontroleer of 'n skikking nie-leeg is en al sy elemente strings is, en gee slegs in daardie geval `true`
terug.

### Gebruikscenario

Valideer eksterne of gebruiker-verskafte data (bv. query params, JSON-ladings, CSV-velde) om te verseker dat jy 'n
nie-leë lys van strings het voordat dit verwerk word.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `areStrings` om onbekende skikkings te valideer voordat string-alleen logika toegepas word; dit gee `false`
> terug vir leë skikkings.

### Voordele

- Verseker dat elke element 'n string is en verwerp gemengde-tipe skikkings deur `false` terug te gee.
- Verwerp leë skikkings, dus dui `true` slegs op 'n nie-leë lys van strings.
- Nuttig as 'n vinnige runtime-beskerming voordat string-alleen bewerkings uitgevoer word (bv. `trim`, `toLowerCase`).

## Gebruik

### Sintaksis

Funksie:

- `areStrings(value)`

Parameters:

- `value`: Expected type `string[]`.

### Plaaslike funksie-invoer

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // invoer is 'n nie-leë string[] tydens uitvoering
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.areStrings(value)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>Hierdie lêer is op 30 January 2026 at 13:17:08 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>