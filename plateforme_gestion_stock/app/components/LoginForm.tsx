"use client";
import { useForm } from "react-hook-form";
import "./Login.css";

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    console.log("Login:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 bg-slate-900 p-6 rounded-xl border border-slate-800"
    >
      <h2 className="text-xl font-semibold text-white">Connexion</h2>

      {/* Email */}
      <div>
        <label className="text-slate-300 text-sm">Email</label>
        <input
          type="email"
          className="w-full bg-slate-800 border border-slate-700 text-white px-3 py-2 rounded-lg mt-1"
          placeholder="exemple@domaine.com"
          {...register("email", {
            required: "Email obligatoire",
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Format email invalide",
            },
          })}
          onBlur={() => trigger("email")}
        />
        {errors.email && (
          <p className="text-red-400 text-sm">{errors.email.message}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <label className="text-slate-300 text-sm">Mot de passe</label>
        <input
          type="password"
          className="w-full bg-slate-800 border border-slate-700 text-white px-3 py-2 rounded-lg mt-1"
          placeholder="••••••••"
          {...register("password", {
            required: "Mot de passe obligatoire",
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
              message: "Min 8 caractères, 1 maj, 1 min, 1 chiffre",
            },
          })}
          onBlur={() => trigger("password")}
        />
        {errors.password && (
          <p className="text-red-400 text-sm">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-lg"
      >
        Se connecter
      </button>
    </form>
  );
}
