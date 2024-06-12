"use client";
import { registerUser } from "@/app/actions/authActions";
import { RegisterSchema, registerSchema } from "@/lib/schemas/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import { error } from "console";
import React from "react";
import { useForm } from "react-hook-form";
import { GiPadlock } from "react-icons/gi";

const RegisterForm = () => {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<RegisterSchema>({
    // resolver: zodResolver(registerSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data: RegisterSchema) => {
    console.log(data);

    const result = await registerUser(data);

    if (result.status == "success") {
      console.log("User registered successfully");
    } else {
      if (Array.isArray(result.error)) {
        result.error.forEach((e: any) => {
          const fieldName = e.path.join(".") as "email" | "name" | "password";
          setError(fieldName, { message: e.message });
        });
      } else {
        setError("root.serverError", { message: result.error });
      }
    }
  };
  return (
    <Card className="w-2/5 mx-auto">
      <CardHeader className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-2 items-center text-secondary">
          <div className="flex flex-row items-center gap-3">
            <GiPadlock size={30} />
            <h1 className="text-3xl font-semibold">Register</h1>
          </div>
          <p className="text-neutral-500">Welcome back to NextMatch</p>
        </div>
      </CardHeader>
      <CardBody>
        <form className="pb-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <Input
              label="Name"
              variant="bordered"
              defaultValue=""
              // {...register("name", {required: "Name is required"})}
              {...register("name")}
              isInvalid={!!errors.name}
              errorMessage={errors.name?.message as string}
            />
            <Input
              label="Email"
              variant="bordered"
              defaultValue=""
              // {...register("email", {required: "Email is required"})}
              {...register("email")}
              isInvalid={!!errors.email}
              errorMessage={errors.email?.message as string}
            />
            <Input
              type="password"
              label="Password"
              variant="bordered"
              defaultValue=""
              // {...register("password", {required: "Password is required"})}
              {...register("password")}
              isInvalid={!!errors.password}
              errorMessage={errors.password?.message as string}
            />
            {errors.root?.serverError && (
              <p className="text-danger text-sm">
                {errors.root.serverError.message}
              </p>
            )}
            <Button
              isLoading={isSubmitting}
              isDisabled={!isValid}
              fullWidth
              color="secondary"
              type="submit"
            >
              Register
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
};

export default RegisterForm;
