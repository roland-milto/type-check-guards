# isPrimitive

## Aprašymas

`isPrimitive` nustato, ar pateikta reikšmė yra primityvas (`null`, `undefined`, `boolean`, `number`, `string`, `bigint`,
`symbol`).

### Naudojimo atvejis

Vykdymo metu tikrinkite įvestis (pvz., API užkrovos laukus, konfigūracijos reikšmes ar naudotojo pateiktus duomenis),
kad prieš serializuojant, registruojant ar taikant tik primityvams skirtas operacijas būtų užtikrinta, jog reikšmė yra
primityvas.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `isPrimitive` kaip apsaugą `unknown` įvestims prieš laikydami jas objektais ar funkcijomis; ji grąžina
`true` primityvams ir `false` objektams bei funkcijoms.

### Privalumai

- Greitas, be paskyrimų atliekamas patikrinimas, ar reikšmė yra JavaScript primityvas.
- Teisingai laiko `null` primityvu (nors `typeof null` yra `"object"`).
- Padeda susiaurinti `unknown` reikšmes prieš atliekant tik objektams skirtas operacijas.

## Naudojimas

### Sintaksė

Funkcija:

- `isPrimitive(value)`

Parametrai:

- `value`: Reikšmė, kurią reikia patikrinti, ar ji yra primityvaus tipo.

### Lokalus funkcijos importas

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.isPrimitive(value)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>Failas buvo sugeneruotas 30 January 2026 at 23:56:51 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>