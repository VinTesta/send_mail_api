import IUseCase from 'src/v1/business/common/use-case/use-case.interface';
import ISendEmailDto from './dto/input/sendEmail-dto.interface';
import IEmailDto from './dto/output/email-dto.interface';

export default interface ISendEmailUseCase extends IUseCase<ISendEmailDto, IEmailDto> {}