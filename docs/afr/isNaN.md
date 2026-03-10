# isNaN

## Beskrywing

Bepaal of die verskafde `value` 'n `NaN` van tipe `number` is sonder om stringe om te skakel.

### Gebruikscenario

Valideer onbetroubare of losweg getipeerde insette (bv. API-payloads, vormwaardes, geparste JSON) om die spesiale `NaN`
-waarde op te spoor en dit eksplisiet te hanteer, terwyl nie-getal-insette as nie `NaN` behandel word.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `isNaN` wanneer jy die spesiale numeriese waarde `NaN` moet opspoor terwyl jy verseker dat die inset werklik '
> n `number` is (geen string-na-getal-omskakeling nie).

### Voordele

- Kontroleer of 'n waarde `NaN` is sonder om nie-getalle (bv. stringe) na getalle te dwing.
- Gee `true` slegs terug vir waardes wat beide van tipe `number` en `NaN` is.
- Veilig vir `unknown`-insette en vermy vals positiewe weens implisiete omskakelings.

## Gebruik

### Sintaksis

Funksie:

- `isNaN(value)`

Parameters:

- `value`: Die waarde wat nagegaan moet word of dit 'n `NaN` van tipe `number` is.

### Plaaslike funksie-invoer

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // waar
console.log(isNaN(b)); // vals
console.log(isNaN(c)); // vals

if (isNaN(a)) {
  // a is 'n getal en spesifiek NaN
}
```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.isNaN(value)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [isNaN](../_analysis/isNaN.md)

<br>

---

<small>Hierdie lêer is op 30 January 2026 at 15:45:02 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>