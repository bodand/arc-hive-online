import {SearchField} from "./search_field";

/**
 * A basic search field that generates a query to match against anything it can
 * find.
 */
export class SimpleSearch implements SearchField {
  /**
   * The value to find a book by. Could be title, author, subject, or anything
   * else related to the book.
   */
  query?: string;

  /**
   * @inheritdoc
   */
  to_query_string(): string {
    return this.query?.replace(' ', "+") || "";
  }
}
