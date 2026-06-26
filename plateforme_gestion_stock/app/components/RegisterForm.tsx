"use client";
import { useForm } from "react-hook-form";
import "./RegisterForm.css";

interface RegisterFormData {
  nom: string;
  prenom: string;
  adresse: string;
  email: string;
  password: string;
  confirmPassword: string;
  departement: string;
  matricule: string;
}

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
  } = useForm<RegisterFormData>();

  const onSubmit = (data: RegisterFormData) => {
    console.log("Inscription:", data);
  };

  const password = watch("password");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 bg-slate-900 p-6 rounded-xl border border-slate-800"
    >
      <h2 className="text-xl font-semibold text-white">Inscription</h2>

      {/* Nom */}
      <div>
        <label className="text-slate-300 text-sm">Nom</label>
        <input
          className="w-full bg-slate-800 border border-slate-700 text-white px-3 py-2 rounded-lg mt-1"
          {...register("nom", {
            required: "Nom obligatoire",
            pattern: {
              value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/,
              message: "Nom invalide",
            },
          })}
          onBlur={() => trigger("nom")}
        />
        {errors.nom && <p className="text-red-400">{errors.nom.message}</p>}
      </div>

      {/* Prénom */}
      <div>
        <label className="text-slate-300 text-sm">Prénom</label>
        <input
          className="w-full bg-slate-800 border border-slate-700 text-white px-3 py-2 rounded-lg mt-1"
          {...register("prenom", {
            required: "Prénom obligatoire",
            pattern: {
              value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/,
              message: "Prénom invalide",
            },
          })}
          onBlur={() => trigger("prenom")}
        />
        {errors.prenom && (
          <p className="text-red-400">{errors.prenom.message}</p>
        )}
      </div>

      {/* Adresse */}
      <div>
        <label className="text-slate-300 text-sm">Adresse</label>
        <input
          className="w-full bg-slate-800 border border-slate-700 text-white px-3 py-2 rounded-lg mt-1"
          {...register("adresse", {
            required: "Adresse obligatoire",
            pattern: {
              value: /^[A-Za-z0-9À-ÖØ-öø-ÿ\s,'-]+$/,
              message: "Adresse invalide",
            },
          })}
          onBlur={() => trigger("adresse")}
        />
        {errors.adresse && (
          <p className="text-red-400">{errors.adresse.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="text-slate-300 text-sm">Email</label>
        <input
          type="email"
          className="w-full bg-slate-800 border border-slate-700 text-white px-3 py-2 rounded-lg mt-1"
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
          <p className="text-red-400">{errors.email.message}</p>
        )}
      </div>

      {/* Créer mot de passe */}
      <div>
        <label className="text-slate-300 text-sm">Créer mot de passe</label>
        <input
          type="password"
          className="w-full bg-slate-800 border border-slate-700 text-white px-3 py-2 rounded-lg mt-1"
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
          <p className="text-red-400">{errors.password.message}</p>
        )}
      </div>

      {/* Confirmer mot de passe */}
      <div>
        <label className="text-slate-300 text-sm">Confirmer mot de passe</label>
        <input
          type="password"
          className="w-full bg-slate-800 border border-slate-700 text-white px-3 py-2 rounded-lg mt-1"
          {...register("confirmPassword", {
            required: "Confirmation obligatoire",
            validate: (value) =>
              value === password || "Les mots de passe ne correspondent pas",
          })}
          onBlur={() => trigger("confirmPassword")}
        />
        {errors.confirmPassword && (
          <p className="text-red-400">{errors.confirmPassword.message}</p>
        )}
      </div>

      {/* Département */}
      <div>
        <label className="text-slate-300 text-sm">Département</label>
        <input
          className="w-full bg-slate-800 border border-slate-700 text-white px-3 py-2 rounded-lg mt-1"
          {...register("departement", {
            required: "Département obligatoire",
            pattern: {
              value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/,
              message: "Département invalide",
            },
          })}
          onBlur={() => trigger("departement")}
        />
        {errors.departement && (
          <p className="text-red-400">{errors.departement.message}</p>
        )}
      </div>

      {/* Poste matricule */}
      <div>
        <label className="text-slate-300 text-sm">Poste matricule</label>
        <input
          className="w-full bg-slate-800 border border-slate-700 text-white px-3 py-2 rounded-lg mt-1"
          {...register("matricule", {
            required: "Matricule obligatoire",
            pattern: {
              value: /^\d+$/,
              message: "Matricule doit être numérique",
            },
          })}
          onBlur={() => trigger("matricule")}
        />
        {errors.matricule && (
          <p className="text-red-400">{errors.matricule.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-lg"
      >
        S’inscrire
      </button>
    </form>
  );
}
