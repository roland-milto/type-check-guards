# isOfType

## Aprašymas

Nustato, ar pateikta `value` atitinka nurodytą tipo eilutę, naudodamas `typeof` primityviesiems tipams ir atsarginį
metodą sudėtingiems tipams.

### Naudojimo atvejis

Patikrinkite ir susiaurinkite `unknown` įvestis (pvz., API atsakymus, naudotojo įvestį, išanalizuotą JSON),
patikrindami, ar reikšmė yra tikėtino tipo eilutės, prieš atlikdami konkrečiam tipui būdingas operacijas.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `isOfType` šakojimui pagal vykdymo laiko tipus dirbant su `unknown` reikšmėmis; ji grąžina `true`/`false` ir
`null` bei `undefined` apdoroja aiškiai.

### Privalumai

- Tikrina primityviuosius tipus naudodamas tiesioginį `typeof`, kad būtų greita ir aišku.
- Teisingai apdoroja `null` ir `undefined`, kurių vien `typeof` negali atskirti taip, kaip numatyta.
- Palaiko sudėtingas arba pasirinktines tipo eilutes, naudodamas atsarginį palyginimą per `getTypeOf`.
- Grąžina paprastą loginį rezultatą (`true`/`false`), tinkamą apsaugoms (guards) ir šakojimui.

## Naudojimas

### Sintaksė

Funkcija:

- `isOfType(value, type)`

Parametrai:

- `value`: Reikšmė, kurią reikia patikrinti pagal `type`.
- `type`: Tipo eilutės (string) atvaizdavimas, su kuriuo reikia palyginti.

### Lokalus funkcijos importas

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // input čia yra skaičius
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // input čia yra eilutė
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.isOfType(value, type)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>Failas buvo sugeneruotas 30 January 2026 at 17:04:09 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>