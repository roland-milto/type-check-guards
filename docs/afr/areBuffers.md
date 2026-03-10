# areBuffers

## Beskrywing

`areBuffers` kontroleer of die verskafde waarde 'n nie-leë, gevulde skikking is waar elke element 'n `Buffer` is, en gee
`true` terug indien wel en `false` andersins.

### Gebruikscenario

Valideer inkomende stuk-skikkings (bv. vanaf strome, lêeroplaaie, of netwerkpakkette) om te verseker dat alle dele
`Buffer`-instansies is voordat hulle saamgevoeg, gedekodeer, of aan kriptografiese of binêre-verwerkingsfunksies
deurgegee word.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `areBuffers` om `unknown[]` te valideer voordat Buffer-spesifieke API's soos `Buffer.concat` aangeroep word,
> en verseker dat die funksie slegs `true` teruggee wanneer elke element 'n `Buffer` is.

### Voordele

- Verseker dat elke element in die invoer 'n Node.js `Buffer`-instansie is, en gee slegs `true` terug wanneer die hele
  skikking ooreenstem.
- Wys ongeldige insette vroeg af deur 'n nie-leë, gevulde skikking te vereis; gee `false` terug vir leë skikkings of
  nie-skikkings.
- Nuttig as 'n wag voor buffer-slegs bewerkings (bv. samevoeging, hashing, binêre protokolle).

## Gebruik

### Sintaksis

Funksie:

- `areBuffers(array)`

Parameters:

- `array`: Die skikking wat nagegaan moet word vir buffer-instansies.

### Plaaslike funksie-invoer

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.areBuffers(array)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>Hierdie lêer is op 31 January 2026 at 16:24:10 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>