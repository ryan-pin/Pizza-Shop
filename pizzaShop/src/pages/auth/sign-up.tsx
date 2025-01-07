import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Helmet } from "react-helmet-async";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

const SignUpSchema = z.object({
    restaurantName: z.string(),
    managerName: z.string(),
    phone: z.string(),
    email: z.string().email(),
});

type SignUpData = z.infer<typeof SignUpSchema>;

export function SignUp() {

    const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpData>();

  async function handleSignUp(data: SignUpData) {
    try{
        console.log(data);
    
        await new Promise((resolve) => setTimeout(resolve, 1000));
        
        toast.success("Cadastro realizado com sucesso", {
            action: {
                label: 'Login',
                onClick: () => navigate('/sign-in')
            }
        });
    } catch (error) {
        toast.error("Erro ao cadastrar, tente novamente");
    }
   
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">

      <Button asChild className="absolute right-6 top-6">
          <Link to="/sign-in" className="">Acessar sua conta</Link>
        </Button>


        <div className="w-[350px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tighter">
              Criar uma conta
            </h1>
            <p className="text-sm text-muted-foreground">
              Comece com sua conta de parceiro
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do restaurante</Label>
              <Input id="restaurantName" type="text" {...register("restaurantName")} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="managerName">Seu nome</Label>
              <Input id="managerName" type="text" {...register("managerName")} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">seu telefone</Label>
              <Input id="phone" type="text" {...register("phone")} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">seu email</Label>
              <Input id="email" type="tel" {...register("email")} />
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Criar conta
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
                Ao continuar, você concorda com nossos <a href="#" className="underline underline-offset-2">Termos de Serviço</a> e <a href="#" className="underline underline-offset-2">Política de Privacidade</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
