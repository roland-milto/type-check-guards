# areStrings

## Apraksts

`areStrings` pārbauda, vai masīvs ir netukšs un visi tā elementi ir virknes, atgriežot `true` tikai šajā gadījumā.

### Lietošanas gadījums

Validēt ārējus vai lietotāja iesniegtus datus (piem., vaicājuma parametrus, JSON slodzes, CSV laukus), lai pirms
apstrādes nodrošinātu, ka jums ir netukšs virkņu saraksts.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `areStrings`, lai validētu nezināmus masīvus pirms virkņu loģikas piemērošanas; tukšiem masīviem tā
> atgriež `false`.

### Priekšrocības

- Nodrošina, ka katrs elements ir virkne, un noraida jaukta tipa masīvus, atgriežot `false`.
- Noraida tukšus masīvus, tāpēc `true` norāda tikai uz netukšu virkņu sarakstu.
- Noder kā ātrs izpildlaika sargs pirms virkņu operāciju veikšanas (piem., `trim`, `toLowerCase`).

## Lietošana

### Sintakse

Funkcija:

- `areStrings(value)`

Parametri:

- `value`: Expected type `string[]`.

### Lokāls funkcijas imports

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input izpildlaikā ir netukšs string[]
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.areStrings(value)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>Fails tika izveidots 30 January 2026 at 13:19:05 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>