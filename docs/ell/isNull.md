# isNull

## Περιγραφή

Καθορίζει αν η παρεχόμενη `value` είναι `null`.

### Περίπτωση χρήσης

Χρησιμοποιήστε το `isNull` για να επικυρώνετε εισόδους ή πεδία payload API όπου το `null` είναι μια σημαίνουσα
τιμή-δείκτης (sentinel) και πρέπει να αντιμετωπίζεται διαφορετικά από το `undefined` ή άλλες τιμές.

> **Σημείωση για χρήστες TypeScript:**
>
> Χρησιμοποιήστε το `isNull` όταν χρειάζεται να διακρίνετε το `null` από το `undefined` και άλλες ψευδείς (falsy) τιμές·
> επιστρέφει `true` μόνο για `null`.

### Πλεονεκτήματα

- Παρέχει ακριβή έλεγχο για `null` χωρίς να το συγχέει με `undefined`.
- Λειτουργεί αξιόπιστα για οποιονδήποτε τύπο εισόδου, επειδή δέχεται `unknown`.
- Απλό, γρήγορο και χωρίς παρενέργειες· επιστρέφει μόνο `true` ή `false`.

## Χρήση

### Σύνταξη

Συνάρτηση:

- `isNull(value)`

Παράμετροι:

- `value`: Η τιμή που θα ελεγχθεί για `null`.

### Τοπική εισαγωγή συνάρτησης

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // αληθές
console.log(isNull(b)); // ψευδές

if (isNull(a)) {
  // το a είναι null εδώ
}
```

### Καθολική εισαγωγή αντικειμένου

Για εισαγωγή των συναρτήσεων ως καθολικών μεθόδων αντικειμένου χρησιμοποιήστε:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Η ακόλουθη μέθοδος θα είναι διαθέσιμη καθολικά:

- `Type.isNull(value)`

## Ανάλυση συναρτήσεων

Εδώ τεκμηριώνεται μια πινακοποιημένη ανάλυση της εξόδου που προκύπτει όταν δίνονται διαφορετικές παράμετροι στις
συναρτήσεις: [isNull](../_analysis/isNull.md)

<br>

---

<small>Το αρχείο δημιουργήθηκε στις 31 January 2026 at 15:39:04 (UTC) με τη χρήση του *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** από τον/την *
*[Roland Milto](https://roland-milto.de/)**.</small>