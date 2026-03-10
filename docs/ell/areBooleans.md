# areBooleans

## Περιγραφή

Το `areBooleans` ελέγχει αν ένας δεδομένος μη κενός πίνακας περιέχει μόνο τιμές boolean, επιστρέφοντας `true` αν ισχύει
και `false` διαφορετικά.

### Περίπτωση χρήσης

Επικύρωση δεδομένων που παρέχονται από χρήστη ή εξωτερικές πηγές (π.χ., φορτία JSON, παράμετροι ερωτημάτων, πίνακες
ρυθμίσεων) ώστε να διασφαλιστεί ότι μια μη κενή λίστα περιέχει μόνο booleans πριν εφαρμοστεί λογική boolean ή πριν
περαστεί σε API που αναμένουν `boolean[]`.

> **Σημείωση για χρήστες TypeScript:**
>
> Χρησιμοποιήστε το `areBooleans` για να επικυρώσετε `unknown[]` πριν το χειριστείτε ως `boolean[]`· επιστρέφει `false`
> για κενούς πίνακες, οπότε χειριστείτε ρητά αυτή την περίπτωση αν πρέπει να επιτρέπεται μια κενή λίστα.

### Πλεονεκτήματα

- Επιστρέφει `true` μόνο όταν κάθε στοιχείο είναι boolean και η είσοδος είναι μη κενός πίνακας.
- Αποτρέπει ψευδώς θετικά αποτελέσματα απορρίπτοντας τους κενούς πίνακες (επιστρέφει `false`).
- Λειτουργεί καλά ως έλεγχος χρόνου εκτέλεσης πριν από λειτουργίες μόνο για boolean (π.χ., `every`, `some`, λογικές
  μειώσεις).

## Χρήση

### Σύνταξη

Συνάρτηση:

- `areBooleans(array)`

Παράμετροι:

- `array`: Ο πίνακας που θα ελεγχθεί για στοιχεία boolean.

### Τοπική εισαγωγή συνάρτησης

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### Καθολική εισαγωγή αντικειμένου

Για εισαγωγή των συναρτήσεων ως καθολικών μεθόδων αντικειμένου χρησιμοποιήστε:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Η ακόλουθη μέθοδος θα είναι διαθέσιμη καθολικά:

- `Type.areBooleans(array)`

## Ανάλυση συναρτήσεων

Εδώ τεκμηριώνεται μια πινακοποιημένη ανάλυση της εξόδου που προκύπτει όταν δίνονται διαφορετικές παράμετροι στις
συναρτήσεις: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>Το αρχείο δημιουργήθηκε στις 30 January 2026 at 14:39:54 (UTC) με τη χρήση του *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** από τον/την *
*[Roland Milto](https://roland-milto.de/)**.</small>