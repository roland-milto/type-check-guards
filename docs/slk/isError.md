# isError

## Popis

Kontroluje, či je daná hodnota `value` inštanciou `Error`.

### Prípad použitia

Použite `isError`, keď dostanete hodnotu typu `unknown` (napríklad z bloku `catch`, z callbacku alebo z externej
knižnice) a potrebujete bezpečne určiť, či ide o `Error` pred čítaním `message`, `name` alebo `stack`.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `isError` na ošetrenie hodnôt typu `unknown` (napr. z `catch`) predtým, než s nimi budete pracovať ako s
`Error`.

### Výhody

- Poskytuje jednoduchú kontrolu za behu, či je hodnota inštanciou `Error`.
- Pomáha zúžiť neznáme vstupy pred prístupom k vlastnostiam `Error`, ako sú `message` alebo `stack`.
- Znižuje riziko výnimiek za behu pri spracovaní hodnôt z `catch`, externých API alebo netypovaných zdrojov.

## Použitie

### Syntax

Funkcia:

- `isError(value)`

Parametre:

- `value`: Hodnota, ktorú treba skontrolovať voči typu `Error`.

### Lokálny import funkcie

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.isError(value)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [isError](../_analysis/isError.md)

<br>

---

<small>Súbor bol vygenerovaný 6 February 2026 at 12:47:00 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>