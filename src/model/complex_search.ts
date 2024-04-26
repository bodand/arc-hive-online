import {SearchField} from "./search_field";

/**
 * A search field type that allows querying for multiple fields. The generated
 * query explicitly states the provided fields, to search the value for.
 */
export class ComplexSearch implements SearchField {
  /**
   * @inheritdoc
   */
  to_query_string(): string {
    throw new Error("Method not implemented.");
  }

}
