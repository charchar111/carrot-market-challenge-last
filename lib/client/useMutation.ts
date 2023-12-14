import { useState } from "react";
import { ResponseData } from "../server/withHandler";

type IuseMutation = [
  (formData: any) => Promise<void>,
  {
    data: ResponseData | undefined;
    isLoading: boolean;
    error: ResponseData | undefined;
  }
];

export default function useMutation(url: string): IuseMutation {
  const [data, setData] = useState<ResponseData | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<ResponseData | undefined>();

  const mutation = async function (formData: any) {
    setIsLoading(true);
    setError(undefined);
    setData(undefined);
    const response: ResponseData = await (
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
    ).json();
    setIsLoading(false);

    if (!response?.ok) {
      setError(response);
      return;
    }
    setData(response);
    return;
  };

  return [mutation, { data, isLoading, error }];
}
