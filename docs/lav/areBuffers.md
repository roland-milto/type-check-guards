# areBuffers

## Apraksts

`areBuffers` pārbauda, vai sniegtā vērtība ir ne-tukšs, aizpildīts masīvs, kurā katrs elements ir `Buffer`, atgriežot
`true`, ja tā ir, un `false` pretējā gadījumā.

### Lietošanas gadījums

Validēt ienākošos gabalu masīvus (piem., no straumēm, failu augšupielādēm vai tīkla paketēm), lai nodrošinātu, ka visas
daļas ir `Buffer` instances pirms konkatenēšanas, dekodēšanas vai nodošanas kriptogrāfiskām vai binārās apstrādes
funkcijām.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `areBuffers`, lai validētu `unknown[]` pirms `Buffer` specifisku API izsaukšanas, piemēram,
`Buffer.concat`, nodrošinot, ka funkcija atgriež `true` tikai tad, ja katrs elements ir `Buffer`.

### Priekšrocības

- Nodrošina, ka katrs ievades elements ir Node.js `Buffer` instances, atgriežot `true` tikai tad, ja atbilst viss
  masīvs.
- Agrīni noraida nederīgas ievades, pieprasot ne-tukšu, aizpildītu masīvu; atgriež `false` tukšiem masīviem vai
  vērtībām, kas nav masīvi.
- Noder kā sargs pirms tikai buferiem paredzētu darbību veikšanas (piem., konkatenācijas, hešošanas, binārajiem
  protokoliem).

## Lietošana

### Sintakse

Funkcija:

- `areBuffers(array)`

Parametri:

- `array`: Masīvs, kas jāpārbauda attiecībā uz buferu instancēm.

### Lokāls funkcijas imports

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.areBuffers(array)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>Fails tika izveidots 31 January 2026 at 16:26:04 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>