# isOneOfType

## Skildring

`isOneOfType` avgjer om ein gitt `value` samsvarar med minst éin av dei oppgjevne typestrengane, og returnerer `true`
dersom det finst eit treff og `false` elles.

### Brukstilfelle

Valider laust typa eller eksterne data (t.d. tolka JSON, spørjeparametrar) ved å tillate fleire akseptable typar i
køyretid (som `number` eller `string`) før du går vidare med meir logikk.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `isOneOfType` når du vil ha ein køyretidskontroll som sjekkar at ein verdi samsvarar med ein av fleire tillatne
> typar; han returnerer `true` dersom minst éin type samsvarar, elles `false`.

### Fordelar

- Kontrollerer ein verdi mot fleire tillatne typar i eitt enkelt kall, og returnerer `true` ved første treff.
- Fungerer med `unknown`-inndata, noko som gjer han nyttig ved grenseflater i køyretid (t.d. eksterne data,
  brukarinnput).
- Gjev eit enkelt boolsk resultat (`true`/`false`) som passar godt saman med vilkårslogikk og tidlege returverdiar.

## Bruk

### Syntaks

Funksjon:

- `isOneOfType(value, types)`

Parameter:

- `value`: Verdien som skal kontrollerast mot dei spesifiserte typane.
- `types`: Ein tabell med typestrengar som representerer dei moglege typane til verdien.

### Lokal funksjonsimport

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input er eit objekt ved køyretid
}

console.log(isOneOfType(3, ["number", "string"])); // true
console.log(isOneOfType("hello", ["number", "boolean"])); // false

```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.isOneOfType(value, types)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>Fila vart generert 6 February 2026 at 13:53:31 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>