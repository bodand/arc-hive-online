import {AuthorDto} from "./dto/author";

/**
 * Model class representing an author in the OpenLibrary API.
 */
export class Author {
  /**
   * The name of the author.
   */
  name: string

  /**
   * Alternative names of the author, i.e. pen names.
   */
  alt_names: string[];

  /**
   * The link of the author on other sources.
   */
  link?: string;

  /**
   * Constructs an Author object from an author dto entity.
   * @param dto The dto to construct the author from.
   */
  constructor(dto: AuthorDto) {
    this.name = dto.name || "Unknown author";
    this.alt_names = dto.alternate_names || [];
    this.link = dto.wikipedia;
    if (this.link === undefined
      && dto.links !== undefined
      && dto.links.length > 0) {
      this.link = dto.links[0].url;
    }
  }
}
