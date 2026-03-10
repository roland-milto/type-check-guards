# isPrimitive

## Beskrywing

`isPrimitive` bepaal of ’n gegewe waarde ’n primitief is (`null`, `undefined`, `boolean`, `number`, `string`, `bigint`,
`symbol`).

### Gebruikscenario

Valideer insette tydens uitvoering (bv. API-nutsvragvelde, konfigurasiewaardes, of gebruiker-verskafte data) om te
verseker dat ’n waarde ’n primitief is voordat dit geserialiseer, gelog, of primitief-alleen bewerkings toegepas word.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `isPrimitive` om `unknown`-insette te bewaak voordat jy hulle as objekte of funksies hanteer; dit gee `true`
> vir primitiewe en `false` vir objekte en funksies terug.

### Voordele

- Vinnige, toewysingsvrye kontrole om te bepaal of ’n waarde ’n JavaScript-primitief is.
- Behandel `null` korrek as primitief (al is `typeof null` `"object"`).
- Help om `unknown`-waardes te vernou voordat slegs-objek bewerkings uitgevoer word.

## Gebruik

### Sintaksis

Funksie:

- `isPrimitive(value)`

Parameters:

- `value`: Die waarde om te kontroleer vir primitiewe tipe.

### Plaaslike funksie-invoer

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.isPrimitive(value)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>Hierdie lêer is op 30 January 2026 at 23:55:23 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>