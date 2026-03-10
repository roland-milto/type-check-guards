# isNumber

## Apraksts

`isNumber` pārbauda, vai vērtība ir galīgs, ne-`NaN` skaitlis.

### Lietošanas gadījums

Validējiet skaitlisku ievadi no neuzticamiem avotiem (formas, vaicājumu parametri, JSON slodzes) pirms aprēķiniem,
saglabāšanas vai diapazona pārbaudēm, nodrošinot, ka tiek pieņemti (`true`) tikai galīgi skaitļi un viss pārējais
atgriež `false`.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `isNumber`, lai validētu `unknown` vērtības pirms aritmētikas; tas noraida `NaN`, `Infinity` un
`-Infinity`.

### Priekšrocības

- Atgriež `true` tikai īstiem JavaScript skaitļiem (tipa pārbaude plus `NaN` un bezgalības noraidīšana).
- Novērš biežākās validācijas kļūdas, kad `NaN`, `Infinity` vai `-Infinity` nejauši tiek pieņemti kā skaitļi.
- Labi darbojas kā izpildlaika sargs nezināmai ievadei (piem., JSON, lietotāja ievade, ārējie API).
- Vienkāršs, ātrs un bez blakusefektiem.

## Lietošana

### Sintakse

Funkcija:

- `isNumber(value)`

Parametri:

- `value`: Vērtība, ko pārbaudīt.

### Lokāls funkcijas imports

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input ir derīgs galīgs skaitlis
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.isNumber(value)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>Fails tika izveidots 30 January 2026 at 13:09:50 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>