# isNull

## Beskrywing

Bepaal of die verskafde `value` `null` is.

### Gebruikscenario

Gebruik `isNull` om insette of API-ladingvelde te valideer waar `null` 'n betekenisvolle wagwaarde is en anders hanteer
moet word as `undefined` of ander waardes.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `isNull` wanneer jy `null` van `undefined` en ander valsy waardes moet onderskei; dit gee slegs `true` terug
> vir `null`.

### Voordele

- Bied 'n presiese toets vir `null` sonder om dit met `undefined` te verwar.
- Werk betroubaar vir enige invoertipe omdat dit `unknown` aanvaar.
- Eenvoudig, vinnig en sonder newe-effekte; gee slegs `true` of `false` terug.

## Gebruik

### Sintaksis

Funksie:

- `isNull(value)`

Parameters:

- `value`: Die waarde om vir `null` te toets.

### Plaaslike funksie-invoer

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // waar
console.log(isNull(b)); // vals

if (isNull(a)) {
  // a is hier null
}
```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.isNull(value)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [isNull](../_analysis/isNull.md)

<br>

---

<small>Hierdie lêer is op 31 January 2026 at 15:38:31 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>