# isNullOrUndefined

## Beskrywing

Kontroleer of 'n gegewe waarde `null` of `undefined` is.

### Gebruikscenario

Gebruik `isNullOrUndefined` wanneer jy beide `null` en `undefined` as “geen waarde” moet hanteer, soos om opsionele
insette te valideer, API-payloads te normaliseer, of kodepaaie te bewaak voordat 'n moontlik ontbrekende waarde
gedereferensieer word.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `isNullOrUndefined` om teen ontbrekende waardes te waak voordat eienskappe benader of metodes aangeroep word;
> dit gee slegs `true` terug vir `null` en `undefined`.

### Voordele

- Bied 'n duidelike, herbruikbare wag om `null` en `undefined` op een plek op te spoor.
- Gee 'n eenvoudige boolean (`true`/`false`) terug wat maklik is om in voorwaardes en validerings saam te stel.
- Help om algemene runtime-foute te vermy deur vir ontbrekende waardes te kontroleer voordat eienskappe benader of
  metodes aangeroep word.

## Gebruik

### Sintaksis

Funksie:

- `isNullOrUndefined(value)`

Parameters:

- `value`: Die waarde wat nagegaan moet word vir `null` of `undefined`.

### Plaaslike funksie-invoer

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // hanteer ontbrekende waarde
}

console.log(isNullOrUndefined(b)); // waar
console.log(isNullOrUndefined(c)); // vals

```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.isNullOrUndefined(value)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>Hierdie lêer is op 31 January 2026 at 00:32:56 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>