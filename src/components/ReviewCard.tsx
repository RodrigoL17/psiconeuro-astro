import { RatingStars } from "./RatingStars";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { type Review } from "../types.ts";

export const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <Card
      color="transparent"
      shadow={false}
      className="w-full px-2 py-10 tb:px-14 slt:px-16 lt:px-20 h-full flex justify-center"
    >
      <div className="bg-white rounded-xl p-6 shadow-xl shadow-[#d5a8ff]/30">
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="mx-0 flex items-center gap-4 pt-0 pb-8"
        >
          <Avatar
            className="rounded-full h-10 w-10 slt:w-14 slt:h-14 lt:h-16 lt:w-16 xls:h-20 xls:w-20"
            src={review.profile_photo_url}
            alt={`Avatar of ${review.author_name}`}
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <Typography variant="h3" className="text-base tb:text-lg slt:text-xl lt:text-2xl font-primary">
                {review.author_name}
              </Typography>
              <div className="flex items-center gap-0">
                <RatingStars rating={review.rating} />
              </div>
            </div>
            <Typography className="text-[#6e00d3] text-xs slt:text-sm">
              {review.relative_time_description}
            </Typography>
          </div>
        </CardHeader>
        <CardBody className="mb-6 p-0">
          <Typography className="text-sm  slt:text-base">{review.text}</Typography>
        </CardBody>
      </div>
    </Card>
  );
};
