# isError

## Popis

Kontroluje, zda je daná `value` instancí `Error`.

### Případ použití

Použijte `isError`, když obdržíte hodnotu typu `unknown` (například z bloku `catch`, callbacku nebo externí knihovny) a
potřebujete bezpečně určit, zda jde o `Error`, než budete číst `message`, `name` nebo `stack`.

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `isError` k ošetření hodnot typu `unknown` (např. z `catch`) předtím, než s nimi budete zacházet jako s
`Error`.

### Výhody

- Poskytuje jednoduchou kontrolu za běhu, zda je hodnota instancí `Error`.
- Pomáhá zúžit neznámé vstupy před přístupem k vlastnostem `Error`, jako jsou `message` nebo `stack`.
- Snižuje riziko výjimek za běhu při práci s hodnotami z `catch`, externích API nebo netypovaných zdrojů.

## Použití

### Syntaxe

Funkce:

- `isError(value)`

Parametry:

- `value`: Hodnota, kterou je třeba zkontrolovat vůči typu `Error`.

### Lokální import funkce

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

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.isError(value)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [isError](../_analysis/isError.md)

<br>

---

<small>Soubor byl vytvořen 6 February 2026 at 12:44:56 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>