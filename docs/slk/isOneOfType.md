# isOneOfType

## Popis

`isOneOfType` určuje, či daná `value` zodpovedá aspoň jednému z poskytnutých reťazcov typov; vráti `true`, ak sa nájde
akákoľvek zhoda, inak vráti `false`.

### Prípad použitia

Validujte voľne typované alebo externé dáta (napr. parsované JSON, parametre dotazu) tým, že povolíte viacero
prijateľných typov za behu (napríklad `number` alebo `string`) pred pokračovaním v ďalšej logike.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `isOneOfType`, keď chcete kontrolu za behu, že hodnota zodpovedá niektorému z viacerých povolených typov;
> vráti `true`, ak sa zhoduje aspoň jeden typ, inak `false`.

### Výhody

- Kontroluje hodnotu voči viacerým povoleným typom v jednom volaní a vráti `true` pri prvej zhode.
- Funguje so vstupmi typu `unknown`, čo ho robí užitočným na hraniciach behu aplikácie (napr. externé dáta,
  používateľský vstup).
- Poskytuje jednoduchý booleovský výsledok (`true`/`false`), ktorý sa dobre kombinuje s podmienenou logikou a
  predčasnými návratmi.

## Použitie

### Syntax

Funkcia:

- `isOneOfType(value, types)`

Parametre:

- `value`: Hodnota, ktorá sa má skontrolovať voči zadaným typom.
- `types`: Pole reťazcov typov reprezentujúcich možné typy hodnoty.

### Lokálny import funkcie

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input je objekt za behu programu
}

console.log(isOneOfType(3, ["number", "string"])); // true
console.log(isOneOfType("hello", ["number", "boolean"])); // false

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.isOneOfType(value, types)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>Súbor bol vygenerovaný 6 February 2026 at 13:54:12 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>