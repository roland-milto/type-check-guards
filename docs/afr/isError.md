# isError

## Beskrywing

Kontroleer of 'n gegewe `value` 'n instansie van `Error` is.

### Gebruikscenario

Gebruik `isError` wanneer jy 'n `unknown`-waarde ontvang (soos uit 'n `catch`-blok, 'n terugroep, of 'n eksterne
biblioteek) en jy veilig moet bepaal of dit 'n `Error` is voordat jy `message`, `name`, of `stack` lees.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `isError` om `unknown`-waardes (bv. uit `catch`) te bewaak voordat jy hulle as 'n `Error` hanteer.

### Voordele

- Verskaf 'n eenvoudige looptydkontrole om te bepaal of 'n waarde 'n `Error`-instansie is.
- Help om onbekende insette te vernou voordat `Error`-eienskappe soos `message` of `stack` benader word.
- Verminder die risiko van looptyduitsonderings wanneer waardes uit `catch`, eksterne API's, of ongetipeerde bronne
  hanteer word.

## Gebruik

### Sintaksis

Funksie:

- `isError(value)`

Parameters:

- `value`: Die waarde om teen die `Error`-tipe te kontroleer.

### Plaaslike funksie-invoer

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

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.isError(value)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [isError](../_analysis/isError.md)

<br>

---

<small>Hierdie lêer is op 6 February 2026 at 12:44:36 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>