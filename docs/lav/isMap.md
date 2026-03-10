# isMap

## Apraksts

Pārbauda, vai dotā `value` ir `Map`, atgriežot `true`, ja tā ir, un `false` pretējā gadījumā.

### Lietošanas gadījums

Izmanto `isMap`, kad saņem `unknown` vērtību (piem., no JSON parsēšanas, ārējiem API vai lietotāja ievades) un pirms
`Map` darbību veikšanas nepieciešams pārliecināties, ka tā ir `Map`.

> **Piezīme TypeScript lietotājiem:**
>
> `isMap` ir izpildlaika sargs, kas atgriež `true`, ja vērtība ir `Map`, un `false` pretējā gadījumā; izmanto to, lai
> sašaurinātu `unknown` pirms `Map` API izsaukšanas.

### Priekšrocības

- Nodrošina ātru izpildlaika pārbaudi, vai vērtība ir `Map`.
- Palīdz novērst tipu kļūdas, aizsargājot koda ceļus, kuriem nepieciešamas `Map` metodes, piemēram, `get`, `set` un
  `has`.
- Labi darbojas kā viegls validācijas solis, apstrādājot `unknown` ievades.

## Lietošana

### Sintakse

Funkcija:

- `isMap(value)`

Parametri:

- `value`: Vērtība, kuru pārbaudīt.

### Lokāls funkcijas imports

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.isMap(value)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [isMap](../_analysis/isMap.md)

<br>

---

<small>Fails tika izveidots 31 January 2026 at 16:05:10 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>