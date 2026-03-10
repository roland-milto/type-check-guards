# areWeakMaps

## 설명

`areWeakMaps`는 값이 비어 있지 않은 배열이며 모든 요소가 `WeakMap`인지 확인하고, 그 경우에만 `true`를 반환하며 그렇지 않으면 `false`를 반환합니다.

### 사용 사례

런타임 데이터(예: 파싱된 JSON, 플러그인 입력, 또는 느슨하게 타입이 지정된 구성)를 검증하여, 반복하면서 `WeakMap` 메서드를 호출하기 전에 비어 있지 않은 `WeakMap` 인스턴스 배열인지
확인합니다. 어떤 요소라도 `WeakMap`이 아니거나 배열이 비어 있으면 `false`를 반환합니다.

> **TypeScript 사용자를 위한 참고:**
>
> 비어 있지 않은 `WeakMap[]`로 취급하기 전에 알 수 없는 입력을 검증하는 데 `areWeakMaps`를 사용하세요. 빈 배열에 대해서는 `false`를 반환합니다.

### 장점

- 제공된 배열의 모든 요소가 `WeakMap` 인스턴스인지 보장합니다.
- 빈 배열에 대해 `false`를 반환하여 “데이터 없음”을 유효한 입력으로 실수로 받아들이는 것을 방지합니다.
- 모든 항목에 대해 `WeakMap` 전용 작업을 수행하기 전에 가드로 유용합니다.

## 사용법

### 문법

함수:

- `areWeakMaps(array)`

매개변수:

- `array`: `WeakMap` 인스턴스인지 확인할 배열입니다.

### 로컬 함수 임포트

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // list는 WeakMap 인스턴스로 이루어진 비어 있지 않은 배열입니다
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // 비어 있지 않은 WeakMap[]이 아닙니다
}

```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.areWeakMaps(array)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>이 파일은 2026년 1월 30일 오후 1:37:57 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>