import makeTimeFormat from "@/lib/client/makeTimeFormat";
import useMutation from "@/lib/client/useMutation";
import { tweetResponse } from "@/pages/tweet/[id]";
import { User } from "@prisma/client";

import { KeyedMutator } from "swr";

interface tweetData {
  content: string;

  createdAt: any;

  id: number;

  image: string;

  updatedAt: any;

  userId: number;

  user: User;
  _count: { Favorites: number };
}

interface TweetItemProps {
  tweet: tweetData | undefined;
  mutateFavorite?: KeyedMutator<tweetResponse>;
  isValidating?: boolean;
  isLiked?: boolean;
}

export default function TweetItem({
  tweet,
  mutateFavorite,
  isValidating,
  isLiked,
}: TweetItemProps) {
  // console.log("tweet", tweet);

  const [toggleFavorite] = useMutation(`/api/tweet/${tweet?.id}/favorite`);
  // console.log("item-id", tweet?.id);

  const onClickHeart = function () {
    if (!tweet?.id) return;
    if (isValidating) return;
    if (!mutateFavorite) return;
    toggleFavorite({});
    mutateFavorite(
      (prev) =>
        prev && {
          ...prev,
          tweet: {
            ...prev.tweet,
            _count: {
              Favorites: !prev.isLiked
                ? prev.tweet._count.Favorites + 1
                : prev.tweet._count.Favorites - 1,
            },
          },
          isLiked: !prev.isLiked,
        },
      false
    );
  };
  return (
    <div className="tweet-item border-b-2 mb-10 hover:bg-gray-100 ">
      <div className="item-header flex justify-between ">
        <div className="item__profile flex space-x-5 items-center">
          <div className="profile__img   w-8 h-8 bg-gray-400 rounded-full"></div>
          <div className="flex space-x-2 items-center">
            <h6 className="font-semibold">{tweet?.user?.name}</h6>
            <p className="text-gray-400 text-sm">{tweet?.user.username}</p>

            <p className="text-gray-400 text-sm">
              - {makeTimeFormat(tweet?.updatedAt)}
            </p>
          </div>
        </div>
        <div className="item__more">
          <span className="h-6 w-6 block">
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="item-content p-5 whitespace-pre-wrap">
        <p>{tweet?.content}</p>
      </div>
      <div className="item-active flex justify-around text-gray-600  ">
        <div className="item-active__row flex space-x-2 hover:text-orange-500 pb-3 cursor-pointer">
          <span>
            <svg
              className="h-6 "
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
          </span>
          <span> 0</span>
        </div>
        <div
          className="item-active__row flex space-x-2 hover:text-orange-500 pb-3 cursor-pointer"
          onClick={onClickHeart}
        >
          <span>
            <svg
              fill={isLiked ? "currentColor" : "none"}
              className={`h-6 ${isLiked ? `text-orange-500` : ""}`}
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </span>
          <span>{tweet?._count.Favorites}</span>
        </div>
      </div>
    </div>
  );
}
