# isArray

## Apraksts

`isArray` pārbauda, vai dotā vērtība ir masīvs, un atgriež `true`, ja tā ir, pretējā gadījumā `false`.

### Lietošanas gadījums

Validēt nezināmus datus (piem., parsētu JSON vai API atbildes), lai pārliecinātos, ka vērtība ir masīvs pirms
iterēšanas, indeksēšanas vai piekļuves `.length`.

> **Piezīme TypeScript lietotājiem:**
>
> Izmanto `isArray`, kad nepieciešama masīvu pārbaude izpildlaikā; tā atgriež būla vērtību un ir droši izsaucama ar
`unknown` vērtībām.

### Priekšrocības

- Izmanto iebūvēto `Array.isArray`, lai uzticami noteiktu masīvus dažādās izpildes vidēs (piem., iframe).
- Atgriež vienkāršu būla rezultātu (`true`/`false`), kas piemērots sargiem un zarošanas loģikai.
- Darbojas ar jebkuru ievades tipu, jo parametrs ir `unknown`.

## Lietošana

### Sintakse

Funkcija:

- `isArray(value)`

Parametri:

- `value`: Pārbaudāmā vērtība.

### Lokāls funkcijas imports

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // ievade izpildlaikā ir masīvs
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.isArray(value)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [isArray](../_analysis/isArray.md)

<br>

---

<small>Fails tika izveidots 6 February 2026 at 11:31:06 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>