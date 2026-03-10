# areRegExes

## Apraksts

`areRegExes` pārbauda, vai vērtība ir aizpildīts masīvs, kas satur tikai `RegExp` objektus.

### Lietošanas gadījums

Validēt, ka konfigurācijas opcija (piem., atļauto/aizliegto rakstu saraksts) ir netukšs regulāro izteiksmju masīvs,
pirms to izmantot atbilstības pārbaudei.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `areRegExes`, lai sašaurinātu `unknown` uz `RegExp[]` pirms iterēšanas vai rakstu kombinēšanas.

### Priekšrocības

- Nodrošina, ka vērtība ir netukšs masīvs, kurā katrs elements ir `RegExp` instances.
- Nodrošina vienkāršu būla aizsargpārbaudi (`true`/`false`) lietotāja ievades vai konfigurācijas validēšanai.
- Palīdz novērst izpildlaika kļūdas, kad vēlāk kods pieņem, ka visi elementi atbalsta regulāro izteiksmju darbības.

## Lietošana

### Sintakse

Funkcija:

- `areRegExes(array)`

Parametri:

- `array`: Pārbaudāmā vērtība.

### Lokāls funkcijas imports

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // patterns šeit ir RegExp masīvs
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.areRegExes(array)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>Fails tika izveidots 30 January 2026 at 23:19:39 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>