# isOneOfType

## Aprašymas

`isOneOfType` nustato, ar pateikta `value` atitinka bent vieną iš pateiktų tipo eilučių, grąžindama `true`, jei randamas
bet koks atitikimas, ir `false` kitu atveju.

### Naudojimo atvejis

Patikrinkite silpnai tipizuotus arba išorinius duomenis (pvz., išanalizuotą JSON, užklausos parametrus), leisdami kelis
priimtinus vykdymo laiko tipus (pvz., `number` arba `string`) prieš tęsdami tolesnę logiką.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `isOneOfType`, kai norite vykdymo laiko patikros, ar reikšmė atitinka bet kurį iš kelių leidžiamų tipų; ji
> grąžina `true`, jei atitinka bent vienas tipas, kitu atveju `false`.

### Privalumai

- Patikrina reikšmę pagal kelis leidžiamus tipus vienu iškvietimu, grąžindama `true` ties pirmuoju atitikimu.
- Veikia su `unknown` įvestimis, todėl naudinga vykdymo laiko ribose (pvz., išoriniai duomenys, naudotojo įvestis).
- Pateikia paprastą loginį rezultatą (`true`/`false`), kuris gerai dera su sąlyginėmis konstrukcijomis ir ankstyvais
  grąžinimais.

## Naudojimas

### Sintaksė

Funkcija:

- `isOneOfType(value, types)`

Parametrai:

- `value`: Reikšmė, kuri turi būti patikrinta pagal nurodytus tipus.
- `types`: Tipo eilučių masyvas, atstovaujantis galimus reikšmės tipus.

### Lokalus funkcijos importas

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // įvestis vykdymo metu yra objektas
}

console.log(isOneOfType(3, ["number", "string"])); // tiesa
console.log(isOneOfType("hello", ["number", "boolean"])); // netiesa

```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.isOneOfType(value, types)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>Failas buvo sugeneruotas 6 February 2026 at 13:53:02 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>