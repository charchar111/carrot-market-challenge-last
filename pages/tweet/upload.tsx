import Input from "@/components/Input";
import FormButton from "@/components/FormButton";
import Layout from "@/components/Layout";
import { FieldErrors, useForm } from "react-hook-form";
import useMutation from "@/lib/client/useMutation";
import { useEffect } from "react";
import { useRouter } from "next/router";

interface FormAccount {
  content: string;
}

export default function TweetUpload() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormAccount>();
  const [mutation, { data, isLoading }] = useMutation("/api/tweet/upload");
  const onValid = function (formData: FormAccount) {
    // console.log(formData);
    if (isLoading) return;
    if (data) return;
    // 중복 발송 방지

    mutation(formData);
  };

  useEffect(() => {
    if (data?.ok) router.push("/");
  }, [data]);
  // console.log(data, error, isLoading);

  const onInvalid = function (error: FieldErrors) {
    console.log(error);
  };

  return (
    <Layout title="Tweet">
      <div>
        <form
          className="flex flex-col p-2"
          action=""
          onSubmit={handleSubmit(onValid, onInvalid)}
        >
          <Input
            label="text"
            register={{ ...register("content", { required: true }) }}
          />
          <FormButton text="Tweet" />
        </form>
      </div>
    </Layout>
  );
}
