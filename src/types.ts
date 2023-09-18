export interface Review {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
}

export interface Service {
  title: string;
  short_title: string;
  img_src?: string;
  description: string;
  duration: number;
  max_duration?: number;
  url_path: string;
  mode: string;
}

export type Services = Array<Service>;
