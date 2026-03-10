# isOfType

## Popis

Určuje, či daná `value` zodpovedá zadanému reťazcu typu, pričom používa `typeof` pre primitíva a záložný mechanizmus pre
zložité typy.

### Prípad použitia

Validujte a zužujte vstupy typu `unknown` (napr. odpovede z API, používateľský vstup, parsované JSON) kontrolou, či
hodnota zodpovedá očakávanému reťazcu typu, pred vykonaním operácií špecifických pre daný typ.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `isOfType` na vetvenie podľa typov za behu pri práci s hodnotami `unknown`; vracia `true`/`false` a `null` a
`undefined` spracúva explicitne.

### Výhody

- Kontroluje primitívne typy pomocou priameho `typeof` pre rýchlosť a prehľadnosť.
- Správne spracúva `null` a `undefined`, ktoré samotné `typeof` nedokáže rozlíšiť podľa potreby.
- Podporuje zložité alebo vlastné reťazce typov cez záložné porovnanie pomocou `getTypeOf`.
- Vracia jednoduchý booleovský výsledok (`true`/`false`) vhodný pre stráže (guards) a vetvenie.

## Použitie

### Syntax

Funkcia:

- `isOfType(value, type)`

Parametre:

- `value`: Hodnota, ktorú treba otestovať voči `type`.
- `type`: Reťazcová reprezentácia typu, voči ktorému sa má kontrolovať.

### Lokálny import funkcie

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // input je tu číslo
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // input je tu reťazec
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.isOfType(value, type)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>Súbor bol vygenerovaný 30 January 2026 at 17:06:11 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>