# isPrimitive

## Popis

`isPrimitive` určuje, či je daná hodnota primitív (`null`, `undefined`, `boolean`, `number`, `string`, `bigint`,
`symbol`).

### Prípad použitia

Overujte vstupy za behu (napr. polia payloadu API, konfiguračné hodnoty alebo údaje poskytnuté používateľom), aby ste sa
uistili, že hodnota je primitív pred serializáciou, logovaním alebo použitím operácií určených len pre primitívy.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `isPrimitive` na ošetrenie vstupov typu `unknown` pred tým, než s nimi budete narábať ako s objektmi alebo
> funkciami; vracia `true` pre primitívy a `false` pre objekty a funkcie.

### Výhody

- Rýchla kontrola bez alokácií, či je hodnota primitívom v JavaScripte.
- Správne považuje `null` za primitív (aj keď `typeof null` je `"object"`).
- Pomáha zúžiť hodnoty typu `unknown` pred vykonaním operácií určených len pre objekty.

## Použitie

### Syntax

Funkcia:

- `isPrimitive(value)`

Parametre:

- `value`: Hodnota, pri ktorej sa má skontrolovať, či je primitívneho typu.

### Lokálny import funkcie

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

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.isPrimitive(value)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>Súbor bol vygenerovaný 30 January 2026 at 23:57:40 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>