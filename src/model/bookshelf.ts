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
   * The total sum of all data present.
   */
  get total() {
    let want = this.want_to_read;
    let current = this.current;
    let done = this.already_read;

    if (want <= 0) want = 1;
    if (current <= 0) current = 1;
    if (done <= 0) done = 1;

    return want + current + done;
  }

  /**
   * Percentage of responses who want to read this book in the future.
   */
  get want_percentage() {
    return this.count_parcentage(this.want_to_read)
  }

  /**
   * Percentage of responses who are currently reading this book.
   */
  get current_percentage() {
    return this.count_parcentage(this.current)
  }

  /**
   * Percentage of responses who have read this book.
   */
  get read_percentage() {
    return this.count_parcentage(this.already_read)
  }

  private count_parcentage(cnt: number) {
    if (cnt === 0) return 1 / this.total * 100;
    return cnt / this.total * 100;
  }

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
