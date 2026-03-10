# isPromise

## Popis

Určuje, zda je daná hodnota `Promise`.

### Případ použití

Použijte `isPromise` k ověření neznámých vstupů předtím, než s nimi budete zacházet jako s `Promise`, například při
zpracování hodnot vrácených z pluginů, dynamických importů nebo volně typovaných API.

> **Poznámka pro uživatele TypeScriptu:**
>
> `isPromise` kontroluje pomocí `instanceof Promise`, takže vrací `true` pouze pro skutečné instance `Promise` (ne pro
> obecné thenables).

### Výhody

- Poskytuje jednoduchou kontrolu za běhu, zda je hodnota `Promise`.
- Pomáhá chránit větve kódu, které vyžadují skutečnou instanci `Promise`, a předvídatelně vrací `true` nebo `false`.
- Zabraňuje falešně pozitivním výsledkům u „thenable“ objektů (např. `{ then() {} }`) tím, že vyžaduje skutečnou
  instanci `Promise`.

## Použití

### Syntaxe

Funkce:

- `isPromise(value)`

Parametry:

- `value`: Hodnota, která má být zkontrolována.

### Lokální import funkce

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // pravda
console.log(isPromise(b)); // nepravda
console.log(isPromise(123)); // nepravda
console.log(isPromise(null)); // nepravda

```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.isPromise(value)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>Soubor byl vytvořen 30 January 2026 at 23:52:22 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>