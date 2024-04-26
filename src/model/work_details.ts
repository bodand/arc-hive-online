import {WorkDetailsDto} from "./dto/work_details";

/**
 * A model class containing extra fields for books that can be separately
 * requested.
 */
class WorkDetails {
  description?: string;

  /**
   * Constructs a details object from the given details DTO.
   * @param dto The DTO to create the object from.
   */
  constructor(dto: WorkDetailsDto) {
    if (typeof dto.description === "string"
      || typeof dto.description === "undefined") {
      this.description = dto.description || "";
    } else {
      this.description = dto.description.value || "";
    }
  }
}
