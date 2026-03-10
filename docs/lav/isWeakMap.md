# isWeakMap

## Apraksts

Nosaka, vai dotā `value` ir `WeakMap` instances.

### Lietošanas gadījums

Izmantojiet `isWeakMap`, kad pieņemat `unknown` vērtību (piem., no publiska API, spraudņu sistēmas vai dinamiskas
konfigurācijas) un pirms `WeakMap` specifiskas uzvedības izmantošanas nepieciešams pārbaudīt, ka tā ir `WeakMap`.

> **Piezīme TypeScript lietotājiem:**
>
> `isWeakMap` veic `instanceof WeakMap` pārbaudi; tas ir izpildlaika sargs, kas atgriež `true` tikai īstām `WeakMap`
> instancēm.

### Priekšrocības

- Vienkārša izpildlaika pārbaude, vai vērtība ir `WeakMap`.
- Palīdz novērst API nepareizu izmantošanu, kuriem nepieciešams `WeakMap`, atgriežot `true`/`false` nevis izmetot kļūdu.
- Darbojas ar `unknown` ievadēm, padarot to ērtu moduļu robežās (piem., parsēšana, ārējie dati vai netipizēts kods).

## Lietošana

### Sintakse

Funkcija:

- `isWeakMap(value)`

Parametri:

- `value`: Vērtība, ko pārbaudīt.

### Lokāls funkcijas imports

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a izpildlaikā ir WeakMap
}

console.log(isWeakMap(a)); // true
console.log(isWeakMap(b)); // false

```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.isWeakMap(value)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>Fails tika izveidots 30 January 2026 at 13:25:47 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>