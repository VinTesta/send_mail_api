import { AttachmentExtensions, AttachmentTypes } from "../../../common/type/common.types";
import Attachment from "./attachment.entity";

describe("Attachment module", () => {
  it("Should CREATE a attachment", () => {
    const attachment = new Attachment('foto-cv-jose', AttachmentExtensions.PNG, AttachmentTypes.JPG, 'UklGRk6dAABXRUJQVlA4IEKdAACwmAKdASo');

    expect(attachment).toBeDefined();
    expect(attachment.name).toBeTruthy();
  })

  it("Should throw ERROR on create a attachment with no name", () => {
    expect(() => new Attachment('', AttachmentExtensions.PNG, AttachmentTypes.JPG, 'UklGRk6dAABXRUJQVlA4IEKdAACwmAKdASo')).toThrow("Name cannot be null");
  })

  it("Should throw ERROR on create a attachment with no content", () => {
    expect(() => new Attachment('attachment-test', AttachmentExtensions.PNG, AttachmentTypes.JPG, '')).toThrow("Content cannot be null");
  })
})