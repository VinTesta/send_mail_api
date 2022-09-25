import { AttachmentExtensions, AttachmentTypes } from "../../../../src/v1/business/common/type/common.types";
import Attachment from "../../../../src/v1/business/domain/attachment/entity/attachment.entity";

describe("Attachment module", () => {
  test("Should CREATE a attachment", () => {
    const attachment = new Attachment('foto-cv-jose', AttachmentExtensions.PNG, AttachmentTypes.JPG, 'UklGRk6dAABXRUJQVlA4IEKdAACwmAKdASo');

    expect(attachment).toBeDefined();
    expect(attachment.name).toBeTruthy();
  })

  test("Should throw ERROR on create a attachment with no name", () => {
    expect(() => new Attachment('', AttachmentExtensions.PNG, AttachmentTypes.JPG, 'UklGRk6dAABXRUJQVlA4IEKdAACwmAKdASo')).toThrow("Name cannot be null");
  })

  test("Should throw ERROR on create a attachment with no content", () => {
    expect(() => new Attachment('attachment-test', AttachmentExtensions.PNG, AttachmentTypes.JPG, '')).toThrow("Content cannot be null");
  })
})