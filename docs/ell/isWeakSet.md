# isWeakSet

## Περιγραφή

Καθορίζει αν η δοθείσα `value` είναι ένα `WeakSet` αντικειμένων.

### Περίπτωση χρήσης

Χρησιμοποίησε το `isWeakSet` όταν δέχεσαι μη τυποποιημένη είσοδο (π.χ. από εξωτερικά API, δυναμική ρύθμιση παραμέτρων ή
τιμές `unknown`) και χρειάζεται να επαληθεύσεις ότι είναι `WeakSet` πριν χρησιμοποιήσεις λειτουργίες ειδικές για
`WeakSet`.

> **Σημείωση για χρήστες TypeScript:**
>
> Χρησιμοποίησε το `isWeakSet` για να περιορίσεις μια τιμή `unknown` σε `WeakSet<object>` στον χρόνο εκτέλεσης· σημείωσε
> ότι το `WeakSet` μπορεί να περιέχει μόνο αναφορές σε αντικείμενα.

### Πλεονεκτήματα

- Παρέχει έναν απλό έλεγχο χρόνου εκτέλεσης για το αν μια τιμή είναι `WeakSet`.
- Βοηθά στην αποφυγή σφαλμάτων τύπων, διασφαλίζοντας ότι μόνο στιγμιότυπα `WeakSet` αντιμετωπίζονται ως τέτοια.
- Λειτουργεί με οποιαδήποτε είσοδο `unknown` και επιστρέφει ένα σαφές boolean αποτέλεσμα (`true`/`false`).

## Χρήση

### Σύνταξη

Συνάρτηση:

- `isWeakSet(value)`

Παράμετροι:

- `value`: Η τιμή που θα ελεγχθεί.

### Τοπική εισαγωγή συνάρτησης

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // true
console.log(isWeakSet(b)); // false

if (isWeakSet(a)) {
  // το a είναι ένα WeakSet κατά τον χρόνο εκτέλεσης
}
```

### Καθολική εισαγωγή αντικειμένου

Για εισαγωγή των συναρτήσεων ως καθολικών μεθόδων αντικειμένου χρησιμοποιήστε:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Η ακόλουθη μέθοδος θα είναι διαθέσιμη καθολικά:

- `Type.isWeakSet(value)`

## Ανάλυση συναρτήσεων

Εδώ τεκμηριώνεται μια πινακοποιημένη ανάλυση της εξόδου που προκύπτει όταν δίνονται διαφορετικές παράμετροι στις
συναρτήσεις: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>Το αρχείο δημιουργήθηκε στις 30 January 2026 at 14:14:36 (UTC) με τη χρήση του *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** από τον/την *
*[Roland Milto](https://roland-milto.de/)**.</small>