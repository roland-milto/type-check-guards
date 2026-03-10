# areBooleans

## Apraksts

`areBooleans` pārbauda, vai dotais netukšs masīvs satur tikai būla vērtības, atgriežot `true`, ja tā ir, un `false`
pretējā gadījumā.

### Lietošanas gadījums

Validēt lietotāja ievadītus vai ārējus datus (piem., JSON slodzes, vaicājumu parametrus, konfigurācijas masīvus), lai
nodrošinātu, ka netukšs saraksts satur tikai būla vērtības, pirms piemērot būla loģiku vai nodot to API, kas sagaida
`boolean[]`.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `areBooleans`, lai validētu `unknown[]` pirms to uzskatāt par `boolean[]`; tā atgriež `false` tukšiem
> masīviem, tāpēc šo gadījumu apstrādājiet atsevišķi, ja būtu jāatļauj tukšs saraksts.

### Priekšrocības

- Atgriež `true` tikai tad, ja katrs elements ir būla vērtība un ievade ir netukšs masīvs.
- Novērš kļūdaini pozitīvus rezultātus, noraidot tukšus masīvus (atgriež `false`).
- Labi darbojas kā izpildlaika sargs pirms operācijām, kas paredzētas tikai būla vērtībām (piem., `every`, `some`,
  loģiskās reducēšanas).

## Lietošana

### Sintakse

Funkcija:

- `areBooleans(array)`

Parametri:

- `array`: Masīvs, kurā jāpārbauda būla elementi.

### Lokāls funkcijas imports

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.areBooleans(array)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>Fails tika izveidots 30 January 2026 at 14:41:04 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>