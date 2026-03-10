# isBoolean

## Popis

Určuje, či je daná hodnota typu `boolean`.

### Prípad použitia

Overujte externé alebo netypované údaje (napr. premenné prostredia, JSON payloady, parametre dotazu), aby ste sa
uistili, že hodnota je typu `boolean` pred jej použitím v podmienkovej logike.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `isBoolean` na zúženie typu `unknown` na `boolean` pred použitím boolean operácií.

### Výhody

- Jednoduchá a rýchla kontrola za behu pomocou `typeof`.
- Pomáha overiť neznámy vstup pred logikou špecifickou pre boolean.
- Vracia predvídateľný výsledok typu `boolean` (`true`/`false`).

## Použitie

### Syntax

Funkcia:

- `isBoolean(value)`

Parametre:

- `value`: Hodnota, ktorá sa má skontrolovať.

### Lokálny import funkcie

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // input je tu boolean
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.isBoolean(value)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>Súbor bol vygenerovaný 30 January 2026 at 14:37:47 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>