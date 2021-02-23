import { ApiResponse } from 'types/Api';
import { BaseApiService } from './base.service';
import { Paginate } from '../types/Paginate';

export class UserAPIFactory extends BaseApiService {
  getAllUsers(paginate: Paginate): Promise<ApiResponse> {
    const { page, size } = paginate;
    return this.get('/', {
      params: {
        page,
        results: size,
        seed: 'abc',
      },
    });
  }
}

export const UserService = new UserAPIFactory();
