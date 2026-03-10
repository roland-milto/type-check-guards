# areNumbers

## Apraksts

`areNumbers` pārbauda, vai vērtība ir netukšs masīvs, kurā visi elementi ir skaitļi.

### Lietošanas gadījums

Validēt lietotāja vai API sniegtos datus, lai pārliecinātos, ka tas ir netukšs skaitļu masīvs pirms kopsummu, vidējo
vērtību vai citu skaitlisku agregāciju aprēķināšanas.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `areNumbers`, lai validētu nezināmus masīvus pirms skaitlisku aprēķinu veikšanas; tas atgriež `false`
> tukšiem masīviem un masīviem, kuros ir jebkura vērtība, kas nav skaitlis.

### Priekšrocības

- Atgriež `true` tikai tad, ja ievade ir netukšs masīvs un katrs elements ir skaitlis.
- Novērš kļūdaini pozitīvus rezultātus, noraidot tukšus masīvus un ievades, kas nav masīvi.
- Noder kā pārbaude pirms skaitliskām darbībām (piem., summēšanas, vidējās vērtības aprēķināšanas), lai izvairītos no
  izpildlaika kļūdām.

## Lietošana

### Sintakse

Funkcija:

- `areNumbers(array)`

Parametri:

- `array`: Masīvs, kurā jāpārbauda, vai elementi ir skaitļi.

### Lokāls funkcijas imports

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.areNumbers(array)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>Fails tika izveidots 30 January 2026 at 13:04:57 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>