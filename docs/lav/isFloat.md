# isFloat

## Apraksts

`isFloat` nosaka, vai dotā `value` ir galīgs peldošā komata skaitlis (t. i., `number`, kas nav vesels skaitlis).

### Lietošanas gadījums

Validēt lietotāja ievadītu skaitlisku vērtību, kur nepieciešamas daļskaitļu vērtības (piem., cenas, mērījumi, likmes),
un noraidīt veselus skaitļus, `NaN` un bezgalības.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `isFloat`, kad jāpieņem tikai galīgas, ne-veselas skaitliskas ievades; tas noraida veselus skaitļus un
> ne-galīgus skaitļus.

### Priekšrocības

- Atgriež `true` tikai galīgiem, ne-veseliem skaitļiem (izslēdz veselus skaitļus, `NaN`, `Infinity` un `-Infinity`).
- Darbojas ar jebkuru ievades tipu (`unknown`) un droši sašaurina tipu, pārbaudot `typeof value === "number"`.
- Izmanto iebūvētos skaitliskos sargus (`Number.isInteger`, `Number.isFinite`) paredzamai uzvedībai.

## Lietošana

### Sintakse

Funkcija:

- `isFloat(value)`

Parametri:

- `value`: Vērtība, kas jāpārbauda, vai tā ir peldošā komata skaitlis.

### Lokāls funkcijas imports

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // value ir skaitlis izpildlaikā; tas ir galīgs un nav vesels skaitlis
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}
```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.isFloat(value)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>Fails tika izveidots 30 January 2026 at 16:08:31 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>