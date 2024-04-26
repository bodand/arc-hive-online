/**
 * The DTO representing the data sent by the OpenLibrary API for a bookshelf
 * endpoint.
 */
export interface BookshelfDto {
  /**
   * The number of people who want to read this book in the future.
   */
  want_to_read: number | undefined;

  /**
   * The number of people currently reading this book.
   */
  currently_reading: number | undefined;

  /**
   * The number of people who have already read this book.
   */
  already_read: number | undefined;
}
