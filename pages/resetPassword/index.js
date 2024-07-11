import styles from "./ResetPassword.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/router";
import variables  from "../../variables.json";


export default function resetPassword() {
  const { query } = useRouter();
  const [ reset, setReset ] = useState(false);

  const token = query.token;

  const {
    register,
    handleSubmit,
    formState: { errors: errorsRegister },
    watch,
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    axios
      .post(
        `${variables.DATA_URL}/user/resetPassword`,
        {
          token: token,
          password: data.password,
        },
        {
          //withCredentials: true,
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      )
      .then(function () {
        setReset(true);
      });
  };

  return (
    <div className={styles.resetPasswordContainer}>
      {!reset ? (
        <p className={styles.resetPasswordTitle}>
          Choisissez un nouveau mot de passe
        </p>
      ) : (
        <p className={styles.resetPasswordSuccess}>
          Votre mot de passe a été mis à jour !
        </p>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.fullInput}>
          <label className={styles.loginLabel}>
            NOUVEAU MOT DE PASSE (12 caractères maximum, dont au moins 1
            caractère spécial
          </label>
          <i
            className={styles.inputEye}
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {!showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </i>
          <input
            className={styles.loginInput}
            type={showPassword == false ? "password" : "text"}
            placeholder="ex: 4!aK*0b2?7"
            {...register("password", {
              required: true,
            })}
          />
        </div>

        <div className={styles.fullInput}>
          <label className={styles.loginLabel}>
            CONFIRMER LE MOT DE PASSE{" "}
          </label>
          <i
            className={styles.inputEye}
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {!showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </i>
          <input
            className={styles.loginInput}
            type={showPassword == false ? "password" : "text"}
            placeholder="ex: 4!aK*0b2?7"
            {...register("verifyPassword", {
              required: true,
              validate: (value) =>
                value === watch("password") ||
                "Les mots de passe doivent être identiques",
              pattern: {
                value:
                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^:;,?µ£¨<>+=&-*]).{1,12}$/,
                message:
                  "Le mot de passe doit contenir au maximum 12 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial",
              },
            })}
          />
        </div>

        {errorsRegister.verifyPassword && (
          <span className={styles.formErrors}>
            {errorsRegister.verifyPassword.message}
          </span>
        )}

        <button className={styles.submitButton} type="submit">
          Modifier
        </button>
      </form>
    </div>
  );
}
