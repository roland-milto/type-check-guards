# areUndefined

## Beskrywing

`areUndefined` kontroleer of elke element in ’n verskafde skikking `undefined` is.

### Gebruikscenario

Valideer dat ’n lys van opsionele resultate geen werklike waardes bevat nie (slegs `undefined`), bv. ná die kartering
van opsoekaksies waar ontbrekende inskrywings as `undefined` voorgestel word, en jy wil bevestig dat alle opsoekaksies
misluk het.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `areUndefined` wanneer jy moet bevestig dat ’n `unknown[]` slegs `undefined`-waardes bevat; dit gee `false`
> terug vir leë skikkings en nie-skikking/ongeldige insette weens die interne `isFilledArray`-kontrole.

### Voordele

- Gee `false` terug vir nie-skikkings en leë skikkings deur ’n gevulde skikking via `isFilledArray` te vereis.
- Verseker dat elke element `undefined` is, nie net sommige nie, wat die bedoeling eksplisiet maak.
- Nuttig as ’n wag-styl predikaat wanneer onbekende insetversamelings gevalideer word.

## Gebruik

### Sintaksis

Funksie:

- `areUndefined(array)`

Parameters:

- `array`: Die skikking om na te gaan vir `undefined`-elemente.

### Plaaslike funksie-invoer

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // waar
const r2 = areUndefined(b); // vals
const r3 = areUndefined(c); // vals

// Nota: gee vals terug vir leë skikkings
const r4 = areUndefined([]); // vals
```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.areUndefined(array)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>Hierdie lêer is op 30 January 2026 at 13:54:43 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>