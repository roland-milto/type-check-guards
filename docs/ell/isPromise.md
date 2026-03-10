# isPromise

## Περιγραφή

Καθορίζει αν μια δεδομένη τιμή είναι `Promise`.

### Περίπτωση χρήσης

Χρησιμοποιήστε το `isPromise` για να επικυρώσετε άγνωστες εισόδους πριν τις χειριστείτε ως `Promise`, όπως όταν
διαχειρίζεστε τιμές που επιστρέφονται από plugins, δυναμικά imports ή APIs με χαλαρή τυποποίηση.

> **Σημείωση για χρήστες TypeScript:**
>
> Το `isPromise` ελέγχει μέσω `instanceof Promise`, οπότε επιστρέφει `true` μόνο για πραγματικές παρουσίες `Promise` (
> όχι γενικά thenables).

### Πλεονεκτήματα

- Παρέχει έναν απλό έλεγχο χρόνου εκτέλεσης για το αν μια τιμή είναι `Promise`.
- Βοηθά στην προστασία διαδρομών κώδικα που απαιτούν μια πραγματική παρουσία `Promise`, επιστρέφοντας προβλέψιμα `true`
  ή `false`.
- Αποφεύγει ψευδώς θετικά από αντικείμενα “thenable” (π.χ., `{ then() {} }`) απαιτώντας μια πραγματική παρουσία
  `Promise`.

## Χρήση

### Σύνταξη

Συνάρτηση:

- `isPromise(value)`

Παράμετροι:

- `value`: Η τιμή που θα ελεγχθεί.

### Τοπική εισαγωγή συνάρτησης

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // ἀληθές
console.log(isPromise(b)); // ψευδές
console.log(isPromise(123)); // ψευδές
console.log(isPromise(null)); // ψευδές

```

### Καθολική εισαγωγή αντικειμένου

Για εισαγωγή των συναρτήσεων ως καθολικών μεθόδων αντικειμένου χρησιμοποιήστε:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Η ακόλουθη μέθοδος θα είναι διαθέσιμη καθολικά:

- `Type.isPromise(value)`

## Ανάλυση συναρτήσεων

Εδώ τεκμηριώνεται μια πινακοποιημένη ανάλυση της εξόδου που προκύπτει όταν δίνονται διαφορετικές παράμετροι στις
συναρτήσεις: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>Το αρχείο δημιουργήθηκε στις 30 January 2026 at 23:52:36 (UTC) με τη χρήση του *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** από τον/την *
*[Roland Milto](https://roland-milto.de/)**.</small>