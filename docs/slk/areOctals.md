# areOctals

## Popis

`areOctals` určuje, či je poskytnutá hodnota neprázdne pole platných oktálových reťazcov.

### Prípad použitia

Použite `areOctals` pri validácii používateľského vstupu, konfiguračných hodnôt alebo payloadov API, ktoré musia
obsahovať oktálové literály (napr. režimy oprávnení súborov ako `0o755`), a chcete odmietnuť prázdne polia alebo
akékoľvek neplatné položky vrátením `false`.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `areOctals`, aby ste si overili, že máte neprázdne `unknown[]`, kde je každá položka platný oktálový reťazec,
> pred konverziou (napr. cez `Number(...)` alebo vlastné parsovanie).

### Výhody

- Overuje, že hodnota je neprázdne pole, v ktorom je každý prvok oktálový reťazec, pričom vráti `true` iba vtedy, keď
  prejdú všetky položky.
- Zlyhá rýchlo: vráti `false` hneď, ako sa nájde neoktálový prvok.
- Užitočné ako ochrana pred parsovaním alebo konverziou oktálových reťazcov, aby sa predišlo chybám za behu a
  nekonzistentnému spracovaniu vstupu.

## Použitie

### Syntax

Funkcia:

- `areOctals(array)`

Parametre:

- `array`: Hodnota, ktorá sa má skontrolovať.

### Lokálny import funkcie

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // value je neprázdne pole osmičkových reťazcov
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.areOctals(array)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [areOctals](../_analysis/areOctals.md)

<br>

---

<small>Súbor bol vygenerovaný 30 January 2026 at 14:58:10 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>