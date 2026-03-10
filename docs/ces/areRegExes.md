# areRegExes

## Popis

`areRegExes` kontroluje, zda je hodnota naplněné pole obsahující pouze objekty `RegExp`.

### Případ použití

Ověřte, že konfigurační volba (např. seznam vzorů pro povolení/zakázání) je neprázdné pole regulárních výrazů, než ji
použijete pro porovnávání.

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `areRegExes` k zúžení typu `unknown` na `RegExp[]` před iterací nebo skládáním vzorů.

### Výhody

- Zajišťuje, že hodnota je neprázdné pole, ve kterém je každý prvek instancí `RegExp`.
- Poskytuje jednoduchou booleovskou kontrolu (`true`/`false`) pro ověřování uživatelského vstupu nebo konfigurace.
- Pomáhá předcházet chybám za běhu, když pozdější kód předpokládá, že všechny položky podporují operace s regulárními
  výrazy.

## Použití

### Syntaxe

Funkce:

- `areRegExes(array)`

Parametry:

- `array`: Hodnota, která má být zkontrolována.

### Lokální import funkce

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // patterns je zde pole RegExp
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.areRegExes(array)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>Soubor byl vytvořen 30 January 2026 at 23:17:06 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>