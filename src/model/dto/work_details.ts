/**
 * A DTO used to communication with the details API of the OpenLibrary servers.
 */
export interface WorkDetailsDto {
  /**
   * The OlId of the book.
   */
  key: string;

  /**
   * The title of this book.
   */
  title?: string;

  /**
   * The authors of this book.
   */
  authors?: { author: { key: string } }[]

  /**
   * A description for the book, this details object relates to.
   */
  description?: string | { value?: string };

  /**
   * A list of links related to this book.
   */
  links?: { title?: string, url: string }[];

  /**
   * The set of subjects assigned to this book.
   */
  subjects?: string[];

  /**
   * Covers.
   */
  covers?: string[];
}
