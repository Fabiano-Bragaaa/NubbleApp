export interface PostComment {
  id: number;
  text: string;
  createdAt: string;
  createAtRelative: string; // '1 h, 2 sem'
  author: {
    id: number;
    profileURL: string;
    name: string;
    userName: string;
  };
}

export interface PostCommentAPI {
  id: number; //111;
  message: string; //'Solvo audeo thesis libero despecto calculus valeo.';
  user_id: number; // 9;
  post_id: number; // 1;
  created_at: string; //'2025-03-31T14:39:50.000-03:00';
  updated_at: string; //'2025-04-03T12:40:56.968-03:00';
  user: {
    id: number; // 9;
    first_name: string; //'Carla';
    last_name: string; // 'Santos';
    username: string; // 'carlasantos';
    email: string; // 'carlasantos@coffstack.com';
    profile_url: string; //'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/2-carla.png';
    is_online: false;
    full_name: string; // 'Carla Santos';
  };
  meta: any; //{};
}
