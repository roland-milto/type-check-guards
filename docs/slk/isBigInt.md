# isBigInt

## Popis

`isBigInt` kontroluje, či je daná hodnota typu `bigint`, pričom vracia `true` pre primitívy BigInt a `false` v opačnom
prípade.

### Prípad použitia

Validujte a zúžte hodnoty pochádzajúce z netypovaných zdrojov (napr. parsovanie JSON, používateľský vstup, externé API)
pred vykonávaním výpočtov špecifických pre BigInt alebo pred ich uložením do polí určených len pre BigInt.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `isBigInt` na zúženie `unknown` na `bigint` pred vykonávaním aritmetiky BigInt (napr. `+`, `*`), ktorá
> vyžaduje operandy typu BigInt.

### Výhody

- Poskytuje jednoduchú a spoľahlivú kontrolu za behu pre primitívny typ `bigint`.
- Pomáha zúžiť hodnoty typu `unknown` pred vykonaním operácií určených len pre BigInt.
- Zabraňuje falošne pozitívnym výsledkom: bežné čísla, reťazce a iné typy vracajú `false`.

## Použitie

### Syntax

Funkcia:

- `isBigInt(value)`

Parametre:

- `value`: Hodnota, ktorú treba skontrolovať.

### Lokálny import funkcie

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // pravda
console.log(isBigInt(10));  // nepravda
console.log(isBigInt("10")); // nepravda
```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.isBigInt(value)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>Súbor bol vygenerovaný 31 January 2026 at 23:33:12 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>