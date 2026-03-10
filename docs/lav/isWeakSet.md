# isWeakSet

## Apraksts

Nosaka, vai dotā `value` ir objektu `WeakSet`.

### Lietošanas gadījums

Izmantojiet `isWeakSet`, pieņemot netipizētu ievadi (piem., no ārējiem API, dinamiskas konfigurācijas vai `unknown`
vērtībām), un jums ir jāpārbauda, vai tā ir `WeakSet`, pirms izmantot `WeakSet` specifiskas darbības.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `isWeakSet`, lai izpildlaikā sašaurinātu `unknown` vērtību līdz `WeakSet<object>`; ņemiet vērā, ka
`WeakSet` var saturēt tikai objektu atsauces.

### Priekšrocības

- Nodrošina vienkāršu izpildlaika pārbaudi, vai vērtība ir `WeakSet`.
- Palīdz novērst tipu kļūdas, nodrošinot, ka par `WeakSet` tiek uzskatīti tikai `WeakSet` eksemplāri.
- Darbojas ar jebkuru `unknown` ievadi un atgriež skaidru būla rezultātu (`true`/`false`).

## Lietošana

### Sintakse

Funkcija:

- `isWeakSet(value)`

Parametri:

- `value`: Pārbaudāmā vērtība.

### Lokāls funkcijas imports

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // true
console.log(isWeakSet(b)); // false

if (isWeakSet(a)) {
  // a ir WeakSet izpildlaikā
}
```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.isWeakSet(value)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>Fails tika izveidots 30 January 2026 at 14:18:00 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>