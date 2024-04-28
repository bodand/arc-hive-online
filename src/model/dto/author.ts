/**
 * Dto for requesting data about an author entity.
 */
export class AuthorDto {
  /**
   * The primary name of the author.
   */
  name?: string;

  /**
   * Alternative names of the author, e.g. pen names used.
   */
  alternate_names?: string[];

  /**
   * Primary wikipedia link of the author.
   */
  wikipedia?: string;

  /**
   * Auxiliary links related to the author from other sources.
   */
  links?: { url?: string }[];
}
