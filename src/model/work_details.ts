import {WorkDetailsDto} from "./dto/work_details";
import {Author} from "./author";

/**
 * A model class for links relating to a book.
 */
export class WorkLink {
  /**
   * The human friendly title of the link. May not exist.
   */
  title?: string;

  /**
   * The URL.
   */
  url: string;

  /**
   * Constructs a WorkLink object from a dto as received from the API.
   * @param dto The dto to construct form.
   */
  constructor(dto: { title?: string; url: string }) {
    this.title = dto.title;
    this.url = dto.url;
  }

  /**
   * The title to show to the users.
   */
  get renderTitle() {
    if (this.title === undefined) return this.url;
    return this.title;
  }
}

/**
 * A model class containing extra fields for books that can be separately
 * requested.
 */
export class WorkDetails {
  /**
   * The OpenLibrary ID of the book.
   */
  olid: string;

  /**
   * The title of the book.
   */
  title?: string;

  /**
   * A list of links related to the book on other sites.
   */
  links: WorkLink[];

  /**
   * A list of tags assigned to this book.
   */
  subjects: string[];

  /**
   * The author of the book.
   */
  authors: Author[];

  /**
   * Description of the book. Markdown.
   */
  description?: string;

  /**
   * Cover url.
   */
  cover?: string;

  /**
   * Constructs a details object from the given details DTO.
   * @param dto The DTO to create the object from.
   * @param authors The author(s) of this work.
   */
  constructor(dto: WorkDetailsDto, authors: Author[]) {
    this.olid = dto.key;
    this.title = dto.title;
    this.links = dto.links?.map(x => new WorkLink(x)) || [];
    this.subjects = dto.subjects || [];
    this.authors = authors;

    if (dto.covers !== undefined && dto.covers.length > 0) {
      this.cover = dto.covers[0];
    }

    if (typeof dto.description === "string"
      || typeof dto.description === "undefined") {
      this.description = dto.description || "";
    } else {
      this.description = dto.description.value || "";
    }
  }
}
