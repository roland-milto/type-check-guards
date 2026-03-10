# isString

## Apraksts

`isString` nosaka, vai dotā vērtība ir virkne.

### Lietošanas gadījums

Validējiet lietotāja ievadi, API slodzes laukus vai konfigurācijas vērtības izpildlaikā, lai pārliecinātos, ka vērtība
ir virkne, pirms piemērojat virkņu darbības (piem., apgriešanu, sadalīšanu, reģistra maiņu).

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `isString`, lai validētu `unknown` vai vāji tipizētas vērtības pirms virkņu metožu izsaukšanas; tā atgriež
`true` tikai tad, ja `typeof value === "string"`.

### Priekšrocības

- Vienkārša un ātra pārbaude, izmantojot `typeof`.
- Atgriež paredzamu loģisko rezultātu: `true` virknēm, citādi `false`.
- Darbojas gan tukšām, gan netukšām virknēm.
- Noder kā viegls izpildlaika sargs pirms virknei specifisku darbību veikšanas.

## Lietošana

### Sintakse

Funkcija:

- `isString(value)`

Parametri:

- `value`: Vērtība, kas jāpārbauda, vai tā ir virknes tips.

### Lokāls funkcijas imports

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // ievade šeit ir virkne
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.isString(value)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [isString](../_analysis/isString.md)

<br>

---

<small>Fails tika izveidots 30 January 2026 at 13:14:43 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>