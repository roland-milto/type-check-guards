# isSet

## Apraksts

Nosaka, vai dotā vērtība ir `Set`.

### Lietošanas gadījums

Validēt ievades datus no ārējiem avotiem (piem., JSON parsēšanas, lietotāja ievades vai trešo pušu API), lai
pārliecinātos, ka vērtība ir `Set`, pirms veikt `Set` darbības.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `isSet`, lai sašaurinātu `unknown` vērtības pirms `Set` specifisku API izsaukšanas, piemēram, `.add`,
`.has` vai `.size`.

### Priekšrocības

- Nodrošina vienkāršu izpildlaika pārbaudi, lai apstiprinātu, vai vērtība ir `Set`.
- Palīdz novērst tipu kļūdas, ļaujot agrīni atzaroties, ja vērtība nav `Set`.
- Darbojas ar jebkuru `Set` saturu (tukšu vai aizpildītu) un konsekventi atgriež `true`/`false`.

## Lietošana

### Sintakse

Funkcija:

- `isSet(value)`

Parametri:

- `value`: Vērtība, ko pārbaudīt.

### Lokāls funkcijas imports

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a izpildlaikā ir Set
  console.log(a.size);
}

console.log(isSet(b)); // aplams
```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.isSet(value)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [isSet](../_analysis/isSet.md)

<br>

---

<small>Fails tika izveidots 30 January 2026 at 23:10:17 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>