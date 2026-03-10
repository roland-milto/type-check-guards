# areErrors

## Beskrywing

Kontroleer of 'n skikking nie leeg is nie en slegs `Error`-objekte bevat, en gee `true` of `false` terug.

### Gebruikscenario

Valideer dat 'n runtime-verskafde `unknown[]` (bv. saamgevoegde mislukkings, validasie-resultate, of gedeserialiseerde
data) 'n nie-leë lys van `Error`-objekte is voordat daar geïtereer, gelog, of weer gegooi word.

> **Wenk vir TypeScript-gebruikers:**
>
> `areErrors` gee `true` terug slegs vir 'n gevulde skikking waar elke item 'n `Error` is; dit gee `false` terug vir 'n
> leë skikking of as enige element nie 'n `Error` is nie.

### Voordele

- Verseker dat elke element 'n `Error`-instansie is, wat veilige foutbehandeling en -logboekhouding moontlik maak.
- Verwerp leë skikkings, wat voorkom dat toevallige “geen foute”-toestande as geldige foutlyste behandel word.
- Werk goed as 'n runtime-beskerming wanneer met `unknown[]`-insette gewerk word (bv. vanaf API's of `catch`-blokke).

## Gebruik

### Sintaksis

Funksie:

- `areErrors(array)`

Parameters:

- `array`: Die skikking om na te gaan vir `Error`-objekte.

### Plaaslike funksie-invoer

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // waarde is 'n nie-leë skikking van Error-objekte
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.areErrors(array)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>Hierdie lêer is op 6 February 2026 at 12:32:35 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>