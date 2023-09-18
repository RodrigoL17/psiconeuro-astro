// import { useEffect, useState } from "react";
import { ReviewCard } from "./ReviewCard";
import { Carousel, IconButton } from "@material-tailwind/react";
import { GoogleReviews } from "../utils/const";
import {
  IconSquareRoundedArrowLeftFilled,
  IconSquareRoundedArrowRightFilled,
} from "@tabler/icons-react";

export const Reviews = () => {
  // const [reviews, setReviews] = useState<Review[]>([]);

  // const scriptLoaded = useGooglePlacesScript()

  // useEffect(() => {
  //   if (scriptLoaded) {
  //     useGetGoogleReviews(setReviews)
  //   }

  // }, [scriptLoaded]);

  return (
    <>
      <Carousel
        className="rounded-xl align-middle items-center"
        navigation={() => ""}
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 -translate-y-2/4 -translate-x-5 text-[#6e00d3]/50 lt:translate-x-0"
          >
            <IconSquareRoundedArrowLeftFilled className="h-8 w-8 slt:h-10 slt:w-10 lt:h-12 lt:w-12 xls:h-14 xls:w-14"/>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            onClick={handleNext}
            className="!absolute top-2/4 !right-4 -translate-y-2/4 text-[#6e00d3]/50 translate-x-5 lt:translate-x-0"
          >
            <IconSquareRoundedArrowRightFilled className="h-8 w-8 slt:h-10 slt:w-10 lt:h-12 lt:w-12 xls:h-14 xls:w-14"/>
          </IconButton>
        )}
      >
        {GoogleReviews.map((review) => (
          <ReviewCard key={review.author_name} review={review} />
        ))}
      </Carousel>
    </>
  );
};
