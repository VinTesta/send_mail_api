import { Extension } from "../../../common/type/extension.type";
import Attachment from "./attachment.entity"

describe("Test attachment entity", () => {
  it("Should BE DEFINE a valid attachment", () => {
    const attachment = new Attachment("attachment_name", Extension.JPEG, "oakds1ismdMASKD0I1");
    expect(attachment).toBeInstanceOf(Attachment);
    expect(attachment).toBeTruthy();
  })
})