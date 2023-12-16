import useSWR from "swr";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import TweetItem from "@/components/tweet-item";
import { User } from "@prisma/client";

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

export interface tweetResponse {
  ok: boolean;
  tweet: tweetData;
  isLiked: boolean;
}

export default function TweetIndex() {
  const router = useRouter();
  const { data, isValidating } = useSWR("/api/users/confirm/myLogin", {
    revalidateOnFocus: false,
  });
  const { id } = router.query;
  const {
    data: tweetData,
    isValidating: tweetIsValidating,
    mutate: mutateFavorite,
  } = useSWR<tweetResponse>(!id ? null : `/api/tweet/${id.toString()}`);

  useEffect(() => {
    if (!isValidating && !data?.ok) router.push("/create-account");
  }, [data, isValidating]);

  return (
    <Layout title="tweet">
      <div>
        <TweetItem
          tweet={tweetData?.tweet}
          mutateFavorite={mutateFavorite}
          isValidating={tweetIsValidating}
          isLiked={tweetData?.isLiked}
        />
      </div>
    </Layout>
  );
}
