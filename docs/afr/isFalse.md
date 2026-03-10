# isFalse

## Beskrywing

`isFalse` kontroleer of 'n gegewe waarde streng gelyk is aan die booleaanse letterlike `false`.

### Gebruikscenario

Valideer onbekende data (bv. uit JSON, navraagparameters of gebruikersinvoer) waar slegs die eksplisiete booleaanse
waarde `false` as 'n geldige vlag behandel moet word, en alles anders verwerp moet word.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `isFalse` wanneer jy slegs die letterlike `false` moet aanvaar en alle ander valsagtige waardes moet verwerp;
> dit gee `true` terug slegs vir `value === false`.

### Voordele

- Verskaf 'n streng kontrole vir die booleaanse letterlike `false` sonder dwangomskakeling.
- Help om `false` te onderskei van ander valsagtige waardes soos `0`, `""`, `null` en `undefined`.
- Verbeter leesbaarheid deur die bedoeling eksplisiet te maak wanneer onbekende inset gevalideer word.

## Gebruik

### Sintaksis

Funksie:

- `isFalse(value)`

Parameters:

- `value`: Die waarde wat nagegaan moet word.

### Plaaslike funksie-invoer

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // invoer is presies vals hier
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.isFalse(value)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>Hierdie lêer is op 31 January 2026 at 16:20:47 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>