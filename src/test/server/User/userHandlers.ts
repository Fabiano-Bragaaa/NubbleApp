import {BASE_URL, PageAPI} from '@api';
import {USER_PATH, UserApi} from '@domain';
import {http, HttpResponse} from 'msw';

import {userMocked} from './userMocked';

const FULL_URL = `${BASE_URL}${USER_PATH}`;

export const userHandlers = [
  http.get(FULL_URL, async () => {
    const response: PageAPI<UserApi> = userMocked.mockedUserResponse;

    return HttpResponse.json(response, {status: 200});
  }),
  http.get<{userId: string}>(`${FULL_URL}/:userId`, async ({params}) => {
    const {userId} = params;

    const response: UserApi | undefined = userMocked.userList.find(
      user => user.id.toString() === userId,
    );

    if (!response) {
      return HttpResponse.json({error: 'User not found'}, {status: 404});
    }

    return HttpResponse.json(response, {status: 200});
  }),
];
