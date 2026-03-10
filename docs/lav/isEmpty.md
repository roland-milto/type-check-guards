# isEmpty

## Apraksts

Nosaka, vai dotā vērtība ir tukša, atgriežot `true` vērtībām `null`, `undefined`, tukšām/tikai atstarpju virknēm,
tukšiem masīviem, tukšiem `Map`/`Set` vai objektiem bez pašu uzskaitāmām īpašībām.

### Lietošanas gadījums

Izmantojiet `isEmpty`, lai validētu ievades datus un noteiktu trūkstošas/tukšas vērtības dažādos datu tipos (piem.,
formas laukos, API slodzēs, konfigurācijas objektos), kur `null`, `undefined`, atstarpju virknes, tukšas kolekcijas un
objekti bez īpašībām būtu jāuzskata par tukšiem.

> **Piezīme TypeScript lietotājiem:**
>
> `isEmpty` ir utilīta, kas atgriež boole vērtību (nevis TypeScript tipa predikāts), tāpēc tā pati par sevi nesašaurina
> tipus; izmantojiet to validācijai/zarošanai, nevis kompilēšanas laika tipa sašaurināšanai.

### Priekšrocības

- Tukšuma pārbaudēs uzskata `null` un `undefined` par `true`.
- Par tukšām uzskata tikai no atstarpēm sastāvošas virknes, pirms garuma pārbaudes tās apgriežot (trim).
- Atbalsta izplatītus konteineru tipus (masīvus, `Map`, `Set`) un vienkāršus objektus bez pašu uzskaitāmām īpašībām.
- Izvairās skaitīt mantotās īpašības, izmantojot `hasOwnProperty` pārbaudes.
- Atgriež vienkāršu boole vērtību (`true`/`false`), kas piemērota sargiem un validācijai.

## Lietošana

### Sintakse

Funkcija:

- `isEmpty(value)`

Parametri:

- `value`: Vērtība, kurai jāpārbauda tukšums.

### Lokāls funkcijas imports

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.isEmpty(value)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>Fails tika izveidots 6 February 2026 at 16:19:24 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>