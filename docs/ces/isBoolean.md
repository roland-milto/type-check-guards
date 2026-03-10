# isBoolean

## Popis

Určuje, zda je daná hodnota typu `boolean`.

### Případ použití

Ověřujte externí nebo netypovaná data (např. proměnné prostředí, JSON payloady, parametry dotazu), abyste zajistili, že
hodnota je typu `boolean` předtím, než ji použijete v podmíněné logice.

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `isBoolean` k zúžení typu `unknown` na `boolean` před použitím booleovských operací.

### Výhody

- Jednoduchá a rychlá kontrola za běhu pomocí `typeof`.
- Pomáhá ověřit neznámý vstup před logikou specifickou pro boolean.
- Vrací předvídatelný výsledek typu `boolean` (`true`/`false`).

## Použití

### Syntaxe

Funkce:

- `isBoolean(value)`

Parametry:

- `value`: Hodnota, která má být zkontrolována.

### Lokální import funkce

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // input je zde boolean
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.isBoolean(value)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>Soubor byl vytvořen 30 January 2026 at 14:35:54 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>