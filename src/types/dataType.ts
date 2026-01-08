// Import: Interfaces and types.
import {Primitive} from "./primitive.js";
import {NonPrimitives} from "./nonPrimitives.js";

/**
 * Represents possible data types that can be encountered or used.
 *
 * This type includes various primitive data types, specialized JavaScript
 * objects, and custom string-based types.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-08
 */
export type DataType = Primitive | NonPrimitives;