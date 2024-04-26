/**
 * Interface representing an abstract type that can, from itself, generate a
 * valid query string for OpenLibrary.
 */
export interface SearchField {
  /**
   * Generates an OpenLibrary query string from the current object.
   * @returns An OpenLibrary query string for this object.
   */
  to_query_string(): string;
}
