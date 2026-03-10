# isBigInt

## Aprašymas

`isBigInt` patikrina, ar pateikta reikšmė yra `bigint` tipo, grąžindama `true` BigInt primityvams ir `false` kitu
atveju.

### Naudojimo atvejis

Patikrinkite ir susiaurinkite reikšmes, gaunamas iš netipuotų šaltinių (pvz., JSON analizės, naudotojo įvesties,
išorinių API), prieš atlikdami BigInt specifinius skaičiavimus arba saugodami jas laukuose, kurie priima tik BigInt.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `isBigInt`, kad susiaurintumėte `unknown` iki `bigint` prieš atlikdami BigInt aritmetiką (pvz., `+`, `*`),
> kuriai reikalingi BigInt operandai.

### Privalumai

- Pateikia paprastą, patikimą vykdymo laiko patikrą `bigint` primityviajam tipui.
- Padeda susiaurinti `unknown` reikšmes prieš atliekant tik BigInt skirtas operacijas.
- Išvengia klaidingų teigiamų rezultatų: įprasti skaičiai, eilutės ir kiti tipai grąžina `false`.

## Naudojimas

### Sintaksė

Funkcija:

- `isBigInt(value)`

Parametrai:

- `value`: Reikšmė, kurią reikia patikrinti.

### Lokalus funkcijos importas

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // tiesa
console.log(isBigInt(10));  // netiesa
console.log(isBigInt("10")); // netiesa
```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.isBigInt(value)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>Failas buvo sugeneruotas 31 January 2026 at 23:32:31 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>