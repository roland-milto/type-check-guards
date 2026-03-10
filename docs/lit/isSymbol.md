# isSymbol

## Aprašymas

`isSymbol` nustato, ar pateikta reikšmė yra tipo `symbol`, grąžindamas `true` simboliams ir `false` kitu atveju.

### Naudojimo atvejis

Patikrinkite, kad `unknown` reikšmė yra `symbol`, prieš naudodami ją kaip unikalų identifikatorių, registro raktą arba
apskaičiuojamą savybės raktą objektuose ir žemėlapiuose.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `isSymbol`, kad susiaurintumėte `unknown` iki `symbol` prieš kviesdami su simboliais susijusias funkcijas
> arba naudodami jį kaip apskaičiuojamo savybės rakto reikšmę.

### Privalumai

- Pateikia paprastą ir patikimą vykdymo laiko patikrą JavaScript primityviajam tipui `symbol`.
- Padeda susiaurinti `unknown` reikšmes prieš naudojant su simboliais susijusias API arba saugant jas kaip raktus.
- Išvengia klaidingų teigiamų rezultatų naudodamas `typeof`, kuris yra kanoninis būdas aptikti `symbol` reikšmes.

## Naudojimas

### Sintaksė

Funkcija:

- `isSymbol(value)`

Parametrai:

- `value`: Tikrinama reikšmė.

### Lokalus funkcijos importas

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // įvestis čia yra simbolis
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.isSymbol(value)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>Failas buvo sugeneruotas 30 January 2026 at 14:27:40 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>