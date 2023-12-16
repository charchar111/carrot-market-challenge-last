import React, { useEffect } from "react";

import Layout from "@/components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";
import FloatButton from "@/components/Float-Button";
import tweet, { ResponseDataTweet } from "./api/tweet";
import { User } from "@prisma/client";
import makeTimeFormat from "@/lib/client/makeTimeFormat";
import TweetItem from "@/components/tweet-item";

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

interface tweetDatas extends ResponseDataTweet {
  tweets: tweetData[];
}

export default function RootIndex() {
  const router = useRouter();
  const { data, error, isValidating } = useSWR("/api/users/confirm/myLogin", {
    revalidateOnFocus: false,
  });

  const {
    data: tweetData,
    error: tweetError,
    isValidating: tweetIsValidating,
  } = useSWR<tweetDatas>("/api/tweet");

  console.log(data, error, isValidating, tweetData);
  useEffect(() => {
    if (!isValidating && !data?.ok) router.push("/create-account");
  }, [data, isValidating]);

  return (
    <Layout title="Home">
      <div className="p-7">
        {!tweetData?.tweets
          ? null
          : tweetData.tweets.map((tweet, i) => (
              <Link href={`/tweet/${tweet.id}`} key={i}>
                <a href="">
                  <TweetItem tweet={tweet} />
                </a>
              </Link>
            ))}
        <FloatButton />
      </div>
    </Layout>
  );
}
