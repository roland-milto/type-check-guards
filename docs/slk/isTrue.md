# isTrue

## Popis

`isTrue` určuje, či je daná hodnota striktne rovná `true`.

### Prípad použitia

Použite `isTrue` na validáciu príznakov, feature togglov alebo konfiguračných hodnôt, kde sa má akceptovať iba literál
`true` a všetko ostatné sa musí považovať za `false`.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `isTrue`, keď potrebujete akceptovať iba booleovský literál `true`, nie iba truthy hodnoty.

### Výhody

- Poskytuje prísnu kontrolu booleovského literálu `true` (bez konverzie).
- Pomáha odlíšiť `true` od truthy hodnôt ako `1`, `"true"` alebo `{}`.
- Jednoduché, predvídateľné správanie vhodné pre guardy a validačné pipeline.

## Použitie

### Syntax

Funkcia:

- `isTrue(value)`

Parametre:

- `value`: Hodnota, ktorá sa má skontrolovať.

### Lokálny import funkcie

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // pravda
const b = isTrue(1);         // nepravda
const c = isTrue("true");   // nepravda

if (isTrue(a)) {
  // a je tu pravda
}
```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.isTrue(value)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [isTrue](../_analysis/isTrue.md)

<br>

---

<small>Súbor bol vygenerovaný 30 January 2026 at 13:46:08 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>