import Input from "@/components/Input";
import FormButton from "@/components/FormButton";
import Layout from "@/components/Layout";
import { FieldErrors, useForm } from "react-hook-form";
import useMutation from "@/lib/client/useMutation";
import { useEffect } from "react";
import { useRouter } from "next/router";

interface FormAccount {
  username: string;
  email: string;
  password: string;
}

export default function CreateAccount() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormAccount>();
  const [mutation, { data, error, isLoading }] =
    useMutation("/api/users/create");
  const onValid = function (formData: FormAccount) {
    // console.log(formData);
    if (isLoading) return;
    if (data) return;
    // 중복 발송 방지

    mutation(formData);
  };

  useEffect(() => {
    if (data?.ok) router.push("/log-in");
  }, [data]);
  console.log(data, error, isLoading);

  const onInvalid = function (error: FieldErrors) {
    console.log(error);
  };

  return (
    <Layout title="Sign Up">
      <div>
        <form
          className="flex flex-col p-2"
          action=""
          onSubmit={handleSubmit(onValid, onInvalid)}
        >
          <Input
            label="Email"
            register={{ ...register("email", { required: true }) }}
          />
          <Input
            label="Username"
            register={{ ...register("username", { required: true }) }}
          />
          <Input
            label="Password"
            type="password"
            register={{ ...register("password", { required: true }) }}
          />
          <FormButton text="Sign Up" />
        </form>
      </div>
    </Layout>
  );
}
