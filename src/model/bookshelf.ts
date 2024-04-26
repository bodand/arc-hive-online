import {BookshelfDto} from "./dto/bookshelf";

/**
 * A model class representing a bookshelf entity on the OpenLibrary API.
 * It stores data about the number of people who are reading, already have read
 * or just want to read a given book.
 */
export class Bookshelf {
  /**
   * The number of people who want to read this book in the future.
   */
  want_to_read: number;

  /**
   * The number of people currently reading this book.
   */
  current: number;

  /**
   * The number of people who have already read this book.
   */
  already_read: number;

  /**
   * A constructor that creates a client-side model object from the API
   * endpoint's DTO class.
   * @param dto The DTO to use for the initialization of the model.
   */
  constructor(dto: BookshelfDto) {
    this.want_to_read = dto.want_to_read || 0;
    this.current = dto.currently_reading || 0;
    this.already_read = dto.already_read || 0;
  }
}
