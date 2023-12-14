import Input from "../components/Input";
import FormButton from "../components/FormButton";
import Layout from "../components/Layout";
import { FieldErrors, useForm } from "react-hook-form";

interface FormAccount {
  username: string;
  email: string;
  password: string;
}

export default function CreateAccount() {
  const { register, handleSubmit } = useForm<FormAccount>();
  const onValid = function (formData: FormAccount) {
    console.log(formData);
    fetch("/api/users/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

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
