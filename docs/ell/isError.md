# isError

## Περιγραφή

Ελέγχει αν μια δεδομένη `value` είναι στιγμιότυπο του `Error`.

### Περίπτωση χρήσης

Χρησιμοποίησε το `isError` όταν λαμβάνεις μια τιμή `unknown` (όπως από ένα μπλοκ `catch`, ένα callback ή μια εξωτερική
βιβλιοθήκη) και χρειάζεται να προσδιορίσεις με ασφάλεια αν είναι `Error` πριν διαβάσεις τα `message`, `name` ή `stack`.

> **Σημείωση για χρήστες TypeScript:**
>
> Χρησιμοποίησε το `isError` για να προστατεύσεις τιμές `unknown` (π.χ. από `catch`) πριν τις αντιμετωπίσεις ως `Error`.

### Πλεονεκτήματα

- Παρέχει έναν απλό έλεγχο χρόνου εκτέλεσης για το αν μια τιμή είναι στιγμιότυπο του `Error`.
- Βοηθά στον περιορισμό άγνωστων εισόδων πριν από την πρόσβαση σε ιδιότητες του `Error` όπως `message` ή `stack`.
- Μειώνει τον κίνδυνο εξαιρέσεων χρόνου εκτέλεσης κατά τον χειρισμό τιμών από `catch`, εξωτερικά API ή πηγές χωρίς
  τύπους.

## Χρήση

### Σύνταξη

Συνάρτηση:

- `isError(value)`

Παράμετροι:

- `value`: Η τιμή που θα ελεγχθεί σε σχέση με τον τύπο `Error`.

### Τοπική εισαγωγή συνάρτησης

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

### Καθολική εισαγωγή αντικειμένου

Για εισαγωγή των συναρτήσεων ως καθολικών μεθόδων αντικειμένου χρησιμοποιήστε:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Η ακόλουθη μέθοδος θα είναι διαθέσιμη καθολικά:

- `Type.isError(value)`

## Ανάλυση συναρτήσεων

Εδώ τεκμηριώνεται μια πινακοποιημένη ανάλυση της εξόδου που προκύπτει όταν δίνονται διαφορετικές παράμετροι στις
συναρτήσεις: [isError](../_analysis/isError.md)

<br>

---

<small>Το αρχείο δημιουργήθηκε στις 6 February 2026 at 12:45:13 (UTC) με τη χρήση του *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** από τον/την *
*[Roland Milto](https://roland-milto.de/)**.</small>