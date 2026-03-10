# areRegExes

## Popis

`areRegExes` kontroluje, či je hodnota naplnené pole obsahujúce iba objekty `RegExp`.

### Prípad použitia

Overte, že konfiguračná voľba (napr. zoznam vzorov povoliť/zakázať) je neprázdne pole regulárnych výrazov predtým, než
ju použijete na porovnávanie.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `areRegExes` na zúženie typu `unknown` na `RegExp[]` pred iterovaním alebo skladaním vzorov.

### Výhody

- Zabezpečuje, že hodnota je neprázdne pole, v ktorom je každý prvok inštanciou `RegExp`.
- Poskytuje jednoduchú booleovskú kontrolu (`true`/`false`) na overenie používateľského vstupu alebo konfigurácie.
- Pomáha predchádzať chybám za behu, keď neskorší kód predpokladá, že všetky položky podporujú operácie s regulárnymi
  výrazmi.

## Použitie

### Syntax

Funkcia:

- `areRegExes(array)`

Parametre:

- `array`: Hodnota, ktorá sa má skontrolovať.

### Lokálny import funkcie

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // patterns je tu pole RegExp
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.areRegExes(array)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>Súbor bol vygenerovaný 30 January 2026 at 23:21:29 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>