import { IsNotEmpty, Length } from 'class-validator';

export class CreateMembersBody {
  @IsNotEmpty()
  @Length(5, 100, {
    message: 'The member name should be between 5 and 100 characters.',
  })
  name: string;

  @IsNotEmpty({
    message: 'The member function should not be empty.',
  })
  function: string;
}
