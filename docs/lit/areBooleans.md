# areBooleans

## Aprašymas

`areBooleans` patikrina, ar pateiktame netuščame masyve yra tik loginės reikšmės, grąžindamas `true`, jei taip, ir
`false` kitu atveju.

### Naudojimo atvejis

Patikrinkite naudotojo pateiktus ar išorinius duomenis (pvz., JSON užkrovas, užklausos parametrus, konfigūracijos
masyvus), kad įsitikintumėte, jog netuščias sąrašas turi tik logines reikšmes prieš taikant loginę logiką arba
perduodant jį API, kurios tikisi `boolean[]`.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `areBooleans`, kad patikrintumėte `unknown[]` prieš laikydami jį `boolean[]`; ji grąžina `false` tuštiems
> masyvams, todėl aiškiai apdorokite šį atvejį, jei turėtų būti leidžiamas tuščias sąrašas.

### Privalumai

- Grąžina `true` tik tada, kai kiekvienas elementas yra loginė reikšmė ir įvestis yra netuščias masyvas.
- Apsaugo nuo klaidingų teigiamų rezultatų atmesdamas tuščius masyvus (grąžina `false`).
- Puikiai tinka kaip vykdymo laiko apsauga prieš operacijas, skirtas tik loginėms reikšmėms (pvz., `every`, `some`,
  loginės redukcijos).

## Naudojimas

### Sintaksė

Funkcija:

- `areBooleans(array)`

Parametrai:

- `array`: Masyvas, kurį reikia patikrinti, ar jame yra loginiai elementai.

### Lokalus funkcijos importas

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

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.areBooleans(array)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>Failas buvo sugeneruotas 30 January 2026 at 14:41:03 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>