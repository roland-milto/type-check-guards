# isOctal

## Apraksts

Nosaka, vai vērtība ir derīga oktāla literāļa virkne (piem., `0o755`).

### Lietošanas gadījums

Validēt lietotāja ievadi vai konfigurācijas vērtības, kurām jābūt izteiktām kā oktāla literāļa virknei (piemēram, failu
atļauju režīmi kā `0o644`) pirms parsēšanas vai konvertēšanas.

> **Piezīme TypeScript lietotājiem:**
>
> `isOctal` ir tipa sargs (`value is string`). Pēc `true` rezultāta TypeScript sašaurina pārbaudīto mainīgo līdz
`string`.

### Priekšrocības

- Nodrošina stingru tipa sargu: atgriež `true` tikai tad, ja ievade ir virkne, kas atbilst oktāla literāļa formātam.
- Noraida tukšas virknes un virknes ar sākuma/beigu atstarpēm (ASCII vadības rakstzīmes/atstarpe), samazinot nejaušas
  atbilstības.
- Atbalsta izvēles zīmi un nav reģistrjutīgs attiecībā uz prefiksu `0o`/`0O`.
- Nestrikti apstrādā ne-virkņu ievades, atgriežot `false` tā vietā, lai izmestu kļūdu.

## Lietošana

### Sintakse

Funkcija:

- `isOctal(value)`

Parametri:

- `value`: Pārbaudāmā vērtība.

### Lokāls funkcijas imports

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // patiess
console.log(isOctal(b)); // patiess
console.log(isOctal(c)); // aplams
console.log(isOctal(d)); // aplams

if (isOctal(a)) {
  // a šeit ir virkne
  const normalized = a.toLowerCase();
  console.log(normalized);
}
```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.isOctal(value)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>Fails tika izveidots 30 January 2026 at 15:42:02 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>