# areWeakMaps

## वर्णन

`areWeakMaps` एखादे value हे non-empty array आहे का आणि त्यातील प्रत्येक घटक `WeakMap` आहे का हे तपासते; फक्त त्या
परिस्थितीत `true` परत करते, अन्यथा `false`.

### वापर प्रकरण

Runtime डेटा (उदा., parsed JSON, plugin inputs, किंवा loosely typed configuration) validate करून तो `WeakMap` instances
चा non-empty array आहे याची खात्री करा, मगच iterate करून `WeakMap` methods कॉल करा; कोणताही घटक `WeakMap` नसल्यास किंवा
array रिकामा असल्यास `false` परत करते.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> अज्ञात input ला non-empty `WeakMap[]` म्हणून वापरण्यापूर्वी validate करण्यासाठी `areWeakMaps` वापरा; रिकाम्या arrays
> साठी ते `false` परत करते.

### फायदे

- दिलेल्या array मधील प्रत्येक घटक `WeakMap` चा instance आहे याची खात्री करते.
- रिकाम्या array साठी `false` परत करते, त्यामुळे “डेटा नाही” हे चुकून वैध input म्हणून स्वीकारले जाणे टळते.
- सर्व items वर `WeakMap`-विशिष्ट operations करण्यापूर्वी guard म्हणून उपयुक्त.

## वापर

### सिंटॅक्स

फंक्शन:

- `areWeakMaps(array)`

पॅरामीटर्स:

- `array`: `WeakMap` instances आहेत का हे तपासण्यासाठीचा array.

### लोकल फंक्शन इम्पोर्ट

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // list हा WeakMap उदाहरणांचा रिकामा नसलेला अ‍ॅरे आहे
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // रिकामा नसलेला WeakMap[] नाही
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.areWeakMaps(array)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>ही फाइल 30 January 2026 at 13:38:17 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>