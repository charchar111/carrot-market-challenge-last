import React, { useEffect } from "react";

import Layout from "@/components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";
import FloatButton from "@/components/Float-Button";

export default function RootIndex() {
  const router = useRouter();
  const { data, error, isValidating } = useSWR("/api/users/confirm/myLogin", {
    revalidateOnFocus: false,
  });
  console.log(data, error, isValidating);
  useEffect(() => {
    if (!isValidating && !data.ok) router.push("/create-account");
  }, [data, isValidating]);

  return (
    <Layout title="Home">
      <div>
        <FloatButton />
      </div>
    </Layout>
  );
}
