# areErrors

## Apraksts

Pārbauda, vai masīvs nav tukšs un satur tikai `Error` objektus, atgriežot `true` vai `false`.

### Lietošanas gadījums

Pārbaudīt, vai izpildlaikā saņemts `unknown[]` (piem., apkopotas kļūmes, validācijas rezultāti vai deserializēti dati)
ir netukšs `Error` objektu saraksts pirms iterēšanas, žurnālošanas vai atkārtotas izmešanas.

> **Piezīme TypeScript lietotājiem:**
>
> `areErrors` atgriež `true` tikai aizpildītam masīvam, kurā katrs elements ir `Error`; tas atgriež `false` tukšam
> masīvam vai ja kāds elements nav `Error`.

### Priekšrocības

- Nodrošina, ka katrs elements ir `Error` instances, ļaujot droši apstrādāt kļūdas un veikt žurnālošanu.
- Noraida tukšus masīvus, novēršot nejaušas “nav kļūdu” situācijas, kas tiktu uzskatītas par derīgiem kļūdu sarakstiem.
- Labi darbojas kā izpildlaika sargs, strādājot ar `unknown[]` ievadi (piem., no API vai `catch` blokiem).

## Lietošana

### Sintakse

Funkcija:

- `areErrors(array)`

Parametri:

- `array`: Masīvs, kuru pārbaudīt attiecībā uz `Error` objektiem.

### Lokāls funkcijas imports

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value ir netukšs Error objektu masīvs
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.areErrors(array)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>Fails tika izveidots 6 February 2026 at 12:34:23 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>