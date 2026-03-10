# isInteger

## Beskrywing

Bepaal of ’n gegewe `value` ’n veilige heelgetalgetal is.

### Gebruikscenario

Valideer onbetroubare invoer (bv. query params, JSON payloads, omgewingsveranderlikes) voordat jy dit as ’n heelgetal
gebruik vir skikkingindekse, paginering, tellers of databasis-ID’s.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `isInteger` om onbekende invoer te valideer voordat jy dit as ’n numeriese heelgetal hanteer; dit gee `true`
> terug slegs vir waardes waar `typeof value === "number"` en `Number.isSafeInteger(value)`.

### Voordele

- Kontroleer beide tipe- en numeriese veiligheid: gee `true` terug slegs wanneer die invoer ’n getal en ’n veilige
  heelgetal is.
- Voorkom algemene slaggate met numeriese dwang: stringe soos "5" gee korrek `false` terug.
- Verwerp nie-heelgetalle en onveilige heelgetalle, wat dit geskik maak vir ID’s, tellers en skikkingindeksering.

## Gebruik

### Sintaksis

Funksie:

- `isInteger(value)`

Parameters:

- `value`: Die waarde om te kontroleer vir heelgetalstatus.

### Plaaslike funksie-invoer

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // waar
const b = isInteger(-100);   // waar
const c = isInteger("5");    // vals
const d = isInteger(5.5);    // vals
const e = isInteger(null);    // vals

```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.isInteger(value)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>Hierdie lêer is op 31 January 2026 at 00:49:02 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>