import {SearchField} from "./search_field";

/**
 * A search field type that allows querying for multiple fields. The generated
 * query explicitly states the provided fields, to search the value for.
 */
export class ComplexSearch implements SearchField {
  /**
   * The title to search for.
   */
  title?: string;

  /**
   * The title to search for.
   */
  author?: string;

  /**
   * A subject/theme/keyword to search for.
   * Depending on the <see cref="SubjectTotal"/> field, this field is matched
   * totally, without fuzziness.
   *
   * @see
   */
  subject_total: boolean = false;

  /**
   * A place to search for. Could be fictional, or real, that is related to the
   * book.
   */
  place?: string;

  /**
   *  A person to search for, either real, or fictional that is related to the
   *  book or its story.
   */
  person?: string;

  /**
   * A language to search for that is related to the book. Either the language
   * it is written, or a language mentioned in the story.
   */
  language?: string;

  /**
   * The publisher that published the book.
   */
  publisher?: string;

  /**
   * Only find books published after this date.
   */
  publish_after?: string;

  /**
   * Only find books published before this date.
   */
  published_before?: string;

  /**
   * @inheritdoc
   */
  to_query_string(): string {
    let builder: string[] = [];

    this.add_field(builder, "title", this.title);
    this.add_field(builder, "author", this.author);

    let subj_key = this.subject_total ? "subject_key" : "subject";
    this.add_field(builder, subj_key, this.author);

    this.add_field(builder, "place", this.place);
    this.add_field(builder, "person", this.person);
    this.add_field(builder, "language", this.language);
    this.add_field(builder, "publisher", this.publisher);

    if (this.publish_after !== null || this.published_before !== null) {
      let before = this.published_before || "*";
      let after = this.publish_after || "*";
      this.add_field(builder, "publish_year", `[${after} TO ${before}]`)
    }

    return builder.join(',')
  }

  private add_field(buf: string[], field_name: string, value: string | null | undefined) {
    if (value === null || value === undefined) return;

    buf.push(`${field_name}:${value.replaceAll(' ', '+')}`);
  }
}
