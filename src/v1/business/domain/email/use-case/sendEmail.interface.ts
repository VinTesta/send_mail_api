import IUseCase from "../../../common/use-case/use-case.interface";
import ISendEmailDto from "./dto/input/sendEmailDto.interface";
import IEmailOutputDto from "./dto/output/emailOutput.interface";

export default interface ISendEmail extends IUseCase<ISendEmailDto, IEmailOutputDto> { }