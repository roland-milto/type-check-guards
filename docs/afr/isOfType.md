# isOfType

## Beskrywing

Bepaal of ’n gegewe `value` ooreenstem met ’n gespesifiseerde tipe-string, deur `typeof` vir primitiewe te gebruik en ’n
terugval vir komplekse tipes.

### Gebruikscenario

Valideer en vernou `unknown`-insette (bv. API-antwoorde, gebruikersinvoer, geparste JSON) deur te kontroleer of ’n
waarde van ’n verwagte tipe-string is voordat tipe-spesifieke bewerkings uitgevoer word.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `isOfType` om op runtime-tipes te vertak wanneer jy met `unknown`-waardes werk; dit gee `true`/`false` terug
> en hanteer `null` en `undefined` eksplisiet.

### Voordele

- Kontroleer primitiewe via direkte `typeof` vir spoed en duidelikheid.
- Hanteer `null` en `undefined` korrek, wat `typeof` alleen nie soos bedoel kan onderskei nie.
- Ondersteun komplekse of pasgemaakte tipe-stringe via ’n terugvalvergelyking met `getTypeOf`.
- Gee ’n eenvoudige booleaanse resultaat (`true`/`false`) wat geskik is vir guards en vertakking.

## Gebruik

### Sintaksis

Funksie:

- `isOfType(value, type)`

Parameters:

- `value`: Die waarde om teen die `type` te toets.
- `type`: Die stringvoorstelling van die tipe waarteen gekontroleer moet word.

### Plaaslike funksie-invoer

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // invoer is hier 'n getal
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // invoer is hier 'n string
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.isOfType(value, type)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>Hierdie lêer is op 30 January 2026 at 16:58:26 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>