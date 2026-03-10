# arePromises

## Περιγραφή

Το `arePromises` καθορίζει αν όλα τα στοιχεία σε έναν πίνακα είναι στιγμιότυπα `Promise`.

### Περίπτωση χρήσης

Επικυρώστε ότι μια δυναμικά δημιουργημένη ή εξωτερικά παρεχόμενη λίστα περιέχει μόνο promises πριν τα συγκεντρώσετε (
π.χ. με `Promise.all`).

> **Σημείωση για χρήστες TypeScript:**
>
> Χρησιμοποιήστε το `arePromises` για να επικυρώσετε `unknown[]` πριν καλέσετε το `Promise.all` ή άλλες λειτουργίες μόνο
> για promises· επιστρέφει `false` για κενές συστοιχίες.

### Πλεονεκτήματα

- Εξασφαλίζει ότι κάθε στοιχείο είναι ένα `Promise` πριν προχωρήσετε με λογική ειδική για promises.
- Επιστρέφει `false` για μη-γεμάτους πίνακες, αποτρέποντας αμφίσημα αποτελέσματα για κενές εισόδους.
- Χρήσιμο ως έλεγχος (guard) κατά τον χρόνο εκτέλεσης όταν εργάζεστε με `unknown[]` από εξωτερικές πηγές.

## Χρήση

### Σύνταξη

Συνάρτηση:

- `arePromises(array)`

Παράμετροι:

- `array`: Ο πίνακας που θα ελεγχθεί για στιγμιότυπα Promise.

### Τοπική εισαγωγή συνάρτησης

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // το values είναι ένας πίνακας από στιγμιότυπα Promise κατά τον χρόνο εκτέλεσης
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Καθολική εισαγωγή αντικειμένου

Για εισαγωγή των συναρτήσεων ως καθολικών μεθόδων αντικειμένου χρησιμοποιήστε:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Η ακόλουθη μέθοδος θα είναι διαθέσιμη καθολικά:

- `Type.arePromises(array)`

## Ανάλυση συναρτήσεων

Εδώ τεκμηριώνεται μια πινακοποιημένη ανάλυση της εξόδου που προκύπτει όταν δίνονται διαφορετικές παράμετροι στις
συναρτήσεις: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>Το αρχείο δημιουργήθηκε στις 30 January 2026 at 23:48:04 (UTC) με τη χρήση του *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** από τον/την *
*[Roland Milto](https://roland-milto.de/)**.</small>