/**
 * The DTO class for receiving the data from the Ol API endpoints.
 */
export interface WorkDto {
  /**
   * The name of the authors who worked on this book.
   */
  author_name: string[];

  /**
   * The OlId of the book.
   */
  key: string;

  /**
   * The title of this book.
   */
  title: string | undefined;

  /**
   * The OlId of the edition of the book, that is shown on the cover.
   */
  cover_edition_key: string | undefined;

  /**
   * The year the book was first published.
   */
  first_published_year: number | undefined;

  /**
   * The current e-book status of the book.
   */
  ebook_access: "no_ebook" | "printdisabled" | "borrowable" | "public" | undefined;

  /**
   * The average rating of this book.
   */
  ratings_average: number | undefined;

  /**
   * The number of ratings this book has.
   */
  ratings_count: number | undefined;

  /**
   * The list of subjects assigned to this book.
   */
  subjects: string[];

  /**
   * The list of ISBNs assigned to the editions of this book.
   */
  isbn: string[];
}
