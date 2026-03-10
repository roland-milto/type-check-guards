# areSets

## 설명

주어진 비어 있지 않은 배열이 `Set` 인스턴스만 포함하는지 확인하며, 그렇다면 `true`를 반환하고 그렇지 않으면 `false`를 반환합니다.

### 사용 사례

각 set을 처리하기 전에 값(예: 사용자 입력, JSON 파싱, 또는 외부 API로부터 온 값)이 비어 있지 않은 `Set` 객체 배열인지 검증합니다.

> **TypeScript 사용자를 위한 참고:**
>
> `areSets`를 사용해 알 수 없는 입력을 검증한 뒤, 각 요소에 대해 `Set` API(예: `.size`, `.has`, `.add`)를 호출하며 순회하세요.

### 장점

- 입력이 비어 있지 않은 배열이며 모든 요소가 `Set` 인스턴스일 때만 `true`를 반환합니다.
- 배열에 요소가 없을 때 `false`를 반환하여 빈 배열에 대한 오탐을 방지합니다.
- 각 요소에 대해 `Set` 전용 연산을 수행하기 전에 런타임 가드로 유용합니다.

## 사용법

### 문법

함수:

- `areSets(array)`

매개변수:

- `array`: `Set` 인스턴스인지 확인할 배열입니다.

### 로컬 함수 임포트

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a는 런타임에서 Set 인스턴스의 배열이다
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // false
console.log(areSets(c)); // false
```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.areSets(array)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [areSets](../_analysis/areSets.md)

<br>

---

<small>이 파일은 2026년 1월 30일 오후 11:14:03 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>