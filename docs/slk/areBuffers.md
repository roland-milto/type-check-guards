# areBuffers

## Popis

`areBuffers` kontroluje, či je poskytnutá hodnota neprázdne, vyplnené pole, v ktorom je každý prvok `Buffer`; ak áno,
vráti `true`, inak `false`.

### Prípad použitia

Overte prichádzajúce polia chunkov (napr. zo streamov, nahrávania súborov alebo sieťových paketov), aby ste sa uistili,
že všetky časti sú inštancie `Buffer` pred zreťazením, dekódovaním alebo odovzdaním do kryptografických alebo
binárno-spracovateľských funkcií.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `areBuffers` na overenie `unknown[]` pred volaním API špecifických pre Buffer, ako je `Buffer.concat`, čím
> zabezpečíte, že funkcia vráti `true` iba vtedy, keď je každý prvok `Buffer`.

### Výhody

- Zabezpečuje, že každý prvok vstupu je inštancia Node.js `Buffer`, pričom vráti `true` iba vtedy, keď sa zhoduje celé
  pole.
- Včas odmieta neplatné vstupy tým, že vyžaduje neprázdne, vyplnené pole; pre prázdne polia alebo nepolia vráti `false`.
- Užitočné ako ochrana pred vykonávaním operácií určených len pre buffery (napr. zreťazenie, hashovanie, binárne
  protokoly).

## Použitie

### Syntax

Funkcia:

- `areBuffers(array)`

Parametre:

- `array`: Pole, ktoré sa má skontrolovať na inštancie bufferov.

### Lokálny import funkcie

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.areBuffers(array)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>Súbor bol vygenerovaný 31 January 2026 at 16:27:09 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>