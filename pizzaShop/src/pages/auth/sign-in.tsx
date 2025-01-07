import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Helmet } from "react-helmet-async";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const SignInSchema = z.object({
  email: z.string().email(),
});

type SignInData = z.infer<typeof SignInSchema>;

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInData>();

  async function handleSignin(data: SignInData) {

    console.log(data);
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Login realizado com sucesso");
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">

        <Button asChild className="absolute right-6 top-6">
          <Link to="/sign-up" className="">Criar sua conta</Link>
        </Button>

        <div className="w-[350px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tighter">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas no painel do parceiro
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignin)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register("email")} />
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Acessar
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
