# isWeakMap

## Περιγραφή

Καθορίζει αν μια δεδομένη `value` είναι στιγμιότυπο `WeakMap`.

### Περίπτωση χρήσης

Χρησιμοποίησε το `isWeakMap` όταν δέχεσαι μια τιμή `unknown` (π.χ. από ένα δημόσιο API, σύστημα plugins ή δυναμική
ρύθμιση) και χρειάζεται να επαληθεύσεις ότι είναι `WeakMap` πριν χρησιμοποιήσεις συμπεριφορά ειδική για `WeakMap`.

> **Σημείωση για χρήστες TypeScript:**
>
> Το `isWeakMap` εκτελεί έλεγχο `instanceof WeakMap`· είναι ένας runtime guard που επιστρέφει `true` μόνο για πραγματικά
> στιγμιότυπα `WeakMap`.

### Πλεονεκτήματα

- Απλός έλεγχος χρόνου εκτέλεσης για το αν μια τιμή είναι `WeakMap`.
- Βοηθά στην αποτροπή κακής χρήσης API που απαιτούν `WeakMap`, επιστρέφοντας `true`/`false` αντί να πετάει εξαίρεση.
- Λειτουργεί με εισόδους `unknown`, καθιστώντας το βολικό στα όρια των modules (π.χ. ανάλυση, εξωτερικά δεδομένα ή μη
  τυποποιημένος κώδικας).

## Χρήση

### Σύνταξη

Συνάρτηση:

- `isWeakMap(value)`

Παράμετροι:

- `value`: Η τιμή προς έλεγχο.

### Τοπική εισαγωγή συνάρτησης

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // το a είναι ένα WeakMap κατά τον χρόνο εκτέλεσης
}

console.log(isWeakMap(a)); // αληθές
console.log(isWeakMap(b)); // ψευδές
```

### Καθολική εισαγωγή αντικειμένου

Για εισαγωγή των συναρτήσεων ως καθολικών μεθόδων αντικειμένου χρησιμοποιήστε:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Η ακόλουθη μέθοδος θα είναι διαθέσιμη καθολικά:

- `Type.isWeakMap(value)`

## Ανάλυση συναρτήσεων

Εδώ τεκμηριώνεται μια πινακοποιημένη ανάλυση της εξόδου που προκύπτει όταν δίνονται διαφορετικές παράμετροι στις
συναρτήσεις: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>Το αρχείο δημιουργήθηκε στις 30 January 2026 at 13:24:49 (UTC) με τη χρήση του *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** από τον/την *
*[Roland Milto](https://roland-milto.de/)**.</small>