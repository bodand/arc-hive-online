/**
 * A DTO used to communication with the details API of the OpenLibrary servers.
 */
export interface WorkDetailsDto {
  /**
   * A description for the book, this details object relates to.
   */
  description?: string | { value?: string };
}
