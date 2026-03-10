# areMaps

## 설명

`areMaps`는 주어진 배열이 비어 있지 않고 모든 요소가 `Map` 인스턴스인지 여부를 판단합니다.

### 사용 사례

알 수 없는 입력(예: JSON 파싱, 외부 API, 또는 동적 소스에서 온 값)을 비어 있지 않은 `Map` 객체 목록으로 취급하기 전에 검증합니다.

> **TypeScript 사용자를 위한 참고:**
>
> 빈 배열에는 `false`를 반환하며, 배열이 채워져 있고 모든 요소가 `Map`일 때에만 `true`를 반환합니다.

### 장점

- 모든 요소가 `Map` 인스턴스인지 보장하며, 배열 전체가 검사를 통과할 때에만 `true`를 반환합니다.
- 설계상 빈 배열을 거부하여, “데이터 없음”을 유효한 입력으로 실수로 받아들이는 일을 방지합니다.
- 컬렉션 전반에 걸쳐 `Map` 전용 작업(예: `.get()`, `.set()`, 순회)을 수행하기 전에 가드로 유용합니다.

## 사용법

### 문법

함수:

- `areMaps(array)`

매개변수:

- `array`: 검사할 배열입니다.

### 로컬 함수 임포트

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // items는 런타임에서 Map 인스턴스로 이루어진 비어 있지 않은 배열임이 보장됩니다
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // 다음의 경우 false: 빈 배열, 또는 Map이 아닌 값이 하나라도 포함된 배열
}

```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.areMaps(array)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [areMaps](../_analysis/areMaps.md)

<br>

---

<small>이 파일은 2026년 1월 31일 오후 4:13:10 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>