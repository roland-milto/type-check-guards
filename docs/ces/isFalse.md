# isFalse

## Popis

`isFalse` kontroluje, zda je daná hodnota striktně rovna booleovskému literálu `false`.

### Případ použití

Validujte neznámá data (např. z JSON, parametrů dotazu nebo uživatelského vstupu), kde má být jako platný příznak
považována pouze explicitní booleovská hodnota `false` a vše ostatní má být odmítnuto.

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `isFalse`, když potřebujete přijmout pouze literál `false` a odmítnout všechny ostatní „falešné“ hodnoty;
> vrací `true` pouze pro `value === false`.

### Výhody

- Poskytuje striktní kontrolu booleovského literálu `false` bez převodu typů.
- Pomáhá odlišit `false` od jiných „falešných“ hodnot, jako jsou `0`, `""`, `null` a `undefined`.
- Zlepšuje čitelnost tím, že při validaci neznámého vstupu explicitně vyjadřuje záměr.

## Použití

### Syntaxe

Funkce:

- `isFalse(value)`

Parametry:

- `value`: Hodnota, která má být zkontrolována.

### Lokální import funkce

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // vstup je zde přesně false
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.isFalse(value)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>Soubor byl vytvořen 31 January 2026 at 16:21:07 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>