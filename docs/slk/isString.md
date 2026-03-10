# isString

## Popis

`isString` určuje, či je daná hodnota reťazec.

### Prípad použitia

Overujte používateľský vstup, polia payloadu API alebo konfiguračné hodnoty za behu, aby ste sa uistili, že hodnota je
reťazec pred použitím reťazcových operácií (napr. orezanie, rozdelenie, zmena veľkosti písmen).

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `isString` na overenie hodnôt typu `unknown` alebo voľne typovaných hodnôt pred volaním metód reťazca; vráti
`true` iba vtedy, keď `typeof value === "string"`.

### Výhody

- Jednoduchá a rýchla kontrola pomocou `typeof`.
- Vracia predvídateľný booleovský výsledok: `true` pre reťazce, inak `false`.
- Funguje pre prázdne aj neprázdne reťazce.
- Užitočné ako ľahká runtime ochrana pred vykonaním operácií špecifických pre reťazce.

## Použitie

### Syntax

Funkcia:

- `isString(value)`

Parametre:

- `value`: Hodnota, ktorá sa má otestovať, či je typu reťazec.

### Lokálny import funkcie

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // input je tu reťazec
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.isString(value)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [isString](../_analysis/isString.md)

<br>

---

<small>Súbor bol vygenerovaný 30 January 2026 at 13:15:32 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>