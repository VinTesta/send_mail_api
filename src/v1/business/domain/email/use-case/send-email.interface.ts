import IUseCase from "../../../common/use-case/use-case.interface";
import ISendEmailDto from "./dto/input/send-email-dto.interface";
import IEmailOutputDto from "./dto/output/email-output-dto.interface";

export default interface ISendEmail extends IUseCase<ISendEmailDto, IEmailOutputDto> { }