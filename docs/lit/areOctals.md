# areOctals

## Aprašymas

`areOctals` nustato, ar pateikta reikšmė yra netuščias galiojančių aštuntainių eilučių masyvas.

### Naudojimo atvejis

Naudokite `areOctals` tikrindami naudotojo įvestį, konfigūracijos reikšmes ar API duomenų naudingąją apkrovą, kuriose
turi būti aštuntainiai literalai (pvz., failų teisių režimai kaip `0o755`), ir norite atmesti tuščius masyvus arba bet
kokius neteisingus įrašus grąžindami `false`.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `areOctals`, kad įsitikintumėte, jog turite netuščias `unknown[]`, kur kiekvienas įrašas yra galiojanti
> aštuntainė eilutė, prieš konvertuodami (pvz., per `Number(...)` arba pasirinktiniu analizavimu).

### Privalumai

- Patikrina, ar reikšmė yra netuščias masyvas, kuriame kiekvienas elementas yra aštuntainė eilutė, grąžindamas `true`
  tik tada, kai visi elementai praeina patikrą.
- Greitai nutraukia: grąžina `false` iškart, kai randamas ne aštuntainis elementas.
- Naudinga kaip apsauga prieš analizuojant ar konvertuojant aštuntaines eilutes, kad būtų išvengta vykdymo laiko klaidų
  ir nenuoseklaus įvesties apdorojimo.

## Naudojimas

### Sintaksė

Funkcija:

- `areOctals(array)`

Parametrai:

- `array`: Reikšmė, kurią reikia patikrinti.

### Lokalus funkcijos importas

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // value yra netuščias aštuntainių eilučių masyvas
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.areOctals(array)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [areOctals](../_analysis/areOctals.md)

<br>

---

<small>Failas buvo sugeneruotas 30 January 2026 at 14:57:11 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>