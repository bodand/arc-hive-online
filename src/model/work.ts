import {WorkDto} from "./dto/work";

/**
 *  A class representing a given book.
 */
export class Work {
  /**
   * The OlId of the book.
   */
  olId: string;

  /**
   * The author of the book, if known.
   */
  author?: string;

  /**
   * The title of the book, if known.
   */
  title?: string;

  /**
   * The first year the book was published, if known.
   */
  firstPublishedYear?: number;

  /**
   * The ebook status of the book, if known.
   */
  ebookAccess?: string;

  /**
   * The rating average of the book, if known.
   */
  ratingsAverage?: number;

  /**
   * The number of ratings of the book, if known.
   */
  ratingsCount?: number;

  /**
   * The subjects associated with the book.
   */
  subjects: string[] = [];

  /**
   * The list of known ISBNs of the book.
   */
  isbns: string[] = [];

  /**
   * The OlId of the cover edition used to show the book, if known.
   */
  coverOlId?: string;

  /**
   * The URL of the cover image of the book, if known.
   */
  coverUrl?: string;

  /**
   * Constructs a Work object from a DTO.
   * @param dto The DTO to create from.
   */
  constructor(dto: WorkDto) {
    this.olId = dto.key;
    this.author = dto.author_name?.join(", ");
    this.title = dto.title;
    this.firstPublishedYear = dto.first_published_year;
    this.ebookAccess = dto.ebook_access;
    this.ratingsAverage = dto.ratings_average;
    this.ratingsCount = dto.ratings_count;
    this.subjects = dto.subjects;
    this.isbns = dto.isbn;
    this.coverOlId = dto.cover_edition_key;
  }
}
